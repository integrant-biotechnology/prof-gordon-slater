import type { CommunityItem } from '../types';

// -------------------------------------------------------------
// Community + vision — currently consumed by the home page's
// CommunityVision section; folds into /about in PR-6.
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
