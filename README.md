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
- **Vite 6** — with an inline plugin that regenerates `public/sitemap.xml` from `SITE_ROUTES` on every build (see `vite.config.ts`)
- **react-router-dom v7** — ten substantive routes (see "Information architecture" below); every internal `<Link>` opts into the **View Transitions API** for cross-route cross-fades
- **Tailwind CSS v4** (`@tailwindcss/vite`, theme tokens in `src/index.css`)
- **Motion** (`motion/react`) — subtle reveal and ambient animations; every primitive respects `prefers-reduced-motion`
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
3. Set `VITE_SITE_URL` to the production origin (for example
   `https://profgordonslater.com.au`) so canonical / Open Graph / JSON-LD URLs resolve from one
   place.

Or from the CLI: `npm i -g vercel && vercel` (preview) / `vercel --prod` (production).

## Information architecture

Ten substantive routes plus a designed `404`. Top nav surfaces six; the rest live behind their
parents. `SITE_ROUTES` in `src/data/site.ts` is the single source of truth — it drives Navbar,
Breadcrumbs, the per-page See-also footer, page `<title>` + meta description, and the auto-
generated `sitemap.xml`.

```text
TOP NAV (6)
  /                      Home              — Hero · AboutSpotlight · PullQuote · CuratedTrio
                                             · LatestEssay · ClosingConnect (5 sections)
  /about                 About             — portrait-led editorial spread; training timeline;
                                             "beyond the operating theatre" community + vision
  /research              Research          — 6 numbered themes (ChapterMark register);
                                             publications strip; innovations strip
  /book                  Book              — cinematic; the marquee
  /writing               Writing           — magazine TOC; hosted essays + external links
  /contact               Contact           — clinical care · press · speaking inquiries

SUB-PAGES (3 substantive, breadcrumbed back to their parents)
  /research/publications List of all peer-reviewed papers + search + theme filter chips
  /book/three-rules      Three Rules editorial deep-dive
  /book/case-studies     Case-study editorial cards
  /writing/:slug         Long-form article template (dynamic; NotFound until bodies populated)

FOOTER-LINKED
  /giving                Three Sydney charity events (HBOT + Integrant in-kind support)
  /*                     Designed NotFound (404)
```

Every route is code-split via `React.lazy`, so the first paint on `/` doesn't ship the other
routes' JS. Each route is wrapped in its own `<ErrorBoundary>` so a crash inside (say) `/book`
no longer collapses Navbar, Footer, or any other route.

## Source tree

```text
src/
  App.tsx                                # router shell + skip link + per-route ErrorBoundary
  index.css                              # Tailwind import, theme tokens, View Transitions API,
                                          # reduced-motion + print stylesheets
  constants.ts                           # barrel re-export of src/data/*
  types.ts                               # shared content types
  data/
    site.ts                              # SITE_ROUTES — canonical route table
    identity.ts                          # DOCTOR_NAME, contact constants
    background.ts                        # TRAINING, LEADERSHIP_ROLES, CAPABILITIES
    book.ts                              # BOOK + BOOK_RULES + LIFE_FORCE + CASE_STUDIES
    research/
      themes.ts                          # 6 typed ResearchTheme objects
      publications.ts                    # SELECTED_PUBLICATIONS + FULL_PUBLICATIONS (24 seed)
      innovations.ts                     # patents · named devices · named techniques
      body-of-work.ts                    # BODY_OF_WORK (legacy support)
    writing.ts                           # ARTICLES
    community.ts                         # COMMUNITY items + VISION_STATEMENT
    giving.ts                            # GIVING_EVENTS + stats + copy
    social.ts                            # SOCIAL_LINKS + FOOTER_DISCLAIMER
  lib/
    icons.ts                             # Lucide icon registry
    utils.ts                             # cn() class merge helper
    seo.ts                               # useDocumentTitle hook
    site.ts                              # findRoute / parentOf / childrenOf / relatedRoutes
                                          # / topNavRoutes / footerRoutes / breadcrumbsFor
  templates/
    PageShell.tsx                        # auto-wires title, breadcrumbs, see-also footer
    PageHero.tsx                         # 3 variants — editorial / photo-led / type-only
    Breadcrumbs.tsx                      # desktop chain · mobile back-chevron
    SeeAlsoFooter.tsx                    # per-page "Continue" block from route.related[]
    ListTemplate.tsx                     # typographic list + search + filter chips
    ArticleTemplate.tsx                  # long-form reading flow with typed ArticleBlock[]
    JsonLd.tsx                           # per-route structured-data injection
  pages/
    Home.tsx                             # /
    About.tsx                            # /about
    Book.tsx                             # /book — cinematic
    Giving.tsx                           # /giving
    Contact.tsx                          # /contact
    NotFound.tsx                         # /*
    research/
      Index.tsx                          # /research
      Publications.tsx                   # /research/publications
    book/
      ThreeRules.tsx                     # /book/three-rules
      CaseStudies.tsx                    # /book/case-studies
    writing/
      Index.tsx                          # /writing
      Article.tsx                        # /writing/:slug
  components/
    Hero · AboutSpotlight · CuratedTrio · LatestEssay · ClosingConnect   (home slots)
    Navbar · Footer
    ErrorBoundary · ScrollToTop · RouteFallback
  components/ui/                         # primitives: Button · Card · Glow · Motion (Reveal)
                                          # · EditorialImage · PullQuote · ChapterMark
                                          # · ReadingProgress · StatStrip · Lede · Material
                                          # · SectionHeading · PageEnterHairline
                                          # · CursorCompanion
public/
  favicon.svg
  portrait-gordon-slater-hero.webp        # blazer portrait — Hero
  portrait-gordon-slater-about.webp       # scrubs arms-crossed portrait — About spread
  book-cover-chaos-to-creation.webp       # real book cover (-480/-800/-1200 + .jpg fallback)
  giving/                                 # partner logos + event hero images for /giving
  robots.txt
  sitemap.xml                             # auto-generated from SITE_ROUTES on every build
docs/
  voice-source-v0_1.md                    # canonical content KB this site is built from
```

