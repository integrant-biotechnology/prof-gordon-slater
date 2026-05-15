import type { ResearchTheme } from '../../types';

// -------------------------------------------------------------
// Research themes — the six pillars of the body of work, drawn
// from KB §4 theme taxonomy. Each theme has a slug, a display
// title, a 2-sentence definition, and a Lucide icon for the
// /research hub. Tagged onto FULL_PUBLICATIONS for filter chips.
// -------------------------------------------------------------

export const RESEARCH_THEMES: ResearchTheme[] = [
  {
    slug: 'foot-ankle-surgery',
    title: 'Foot & ankle surgery',
    summary:
      'The clinical specialty. Twenty-plus years of technique work — Achilles, ankle fusion, plantar fascia, Brostrum, calcaneal osteotomy, Jones fracture — including eponymous contributions to the surgical literature.',
    icon: 'Stethoscope',
  },
  {
    slug: 'orthobiologics',
    title: 'Orthobiologics',
    summary:
      'Platelet-rich plasma, mesenchymal stem cells, peptides, exosomes, and growth factors applied to musculoskeletal repair. Sits at the intersection of bench biology and the operating theatre.',
    icon: 'FlaskConical',
  },
  {
    slug: 'stem-cells-regenerative',
    title: 'Stem cells & regenerative medicine',
    summary:
      'Autologous mesenchymal stem cells, distraction arthroplasty paired with biologics, and cartilage regeneration in case-series form. The clinical end of the longevity thesis.',
    icon: 'Sparkles',
  },
  {
    slug: 'hyperbaric-oxygen',
    title: 'Hyperbaric oxygen therapy (HBOT)',
    summary:
      'HBOT as an adjunct across regenerative medicine, anti-aging practice, chronic-wound care, and post-concussion recovery. Several Slater-authored synthesis and case-study papers anchor the literature.',
    icon: 'Wind',
  },
  {
    slug: 'aging-biology',
    title: 'Aging biology',
    summary:
      'Hallmarks of aging, epigenetic clocks, telomere maintenance, and the decline of mesenchymal stem-cell function with age. The systems-biology layer of the longevity work.',
    icon: 'Activity',
  },
  {
    slug: 'ai-in-medicine',
    title: 'AI in medicine',
    summary:
      'Anchored on the 2019 Slater–Sambo–Hannan paper. The convergence of AI with regenerative medicine — molecular characterisation, trial design, and post-market surveillance at scale.',
    icon: 'Cpu',
  },
];
