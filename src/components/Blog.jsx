import { Link, useSearchParams } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { hasArticle } from '../content/articles'
import useSeo from '../hooks/useSeo'
import Newsletter from './Newsletter'
import './Blog.css'

const FEATURED_CODE = `// The migration that almost wasn't
// Insurance archive data, moved off a legacy SaaS

async function migrateArchive(source, target) {
  const chunks = await partitionByDate(source)

  for (const chunk of chunks) {
    await validateChecksum(chunk)
    await writeToTarget(target, chunk)
    await verifyAuditTrail(chunk.id)
  }

  return { "status": "migrated" }
}`

const ALL = 'all'

export default function Blog() {
  const { locale } = useLanguage()
  const t = locale.blog
  const [searchParams, setSearchParams] = useSearchParams()
  useSeo('blog')

  // The active filter lives in the URL (?category=devops) so it is shareable
  // and survives reloads; unknown values fall back to "all".
  const requested = searchParams.get('category')
  const activeFilter = t.filters.some((f) => f.key === requested) ? requested : ALL

  const selectFilter = (key) => {
    setSearchParams(key === ALL ? {} : { category: key }, { replace: true, preventScrollReset: true })
  }

  // Product decision: the featured story is pinned under "All" and under its
  // own categories, and hidden for every other filter.
  const showFeatured = activeFilter === ALL || t.featured.categories.includes(activeFilter)
  const visibleArticles =
    activeFilter === ALL
      ? t.grid.articles
      : t.grid.articles.filter((a) => a.category === activeFilter)

  const featuredPublished = hasArticle(t.featured.slug)

  return (
    <main id="main" tabIndex={-1} className="blog-page">
      {/* ── Hero ── */}
      <section className="blog-hero">
        <div className="blog-hero__inner">
          <div>
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1 className="blog-hero__title">
              {t.hero.titleLines.map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h1>
          </div>
          <p className="blog-hero__sub">
            <strong>{t.hero.subStrong}</strong>{t.hero.sub}
          </p>
        </div>
      </section>

      {/* ── Filter ── */}
      <div className="blog-filter">
        <div className="blog-filter__inner" role="group" aria-label={t.filtersLabel}>
          {t.filters.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`filter-btn ${activeFilter === f.key ? 'filter-btn--on' : 'filter-btn--off'}`}
              aria-pressed={activeFilter === f.key}
              onClick={() => selectFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Featured ── */}
      {showFeatured && (
        <section className="blog-featured">
          <div className="blog-featured__inner">
            <article className="featured-card">
              <div className="featured-card__visual" aria-hidden="true">
                <pre className="featured-card__code">{FEATURED_CODE}</pre>
              </div>
              <div className="featured-card__body">
                <div>
                  <div className="featured-card__meta">
                    {t.featured.tags.map((tag) => (
                      <span key={tag.label} className={`article-tag article-tag--${tag.variant}`}>
                        {tag.label}
                      </span>
                    ))}
                    <span className="article-date">{t.featured.date}</span>
                  </div>
                  <h2 className="featured-card__title">{t.featured.title}</h2>
                  <p className="featured-card__excerpt">{t.featured.excerpt}</p>
                </div>
                <div className="featured-card__footer">
                  {t.featured.author ? (
                    <div className="author">
                      <div className="author__avatar" aria-hidden="true">{t.featured.author.initials}</div>
                      <div>
                        <div className="author__name">{t.featured.author.name}</div>
                        <div className="author__role">{t.featured.author.role}</div>
                      </div>
                    </div>
                  ) : <span />}
                  <ReadLink slug={t.featured.slug} published={featuredPublished}
                            label={t.featured.cta} pending={t.grid.inPreparation} />
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* ── Grid ── */}
      <section className={`blog-grid${showFeatured ? '' : ' blog-grid--top'}`} aria-live="polite">
        <div className="blog-grid__inner">
          <h2 className="blog-grid__heading">{t.grid.heading}</h2>
          {visibleArticles.length === 0 && !showFeatured && (
            <p className="blog-grid__empty">{t.grid.empty}</p>
          )}
          <div className="article-grid">
            {visibleArticles.map((a) => (
              <article key={a.title} className="article-card">
                <div className="article-card__visual" aria-hidden="true">
                  <div className="article-card__visual-icon">{a.icon}</div>
                  <span className={`article-card__visual-tag article-tag article-tag--${a.tagVariant}`}>
                    {a.tagLabel}
                  </span>
                </div>
                <div className="article-card__body">
                  <div className="article-card__meta">
                    <span className="article-date">{a.date}</span>
                    <span className="sr-only">{a.tagLabel}</span>
                  </div>
                  <h3 className="article-card__title">{a.title}</h3>
                  <p className="article-card__excerpt">{a.excerpt}</p>
                  <div className="article-card__footer">
                    <span className="article-read-time">{hasArticle(a.slug) ? a.readTime : ''}</span>
                    <ReadLink slug={a.slug} published={hasArticle(a.slug)} small
                              label={t.grid.readCta} pending={t.grid.inPreparation} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}

// A link only when the article really exists — otherwise a plain, non-interactive note
function ReadLink({ slug, published, label, pending, small = false }) {
  const size = small ? ' read-more--sm' : ''
  return published
    ? <Link to={`/blog/${slug}`} className={`read-more${size}`}>{label}</Link>
    : <span className={`read-more read-more--pending${size}`}>{pending}</span>
}
