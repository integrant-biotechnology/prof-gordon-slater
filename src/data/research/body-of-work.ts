import type { WorkItem } from '../../types';

// -------------------------------------------------------------
// Body of work — feeds the home BodyOfWork section today;
// in PR-4 it feeds the /research themes hub.
// -------------------------------------------------------------

export const BODY_OF_WORK: WorkItem[] = [
  {
    id: 'research',
    title: 'Research & publications',
    description:
      'Sixty peer-reviewed papers (2003–2026) across foot & ankle surgery, orthobiologics, HBOT, stem cells and regenerative medicine, aging biology, and AI in medicine.',
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
