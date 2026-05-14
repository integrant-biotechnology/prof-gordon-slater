import type {
  Article,
  BookBullet,
  BookFormat,
  BookRule,
  Capability,
  CaseStudy,
  CommunityItem,
  Endorsement,
  GivingEvent,
  LifeForceVariable,
  Publication,
  SocialLink,
  WorkItem,
} from './types';

// -------------------------------------------------------------
// Identity
// -------------------------------------------------------------

export const DOCTOR_NAME = 'Prof Gordon Slater';
export const DOCTOR_CREDENTIALS = 'MBBS, FRACS (Orth), FAOrthA';
export const DOCTOR_TITLE =
  'Foot & Ankle Orthopaedic Surgeon · Professor (UTS) · Author';
export const TAGLINE =
  'Surgeon · researcher · author · medical-device innovator';

// -------------------------------------------------------------
// Contact / outbound
// -------------------------------------------------------------

/** Outbound link for anyone seeking clinical care or to arrange an appointment. */
export const PRACTICE_URL = 'https://orthopaedic-surgeon.com.au/';

/** Public press / marketing contact (Adelaide Slater handles). */
export const CONTACT_EMAIL = 'marketing@drgordonslater.com.au';
export const PRESS_PHONE = '+61 2 7232 1153';

// -------------------------------------------------------------
// Training & background
// -------------------------------------------------------------

export interface TrainingMilestone {
  year: string;
  label: string;
}

export const TRAINING: TrainingMilestone[] = [
  { year: '1987', label: 'MBBS, University of New South Wales' },
  { year: '1990', label: 'Royal Australasian College of Surgeons — Part 1 examination' },
  { year: '1991', label: 'AO basic trauma course, Davos, Switzerland' },
  { year: '1993', label: 'Early Management of Severe Trauma, St George Hospital' },
  { year: '1997', label: 'FRACS (Orthopaedics)' },
  { year: '1997', label: 'Advanced foot & ankle fellowship — Hospital for Special Surgery, New York' },
  { year: 'Since', label: 'Among the first surgeons in Australia to adopt minimally invasive foot & ankle techniques' },
];

export interface LeadershipRole {
  role: string;
  org: string;
}

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  { role: 'Professor', org: 'University of Technology Sydney' },
  { role: 'Associate Editor', org: 'Foot & Ankle International' },
  { role: 'Editorial Panel', org: 'EC Orthopaedics' },
  { role: 'Chair, Foot & Ankle', org: 'Asia Pacific Orthopaedic Association (APOA)' },
];

// -------------------------------------------------------------
// Capabilities — the four-card "what he does" overview
// -------------------------------------------------------------

export const CAPABILITIES: Capability[] = [
  {
    title: 'Surgeon',
    description:
      'Decades of clinical experience in foot and ankle surgery, including minimally invasive techniques.',
    icon: 'Stethoscope',
  },
  {
    title: 'Researcher & editor',
    description:
      'More than fifty peer-reviewed papers across foot & ankle surgery, orthobiologics, HBOT, regenerative medicine and aging biology.',
    icon: 'Microscope',
  },
  {
    title: 'Author',
    description:
      'Author of Chaos to Creation: Longevity and Regeneration Frontiers (9 April 2026) — a synthesis of his clinical and research thinking.',
    icon: 'BookOpen',
  },
  {
    title: 'Innovator',
    description:
      'Eponymous techniques, multiple medical-technology patents, and a long-running record in Australian medical-device regulatory work.',
    icon: 'Lightbulb',
  },
];

// -------------------------------------------------------------
// The Book — Chaos to Creation: Longevity and Regeneration Frontiers
// (Professor Gordon Slater, published 9 April 2026)
// -------------------------------------------------------------

export const BOOK = {
  title: 'Chaos to Creation',
  subtitle: 'Longevity and Regeneration Frontiers',
  publishedDate: '9 April 2026',
  byline: 'Professor Gordon Slater',
  /** Cover hook on the published jacket. */
  tagline: 'What if decline isn’t inevitable?',
  subtagline: 'Exploring longevity, regeneration and the science reshaping how we age.',
  /** Cover image (responsive sizes via srcset, see BOOK_COVER_SRCSET). */
  coverImage: '/book-cover-chaos-to-creation.webp',
  coverImageJpg: '/book-cover-chaos-to-creation.jpg',
  coverAlt: 'Chaos to Creation by Professor Gordon Slater — book cover.',
  /** Pull-quote used inside the /book page (book p. 15). */
  heroQuote: 'Aging is a challenge to address rather than an inevitable fate to be endured.',
  heroQuoteSource: 'Chaos to Creation, p. 15',
  /** Short blurb for the home BookPreview block. */
  summary:
    'A book-length synthesis of decades of foot & ankle practice, peer-reviewed regenerative-medicine research, and a working frame for thinking about lifespan as a modifiable outcome.',
};

