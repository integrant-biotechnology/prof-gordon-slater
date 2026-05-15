import type { Innovation } from '../../types';

// -------------------------------------------------------------
// Innovations — patents, named devices, named techniques.
//
// Seeded from voice-source-v0_1.md §5. Three entries; promotes
// to a standalone /research/innovations page when ≥5 land
// (deferred per plan).
// -------------------------------------------------------------

export const INNOVATIONS: Innovation[] = [
  {
    id: 'jp2023106525a-peptide-patent',
    kind: 'patent',
    title: 'Peptide patent — cartilage regeneration cascade',
    identifier: 'JP2023106525A',
    year: '2023',
    body: 'A peptide composition supporting the cartilage-regeneration cascade. The Slater MoA framework (24 April 2026) anchors the mechanism end of the work; the Japanese filing covers the composition.',
  },
  {
    id: 'gordon-slater-ankle-fusion-plate',
    kind: 'device',
    title: 'Gordon Slater ankle-fusion plate',
    year: '2011',
    body: 'An eponymous hardware contribution to ankle-fusion surgery. Published as a named device in the surgical literature; in clinical use beyond the original case series.',
  },
  {
    id: 'slater-modification-mis-forefoot',
    kind: 'technique',
    title: 'Slater modification of minimally invasive forefoot surgery',
    year: '2018–2019',
    body: 'A planning and execution modification to minimally invasive forefoot surgery, published in 2018 and refined in the 2019 surgical-technique paper. Among the first MIS forefoot adaptations adopted broadly in Australia.',
  },
  {
    id: 'integrant-frame',
    kind: 'device',
    title: 'Integrant frame',
    year: '2024',
    body: 'External fixation frame used in distraction-arthroplasty + biologics protocols. Clinical-utility paper published 2024.',
  },
];
