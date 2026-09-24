import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { ROUTES, renderHead, renderRobots, renderSitemap } from './src/config/seo.js'
import { translations } from './src/i18n/translations.js'
import { resolveSiteEnv, isIndexable } from './src/config/environment.js'

const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/

// The site is a SPA, so without this every URL would share one <head>.
// At build time we write a copy of index.html per route with its own static
// title / description / canonical / Open Graph tags, plus a real sitemap.xml
// and robots.txt. The server serves these files and answers every other path
// with 404.html and a real 404 status (see vercel.json / nginx.conf).
function staticPages(indexable) {
  let outDir
  const seoBlock = (key) => `<!--seo:start-->\n    ${renderHead(key, translations.en.seo, indexable)}\n    <!--seo:end-->`

  return {
    name: 'votum-static-pages',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    transformIndexHtml(html) {
      return html.replace(SEO_BLOCK, seoBlock('home'))
    },
    closeBundle() {
      const indexFile = path.join(outDir, 'index.html')
      if (!fs.existsSync(indexFile)) return
      const indexHtml = fs.readFileSync(indexFile, 'utf8')

      for (const route of ROUTES) {
        if (route.key === 'home') continue
        const target = path.join(outDir, route.file)
        fs.mkdirSync(path.dirname(target), { recursive: true })
        fs.writeFileSync(target, indexHtml.replace(SEO_BLOCK, seoBlock(route.key)))
      }
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), renderSitemap())
      fs.writeFileSync(path.join(outDir, 'robots.txt'), renderRobots(indexable))
    },
  }
}

export default defineConfig(({ mode }) => {
  // SITE_ENV / VERCEL_ENV from the shell or .env files — see src/config/environment.js
  const siteEnv = resolveSiteEnv(loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [react(), staticPages(isIndexable(siteEnv))],
    // The same decision at runtime (useSeo keeps <meta name="robots"> in sync)
    define: {
      'import.meta.env.VITE_SITE_ENV': JSON.stringify(siteEnv),
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  }
})
