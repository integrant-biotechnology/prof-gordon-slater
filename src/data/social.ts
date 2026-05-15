import type { SocialLink } from '../types';

// -------------------------------------------------------------
// Verified social profiles — the four canonical accounts Prof
// Slater maintains personally. Each is the source of truth for
// that platform's identity (mirrored into Person.sameAs JSON-LD).
// -------------------------------------------------------------

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn',  url: 'https://www.linkedin.com/in/drgordonslater/',  icon: 'Linkedin'  },
  { label: 'X',         url: 'https://x.com/drgordonslater',                 icon: 'Twitter'   },
  { label: 'YouTube',   url: 'https://www.youtube.com/@profgordonslater',    icon: 'Youtube'   },
  { label: 'Instagram', url: 'https://www.instagram.com/profgordonslater/',  icon: 'Instagram' },
];

/** Footer disclaimer — site is personal, not a clinic. */
export const FOOTER_DISCLAIMER =
  'This is the personal website of Prof Gordon Slater. Information provided here is general in nature, is not medical advice, and does not create a clinician–patient relationship. For clinical care or to arrange an appointment, please see the practice site.';
