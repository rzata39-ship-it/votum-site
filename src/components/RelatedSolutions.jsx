import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { solutionPath } from '../config/solutions'

// Contextual link to a solution page, shown on the service / case pages listed
// in config/solutions.js → linkedFrom. Anchor text per page comes from
// translations solutionPages[slug].inbound[pageSlug].
export default function RelatedSolutions({ solutions, pageSlug }) {
  const { locale } = useLanguage()
  return solutions.map((s) => {
    const t = locale.solutionPages[s.slug]
    const inbound = t.inbound[pageSlug]
    return (
      <aside key={s.slug} className="related-solution" aria-label={t.inboundLabel}>
        <span className="related-solution__label">{t.inboundLabel}</span>
        <p>{inbound.lead} <Link to={solutionPath(s.slug)}>{inbound.link} →</Link></p>
      </aside>
    )
  })
}
