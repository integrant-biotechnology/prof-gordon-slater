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
    identifier: 'US 2011/0184413 A1',
    year: '2011',
    body: 'An eponymous hardware contribution to ankle-fusion surgery, published as a US patent application (filed May 2007) and as a named device in the surgical literature. Engineering Awards finalist as the Anterior Fusion Plate; in clinical use beyond the original case series.',
  },
  {
    id: 'hard-wire-locking-system',
    kind: 'patent',
    title: 'Hard Wire Locking System orthopaedic frame',
    identifier: 'AU 2021245111',
    year: '2021',
    body: 'A wire-locking system for external orthopaedic frames. Australian patent application filed and approved October 2021 (with R. McPherson).',
  },
  {
    id: 'surgical-fusion-aid',
    kind: 'patent',
    title: 'Surgical fusion aid',
    identifier: 'AU 2022201247',
    year: '2022',
    body: 'A surgical aid supporting joint-fusion procedures. Australian patent application filed February 2022.',
  },
  {
    id: 'biologic-ceramic-composite',
    kind: 'patent',
    title: 'Biologic ceramic composite for joint repair',
    identifier: 'AU 2022202290',
    year: '2022',
    body: 'A biologic–ceramic composite material for joint repair, bridging the device and orthobiologics workstreams. Australian patent application filed April 2022 (with R. McPherson).',
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
