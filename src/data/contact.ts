import { BOOK_PRESS_URL } from './book';
import { CONTACT_EMAIL, PRACTICE_URL, PRESS_PHONE } from './identity';

// -------------------------------------------------------------
// Contact pathways — the three ways to work with Prof Slater.
//
// The site stays non-clinical: the Clinical Enquiries pathway
// routes outbound to the practice site (no forms anywhere —
// /privacy promises none).
// -------------------------------------------------------------

export interface ContactPathway {
  id: 'clinical' | 'research' | 'media';
  kicker: string;
  title: string;
  body: string;
  action: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string };
  /** Optional external resource row (e.g. the book's press & media kit). */
  press?: { label: string; href: string };
}

export const CONTACT_PATHWAYS: ContactPathway[] = [
  {
    id: 'clinical',
    kicker: 'Patients',
    title: 'Clinical Enquiries',
    body: 'Appointments, referrals and clinical questions are handled through the practice — this site does not provide medical advice or bookings.',
    action: { label: 'Visit the practice site', href: PRACTICE_URL, external: true },
  },
  {
    id: 'research',
    kicker: 'Academia & Industry',
    title: 'Research & Collaboration',
    body: 'Study collaborations, editorial matters, biologics and device development, and academic partnerships.',
    action: { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  },
  {
    id: 'media',
    kicker: 'Press',
    title: 'Speaking & Media',
    body: 'Keynotes, panels, podcast and media appearances — on regenerative orthopaedics, longevity science, and Chaos to Creation.',
    action: { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    secondary: { label: PRESS_PHONE, href: `tel:${PRESS_PHONE.replace(/\s/g, '')}` },
    press: { label: 'Book press & media kit', href: BOOK_PRESS_URL },
  },
];
