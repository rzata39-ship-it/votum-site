# VOTUM Website

Marketing site for VOTUM — IT consulting & software development.
React 18 · Vite 5 · react-router 7 · plain CSS with design tokens. Static build (`dist/`).

## Deployment

| Environment | Host | How | Indexable |
|---|---|---|---|
| **Production** | `https://www.votum.bg` (apex `votum.bg` → 308 → www, done by Vercel) | **Vercel** (DNS points there) · `vercel.json` | yes |
| Development | `https://votum.dev.polygran.io` | Jenkins → Docker (`Dockerfile`, `nginx.conf`) → Helm `values-dev.yaml` | no |
| Kubernetes "prod" | — | `helm/votum-site/values-prod.yaml`, `deploy-prod.ps1` — **not live**, DNS does not point to it | no (unless built with `SITE_ENV=production`) |

Vercel is the production source of truth. The Kubernetes prod files are kept but unused; switching to them requires a DNS change, an image built with `--build-arg SITE_ENV=production`, and the apex → www redirect (Vercel currently does it).

## Commands

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # → dist/  (also writes per-route HTML, sitemap.xml, robots.txt)
npm run preview   # serve dist/ locally
```

There is no lint, typecheck or test tooling in this project yet.

## Configuration

| What | Where |
|---|---|
| Company / legal / contact data, social URLs, response-time promise, open roles | `src/config/company.js` — `null` = not confirmed = hidden in the UI |
| Form endpoints | `.env` → `VITE_FORMSPREE_ENDPOINT`, `VITE_NEWSLETTER_ENDPOINT` (see `.env.example`) |
| Indexing (robots.txt, `<meta name="robots">`, `X-Robots-Tag`) | `SITE_ENV` at build time — see below and `src/config/environment.js` |
| Routes, page titles/descriptions, canonical, Open Graph, JSON-LD, sitemap | `src/config/seo.js` + `seo` section in `src/i18n/translations.js` |
| Service pages (`/services/<slug>`): slugs, related cases / services | `src/config/services.js`; copy in `servicePages` in `src/i18n/translations.js` |
| Case-study anchors on the homepage (`/#case-…`) | `src/config/cases.js` |
| All UI copy (EN / DE / BG) | `src/i18n/translations.js` |
| Blog article bodies | `src/content/articles.js` |
| Legal texts (English only) | `src/components/legal/` |

Open business / legal / content questions are tracked in:

- `LEGAL_AND_COMPANY_DATA_REQUIRED.md`
- `CONTENT_EVIDENCE_REQUIRED.md`
- `TRANSLATIONS_REQUIRED.md`

## Structure

```
src/
├── App.jsx                  routes, skip link, scroll handling
├── config/                  company.js · endpoints.js · environment.js · features.js · seo.js · services.js · cases.js
├── content/articles.js      published blog articles (by slug)
├── context/                 LanguageContext (language + locale)
├── i18n/                    translations.js · languages.js (completeness check, fallback)
├── hooks/                   useOverlay (focus trap / inert / scroll lock) · useSeo · useReveal
├── utils/                   format.js ({token} interpolation) · scroll.js
├── styles/                  tokens.css · global.css
└── components/
    ├── Modal.jsx            the one accessible dialog (contact, service, case study)
    ├── Nav, Hero, Stats, Services, HowWeWork, Cases, CtaBanner, Footer
    ├── About, Blog, Article, Newsletter, NotFound, ContactModal, BackToTop
    └── legal/               LegalPage shell + Privacy, Terms, Cookies
```

## Naming convention

| Use | For |
|---|---|
| **VOTUM** | the brand — in all running copy (never "Votum", never "VOTUM IT" on its own) |
| **VOTUM IT EOOD & Co KD** | the legal entity — footer, legal pages, JSON-LD `legalName`; on first mention in company context: "VOTUM (VOTUM IT EOOD & Co KD)" |
| **Вотум ИТ ЕООД и Ко КД** | the registered Bulgarian name — legal notice, JSON-LD `alternateName` |
| **votum.bg** | the domain; canonical host `https://www.votum.bg` |

Factual claims (numbers, 24/7, client figures, response times) need evidence before they go on the site — see `CONTENT_EVIDENCE_REQUIRED.md`.

