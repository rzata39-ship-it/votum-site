import { createContext, useEffect, useMemo, useState } from 'react'
import { AVAILABLE_LANGS, DEFAULT_LANG, buildLocale, isAvailable } from '../i18n/languages'

export const LanguageContext = createContext(null)

const STORAGE_KEY = 'votum-lang'

// localStorage can throw (private mode, blocked site data)
function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored && isAvailable(stored) ? stored : DEFAULT_LANG
  } catch {
    return DEFAULT_LANG
  }
}

export function LanguageProvider({ children }) {
  // Always start in the default language: that is what the pre-rendered HTML
  // contains, so the hydrating render must match it. A stored preference is
  // applied only after hydration.
  const [lang, setLangState] = useState(DEFAULT_LANG)

  useEffect(() => {
    const stored = readStoredLang()
    if (stored !== DEFAULT_LANG) setLangState(stored)
  }, [])

  const setLang = (newLang) => {
    if (!isAvailable(newLang)) return
    setLangState(newLang)
    try { localStorage.setItem(STORAGE_KEY, newLang) } catch { /* ignore */ }
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, locale: buildLocale(lang), languages: AVAILABLE_LANGS }),
    [lang]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
