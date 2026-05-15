import type { IconName } from './lib/icons';

export interface Article {
  id: string;
  title: string;
  category: string;
  /** External URL to the published article. */
  href: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: IconName;
}

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  /** Internal route or external URL. Omit (or use '#' with `placeholder: true`) for items still being supplied. */
  href?: string;
  linkLabel?: string;
  /** Hint to the renderer that this is an in-app route (use <Link/>) rather than an external <a target="_blank">. */
  internal?: boolean;
  /** Marker for placeholder content the user must verify or replace. */
  placeholder?: boolean;
}

export interface Publication {
  title: string;
  venue?: string;
  year?: string;
  href?: string;
  placeholder?: boolean;
  /** Theme slug for /research/publications filtering. */
  theme?: ThemeSlug;
}

/** Slugs for the six research themes — used as filter values + route slugs. */
export type ThemeSlug =
  | 'foot-ankle-surgery'
  | 'orthobiologics'
  | 'stem-cells-regenerative'
  | 'hyperbaric-oxygen'
  | 'aging-biology'
  | 'ai-in-medicine';

/** A research theme — one of the six pillars of the body of work. */
export interface ResearchTheme {
  slug: ThemeSlug;
  /** Display title shown in the /research hub. */
  title: string;
  /** 2-sentence definition for the hub section. */
  summary: string;
  /** Lucide icon name used in the hub section header. */
  icon: IconName;
}

/** A patent, named device, or named surgical technique. */
export interface Innovation {
  id: string;
  /** "Patent", "Named device", or "Named technique". */
  kind: 'patent' | 'device' | 'technique';
  title: string;
  /** Identifier where applicable (e.g. patent number). */
  identifier?: string;
  /** First-published / first-filed year. */
  year: string;
  /** One- to two-sentence description, public-facing only. */
  body: string;
  /** Optional outbound URL (patent registry, journal article, etc). */
  href?: string;
}

export interface CommunityItem {
  title: string;
  description: string;
  placeholder?: boolean;
}

export interface SocialLink {
  label: string;
  /** Verified profile URL. '#' indicates a placeholder still to be supplied. */
  url: string;
  icon: IconName;
  placeholder?: boolean;
}

/** A "rule" from the book — quoted verbatim with attribution. */
export interface BookRule {
  number: number;
  title: string;
  quote: string;
  attribution: string;
}

/** A symbol → meaning row in the Life Force Formula variables table. */
export interface LifeForceVariable {
  /** Render-as-HTML string so we can use sub/sup tags (e.g. "S<sub>Addition</sub>"). */
  symbolHtml: string;
  meaning: string;
}

/** A factual clinical case panel on the /book page. */
export interface CaseStudy {
  id: string;
  title: string;
  body: string;
  attribution: string;
}

/** A single purchasable format of the book (Amazon AU URLs). */
export interface BookFormat {
  format: 'Hardcover' | 'Paperback' | 'Kindle';
  url: string;
}

/** A book-jacket endorsement (verbatim, attributed). */
export interface Endorsement {
  quote: string;
  by: string;
  /** Role / institution for attribution. */
  title: string;
}

/** A short "Inside this book" bullet for the /book page. */
export interface BookBullet {
  text: string;
}

/** A philanthropic event surfaced on /giving. */
export interface GivingEvent {
  id: string;
  /** Event name, e.g. "The Pink Luncheon". */
  name: string;
  /** Event host, e.g. "Australian Turf Club". */
  host: string;
  /** Beneficiary organisation, e.g. "Vision Australia". */
  beneficiary?: string;
  /** Short typographic mark for the event (used when no logo image is available). */
  hostMark?: string;
  /** What the event funds, e.g. "Breast cancer research". */
  cause: string;
  /** What Prof Slater contributes. */
  contribution: string;
  /** Subtle accent colour used per event card. */
  accent: 'pink' | 'red' | 'neutral';
  /** Optional hero image (responsive WebP — base path without size or extension). */
  heroBase?: string;
  /** Plain-text caption for the hero image — never a credit line for unknown photographers. */
  heroAlt?: string;
  /** Optional partner / event logo (WebP path under /giving/). */
  logo?: string;
  /** Public event URL — used as a discreet "Learn more" link. */
  eventUrl?: string;
  /** First-held year, e.g. "1936" for the Black & White Committee. */
  since?: string;
  /** One-line editorial blurb about the event's significance. */
  blurb?: string;
}
