import { SITE_ROUTES } from '@/data/site';
import { BOOK, BOOK_FORMATS, BOOK_SITE_URL } from '@/data/book';
import { DOCTOR_NAME, PRACTICE_URL } from '@/data/identity';
import { SOCIAL_LINKS } from '@/data/social';
import { FULL_PUBLICATIONS } from '@/data/research/publications';
import { breadcrumbsFor, findRoute } from '@/lib/site';
import { siteUrl } from '@/lib/site-origin';
import { metaFor } from '@/lib/seo';

// -------------------------------------------------------------
// Structured data — one connected schema.org graph per page.
//
// Every page carries the same WebSite + Person nodes (stable @ids),
// so Google sees one entity — Prof Gordon Slater — that the site,
// the book and the papers all point at. Page-specific nodes
// (WebPage/ProfilePage, BreadcrumbList, Book, ItemList) reference
// those @ids instead of repeating name strings.
//
// Build-time only: imported by src/entry-server.tsx, never by the
// client bundle, so the publications list does not ship as JS.
//
// Claims stay factual (AHPRA): credentials, affiliations and
// subjects only — no ratings, reviews or outcome language.
// -------------------------------------------------------------

type Node = Record<string, unknown>;

const ORIGIN = siteUrl('');
export const PERSON_ID = `${ORIGIN}/#person`;
export const WEBSITE_ID = `${ORIGIN}/#website`;
export const BOOK_ID = `${ORIGIN}/book#book`;

const ref = (id: string) => ({ '@id': id });

const credential = (name: string, category: string, recognizedBy: string): Node => ({
  '@type': 'EducationalOccupationalCredential',
  name,
  credentialCategory: category,
  recognizedBy: { '@type': 'Organization', name: recognizedBy },
});

export const personNode = (): Node => ({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: DOCTOR_NAME,
  givenName: 'Gordon',
  familyName: 'Slater',
  honorificPrefix: 'Prof',
  alternateName: [
    'Gordon Slater',
    'Professor Gordon Slater',
    'Dr Gordon Slater',
    'Gordon L Slater',
  ],
  url: `${ORIGIN}/`,
  image: {
    '@type': 'ImageObject',
    url: siteUrl('/portrait-gordon-slater-hero.jpg?v=4'),
    caption: 'Prof Gordon Slater',
  },
  description:
    'Sydney foot & ankle orthopaedic surgeon, Professor at the University of Technology Sydney, regenerative-medicine researcher and author of Chaos to Creation.',
  jobTitle: 'Foot & Ankle Orthopaedic Surgeon',
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Orthopaedic surgeon',
    occupationLocation: { '@type': 'City', name: 'Sydney' },
  },
  hasCredential: [
    credential('MBBS', 'degree', 'University of New South Wales'),
    credential('FRACS (Orth)', 'fellowship', 'Royal Australasian College of Surgeons'),
    credential('FAOrthA', 'fellowship', 'Australian Orthopaedic Association'),
  ],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'University of New South Wales' },
    { '@type': 'Hospital', name: 'Hospital for Special Surgery', address: 'New York' },
  ],
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Technology Sydney',
    url: 'https://www.uts.edu.au/',
  },
  workLocation: {
    '@type': 'Place',
    name: 'Sydney, New South Wales, Australia',
  },
  nationality: { '@type': 'Country', name: 'Australia' },
  knowsAbout: [
    'Foot and ankle surgery',
    'Orthopaedic surgery',
    'Minimally invasive foot and ankle surgery',
    'Ankle arthritis',
    'Ankle distraction arthroplasty',
    'Orthobiologics',
    'Regenerative medicine',
    'Stem cell therapy',
    'Hyperbaric oxygen therapy',
    'Diabetic foot',
    'Aging biology',
    'Longevity',
    'Medical-device innovation',
  ],
  // Same-entity profiles only. Add ORCID / Google Scholar /
  // ResearchGate here (via src/data/social.ts) once their exact
  // URLs are verified — never guess an identifier.
  sameAs: [...SOCIAL_LINKS.map((s) => s.url), PRACTICE_URL],
});

