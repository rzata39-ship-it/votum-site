// ─────────────────────────────────────────────────────────────
// Single source of truth for the named team members: confirmed
// public identity data only (business-approved, Sprint 3C,
// 2026-09-28) — id, initials, name, role, photo. Consumed by the
// /about team section, the homepage team strip and the Person
// nodes in the /about JSON-LD (config/seo.js).
//
// Translatable copy (bios, tags) lives in translations under
// about.team.people, keyed by `id`.
// Do not add sameAs, qualifications, employment history, awards or
// personal data here — see CONTENT_EVIDENCE_REQUIRED.md.
// Node-safe (imported by the build plugin): no `import.meta`.
// ─────────────────────────────────────────────────────────────

export const TEAM = [
  { id: 'hristo-kacarov',    initials: 'HK', name: 'Hristo Kacarov',    jobTitle: 'Managing Director / CTO',        photo: '/team/hristo-kacarov.jpg' },
  { id: 'velislav-kunev',    initials: 'VK', name: 'Velislav Kunev',    jobTitle: 'Systems Architect',              photo: '/team/velislav-kunev.jpg' },
  { id: 'nikolay-peshev',    initials: 'NP', name: 'Nikolay Peshev',    jobTitle: 'Senior DevOps / Cloud Engineer', photo: '/team/nikolay-peshev.jpg' },
  { id: 'blagovest-kasabov', initials: 'BK', name: 'Blagovest Kasabov', jobTitle: 'Senior Full-Stack Engineer',     photo: '/team/blagovest-kasabov.jpg' },
  { id: 'ivan-petrov',       initials: 'IP', name: 'Ivan Petrov',       jobTitle: 'Senior Test Manager',            photo: '/team/ivan-petrov.jpg' },
]
