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
| Build | Vite 6 — a build plugin regenerates `public/sitemap.xml` from the route table |
| Routing | React Router 7 — code-split routes with View Transitions |
| Styling | Tailwind CSS 4 — theme tokens in `src/index.css` |
| Motion | Motion (`motion/react`), honouring `prefers-reduced-motion` |
| Icons | Lucide React |
| Hosting | Vercel (static single-page app) |

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
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
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

To add a page, add an entry to `SITE_ROUTES` and register the lazy-loaded route in `src/App.tsx`. Navigation, breadcrumbs, metadata and the sitemap update on the next build.

## Project structure

```text
src/
  App.tsx         Router shell, skip link, per-route error boundaries
  index.css       Theme tokens, view transitions, reduced-motion and print styles
  data/           Site content as typed modules (routes, identity, book, research, writing)
  lib/            Helpers: icon registry, SEO hook, route lookups
  templates/      Page shell, hero variants, breadcrumbs, list and article templates
  pages/          One component per route
  components/     Home-page sections, navigation, footer
  components/ui/  Design-system primitives
public/           Static assets, robots.txt and the generated sitemap
docs/             Source material the site content is drawn from
```

All user-visible copy flows from the modules in `src/data/`, so content changes do not require component edits.

## Deployment

The site is a static Vite single-page app. [`vercel.json`](vercel.json) sets the framework preset, the build command (`npm run build`), the output directory (`dist`), an `index.html` fallback so deep links survive a refresh, and long-lived cache headers for hashed assets. Continuous integration runs linting, type-checking and a build on every pull request.

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
