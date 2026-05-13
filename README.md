# Prof Gordon Slater — website

A single-page personal site for **Prof Gordon Slater**, Specialist Foot & Ankle Orthopaedic Surgeon.

## Design

A calm, precise dark theme — deep charcoal surfaces, glassy navigation, restrained teal accents,
and soft ambient glows. The goal is "medically credible and unhurried" rather than a generic clinic
template. Body copy, labels, and the legal disclaimer are kept at legible contrast; all looping
motion is disabled for visitors who prefer reduced motion.

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

## Project layout

```text
index.html               # document head: title, meta, Open Graph, JSON-LD, fonts
public/favicon.svg        # "GS" monogram favicon
src/
  App.tsx                 # page composition + skip link
  index.css               # Tailwind import, theme tokens, base styles, reduced-motion
  constants.ts            # surgeon details, contact info, content data, disclaimer
  types.ts                # shared content types
  lib/icons.ts            # string-key → Lucide icon registry
  lib/utils.ts            # cn() class merge helper
  components/             # page sections (Hero, About, Procedures, …)
  components/ui/           # primitives: Button, Card, Glow, Accordion, Motif, SectionHeading
```

## Content & assets — source and what still needs work

Most copy, the contact details, the training timeline, the conditions/procedures, the article
links, and the portrait (`public/portrait-gordon-slater.webp`) are drawn from the surgeon's live
practice site, **<https://orthopaedic-surgeon.com.au/>** — confirm everything with the practice and,
ideally, replace the portrait with the master file. Condition/procedure descriptions are
paraphrased from the source.

- **Title — "Prof" vs "Dr":** the source site uses **"Dr Gordon Slater"** throughout; this build
  displays **"Prof Gordon Slater"** at the client's request (`DOCTOR_NAME` in `src/constants.ts`).
  Confirm the "Prof" title is accurate and compliant with AHPRA advertising guidelines before launch.
- **Hero / Procedures visual:** the abstract `Motif` (`src/components/ui/Motif.tsx`) is still a
  placeholder in the hero banner and the Procedures highlight — swap for soft, professional
  clinical photography. The About portrait is the real photo.
- **OG image:** `og:image` / `twitter:image` currently point at the portrait as a stopgap; a
  purpose-built 1200×630 image is preferred.
- **Favicon:** `public/favicon.svg` is a simple "GS" monogram — replace if a brand mark exists.
- **Contact form:** `src/components/ContactCTA.tsx` composes a pre-filled `mailto:` email to
  `admin@drgordonslater.com.au`. Wire it to a real endpoint (serverless function, Formspree, etc.)
  for production.
- **Domain & schema:** canonical URLs and the `Physician` JSON-LD in `index.html` use
  `https://profgordonslater.com.au` — update if the production domain differs.
- **Legal pages:** the footer links for *Privacy policy / Medical disclaimer / Accessibility* are
  placeholders (`#`) and need real pages.
- **Articles:** the cards link out to the published posts on `orthopaedic-surgeon.com.au`
  (`ARTICLES` in `src/constants.ts`); host them here if/when the blog migrates.

## Medical advertising compliance

Aligned with Australian guidelines:

- No patient testimonials or star ratings.
- Careful, non-guaranteed wording ("may support", "suitability depends on assessment", etc.).
- A prominent, legible disclaimer in the footer (`FOOTER_DISCLAIMER` in `src/constants.ts`).
