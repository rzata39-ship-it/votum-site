# Content evidence required

Audit of every quantitative or absolute marketing claim on the site.
The repository contains **no source, period or baseline for any of them**
(no data files, no references, no client sign-off). Nothing was invented.

Rule applied:

- **Absolute claims** (100 %, zero, 0, N×) without evidence → **removed or softened** to a qualitative statement that the case text itself supports.
- **Approximate company figures** (45+, 18+, 20+, 1,000+) → **kept, listed here** for confirmation.
- Changes were made in EN, DE and BG so the languages stay consistent.

For each item please provide: **source, measurement period, baseline, and whether the client approved publication.**
Content lives in `src/i18n/translations.js` unless noted.

## A. Changed — unsupported absolute claims

| Where | Before | Now | To restore the number, provide |
|---|---|---|---|
| Case: Kubernetes platform — stat | `100%` automated deploys | `CI/CD` automated deploys | share of deployments via pipeline, period |
| Case: Kubernetes platform — stat | `Zero` manual infra steps | `On-prem` Kubernetes platform | evidence that provisioning is fully automated |
| Case: Kubernetes platform — outcome | "a measurable improvement in release reliability" | "more reliable releases" | the measurement (e.g. change-failure rate before/after) |
| Case: Test automation — stat | `80%+` test coverage | `Broader` test coverage | coverage report, scope, date |
| Case: Test automation — stat | `3×` faster releases | `Faster` release cycles | release cadence before/after |
| Case: Test automation — stat | `Zero` prod regressions | `Less` manual testing | incident/regression log and period |
| Case: Tier 1 OEM — stat | `98%+` availability | `SLA` based operations | **SLA target, measured availability, period** (must not be a headline without them) |
| Case: Tier 1 OEM — outcome | "stable operations exceeding 98% availability" | "stable operations within the agreed SLA targets" | same |
| Case: Insurance archive — stats | `100%` data preserved · `Zero` vendor lock-in · `100%` audit-ready | `ALM/PPM` data archived · `AWS` cloud-native archive · `Audit` ready access | reconciliation report / audit sign-off |
| Case: Insurance archive — outcome | "100% data preservation …" | "Historical data … preserved" | same |
| Case: Asset manager — stats | `100%` workflows digitized · `0` manual processes | `Digital` end-to-end workflows · `Automated` invoicing | process inventory before/after |
| Case: Asset manager — outcome | "fully digitized", "replaced entirely" | "digitized", "replaced by digital ones" | same |
| How we work — Phase 02 checklist | "95%+ automated test coverage" | "High automated test coverage as a standard" | coverage policy + actual numbers across projects |
| About — team card | "95%+ coverage across every project delivered" | removed | same |
| About — team card | "platforms supporting 1,000+ concurrent users" (on an anonymous card) | removed | — |
| Blog — newsletter note | "~800 engineers subscribed" | removed — **there is no newsletter backend, so the number cannot be real** | subscriber export from the provider |
| Blog — featured excerpt | "preserved 100% integrity … eliminated vendor lock-in permanently" | "preserved data integrity … removed the dependency on the legacy vendor" | — |
| Blog — featured code visual (`Blog.jsx`) | "400GB … zero downtime", `"100% preserved"` | neutral comments, `"migrated"` | — |

## B. "How we work" dashboards — now labelled as illustrative

The three phase visuals are hard-coded mock-ups (`PhaseMap.jsx`,
`PhasePipeline.jsx`, `PhaseHeartbeat.jsx`), not client data. Each now carries
the caption **"Example delivery dashboard · illustrative metrics"**.
Numbers inside them (left unchanged because they are labelled): `1,220` total
commits · `4` engineers · `95%+` test coverage · `Daily` deploys · `0` prod
incidents · `99.98%` platform uptime · `99.99% / 99.96% / 100%` per-service
uptime · `14 findings`, `12 objectives`, `8 risks`, `6 stakeholders`.

- [ ] Decide: keep as illustrative, or replace with real (approved) project data.

## C. Kept — please confirm