export const websiteNode = (): Node => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${ORIGIN}/`,
  name: DOCTOR_NAME,
  alternateName: 'Gordon Slater',
  inLanguage: 'en-AU',
  about: ref(PERSON_ID),
  publisher: ref(PERSON_ID),
});

export const bookNode = (): Node => ({
  '@type': 'Book',
  '@id': BOOK_ID,
  name: `${BOOK.title}: ${BOOK.subtitle}`,
  alternateName: BOOK.title,
  author: ref(PERSON_ID),
  datePublished: '2026-04-09',
  inLanguage: 'en',
  image: siteUrl(BOOK.coverImageJpg),
  description: BOOK.summary,
  bookFormat: ['https://schema.org/Hardcover', 'https://schema.org/Paperback', 'https://schema.org/EBook'],
  url: BOOK_SITE_URL,
  mainEntityOfPage: siteUrl('/book'),
  sameAs: [BOOK_SITE_URL, ...BOOK_FORMATS.map((f) => f.url)],
});

const breadcrumbNode = (path: string): Node | undefined => {
  const route = findRoute(path);
  if (!route || path === '/') return undefined;
  const chain = breadcrumbsFor(route);
  const home = findRoute('/');
  const items = home && chain[0]?.path !== '/' ? [home, ...chain] : chain;
  return {
    '@type': 'BreadcrumbList',
    '@id': `${siteUrl(path)}#breadcrumb`,
    itemListElement: items.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: r.path === '/' ? 'Home' : r.label,
      item: siteUrl(r.path),
    })),
  };
};

const publicationsNode = (): Node => ({
  '@type': 'ItemList',
  '@id': `${siteUrl('/research/publications')}#papers`,
  name: 'Peer-reviewed publications by Prof Gordon Slater',
  numberOfItems: FULL_PUBLICATIONS.length,
  itemListOrder: 'https://schema.org/ItemListOrderDescending',
  itemListElement: FULL_PUBLICATIONS.slice()
    .reverse()
    .map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'ScholarlyArticle',
        headline: p.title.length > 110 ? `${p.title.slice(0, 107)}…` : p.title,
        name: p.title,
        author: ref(PERSON_ID),
        ...(p.year && { datePublished: p.year }),
        ...(p.venue && { isPartOf: { '@type': 'Periodical', name: p.venue.replace(/,\s*[^,]*\d{4}.*$/, '') } }),
        ...(p.href && { url: p.href, sameAs: p.href }),
      },
    })),
});

/** The full JSON-LD graph for a URL path. Undefined for 404s. */
export const graphFor = (path: string): Node | undefined => {
  const meta = metaFor(path);
  if (!meta.found || !meta.canonical) return undefined;

  const isProfile = meta.path === '/' || meta.path === '/about';
  const isBookPage = meta.path === '/book' || meta.path.startsWith('/book/');
  const breadcrumb = breadcrumbNode(meta.path);

  const page: Node = {
    '@type': isProfile ? 'ProfilePage' : meta.path === '/research/publications' ? 'CollectionPage' : 'WebPage',
    '@id': `${meta.canonical}#webpage`,
    url: meta.canonical,
    name: meta.title,
    description: meta.description,
    inLanguage: 'en-AU',
    isPartOf: ref(WEBSITE_ID),
    ...(isProfile ? { mainEntity: ref(PERSON_ID) } : { about: ref(isBookPage ? BOOK_ID : PERSON_ID) }),
    ...(breadcrumb && { breadcrumb: ref(breadcrumb['@id'] as string) }),
    primaryImageOfPage: { '@type': 'ImageObject', url: meta.ogImage },
  };

  const nodes: Node[] = [websiteNode(), personNode(), page];
  if (breadcrumb) nodes.push(breadcrumb);
  if (isBookPage) nodes.push(bookNode());
  if (meta.path === '/research/publications') nodes.push(publicationsNode());

  return { '@context': 'https://schema.org', '@graph': nodes };
};

/** Every indexable, pre-renderable path (no dynamic segments). */
export const indexablePaths = (): string[] =>
  SITE_ROUTES.filter((r) => !r.path.includes(':') && !r.noindex).map((r) => r.path);

/** Every path to pre-render (indexable + noindex legal pages). */
export const prerenderPaths = (): string[] =>
  SITE_ROUTES.filter((r) => !r.path.includes(':')).map((r) => r.path);
