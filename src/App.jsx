import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { useLanguage } from './context/useLanguage'
import useSeo from './hooks/useSeo'
import { scrollToId } from './utils/scroll'
import { features } from './config/features'
import Nav          from './components/Nav'
import Hero         from './components/Hero'
import Stats        from './components/Stats'
import CompanyIntro from './components/CompanyIntro'
import Services     from './components/Services'
import HowWeWork    from './components/HowWeWork'
import Cases        from './components/Cases'
import CtaBanner    from './components/CtaBanner'
import Footer       from './components/Footer'
import BackToTop    from './components/BackToTop'
import ContactModal from './components/ContactModal'
import About        from './components/About'
import ServicesHub  from './components/ServicesHub'
import ServicePage  from './components/ServicePage'
import ContactPage  from './components/ContactPage'
import Blog         from './components/Blog'
import Article      from './components/Article'
import NotFound     from './components/NotFound'
import Privacy      from './components/legal/Privacy'
import Terms        from './components/legal/Terms'
import LegalNotice  from './components/legal/LegalNotice'
import Cookies      from './components/legal/Cookies'

function Home({ onContact }) {
  useSeo('home')

  return (
    <main id="main" tabIndex={-1}>
      <Hero onContact={onContact} />
      <Stats />
      <CompanyIntro />
      <Services />
      <HowWeWork />
      <Cases />
      <CtaBanner onContact={onContact} />
    </main>
  )
}

// New page → top. URL with #hash (navigation or direct load) → that section.
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash && scrollToId(decodeURIComponent(hash.slice(1)))) return
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

function SkipLink() {
  const { locale } = useLanguage()

  const handleClick = (e) => {
    e.preventDefault()
    const main = document.getElementById('main')
    main?.focus({ preventScroll: true })
    main?.scrollIntoView()
  }

  return <a href="#main" className="skip-link" onClick={handleClick}>{locale.nav.skip}</a>
}

// Router-agnostic: main.jsx wraps it in BrowserRouter, entry-server.jsx
// (build-time prerender) in StaticRouter.
export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact  = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)

  return (
    <LanguageProvider>
      <SkipLink />
      <Nav onContact={openContact} />
      {/* #page is made inert while the mobile drawer is open */}
      <div id="page">
        <Routes>
          <Route path="/"             element={<Home  onContact={openContact} />} />
          <Route path="/about"        element={<About />} />
          <Route path="/services"     element={<ServicesHub />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/contact"      element={<ContactPage onContact={openContact} />} />
          {features.blog && <Route path="/blog"       element={<Blog />} />}
          {features.blog && <Route path="/blog/:slug" element={<Article />} />}
          <Route path="/privacy.html" element={<Privacy />} />
          <Route path="/terms.html"   element={<Terms />} />
          <Route path="/legal.html"   element={<LegalNotice />} />
          <Route path="/cookies.html" element={<Cookies />} />
          <Route path="*"             element={<NotFound />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
      <ScrollManager />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </LanguageProvider>
  )
}