/** Responsive srcset for the cover. */
export const BOOK_COVER_SRCSET =
  '/book-cover-chaos-to-creation-480.webp 480w, /book-cover-chaos-to-creation-800.webp 800w, /book-cover-chaos-to-creation-1200.webp 1200w';

/** Three Amazon AU formats — Hardcover · Paperback · Kindle. */
export const BOOK_FORMATS: BookFormat[] = [
  {
    format: 'Hardcover',
    url: 'https://www.amazon.com.au/Chaos-Creation-Prof-Gordon-Slater/dp/B0GWTSZN7M',
  },
  {
    format: 'Paperback',
    url: 'https://www.amazon.com.au/Chaos-Creation-Prof-Gordon-Slater/dp/B0GWTQFMSP',
  },
  {
    format: 'Kindle',
    url: 'https://www.amazon.com.au/Chaos-Creation-Prof-Gordon-Slater-ebook/dp/B0GWTGTHBN',
  },
];

/** "Inside this book" — the four bullets from the back cover. */
export const BOOK_INSIDE: BookBullet[] = [
  { text: 'How chaos theory and evolution reshape the way we see aging and regeneration.' },
  { text: 'What nature’s "immortal" creatures can teach us about the body’s hidden potential.' },
  { text: 'Which breakthroughs in regenerative medicine are real, and which ones are still being built.' },
  { text: 'The simplest habits that can shift your health trajectory, starting now.' },
];

/** Three book-jacket endorsements — verbatim, attributed. */
export const BOOK_ENDORSEMENTS: Endorsement[] = [
  {
    quote:
      'Chaos to Creation will change the way you think about life, aging and what it means to regenerate, essential reading for today and tomorrow.',
    by: 'Mark Bouris',
    title: 'Entrepreneur & Investor',
  },
  {
    quote:
      'Rarely does a book make science feel this alive — challenging, provocative, and utterly fascinating from first page to last.',
    by: 'Dr Marty O’Malley',
    title: 'Associate Professor of Clinical Orthopaedic Surgery, Weill Cornell Medical College',
  },
  {
    quote:
      'Deeply thoughtful and thought-provoking, addressing the elusive Fountain of Youth with evidence, explaining how close and how far we are from it and, most importantly, what is possible.',
    by: 'Dr Katherine Samaras',
    title: 'Australian Centre for Metabolic Health',
  },
];

/** The Life Force Formula — book Appendix pp. 220–226. */
export const LIFE_FORCE = {
  /** Plain-text rendering for screen readers / fallback. */
  plain: 'L^F = Ē × ((R − D) / I) + S_Addition',
  variables: [
    { symbolHtml: 'L<sup>F</sup>', meaning: 'Life Force — instantaneous vitality / regenerative potential. Highest at cellular inception; lowest at death.' },
    { symbolHtml: 'Ē', meaning: 'Mean environmental / lifestyle envelope (diet, exercise, stress, toxin exposure, healthcare access, geography).' },
    { symbolHtml: 'R', meaning: 'Net regenerative capability — autophagy, DNA repair, proteostasis, stem-cell function, telomere maintenance, immune renewal.' },
    { symbolHtml: 'D', meaning: 'Damage — oxidative stress, mutations, DNA damage, mitochondrial dysfunction, protein aggregation, chronic disease, aging itself.' },
    { symbolHtml: 'I', meaning: 'Biologic Inertia — resistance to regeneration; accumulated weight of past damage, disease, and metabolic wear.' },
    { symbolHtml: 'S<sub>Addition</sub>', meaning: 'Stem-cell therapeutic input added to the system. Localised application is more effective than systemic.' },
  ] satisfies LifeForceVariable[],
  reading:
    'Life Force = environmental envelope × (net regenerative work / inertia) + stem-cell input.',
  attribution: 'Chaos to Creation, Appendix pp. 220–226',
};

