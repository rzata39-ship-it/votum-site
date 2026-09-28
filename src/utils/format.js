// Replaces {token} placeholders in translation strings: fmt('Founded in {year}', { year: 2024 })
export function fmt(str, vars = {}) {
  return String(str).replace(/\{(\w+)\}/g, (match, key) => (key in vars ? vars[key] : match))
}
