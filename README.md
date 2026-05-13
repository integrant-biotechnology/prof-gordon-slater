# Prof Gordon Slater — personal site

The **personal website** of **Prof Gordon Slater** — foot &amp; ankle orthopaedic surgeon,
**Professor at the University of Technology Sydney**, and author of *From Chaos to Creation: The
Life Force Formula* (February 2026). A calm, factual hub for who he is and the breadth of his
work, separate from the practice. **It does not take appointments.** Anyone seeking clinical
care is pointed to <https://orthopaedic-surgeon.com.au/>.

## Design

Dark, restrained, premium — deep charcoal surfaces, glassy panels, restrained teal accents,
soft ambient glows. The brief is "considered, not salesy". Body copy and labels are kept at
legible contrast; all looping motion is disabled for visitors who prefer reduced motion.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 6**
- **react-router-dom v7** — two routes: `/` (Home) and `/book` (the dedicated *From Chaos to Creation* page)
- **Tailwind CSS v4** (`@tailwindcss/vite`, theme tokens in `src/index.css`)
- **Motion** (`motion/react`) — subtle reveal and ambient animations
- **Lucide React** — iconography (registry in `src/lib/icons.ts`)
- **ESLint** (flat config) — `npm run lint`

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:3000)
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # eslint
npm run lint:tsc # type-check only (tsc --noEmit)
```

## Deploying to Vercel

This is a static Vite SPA, so Vercel needs no special configuration beyond what's in
[`vercel.json`](vercel.json) (framework preset, build command `npm run build`, output `dist`,
an `index.html` rewrite fallback for client-side routing — so `/book` deep-links survive a
refresh — and long-cache headers for hashed assets).

1. Push this repo to GitHub.
2. In Vercel, **Add New… → Project**, import `prof-gordon-slater`, and deploy. The defaults
   (Framework: *Vite*, Build: `npm run build`, Output: `dist`) are picked up automatically.
3. There are no required environment variables. Add the production domain under **Settings →
   Domains**, then update the canonical / Open Graph / JSON-LD URLs in `index.html` (currently
   `https://profgordonslater.com.au`).

Or from the CLI: `npm i -g vercel && vercel` (preview) / `vercel --prod` (production).

## Page composition

Two routes, both wrapped in the same `<Navbar/>` and `<Footer/>`:

```text
/         Home   :  Hero → WhatHeDoes → About → Background → BookPreview
                    → BodyOfWork → CommunityVision → Writing → Connect
/book     Book   :  BookHero → OpeningFraming → LifeForceFormula
                    → ThreeRules → HypothesisCallout → EpilogueExtract
                    → ClinicalCases → BookCloseCTA
```

```text
src/
  App.tsx                       # router shell + skip link
  index.css                     # Tailwind import, theme tokens, base styles, reduced-motion
  constants.ts                  # all editable copy & data — see "What you need to supply" below
  types.ts                      # shared content types
  lib/icons.ts                  # Lucide icon registry (string-key → component)
  lib/utils.ts                  # cn() class merge helper
  pages/
    Home.tsx                    # the / route
    Book.tsx                    # the /book route — dedicated to From Chaos to Creation
  components/
    Hero · WhatHeDoes · About · Background · BookPreview
    BodyOfWork · CommunityVision · Writing · Connect
    Navbar · Footer
  components/ui/                # primitives: Button · Card · Glow · Motif · SectionHeading
public/
  favicon.svg
  portrait-gordon-slater.webp   # real headshot
docs/
  voice-source-v0_1.md          # canonical content KB this site is built from (see "Content sourcing" below)
```

## What you need to supply (placeholder checklist)

The site is built and ready; these items render today as clearly-marked placeholders. Replace
them in `src/constants.ts` (and rebuild) — no component edits needed:

- [ ] **Book purchase URL** — `BOOK.purchaseUrl` is `'#'` and the UI marks it as
      *"Purchase link to be supplied"*. Drop in the real Amazon / publisher URL and remove the
      `purchasePlaceholder: true` flag.
