import { Condition, Procedure, PhilosophyItem, Article } from './types';

export const DOCTOR_NAME = "Dr Gordon Slater";
export const DOCTOR_CREDENTIALS = "MBBS, FRACS Orth, FAOrthA";
export const DOCTOR_TITLE = "Specialist Foot & Ankle Orthopaedic Surgeon";

export const CONTACT_INFO = {
  address: "5 Ward Avenue, Potts Point, NSW 2011",
  phone: "(02) 7232 1150",
  altPhone: "1300 338 778",
  email: "admin@drgordonslater.com.au",
  hours: "9am to 5pm",
};

export const FOOTER_DISCLAIMER = "General medical information provided on this website is intended as a guide only and does not replace professional clinical consultation. Results and recovery are dependent on individual patient factors and any surgical procedure carries inherent risks. This information is not intended to suggest that a successful outcome is guaranteed for any patient. Dr Gordon Slater is a specialist orthopaedic surgeon – please consult your general practitioner for a referral for a specialist clinical assessment.";

export const CONDITIONS: Condition[] = [
  { id: 'bunions', title: 'Bunions', description: 'Comprehensive assessment of forefoot deformities and modern correction options.', icon: 'Focus' },
  { id: 'ankle-pain', title: 'Ankle pain & instability', description: 'Specialist care for chronic instability, recurrent sprains, and structural concerns.', icon: 'Activity' },
  { id: 'arthritis', title: 'Arthritis', description: 'Management of degenerative conditions affecting the foot and ankle joints.', icon: 'Shield' },
  { id: 'sports-injuries', title: 'Sports injuries', description: 'Tailored recovery pathways for acute and overuse athletic injuries.', icon: 'Zap' },
  { id: 'heel-pain', title: 'Heel pain', description: 'Diagnosis and multi-modal treatment for plantar fascia and Achilles concerns.', icon: 'Footprints' },
  { id: 'diabetic-foot', title: 'Diabetic & Charcot foot', description: 'Preventative care and surgical management for complex diabetic foot presentations.', icon: 'HeartPulse' },
  { id: 'toe-conditions', title: 'Toe conditions', description: 'Correction of hammer toes, mallet toes, and assorted digit concerns.', icon: 'ChevronRightSquare' },
  { id: 'fallen-arches', title: 'Fallen arches', description: 'Assessment of flatfoot deformity and structural realignment strategies.', icon: 'Layout' },
];

export const PHILOSOPHY: PhilosophyItem[] = [
  { title: 'Careful assessment', description: 'A thorough clinical examination supported by precise imaging analysis.', icon: 'Search' },
  { title: 'Clear explanation', description: 'Ensuring patients understand their condition and all potential pathways forward.', icon: 'MessageSquare' },
  { title: 'Individual treatment planning', description: 'Every plan is tailored to the patient’s unique goals and clinical needs.', icon: 'User' },
  { title: 'Recovery guidance', description: 'Structured support through the rehabilitation process for optimal outcomes.', icon: 'Repeat' },
];

export const PROCEDURES: Procedure[] = [
  { 
    id: 'minimally-invasive', 
    title: 'Minimally invasive foot surgery', 
    description: 'Where appropriate, techniques using smaller incisions designed to reduce soft tissue disruption.',
    features: ['Smaller incisions', 'Planned recovery']
  },
  { 
    id: 'bunion-correction', 
    title: 'Bunion correction', 
    description: 'Modern surgical techniques aimed at restoring anatomical alignment of the first ray.',
  },
  { 
    id: 'ankle-procedures', 
    title: 'Ankle procedures', 
    description: 'Treating ligament instability, impingement, and articular cartilage concerns.',
  },
  { 
    id: 'limb-reconstruction', 
    title: 'Limb reconstruction', 
    description: 'Complex deformity correction and structural realignment of the lower limb.',
  },
];

export const ARTICLES: Article[] = [
  { id: '1', title: 'Understanding bunion treatment options', category: 'Treatment', readTime: '5 min read' },
  { id: '2', title: 'When ankle pain needs specialist assessment', category: 'Diagnosis', readTime: '4 min read' },
  { id: '3', title: 'Minimally invasive foot surgery: what patients should know', category: 'Surgery', readTime: '6 min read' },
  { id: '4', title: 'Diabetic foot complications and early care', category: 'Prevention', readTime: '7 min read' },
  { id: '5', title: 'Sports injuries of the foot and ankle', category: 'Recovery', readTime: '5 min read' },
];
