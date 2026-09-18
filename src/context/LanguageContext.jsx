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
  const [lang, setLangState] = useState(readStoredLang)

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
