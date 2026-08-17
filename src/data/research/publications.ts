import type { Publication } from '../../types';

// -------------------------------------------------------------
// Publications — transcribed from the authoritative CV
// (docs/Gordon-Slater-CV.docx, "Papers and Clinical Letters").
//
// 55 unique peer-reviewed papers, 1993–2026. The CV's duplicate
// items (its #42 repeats #41; its #32 reprints #24) are collapsed
// here — the build-time data-integrity check enforces title
// uniqueness so duplicates can never silently return.
//
// `href` is the DOI resolver URL exactly as printed in the CV.
// Entries whose printed DOI is malformed or visibly wrong
// (e.g. duplicated from a neighbouring item) carry no href
// rather than a broken or misleading link.
//
// Early general-orthopaedics papers (1993–1996) predate the six
// research themes and deliberately carry no theme tag — they
// appear in the "All" publications view only.
// -------------------------------------------------------------

export const FULL_PUBLICATIONS: Publication[] = [
  {
    title: 'Treatment of Septic Arthritis of the Hip by Arthroscopic Lavage',
    venue: 'Journal of Paediatric Orthopaedics, July 1993',
    year: '1993',
    href: 'https://doi.org/10.1097/01241398-199307000-00005',
  },
  {
    title: 'Management of Chondrosarcoma, including Modular Ceramic Alumina Prosthetic Replacement',
    venue: 'Australian and New Zealand Journal of Surgery, August 1993',
    year: '1993',
    href: 'https://doi.org/10.1111/j.1445-2197.1993.tb00464.x',
  },
  {
    title: 'Management of Chondrosarcoma: Review Article',
    venue: 'Australian and New Zealand Journal of Surgery, August 1993',
    year: '1993',
    href: 'https://doi.org/10.1111/j.1445-2197.1993.tb00463.x',
  },
  {
    title:
      'The Measurement of Periprosthetic Bone Density in Total Hip Arthroplasty using Dual Energy X-Ray Absorptiometry',
    venue: 'The Journal of Arthroplasty, June 1996',
    year: '1996',
    href: 'https://doi.org/10.1016/S0883-5403(96)80035-0',
  },
  {
    title: 'Endoscopic Plantar Fascia Release: A Case Series',
    venue: 'Foot & Ankle International, March 2003',
    year: '2003',
    href: 'https://doi.org/10.1177/107110070302400213',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Chronic Pain after an Ankle Fracture: An Arthroscopic Assessment Case Series',
    venue: 'Foot & Ankle International, January 2006',
    year: '2006',
    href: 'https://doi.org/10.1177/107110070502601202',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Delayed Reconstruction of Lateral Complex Structures of the Ankle',
    venue: 'World Journal of Orthopaedics, April 2011',
    year: '2011',
    href: 'https://doi.org/10.5312/wjo.v2.i4.31',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Anterior Ankle Arthrodesis',
    venue: 'World Journal of Orthopaedics, January 2014',
    year: '2014',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Reconstruction of Lateral Ankle Ligaments Update',
    venue: 'Journal of Osteoarthritis, February 2016',
    year: '2016',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Jones Fracture Fixation: Minimally Invasive Management of 67 Cases',
    venue: 'EC Orthopaedics, August 2016',
    year: '2016',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Subtalar Distraction Arthrodesis: An Innovative New Technique',
    venue: 'EC Orthopaedics, April 2017',
    year: '2017',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Ankle Arthrodesis using a Customised Anterior Plate',
    venue: 'The Bone & Joint Journal, February 2018',
    year: '2018',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Minimally Invasive Forefoot Surgery — Slater Planning Classification System',
    venue: 'EC Orthopaedics, July 2018',
    year: '2018',
    theme: 'foot-ankle-surgery',
  },
  {
    title:
      'Minimally Invasive Opening Wedge Calcaneal Osteotomy Using a Titanium Structural Fusion Device',
    venue: 'EC Orthopaedics, August 2018',
    year: '2018',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'A Rapid Brostrom Rehabilitation Protocol Using Improved Fiberwire Technique',
    venue: 'EC Orthopaedics, November 2018',
    year: '2018',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Pantalar Arthrodesis Using the Fuse It Arthrodesis Plug in Charcot',
    venue: 'EC Orthopaedics, January 2019',
    year: '2019',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Surgical Technique Update: Slater Modification of Minimally Invasive Brostrom Reconstruction',
    venue: 'EC Orthopaedics, April 2019',
    year: '2019',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Bone Grafting with Coralline Hydroxyapatite',
    venue: 'EC Dental Science, September 2019',
    year: '2019',
    theme: 'orthobiologics',
  },
  {
    title: 'Foetal Healing Cascade — Can We Duplicate It In Adults?',
    venue: 'Journal of Regenerative Biology and Medicine, October 2019',
    year: '2019',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-1(2)-007',
    theme: 'stem-cells-regenerative',
  },
  {
    title: 'The Future of Medicine — Biologics and Artificial Intelligence',
    venue: 'Journal of Regenerative Biology and Medicine, October 2019',
    year: '2019',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-1(2)-008',
    theme: 'ai-in-medicine',
  },
  {
    title:
      'Growth Factors and Articular Cartilage Rejuvenation: Where Are We Up To With Reversing OA?',
    venue: 'Journal of Regenerative Biology and Medicine, December 2019',
    year: '2019',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-2(1)-013',
    theme: 'orthobiologics',
  },
  {
    title: 'A Review of Distraction Arthroplasty vs Ankle Arthrodesis vs Ankle Replacement',
    venue: 'Journal of Regenerative Biology and Medicine, January 2021',
    year: '2021',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-4(1)-101',
    theme: 'foot-ankle-surgery',
  },
  {
    title:
      'A Technique Update for a Minimally Invasive Operative Approach to Achilles Tendon Repair',
    venue: 'Journal of Regenerative Biology and Medicine, January 2021',
    year: '2021',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-3(6)-100',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Coralline Hydroxyapatite Bone Graft in Non-Contained Defects: Case Report',
    venue: 'Journal of Dental Health and Oral Research, October 2021',
    year: '2021',
    href: 'https://doi.org/10.46889/JDHOR.2021.2302',
    theme: 'orthobiologics',
  },
  {
    title: 'Regenerative Medicine Requires a Paradigm Shift in Outcome Measures',
    venue: 'Journal of Stem Cell Research, March 2021',
    year: '2021',
    href: 'https://doi.org/10.52793/JSCR.2021.2(1)-18',
    theme: 'stem-cells-regenerative',
  },
  {
    title: 'Protein Receptors on Chondrocytes',
    venue: 'Journal of Stem Cell Research, April 2021',
    year: '2021',
    href: 'https://doi.org/10.52793/JSCR.2021.2(2)-19',
    theme: 'orthobiologics',
  },
  {
    title: 'Biologics that Increase Chondrocyte Number and/or Matrix',
    venue: 'Journal of Stem Cell Research, April 2021',
    year: '2021',
    href: 'https://doi.org/10.52793/JSCR.2021.2(2)-20',
    theme: 'orthobiologics',
  },
  {
    title: 'HGH and Cartilage',
    venue: 'Journal of Regenerative Biology and Medicine, May 2021',
    year: '2021',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-3(4)-077',
    theme: 'orthobiologics',
  },
  {
    title: 'Current Thinking in Pin-Site Management in External Hexagonal Frames',
    venue: 'Journal of Orthopaedics Study and Sports, September 2021',
    year: '2021',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Case Series: Use of Coralline Hydroxyapatite Graft in Faciomaxillary Surgery',
    venue: 'Journal of Regenerative Biology and Medicine, September 2021',
    year: '2021',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-3(5)-088',
    theme: 'orthobiologics',
  },
  {
    title: 'Current Concepts Review: Orthotics in Post-operative Foot and Ankle Surgery',
    venue: 'Journal of Regenerative Biology and Medicine, March 2022',
    year: '2022',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-4(1)-104',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Articular Cartilage — A Literature Review',
    venue: 'Journal of Regenerative Biology and Medicine, April 2022',
    year: '2022',
    theme: 'orthobiologics',
  },
  {
    title:
      'Idiopathic Symptomatic Planovalgus Foot — Current Concepts in Minimally Invasive Correction',
    venue: 'Journal of Regenerative Biology and Medicine, April 2022',
    year: '2022',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-4(2)-109',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Hyperbaric Oxygen Therapy: An Overview',
    venue: 'Journal of Regenerative Biology and Medicine, June 2022',
    year: '2022',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-4(3)-111',
    theme: 'hyperbaric-oxygen',
  },
  {
    title: 'A Review of Stem Cells: Why Do We Age?',
    venue: 'Journal of Regenerative Biology and Medicine, August 2022',
    year: '2022',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-4(4)-116',
    theme: 'aging-biology',
  },
  {
    title: 'Acromegaly: The Impacts of HGH Release on Patient Progression',
    venue: 'Journal of Regenerative Biology and Medicine, January 2023',
    year: '2023',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-5(1)-123',
    theme: 'aging-biology',
  },
  {
    title: "Kohler's Disease Case Report: Treatment with Regenerative Distraction Arthroplasty Technology",
    venue: 'Journal of Clinical Medical Research, May 2023',
    year: '2023',
    theme: 'stem-cells-regenerative',
  },
  {
    title: 'Hyperbaric Oxygen Therapy and Anti-Aging Practice and Protocols',
    venue: 'Journal of Regenerative Biology and Medicine, September 2023',
    year: '2023',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-5(4)-138',
    theme: 'hyperbaric-oxygen',
  },
  {
    title: 'Hyperbaric Oxygen Therapy as an Accelerator in Regenerative Medicine',
    venue: 'Journal of Regenerative Biology and Medicine, October 2023',
    year: '2023',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-5(4)-139',
    theme: 'hyperbaric-oxygen',
  },
  {
    title:
      'Application of Hyperbaric Oxygen Therapy in Chronic Distal Tibial Osteomyelitis in Severe Extremity Trauma',
    venue: 'Journal of Regenerative Biology and Medicine, December 2023',
    year: '2023',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-5(5)-141',
    theme: 'hyperbaric-oxygen',
  },
  {
    title:
      'Ankle Arthroscopy Medial Malleolar Osteotomy followed by Distraction Arthroplasty in Treating PVNS: A 5-Year Follow Up',
    venue: 'Journal of Regenerative Biology and Medicine, October 2023',
    year: '2023',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Application of HBOT and Wolf Grafting in Chronic Diabetic Foot Ulcer',
    venue: 'Journal of Regenerative Biology and Medicine, January 2024',
    year: '2024',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-5(6)-142',
    theme: 'hyperbaric-oxygen',
  },
  {
    title:
      'Application of HBOT with Minimally Invasive Guided Surgery to Heal Chronic Brooker 4 Diabetic Ulcer',
    venue: 'Journal of Clinical and Medical Research, February 2024',
    year: '2024',
    href: 'https://doi.org/10.46889/JCMR.2024.5104',
    theme: 'hyperbaric-oxygen',
  },
  {
    title: 'Peptide Therapy Update',
    venue: 'Journal of Regenerative Biology and Medicine, February 2024',
    year: '2024',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-5(6)-143',
    theme: 'orthobiologics',
  },
  {
    title: 'Application of HBOT in Treating Psoriasis',
    venue: 'Journal of Regenerative Biology and Medicine, January 2024',
    year: '2024',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-5(6)-144',
    theme: 'hyperbaric-oxygen',
  },
  {
    title:
      'Catastrophic Talar Bone Loss from High Velocity Trauma Treated with Structural Tricorticate Fibula Autograft, Compression Frame and Midfoot Distraction Arthroplasty',
    venue: 'Journal of Clinical Medical Research, April 2024',
    year: '2024',
    href: 'https://doi.org/10.46889/JCMR.2024.5110',
    theme: 'foot-ankle-surgery',
  },
  {
    title: "Clinical Utility of Integrant's FrameIt",
    venue: 'Journal of Clinical Medical Research, May 2024',
    year: '2024',
    theme: 'foot-ankle-surgery',
  },
  {
    title:
      'Image Guided Minimally Invasive Internal Fixation Pilon Fracture with Distraction Arthroplasty',
    venue: 'Journal of Clinical Medical Research, July 2024',
    year: '2024',
    theme: 'foot-ankle-surgery',
  },
  {
    title:
      'Current Review: Hyperbaric Oxygen Analysis with Appropriate Cognitive Assessment',
    venue: 'Journal of Clinical Medical Research, December 2024',
    year: '2024',
    href: 'https://doi.org/10.46889/JCMR.2024.5315',
    theme: 'hyperbaric-oxygen',
  },
  {
    title: 'An Update on The Paradigm Shift of Regenerative Medicine',
    venue: 'Journal of Clinical Medical Research, December 2024',
    year: '2024',
    theme: 'stem-cells-regenerative',
  },
  {
    title:
      'Current Concepts Review: Structural Bone and Reconstructive Strategies in the Foot and Including Regenerative Hybrid Alternatives',
    venue: 'Journal of Regenerative Biology and Medicine, January 2025',
    year: '2025',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-6(1)-148',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'The Talus: The Great Regenerative Bone of the Body?',
    venue: 'Journal of Regenerative Biology and Medicine, March 2025',
    year: '2025',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-7(1)-150',
    theme: 'stem-cells-regenerative',
  },
  {
    title: 'Current Concepts Review: HBOT in the Treatment of Sports Related Concussion',
    venue: 'Journal of Regenerative Biology and Medicine, May 2025',
    year: '2025',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-7(1)-149',
    theme: 'hyperbaric-oxygen',
  },
  {
    title: 'Technique Update: Rehabilitation Protocol for Distraction Arthroplasty',
    venue: 'Journal of Regenerative Biology and Medicine, December 2025',
    year: '2025',
    href: 'https://doi.org/10.37191/Mapsci-2582-385X-7(1)-151',
    theme: 'foot-ankle-surgery',
  },
  {
    title:
      'Age-Related Decline in Mesenchymal Stem Cells: Implications for Degenerative Disease Burden and Regenerative Medicine Strategies',
    venue: 'PriMera Scientific Surgical Research and Practice, January 2026',
    year: '2026',
    href: 'https://doi.org/10.56831/PSSRP-07-234',
    theme: 'aging-biology',
  },
];

