import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/useLanguage'
import { SOLUTIONS_HUB_PATH } from '../config/solutions'
import { SOLUTION_AREAS } from './SolutionsHub'
import './SolutionsPreview.css'

// Homepage preview of the six solution areas — deliberately compact
// (short title, one sentence, text link); the full cards live on /solutions.
// All six carry equal visual weight.
export default function SolutionsPreview() {
  const ref = useReveal()
  const { locale } = useLanguage()
  const t = locale.solutionsPreview

  return (
    <section id="solutions" className="solutions-preview" ref={ref}>
      <div className="section-header">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.title}</h2>
        <p>{t.lead}</p>
      </div>

      <ul className="solutions-preview__grid reveal">
        {t.items.map((item) => (
          <li key={item.key}>
            <Link to={SOLUTION_AREAS[item.key]} className="solutions-preview__item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="solutions-preview__more" aria-hidden="true">{t.itemLink}</span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="solutions-preview__all">
        <Link to={SOLUTIONS_HUB_PATH}>{t.allLink}</Link>
      </p>
    </section>
  )
}
