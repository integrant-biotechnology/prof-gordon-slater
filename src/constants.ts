import type {
  Article,
  Capability,
  CommunityItem,
  Publication,
  SocialLink,
  WorkItem,
} from './types';

export const DOCTOR_NAME = 'Prof Gordon Slater';
export const DOCTOR_CREDENTIALS = 'MBBS, FRACS (Orth), FAOrthA';
export const DOCTOR_TITLE = 'Specialist Foot & Ankle Orthopaedic Surgeon';
export const TAGLINE =
  'Foot & ankle surgeon · researcher · medical-device development · author';

/** Outbound link for anyone seeking clinical care or to arrange an appointment. */
export const PRACTICE_URL = 'https://orthopaedic-surgeon.com.au/';

/**
 * General contact email used in the Connect section.
 * NOTE: this is the practice admin address as a stopgap — replace with a
 * dedicated personal address (e.g. hello@profgordonslater.com.au) before launch.
 */
export const CONTACT_EMAIL = 'admin@drgordonslater.com.au';

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
  { role: 'Associate Editor', org: 'Foot & Ankle International' },
  { role: 'Editorial Panel', org: 'EC Orthopaedics' },
  { role: 'Chair, Foot & Ankle', org: 'Asia Pacific Orthopaedic Association (APOA)' },
];

export const CAPABILITIES: Capability[] = [
  {
    title: 'Surgeon',
    description:
      'Specialist orthopaedic practice in foot and ankle surgery, including minimally invasive techniques where appropriate.',
    icon: 'Stethoscope',
  },
  {
    title: 'Researcher & editor',
    description: 'Associate Editor of Foot & Ankle International; contributes to the orthopaedic literature.',
    icon: 'Microscope',
  },
  {
    title: 'Educator',
    description:
      'Presents at international surgical conferences; chairs Foot & Ankle for the Asia Pacific Orthopaedic Association.',
    icon: 'GraduationCap',
  },
  {
    title: 'Innovator',
    description: 'Works on medical-device development applied to foot and ankle care.',
    icon: 'Lightbulb',
  },
];

/**
 * Body of work — categories shown as the main grid in the BodyOfWork section.
 * Items marked `placeholder` need their `href`/`linkLabel`/copy verified
 * before launch (see README checklist).
 */
export const BODY_OF_WORK: WorkItem[] = [
  {
    id: 'research',
    title: 'Research & publications',
    description:
      'Peer-reviewed contributions across foot & ankle surgery, joint preservation and regenerative orthopaedics.',
    icon: 'FlaskConical',
    href: '#',
    linkLabel: 'View on Google Scholar',
    placeholder: true,
  },
  {
    id: 'innovation',
    title: 'Innovation & medical devices',
    description:
      'Work on orthopaedic devices and instrumentation applied to foot and ankle surgery — described factually, not as therapeutic claims.',
    icon: 'Cpu',
    href: '#',
    linkLabel: 'See devices',
    placeholder: true,
  },
  {
    id: 'book',
    title: 'Book',
    description:
      'Long-form writing on foot and ankle surgery and the broader practice of orthopaedics.',
    icon: 'BookOpen',
    href: '#',
    linkLabel: 'Find the book',
    placeholder: true,
  },
  {
    id: 'editorial',
    title: 'Editorial & academic',
    description:
      'Associate Editor, Foot & Ankle International · Editorial panel, EC Orthopaedics · Chair, APOA Foot & Ankle.',
    icon: 'Award',
  },
];

/**
 * Selected publications — placeholder entries shown beneath the body-of-work grid.
 * Replace with 3–5 representative real publications, then add a real
 * `PUBLICATIONS_INDEX_URL` (Google Scholar / PubMed / ORCID).
 */
export const SELECTED_PUBLICATIONS: Publication[] = [
  { title: 'Selected publication title — placeholder', venue: 'Journal name', year: 'YYYY', href: '#', placeholder: true },
  { title: 'Selected publication title — placeholder', venue: 'Journal name', year: 'YYYY', href: '#', placeholder: true },
  { title: 'Selected publication title — placeholder', venue: 'Journal name', year: 'YYYY', href: '#', placeholder: true },
];
export const PUBLICATIONS_INDEX_URL = '#'; // placeholder — link to a Google Scholar / ORCID / PubMed profile

export const COMMUNITY: CommunityItem[] = [
  {
    title: 'Mentoring & teaching',
    description: 'Supporting trainees and junior surgeons through clinical mentorship and conference teaching.',
    placeholder: true,
  },
  {
    title: 'Professional bodies',
    description: 'Active contribution to orthopaedic societies and editorial work in the international literature.',
    placeholder: true,
  },
  {
    title: 'Public education',
    description: 'Writes and speaks on foot & ankle health, regenerative orthopaedics and surgical innovation.',
    placeholder: true,
  },
];

/** Vision statement — placeholder. Replace with the surgeon's own stated vision. */
export const VISION_STATEMENT =
  'A practical role for clinicians in shaping Australian medical-device innovation — bringing surgical experience close to product development, supporting local research, and helping new ideas reach patients responsibly.';

/**
 * Verified social / public profiles. Each `url` is currently a placeholder ('#');
 * replace with the actual verified URL before launch (see README checklist).
 */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', url: '#', icon: 'Linkedin', placeholder: true },
  { label: 'X', url: '#', icon: 'Twitter', placeholder: true },
  { label: 'Research profile', url: '#', icon: 'GraduationCap', placeholder: true },
  { label: 'YouTube', url: '#', icon: 'Youtube', placeholder: true },
  { label: 'Instagram', url: '#', icon: 'Instagram', placeholder: true },
];

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

export const FOOTER_DISCLAIMER =
  'This is the personal website of Prof Gordon Slater. Information provided here is general in nature, is not medical advice, and does not create a clinician–patient relationship. For clinical care or to arrange an appointment, please see the practice site.';
