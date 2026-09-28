// ─────────────────────────────────────────────────────────────
// The named team members shown on /about — confirmed public data
// only (business-approved, Sprint 3C, 2026-09-28): name, role, photo.
// Used for the Person nodes in the /about JSON-LD (config/seo.js).
//
// Bios and tags live in translations (about.team.members) and must
// stay in sync with this list (same names, roles and photos).
// Do not add sameAs, qualifications, employment history, awards or
// personal data here — see CONTENT_EVIDENCE_REQUIRED.md.
// Node-safe (imported by the build plugin): no `import.meta`.
// ─────────────────────────────────────────────────────────────

export const TEAM = [
  { id: 'hristo-kacarov',    name: 'Hristo Kacarov',    jobTitle: 'Managing Director / CTO',        photo: '/team/hristo-kacarov.jpg' },
  { id: 'velislav-kunev',    name: 'Velislav Kunev',    jobTitle: 'Systems Architect',              photo: '/team/velislav-kunev.jpg' },
  { id: 'nikolay-peshev',    name: 'Nikolay Peshev',    jobTitle: 'Senior DevOps / Cloud Engineer', photo: '/team/nikolay-peshev.jpg' },
  { id: 'blagovest-kasabov', name: 'Blagovest Kasabov', jobTitle: 'Senior Full-Stack Engineer',     photo: '/team/blagovest-kasabov.jpg' },
  { id: 'ivan-petrov',       name: 'Ivan Petrov',       jobTitle: 'Senior Test Manager',            photo: '/team/ivan-petrov.jpg' },
]
