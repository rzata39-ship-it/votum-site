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
| `45+` projects delivered | Home stats, About stats, Blog hero ("across 45+ engagements") | project list / count, as of which date |
| `18+` years of experience | Home stats, About stats | the company was registered in **2024**, so this can only be personal experience of the founder/team — confirm whose, or reword (e.g. "18+ years of leadership experience") |
| `80%` client retention | Home stats, About stats | definition (repeat clients / total?), period |
| `20+` expert / senior engineers | Home stats, About stats | headcount incl. or excl. the on-demand network |
| `1,000+` users, `150,000+` employees | Case: Tier 1 OEM | client-approved figures |
| `24/7` continuity / "24/7 managed operations" | Case: Tier 1 OEM | the described scope is L1–L2 support under SLA — confirm 24/7 coverage is contractual |
| "24/7 system monitoring" | Service: Managed Services | confirm it is offered as standard |
| `2` cluster environments | Case: Kubernetes platform | descriptive (dev + prod) — low risk |
| "Response within 24 h" | CTA banner, contact modal | see `responseTimeHours` in `src/config/company.js` |
| "Senior engineers only", "no juniors" | About principles / comparison table | confirm it is literally true |
| "Zero-downtime production deployments" | How we work — Phase 03 | names a technique, not a metric — kept |

## D. People & articles

- **Team (About)**: the placeholder names ("Ivan Mitev", anonymous "Senior Engineer" cards) were replaced on 2026-09-18 with the real team provided by the client: Hristo Kacarov (Managing Director / CTO), Velislav Kunev (Systems Architect), Nikolay Peshev (Senior DevOps/Cloud Engineer), Blagovest Kasabov (Senior FullStack Engineer), Ivan Petrov (Senior Test Manager). Cards show name, role and role-area tags only — **no personal bios were written** (none were provided). The "Extended team / on demand" role card was kept.
  - [ ] Optional: short bios per person, photos, LinkedIn profiles.
- **Blog featured author** was the fictitious "Ivan Mitev"; the author block is now hidden (`author: null`) until the article exists and its real author is known.
- **Blog**: all 7 entries (1 featured + 6 cards) are teasers — **no article body exists anywhere in the repository**. They are therefore rendered as non-interactive cards labelled "Full article in preparation" instead of dead `href="#"` links, and read-time labels are hidden. Titles, dates (Oct 2025 – Apr 2026) and excerpts were left as they were; some titles contain figures ("400GB", "99.98% uptime", "4 minutes", "95% test coverage") that must be backed by the article when it is published.
  - To publish: add the article to `src/content/articles.js` and set the same `slug` on the card in `translations.js` — the card then links to `/blog/<slug>`.
  - [ ] Decide whether unpublished teasers with past dates should stay visible at all.
