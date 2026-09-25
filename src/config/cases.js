// The public case studies — single source for the case pages
// (/case-studies/<slug>), the /case-studies hub, the homepage cards, the
// service-page teasers, related links, the sitemap (via seo.js) and the
// "Published case studies" count.
//
// Order = homepage order (row 1: first case; row 2: next two; row 3: last two).
// Copy lives in translations: cases.items[slug]; SEO strings in seo[key].
// technologies → only what the case content itself names.
// services → slugs of config/services.js that the case demonstrates; the
//   service pages derive their "Relevant project experience" from this.
// related → other case slugs worth reading next (optional; may be empty).
//
// All five projects were delivered by members of the current VOTUM team
// before VOTUM IT EOOD & Co KD was founded in 2024 (attribution note on every
// case page, CONTENT_EVIDENCE_REQUIRED.md §F). The slugs are canonical public
// URLs — do not change them.
// Node-safe (imported by the build plugin): no `import.meta`.

export const CASES = [
  {
    slug: 'software-delivery-platform-operations', key: 'caseDeliveryOps',
    technologies: ['OpenText ALM', 'OpenText UFT'],
    services: ['managed-services', 'test-automation', 'technology-consulting'],
    // no related case: the other automotive case must not read as the same client
    related: [],
  },
  {
    slug: 'insurance-data-archival-migration', key: 'caseInsuranceArchive',
    technologies: ['AWS', 'AWS RDS', 'PostgreSQL', 'Oracle', 'OpenText ALM', 'OpenText PPM'],
    services: ['technology-consulting', 'software-development', 'devops-cloud'],
    related: ['on-premise-kubernetes-platform'],
  },
  {
    slug: 'asset-management-advisory-platform', key: 'caseAssetPlatform',
    technologies: ['React', 'Java / Spring Boot', 'Keycloak', 'Docker', 'Kubernetes'],
    services: ['software-development'],
    related: ['insurance-data-archival-migration'],
  },
  {
    slug: 'on-premise-kubernetes-platform', key: 'caseKubernetes',
    technologies: ['Kubernetes', 'Jenkins', 'CI/CD'],
    services: ['devops-cloud'],
    related: ['asset-management-advisory-platform'],
  },
  {
    slug: 'automotive-test-automation-framework', key: 'caseTestAutomation',
    technologies: [], // the case names no tool ("an industry-standard test automation platform")
    services: ['test-automation'],
    // no related case: the other automotive case must not read as the same client
    related: [],
  },
]

export const CASES_HUB_PATH = '/case-studies'

export const casePath = (slug) => `${CASES_HUB_PATH}/${slug}`

export const findCase = (slug) => CASES.find((c) => c.slug === slug) || null

// Cases that demonstrate a service (config/services.js slug), in CASES order
export const casesForService = (serviceSlug) => CASES.filter((c) => c.services.includes(serviceSlug))