## Things to know

- **Languages.** A language is offered only when it has every key English has (`src/i18n/languages.js`). DE and BG are currently incomplete and therefore hidden; they reappear automatically once completed.
- **Blog is switched off.** `features.blog` in `src/config/features.js` is `false`: no `/blog` routes, no nav / footer / 404 links, no `blog/index.html`, no sitemap entry. Code and translations are untouched — set it to `true` to bring the blog back.
- **Indexing is off unless `SITE_ENV=production`.** Production builds get `Allow: /` + `Sitemap:` in robots.txt and no robots meta; every other build gets `Disallow: /`, `<meta name="robots" content="noindex, nofollow">`, and (nginx) `X-Robots-Tag: noindex, nofollow`. On Vercel `SITE_ENV` is derived from `VERCEL_ENV`, so production is indexable and preview deployments are not, with no project setting needed (Vercel also sends `X-Robots-Tag: noindex` on preview URLs itself). Docker builds default to `development`.
- **Canonical host** is `company.siteUrl` (`https://www.votum.bg`) — canonical, `og:url`, `og:image`, JSON-LD, sitemap and robots all derive from it.
- **Pre-rendered pages.** The `votum-static-pages` plugin in `vite.config.js` writes one HTML file per route (`ROUTES` in `src/config/seo.js`) with its own static `<head>` **and the page body rendered at build time** (`src/entry-server.jsx`, `react-dom/server` + `StaticRouter`); `main.jsx` hydrates it. Crawlers, link previews and visitors without JS get the full content. `404.html` is not pre-rendered (it is served for every unknown path).
  - Render output must be deterministic: no `window`/`document`/`localStorage` during render (only in effects/handlers), no locale-dependent formatting without an explicit locale. The first render is always English; a stored language preference is applied after hydration. Hydration mismatches show up as console errors — check the console after changes. Vercel / nginx serve only these files; every other path gets `404.html` with a real 404 status (no SPA fallback).
- **Service pages** — `/services/technology-consulting`, `/software-development`, `/devops-cloud`, `/managed-services`, `/test-automation` — are generated from `SERVICES` in `src/config/services.js`: route, prerendered HTML, sitemap entry, homepage card link, footer link, breadcrumb (`Home > Services > …`, "Services" = the `/services` hub) and JSON-LD `Service` + `BreadcrumbList`. To add a service: add it to `SERVICES` (same position as its homepage card), add `seo.<key>` and `servicePages.<slug>` to `translations.js`, and add its `/services/<slug>/index.html` redirect to `vercel.json`. The hub, footer, contact page and the "Service areas" count pick it up automatically. Case-study teasers link to the case cards on the homepage (`/#case-…`, `src/config/cases.js`) until the case studies get their own pages; their text is the neutral `caseTeasers` copy, not the homepage case text (attribution is not confirmed yet).
- **`/services`** is the hub: breadcrumb `Home > Services`, one card per entry in `SERVICES`, header "Services" link and footer "All services". The "Service areas" stat is `{serviceCount}` = `SERVICES.length`.
- **`/contact`** reuses the contact modal (same endpoint) and shows only data from `src/config/company.js`; the address is labelled as the registered office — no opening hours or walk-in claims.
- **Legal pages** are React routes: `/legal.html` (provider identification / Impressum), `/privacy.html`, `/cookies.html` and `/terms.html` (historical URLs kept).
- **No cookies, no analytics, no third-party requests** on page load (fonts are self-hosted). If that changes, a consent banner becomes mandatory — see the note in `src/components/legal/Cookies.jsx`.
- **Forms never fake success.** Contact shows an error if the endpoint is missing or fails; the newsletter section is not rendered in production until `VITE_NEWSLETTER_ENDPOINT` is set.
- **URLs.** `/index.html` → `/` and `/about/index.html` → `/about` (308), trailing slashes are removed (`trailingSlash: false`). Vercel `cleanUrls` is deliberately **off**: it would redirect the historical `/privacy.html`, `/terms.html`, `/legal.html`, `/cookies.html` to extension-less URLs. `/assets/*` (content-hashed by Vite) is cached for a year (`immutable`); `/fonts/*` is not hashed, so it is cached for one day only (`max-age=86400`).
