# Translations required

The language switcher only offers languages whose translation is **complete**
(`src/i18n/languages.js` compares every key against English at start-up).
Currently available: **EN**.

German and Bulgarian cover the Home page, navigation, contact modal and footer,
but **not** About, Blog, the 404 page or page metadata. Shipping them would
produce a mixed-language site, so DE and BG are hidden until the keys below
exist in `src/i18n/translations.js`. No code change is needed afterwards —
a language appears in the switcher automatically once nothing is missing.
The existing DE/BG texts were kept and updated together with the English ones.

Not machine-translated on purpose: About and Blog are positioning copy with
claims that are still being verified (see `CONTENT_EVIDENCE_REQUIRED.md`);
they should be translated by a person once the English text is final.

Also English-only (not part of `translations.js`):
- the legal pages (`src/components/legal/*`) — translate only with legal review
- the text inside the three "How we work" dashboard mock-ups (`Phase*.jsx`)

`hreflang` tags were not added: there are no separate per-language URLs
(the language is a client-side preference stored in `localStorage`).

## DE — 231 missing keys

| Section | Missing |
|---|---|
| `about.hero` | 7 |
| `about.stats` | 12 |
| `about.mission` | 6 |
| `about.principles` | 26 |
| `about.diff` | 17 |
| `about.team` | 37 |
| `blog.hero` | 6 |
| `blog.filtersLabel` | 1 |
| `blog.filters` | 12 |
| `blog.featured` | 14 |
| `blog.grid` | 58 |
| `blog.newsletter` | 15 |
| `article.back` | 1 |
| `notFound.eyebrow` | 1 |
| `notFound.title` | 1 |
| `notFound.body` | 1 |
| `notFound.home` | 1 |
| `notFound.blog` | 1 |
| `seo.home` | 2 |
| `seo.about` | 2 |
| `seo.blog` | 2 |
| `seo.privacy` | 2 |
| `seo.terms` | 2 |
| `seo.cookies` | 2 |
| `seo.notFound` | 2 |

<details><summary>Full key list</summary>

