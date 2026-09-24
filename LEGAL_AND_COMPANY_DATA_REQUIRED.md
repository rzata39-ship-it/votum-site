# Legal & company data required

The website no longer shows placeholders or unverified legal/company facts.
Everything below is either **hidden in the UI until provided** or **shown but
unconfirmed**. All values live in one place: `src/config/company.js`.
Fill a value in there and the corresponding UI appears automatically.

> Nothing in this list was invented or guessed. Where the repository contained
> a value (e.g. the legal name in the old footer) it is kept and marked
> "confirm".

## 1. Contradiction that needs a business decision

The old copy said **"Founded 2006"**, **"Eighteen years … later"** and the
footer shows **© 2026**. 2006 + 18 = 2024, so at least one statement is wrong,
and "founded" (year of company registration) may not be the same thing as
"18+ years of experience" (personal experience of the founder/team).

**Resolved on 2026-09-18:** the Commercial Register shows the company was
registered on **11.03.2024**, so `foundingYear = 2024` is set and the About
badge shows "2024". "Founded 2006" was wrong and is gone.

Still open:

- [ ] "18+ years of experience" therefore cannot be company age — it can only be personal experience (founder / team). It is still shown as a stat on Home and About and in the founder bio. Confirm the wording or change it (see `CONTENT_EVIDENCE_REQUIRED.md`).

## 2. Company data (`src/config/company.js`)

| Field | Current value | Status | Where it is used |
|---|---|---|---|
| `legalName` / `legalNameLocal` | `VOTUM IT EOOD & Co KD` / `Вотум ИТ ЕООД и Ко КД` | ✅ confirmed (Commercial Register: „Вотум ИТ ЕООД и Ко“, командитно дружество) | footer ©, legal pages contact block, JSON-LD |
| `tradingName` | `VOTUM` | confirm | legal texts, JSON-LD, og:site_name |
| `siteUrl` | `https://www.votum.bg` | ✅ confirmed (primary host on Vercel; apex redirects to www) | canonical URLs, Open Graph, `sitemap.xml`, `robots.txt`, JSON-LD |
| `email` | `info@votum.bg` | ✅ confirmed | footer, contact error message, legal pages, JSON-LD |
| `phone` | `+359 895 101 122` | confirm | footer, legal pages, JSON-LD |
| `address` | ul. Neofit Rilski 41, fl. 2, 1000 Sofia (Sredets), Bulgaria | ✅ confirmed (седалище) | legal contact block, privacy "controller" section, JSON-LD |
| `registrationNumber` | `207746015` | ✅ confirmed (ЕИК) | legal contact block, privacy "controller" section |
| `vatNumber` | `BG207746015` | ✅ confirmed (ЗДДС registration 03.04.2024, чл. 100 ал. 1) | legal contact block, JSON-LD |
| `representative` | `Hristo Kacarov, Managing Director` / `Христо Кацаров, Управител` | ✅ confirmed | Legal Notice, footer, legal contact blocks |
| `privacyEmail` | `null` | optional — the old cookie page used `privacy@votum.com`; it was removed because the mailbox is unconfirmed. Falls back to `email`. | privacy + cookie pages |
| `responseTimeHours` | `24` | **confirm** that a reply within 24 h is a promise the team keeps | CTA banner, contact modal, success message |
| `careers.openRoles` | `[]` | provide `{ title, location, url }` per role, or leave empty | /about#team |

### Social profiles — `company.social`

All three are `null`, so **no social icons are rendered** (the old ones pointed to `#linkedin`, `#github`, `#x`).

- [ ] LinkedIn URL
- [ ] GitHub URL
- [ ] X / Twitter URL

### Provider identification (Bulgarian E-Commerce Act, чл. 4 ЗЕТ) — status

| Requirement | Where it is shown |
|---|---|
| Full company name + legal form | footer (every page), `/legal.html`, legal contact blocks |
| Registered address | footer, `/legal.html`, legal contact blocks |
| UIC / ЕИК | footer, `/legal.html`, legal contact blocks |
| VAT number | footer, `/legal.html`, legal contact blocks |
| Email / phone | footer, `/legal.html`, legal contact blocks |
| Managing director / legal representative | footer, `/legal.html`, legal contact blocks |

- [ ] **Terms and Conditions** (`/terms.html`) are not required for an informational website and consist of unreviewed template clauses. Recommendation: remove the page (route, footer link, sitemap entry) unless a lawyer reviews it — decision pending.

