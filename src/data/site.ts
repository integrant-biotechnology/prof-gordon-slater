// -------------------------------------------------------------
// SITE_ROUTES — canonical route table.
//
// Single source of truth consumed by:
//   - Navbar (top-nav rendering, active-route highlighting)
//   - Footer (resources column rendering)
//   - <Breadcrumbs> (parent chain for sub-pages)
//   - <SeeAlsoFooter> (per-page related links block)
//   - src/lib/seo.ts metaFor() → <head> tags (pre-rendered at build
//     time by scripts/prerender.mjs, kept in sync on client navigation
//     by <RouteMeta>)
//   - src/lib/structured-data.ts graphFor() → per-page JSON-LD
//   - scripts/prerender.mjs → dist/<path>/index.html + sitemap.xml
//   - scripts/check-seo.mjs → build-failing SEO gate
//
// Touched in every PR from PR-2 onwards as new pages register.
// -------------------------------------------------------------

export interface SiteRoute {
  /** Path. Dynamic segments use react-router syntax, e.g. '/writing/:slug'. */
  path: string;
  /** Short label used by navbar + breadcrumb segments. */
  label: string;
  /** <title> tag — e.g. "About | Prof Gordon Slater". */
  title: string;
  /** <meta name="description"> content. */
  description: string;
  /** Show in the top navigation pill. */
  inTopNav: boolean;
  /** Show in the footer "Resources" column. */
  inFooter: boolean;
  /** Parent path for breadcrumb hierarchy (e.g. '/research'). */
  parent?: string;
  /** Paths shown in the per-page "See also" block. 2–3 recommended. */
  related?: string[];
  /** Per-route OG image (site-relative path). Defaults to /og-card.png. */
  ogImage?: string;
  /** Alt text for ogImage. Required whenever ogImage is set. */
  ogImageAlt?: string;
  /**
   * Keep out of search results (robots noindex,follow) and out of
   * sitemap.xml. Used for legal boilerplate pages.
   */
  noindex?: boolean;
}

/**
 * SITE_ROUTES — PR-1 seed.
 *
 * Only the four currently-shipping routes are registered today.
 * PR-2 adds /about; PR-3 adds /contact; PR-4 adds /research +
 * /research/publications; PR-5 adds /book sub-pages; PR-6 adds
 * /writing + /writing/:slug. PR-7 wires the table into Navbar +
 * Footer + Breadcrumbs + sitemap generation.
 *
 * Descriptions are kept ≤155 characters so search engines render
 * them in full without truncation.
 */