```
about.hero.eyebrow
about.hero.titleLines.0
about.hero.titleLines.1
about.hero.titleTail
about.hero.titleAccent
about.hero.lead
about.hero.foundedText
about.stats.0.num
about.stats.0.label
about.stats.0.color
about.stats.1.num
about.stats.1.label
about.stats.1.color
about.stats.2.num
about.stats.2.label
about.stats.2.color
about.stats.3.num
about.stats.3.label
about.stats.3.color
about.mission.eyebrow
about.mission.quote
about.mission.quoteAccent
about.mission.paragraphs.0
about.mission.paragraphs.1
about.mission.paragraphs.2
about.principles.eyebrow
about.principles.title
about.principles.cards.0.num
about.principles.cards.0.color
about.principles.cards.0.title
about.principles.cards.0.body
about.principles.cards.1.num
about.principles.cards.1.color
about.principles.cards.1.title
about.principles.cards.1.body
about.principles.cards.2.num
about.principles.cards.2.color
about.principles.cards.2.title
about.principles.cards.2.body
about.principles.cards.3.num
about.principles.cards.3.color
about.principles.cards.3.title
about.principles.cards.3.body
about.principles.cards.4.num
about.principles.cards.4.color
about.principles.cards.4.title
about.principles.cards.4.body
about.principles.cards.5.num
about.principles.cards.5.color
about.principles.cards.5.title
about.principles.cards.5.body
about.diff.eyebrow
about.diff.title
about.diff.lead
about.diff.headers.0
about.diff.headers.1
about.diff.rows.0.label
about.diff.rows.0.left
about.diff.rows.0.right
about.diff.rows.1.label
about.diff.rows.1.left
about.diff.rows.1.right
about.diff.rows.2.label
about.diff.rows.2.left
about.diff.rows.2.right
about.diff.rows.3.label
about.diff.rows.3.left
about.diff.rows.3.right
about.team.eyebrow
about.team.title
about.team.note
about.team.members.0.kind
about.team.members.0.initials
about.team.members.0.name
about.team.members.0.role
about.team.members.0.bio
about.team.members.0.tags.0
about.team.members.0.tags.1
about.team.members.0.tags.2
about.team.members.1.kind
about.team.members.1.name
about.team.members.1.role
about.team.members.1.bio
about.team.members.1.tags.0
about.team.members.1.tags.1
about.team.members.1.tags.2
about.team.members.2.kind
about.team.members.2.name
about.team.members.2.role
about.team.members.2.bio
about.team.members.2.tags.0
about.team.members.2.tags.1
about.team.members.2.tags.2
about.team.members.3.kind
about.team.members.3.name
about.team.members.3.role
about.team.members.3.bio
about.team.members.3.tags.0
about.team.members.3.tags.1
about.team.members.3.tags.2
about.team.cta.textBefore
about.team.cta.textAfter
about.team.cta.openRolesTitle
about.team.cta.emailButton
about.team.cta.emailSubject
blog.hero.eyebrow
blog.hero.titleLines.0
blog.hero.titleLines.1
blog.hero.titleLines.2
blog.hero.subStrong
blog.hero.sub
blog.filtersLabel
blog.filters.0.key
blog.filters.0.label
blog.filters.1.key
blog.filters.1.label
blog.filters.2.key
blog.filters.2.label
blog.filters.3.key
blog.filters.3.label
blog.filters.4.key
blog.filters.4.label
blog.filters.5.key
blog.filters.5.label
blog.featured.slug
blog.featured.categories.0
blog.featured.categories.1
blog.featured.tags.0.label
blog.featured.tags.0.variant
blog.featured.tags.1.label
blog.featured.tags.1.variant
blog.featured.date
blog.featured.title
blog.featured.excerpt
blog.featured.author.initials
blog.featured.author.name
blog.featured.author.role
blog.featured.cta
blog.grid.heading
blog.grid.readCta
blog.grid.inPreparation
blog.grid.empty
blog.grid.articles.0.slug
blog.grid.articles.0.category
blog.grid.articles.0.icon
blog.grid.articles.0.tagLabel
blog.grid.articles.0.tagVariant
blog.grid.articles.0.date
blog.grid.articles.0.readTime
blog.grid.articles.0.title
blog.grid.articles.0.excerpt
blog.grid.articles.1.slug
blog.grid.articles.1.category
blog.grid.articles.1.icon
blog.grid.articles.1.tagLabel
blog.grid.articles.1.tagVariant
blog.grid.articles.1.date
blog.grid.articles.1.readTime
blog.grid.articles.1.title
blog.grid.articles.1.excerpt
blog.grid.articles.2.slug
blog.grid.articles.2.category
blog.grid.articles.2.icon
blog.grid.articles.2.tagLabel
blog.grid.articles.2.tagVariant
blog.grid.articles.2.date
blog.grid.articles.2.readTime
blog.grid.articles.2.title
blog.grid.articles.2.excerpt
blog.grid.articles.3.slug
blog.grid.articles.3.category
blog.grid.articles.3.icon
blog.grid.articles.3.tagLabel
blog.grid.articles.3.tagVariant
blog.grid.articles.3.date
blog.grid.articles.3.readTime
blog.grid.articles.3.title
blog.grid.articles.3.excerpt
blog.grid.articles.4.slug
blog.grid.articles.4.category
blog.grid.articles.4.icon
blog.grid.articles.4.tagLabel
blog.grid.articles.4.tagVariant
blog.grid.articles.4.date
blog.grid.articles.4.readTime
blog.grid.articles.4.title
blog.grid.articles.4.excerpt
blog.grid.articles.5.slug
blog.grid.articles.5.category
blog.grid.articles.5.icon
blog.grid.articles.5.tagLabel
blog.grid.articles.5.tagVariant
blog.grid.articles.5.date
blog.grid.articles.5.readTime
blog.grid.articles.5.title
blog.grid.articles.5.excerpt
blog.newsletter.eyebrow
blog.newsletter.title
blog.newsletter.sub
blog.newsletter.label
blog.newsletter.placeholder
blog.newsletter.button
blog.newsletter.sending
blog.newsletter.note
blog.newsletter.privacy.before
blog.newsletter.privacy.link
blog.newsletter.privacy.after
blog.newsletter.success
blog.newsletter.devWarning
blog.newsletter.errors.email
blog.newsletter.errors.submit
article.back
notFound.eyebrow
notFound.title
notFound.body
notFound.home
notFound.blog
seo.home.title
seo.home.description
seo.about.title
seo.about.description
seo.blog.title
seo.blog.description
seo.privacy.title
seo.privacy.description
seo.terms.title
seo.terms.description
seo.cookies.title
seo.cookies.description
seo.notFound.title
seo.notFound.description
```

