import type { Publication } from '../../types';

// -------------------------------------------------------------
// Selected publications — drawn from the KB Section 4 headline
// anchors. Real papers, real years; venues only where the KB
// attests them.
//
// PR-4 seeds FULL_PUBLICATIONS (target: 24 papers from voice-source
// §4); for now we ship the existing SELECTED list.
// -------------------------------------------------------------

export const SELECTED_PUBLICATIONS: Publication[] = [
  {
    title: 'Endoscopic plantar fascia release',
    year: '2003',
  },
  {
    title: 'Gordon Slater ankle-fusion plate',
    year: '2011',
  },
  {
    title: 'Minimally invasive forefoot surgery — the Slater modification',
    year: '2018–19',
  },
  {
    title: 'Foetal healing cascade — can we duplicate it in adults?',
    year: '2019',
  },
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
  {
    title: 'Hyperbaric oxygen therapy — overview',
    year: '2022',
  },
  {
    title: 'HBOT as an accelerator of regenerative medicine',
    year: '2023',
  },
  {
    title: 'Hyperbaric oxygen therapy in anti-aging practice',
    year: '2023',
  },
  {
    title: 'Application of HBOT with Minimally Invasive Guided Surgery to Heal Chronic Brooker-4 Diabetic Ulcer (Slater & Bachmid)',
    year: '2024',
  },
  {
    title: 'Age-related decline of mesenchymal stem cells',
    year: '2026',
  },
];

/** Placeholder until a curated Google Scholar / ORCID / PubMed profile URL is supplied. */
export const PUBLICATIONS_INDEX_URL = '#';
