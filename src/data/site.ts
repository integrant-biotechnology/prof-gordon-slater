// -------------------------------------------------------------
// SITE_ROUTES — canonical route table.
//
// Single source of truth consumed by:
//   - Navbar (top-nav rendering, active-route highlighting)
//   - Footer (resources column rendering)
//   - <Breadcrumbs> (parent chain for sub-pages)
//   - <SeeAlsoFooter> (per-page related links block)
//   - useDocumentTitle (per-page <title> + meta description)
//   - scripts/generate-sitemap.mjs (sitemap.xml at build time)
//   - <JsonLd> (per-page structured data)
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
  /** Per-route OG image; falls back to the home portrait when omitted. */
  ogImage?: string;
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
    title: 'Prof Gordon Slater | Personal site',
    description:
      'The personal site of Prof Gordon Slater — foot & ankle orthopaedic surgeon, Professor at UTS, and author of Chaos to Creation. A factual record.',
    inTopNav: true,
    inFooter: false,
    related: ['/about', '/book', '/contact'],
  },
  {
    path: '/about',
    label: 'About',
    title: 'About | Prof Gordon Slater',
    description:
      'Bio, training, editorial roles, and research collaborators of Prof Gordon Slater — foot & ankle orthopaedic surgeon and Professor at UTS.',
    inTopNav: true,
    inFooter: false,
    related: ['/research', '/book', '/contact'],
  },
  {
    path: '/research',
    label: 'Research',
    title: 'Research | Prof Gordon Slater',
    description:
      'Six research themes spanning foot & ankle surgery, orthobiologics, stem cells & regenerative medicine, HBOT, aging biology, and AI in medicine.',
    inTopNav: true,
    inFooter: false,
    related: ['/research/publications', '/book', '/about'],
  },
  {
    path: '/research/publications',
    label: 'Publications',
    title: 'Publications | Prof Gordon Slater',
    description:
      'Selected peer-reviewed publications by Prof Gordon Slater (2003–2026) across surgery, orthobiologics, HBOT, regenerative medicine, and AI in medicine.',
    inTopNav: false,
    inFooter: false,
    parent: '/research',
    related: ['/research', '/book', '/about'],
  },
  {
    path: '/book',
    label: 'Book',
    title: 'Chaos to Creation | Prof Gordon Slater',
    description:
      'Chaos to Creation: Longevity and Regeneration Frontiers (9 April 2026) — Prof Gordon Slater’s book on lifespan as a modifiable outcome.',
    inTopNav: true,
    inFooter: false,
    related: ['/book/three-rules', '/book/case-studies', '/research'],
  },
  {
    path: '/book/three-rules',
    label: 'Three Rules',
    title: 'The Three Rules | Chaos to Creation',
    description:
      'The three claims the book rests on — life drifts toward degeneration; biologic inertia must be overcome; lifespan is an energy balance, not a clock.',
    inTopNav: false,
    inFooter: false,
    parent: '/book',
    related: ['/book', '/book/case-studies', '/research'],
  },
  {
    path: '/book/case-studies',
    label: 'Case studies',
    title: 'Case Studies | Chaos to Creation',
    description:
      'Two factual clinical-case panels referenced in Chaos to Creation — talus reconstitution via autologous stem cells, and HBOT-assisted healing of a Brooker-4 diabetic ulcer.',
    inTopNav: false,
    inFooter: false,
    parent: '/book',
    related: ['/book', '/book/three-rules', '/research'],
  },
  {
    path: '/contact',
    label: 'Contact',
    title: 'Contact | Prof Gordon Slater',
    description:
      'Get in touch with Prof Gordon Slater — clinical referral via the practice site; press, speaking, and professional enquiries via the marketing contact.',
    inTopNav: true,
    inFooter: false,
    related: ['/about', '/book'],
  },
  {
    path: '/giving',
    label: 'Giving',
    title: 'Giving | Prof Gordon Slater',
    description:
      'Three Sydney charity events Prof Gordon Slater supports — funding breast-cancer, cardiovascular, and vision research through in-kind donations.',
    inTopNav: false,
    inFooter: true,
    related: ['/about', '/book'],
  },
];

/** Quick lookup helper — re-exported from src/lib/site.ts as findRoute(). */
export const SITE_ROUTES_BY_PATH: Record<string, SiteRoute> = Object.fromEntries(
  SITE_ROUTES.map((r) => [r.path, r]),
);
