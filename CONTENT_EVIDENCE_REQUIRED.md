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
  - [x] **Bios and tags replaced 2026-09-28 (Sprint 3C)** with business-approved text per person — see §G. The sample-bio caveat no longer applies.
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
- [x] **Response time (24 h)** — resolved 2026-09-28 (Sprint 6): the promise was **removed** from all English copy — CTA banner ("No obligation." instead of "Response within {hours} h.") and contact modal (sub + success no longer mention hours). `responseTimeHours` stays in `src/config/company.js` but no English string uses it; the hidden DE/BG copies still contain `{hours}` phrases (covered by the DE/BG item below). If the business later confirms an operational commitment, reintroduce it deliberately.
- [x] **Senior engineers only / no juniors** — resolved 2026-09-28 (Sprint 3C + cleanup): About lead → "software engineering company"; extended-team card dropped "no recruitment pool, no juniors"; principle 01 → "Senior-led delivery" (led by experienced engineers, no "never juniors" claim); comparison row → "Senior-led delivery. The person in your standup is the person writing your code." No absolute seniority claim remains on the site.
- [x] **"Outcome-based" engagement model** — resolved 2026-09-28 (Sprint 3C cleanup): comparison row → "Success criteria agreed up front. Scope, priorities and success criteria are agreed before delivery starts, and progress is reviewed against them." No commercial/contracting model is implied.
- [ ] **Phone number** `+359 895 101 122` — footer, legal pages, `/contact`, JSON-LD `telephone`. Already public and kept for now; still needs explicit business confirmation (`LEGAL_AND_COMPANY_DATA_REQUIRED.md`).
- [ ] **Trading name** `VOTUM` — JSON-LD `name`, `og:site_name`, legal texts. Still "confirm" in `LEGAL_AND_COMPANY_DATA_REQUIRED.md`.
- [ ] **Team bios + photo consent** — see section D.
- [ ] **DE / BG copies** — the hidden German and Bulgarian texts still contain the old stats (45+, 18+, 80%, 20+), the pre-Sprint-2A wording, the response-time promises removed from EN in Sprint 6, and none of the Sprint 3–6 sections. Bring them fully in line before either language is enabled.

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

### OpenText ADM solution page (Sprint 3B, repositioned in 3B.1)

`/solutions/opentext-adm` (was `/solutions/opentext-alm`, now a 308 redirect)
positions the team across the OpenText Application Delivery Management
portfolio, with ALM / Quality Center, ALM Octane and UFT as the core expertise
and LoadRunner and PPM as wider ADM experience. The page states that the
products belong to OpenText and that VOTUM is an independent engineering
company.

| Statement | Basis |
|---|---|
| ALM and UFT platform transformation, migration, operations | Public case: software delivery platform (OpenText ALM and UFT) |
| ALM / PPM data migration and archival | Public case: insurance data archival (OpenText ALM and PPM, Oracle → PostgreSQL on AWS RDS) |
| L1–L3, L3 as a core strength, 24/7 under agreed SLAs | Confirmed company capability (not attributed to a case; the operations case stays L1–L2) |
| Expertise across ALM, ALM Octane, UFT, LoadRunner and PPM; ALM, Octane and UFT as the deepest experience; the capability lists in each product section | Business-approved capability statement (2026-09-26). **No public case evidence** for ALM Octane or LoadRunner |

The automotive test automation case keeps its tool unnamed; the page does not
link it or attribute UFT to it.

Not claimed — provide evidence before adding any of these:

- [ ] OpenText partner, reseller or certification status
- [ ] Supported product versions or modules
- [ ] Years of OpenText experience, number of ADM projects or users supported
- [ ] Proprietary migration tooling
- [ ] Response times, SLA figures or performance-test results
- [ ] A public case study for ALM Octane or LoadRunner work (would back the capability statements above)

### Client-scale figures — evidence notes

| Figure | Case | Status | Evidence source |
|---|---|---|---|
| 150,000+ employees | Software delivery transformation & operations | Business-approved for publication (2026-09-25). Not independently verified. | **Missing** — ideally an approved public company source |
| 1,000+ users | Software delivery transformation & operations | Business-approved for publication (2026-09-25). Not independently verified. | **Missing** — internal platform / user statistics or another documented source |

## G. Sprint 3C — About & team trust enhancement (2026-09-28)

