import { useEffect, useState } from 'react'
import { useLanguage } from '../context/useLanguage'
import { scrollBehavior } from '../utils/scroll'
import './BackToTop.css'

const SHOW_AFTER = 600 // px scrolled before the button appears

export default function BackToTop() {
  const { locale } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: scrollBehavior() })
    // Keyboard users continue from the top of the page, not from a hidden button
    document.getElementById('main')?.focus({ preventScroll: true })
  }

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' back-to-top--visible' : ''}`}
      onClick={handleClick}
      aria-label={locale.nav.backToTop}
      title={locale.nav.backToTop}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  )
}
