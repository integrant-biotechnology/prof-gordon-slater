import type { Article } from '../types';

// -------------------------------------------------------------
// Writing — links to the published clinical blog (real).
// In PR-6 the Article type is extended with optional `body` + `slug`
// to support hosted essays at /writing/[slug].
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