All team facts below are **business-approved (Sprint 3C brief, 2026-09-28)**.
The About page order is now Hero → Stats → Team → Expertise → Mission →
Principles → How we're different → Careers CTA; the five people, photos,
roles and the card design are unchanged.

### Approved per-person facts (bios + tags in `translations.js`, Person JSON-LD from `src/config/team.js`)

| Person | May be attributed publicly | Must NOT be attributed |
|---|---|---|
| Hristo Kacarov — Managing Director / CTO | technology strategy, architecture, engineering management, delivery leadership, enterprise platforms; hands-on OpenText ALM + ALM Octane (bio only) | primary positioning as an OpenText consultant; UFT / PPM as primary tags |
| Velislav Kunev — Systems Architect | software development, systems / software / integration architecture | **any** OpenText / ALM / Octane / UFT / PPM / LoadRunner mention |
| Nikolay Peshev — Senior DevOps / Cloud Engineer | DevOps, CI/CD, platform engineering, automation, coding; ALM Octane + UFT (bio only) | OpenText dominating the card |
| Blagovest Kasabov — Senior Full-Stack Engineer | full-stack / backend / frontend / enterprise application development; previous ALM + ALM Octane, exposure to PPM + LoadRunner (bio only) | PPM / LoadRunner as primary tags |
| Ivan Petrov — Senior Test Manager | test automation, quality engineering, automation architecture, deep UFT, coding, some performance testing | — |

Still not published for any person (no evidence / not provided): years of
experience, employer histories, certifications, personal qualifications,
sameAs / LinkedIn profiles (none configured), personal contact data.

**2026-09-28 (post-3C, client request):** all OpenText product references were
removed from the personal bios ("May be attributed publicly" above still
records what remains approved, but bios now stay product-neutral —
"enterprise platform" wording only). OpenText product names on /about appear
only in the "Enterprise delivery platforms" expertise item.

### "Expertise across the team" section

Six visually equal capability items (OpenText deliberately not dominant);
one contextual link each (five service pages + `/solutions/opentext-adm`).
The sixth item's claim ("hands-on project experience across OpenText ALM,
ALM Octane, UFT, PPM and LoadRunner") rests on the Sprint 3B.1
business-approved capability statement (§ OpenText ADM above) — the ALM
Octane / LoadRunner parts still have **no public case evidence**.

### Wording changed in Sprint 3C (defensibility, no evidence needed)

- About hero lead: "senior engineering consultancy" → "software engineering company … from architecture and development to delivery, testing and operations".
- Team note: "Every person at VOTUM has spent years in production engineering" → "built around experienced engineers covering complementary disciplines … specialists with production engineering backgrounds".
- Extended-team card: dropped "no recruitment pool, no juniors" → "each one vetted personally before they work on a client project".
- Mission: "Most agencies" → "Many agencies"; then (post-review cleanup) the competitor generalization was removed entirely — the paragraph now describes only VOTUM's own model ("We optimize for long-term ownership and maintainability, not just feature delivery — and for the moment you no longer need us …").
- Comparison table: header "Typical agency" → "A common agency model"; lead "The model most clients have experienced before" → "A delivery model many teams have experienced before".
- About meta description → team + engineering disciplines + Sofia (no legal name, no OpenText).
- Team photo alt text: empty → "\<name\>, \<role\> at VOTUM" (no qualifications or technologies).

### Post-review trust-copy cleanup (2026-09-28, approved with the Sprint 3C review)

- Principle 01: "Senior engineers only" → **"Senior-led delivery"** — client work is led by experienced engineers, expertise stays close to delivery; no "never juniors" claim (§E item closed).
- Comparison row "Team composition": "Senior engineers only." → "Senior-led delivery." (same §E item).
- Comparison row "Engagement model": "Outcome-based. We define success criteria before we start and hold ourselves to them." → **"Success criteria agreed up front."** + factual supporting text; no commercial model implied (§E item closed).
- Principle 05: "Live demos every sprint" → **"Regular progress reviews and demos throughout delivery"** — no fixed sprint/demo cadence implied.

## H. Sprint 4 — Application Modernization solution page (2026-09-28)

`/solutions/application-modernization` (template `general`) is vendor-neutral:
no products, versions, partner status, counts, timelines, SLA figures or
downtime/cost/performance promises. Everything on the page is either generic
engineering method description or backed as follows:

