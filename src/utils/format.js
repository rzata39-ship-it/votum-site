// Replaces {token} placeholders in translation strings: fmt('Reply in {hours} h', { hours: 24 })
export function fmt(str, vars = {}) {
  return String(str).replace(/\{(\w+)\}/g, (match, key) => (key in vars ? vars[key] : match))
}
