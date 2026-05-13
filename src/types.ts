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