</details>

## BG — 231 missing keys

| Section | Missing |
|---|---|
| `about.hero` | 7 |
| `about.stats` | 12 |
| `about.mission` | 6 |
| `about.principles` | 26 |
| `about.diff` | 17 |
| `about.team` | 37 |
| `blog.hero` | 6 |
| `blog.filtersLabel` | 1 |
| `blog.filters` | 12 |
| `blog.featured` | 14 |
| `blog.grid` | 58 |
| `blog.newsletter` | 15 |
| `article.back` | 1 |
| `notFound.eyebrow` | 1 |
| `notFound.title` | 1 |
| `notFound.body` | 1 |
| `notFound.home` | 1 |
| `notFound.blog` | 1 |
| `seo.home` | 2 |
| `seo.about` | 2 |
| `seo.blog` | 2 |
| `seo.privacy` | 2 |
| `seo.terms` | 2 |
| `seo.cookies` | 2 |
| `seo.notFound` | 2 |

<details><summary>Full key list</summary>

```
about.hero.eyebrow
about.hero.titleLines.0
about.hero.titleLines.1
about.hero.titleTail
about.hero.titleAccent
about.hero.lead
about.hero.foundedText
about.stats.0.num
about.stats.0.label
about.stats.0.color
about.stats.1.num
about.stats.1.label
about.stats.1.color
about.stats.2.num
about.stats.2.label
about.stats.2.color
about.stats.3.num
about.stats.3.label
about.stats.3.color
about.mission.eyebrow
about.mission.quote
about.mission.quoteAccent
about.mission.paragraphs.0
about.mission.paragraphs.1
about.mission.paragraphs.2
about.principles.eyebrow
about.principles.title
about.principles.cards.0.num
about.principles.cards.0.color
about.principles.cards.0.title
about.principles.cards.0.body
about.principles.cards.1.num
about.principles.cards.1.color
about.principles.cards.1.title
about.principles.cards.1.body
about.principles.cards.2.num
about.principles.cards.2.color
about.principles.cards.2.title
about.principles.cards.2.body
about.principles.cards.3.num
about.principles.cards.3.color
about.principles.cards.3.title
about.principles.cards.3.body
about.principles.cards.4.num
about.principles.cards.4.color
about.principles.cards.4.title
about.principles.cards.4.body
about.principles.cards.5.num
about.principles.cards.5.color
about.principles.cards.5.title
about.principles.cards.5.body
about.diff.eyebrow
about.diff.title
about.diff.lead
about.diff.headers.0
about.diff.headers.1
about.diff.rows.0.label
about.diff.rows.0.left
about.diff.rows.0.right
about.diff.rows.1.label
about.diff.rows.1.left
about.diff.rows.1.right
about.diff.rows.2.label
about.diff.rows.2.left
about.diff.rows.2.right
about.diff.rows.3.label
about.diff.rows.3.left
about.diff.rows.3.right
about.team.eyebrow
about.team.title
about.team.note
about.team.members.0.kind
about.team.members.0.initials
about.team.members.0.name
about.team.members.0.role
about.team.members.0.bio
about.team.members.0.tags.0
about.team.members.0.tags.1
about.team.members.0.tags.2
about.team.members.1.kind
about.team.members.1.name
about.team.members.1.role
about.team.members.1.bio
about.team.members.1.tags.0
about.team.members.1.tags.1
about.team.members.1.tags.2
about.team.members.2.kind
about.team.members.2.name
about.team.members.2.role
about.team.members.2.bio
about.team.members.2.tags.0
about.team.members.2.tags.1
about.team.members.2.tags.2
about.team.members.3.kind
about.team.members.3.name
about.team.members.3.role
about.team.members.3.bio
about.team.members.3.tags.0
about.team.members.3.tags.1
about.team.members.3.tags.2
about.team.cta.textBefore
about.team.cta.textAfter
about.team.cta.openRolesTitle
about.team.cta.emailButton
about.team.cta.emailSubject
blog.hero.eyebrow
blog.hero.titleLines.0
blog.hero.titleLines.1
blog.hero.titleLines.2
blog.hero.subStrong
blog.hero.sub
blog.filtersLabel
blog.filters.0.key
blog.filters.0.label
blog.filters.1.key
blog.filters.1.label
blog.filters.2.key
blog.filters.2.label
blog.filters.3.key
blog.filters.3.label
blog.filters.4.key
blog.filters.4.label
blog.filters.5.key
blog.filters.5.label
blog.featured.slug
blog.featured.categories.0
blog.featured.categories.1
blog.featured.tags.0.label
blog.featured.tags.0.variant
blog.featured.tags.1.label
blog.featured.tags.1.variant
blog.featured.date
blog.featured.title
blog.featured.excerpt
blog.featured.author.initials
blog.featured.author.name
blog.featured.author.role
blog.featured.cta
blog.grid.heading
blog.grid.readCta
blog.grid.inPreparation
blog.grid.empty
blog.grid.articles.0.slug
blog.grid.articles.0.category
blog.grid.articles.0.icon
blog.grid.articles.0.tagLabel
blog.grid.articles.0.tagVariant
blog.grid.articles.0.date
blog.grid.articles.0.readTime
blog.grid.articles.0.title
blog.grid.articles.0.excerpt
blog.grid.articles.1.slug
blog.grid.articles.1.category
blog.grid.articles.1.icon
blog.grid.articles.1.tagLabel
blog.grid.articles.1.tagVariant
blog.grid.articles.1.date
blog.grid.articles.1.readTime
blog.grid.articles.1.title
blog.grid.articles.1.excerpt
blog.grid.articles.2.slug
blog.grid.articles.2.category
blog.grid.articles.2.icon
blog.grid.articles.2.tagLabel
blog.grid.articles.2.tagVariant
blog.grid.articles.2.date
blog.grid.articles.2.readTime
blog.grid.articles.2.title
blog.grid.articles.2.excerpt
blog.grid.articles.3.slug
blog.grid.articles.3.category
blog.grid.articles.3.icon
blog.grid.articles.3.tagLabel
blog.grid.articles.3.tagVariant
blog.grid.articles.3.date
blog.grid.articles.3.readTime
blog.grid.articles.3.title
blog.grid.articles.3.excerpt
blog.grid.articles.4.slug
blog.grid.articles.4.category
blog.grid.articles.4.icon
blog.grid.articles.4.tagLabel
blog.grid.articles.4.tagVariant
blog.grid.articles.4.date
blog.grid.articles.4.readTime
blog.grid.articles.4.title
blog.grid.articles.4.excerpt
blog.grid.articles.5.slug
blog.grid.articles.5.category
blog.grid.articles.5.icon
blog.grid.articles.5.tagLabel
blog.grid.articles.5.tagVariant
blog.grid.articles.5.date
blog.grid.articles.5.readTime
blog.grid.articles.5.title
blog.grid.articles.5.excerpt
blog.newsletter.eyebrow
blog.newsletter.title
blog.newsletter.sub
blog.newsletter.label
blog.newsletter.placeholder
blog.newsletter.button
blog.newsletter.sending
blog.newsletter.note
blog.newsletter.privacy.before
blog.newsletter.privacy.link
blog.newsletter.privacy.after
blog.newsletter.success
blog.newsletter.devWarning
blog.newsletter.errors.email
blog.newsletter.errors.submit
article.back
notFound.eyebrow
notFound.title
notFound.body
notFound.home
notFound.blog
seo.home.title
seo.home.description
seo.about.title
seo.about.description
seo.blog.title
seo.blog.description
seo.privacy.title
seo.privacy.description
seo.terms.title
seo.terms.description
seo.cookies.title
seo.cookies.description
seo.notFound.title
seo.notFound.description
```

</details>
