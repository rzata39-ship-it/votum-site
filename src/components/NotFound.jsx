import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import useSeo from '../hooks/useSeo'
import './NotFound.css'

export default function NotFound() {
  const { locale } = useLanguage()
  const t = locale.notFound
  useSeo('notFound')

  return (
    <main id="main" tabIndex={-1} className="not-found">
      <div className="not-found__inner">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1 className="not-found__title">{t.title}</h1>
        <p className="not-found__body">{t.body}</p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn-primary btn-lg">{t.home}</Link>
          <Link to="/blog" className="btn btn-secondary-teal btn-lg">{t.blog}</Link>
        </div>
      </div>
    </main>
  )
}
