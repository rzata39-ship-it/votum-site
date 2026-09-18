import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { endpoints } from '../config/endpoints'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Newsletter sign-up. Expects VITE_NEWSLETTER_ENDPOINT to accept
 *   POST  multipart/form-data  { email }   →  2xx on success
 * (compatible with Formspree, Buttondown, Mailchimp proxy functions, …).
 *
 * Without an endpoint there is nothing real to submit to, so:
 *   - production: the section is not rendered at all
 *   - development: it is rendered disabled, with a visible warning
 * A success state is only ever shown after a real 2xx response.
 */
export default function Newsletter() {
  const { locale } = useLanguage()
  const t = locale.blog.newsletter
  const [state, setState] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')
  const inputRef = useRef(null)
  const submitting = useRef(false)

  const configured = Boolean(endpoints.newsletter)
  if (!configured && !import.meta.env.DEV) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitting.current || !configured) return

    const fd = new FormData(e.currentTarget)
    if (!EMAIL_RE.test(String(fd.get('email')).trim())) {
      setError(t.errors.email)
      setState('error')
      inputRef.current?.focus()
      return
    }

    submitting.current = true
    setState('loading')
    setError('')
    try {
      const res = await fetch(endpoints.newsletter, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      })
      if (!res.ok) throw new Error(`Newsletter endpoint responded ${res.status}`)
      setState('success')
    } catch (err) {
      if (import.meta.env.DEV) console.warn('[newsletter]', err)
      setError(t.errors.submit)
      setState('error')
    } finally {
      submitting.current = false
    }
  }

  const loading = state === 'loading'

  return (
    <section className="blog-newsletter" aria-labelledby="newsletter-title">
      <div className="blog-newsletter__inner">
        <span className="eyebrow blog-newsletter__eyebrow">{t.eyebrow}</span>
        <h2 id="newsletter-title" className="blog-newsletter__title">{t.title}</h2>
        <p className="blog-newsletter__sub">{t.sub}</p>

        {!configured && (
          <p className="blog-newsletter__dev-warning" role="note">{t.devWarning}</p>
        )}

        {state === 'success' ? (
          <p className="blog-newsletter__success" role="status">{t.success}</p>
        ) : (
          <form className="blog-newsletter__form" method="post" noValidate onSubmit={handleSubmit} aria-busy={loading}>
            <label htmlFor="newsletter-email" className="sr-only">{t.label}</label>
            <input
              ref={inputRef}
              id="newsletter-email"
              className="blog-newsletter__input"
              type="email"
              name="email"
              autoComplete="email"
              placeholder={t.placeholder}
              required
              aria-required="true"
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? 'newsletter-error' : 'newsletter-note'}
              disabled={!configured}
            />
            <button type="submit" className="btn btn-primary" disabled={loading || !configured}>
              {loading ? t.sending : t.button}
            </button>
          </form>
        )}

        <p id="newsletter-error" className="blog-newsletter__error" role="alert">{error}</p>
        <p id="newsletter-note" className="blog-newsletter__note">
          {t.note} {t.privacy.before}<Link to="/privacy.html">{t.privacy.link}</Link>{t.privacy.after}
        </p>
      </div>
    </section>
  )
}
