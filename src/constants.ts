import type { Article, Condition, PhilosophyItem, Procedure } from './types';

export const DOCTOR_NAME = 'Prof Gordon Slater';
export const DOCTOR_CREDENTIALS = 'MBBS, FRACS (Orth), FAOrthA';
export const DOCTOR_TITLE = 'Specialist Foot & Ankle Orthopaedic Surgeon';

export const CONTACT_INFO = {
  email: 'admin@drgordonslater.com.au',
  phone: '1300 338 778',
  phoneSydney: '(02) 9020 7388',
  hours: 'Monday to Friday, 9am – 5pm',
};

export interface ConsultingLocation {
  name: string;
  address: string;
  note: string;
}

export const LOCATIONS: ConsultingLocation[] = [
  {
    name: 'Sydney',
    address: '5 Ward Avenue, Potts Point, NSW 2011',
    note: 'Monday to Friday, 9am – 5pm',
  },
  {
    name: 'Albury',
    address: 'Mate St Medical Centre, 1089B Mate St, North Albury, NSW 2640',
    note: 'Prof Slater consults in Albury approximately once a month — call to confirm dates',
  },
];

export const HOSPITALS: string[] = [
  'East Sydney Private Hospital, Double Bay',
  'Albury Wodonga Private Hospital, Albury',
  'Albury Day Surgery, Albury',
];

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

export const FOOTER_DISCLAIMER =
  'General medical information provided on this website is intended as a guide only and does not replace professional clinical consultation. Results and recovery depend on individual patient factors, and any surgical procedure carries inherent risks. This information is not intended to suggest that a successful outcome is guaranteed for any patient. Prof Gordon Slater is a specialist orthopaedic surgeon — please consult your general practitioner for a referral for a specialist clinical assessment.';

export const CONDITIONS: Condition[] = [
  { id: 'bunions', title: 'Bunions', description: 'Assessment of forefoot deformity and modern correction options, including minimally invasive techniques where appropriate.', icon: 'Focus' },
  { id: 'ankle-pain', title: 'Ankle pain & instability', description: 'Care for chronic instability, recurrent sprains, impingement, and structural concerns of the ankle.', icon: 'Activity' },
  { id: 'arthritis', title: 'Arthritis & joint preservation', description: 'Management of degenerative joint disease, with an emphasis on joint-preserving options where suitable.', icon: 'Shield' },
  { id: 'sports-injuries', title: 'Sports injuries', description: 'Assessment and tailored recovery pathways for acute and overuse foot and ankle injuries.', icon: 'Zap' },
  { id: 'heel-pain', title: 'Heel pain', description: 'Diagnosis and multi-modal treatment for plantar fascia, Achilles and related heel conditions.', icon: 'Footprints' },
  { id: 'diabetic-foot', title: 'Diabetic & Charcot foot', description: 'Preventative care, limb-preservation strategies and surgical management for complex diabetic foot presentations.', icon: 'HeartPulse' },
  { id: 'toe-conditions', title: 'Toe conditions', description: 'Correction of hammer toes, mallet toes, ingrown toenails and other digit concerns.', icon: 'ChevronRightSquare' },
  { id: 'fallen-arches', title: 'Fallen arches', description: 'Assessment of flatfoot deformity and structural realignment strategies, surgical and non-surgical.', icon: 'Layout' },
];

export const PHILOSOPHY: PhilosophyItem[] = [
  { title: 'Careful assessment', description: 'A thorough clinical examination supported by precise imaging analysis.', icon: 'Search' },
  { title: 'Clear explanation', description: 'Ensuring patients understand their condition and the pathways available to them.', icon: 'MessageSquare' },
  { title: 'Individual treatment planning', description: 'Every plan is tailored to the patient’s goals and clinical needs.', icon: 'User' },
  { title: 'Recovery guidance', description: 'Structured support through the rehabilitation process.', icon: 'Repeat' },
];

export const PROCEDURES: Procedure[] = [
  {
    id: 'minimally-invasive',
    title: 'Minimally invasive foot & ankle surgery',
    description:
      'Where appropriate, techniques using smaller incisions that may support reduced soft-tissue disruption, smaller scars and a planned recovery pathway.',
    features: ['Smaller incisions', 'Joint-preserving approach'],
  },
  {
    id: 'bunion-surgery',
    title: 'Bunion surgery',
    description: 'Modern correction aimed at restoring anatomical alignment of the first ray, with minimally invasive options where suitable.',
  },
  {
    id: 'ankle-procedures',
    title: 'Ankle procedures',
    description: 'Treating ligament instability, impingement and articular cartilage concerns — including joint-preserving distraction techniques.',
  },
  {
    id: 'sports-injury-surgery',
    title: 'Sports-injury surgery',
    description: 'Surgical and non-surgical management of foot and ankle sports injuries, with structured return-to-activity planning.',
    features: ['Tailored rehab', 'Return-to-sport planning'],
  },
  {
    id: 'fracture-trauma',
    title: 'Fracture & trauma surgery',
    description: 'Management of acute injuries and complex deformity, including ankle fractures and limb-preservation surgery.',
  },
  {
    id: 'ingrown-toenail',
    title: 'Ingrown toenail treatment',
    description: 'Day-procedure correction of recurrent or painful ingrown toenails.',
  },
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
