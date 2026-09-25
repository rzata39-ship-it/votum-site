// The five case studies on the homepage (#work). Copy lives in translations:
// cases.feature / cases.hero / cases.supporting[0..1] / cases.final.
// anchor → id of the case card on the homepage, so other pages can link to
// /#<anchor> until the case studies get their own URLs.

export const CASES = {
  feature:     { anchor: 'case-software-delivery-operations', get: (c) => c.feature },
  hero:        { anchor: 'case-insurance-data-archive',       get: (c) => c.hero },
  supporting0: { anchor: 'case-asset-management-platform',    get: (c) => c.supporting[0] },
  supporting1: { anchor: 'case-kubernetes-platform',          get: (c) => c.supporting[1] },
  final:       { anchor: 'case-test-automation',              get: (c) => c.final },
}

export const caseLink = (key) => `/#${CASES[key].anchor}`
