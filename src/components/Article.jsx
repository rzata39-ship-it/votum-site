import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { articles } from '../content/articles'
import { absoluteUrl } from '../config/seo'
import useSeo from '../hooks/useSeo'
import NotFound from './NotFound'
import './Blog.css'

export default function Article() {
  const { slug } = useParams()
  const article = articles[slug]
  return article ? <ArticleBody slug={slug} article={article} /> : <NotFound />
}

function ArticleBody({ slug, article }) {
  const { locale } = useLanguage()
  useSeo('blog', {
    title: `${article.title} — VOTUM`,
    description: article.description,
    canonical: absoluteUrl(`/blog/${slug}`),
  })

  return (
    <main id="main" tabIndex={-1} className="blog-page">
      <article className="article">
        <Link to="/blog" className="read-more article__back">{locale.article.back}</Link>
        <span className="article-date">{article.date}</span>
        <h1 className="article__title">{article.title}</h1>
        {article.author && (
          <p className="article__author">{article.author.name} · {article.author.role}</p>
        )}
        {article.body.map((paragraph, i) => <p key={i} className="article__p">{paragraph}</p>)}
      </article>
    </main>
  )
}
