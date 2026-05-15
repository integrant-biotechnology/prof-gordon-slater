import type {
  BookBullet,
  BookFormat,
  BookRule,
  CaseStudy,
  Endorsement,
  LifeForceVariable,
} from '../types';

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
