// Solution pages (/solutions/<slug>) — engineering experience around a problem
// area or product family, backed by the public case studies and service pages.
// Single source for the route (seo.js → prerender, sitemap), the footer link
// and the contextual "Related solution" links on service and case pages.
// There is deliberately no /solutions hub.
//
// template → which SolutionPage renderer the page uses:
//   'product' (default) → the product-portfolio layout (OpenText ADM)
//   'general'           → the vendor-neutral solution layout
// cases / services → what the solution page links to.
// linkedFrom → service / case pages that show a contextual link back here
//   (anchor text per page: translations solutionPages[slug].inbound).
// Copy: translations solutionPages[slug]; SEO strings: seo[key].
// Node-safe (imported by the build plugin): no `import.meta`.
//
// Retired slugs are redirected in vercel.json (/solutions/opentext-alm → /solutions/opentext-adm).

export const SOLUTIONS = [
  {
    slug: 'opentext-adm', key: 'solutionOpentextAdm',
    cases: ['software-delivery-platform-operations', 'insurance-data-archival-migration'],
    services: ['technology-consulting', 'managed-services', 'test-automation', 'software-development'],
    linkedFrom: {
      services: ['technology-consulting', 'managed-services', 'test-automation'],
      cases: ['software-delivery-platform-operations', 'insurance-data-archival-migration'],
    },
  },
  {
    slug: 'application-modernization', key: 'solutionAppModernization', template: 'general',
    cases: ['insurance-data-archival-migration', 'on-premise-kubernetes-platform', 'software-delivery-platform-operations'],
    services: ['technology-consulting', 'software-development', 'devops-cloud', 'test-automation', 'managed-services'],
    linkedFrom: {
      services: ['technology-consulting', 'software-development', 'devops-cloud'],
      cases: ['insurance-data-archival-migration', 'on-premise-kubernetes-platform'],
    },
  },
]

export const solutionPath = (slug) => `/solutions/${slug}`

export const findSolution = (slug) => SOLUTIONS.find((s) => s.slug === slug) || null

export const solutionsForService = (serviceSlug) => SOLUTIONS.filter((s) => s.linkedFrom.services.includes(serviceSlug))

export const solutionsForCase = (caseSlug) => SOLUTIONS.filter((s) => s.linkedFrom.cases.includes(caseSlug))
