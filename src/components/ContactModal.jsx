import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/useLanguage'
import { company } from '../config/company'
import { endpoints } from '../config/endpoints'
import { fmt } from '../utils/format'
import Modal from './Modal'
import './ContactModal.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_BRIEF = 10
const FIELD_ORDER = ['name', 'email', 'brief']

export default function ContactModal({ open, onClose }) {
  const { locale } = useLanguage()
  const t = locale.contact
  const vars = { hours: company.responseTimeHours, email: company.email }

  const [state, setState] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})
  const formRef = useRef(null)
  const successRef = useRef(null)
  const submitting = useRef(false) // guards against double submits before re-render

  useEffect(() => {
    if (!open) { setState('idle'); setErrors({}); submitting.current = false }
  }, [open])

  useEffect(() => {
    if (state === 'success') successRef.current?.focus()
  }, [state])

  const validate = (data) => {
    const errs = {}
    if (!data.name.trim()) errs.name = t.errors.name
    if (!EMAIL_RE.test(data.email.trim())) errs.email = t.errors.email
    if (data.brief.trim().length < MIN_BRIEF) errs.brief = t.errors.brief
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitting.current) return

    const fd = new FormData(formRef.current)
    const errs = validate(Object.fromEntries(fd))
    if (Object.keys(errs).length) {
      setErrors(errs)
      const first = FIELD_ORDER.find((name) => errs[name])
      formRef.current.elements[first]?.focus()
      return
    }

    submitting.current = true
    setState('loading')
    setErrors({})

    try {
      if (!endpoints.contact) throw new Error('VITE_FORMSPREE_ENDPOINT is not set')
      const res = await fetch(endpoints.contact, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      })
      if (!res.ok) throw new Error(`Contact endpoint responded ${res.status}`)
      setState('success')
    } catch (err) {
      if (import.meta.env.DEV) console.warn('[contact form]', err)
      setErrors({ submit: fmt(t.errors.submit, vars) })
      setState('error')
    } finally {
      submitting.current = false
    }
  }

  const loading = state === 'loading'

  return (
    <Modal open={open} onClose={onClose} labelledBy="contact-modal-title" size="md" sheet>
      {state === 'success' ? (
        <div className="contact-modal__success" role="status">
          <SuccessIcon />
          <h2 id="contact-modal-title" className="contact-modal__success-title" tabIndex={-1} ref={successRef}>
            {t.success.title}
          </h2>
          <p className="contact-modal__success-body">{fmt(t.success.body, vars)}</p>
          <span className="contact-modal__success-detail">{fmt(t.success.detail, vars)}</span>
        </div>
      ) : (
        <>
          <span className="contact-modal__eyebrow">{t.eyebrow}</span>
          <h2 id="contact-modal-title" className="contact-modal__title">{t.title}</h2>
          <p className="contact-modal__sub">{fmt(t.sub, vars)}</p>

          {/* method="post": form data can never end up in the URL, even without JS */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            method="post"
            action={endpoints.contact || undefined}
            noValidate
            className="contact-form"
            aria-busy={loading}
          >
            <input type="hidden" name="_subject" value={`New contact from ${new URL(company.siteUrl).host}`} />
            {/* Honeypot — hidden from users and assistive technology */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="contact-form__honeypot"
            />
            <div className="contact-form__row">
              <Field label={t.fields.name} name="name" type="text" autoComplete="name" required
                     placeholder={t.placeholders.name} error={errors.name} />
              <Field label={t.fields.company} name="company" type="text" autoComplete="organization"
                     placeholder={t.placeholders.company} />
            </div>
            <Field label={t.fields.email} name="email" type="email" autoComplete="email" required
                   placeholder={t.placeholders.email} error={errors.email} />
            <Field label={t.fields.brief} name="brief" type="textarea" required
                   placeholder={t.placeholders.brief} error={errors.brief} />

            <p className="contact-form__privacy">
              {t.privacy.before}
              <a href="/privacy.html" target="_blank" rel="noopener noreferrer">{t.privacy.link}</a>
              {t.privacy.after}
            </p>

            <div className="contact-form__status" role="alert">
              {errors.submit && (
                <div className="contact-form__error contact-form__error--submit">{errors.submit}</div>
              )}
            </div>

            <div className="contact-form__submit">
              <span className="contact-form__note">{t.note}</span>
              <button type="submit" className="btn btn-primary btn-lg contact-form__btn" disabled={loading}>
                {loading ? <><Spinner /><span>{t.sending}</span></> : t.send}
              </button>
            </div>
          </form>
        </>
      )}
    </Modal>
  )
}

function Field({ label, name, type, placeholder, error, required = false, autoComplete }) {
  const id = `contact-${name}`
  const errorId = `${id}-error`
  const props = {
    id, name, placeholder, required, autoComplete,
    'aria-required': required || undefined,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
    className: error ? 'error' : undefined,
  }

  return (
    <div className="contact-form__field">
      <label htmlFor={id}>
        {label}
        {required && <span className="contact-form__required" aria-hidden="true">*</span>}
      </label>
      {type === 'textarea' ? <textarea {...props} /> : <input type={type} {...props} />}
      {error && <span id={errorId} className="contact-form__error">{error}</span>}
    </div>
  )
}

function SuccessIcon() {
  return (
    <div className="contact-modal__success-icon" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2.5"
           strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12l5 5 11-13" />
      </svg>
    </div>
  )
}

function Spinner() {
  return <span className="contact-spinner" aria-hidden="true" />
}
