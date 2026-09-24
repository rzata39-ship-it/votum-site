// Indexing policy — the one place that decides whether a build may be indexed.
//
// SITE_ENV = 'production' | 'staging' | 'development'
//   - set explicitly at build time (shell, CI, .env, Docker build arg), or
//   - derived from Vercel's system variable VERCEL_ENV ('production' on the
//     production deployment, 'preview' / 'development' otherwise).
// Unset → 'development'. Only 'production' is indexable, so a forgotten flag
// can never expose a dev/staging copy to search engines.
//
// Consumers: vite.config.js (robots.txt, static <meta name="robots">),
// useSeo (runtime <meta name="robots">), nginx.conf via the Docker build (X-Robots-Tag).
// Node-safe (imported by the build plugin): no `import.meta`.

export const PRODUCTION = 'production'

export function resolveSiteEnv(env) {
  if (env.SITE_ENV) return env.SITE_ENV
  return env.VERCEL_ENV === PRODUCTION ? PRODUCTION : 'development'
}

export const isIndexable = (siteEnv) => siteEnv === PRODUCTION

// Value for <meta name="robots"> / X-Robots-Tag on non-production builds
export const NON_PRODUCTION_ROBOTS = 'noindex, nofollow'
