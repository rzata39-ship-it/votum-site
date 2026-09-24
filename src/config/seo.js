// Route + metadata configuration shared by
//   - the runtime hook   (src/hooks/useSeo.js)
//   - the build plugin   (vite.config.js → static <head> per route, sitemap.xml, robots.txt)
// Node-safe: no `import.meta`, explicit .js extensions.

import { company, socialLinks } from './company.js'
import { features } from './features.js'
import { NON_PRODUCTION_ROBOTS } from './environment.js'

export const OG_IMAGE = '/og-image.png'
export const OG_IMAGE_SIZE = { width: 1200, height: 630 }
// The text shown in og-image.png
export const OG_IMAGE_ALT = 'VOTUM — Engineered for impact. End-to-end engineering — from vision to operations.'

// Raster logo (512×512, rendered from logo_icon.svg) for Organization.logo
export const LOGO = { path: '/logo.png', width: 512, height: 512 }

// The only language offered to crawlers (DE/BG stay hidden until complete)
export const SITE_LANGUAGE = { html: 'en', og: 'en_US' }

// key → translations.<lang>.seo[key]; file → static HTML written at build time
// prerender → the page body is rendered at build time (react-dom/server) and
// hydrated in the browser. 404.html is not: it is served for every unknown
// path, so it is rendered on the client for whatever URL was requested.
// pageType → schema.org type of the page's node in the JSON-LD graph (default 'WebPage')
// aboutOrg → the page is about the company itself (JSON-LD `about` → #organization)
export const ROUTES = [
  { key: 'home',     path: '/',             file: 'index.html',       sitemap: true,  prerender: true,  aboutOrg: true },
  { key: 'about',    path: '/about',        file: 'about/index.html', sitemap: true,  prerender: true,  aboutOrg: true, pageType: 'AboutPage' },
  { key: 'blog',     path: '/blog',         file: 'blog/index.html',  sitemap: true,  prerender: true  },
  { key: 'privacy',  path: '/privacy.html', file: 'privacy.html',     sitemap: true,  prerender: true  },
  { key: 'terms',    path: '/terms.html',   file: 'terms.html',       sitemap: true,  prerender: true  },
  { key: 'legal',    path: '/legal.html',   file: 'legal.html',       sitemap: true,  prerender: true,  aboutOrg: true },
  { key: 'cookies',  path: '/cookies.html', file: 'cookies.html',     sitemap: true,  prerender: true  },
  { key: 'notFound', path: '/404.html',     file: '404.html',         sitemap: false, prerender: false, noindex: true },
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

const ORGANIZATION_ID = absoluteUrl('/#organization')
const WEBSITE_ID = absoluteUrl('/#website')
const LOGO_ID = absoluteUrl('/#logo')

// Only confirmed facts from company.js. No founder, rating, opening hours,
// awards, certifications, headcount or project counts; sameAs only once a
// real profile URL is configured there.
function organizationNode() {
  const { address } = company
  const node = {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: company.tradingName,
    legalName: company.legalName,
    alternateName: company.legalNameLocal || undefined,
    url: absoluteUrl('/'),
    logo: {
      '@type': 'ImageObject',
      '@id': LOGO_ID,
      url: absoluteUrl(LOGO.path),
      contentUrl: absoluteUrl(LOGO.path),
      width: LOGO.width,
      height: LOGO.height,
      caption: company.tradingName,
    },
    image: { '@id': LOGO_ID },
    email: company.email,
    telephone: company.phone.display,
    vatID: company.vatNumber || undefined,
    identifier: company.registrationNumber ? {
      '@type': 'PropertyValue',
      propertyID: 'UIC',
      name: 'Unified Identification Code (ЕИК), Bulgarian Commercial Register',
      value: company.registrationNumber,
    } : undefined,
    foundingDate: company.foundingDate || undefined,
    address: address ? {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      postalCode: address.postalCode,
      addressLocality: address.city,
      addressCountry: 'BG',
    } : undefined,
  }
  if (socialLinks.length) node.sameAs = socialLinks.map((s) => s.url)
  return node
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: absoluteUrl('/'),
    name: company.tradingName,
    inLanguage: SITE_LANGUAGE.html,
    publisher: { '@id': ORGANIZATION_ID },
  }
}

// One graph per page: Organization + WebSite (the same @ids on every page)
// + the page itself. null for pages without a canonical URL (404).
export function structuredData(key, meta) {
  if (!meta.canonical) return null
  const route = ROUTES.find((r) => r.key === key)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationNode(),
      websiteNode(),
      {
        '@type': route.pageType || 'WebPage',
        '@id': `${meta.canonical}#webpage`,
        url: meta.canonical,
        name: meta.title,
        description: meta.description,
        inLanguage: SITE_LANGUAGE.html,
        isPartOf: { '@id': WEBSITE_ID },
        about: route.aboutOrg ? { '@id': ORGANIZATION_ID } : undefined,
      },
    ],
  }
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Static <head> block for one route (used at build time)
export function renderHead(key, seoStrings, indexable) {
  const m = getMeta(key, seoStrings, indexable)
  const jsonLd = structuredData(key, m)
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    m.robots && `<meta name="robots" content="${m.robots}" />`,
    m.canonical && `<link rel="canonical" href="${m.canonical}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:locale" content="${SITE_LANGUAGE.og}" />`,
    `<meta property="og:site_name" content="${esc(company.tradingName)}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    m.canonical && `<meta property="og:url" content="${m.canonical}" />`,
    `<meta property="og:image" content="${m.image}" />`,
    `<meta property="og:image:type" content="image/png" />`,
    `<meta property="og:image:width" content="${OG_IMAGE_SIZE.width}" />`,
    `<meta property="og:image:height" content="${OG_IMAGE_SIZE.height}" />`,
    `<meta property="og:image:alt" content="${esc(OG_IMAGE_ALT)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${m.image}" />`,
    `<meta name="twitter:image:alt" content="${esc(OG_IMAGE_ALT)}" />`,
    jsonLd && `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`,
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
