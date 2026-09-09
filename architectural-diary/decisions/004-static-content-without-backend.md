# 004 — No backend: content as in-component literals, simulated interactions

- **Date:** 2025-08-20
- **Commits:** 8174e9c (introduced), f77f85d (content filled in)
- **Status:** active

## Context

The original brief asked for a blog with a real editing workflow
("personal access token and GitHub URL ... MDX format ... add, edit,
and create new posts"), an email list, and merch sales. The site,
however, is deployed as a static SPA on Lovable/Netlify hosting with
no server or database, and there was no appetite for building one in a
single generation session.

## Decision

Ship the full UX surface with local, honest-to-the-browser
implementations:

- **Data model as literals** inside the page components:
  - `albums[]` in Music (title *Novus*, year, description, 5 track
    names, Bandcamp URL);
  - `blogPosts[]` in Blog — `{id, title, excerpt, content (full
    markdown), author "zoofia", date, readTime, category, tags[], slug}`
    for three posts;
  - `merchItems[]` in Merch — `{id, name, price, description, image,
    category, limited, inStock}` for four items;
  - `socialLinks[]` in Contact.
- **Simulated interactions, clearly non-persisting:** BlogEdit's
  GitHub token + repo URL form only flips `isAuthenticated` state (the
  token is never read, stored, or sent); "Save Post" appends to local
  state with a toast. EmailSignup fakes a 1-second API call with
  `setTimeout` then toasts. The Contact form toasts on submit and
  sends nothing. Merch buttons (cart, wishlist, filters) have no
  handlers.
- **Real work where it's free:** Blog search/filter over the in-memory
  list, slug auto-generation in the editor, toasts via `use-toast`.

## Consequences

- The site is instantly deployable, fast, and dependency-free; no
  environment variables or secrets exist anywhere.
- Every "save", "join", or "buy" is a UI prototype. Wiring real
  services (an email provider, GitHub Contents API for MDX posts, a
  merch provider) is a bounded follow-up because the UI contracts are
  already in place.
- A real GitHub PAT entered into BlogEdit does nothing — but the form
  invites one, so the page should be treated as a demo, not an admin
  tool.

## Alternatives considered

- GitHub-based CMS via API at build time (as the brief suggested):
  deferred — needs a token in CI and a build pipeline the static host
  didn't have yet.
- Headless CMS / serverless functions: rejected as out of scope for
  the initial launch.
