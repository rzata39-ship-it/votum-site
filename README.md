# VOTUM Website

Marketing site for VOTUM — IT consulting & software development.
React 18 · Vite 5 · react-router 7 · plain CSS with design tokens. Served as static files by nginx (see `Dockerfile`, `nginx.conf`, `helm/`).

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
    ├── About, Blog, Article, Newsletter, NotFound, ContactModal
    └── legal/               LegalPage shell + Privacy, Terms, Cookies
```

## Things to know

- **Languages.** A language is offered only when it has every key English has (`src/i18n/languages.js`). DE and BG are currently incomplete and therefore hidden; they reappear automatically once completed.
- **Blog is switched off.** `features.blog` in `src/config/features.js` is `false`: no `/blog` routes, no nav / footer / 404 links, no `blog/index.html`, no sitemap entry. Code and translations are untouched — set it to `true` to bring the blog back.
- **Per-route metadata.** The site is a SPA. The `votum-static-pages` plugin in `vite.config.js` writes `about/index.html`, `blog/index.html`, `privacy.html`, `terms.html`, `cookies.html` and `404.html` with their own static `<head>`, so crawlers and link previews get correct titles without running JS. nginx serves these files first and falls back to `index.html`.
- **Legal pages** are React routes: `/legal.html` (provider identification / Impressum), `/privacy.html`, `/cookies.html` and `/terms.html` (historical URLs kept).
- **No cookies, no analytics, no third-party requests** on page load (fonts are self-hosted). If that changes, a consent banner becomes mandatory — see the note in `src/components/legal/Cookies.jsx`.
- **Forms never fake success.** Contact shows an error if the endpoint is missing or fails; the newsletter section is not rendered in production until `VITE_NEWSLETTER_ENDPOINT` is set.
- **Unknown URLs** render the 404 page, but nginx answers them with HTTP 200 (SPA fallback). Returning a real 404 status needs an nginx change (deployment config).
