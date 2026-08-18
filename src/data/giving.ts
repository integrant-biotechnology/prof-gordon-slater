import type { GivingEvent } from '../types';

// -------------------------------------------------------------
// Philanthropy / giving — copy + events for /giving page.
// -------------------------------------------------------------

/** Short pledge line — reusable on home, footer, /giving. */
export const GIVING_PLEDGE =
  'Professor Slater is a proud supporter of Australian medical research.';

/** Intro paragraph for the /giving page. */
export const GIVING_INTRO =
  'Prof Slater is a long-standing supporter of Sydney charity events that fund Australian medical research — proud to stand behind the institutions and the people who make the science possible.';

/** Closing pledge paragraph for the /giving page. */
export const GIVING_CLOSE =
  'Better outcomes follow from doing the science. Supporting these events is the practical end of the same idea — and a small thank-you to the researchers, nurses and clinicians who carry the rest of the load.';

/** A short stat used in the "By the numbers" strip on /giving. */
export interface GivingStat {
  value: string;
  label: string;
}

export const GIVING_STATS: GivingStat[] = [
  { value: '3', label: 'Sydney charity events supported each year' },
  { value: '3', label: 'Research fields — heart, breast, vision' },
  { value: 'In-kind', label: 'HBOT sessions and Integrant skincare' },
];

/** Three philanthropic events. */
export const GIVING_EVENTS: GivingEvent[] = [
  {
    id: 'pink-luncheon',
    name: 'The Pink Luncheon',
    host: 'Australian Turf Club',
    hostMark: 'ATC',
    cause: 'Breast cancer research',
    contribution: 'HBOT sessions and Integrant skincare donations',
    accent: 'pink',
    eventUrl: 'https://www.australianturfclub.com.au/hospitality/pink-fashion-lunch/',
    since: '2007',
    blurb:
      "A Chandon Ladies' Day at Royal Randwick where the proceeds back breast-cancer research — fashion, fine dining, and a serious cause in the same afternoon.",
  },
  {
    id: 'ingham-charity-raceday',
    name: 'The Ingham Charity Raceday',
    host: 'The Ingham — for the Ingham Institute',
    beneficiary: 'Ingham Institute for Applied Medical Research',
    cause: 'Heart and cardiovascular research',
    contribution: 'HBOT sessions and Integrant skincare donations',
    accent: 'red',
    heroBase: '/giving/ingham-charity-raceday-hero',
    heroAlt: 'The Ingham Charity Raceday — branded hero imagery',
    logo: '/giving/ingham-charity-raceday-logo.webp',
    eventUrl: 'https://theingham.com.au/',
    since: '2010',
    blurb:
      "A signature Sydney race day raising funds for the Ingham Institute's translational research into heart disease, cancer and chronic conditions.",
  },
  {
    id: 'black-and-white-luncheon',
    name: 'The Black & White End of Summer Luncheon',
    host: 'The Black & White Committee',
    beneficiary: 'Vision Australia',
    cause: 'Research and services for the blind and low-vision community',
    contribution: 'HBOT sessions and Integrant skincare donations',
    accent: 'neutral',
    heroBase: '/giving/black-and-white-luncheon-hero',
    heroAlt: 'The Black & White Committee — celebrating 90 years',
    logo: '/giving/black-and-white-luncheon-logo.webp',
    eventUrl: 'https://blackandwhite.org.au/',
    since: '1936',
    blurb:
      "Australia's longest-running volunteer fundraising committee for Vision Australia — ninety years of luncheons, balls, and quietly transformative giving.",
  },
];
