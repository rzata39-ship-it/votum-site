import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/useLanguage'
import { company } from '../config/company'
import { TEAM } from '../config/team'
import { fmt } from '../utils/format'
import './TeamTrust.css'

// Homepage team / trust strip — replaces the former CompanyIntro section and
// keeps its confirmed company facts (Sofia, founding year, disciplines).
// Photos, names and roles come from config/team.js; bios, tags and Person
// schema stay on /about. Keeps the old #about-votum anchor.
export default function TeamTrust() {
  const ref = useReveal()
  const { locale } = useLanguage()
  const t = locale.teamTrust

  return (
    <section id="about-votum" className="team-trust" ref={ref} aria-labelledby="team-trust-title">
      <div className="team-trust__inner reveal">
        <div className="team-trust__header">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 id="team-trust-title">{t.title}</h2>
          <p className="team-trust__body">{fmt(t.body, { year: company.foundingYear })}</p>
        </div>

        <ul className="team-trust__people">
          {TEAM.map((m) => (
            <li key={m.id} className="team-trust__person">
              <img
                src={m.photo}
                alt={`${m.name}, ${m.jobTitle} at VOTUM`}
                width="64"
                height="64"
                loading="lazy"
              />
              <div>
                <div className="team-trust__name">{m.name}</div>
                <div className="team-trust__role">{m.jobTitle}</div>
              </div>
            </li>
          ))}
        </ul>

        <p className="team-trust__link">
          <Link to="/about#team">{t.link}</Link>
        </p>
      </div>
    </section>
  )
}