/** Slater's Three Rules — verbatim from book p. 221. */
export const BOOK_RULES: BookRule[] = [
  {
    number: 1,
    title: 'Life Exists in a Constant Drift Toward Degeneration.',
    quote:
      'All cellular and biological systems are subject to entropy, accumulating damage over time. In order to extend life, we must actively slow or counteract this degenerative flux.',
    attribution: 'Chaos to Creation, p. 221',
  },
  {
    number: 2,
    title: 'Biologic Inertia Must Be Overcome.',
    quote:
      'Living systems in motion accumulate biological inertia — the weight of past damage, disease, and metabolic wear. This inertia can be overcome by a corrective input proportional to age and biological burden, followed by sustained support.',
    attribution: 'Chaos to Creation, p. 221',
  },
  {
    number: 3,
    title: 'Lifespan Is an Energy Balance, Not a Clock.',
    quote:
      'Biology is too complex to be reduced to a single equation. Still, we can outline the key variables that shape lifespan and describe how they interact.',
    attribution: 'Chaos to Creation, p. 221',
  },
];

/** Two factual clinical-case panels for the /book page. */
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'talus-reconstitution',
    title: 'Talus reconstitution',
    body:
      'A non-weight-bearing talus reconstituted to load-bearing form in eight weeks via 20 mL autologous mesenchymal stem cells with external fixation — a distraction-arthroplasty + biologics protocol producing documented cartilage regeneration in case-series form.',
    attribution: 'Chaos to Creation, pp. 176, 202',
  },
  {
    id: 'hbot-brooker-4',
    title: 'Brooker-4 diabetic ulcer',
    body:
      'A 60-year-old patient with a Brooker-4 grade diabetic ulcer healed in five HBOT sessions over three weeks, alongside minimally invasive surgery — illustrating HBOT as an adjunct in chronic-wound care.',
    attribution:
      'Slater, G. & Bachmid, Z. (2024) — "Application of HBOT with Minimally Invasive Guided Surgery to Heal Chronic Brooker-4 Diabetic Ulcer."',
  },
];

// -------------------------------------------------------------
// Body of work — home grid + selected publications
// -------------------------------------------------------------

export const BODY_OF_WORK: WorkItem[] = [
  {
    id: 'research',
    title: 'Research & publications',
    description:
      'More than fifty peer-reviewed papers (2003–2026) across foot & ankle surgery, orthobiologics, HBOT, regenerative medicine and aging biology.',
    icon: 'FlaskConical',
    href: '#publications',
    linkLabel: 'See selected publications',
    internal: true,
  },
  {
    id: 'innovation',
    title: 'Innovation & medical devices',
    description:
      'Eponymous techniques (the Gordon Slater ankle-fusion plate, the Slater modification of minimally invasive forefoot surgery), the JP2023106525A peptide patent (cartilage-regeneration cascade), and a fifteen-year personal record of TGA-registered medical-device approvals.',
    icon: 'Cpu',
  },
  {
    id: 'book',
    title: 'Book',
    description:
      'Chaos to Creation: Longevity and Regeneration Frontiers (9 April 2026) — a synthesis of decades of clinical and research work.',
    icon: 'BookOpen',
    href: '/book',
    linkLabel: 'Read the book page',
    internal: true,
  },
  {
    id: 'editorial',
    title: 'Editorial & academic',
    description:
      'Professor, University of Technology Sydney · Associate Editor, Foot & Ankle International · Editorial panel, EC Orthopaedics · Chair, APOA Foot & Ankle.',
    icon: 'Award',
  },
];

/**
 * Selected publications — drawn from the KB Section 4 headline anchors.
 * Real papers, real years; venues only where the KB attests them.
 */
export const SELECTED_PUBLICATIONS: Publication[] = [
  {
    title: 'Endoscopic plantar fascia release',
    year: '2003',
  },
  {
    title: 'Gordon Slater ankle-fusion plate',
    year: '2011',
  },
  {
    title: 'Minimally invasive forefoot surgery — the Slater modification',
    year: '2018–19',
  },
  {
    title: 'The Future of Medicine: Biologics and Artificial Intelligence (Slater, Sambo & Hannan)',
    venue: 'J Regen Biol Med, 1(2), 1–11',
    year: '2019',
  },
  {
    title: 'A Review of Stem Cells: Why Do We Age? (Slater, G. & Slater, T.)',
    venue: 'J Regen Biol Med, 4: 1–11',
    year: '2022',
  },
  {
    title: 'Hyperbaric oxygen therapy in anti-aging practice',
    year: '2023',
  },
  {
    title: 'Application of HBOT with Minimally Invasive Guided Surgery to Heal Chronic Brooker-4 Diabetic Ulcer (Slater & Bachmid)',
    year: '2024',
  },
  {
    title: 'Age-related decline of mesenchymal stem cells',
    year: '2026',
  },
];

