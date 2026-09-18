// Published blog articles, keyed by slug.
//
// A teaser card on /blog only becomes a link once its `slug` (set in
// translations.js → blog.featured / blog.grid.articles) has an entry here.
// Cards without published content are rendered as plain, non-interactive
// teasers — never as dead links.
//
// Shape:
//   'my-article-slug': {
//     title:       'Article title',
//     description: 'Used for <meta name="description">',
//     date:        'April 2026',
//     author:      { name: '…', role: '…' },   // real people only
//     body:        ['Paragraph one…', 'Paragraph two…'],
//   }

export const articles = {}

export const hasArticle = (slug) => Boolean(slug && articles[slug])
