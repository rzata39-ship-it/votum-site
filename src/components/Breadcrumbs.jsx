import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { breadcrumbTrail } from '../config/seo'
import './Breadcrumbs.css'

// Visible breadcrumb — the same trail as the BreadcrumbList JSON-LD (config/seo.js)
export default function Breadcrumbs({ routeKey }) {
  const { locale } = useLanguage()
  const trail = breadcrumbTrail(routeKey, locale.seo)
  if (!trail) return null

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {trail.map((crumb, i) => (
          <li key={crumb.path}>
            {i < trail.length - 1
              ? <Link to={crumb.path}>{crumb.name}</Link>
              : <span aria-current="page">{crumb.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
