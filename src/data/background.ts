import type { Capability } from '../types';

// -------------------------------------------------------------
// Training, leadership roles, capabilities.
// Used by /about and (until home reduction lands) by Background.tsx.
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

/** Capabilities — the four-card "what he does" overview. */
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
      'Sixty peer-reviewed papers across foot & ankle surgery, orthobiologics, HBOT, stem cells and regenerative medicine, aging biology, and AI in medicine.',
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