| Claim | Where | Needed |
|---|---|---|
| `45+` projects delivered | **Removed 2026-09-24 (Sprint 2A)** from Home/About stats; still in the Blog hero (blog disabled) and the hidden DE/BG stats ("across 45+ engagements") | project list / count, as of which date |
| `18+` years of experience | **Removed 2026-09-24 (Sprint 2A)** from Home/About stats; still in the Blog hero (blog disabled) and the hidden DE/BG stats | the company was registered in **2024**, so this can only be personal experience of the founder/team — confirm whose, or reword (e.g. "18+ years of leadership experience") |
| `80%` client retention | **Removed 2026-09-24 (Sprint 2A)** from Home/About stats; still in the Blog hero (blog disabled) and the hidden DE/BG stats | definition (repeat clients / total?), period |
| `20+` expert / senior engineers | **Removed 2026-09-24 (Sprint 2A)** from Home/About stats; still in the Blog hero (blog disabled) and the hidden DE/BG stats | headcount incl. or excl. the on-demand network |
| `1,000+` users, `150,000+` employees | Case: Tier 1 OEM | **business-approved for publication (2026-09-25)** — source/accuracy still to verify; not legally or NDA-cleared (see §E) |
| `24/7` continuity / "24/7 managed operations" | Case: Tier 1 OEM | 24/7 capability **confirmed by the business (2026-09-25)**; the case text describes L1–L2 support under SLA (see §E) |
| "24/7 system monitoring" | Service: Managed Services | **confirmed (2026-09-25)** — now worded "24/7 monitoring and support available under agreed SLAs" (not included in every contract) |
| `2` cluster environments | Case: Kubernetes platform | descriptive (dev + prod) — low risk |
| "Response within 24 h" | CTA banner, contact modal | see `responseTimeHours` in `src/config/company.js` |
| "Senior engineers only", "no juniors" | About principles / comparison table | confirm it is literally true |
| "Zero-downtime production deployments" | How we work — Phase 03 | names a technique, not a metric — kept |

## D. People & articles

- **Team (About)**: the placeholder names ("Ivan Mitev", anonymous "Senior Engineer" cards) were replaced on 2026-09-18 with the real team provided by the client: Hristo Kacarov (Managing Director / CTO), Velislav Kunev (Systems Architect), Nikolay Peshev (Senior DevOps/Cloud Engineer), Blagovest Kasabov (Senior FullStack Engineer), Ivan Petrov (Senior Test Manager). Cards show name, role and role-area tags only — **no personal bios were written** (none were provided). The "Extended team / on demand" role card was kept.
  - **Sample bios added 2026-09-18** (one sentence each, EN only). They are derived from the role and tags alone and contain no years of experience, former employers, certifications or client names.
  - [ ] Each person reviews / rewrites their own bio.
  - **Photos added 2026-09-18** for all five people, supplied by the client: 480×480 JPEG crops in `public/team/`, referenced by the optional `photo` field on each member. The full-size originals are kept outside `public/` in `team-originals/` so they are not shipped.
  - [ ] Written consent from each person for publishing their photo (personal data under GDPR).
  - [ ] Optional: LinkedIn profiles.
- **Blog featured author** was the fictitious "Ivan Mitev"; the author block is now hidden (`author: null`) until the article exists and its real author is known.
- **Blog**: all 7 entries (1 featured + 6 cards) are teasers — **no article body exists anywhere in the repository**. They are therefore rendered as non-interactive cards labelled "Full article in preparation" instead of dead `href="#"` links, and read-time labels are hidden. Titles, dates (Oct 2025 – Apr 2026) and excerpts were left as they were; some titles contain figures ("400GB", "99.98% uptime", "4 minutes", "95% test coverage") that must be backed by the article when it is published.
  - To publish: add the article to `src/content/articles.js` and set the same `slug` on the card in `translations.js` — the card then links to `/blog/<slug>`.
  - [ ] Decide whether unpublished teasers with past dates should stay visible at all.

## E. Sprint 2A — GEO / trust cleanup (2026-09-24)

Source: the Sprint 2A claim audit. Only wording that needed **no** business
evidence was changed; everything below stays on the site unchanged until it is
answered. Nothing in this section is confirmed.

### Changed (no evidence needed)