### Adding a new top-nav route

Single field flip on a `SITE_ROUTES` entry:

```ts
{ path: '/new-page', label: 'New page', title: '...', description: '...',
  inTopNav: true, inFooter: false, related: ['/about', '/book'] }
```

Then register the route in `App.tsx` (lazy-import + `<Route>`). Navbar, breadcrumbs (if
`parent` is set), see-also (if `related` is set), `<title>`, meta, and `sitemap.xml` all
update on the next build.

## What you need to supply (placeholder checklist)

The site is built and ready; these items render today as clearly-marked placeholders. Replace
them in `src/constants.ts` (and rebuild) — no component edits needed:

- [x] ~~Book purchase URL~~ — done. `BOOK_FORMATS` (Hardcover · Paperback · Kindle) carries the
      three real Amazon AU URLs.
- [x] ~~Book cover image~~ — done. Real cover at `public/book-cover-chaos-to-creation.webp`,
      with `-480.webp`, `-800.webp`, `-1200.webp` and a `.jpg` fallback for `<picture>`/`srcset`.
- [x] ~~Verified social URLs~~ — done. `SOCIAL_LINKS` carries the four canonical accounts
      (LinkedIn, X, YouTube, Instagram), each rendered with `rel="me noopener noreferrer"` for
      verified-identity semantics and mirrored into `Person.sameAs` in `index.html` for
      knowledge-graph entity linking. No public research profile (Scholar / ORCID / ResearchGate
      / PubMed) is wired yet — drop one into `SOCIAL_LINKS` and `sameAs` when ready.
- [ ] **Selected publications links** — `SELECTED_PUBLICATIONS` entries currently have no
      `href` (titles render as plain text). Add `href` per entry so more titles resolve directly
      to journal or reference pages.
- [x] ~~Personal contact email~~ — `CONTACT_EMAIL` remains
      `marketing@drgordonslater.com.au` (Adelaide Slater handles, per the KB).
- [ ] **Real OG image** — `og:image`/`twitter:image` currently point at the portrait as a
      stopgap; a purpose-built 1200×630 image is preferred. Per-route OG (e.g. cover image on
      `/book`) needs a pre-rendering plugin — flagged as a TODO in `index.html`.
- [ ] **Favicon** — `public/favicon.svg` is a "GS" monogram — replace if a brand mark exists.
- [ ] **Domain & canonical** — set `VITE_SITE_URL` if the production domain differs from
      `https://profgordonslater.com.au`.
- [x] ~~Legal pages~~ — footer *Privacy / Disclaimer / Accessibility* links now resolve to real
      internal pages.

### Cross-site work — not in this repo

The `/giving` page (and the *"Professor Slater is a proud supporter of …"* surface) is on this
personal site only. The same treatment should be applied to two adjacent properties Sam owns:

- The **RegenU** site.
- The **practice site** at `orthopaedic-surgeon.com.au` (WordPress / Elementor).

### Partner logos & event imagery on `/giving`

Logos and hero imagery in [`public/giving/`](public/giving/) belong to their respective
organisations (the Ingham Institute, The Black & White Committee, the Australian Turf Club).
They are used here only to identify the events Prof Slater supports, are not modified beyond
resizing / WebP-encoding, and link back to each event's official page. If a partner asks for a
specific treatment (or removal), swap the file at the same path or set the entry's `logo` /
`heroBase` to `undefined` in `src/constants.ts` — the card gracefully falls back to a
typographic chip. ATC ("Pink Luncheon") currently uses that chip fallback because the ATC site
blocks automated image fetches; drop a `public/giving/pink-luncheon-logo.webp` and add a
`heroBase` to upgrade it in place.

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
