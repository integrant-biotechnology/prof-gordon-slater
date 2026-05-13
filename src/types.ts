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
  /** Outbound link. Omit (or use '#' with `placeholder: true`) for items still being supplied. */
  href?: string;
  linkLabel?: string;
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
