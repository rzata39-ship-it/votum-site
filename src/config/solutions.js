// Solution pages (/solutions/<slug>) — engineering experience around a specific
// product family, backed by the public case studies and service pages.
// Single source for the route (seo.js → prerender, sitemap), the footer link
// and the contextual "Related solution" links on service and case pages.
// There is deliberately no /solutions hub while there is only one page.
//
// technologies → only products/technologies named in the linked case studies.
// cases / services → what the solution page links to.
// linkedFrom → service / case pages that show a contextual link back here
//   (anchor text per page: translations solutionPages[slug].inbound).
// Copy: translations solutionPages[slug]; SEO strings: seo[key].
// Node-safe (imported by the build plugin): no `import.meta`.

export const SOLUTIONS = [
  {
    slug: 'opentext-alm', key: 'solutionOpentextAlm',
    technologies: ['OpenText ALM', 'OpenText UFT', 'OpenText PPM', 'Oracle', 'PostgreSQL', 'AWS RDS'],
    cases: ['software-delivery-platform-operations', 'insurance-data-archival-migration'],
    services: ['technology-consulting', 'managed-services', 'test-automation', 'software-development'],
    linkedFrom: {
      services: ['technology-consulting', 'managed-services', 'test-automation'],
      cases: ['software-delivery-platform-operations', 'insurance-data-archival-migration'],
    },
  },
]

export const solutionPath = (slug) => `/solutions/${slug}`

export const findSolution = (slug) => SOLUTIONS.find((s) => s.slug === slug) || null

export const solutionsForService = (serviceSlug) => SOLUTIONS.filter((s) => s.linkedFrom.services.includes(serviceSlug))

export const solutionsForCase = (caseSlug) => SOLUTIONS.filter((s) => s.linkedFrom.cases.includes(caseSlug))