- [ ] **Book cover image** — both BookPreview (home) and BookHero (`/book`) use a stylised
      typographic placeholder. Drop a real cover into `public/book-cover-chaos-to-creation.webp`
      and swap the placeholder cover blocks for an `<img>`.
- [ ] **Verified social URLs** — `SOCIAL_LINKS`: LinkedIn, X, research profile (Google Scholar /
      ResearchGate / ORCID / PubMed), YouTube, Instagram. Each currently uses `url: '#'`.
- [ ] **Selected publications links** — `SELECTED_PUBLICATIONS` entries currently have no
      `href` (titles render as plain text). Add `href` per entry; populate
      `PUBLICATIONS_INDEX_URL` with the master Google Scholar / ORCID profile so the
      *"Full list"* affordance becomes a real link.
- [ ] **Personal contact email** — `CONTACT_EMAIL` is `marketing@drgordonslater.com.au`
      (Adelaide Slater handles, per the KB). Swap if a different general address is preferred.
- [ ] **Real OG image** — `og:image`/`twitter:image` currently point at the portrait as a
      stopgap; a purpose-built 1200×630 image is preferred.
- [ ] **Favicon** — `public/favicon.svg` is a "GS" monogram — replace if a brand mark exists.
- [ ] **Domain & canonical** — `index.html` canonical / OG / JSON-LD URLs use
      `https://profgordonslater.com.au`; update if the production domain differs.
- [ ] **Legal pages** — footer *Privacy / Disclaimer / Accessibility* links currently `#`;
      build real pages or remove.

## Content sourcing

The site is built directly from a curated knowledge-base markdown — the source of truth lives
in this repo at [`docs/voice-source-v0_1.md`](docs/voice-source-v0_1.md). It anchors every
quote, paper title, training milestone, and editorial role to a public, defensible source.

That KB also defines the **wall** for what stays *off* the public site (and therefore out of
this codebase):

- **No Integrant Pre-IPO / investor-restricted content.** No valuation figures, listing case,
  raise mechanics, PPM/F-1 references, comparables, or walled-off product live-matter. The
  TGA-sponsor experience is described abstractly only ("a fifteen-year personal record of
  TGA-registered medical-device approvals") — no company brand on the personal site.
- **No REGEN Healthcare references.**
- **The 150–200-year framing is presented as Slater's hypothesis, not a clinical claim.**
  The `/book` page surfaces this with the explicit "founder voice — not a treatment promise"
  callout that the KB itself uses.

When new KB content is approved, update `docs/voice-source-v0_1.md`, then propagate through
`src/constants.ts` (everything user-visible flows from those constants).

## Compliance — Australia

This site is governed by Australian frameworks, not US ones.

- **HIPAA does *not* apply.** HIPAA is United States legislation for Protected Health
  Information; it has no force in Australia and no role here. (No PHI is collected anyway —
  the site has no form.)
- **AHPRA — *Guidelines for advertising a regulated health service*.** The site avoids
  testimonials, comparative or superlative claims (e.g. "best", "leading"), and content that
  could create unrealistic expectations. The display title *"Prof"* is supported — Slater is
  Professor at the University of Technology Sydney per the KB §1 affiliation block.
- **TGA — Therapeutic Goods Advertising Code.** Innovation / device copy is intentionally
  factual and avoids therapeutic claims or consumer promotion of specific products. The book
  page's clinical cases attribute every claim to the published paper or book reference.
- **Privacy Act 1988 — Australian Privacy Principles.** The site collects no personal
  information today (no form, no analytics). If analytics or a contact form are added, add a
  short Privacy Policy and link it from the footer.
- The footer disclaimer (`FOOTER_DISCLAIMER` in `src/constants.ts`) makes the personal-site
  status, the no-medical-advice nature of the content, and the link to the practice for
  clinical care explicit.