- Home + About stats → `2024` Founded in Sofia · `5` Service areas · `5` Published case studies · `End-to-end` Strategy to operations. The counts are true as long as the site shows five services and five case studies — update them when that changes.
- New visible "About VOTUM" section on the homepage (founding year and legal entity come from `src/config/company.js`).
- Softened: "own your engineering excellence" (hero + footer), "every layer", "every line of code… eliminating technical debt", "ensuring reliability at every layer", "so thorough", "proven process designed to eliminate risk", "Fixed scope. No surprises" → "Agreed scope before build", "Full observability", "measurable difference", "leading" (insurance, asset manager, automotive ×2), "major", "world-class", "future-proof", "significantly" (×2), "high-performing… ensures", "at enterprise pace", "dramatically".
- About SEO title → "About VOTUM – Software Engineering Company in Sofia" (the team's location is not confirmed, only the registered office).
- Brand casing: "Votum" → "VOTUM" in all English copy.
- Dashboard mock-ups: visible "Example" badge + `data-nosnippet`; the "illustrative metrics" caption stays.
- About principle 04 "Fixed scope before build" → "Scope and success criteria agreed before build"; About meta description updated to match (no fixed-scope / fixed-price implication).
- Managed Services detail: "24/7 system monitoring" → "system monitoring and alerting (24/7 monitoring and support available under agreed SLAs)".

### Confirmed by the business (2026-09-25)

- [x] **24/7 monitoring and support** — a real VOTUM capability. Wording: "24/7 monitoring and support available under agreed SLAs"; never imply that every contract includes 24/7 coverage. Used in: Service: Managed Services (detail text, tag "24/7 Monitoring"); Case: Tier 1 OEM ("24/7 managed operations", stat "24/7 continuity" — note the case text itself describes L1–L2 support under SLA).
- [x] **L3 support** — a real VOTUM capability. Wording: "L1–L3 support". Used in: How we work, Phase 03 ("Managed services with L1–L3 support"); `/services/managed-services` (L1 / L2 / L3 breakdown).
- [x] **L3 engineering support as a core strength** — confirmed with the Sprint 2B brief. Used in: `/services/managed-services` ("L3 engineering support is one of our core strengths…"). No response times, SLA figures or availability percentages are published.

### Business-approved for publication — accuracy still to verify

Approved by the business on 2026-09-25 to stay on the site. **Not** legally or NDA-cleared (no documentation on file); the figures themselves still need a source.

- [ ] **150,000+ employees** — Case: Tier 1 OEM (challenge). Need: public source for the client's headcount; client/NDA clearance if required.
- [ ] **1,000+ users** — Case: Tier 1 OEM (stat + solution). Need: client usage data; client/NDA clearance if required.

### Open — business evidence required

For each: provide the evidence, or approve the prepared replacement.

- [ ] **Zero-downtime** — How we work, Phase 03 ("Zero-downtime production deployments"). Replacement ready: "Zero-downtime deployment strategies (rolling / blue-green) where the platform supports them".
- [x] **Project / case attribution** — resolved 2026-09-25: all five projects were delivered by members of the current VOTUM team before VOTUM was founded; each case page carries a visible attribution note (§F).
- [x] **"Tier 1 OEM"** — applied: the case now says "a global automotive organization"; OEM vs Tier 1 supplier stays undecided and is not stated anywhere (§F).
- [x] **"reduced operational costs"** — applied: removed from the insurance case (no cost comparison) (§F).
- [x] **"European" insurance group** — applied: "an insurance group" (§F). Reinstate only if confirmed.
- [ ] **Response time (24 h)** — CTA banner, contact modal (`responseTimeHours` in `src/config/company.js`). Need: an operational commitment incl. weekends. Replacement ready: "We'll reply within one business day with concrete next steps — not a sales pitch."
- [ ] **Senior engineers only / no juniors** — About lead ("senior engineering consultancy"), principle 01, comparison table, extended team, careers CTA. Need: literally true incl. the on-demand network. Replacement ready: "Senior-led delivery — every engagement is led by senior engineers, and the people in your standups are the people writing your code."
- [ ] **"Outcome-based" engagement model** — About comparison table. Need: the actual contract model. Replacement ready: "Success criteria agreed before we start, and progress measured against them."
- [ ] **Phone number** `+359 895 101 122` — footer, legal pages, `/contact`, JSON-LD `telephone`. Already public and kept for now; still needs explicit business confirmation (`LEGAL_AND_COMPANY_DATA_REQUIRED.md`).
- [ ] **Trading name** `VOTUM` — JSON-LD `name`, `og:site_name`, legal texts. Still "confirm" in `LEGAL_AND_COMPANY_DATA_REQUIRED.md`.
- [ ] **Team bios + photo consent** — see section D.
- [ ] **DE / BG copies** — the hidden German and Bulgarian texts still contain the old stats (45+, 18+, 80%, 20+) and the pre-Sprint-2A wording. Bring them in line before either language is enabled.

## F. Sprint 2C — case studies (decided 2026-09-25, applied in Stage B)

The five case studies have their own pages under `/case-studies/<slug>`
(list, URLs and technologies: `src/config/cases.js`; copy: `cases.items` in
`src/i18n/translations.js`).

### Confirmed by the business (2026-09-25)

- [x] **All five projects were delivered by members of the current VOTUM team, before VOTUM was founded.** Every case page shows: *"This project was delivered by members of the current VOTUM team before VOTUM IT EOOD & Co KD was founded in 2024."* Case copy uses "the team" / "we", never "VOTUM delivered…".
- [x] **The team has worked together on enterprise software projects since 2018** (`company.teamSince`). Used on the About page and the `/case-studies` hub — always as the team's history, never as the company's age.
- [x] **VOTUM IT EOOD & Co KD was founded in 2024** (`company.foundingYear`, JSON-LD `foundingDate` 2024-03-11) — unchanged.

Not recorded and not published: any legal or company relationship to an earlier entity. No previous company is named on the site.

### Rules

- **Publication:** all five are published as anonymous case studies. No client names; no identifying details beyond the approved ones.
- **Outcomes:** without concrete evidence or an internal source, a measurable outcome is softened, not presented as a proven result.
- **Company capability ≠ project scope:** 24/7 and L1–L3 are confirmed VOTUM capabilities (service pages); a case only states what its own engagement included.
- **URLs are canonical** — do not change them without a strong reason.

| Case | URL | Client wording | What was applied |
|---|---|---|---|
| Software delivery platform transformation & operations | `/case-studies/software-delivery-platform-operations` | "a global automotive organization" (not "Tier 1 OEM") | "24/7 continuity" / "24/7 managed operations" removed; support scope L1–L2 under agreed SLAs, no L3; "the engagement included…" (no claim that it is ongoing); 150,000+ employees and 1,000+ users only in this case; "stable operations within the agreed SLA targets", "reduced internal workload", "full lifecycle visibility", scalability / global-operations phrasing softened |
| Insurance data archival & migration | `/case-studies/insurance-data-archival-migration` | "an insurance group" (not "European") | "reduced operational costs" and "cost-efficient" removed; "full data integrity" and "full audit readiness" / "audit-ready" replaced by implementation facts (migration, preserved attachments, access tool) |
| Asset management advisory platform | `/case-studies/asset-management-advisory-platform` | "an asset management firm" | Planning, service mediation, activity tracking and automated invoicing kept as delivered functionality; "enterprise-grade", "efficient and scalable collaboration" removed |
| On-premise Kubernetes platform | `/case-studies/on-premise-kubernetes-platform` | "an organization with strict on-premise security requirements" | "more reliable releases" replaced by the delivery architecture; no managed operations implied |
| Automotive test automation framework | `/case-studies/automotive-test-automation-framework` | "an automotive organization" — independent case, not the operations client | No tool named (the case does not name one); "Broader / Faster / Less" stats replaced by descriptive ones; reduced manual testing only qualitative; no "manufacturer" |

### Still open (case studies)

- [ ] **Case-specific 24/7 scope** — software delivery operations case: 24/7 is not stated until confirmed for that engagement.
- [ ] **Insurance outcome evidence** — reconciliation evidence (data integrity), audit / compliance evidence (audit readiness), cost comparison (operational costs). Until then these are not claimed.
- [ ] **Test automation measurements** — manual effort, release cadence, coverage (before / after). Until then only qualitative wording.
- [ ] **Automotive client classification** — OEM or Tier 1 supplier; until confirmed, "a global automotive organization".

### OpenText ALM solution page (Sprint 3B)

`/solutions/opentext-alm` uses only what the public case studies and service
pages support: OpenText ALM / UFT (software delivery platform case),
OpenText ALM / PPM migration and archival (insurance case), and the confirmed
company capabilities (L1–L3, L3 as a core strength, 24/7 under agreed SLAs).
The page states that the products belong to OpenText and that VOTUM is an
independent engineering company.

Not claimed — provide evidence before adding any of these:

- [ ] OpenText partner, reseller or certification status
- [ ] Supported product versions or modules beyond ALM, UFT and PPM
- [ ] Years of OpenText experience, number of ALM projects or users supported
- [ ] OpenText-specific CI/CD integrations, response times or SLA figures

### Client-scale figures — evidence notes

| Figure | Case | Status | Evidence source |
|---|---|---|---|
| 150,000+ employees | Software delivery transformation & operations | Business-approved for publication (2026-09-25). Not independently verified. | **Missing** — ideally an approved public company source |
| 1,000+ users | Software delivery transformation & operations | Business-approved for publication (2026-09-25). Not independently verified. | **Missing** — internal platform / user statistics or another documented source |
