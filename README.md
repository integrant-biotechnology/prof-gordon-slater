# Prof Gordon Slater

Personal website of Prof Gordon Slater — foot and ankle orthopaedic surgeon, Professor at the University of Technology Sydney, and author of *Chaos to Creation*.

**Live site:** [profgordonslater.com.au](https://profgordonslater.com.au)

## Overview

A factual hub for Prof Slater's background, research, writing and book, kept separate from his clinical practice. The site does not take appointments; anyone seeking clinical care is directed to [orthopaedic-surgeon.com.au](https://orthopaedic-surgeon.com.au/).

The design is dark and restrained: charcoal surfaces, glass panels, a single teal accent. Body copy and labels are held at legible contrast, and all looping motion is disabled for visitors who prefer reduced motion.

## Stack

| | |
|---|---|
| UI | React 19 with TypeScript |
| Build | Vite 6, plus a build-time pre-render that writes every page as static HTML |
| Routing | React Router 7 — code-split routes with View Transitions |
| Styling | Tailwind CSS 4 — theme tokens in `src/index.css` |
| Motion | Motion (`motion/react`), honouring `prefers-reduced-motion` |
| Icons | Lucide React |
| Hosting | Vercel (pre-rendered static pages that hydrate into a single-page app) |

## Getting started

Use the Node.js version pinned in `.nvmrc`.

```bash
npm ci
npm run dev
```

The site runs at `http://localhost:3000`.

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build to `dist/`: client bundle, pre-render, sitemap and the SEO gate |
| `npm run preview` | Serve `dist/` like production (real files, real 404s) |
| `npm run lint` | ESLint |
| `npm run lint:tsc` | Type-check only |

See [CONTRIBUTING.md](CONTRIBUTING.md) for branching and review conventions, and [SECURITY.md](SECURITY.md) for reporting a vulnerability.

## Configuration

Copy `.env.example` to `.env.local` to override defaults. Only public, `VITE_`-prefixed values are used; never commit secrets.

| Variable | Purpose |
|---|---|
| `VITE_SITE_URL` | Production origin used for canonical, Open Graph and JSON-LD URLs |

## Site map

`SITE_ROUTES` in `src/data/site.ts` is the single source of truth for routing. It drives the navigation, breadcrumbs, related-page links, page titles, meta descriptions and the generated sitemap.

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | Background, training and community work |
| `/research` | Research themes |
| `/research/publications` | Peer-reviewed publications, searchable and filterable |
| `/book` | The book |
| `/book/three-rules` | Editorial deep-dive |
| `/book/case-studies` | Case studies from the book |
| `/writing` | Essays and external writing |
| `/writing/:slug` | Long-form article |
| `/giving` | Charity events supported |
| `/contact` | Clinical care, press and speaking enquiries |

To add a page, add an entry to `SITE_ROUTES` and register the lazy-loaded route in `src/App.tsx`. Navigation, breadcrumbs, metadata, structured data, the pre-rendered HTML and the sitemap update on the next build. Set `noindex: true` to keep a page out of search results and the sitemap.

## Project structure

```text
src/
  App.tsx         Router shell, skip link, per-route error boundaries
  index.css       Theme tokens, view transitions, reduced-motion and print styles
  data/           Site content as typed modules (routes, identity, book, research, writing)
  lib/            Helpers: page metadata, structured data, route lookups, icons
  templates/      Page shell, hero variants, breadcrumbs, list and article templates
  pages/          One component per route
  components/     Home-page sections, navigation, footer
  components/ui/  Design-system primitives
scripts/          Build-time pre-render and SEO gate
public/           Static assets
docs/             Source material the site content is drawn from
```

All user-visible copy flows from the modules in `src/data/`, so content changes do not require component edits.

## Search (SEO)

`npm run build` runs four steps, and Vercel runs the same command on every deploy:

1. `vite build` builds the client bundle into `dist/`.
2. `vite build --ssr src/entry-server.tsx` builds a server bundle of the same app.
3. [`scripts/prerender.mjs`](scripts/prerender.mjs) renders every `SITE_ROUTES` path to `dist/<path>.html`. Each file has the full page body and its own head: title, description, self-referencing canonical, robots, Open Graph and JSON-LD. The script also writes `dist/404.html`, `dist/sitemap.xml` and `dist/robots.txt`. Head tags come from `metaFor()` in `src/lib/seo.ts`, and the schema.org graph from `graphFor()` in `src/lib/structured-data.ts`.
4. [`scripts/check-seo.mjs`](scripts/check-seo.mjs) is the SEO gate. The build **fails** if any page has a missing, duplicate or over-long title or description, a canonical that isn't its own URL, anything other than one `<h1>`, an empty body, or invalid JSON-LD. It also fails on AHPRA-restricted wording or if the sitemap and the pages disagree.

In the browser, React hydrates the pre-rendered HTML, and `<RouteMeta>` keeps the head in sync during client-side navigation. Never hand-add `<title>`, canonical, Open Graph or JSON-LD tags to `index.html`: every page would inherit the duplicate.

The canonical host is `SITE_ORIGIN` (`https://profgordonslater.com.au`, overridable with `VITE_SITE_URL`). It must match the primary domain in Vercel, and `www` 308-redirects to it.

## Deployment

[`vercel.json`](vercel.json) sets the framework preset, the build command (`npm run build`), the output directory (`dist`), clean URLs (`dist/about.html` is served at `/about`; unknown paths get `404.html` with a 404 status), and long-lived cache headers for hashed assets. Continuous integration runs linting, type-checking and a build (including the SEO gate) on every pull request.

## Compliance

The site is governed by Australian frameworks.

- **AHPRA — Guidelines for advertising a regulated health service.** No testimonials, no comparative or superlative claims, and nothing that could create unrealistic expectations of treatment.
- **TGA — Therapeutic Goods Advertising Code.** Device and innovation copy is factual and avoids therapeutic claims or consumer promotion of specific products. Clinical material is attributed to its published source.
- **Privacy Act 1988 — Australian Privacy Principles.** The site has no forms and collects no personal information.

The footer disclaimer states that this is a personal site, that its content is not medical advice, and where to go for clinical care.

## Third-party marks

Partner logos and event imagery under `public/giving/` belong to their respective organisations. They are used only to identify the events supported, are unmodified beyond resizing and re-encoding, and link to each event's official page.

## Licence

No open-source licence is granted. All rights are reserved by the respective owners.
