// Route + metadata configuration shared by
//   - the runtime hook   (src/hooks/useSeo.js)
//   - the build plugin   (vite.config.js → static <head> per route, sitemap.xml, robots.txt)
// Node-safe: no `import.meta`, explicit .js extensions.

import { company, socialLinks } from './company.js'
import { features } from './features.js'
import { NON_PRODUCTION_ROBOTS } from './environment.js'

export const OG_IMAGE = '/og-image.png'
export const OG_IMAGE_SIZE = { width: 1200, height: 630 }

// key → translations.<lang>.seo[key]; file → static HTML written at build time
export const ROUTES = [
  { key: 'home',     path: '/',             file: 'index.html',       sitemap: true  },
  { key: 'about',    path: '/about',        file: 'about/index.html', sitemap: true  },
  { key: 'blog',     path: '/blog',         file: 'blog/index.html',  sitemap: true  },
  { key: 'privacy',  path: '/privacy.html', file: 'privacy.html',     sitemap: true  },
  { key: 'terms',    path: '/terms.html',   file: 'terms.html',       sitemap: true  },
  { key: 'legal',    path: '/legal.html',   file: 'legal.html',       sitemap: true  },
  { key: 'cookies',  path: '/cookies.html', file: 'cookies.html',     sitemap: true  },
  { key: 'notFound', path: '/404.html',     file: '404.html',         sitemap: false, noindex: true },
].filter((r) => r.key !== 'blog' || features.blog)

export const absoluteUrl = (path) => new URL(path, company.siteUrl).href

// indexable: whether this build may be indexed at all (see environment.js)
export function getMeta(key, seoStrings, indexable) {
  const route = ROUTES.find((r) => r.key === key)
  const { title, description } = seoStrings[key]
  return {
    title,
    description,
    canonical: route.noindex ? null : absoluteUrl(route.path),
    image: absoluteUrl(OG_IMAGE),
    // null = indexable (no robots tag)
    robots: !indexable ? NON_PRODUCTION_ROBOTS : route.noindex ? 'noindex' : null,
  }
}

// Only confirmed data — no founder, rating or opening hours
export function organizationJsonLd() {
  const { address } = company
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: company.tradingName,
    legalName: company.legalName,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/logo_icon.svg'),
    image: absoluteUrl(OG_IMAGE),
    email: company.email,
    telephone: company.phone.display,
    vatID: company.vatNumber || undefined,
    address: address && {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      postalCode: address.postalCode,
      addressLocality: address.city,
      addressCountry: 'BG',
    },
  }
  if (socialLinks.length) data.sameAs = socialLinks.map((s) => s.url)
  return data
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Static <head> block for one route (used at build time)
export function renderHead(key, seoStrings, indexable) {
  const m = getMeta(key, seoStrings, indexable)
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    m.robots && `<meta name="robots" content="${m.robots}" />`,
    m.canonical && `<link rel="canonical" href="${m.canonical}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${esc(company.tradingName)}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    m.canonical && `<meta property="og:url" content="${m.canonical}" />`,
    `<meta property="og:image" content="${m.image}" />`,
    `<meta property="og:image:width" content="${OG_IMAGE_SIZE.width}" />`,
    `<meta property="og:image:height" content="${OG_IMAGE_SIZE.height}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${m.image}" />`,
    `<script type="application/ld+json">${JSON.stringify(organizationJsonLd()).replace(/</g, '\\u003c')}</script>`,
  ].filter(Boolean).join('\n    ')
}

export function renderSitemap() {
  const urls = ROUTES.filter((r) => r.sitemap)
    .map((r) => `  <url><loc>${absoluteUrl(r.path)}</loc></url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

export function renderRobots(indexable) {
  if (!indexable) return 'User-agent: *\nDisallow: /\n'
  return `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`
}
