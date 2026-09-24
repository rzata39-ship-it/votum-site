import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { build, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { ROUTES, renderHead, renderRobots, renderSitemap } from './src/config/seo.js'
import { translations } from './src/i18n/translations.js'
import { resolveSiteEnv, isIndexable } from './src/config/environment.js'

const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/
const ROOT_DIV = '<div id="root"></div>'

// Compiles src/entry-server.jsx for Node (same React plugin and `define`s as
// the client build) and returns its render(url) function.
async function loadRenderer(root, define) {
  const outDir = path.join(root, 'node_modules/.cache/votum-prerender')
  await build({
    configFile: false,
    root,
    mode: 'production',
    logLevel: 'warn',
    plugins: [react()],
    define,
    build: {
      ssr: 'src/entry-server.jsx',
      outDir,
      emptyOutDir: true,
      copyPublicDir: false,
      rollupOptions: { output: { entryFileNames: 'entry-server.js' } },
    },
  })
  const { render } = await import(pathToFileURL(path.join(outDir, 'entry-server.js')).href)
  return render
}

// The site is a SPA, so without this every URL would share one empty page.
// At build time we write one HTML file per route with its own static <head>
// (title / description / canonical / Open Graph / JSON-LD) and the page body
// pre-rendered with react-dom/server, plus sitemap.xml and robots.txt. The
// browser hydrates that markup (main.jsx). The server serves these files and
// answers every other path with 404.html and a real 404 status
// (see vercel.json / nginx.conf).
function staticPages({ indexable, define }) {
  let root
  let outDir
  const seoBlock = (key) => `<!--seo:start-->\n    ${renderHead(key, translations.en.seo, indexable)}\n    <!--seo:end-->`

  return {
    name: 'votum-static-pages',
    configResolved(config) {
      root = config.root
      outDir = path.resolve(config.root, config.build.outDir)
    },
    transformIndexHtml(html) {
      return html.replace(SEO_BLOCK, seoBlock('home'))
    },
    async closeBundle() {
      const indexFile = path.join(outDir, 'index.html')
      if (!fs.existsSync(indexFile)) return
      const indexHtml = fs.readFileSync(indexFile, 'utf8')
      if (!indexHtml.includes(ROOT_DIV)) throw new Error(`index.html must contain ${ROOT_DIV}`)

      const render = await loadRenderer(root, define)

      for (const route of ROUTES) {
        let html = indexHtml.replace(SEO_BLOCK, seoBlock(route.key))
        if (route.prerender) {
          html = html.replace(ROOT_DIV, `<div id="root">${render(route.path)}</div>`)
        }
        const target = path.join(outDir, route.file)
        fs.mkdirSync(path.dirname(target), { recursive: true })
        fs.writeFileSync(target, html)
      }
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), renderSitemap())
      fs.writeFileSync(path.join(outDir, 'robots.txt'), renderRobots(indexable))
    },
  }
}

export default defineConfig(({ mode }) => {
  // SITE_ENV / VERCEL_ENV from the shell or .env files — see src/config/environment.js
  const siteEnv = resolveSiteEnv(loadEnv(mode, process.cwd(), ''))
  // The same decision at runtime (useSeo keeps <meta name="robots"> in sync)
  const define = { 'import.meta.env.VITE_SITE_ENV': JSON.stringify(siteEnv) }

  return {
    plugins: [react(), staticPages({ indexable: isIndexable(siteEnv), define })],
    define,
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  }
})
