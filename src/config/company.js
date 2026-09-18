// ─────────────────────────────────────────────────────────────
// Single source of truth for company / legal / contact data.
//
// RULES
//  - `null` means "not confirmed". The UI hides anything that is null —
//    it never falls back to a placeholder or an invented value.
//  - Do not fill a value in here without a reliable source.
//    Open items are tracked in LEGAL_AND_COMPANY_DATA_REQUIRED.md.
//  - This file must stay free of `import.meta` so the build plugin
//    (vite.config.js) can import it from Node.
// ─────────────────────────────────────────────────────────────

export const company = {
  // Bulgarian Commercial Register (Търговски регистър), UIC 207746015
  legalName:      'VOTUM IT EOOD & Co KD',      // transliteration used on the site
  legalNameLocal: 'Вотум ИТ ЕООД и Ко КД',       // registered name + legal form (командитно дружество)
  tradingName:    'VOTUM',

  // Used for canonical URLs, Open Graph, sitemap.xml and robots.txt.
  siteUrl: 'https://votum.bg',

  email: 'info@votum.bg',
  phone: { display: '+359 895 101 122', href: 'tel:+359895101122' },

  // Registered office (седалище и адрес на управление)
  address: {
    street:     'ul. Neofit Rilski 41, fl. 2',
    district:   'Sredets',
    postalCode: '1000',
    city:       'Sofia',
    country:    'Bulgaria',
  },
  registrationNumber: '207746015',     // ЕИК / UIC
  vatNumber:          'BG207746015',   // VAT registration (ЗДДС) since 03.04.2024
  foundingYear:       2024,            // company registered 11.03.2024 — NOT the same as "years of experience"

  // Managing director / legal representative (управител)
  representative:      'Hristo Kacarov, Managing Director',
  representativeLocal: 'Христо Кацаров, Управител',

  // ── Not confirmed — hidden in the UI until provided ──────────
  privacyEmail:       null, // dedicated privacy mailbox, falls back to `email`

  // Legal decisions — sections depending on these are omitted while null
  legal: {
    governingLaw:         null, // e.g. 'the Republic of Bulgaria'
    courts:               null, // e.g. 'the competent courts in Sofia'
    supervisoryAuthority: null, // { name, url }
    transferSafeguards:   null, // sentence describing the safeguards for transfers outside the EEA (e.g. SCCs)
    lastUpdated: { privacy: null, terms: null, cookies: null }, // e.g. 'January 2026'
  },

  // Only entries with a real URL are rendered. No URL → no icon.
  social: {
    linkedin: null,
    github:   null,
    x:        null,
  },

  // Response-time promise used in the CTA banner and contact modal ({hours})
  responseTimeHours: 24,

  // Open positions: [{ title, location, url }]. Empty → "open roles" CTA is hidden.
  careers: {
    openRoles: [],
  },
}

export const privacyContactEmail = company.privacyEmail || company.email

export const socialLinks = [
  { key: 'linkedin', label: 'LinkedIn',    url: company.social.linkedin },
  { key: 'github',   label: 'GitHub',      url: company.social.github   },
  { key: 'x',        label: 'X / Twitter', url: company.social.x        },
].filter((s) => Boolean(s.url))
