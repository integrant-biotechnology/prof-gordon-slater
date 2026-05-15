import type { Publication } from '../../types';

// -------------------------------------------------------------
// Publications.
//
//   SELECTED_PUBLICATIONS — 11 headline anchors, used by the
//                           /research hub strip and historical
//                           home consumers.
//   FULL_PUBLICATIONS     — 24 entries (the voice-source §4
//                           table) for /research/publications.
//                           Each tagged with a theme slug for
//                           the filter chips.
//
// The remaining ~36 papers from 05_research_kb/papers/ are
// populated in a later content PR — the page reads well at 24.
// -------------------------------------------------------------

export const SELECTED_PUBLICATIONS: Publication[] = [
  { title: 'Endoscopic plantar fascia release', year: '2003' },
  { title: 'Gordon Slater ankle-fusion plate', year: '2011' },
  { title: 'Minimally invasive forefoot surgery — the Slater modification', year: '2018–19' },
  { title: 'Foetal healing cascade — can we duplicate it in adults?', year: '2019' },
  {
    title: 'The Future of Medicine: Biologics and Artificial Intelligence (Slater, Sambo & Hannan)',
    venue: 'J Regen Biol Med, 1(2), 1–11',
    year: '2019',
  },
  {
    title: 'A Review of Stem Cells: Why Do We Age? (Slater, G. & Slater, T.)',
    venue: 'J Regen Biol Med, 4: 1–11',
    year: '2022',
  },
  { title: 'Hyperbaric oxygen therapy — overview', year: '2022' },
  { title: 'HBOT as an accelerator of regenerative medicine', year: '2023' },
  { title: 'Hyperbaric oxygen therapy in anti-aging practice', year: '2023' },
  {
    title:
      'Application of HBOT with Minimally Invasive Guided Surgery to Heal Chronic Brooker-4 Diabetic Ulcer (Slater & Bachmid)',
    year: '2024',
  },
  { title: 'Age-related decline of mesenchymal stem cells', year: '2026' },
];

/**
 * FULL_PUBLICATIONS — 24-paper seed for /research/publications.
 *
 * Source: voice-source-v0_1.md §4 (compiled May 2026). Each entry
 * has a theme tag matching a `ThemeSlug` for the filter chips.
 * Listed chronologically; the page reverses for newest-first.
 */
export const FULL_PUBLICATIONS: Publication[] = [
  { year: '2003', title: 'Endoscopic plantar fascia release', theme: 'foot-ankle-surgery' },
  { year: '2011', title: 'Gordon Slater ankle-fusion plate', theme: 'foot-ankle-surgery' },
  { year: '2018', title: 'Minimally invasive forefoot surgery — Slater planning', theme: 'foot-ankle-surgery' },
  { year: '2019', title: 'Surgical technique — Slater modification of minimally invasive forefoot surgery', theme: 'foot-ankle-surgery' },
  { year: '2019', title: 'Foetal healing cascade — can we duplicate it in adults?', theme: 'stem-cells-regenerative' },
  {
    year: '2019',
    title: 'The Future of Medicine — Biologics and Artificial Intelligence',
    venue: 'Slater, Sambo & Hannan · J Regen Biol Med, 1(2), 1–11',
    theme: 'ai-in-medicine',
  },
  { year: '2019', title: 'Growth factors and articular cartilage rejuvenation — where are we up to with reversing degeneration?', theme: 'orthobiologics' },
  { year: '2021', title: 'Achilles tendon — synthesis paper', theme: 'foot-ankle-surgery' },
  { year: '2021', title: 'Ankle fusion / distraction replacement', theme: 'foot-ankle-surgery' },
  { year: '2021', title: 'Biologics that increase chondrocyte number and matrix', theme: 'orthobiologics' },
  { year: '2021', title: 'Regenerative medicine requires a paradigm-shift outcome', theme: 'stem-cells-regenerative' },
  {
    year: '2022',
    title: 'A Review of Stem Cells — Why Do We Age?',
    venue: 'Slater, G. & Slater, T. · J Regen Biol Med, 4: 1–11',
    theme: 'aging-biology',
  },
  { year: '2022', title: 'Hyperbaric oxygen therapy — overview', theme: 'hyperbaric-oxygen' },
  { year: '2023', title: 'HBOT as an accelerator of regenerative medicine', theme: 'hyperbaric-oxygen' },
  { year: '2023', title: 'HBOT in anti-aging practice', theme: 'hyperbaric-oxygen' },
  { year: '2023', title: 'Kohler disease — treatment with regenerative distraction arthroplasty', theme: 'foot-ankle-surgery' },
  {
    year: '2024',
    title: 'Application of HBOT with Minimally Invasive Guided Surgery to Heal Chronic Brooker-4 Diabetic Ulcer',
    venue: 'Slater & Bachmid',
    theme: 'hyperbaric-oxygen',
  },
  { year: '2024', title: 'Catastrophic talar bone loss — high-velocity injury case', theme: 'foot-ankle-surgery' },
  { year: '2024', title: 'Clinical utility of the Integrant frame', theme: 'foot-ankle-surgery' },
  { year: '2024', title: 'Paradigm shift in regenerative medicine', theme: 'stem-cells-regenerative' },
  {
    year: '2025',
    title: 'Multi-author research paper',
    venue: 'Slater, G., Wu, C., Jiao, J.',
    theme: 'orthobiologics',
  },
  { year: '2025', title: 'Technique and rehabilitation protocol for distraction arthroplasty', theme: 'foot-ankle-surgery' },
  { year: '2025', title: 'HBOT and concussion', theme: 'hyperbaric-oxygen' },
  { year: '2026', title: 'Age-related decline of mesenchymal stem cells', theme: 'aging-biology' },
];

/** Placeholder until a curated Google Scholar / ORCID / PubMed profile URL is supplied. */
export const PUBLICATIONS_INDEX_URL = '#';