/** Book chapters — contributed chapters in surgical references. */
export const BOOK_CHAPTERS: Publication[] = [
  {
    title: 'Anterior Bony Ankle Impingement',
    venue: 'Foot and Ankle Clinics, W.B. Saunders, January 1999',
    year: '1999',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Ankle Arthrodesis and Anterior Impingement',
    venue: 'Textbook of Arthroscopy (Ch. 76), Elsevier, January 2004',
    year: '2004',
    href: 'https://doi.org/10.1016/B978-0-7216-0013-0.50079-X',
    theme: 'foot-ankle-surgery',
  },
  {
    title: 'Ankle: Patient Positioning, Portal Placement, and Diagnostic Arthroscopy',
    venue: 'Textbook of Arthroscopy (Ch. 75), Elsevier, January 2004',
    year: '2004',
    href: 'https://doi.org/10.1016/B978-0-7216-0013-0.50078-8',
    theme: 'foot-ankle-surgery',
  },
];

/**
 * Curated dozen for the /research strips — spans eras and themes.
 * Every entry must exist (by title) in FULL_PUBLICATIONS; the
 * build-time integrity check enforces this.
 */
const SELECTED_TITLES = [
  'Endoscopic Plantar Fascia Release: A Case Series',
  'Delayed Reconstruction of Lateral Complex Structures of the Ankle',
  'Jones Fracture Fixation: Minimally Invasive Management of 67 Cases',
  'Minimally Invasive Forefoot Surgery — Slater Planning Classification System',
  'Foetal Healing Cascade — Can We Duplicate It In Adults?',
  'The Future of Medicine — Biologics and Artificial Intelligence',
  'Regenerative Medicine Requires a Paradigm Shift in Outcome Measures',
  'Hyperbaric Oxygen Therapy: An Overview',
  'A Review of Stem Cells: Why Do We Age?',
  "Clinical Utility of Integrant's FrameIt",
  'The Talus: The Great Regenerative Bone of the Body?',
  'Age-Related Decline in Mesenchymal Stem Cells: Implications for Degenerative Disease Burden and Regenerative Medicine Strategies',
];

export const SELECTED_PUBLICATIONS: Publication[] = SELECTED_TITLES.map(
  (t) => FULL_PUBLICATIONS.find((p) => p.title === t)!,
).filter(Boolean);
