import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ROUTES, renderHead, renderRobots, renderSitemap } from './src/config/seo.js'
import { translations } from './src/i18n/translations.js'

const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/
const seoBlock = (key) => `<!--seo:start-->\n    ${renderHead(key, translations.en.seo)}\n    <!--seo:end-->`

// The site is a SPA, so without this every URL would share one <head>.
// At build time we write a copy of index.html per route with its own static
// title / description / canonical / Open Graph tags, plus a real sitemap.xml
// and robots.txt. The server keeps serving files first and falls back to
// index.html for everything else (see nginx.conf).
function staticPages() {
  let outDir

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
      fs.writeFileSync(path.join(outDir, 'robots.txt'), renderRobots())
    },
  }
}

export default defineConfig({
  plugins: [react(), staticPages()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
