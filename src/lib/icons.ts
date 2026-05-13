import {
  Activity,
  ChevronRightSquare,
  Footprints,
  HeartPulse,
  Layout,
  MessageSquare,
  Repeat,
  Scan,
  Search,
  Shield,
  User,
  Zap,
  type LucideIcon,
} from 'lucide-react';

/**
 * Central registry mapping the string keys used in `constants.ts`
 * to their Lucide icon components. Keeping this in one place keeps
 * the data files plain and the icon set easy to audit.
 */
export const ICONS = {
  // conditions / focus areas
  Focus: Scan,
  Activity,
  Shield,
  Zap,
  Footprints,
  HeartPulse,
  ChevronRightSquare,
  Layout,
  // philosophy
  Search,
  MessageSquare,
  User,
  Repeat,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;
