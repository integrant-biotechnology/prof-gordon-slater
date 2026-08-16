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

// -------------------------------------------------------------
// Career timeline — training (1987–1997) plus the verified
// innovation and synthesis milestones already recorded in
// research/innovations.ts and book.ts. Every entry traces to a
// source in the project tree (voice-source wall rules); do not
// add undated or unsourced milestones.
// -------------------------------------------------------------

export type TimelineEra = 'training' | 'practice' | 'innovation' | 'synthesis';

export interface TimelineEntry {
  year: string;
  label: string;
  detail?: string;
  era: TimelineEra;
  /** Optional internal route the milestone links to. */
  href?: string;
}

export const CAREER_TIMELINE: TimelineEntry[] = [
  { year: '1987', label: 'MBBS, University of New South Wales', era: 'training' },
  {
    year: '1990',
    label: 'Royal Australasian College of Surgeons — Part 1 examination',
    era: 'training',
  },
  { year: '1991', label: 'AO basic trauma course, Davos, Switzerland', era: 'training' },
  {
    year: '1993',
    label: 'Early Management of Severe Trauma, St George Hospital',
    era: 'training',
  },
  { year: '1997', label: 'FRACS (Orthopaedics)', era: 'training' },
  {
    year: '1997',
    label: 'Advanced foot & ankle fellowship — Hospital for Special Surgery, New York',
    era: 'training',
  },
  {
    year: '2003',
    label: 'First peer-reviewed publications',
    detail: 'The publication record opens; sixty papers follow across six themes to 2026.',
    era: 'practice',
    href: '/research/publications',
  },
  {
    year: '2011',
    label: 'Gordon Slater ankle-fusion plate',
    detail:
      'An eponymous hardware contribution to ankle-fusion surgery, published as a named device in the surgical literature.',
    era: 'innovation',
  },
  {
    year: '2018–19',
    label: 'Slater modification of minimally invasive forefoot surgery',
    detail:
      'A planning and execution modification to MIS forefoot surgery — among the first MIS forefoot adaptations adopted broadly in Australia.',
    era: 'innovation',
  },
  {
    year: '2023',
    label: 'Peptide patent — cartilage regeneration cascade',
    detail: 'Japanese filing JP2023106525A covering a peptide composition supporting cartilage regeneration.',
    era: 'innovation',
  },
  {
    year: '2024',
    label: 'Integrant frame',
    detail:
      'External fixation frame used in distraction-arthroplasty + biologics protocols; clinical-utility paper published 2024.',
    era: 'innovation',
  },
  {
    year: '2026',
    label: 'Chaos to Creation published',
    detail:
      'Longevity and Regeneration Frontiers — the synthesis of thirty years of clinical and research thinking.',
    era: 'synthesis',
    href: '/book',
  },
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