export const SITE_ROUTES: SiteRoute[] = [
  {
    path: '/',
    label: 'Home',
    title: 'Prof Gordon Slater — Foot & Ankle Orthopaedic Surgeon Sydney',
    description:
      'Prof Gordon Slater is a Sydney foot & ankle orthopaedic surgeon, Professor at UTS, regenerative-medicine researcher and author of Chaos to Creation.',
    inTopNav: true,
    inFooter: false,
    related: ['/about', '/book', '/contact'],
  },
  {
    path: '/about',
    label: 'About',
    title: 'About Prof Gordon Slater — Surgeon, Professor, Author',
    description:
      'Biography of Prof Gordon Slater: UNSW-trained foot & ankle orthopaedic surgeon, HSS New York fellow, Professor at UTS, journal editor and author.',
    inTopNav: true,
    inFooter: false,
    related: ['/research', '/book', '/contact'],
  },
  {
    path: '/research',
    label: 'Research',
    title: 'Regenerative Orthopaedics Research | Prof Gordon Slater',
    description:
      'Prof Gordon Slater’s research: foot & ankle surgery, orthobiologics, stem cells and regenerative medicine, hyperbaric oxygen, aging biology and AI.',
    inTopNav: true,
    inFooter: false,
    related: ['/research/publications', '/book', '/about'],
  },
  {
    path: '/research/publications',
    label: 'Publications',
    title: 'Peer-Reviewed Publications | Prof Gordon Slater',
    description:
      'Peer-reviewed papers by Prof Gordon Slater (1993–2026) on foot & ankle surgery, orthobiologics, HBOT, regenerative medicine and AI in medicine.',
    inTopNav: false,
    inFooter: false,
    parent: '/research',
    related: ['/research', '/book', '/about'],
  },
  {
    path: '/book',
    label: 'Book',
    title: 'Chaos to Creation: Longevity & Regeneration | Gordon Slater',
    description:
      'Chaos to Creation: Longevity and Regeneration Frontiers — the book by Prof Gordon Slater on aging, regenerative medicine and lifespan.',
    ogImage: '/book-cover-chaos-to-creation.jpg',
    ogImageAlt: 'Chaos to Creation by Prof Gordon Slater — book cover',
    inTopNav: true,
    inFooter: false,
    related: ['/book/three-rules', '/book/case-studies', '/research'],
  },
  {
    path: '/book/three-rules',
    label: 'Three Rules',
    title: 'The Three Rules — Chaos to Creation by Gordon Slater',
    description:
      'The three rules behind Chaos to Creation: life drifts toward degeneration, biologic inertia must be overcome, and lifespan is an energy balance.',
    inTopNav: false,
    inFooter: false,
    parent: '/book',
    related: ['/book', '/book/case-studies', '/research'],
  },
  {
    path: '/book/case-studies',
    label: 'Case studies',
    title: 'Case Studies — Chaos to Creation by Gordon Slater',
    description:
      'Two clinical cases from Chaos to Creation: talus reconstitution with autologous stem cells, and HBOT-assisted healing of a Brooker-4 diabetic ulcer.',
    inTopNav: false,
    inFooter: false,
    parent: '/book',
    related: ['/book', '/book/three-rules', '/research'],
  },
  {
    path: '/writing',
    label: 'Writing',
    title: 'Writing on Foot & Ankle Surgery | Prof Gordon Slater',
    description:
      'Articles by Prof Gordon Slater on ankle arthritis, plantar fibroma, diabetic foot care, limb salvage, stem cells and regenerative orthopaedics.',
    inTopNav: true,
    inFooter: false,
    related: ['/research', '/book', '/about'],
  },
  {
    path: '/contact',
    label: 'Contact',
    title: 'Contact Prof Gordon Slater — Research, Media & Speaking',
    description:
      'Contact Prof Gordon Slater for research collaboration, speaking and media. Clinical appointments are arranged through his practice website.',
    inTopNav: true,
    inFooter: false,
    related: ['/about', '/book'],
  },
  {
    path: '/giving',
    label: 'Giving',
    title: 'Giving — Sydney Medical-Research Charities | Gordon Slater',
    description:
      'Three Sydney charity events Prof Gordon Slater supports, helping fund breast-cancer, cardiovascular and vision research through in-kind donations.',
    inTopNav: true,
    inFooter: true,
    related: ['/about', '/book', '/contact'],
  },
  {
    path: '/privacy',
    label: 'Privacy',
    title: 'Privacy | Prof Gordon Slater',
    description:
      'Privacy information for Prof Gordon Slater’s personal website — no forms, no analytics, and no collection of personal information today.',
    noindex: true,
    inTopNav: false,
    inFooter: false,
    related: ['/contact', '/disclaimer', '/accessibility'],
  },
  {
    path: '/disclaimer',
    label: 'Disclaimer',
    title: 'Disclaimer | Prof Gordon Slater',
    description:
      'General-information disclaimer for Prof Gordon Slater’s personal website, including the separation from clinical care and the practice site.',
    noindex: true,
    inTopNav: false,
    inFooter: false,
    related: ['/privacy', '/contact', '/accessibility'],
  },
  {
    path: '/accessibility',
    label: 'Accessibility',
    title: 'Accessibility | Prof Gordon Slater',
    description:
      'Accessibility statement for Prof Gordon Slater’s personal website, including motion, readability, and feedback paths for access barriers.',
    inTopNav: false,
    inFooter: false,
    related: ['/privacy', '/contact', '/disclaimer'],
  },
];

/** Quick lookup helper — re-exported from src/lib/site.ts as findRoute(). */
export const SITE_ROUTES_BY_PATH: Record<string, SiteRoute> = Object.fromEntries(
  SITE_ROUTES.map((r) => [r.path, r]),
);
