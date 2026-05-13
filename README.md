# Prof Gordon Slater — personal site

The **personal website** of **Prof Gordon Slater** — foot & ankle orthopaedic surgeon, researcher,
medical-device innovator, and author. A calm, factual hub for who he is and the breadth of his
work, separate from the practice. **It does not take appointments.** Anyone seeking clinical
care is pointed to the practice site at <https://orthopaedic-surgeon.com.au/>.

## Design

Dark, restrained, premium — deep charcoal surfaces, glassy panels, restrained teal accents,
soft ambient glows. The brief is "considered, not salesy". Body copy and labels are kept at
legible contrast; all looping motion is disabled for visitors who prefer reduced motion.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 6**
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

This is a static Vite build, so Vercel needs no special configuration beyond what's in
[`vercel.json`](vercel.json) (framework preset, build command `npm run build`, output `dist`,
an `index.html` rewrite fallback, and long-cache headers for hashed assets).

1. Push this repo to GitHub (already done).
2. In Vercel, **Add New… → Project**, import `prof-gordon-slater`, and deploy. The defaults
   (Framework: *Vite*, Build: `npm run build`, Output: `dist`) are picked up automatically.
3. There are no required environment variables. Add the production domain under **Settings →
   Domains**, then update the canonical / Open Graph / JSON-LD URLs in `index.html` (currently
   `https://profgordonslater.com.au`) and the `og:image` to a real 1200×630 image.

Or from the CLI: `npm i -g vercel && vercel` (preview) / `vercel --prod` (production).

## Page composition

```text
Hero → WhatHeDoes → About → Background → BodyOfWork → CommunityVision → Writing → Connect → Footer
```

```text
src/
  App.tsx                       # composition + skip link
  index.css                     # Tailwind import, theme tokens, base styles, reduced-motion
  constants.ts                  # all editable copy & data — see "What you need to supply" below
  types.ts                      # shared content types
  lib/icons.ts                  # Lucide icon registry (string-key → component)
  lib/utils.ts                  # cn() class merge helper
  components/
    Hero.tsx · WhatHeDoes.tsx · About.tsx · Background.tsx
    BodyOfWork.tsx · CommunityVision.tsx · Writing.tsx · Connect.tsx
    Navbar.tsx · Footer.tsx
  components/ui/                # primitives: Button · Card · Glow · Motif · SectionHeading
public/
  favicon.svg
  portrait-gordon-slater.webp   # real headshot (sourced from orthopaedic-surgeon.com.au)
```

## What you need to supply (placeholder checklist)

The site is built and ready; these items render today as clearly-marked placeholders. Replace
them in `src/constants.ts` (and rebuild) — no code edits needed:

- [ ] **Verified social URLs** — `SOCIAL_LINKS`: LinkedIn, X, research profile (Google Scholar /
      ResearchGate / ORCID / PubMed), YouTube, Instagram. Each currently uses `url: '#'` and is
      flagged with `placeholder: true`.
- [ ] **Body of work links** — `BODY_OF_WORK`: real `href` + `linkLabel` for *Research &
      publications*, *Innovation & medical devices*, and *Book*. Drop `placeholder: true` once
      the URL is real.
- [ ] **Selected publications** — `SELECTED_PUBLICATIONS`: 3–5 representative papers
      (title, venue, year, link), plus `PUBLICATIONS_INDEX_URL` pointing at the master profile.
- [ ] **Vision statement** — `VISION_STATEMENT`: replace the placeholder paragraph with his
      actual stated vision for Australian medical / health-tech innovation.
- [ ] **Community contributions** — `COMMUNITY`: 2–4 specific items (mentoring, professional
      bodies, public education, advisory roles, etc.).
- [ ] **Personal contact email** — `CONTACT_EMAIL` currently uses the practice admin address as
      a stopgap; a dedicated personal address (e.g. `hello@profgordonslater.com.au`) is preferred.
- [ ] **Real OG / favicon** — `og:image`/`twitter:image` use the portrait as a stopgap (1200×630
      is preferred); favicon is a "GS" monogram — replace if a brand mark exists.
- [ ] **Domain & canonical** — `index.html` canonical / OG / JSON-LD URLs use
      `https://profgordonslater.com.au`; update if the production domain differs.
- [ ] **Legal pages** — footer *Privacy / Disclaimer / Accessibility* links currently `#`;
      build real pages or remove.
- [ ] **AHPRA title check** — display name is **"Prof Gordon Slater"** at the client's request;
      the source site uses **"Dr"**. Confirm the "Prof" title is accurate before launch (see
      Compliance below).

## Compliance — Australia

This site is governed by Australian frameworks, not US ones.

- **HIPAA does *not* apply.** HIPAA is United States legislation for Protected Health
  Information; it has no force in Australia and no role here. (No PHI is collected anyway —
  the site has no form.)
- **AHPRA — *Guidelines for advertising a regulated health service*.** The site avoids
  testimonials, comparative or superlative claims (e.g. "best", "leading"), and content that
  could create unrealistic expectations. The display title ("Prof Gordon Slater") must be
  accurate — confirm before launch.
- **TGA — Therapeutic Goods Advertising Code.** The "Innovation & medical devices" copy is
  intentionally factual and avoids therapeutic claims or consumer promotion of specific
  products. Keep this discipline when filling in the placeholders.
- **Privacy Act 1988 — Australian Privacy Principles.** The site collects no personal
  information today (no form, no analytics). If analytics or a contact form are added, add a
  short Privacy Policy and link it from the footer.
- The footer disclaimer (`FOOTER_DISCLAIMER` in `src/constants.ts`) makes the personal-site
  status, the no-medical-advice nature of the content, and the link to the practice for
  clinical care explicit.

## Content sourcing

The portrait, the bio facts, the training timeline, the editorial/leadership roles, and the
linked blog posts are all drawn from the surgeon's live practice site,
<https://orthopaedic-surgeon.com.au/>. Confirm everything with the practice and replace the
portrait with the master file when available.