/** Placeholder until a curated Google Scholar / ORCID / PubMed profile URL is supplied. */
export const PUBLICATIONS_INDEX_URL = '#';

/** Six research themes — verbatim from KB §4 theme taxonomy. */
export const RESEARCH_THEMES: string[] = [
  'Foot & ankle surgery',
  'Orthobiologics',
  'Stem cells & regenerative medicine',
  'Hyperbaric oxygen therapy (HBOT)',
  'Aging biology',
  'AI in medicine',
];

// -------------------------------------------------------------
// Community + vision (real, KB-anchored)
// -------------------------------------------------------------

export const COMMUNITY: CommunityItem[] = [
  {
    title: 'Teaching & academia',
    description:
      'Professor at the University of Technology Sydney; collaborates with UTS biomedical engineering on the Life Force measurement workstream.',
  },
  {
    title: 'Editorial & professional bodies',
    description:
      'Associate Editor of Foot & Ankle International, editorial panel of EC Orthopaedics, and Chair of Foot & Ankle for the Asia Pacific Orthopaedic Association.',
  },
  {
    title: 'Mentoring early-career engineers',
    description:
      'Actively building a research team in Sydney — around fifty recent biotech / AI-engineering applicants signal the shape of the local talent pool he is helping to grow.',
  },
  {
    title: 'Supporting medical research',
    description:
      'A proud supporter of three Sydney charity events that fund breast-cancer, heart, and vision research — the Pink Luncheon at Royal Randwick, the Ingham Charity Raceday for the Ingham Institute, and the Black & White End of Summer Luncheon for Vision Australia.',
  },
];

export const VISION_STATEMENT =
  'Personalised biologics become tractable at scale when AI does the heavy lifting on molecular characterisation, trial design, and post-market surveillance — a thesis Prof Slater first set out in the 2019 paper "The Future of Medicine: Biologics and Artificial Intelligence" (Slater, Sambo & Hannan). The right standard for getting there responsibly is the FDA–EMA Joint Guiding Principles of Good AI Practice (January 2026), the EU AI Act, and EMA Annex 22. The posture for Australian medical-device and biotech work: English-first product, anglosphere-first commercial rollout, regulatory-grown-up from day one.';

// -------------------------------------------------------------
// Writing — links to the published clinical blog (real)
// -------------------------------------------------------------

export const ARTICLES: Article[] = [
  {
    id: 'ankle-distraction',
    title: 'Ankle distraction arthroplasty for osteoarthritis: a promising option?',
    category: 'Ankle',
    href: 'https://orthopaedic-surgeon.com.au/ankle-distraction-arthroplasty-for-osteoarthritis-a-promising-option-2/',
  },
  {
    id: 'regenerative-orthopaedics',
    title: 'Advances in regenerative orthopaedics: insights from contemporary research',
    category: 'Regenerative medicine',
    href: 'https://orthopaedic-surgeon.com.au/advances-in-regenerative-orthopaedics-insights-from-contemporary-research/',
  },
  {
    id: 'limb-salvage-diabetes',
    title: 'Limb-salvage surgery versus amputation in diabetes',
    category: 'Diabetic foot',
    href: 'https://orthopaedic-surgeon.com.au/limb-salvage-surgery-vs-amputation-in-diabetes-a-research-review/',
  },
  {
    id: 'diabetic-foot-outcomes',
    title: 'Diabetic foot complications: outcomes and healthcare costs',
    category: 'Diabetic foot',
    href: 'https://orthopaedic-surgeon.com.au/diabetic-foot-complications-mortality-rates-and-healthcare-costs-comparable-to-cancer/',
  },
  {
    id: 'stem-cell-therapy',
    title: 'Stem cell therapy in orthopaedics and sports-injury recovery',
    category: 'Sports',
    href: 'https://orthopaedic-surgeon.com.au/stem-cell-therapy-in-orthopaedics-and-sports-injury-recovery/',
  },
  {
    id: 'plantar-fibroma',
    title: 'Understanding plantar fibroma: symptoms, causes and treatment options',
    category: 'Foot conditions',
    href: 'https://orthopaedic-surgeon.com.au/understanding-plantar-fibroma-symptoms-causes-and-treatment-options/',
  },
];

export const BLOG_INDEX_URL = 'https://orthopaedic-surgeon.com.au/about-us/in-the-news/';

