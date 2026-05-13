import type {
  Article,
  BookRule,
  Capability,
  CaseStudy,
  CommunityItem,
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
      'A 30-year clinical record in foot and ankle surgery, including minimally invasive techniques.',
    icon: 'Stethoscope',
  },
  {
    title: 'Researcher & editor',
    description:
      'Sixty peer-reviewed papers across foot & ankle surgery, orthobiologics, HBOT, regenerative medicine and aging biology.',
    icon: 'Microscope',
  },
  {
    title: 'Author',
    description:
      'Author of From Chaos to Creation: The Life Force Formula (February 2026) — a synthesis of his clinical and research thinking.',
    icon: 'BookOpen',
  },
  {
    title: 'Innovator',
    description:
      'Eponymous techniques, a granted peptide patent, and a long-running record in Australian medical-device regulatory work.',
    icon: 'Lightbulb',
  },
];

// -------------------------------------------------------------
// The Book — From Chaos to Creation (Feb 2026)
// -------------------------------------------------------------

export const BOOK = {
  title: 'From Chaos to Creation',
  subtitle: 'The Life Force Formula',
  publishedDate: 'February 2026',
  byline: 'Prof Gordon Slater',
  /** Strongest hero pull for the /book page (KB §10 → book p. 15). */
  heroQuote: 'Aging is a challenge to address rather than an inevitable fate to be endured.',
  heroQuoteSource: 'From Chaos to Creation, p. 15',
  /** Short blurb for the home BookPreview block. */
  summary:
    'A book-length synthesis of three decades of foot & ankle practice, an emerging body of regenerative-medicine research, and a working frame for thinking about lifespan as a modifiable outcome.',
  /** Replace with the real Amazon / publisher URL when supplied. */
  purchaseUrl: '#',
  purchaseLabel: 'Find the book',
  purchasePlaceholder: true as const,
};

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
  attribution: 'From Chaos to Creation, Appendix pp. 220–226',
};

/** Slater's Three Rules — verbatim from book p. 221. */
export const BOOK_RULES: BookRule[] = [
  {
    number: 1,
    title: 'Life Exists in a Constant Drift Toward Degeneration.',
    quote:
      'All cellular and biological systems are subject to entropy, accumulating damage over time. In order to extend life, we must actively slow or counteract this degenerative flux.',
    attribution: 'From Chaos to Creation, p. 221',
  },
  {
    number: 2,
    title: 'Biologic Inertia Must Be Overcome.',
    quote:
      'Living systems in motion accumulate biological inertia — the weight of past damage, disease, and metabolic wear. This inertia can be overcome by a corrective input proportional to age and biological burden, followed by sustained support.',
    attribution: 'From Chaos to Creation, p. 221',
  },
  {
    number: 3,
    title: 'Lifespan Is an Energy Balance, Not a Clock.',
    quote:
      'Biology is too complex to be reduced to a single equation. Still, we can outline the key variables that shape lifespan and describe how they interact.',
    attribution: 'From Chaos to Creation, p. 221',
  },
];

/** Two factual clinical-case panels for the /book page. */
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'talus-reconstitution',
    title: 'Talus reconstitution',
    body:
      'A non-weight-bearing talus reconstituted to load-bearing form in eight weeks via 20 mL autologous mesenchymal stem cells with external fixation — a distraction-arthroplasty + biologics protocol producing documented cartilage regeneration in case-series form.',
    attribution: 'From Chaos to Creation, pp. 176, 202',
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
      'Sixty peer-reviewed papers (2003–2026) across foot & ankle surgery, orthobiologics, HBOT, regenerative medicine and aging biology.',
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
      'From Chaos to Creation: The Life Force Formula (February 2026) — a synthesis of three decades of clinical and research work.',
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
// Verified social profiles — placeholder URLs (KB §9 [GAP])
// -------------------------------------------------------------

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', url: '#', icon: 'Linkedin', placeholder: true },
  { label: 'X', url: '#', icon: 'Twitter', placeholder: true },
  { label: 'Research profile', url: '#', icon: 'GraduationCap', placeholder: true },
  { label: 'YouTube', url: '#', icon: 'Youtube', placeholder: true },
  { label: 'Instagram', url: '#', icon: 'Instagram', placeholder: true },
];

// -------------------------------------------------------------
// Footer disclaimer
// -------------------------------------------------------------

export const FOOTER_DISCLAIMER =
  'This is the personal website of Prof Gordon Slater. Information provided here is general in nature, is not medical advice, and does not create a clinician–patient relationship. For clinical care or to arrange an appointment, please see the practice site.';
