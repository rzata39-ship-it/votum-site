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
├── config/                  company.js · endpoints.js · features.js · seo.js
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

## Things to know

- **Languages.** A language is offered only when it has every key English has (`src/i18n/languages.js`). DE and BG are currently incomplete and therefore hidden; they reappear automatically once completed.
- **Blog is switched off.** `features.blog` in `src/config/features.js` is `false`: no `/blog` routes, no nav / footer / 404 links, no `blog/index.html`, no sitemap entry. Code and translations are untouched — set it to `true` to bring the blog back.
- **Indexing is off unless `SITE_ENV=production`.** Production builds get `Allow: /` + `Sitemap:` in robots.txt and no robots meta; every other build gets `Disallow: /`, `<meta name="robots" content="noindex, nofollow">`, and (nginx) `X-Robots-Tag: noindex, nofollow`. On Vercel `SITE_ENV` is derived from `VERCEL_ENV`, so production is indexable and preview deployments are not, with no project setting needed (Vercel also sends `X-Robots-Tag: noindex` on preview URLs itself). Docker builds default to `development`.
- **Canonical host** is `company.siteUrl` (`https://www.votum.bg`) — canonical, `og:url`, `og:image`, JSON-LD, sitemap and robots all derive from it.
- **Per-route metadata.** The site is a SPA. The `votum-static-pages` plugin in `vite.config.js` writes `about/index.html`, `blog/index.html`, `privacy.html`, `terms.html`, `cookies.html` and `404.html` with their own static `<head>`, so crawlers and link previews get correct titles without running JS. Vercel / nginx serve only these files; every other path gets `404.html` with a real 404 status (no SPA fallback). Vercel / nginx serve only these files; every other path gets `404.html` with a real 404 status (no SPA fallback).
- **Legal pages** are React routes: `/legal.html` (provider identification / Impressum), `/privacy.html`, `/cookies.html` and `/terms.html` (historical URLs kept).
- **No cookies, no analytics, no third-party requests** on page load (fonts are self-hosted). If that changes, a consent banner becomes mandatory — see the note in `src/components/legal/Cookies.jsx`.
- **Forms never fake success.** Contact shows an error if the endpoint is missing or fails; the newsletter section is not rendered in production until `VITE_NEWSLETTER_ENDPOINT` is set.
- **URLs.** `/index.html` → `/` and `/about/index.html` → `/about` (308), trailing slashes are removed (`trailingSlash: false`). Vercel `cleanUrls` is deliberately **off**: it would redirect the historical `/privacy.html`, `/terms.html`, `/legal.html`, `/cookies.html` to extension-less URLs. `/assets/*` (content-hashed by Vite) is cached for a year (`immutable`); `/fonts/*` is not hashed, so it is cached for one day only (`max-age=86400`).
