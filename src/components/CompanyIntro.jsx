import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/useLanguage'
import { company } from '../config/company'
import { fmt } from '../utils/format'
import './CompanyIntro.css'

// Plain statement of who VOTUM is — the facts (founding year, legal entity)
// come from config/company.js so they cannot drift from the legal pages.
export default function CompanyIntro() {
  const ref = useReveal()
  const { locale } = useLanguage()
  const t = locale.intro

  return (
    <section id="about-votum" className="company-intro" ref={ref} aria-labelledby="about-votum-title">
      <div className="company-intro__inner reveal">
        <h2 id="about-votum-title">{t.title}</h2>
        <p>{fmt(t.body, { year: company.foundingYear, legalName: company.legalName })}</p>
      </div>
    </section>
  )
}
