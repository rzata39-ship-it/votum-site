import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import useOverlay from '../hooks/useOverlay'
import { scrollBehavior, scrollToId } from '../utils/scroll'
import { features } from '../config/features'
import LangSwitcher from './LangSwitcher'
import './Nav.css'

const SECTION_IDS = ['how', 'work', 'contact']
const MOBILE_MENU_ID = 'mobile-menu'
const DESKTOP_QUERY = '(min-width: 769px)'

export default function Nav({ onContact }) {
  const { locale } = useLanguage()
  const t = locale.nav
  const location = useLocation()
  const navigate = useNavigate()
  const isHome   = location.pathname === '/'
  const [scrolled,      setScrolled]      = useState(false)
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const navRef       = useRef(null)
  const menuRef      = useRef(null)
  const hamburgerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The drawer only exists on small screens — close it when the layout switches
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY)
    const onChange = (e) => { if (e.matches) setMenuOpen(false) }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Close after any navigation
  useEffect(() => { setMenuOpen(false) }, [location.pathname, location.hash])

  // Scroll lock, inert page content, Escape, focus trap and focus restore
  useOverlay(menuOpen, {
    onClose:         () => setMenuOpen(false),
    getContainers:   () => [navRef.current, menuRef.current],
    getInert:        () => [document.getElementById('page'), document.querySelector('.skip-link')],
    getInitialFocus: () => menuRef.current?.querySelector('a, button'),
    getReturnFocus:  () => hamburgerRef.current,
  })

  useEffect(() => {
    if (!isHome) { setActiveSection(''); return }

    const els = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const visible = {}

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible[entry.target.id] = entry.intersectionRatio
        })
        const best = Object.entries(visible).sort((a, b) => b[1] - a[1])[0]
        if (best && best[1] > 0) setActiveSection(best[0])
      },
      {
        threshold: [0.1, 0.3, 0.5],
        rootMargin: '-10% 0px -50% 0px',
      }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [isHome])

  // "Services" is a page (/services and /services/*); these are homepage sections
  const SECTION_LINKS = [
    { label: t.howWeWork, hash: 'how',      id: 'how'      },
    { label: t.work,      hash: 'work',     id: 'work'     },
  ]

  const goToSection = (hash) => {
    setMenuOpen(false)
    if (isHome) {
      window.history.replaceState(null, '', `/#${hash}`)
      scrollToId(hash)
    } else {
      // ScrollToHash (App.jsx) scrolls once the home page has rendered
      navigate(`/#${hash}`)
    }
  }

  const handleLogoClick = () => {
    setMenuOpen(false)
    setActiveSection('')
    if (isHome) {
      window.history.replaceState(null, '', '/')
      window.scrollTo({ top: 0, behavior: scrollBehavior() })
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <nav ref={navRef} className={`nav ${scrolled ? 'nav--scrolled' : ''}`} aria-label={t.menu}>
        <button
          className="nav__logo"
          onClick={handleLogoClick}
          aria-label={t.home}
          type="button"
        >
          <img src="/logo_word.svg" alt="" height="36" />
        </button>

        <ul className="nav__links">
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? 'nav__link--active' : '')}
            >
              {t.services}
            </NavLink>
          </li>
          {SECTION_LINKS.map(({ label, hash, id }) => (
            <li key={hash}>
              <a
                href={`/#${hash}`}
                onClick={(e) => { e.preventDefault(); goToSection(hash) }}
                className={isHome && activeSection === id ? 'nav__link--active' : ''}
                aria-current={isHome && activeSection === id ? 'true' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav__link--active' : '')}
            >
              {t.about}
            </NavLink>
          </li>
          {features.blog && (
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? 'nav__link--active' : '')}
              >
                {t.blog}
              </NavLink>
            </li>
          )}
        </ul>

        <LangSwitcher />

        <button
          type="button"
          className="btn btn-primary nav__cta"
          onClick={onContact}
        >
          {t.cta} →
        </button>

        <button
          ref={hamburgerRef}
          className={`nav__hamburger${menuOpen ? ' nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t.closeMenu : t.openMenu}
          aria-expanded={menuOpen}
          aria-controls={MOBILE_MENU_ID}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        id={MOBILE_MENU_ID}
        ref={menuRef}
        className="nav__mobile-menu"
        hidden={!menuOpen}
      >
        <Link to="/services" onClick={() => setMenuOpen(false)}>{t.services}</Link>
        {SECTION_LINKS.map(({ label, hash, id }) => (
          <a
            key={hash}
            href={`/#${hash}`}
            onClick={(e) => { e.preventDefault(); goToSection(hash) }}
            className={isHome && activeSection === id ? 'nav__link--active' : ''}
            aria-current={isHome && activeSection === id ? 'true' : undefined}
          >
            {label}
          </a>
        ))}
        <Link to="/about" onClick={() => setMenuOpen(false)}>{t.about}</Link>
        {features.blog && <Link to="/blog" onClick={() => setMenuOpen(false)}>{t.blog}</Link>}
        <button
          type="button"
          className="btn btn-primary nav__mobile-cta"
          onClick={() => { setMenuOpen(false); onContact() }}
        >
          {t.cta} →
        </button>
      </div>
    </>
  )
}
