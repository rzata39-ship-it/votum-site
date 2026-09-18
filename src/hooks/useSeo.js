import { useEffect } from 'react'
import { useLanguage } from '../context/useLanguage'
import { getMeta } from '../config/seo'

function setTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector)
  if (value == null) { el?.remove(); return }
  if (!el) { el = create(); document.head.appendChild(el) }
  el.setAttribute(attr, value)
}

const meta = (key, name) => () => {
  const el = document.createElement('meta')
  el.setAttribute(key, name)
  return el
}

/**
 * Keeps <title>, description, canonical, Open Graph and Twitter tags in sync
 * with the current route and language. The same values are written into the
 * static HTML at build time (vite.config.js), so crawlers that do not run
 * JavaScript still get per-page metadata.
 *
 * @param {string} key        route key from config/seo.js → locale.seo[key]
 * @param {object} [override] e.g. { title, description, canonical } for articles
 */
export default function useSeo(key, override) {
  const { locale } = useLanguage()
  const base = getMeta(key, locale.seo)
  const title = override?.title || base.title
  const description = override?.description || base.description
  const canonical = override?.canonical || base.canonical
  const { noindex } = base

  useEffect(() => {
    document.title = title
    setTag('meta[name="description"]', meta('name', 'description'), 'content', description)
    setTag('meta[name="robots"]', meta('name', 'robots'), 'content', noindex ? 'noindex' : null)
    setTag('link[rel="canonical"]', () => {
      const el = document.createElement('link')
      el.setAttribute('rel', 'canonical')
      return el
    }, 'href', canonical)
    setTag('meta[property="og:title"]', meta('property', 'og:title'), 'content', title)
    setTag('meta[property="og:description"]', meta('property', 'og:description'), 'content', description)
    setTag('meta[property="og:url"]', meta('property', 'og:url'), 'content', canonical)
    setTag('meta[name="twitter:title"]', meta('name', 'twitter:title'), 'content', title)
    setTag('meta[name="twitter:description"]', meta('name', 'twitter:description'), 'content', description)
  }, [title, description, canonical, noindex])
}
