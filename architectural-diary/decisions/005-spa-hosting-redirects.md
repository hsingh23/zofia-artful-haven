# 005 — SPA fallback via public/_redirects

- **Date:** 2025-08-20
- **Commit:** 682cac3 (author: Harsh Singh — the only human commit)
- **Status:** active

## Context

The site is a BrowserRouter SPA with real paths (`/music`, `/blog`,
`/contact`). Lovable publishes the build to Netlify-style static
hosting, which serves files by path — so visiting or refreshing any
non-root route, or following a deep link, hit a missing file and
returned the host's 404 instead of the app.

## Decision

Add `public/_redirects` containing a single Netlify rewrite rule:

```
/*    /index.html   200
```

Every request is internally rewritten to the built `index.html` with
HTTP 200, handing routing to React Router in the browser.

## Consequences

- Deep links and refreshes work on the deployed site with zero code
  changes; the file is copied verbatim into `dist/` by the Vite build.
- Unknown paths now render the in-app NotFound page (which logs the
  bad pathname) rather than a host 404 — acceptable and arguably nicer.
- The rule is Netlify syntax. Moving to a different host (Vercel,
  GitHub Pages, nginx) requires an equivalent rewrite configuration;
  AGENTS.md flags this file as load-bearing.

## Alternatives considered

- HashRouter: rejected — ugly URLs and worse SEO/shareability.
- Serverless redirect function: rejected — unnecessary when a
  one-line static config exists.
