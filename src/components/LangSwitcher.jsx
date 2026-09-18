import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/useLanguage'

function CheckIcon() {
  return (
    <svg className="lang-switcher__option-check" aria-hidden="true"
         width="14" height="14" viewBox="0 0 14 14" fill="none"
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
         strokeLinejoin="round">
      <path d="M2 7l4 4 6-7" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg className="lang-switcher__globe" aria-hidden="true" viewBox="0 0 14 14" fill="none"
         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
         strokeLinejoin="round">
      <circle cx="7" cy="7" r="5.5" />
      <path d="M1.5 7h11M7 1.5c1.6 1.7 2.5 3.6 2.5 5.5S8.6 11 7 12.5C5.4 10.8 4.5 8.9 4.5 7S5.4 3.2 7 1.5z" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg className="lang-switcher__chevron" aria-hidden="true" viewBox="0 0 10 10" fill="none"
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
         strokeLinejoin="round">
      <path d="M2 4l3 3 3-3" />
    </svg>
  )
}

export default function LangSwitcher() {
  const { lang, setLang, languages, locale } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const triggerRef = useRef(null)

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close on Escape and hand focus back to the trigger
  useEffect(() => {
    if (!open) return undefined
    const handler = (e) => {
      if (e.key !== 'Escape') return
      e.stopPropagation()
      setOpen(false)
      triggerRef.current?.focus()
    }
    document.addEventListener('keydown', handler, true)
    return () => document.removeEventListener('keydown', handler, true)
  }, [open])

  // Only languages with complete translations are offered (see i18n/languages.js)
  if (languages.length < 2) return null

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        ref={triggerRef}
        type="button"
        className="lang-switcher__trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${locale.nav.language}: ${lang.toUpperCase()}`}
        onClick={() => setOpen(!open)}
      >
        <GlobeIcon />
        <span>{lang.toUpperCase()}</span>
        <ChevronIcon />
      </button>

      {open && (
        <div className="lang-switcher__dropdown" role="menu" aria-label={locale.nav.language}>
          {languages.map((code) => (
            <button
              key={code}
              type="button"
              className={`lang-switcher__option${lang === code ? ' lang-switcher__option--active' : ''}`}
              role="menuitemradio"
              aria-checked={lang === code}
              lang={code}
              onClick={() => { setLang(code); setOpen(false); triggerRef.current?.focus() }}
            >
              {code.toUpperCase()}
              <CheckIcon />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