| Statement | Basis |
|---|---|
| Legacy decommissioning, data archival/migration, vendor exit, integrity preservation | Public case: insurance data archival & migration |
| Platform modernization, containerization, deployment/delivery modernization | Public case: on-premise Kubernetes platform |
| Delivery-platform transformation, consolidation, transition into managed operations | Public case: software delivery platform transformation & operations |
| Retain / Rehost / Re-platform / Refactor / Replace / Retire | Standard industry modernization patterns, explicitly presented as such (never a proprietary framework) |
| "Senior-led delivery", success criteria before build, knowledge transfer | Existing approved positioning (§E / §G) |
| Optional operations after transition | Confirmed managed-services capability; no SLA figures stated |

Deliberately not claimed (no evidence): zero downtime, guaranteed cost or
performance outcomes, project counts, timeline promises, named customers,
certifications, partnerships. Per the Sprint 4 review, the page body contains
**no** OpenText (or other vendor) cross-reference — OpenText has its own
specialist solution page and appears only where the linked case studies
themselves mention it. The footer solution link is site-wide chrome, not page
content.

## I. Sprint 5 — Solutions hub (2026-09-28)

`/solutions` presents six equal solution areas. Claim basis:

| Card | Basis | Destination |
|---|---|---|
| Application Modernization & Legacy Transformation | Sprint 4 solution page (§H) | /solutions/application-modernization |
| Custom Software & Product Engineering | Approved service capability; **public case evidence: asset management advisory platform** (new web platform, microservices backend, React frontend) | /services/software-development |
| DevOps & Platform Engineering | Approved service capability; public case: on-premise Kubernetes platform | /services/devops-cloud |
| Quality Engineering, Test Management & Automation | Approved service capability + Ivan Petrov role; public case: automotive test automation framework | /services/test-automation |
| Managed Application & Platform Operations | Approved capability (L1–L3; "24/7 monitoring and support available under agreed SLAs" wording not restated on the hub — no SLA figures); public case: software delivery platform operations (L1–L2 scope) | /services/managed-services |
| OpenText ADM Engineering & Support | Sprint 3B.1 approved capability statement (§ OpenText ADM) | /solutions/opentext-adm |

Proof section: insurance archival (modernization), Kubernetes platform
(platform engineering), automotive test automation (quality) as cards, plus
contextual links to the asset-management case (custom software) and the
delivery-platform case (managed operations). Standard attribution note shown.

**No new evidence gaps**: custom software has public case evidence (asset
platform case). Not claimed anywhere on the hub: counts, customers,
certifications, partnerships, response times, uptime, guaranteed outcomes.
Navigation: "Solutions" added to the main nav; footer gained an
"All solutions" link; solution-page breadcrumbs became Home > Solutions > X
now that the hub exists.

## J. Sprint 6 — Homepage commercial refinement (2026-09-28)

Homepage reordered (Hero > Stats > Solutions preview > Services > Cases >
Team/Trust > How we work > CTA). The former "About VOTUM" intro section was
folded into the Team/Trust strip (facts kept: Sofia, founded {year},
software engineering and technology consultancy, discipline list; legal name
no longer rendered on the homepage — it remains on /contact and the legal
pages). Team strip uses config/team.js (photos, names, roles only — no bios,
tags, products or Person schema on the homepage).

Absolute claims removed from EN homepage copy (before → after):

- "Every engagement follows the same structured process" → "Our work is structured around three connected stages … The exact shape depends on the engagement."
- "2-week sprint cycles with live demos" → "Regular progress reviews and demos"
- "High automated test coverage as a standard" → "Test automation where it provides meaningful protection"
- "CI/CD and infrastructure automation by default" → "CI/CD and infrastructure automation where appropriate"
- "Cloud-native and DevOps best practices" → "Delivery practices matched to the target environment"
- "Zero-downtime production deployments" → "Controlled production deployments and rollback planning"
- "Observability and monitoring built in" → "Observability and monitoring appropriate to the environment"
- "Cloud and DevOps operations at scale" → "Application and platform operations"
- "Optional SLA and long-term support" → "Optional SLA-based long-term support, scope agreed per engagement"
- Services card tag "24/7 Monitoring" → "Monitoring & Operations"
- CTA banner / contact modal: all "{hours}" response-time promises removed (see the resolved §E item)

Homepage evidence scan after the change: zero occurrences of 24/7,
zero-downtime, 2-week, coverage-as-standard, response-time or "guaranteed"
phrases outside approved case-study content and the labelled illustrative
dashboards.
