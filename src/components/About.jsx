import { useLanguage } from '../context/useLanguage'
import { company } from '../config/company'
import useSeo from '../hooks/useSeo'
import { statValue, isTextStat } from './Stats'
import './About.css'

export default function About() {
  const { locale } = useLanguage()
  const t = locale.about
  const { openRoles } = company.careers
  useSeo('about')

  return (
    <main id="main" tabIndex={-1} className="about-page">
      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero__inner">
          <div>
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1 className="about-hero__title">
              {t.hero.titleLines.map((line, i) => (
                <span key={i}>{line}{' '}<br /></span>
              ))}
              {t.hero.titleTail} <span className="accent">{t.hero.titleAccent}</span>
            </h1>
          </div>
          <div className="about-hero__right">
            <p className="about-hero__lead">{t.hero.lead}</p>
            <div className="about-hero__founded">
              {/* Rendered only once the founding year is confirmed in config/company.js */}
              {company.foundingYear && (
                <div className="about-hero__founded-year">{company.foundingYear}</div>
              )}
              <div className="about-hero__founded-text">{t.hero.foundedText}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="about-stats">
        <div className="about-stats__inner">
          <div className="about-stats__grid">
            {t.stats.map(({ num, label, color }) => {
              const value = statValue(num)
              return (
                <div key={label} className={`about-stat about-stat--${color}`}>
                  <div className={`about-stat__num${isTextStat(value) ? ' about-stat__num--text' : ''}`}>{value}</div>
                  <div className="about-stat__label">{label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Mission ── */}
      <section className="about-mission">
        <div className="about-mission__inner">
          <div>
            <span className="eyebrow">{t.mission.eyebrow}</span>
            <div className="about-mission__quote">
              {t.mission.quote} <span className="accent">{t.mission.quoteAccent}</span>
            </div>
          </div>
          <div className="about-mission__body">
            {t.mission.paragraphs.map((p, i) => (
              <p key={i} className="about-mission__p">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="about-principles">
        <div className="about-principles__inner">
          <div className="about-principles__header">
            <span className="eyebrow">{t.principles.eyebrow}</span>
            <h2 className="section-h2">{t.principles.title}</h2>
          </div>
          <div className="about-principles__grid">
            {t.principles.cards.map((card) => (
              <div key={card.num} className={`principle-card principle-card--${card.color}`}>
                <span className="principle-card__num">{card.num}</span>
                <div className="principle-card__title">{card.title}</div>
                <p className="principle-card__body">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we're different ── */}
      <section className="about-diff">
        <div className="about-diff__inner">
          <div className="about-diff__header">
            <span className="eyebrow">{t.diff.eyebrow}</span>
            <h2 className="section-h2">{t.diff.title}</h2>
            <p className="section-lead">{t.diff.lead}</p>
          </div>
          <div className="about-diff__rows">
            <div className="diff-header">
              {t.diff.headers.map((h, i) => (
                <div key={i} className="diff-header__col">{h}</div>
              ))}
            </div>
            {t.diff.rows.map((row, i) => (
              <div key={i} className="diff-row">
                <div className="diff-row__col">
                  <div className="diff-row__label">{row.label}</div>
                  <div className="diff-row__text">{row.left}</div>
                </div>
                <div className="diff-row__col">
                  <div className="diff-row__label">{row.label}</div>
                  <div className="diff-row__text">{row.right}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="about-team">
        <div className="about-team__inner">
          <div className="about-team__header">
            <span className="eyebrow">{t.team.eyebrow}</span>
            <h2 className="section-h2">{t.team.title}</h2>
            <p className="about-team__note">{t.team.note}</p>
          </div>
          <div className="team-grid">
            {t.team.members.map((m) => (
              <div key={m.name + m.role} className={`team-card team-card--${m.kind}`}>
                <div className="team-card__head">
                  {m.photo
                    ? <img className="team-card__avatar team-card__avatar--photo" src={m.photo} alt="" width="72" height="72" loading="lazy" />
                    : m.kind === 'person'
                    ? <div className="team-card__avatar" aria-hidden="true">{m.initials}</div>
                    : <div className="team-card__avatar team-card__avatar--role" aria-hidden="true"><RoleIcon /></div>}
                  <div>
                    <div className="team-card__name">{m.name}</div>
                    <div className="team-card__role">{m.role}</div>
                  </div>
                </div>
                {m.bio && <p className="team-card__bio">{m.bio}</p>}
                <div className="team-card__tags">
                  {m.tags.map((tag) => (
                    <span key={tag} className="team-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="about-team__cta">
            <p className="about-team__cta-text">
              <strong>{t.team.cta.textBefore}</strong>{t.team.cta.textAfter}
            </p>
            {/* No published roles → no "open roles" CTA; offer a real contact channel instead */}
            {openRoles.length === 0 && (
              <a
                className="btn btn-secondary-teal"
                href={`mailto:${company.email}?subject=${encodeURIComponent(t.team.cta.emailSubject)}`}
              >
                {t.team.cta.emailButton}
              </a>
            )}
          </div>
          {openRoles.length > 0 && (
            <div id="open-roles" className="about-roles">
              <h3 className="about-roles__title">{t.team.cta.openRolesTitle}</h3>
              <ul className="about-roles__list">
                {openRoles.map((role) => (
                  <li key={role.title}>
                    <a href={role.url} target="_blank" rel="noopener noreferrer">
                      {role.title}{role.location ? ` — ${role.location}` : ''}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function RoleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
