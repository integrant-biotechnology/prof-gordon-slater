# Contributing

Thanks for working on the personal site. This guide covers local setup, branching,
commit conventions, and what CI expects before a merge.

## Local setup

```bash
# Use the pinned Node version
nvm use            # reads .nvmrc → Node 20.18.1
npm ci             # clean install from package-lock.json

npm run dev        # http://localhost:3000
npm run lint       # eslint
npm run lint:tsc   # tsc --noEmit
npm run build      # production build → dist/
npm run preview    # preview the production build
```

If `nvm` isn't installed, install Node 20 LTS directly. Versions outside the `20.x` line
are not supported.

## Branching

- Branch off `main`. Name branches with the audit/plan section they execute, e.g.
  `feat/pr-c-design-system-enforcement` or `fix/about-sticky-cliff`.
- One PR per audit step. Smaller diffs review faster.
- **Stack PRs** when a sequence is in flight — branch off the previous unmerged branch
  rather than waiting. When the parent merges, GitHub auto-rebases.

## Commit messages

Follow the existing repo style — a short imperative first line under ~70 characters
describing what changed, followed by a blank line and a multi-line body that explains:

- **What** landed (component-level, not file-level)
- **Why** (link to audit section / plan PR if applicable)
- **Verified** — paste the `npm run lint:tsc · lint · build` results
- **Bundle delta** — when components/routes change, paste the relevant chunk sizes
- Trailer: `Co-Authored-By: …` lines are welcome

## Definition of done

CI must be green:

- `npm run lint:tsc` — clean
- `npm run lint` — clean
- `npm run build` — clean

Plus manually on `npm run preview`:

- The route(s) you touched render correctly on desktop and mobile
- `prefers-reduced-motion: reduce` collapses any added motion
- Keyboard `Tab` order is sensible; focus halos visible
- No console errors

## Design system rules

Source of truth: `src/index.css` (tokens + materials + motion register) and the
[`src/templates/`](src/templates/) primitives. When adding a page or section:

- **Reuse primitives** — `<PageShell>`, `<PageHero>`, `<Reveal>`, `<EditorialImage>`,
  `<PullQuote>`, `<ChapterMark>`, `<ListTemplate>`, `<ArticleTemplate>`, etc.
- **Never introduce a new design token** without updating `src/index.css` and
  removing the inline duplicate
- **Never animate `width` / `height`** — use `transform` (Apple-grade motion)
- **Always honour `prefers-reduced-motion`** — motion primitives already do this;
  custom motion must explicitly check via `useReducedMotion()`

## Adding a new route

`src/data/site.ts` is the single source of truth. To add a new top-nav page:

1. Add a new entry to `SITE_ROUTES` with `inTopNav: true`
2. Register the route in `src/App.tsx` (lazy-import + `<Route>`)
3. Create the page under `src/pages/`, wrapping content in `<PageShell route={…}>`
4. CI generates `public/sitemap.xml` from `SITE_ROUTES` on every build

Navbar, breadcrumbs (if `parent` is set), see-also (if `related` is set), `<title>`,
and meta description all wire up automatically.

## AHPRA + KB-wall discipline

The site is governed by **AHPRA advertising guidelines** and the wall rules in
[`docs/voice-source-v0_1.md`](docs/voice-source-v0_1.md). When editing copy:

- No testimonials, comparative claims, or superlative language
- The 150–200-year framing is **founder voice** — not a clinical claim
- Never reference Integrant pre-IPO or REGEN Healthcare on the public site

When in doubt, check the voice source and the README "Compliance" section.

## Reporting a vulnerability

See [`SECURITY.md`](SECURITY.md).
