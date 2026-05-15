import {
  Activity,
  Award,
  BookOpen,
  Cpu,
  FlaskConical,
  Globe,
  Instagram,
  Lightbulb,
  Linkedin,
  Microscope,
  Sparkles,
  Stethoscope,
  Twitter,
  Wind,
  Youtube,
  type LucideIcon,
} from 'lucide-react';

/**
 * Central registry of icons used in `constants.ts` data.
 * Keys are the Lucide component names so the mapping reads 1:1.
 */
export const ICONS = {
  Activity,
  Award,
  BookOpen,
  Cpu,
  FlaskConical,
  Globe,
  Instagram,
  Lightbulb,
  Linkedin,
  Microscope,
  Sparkles,
  Stethoscope,
  Twitter,
  Wind,
  Youtube,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;
