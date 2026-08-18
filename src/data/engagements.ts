// -------------------------------------------------------------
// Speaking engagements & media mentions — render-gated.
//
// SPEAKING is transcribed from the authoritative CV
// (docs/Gordon-Slater-CV.docx, "Presented"), newest first.
// MEDIA mirrors the book site's press collection
// (chaostocreation.com.au/media/) — verifiable coverage only, with a
// live URL, newest first. Sections consuming an empty array render
// nothing.
// -------------------------------------------------------------

export interface Engagement {
  title: string;
  venue: string;
  year: string;
  href?: string;
}

export interface MediaMention {
  title: string;
  outlet: string;
  year: string;
  href?: string;
}

export const SPEAKING: Engagement[] = [
  {
    title: 'Lecture — "Application of Regenerative Biologics in Orthopaedics"',
    venue: 'Australian Orthopaedic Foot & Ankle Society, Perth',
    year: '2024',
  },
  {
    title: 'Chairman & lecture — "Biohacking Regenerative Medicine, Orthopaedics"',
    venue: 'World Congress of Orthopaedics, Portugal',
    year: '2023',
  },
  {
    title: 'Chairman & lecture — minimally invasive image-guided foot and ankle surgery',
    venue: 'WCORT, Milan',
    year: '2018',
  },
  {
    title: 'Lecture — complex hindfoot surgery',
    venue: 'WCORT, Milan',
    year: '2018',
  },
  {
    title: 'Chairman — Global Experts Meeting on Plastics and Aesthetic Surgery',
    venue: 'Singapore',
    year: '2018',
  },
  {
    title: 'Chairman — World Congress of Molecular and Cell Biology',
    venue: 'International congress',
    year: '2018',
  },
  {
    title: 'Chair, Foot and Ankle',
    venue: 'Asia Pacific Orthopaedic Association, Melbourne',
    year: '2018',
  },
  {
    title: 'Invited speaker',
    venue: 'Global Foot and Ankle Congress, China',
    year: '2018',
  },
  {
    title: 'Presenter',
    venue: 'Australian Foot and Ankle Association meeting, Cairns',
    year: '2018',
  },
  {
    title: 'Presenter',
    venue: 'Australian Foot and Ankle Association meeting, Cairns',
    year: '2017',
  },
  {
    title: 'Invited lecturer — Advanced Forefoot Reconstruction (Dr Samuel Barouk)',
    venue: 'Polyclinique Bordeaux, France',
    year: '1998',
  },
  {
    title: 'Presenter',
    venue: 'Sydney AOA Trainees and Travelling Fellows Meeting',
    year: '1993',
  },
  {
    title: 'Presenter',
    venue: 'NSW Registrars Paper Day',
    year: '1993',
  },
  {
    title: 'Presenter — Techniques in Trauma',
    venue: 'St George Skills Laboratory Meeting',
    year: '1993',
  },
  {
    title: 'Presenter',
    venue: 'Australian Orthopaedic Registrars Meeting',
    year: '1993',
  },
  {
    title: 'Presenter',
    venue: 'Australasian Surgical Research Society',
    year: '1993',
  },
  {
    title: 'Presenter',
    venue: 'Australasian Society of Nuclear Medicine',
    year: '1993',
  },
  {
    title: 'Presenter',
    venue: 'NSW AOA State Branch meeting',
    year: '1993',
  },
];

export const MEDIA: MediaMention[] = [
  {
    title:
      'Chaos to Creation reaches bestseller status, exploring the future of AI, biotechnology, and regenerative innovation',
    outlet: 'National Law Review',
    year: '2026',
    href: 'https://natlawreview.com/press-releases/chaos-creation-reaches-bestseller-status-exploring-future-ai-biotechnology',
  },
];