## 3. Legal decisions (`company.legal`)

| Field | Effect while `null` |
|---|---|
| `governingLaw`, `courts` | The "Governing Law" section of the Terms is **omitted** (it contained `[Your Jurisdiction]`). |
| `supervisoryAuthority` `{ name, url }` | The right-to-complain sentence in the Privacy Policy is omitted. |
| `transferSafeguards` | The Privacy Policy states the fact that Formspree (USA) processes contact-form data, but not the legal safeguard (SCCs / EU-US DPF / …). |
| `lastUpdated.privacy / terms / cookies` | No "Last updated" date is shown. The old pages said "January 2026", but the texts changed materially — set the date when the texts are approved. |

The privacy "Who is responsible for your data" (controller) section is now
rendered (address and registration number are set) and names
`VOTUM IT EOOD & Co KD` as controller — confirm with legal counsel that this
entity (and not another one) is the controller.

## 4. Open legal questions (need a lawyer / DPO — not solvable in code)

- [ ] **Whole documents need legal review.** Privacy, Terms and Cookies originate from a generic template. Only placeholders, template notes and statements contradicted by the code were removed. In particular the Terms contain commercial clauses nobody confirmed: 30-day payment term, 1.5 % monthly late interest, liability cap of 12 months' fees, "as-is" warranty disclaimer, mediation → arbitration.
- [ ] **Controller / administrator** — now shown as VOTUM IT EOOD & Co KD; confirm, and add a DPO contact if one is required.
- [ ] **Legal bases** (GDPR Art. 6) per purpose — contact enquiries, newsletter, server logs. The contact form shows a neutral notice, not a consent checkbox; confirm this matches the chosen legal basis.
- [ ] **Retention periods** — contact enquiries, server logs, newsletter data. The policy only contains the template's generic wording.
- [ ] **Sub-processors** — confirmed from code: **Formspree** (contact form). To be confirmed: hosting provider, e-mail provider, CRM (if any), newsletter provider (once chosen). Are DPAs signed? The template's phrase "under confidentiality agreements" was removed because it is unverified.
- [ ] **International transfers** — Formspree is US-based; which safeguard applies?
- [ ] **Server logs** — the policy describes standard web-server logs (IP, time, URL, referrer, user agent). Confirm what the ingress/nginx actually logs and for how long.
- [ ] **Security statements** — kept: HTTPS and limited access. Removed as unverified: "secure servers and firewalls", "regular security assessments". Confirm or adjust.
- [ ] **CCPA section** and the "Do Not Track" promise were removed (they described analytics/marketing behaviour that does not exist). Confirm no CCPA obligations apply.
- [ ] **Language versions** — legal pages exist in English only. Decide whether BG / DE versions are legally required for your audience.

## 5. Cookies / analytics — verified against the code

| Item | Finding |
|---|---|
| Cookies set by the site | **none** |
| Analytics (Google Analytics etc.) | **none** — all such claims were removed from the policies |
| Marketing / social pixels | **none** |
| Browser storage | `localStorage["votum-lang"]` — language preference, set only after the visitor picks a language |
| Third-party requests on page load | **none** — Inter and JetBrains Mono were moved from Google Fonts to self-hosted files (Google Fonts transmits visitor IPs to Google, which has been ruled a GDPR issue in Germany) |
| Third-party requests on user action | contact form → Formspree (POST, no cookies) |

Consequence: **no consent banner was added** — only strictly-necessary storage
is used, and the Cookie Policy says exactly that. If analytics or any other
non-essential storage is added later, a consent mechanism (equal Accept/Reject,
Manage preferences, scripts loaded only after consent, a "Cookie settings"
footer link) becomes mandatory and the inventory in
`src/components/legal/Cookies.jsx` must be updated.

## 6. Endpoints (`.env`, see `.env.example`)

- [ ] `VITE_FORMSPREE_ENDPOINT` — exists; confirm it points to the production form and who receives the e-mails.
- [ ] `VITE_NEWSLETTER_ENDPOINT` — **missing.** Must accept `POST multipart/form-data { email }` → `2xx`. Until it is set the newsletter section is hidden in production (shown disabled with a warning in dev). Also needed: provider choice, double-opt-in decision, and the matching privacy-policy wording.
