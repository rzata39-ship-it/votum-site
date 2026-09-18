// Feature switches. `false` = the feature is not reachable anywhere:
// no route, no nav/footer link, no static page, no sitemap entry.
// The code and translations stay in place, so re-enabling is a one-line change.
// Node-safe (imported by the build plugin via seo.js): no `import.meta`.

export const features = {
  blog: false, // /blog and /blog/:slug
}
