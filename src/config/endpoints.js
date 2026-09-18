// Form backends. Configured via .env (see .env.example).
// A missing endpoint never results in a simulated success — the form
// reports an error (contact) or is not offered at all (newsletter).

export const endpoints = {
  contact:    import.meta.env.VITE_FORMSPREE_ENDPOINT  || null,
  newsletter: import.meta.env.VITE_NEWSLETTER_ENDPOINT || null,
}
