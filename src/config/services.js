// The five service pages — single source for routes (seo.js → prerender,
// sitemap), the homepage service cards, the footer and cross-links.
// Order = order of the homepage cards (translations: services.cards[i]).
// Page copy lives in translations: servicePages[slug]; SEO strings in seo[key].
// cases → keys of config/cases.js; related → slugs of other services.
// Node-safe (imported by the build plugin): no `import.meta`.

export const SERVICES = [
  { slug: 'technology-consulting', key: 'serviceConsulting', cases: ['feature', 'hero'],        related: ['software-development', 'devops-cloud'] },
  { slug: 'software-development',  key: 'serviceSoftware',   cases: ['supporting0', 'hero'],    related: ['devops-cloud', 'test-automation'] },
  { slug: 'devops-cloud',          key: 'serviceDevops',     cases: ['supporting1', 'hero'],    related: ['managed-services', 'software-development'] },
  { slug: 'managed-services',      key: 'serviceManaged',    cases: ['feature'],                related: ['devops-cloud', 'test-automation'] },
  { slug: 'test-automation',       key: 'serviceTesting',    cases: ['final', 'feature'],       related: ['software-development', 'devops-cloud'] },
]

// The hub page listing all services; each service lives below it
export const SERVICES_HUB_PATH = '/services'

export const servicePath = (slug) => `${SERVICES_HUB_PATH}/${slug}`

export const findService = (slug) => SERVICES.find((s) => s.slug === slug) || null
