// The five service pages — single source for routes (seo.js → prerender,
// sitemap), the homepage service cards, the footer and cross-links.
// Order = order of the homepage cards (translations: services.cards[i]).
// Page copy lives in translations: servicePages[slug]; SEO strings in seo[key].
// related → slugs of other services. The case studies that demonstrate a
// service are listed on the case side (config/cases.js → services).
// Node-safe (imported by the build plugin): no `import.meta`.

export const SERVICES = [
  { slug: 'technology-consulting', key: 'serviceConsulting', related: ['software-development', 'devops-cloud'] },
  { slug: 'software-development',  key: 'serviceSoftware',   related: ['devops-cloud', 'test-automation'] },
  { slug: 'devops-cloud',          key: 'serviceDevops',     related: ['managed-services', 'software-development'] },
  { slug: 'managed-services',      key: 'serviceManaged',    related: ['devops-cloud', 'test-automation'] },
  { slug: 'test-automation',       key: 'serviceTesting',    related: ['software-development', 'devops-cloud'] },
]

// The hub page listing all services; each service lives below it
export const SERVICES_HUB_PATH = '/services'

export const servicePath = (slug) => `${SERVICES_HUB_PATH}/${slug}`

export const findService = (slug) => SERVICES.find((s) => s.slug === slug) || null
