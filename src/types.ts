import type { ReactNode } from 'react';
import type { IconName } from './lib/icons';

export interface Condition {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface Procedure {
  id: string;
  title: string;
  description: string;
  features?: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  /** External URL to the published article. */
  href: string;
}

export interface PhilosophyItem {
  title: string;
  description: string;
  icon: IconName;
}

export interface PatientInfoItem {
  title: string;
  content: ReactNode;
}