// -------------------------------------------------------------
// Verified social profiles — the four canonical accounts Prof Slater
// maintains personally. Each is the source of truth for that platform's
// identity (mirrored into Person.sameAs JSON-LD in index.html).
// -------------------------------------------------------------

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn',  url: 'https://www.linkedin.com/in/drgordonslater/',  icon: 'Linkedin'  },
  { label: 'X',         url: 'https://x.com/drgordonslater',                 icon: 'Twitter'   },
  { label: 'YouTube',   url: 'https://www.youtube.com/@profgordonslater',    icon: 'Youtube'   },
  { label: 'Instagram', url: 'https://www.instagram.com/profgordonslater/',  icon: 'Instagram' },
];

// -------------------------------------------------------------
// Philanthropy / giving
// -------------------------------------------------------------

/** Short pledge line — reusable on home, footer, /giving. */
export const GIVING_PLEDGE =
  'Professor Slater is a proud supporter of Australian medical research.';

/** Intro paragraph for the /giving page. */
export const GIVING_INTRO =
  'Three Sydney charity events that fund research into conditions Prof Slater treats every week — bone, joint, vascular and ocular. He contributes hyperbaric oxygen therapy (HBOT) sessions and Integrant skincare to each, in support of the institutions that fund the underlying science.';

/** Closing pledge paragraph for the /giving page. */
export const GIVING_CLOSE =
  'Better outcomes follow from doing the science. Supporting these events is the practical end of the same idea — and a small thank-you to the researchers, nurses and clinicians who carry the rest of the load.';

/** A short stat used in the "By the numbers" strip on /giving. */
export interface GivingStat {
  value: string;
  label: string;
}

export const GIVING_STATS: GivingStat[] = [
  { value: '3', label: 'Sydney charity events supported each year' },
  { value: '3', label: 'Research fields — heart, breast, vision' },
  { value: 'In-kind', label: 'HBOT sessions and Integrant skincare' },
];

/** Three philanthropic events. */
export const GIVING_EVENTS: GivingEvent[] = [
  {
    id: 'pink-luncheon',
    name: 'The Pink Luncheon',
    host: 'Australian Turf Club',
    hostMark: 'ATC',
    cause: 'Breast cancer research',
    contribution: 'HBOT sessions and Integrant skincare donations',
    accent: 'pink',
    eventUrl: 'https://www.australianturfclub.com.au/hospitality/pink-fashion-lunch/',
    since: '2007',
    blurb:
      "A Chandon Ladies' Day at Royal Randwick where the proceeds back breast-cancer research — fashion, fine dining, and a serious cause in the same afternoon.",
  },
  {
    id: 'ingham-charity-raceday',
    name: 'The Ingham Charity Raceday',
    host: 'The Ingham — for the Ingham Institute',
    beneficiary: 'Ingham Institute for Applied Medical Research',
    cause: 'Heart and cardiovascular research',
    contribution: 'HBOT sessions and Integrant skincare donations',
    accent: 'red',
    heroBase: '/giving/ingham-charity-raceday-hero',
    heroAlt: 'The Ingham Charity Raceday — branded hero imagery',
    logo: '/giving/ingham-charity-raceday-logo.webp',
    eventUrl: 'https://theingham.com.au/',
    since: '2010',
    blurb:
      "A signature Sydney race day raising funds for the Ingham Institute's translational research into heart disease, cancer and chronic conditions.",
  },
  {
    id: 'black-and-white-luncheon',
    name: 'The Black & White End of Summer Luncheon',
    host: 'The Black & White Committee',
    beneficiary: 'Vision Australia',
    cause: 'Research and services for the blind and low-vision community',
    contribution: 'HBOT sessions and Integrant skincare donations',
    accent: 'neutral',
    heroBase: '/giving/black-and-white-luncheon-hero',
    heroAlt: 'The Black & White Committee — celebrating 90 years',
    logo: '/giving/black-and-white-luncheon-logo.webp',
    eventUrl: 'https://blackandwhite.org.au/',
    since: '1936',
    blurb:
      "Australia's longest-running volunteer fundraising committee for Vision Australia — ninety years of luncheons, balls, and quietly transformative giving.",
  },
];

// -------------------------------------------------------------
// Footer disclaimer
// -------------------------------------------------------------

export const FOOTER_DISCLAIMER =
  'This is the personal website of Prof Gordon Slater. Information provided here is general in nature, is not medical advice, and does not create a clinician–patient relationship. For clinical care or to arrange an appointment, please see the practice site.';
