import { translations } from './translations.js'

export const DEFAULT_LANG = 'en'

const isObject = (v) => v !== null && typeof v === 'object'

// Key paths present in `base` but absent in `target` (e.g. "about.hero.lead")
export function missingKeys(base, target, path = '') {
  return Object.entries(base).flatMap(([key, value]) => {
    const here = path ? `${path}.${key}` : key
    const other = isObject(target) ? target[key] : undefined
    if (isObject(value)) return missingKeys(value, other, here)
    return other === undefined ? [here] : []
  })
}

// Falls back to the default language per key, not per section
function deepMerge(base, override) {
  if (Array.isArray(base)) return Array.isArray(override) ? override : base
  if (!isObject(base) || !isObject(override)) return override === undefined ? base : override
  const out = { ...base }
  for (const key of Object.keys(override)) out[key] = deepMerge(base[key], override[key])
  return out
}

export const MISSING_KEYS = Object.fromEntries(
  Object.keys(translations).map((lang) => [lang, missingKeys(translations[DEFAULT_LANG], translations[lang])])
)

// A language is only offered once it covers every key of the default language,
// so visitors never get a half-translated site. Completing a translation in
// translations.js makes the language appear in the switcher automatically.
export const AVAILABLE_LANGS = Object.keys(translations).filter(
  (lang) => lang === DEFAULT_LANG || MISSING_KEYS[lang].length === 0
)

export const isAvailable = (lang) => AVAILABLE_LANGS.includes(lang)

export function buildLocale(lang) {
  return lang === DEFAULT_LANG
    ? translations[DEFAULT_LANG]
    : deepMerge(translations[DEFAULT_LANG], translations[lang])
}
