import {
  Activity,
  Award,
  BookOpen,
  Cpu,
  FlaskConical,
  Globe,
  Lightbulb,
  Microscope,
  Sparkles,
  Stethoscope,
  Wind,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import {
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from './social-icons';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: string | number;
  strokeWidth?: string | number;
  title?: string;
}

export type IconComponent = ComponentType<IconProps>;

/**
 * Central registry of icons used in typed content modules.
 * Generic UI glyphs stay on Lucide; brand/social marks are local SVGs
 * so dependency bumps cannot break the site on renamed exports.
 */
export const ICONS = {
  Activity,
  Award,
  BookOpen,
  Cpu,
  FlaskConical,
  Globe,
  Instagram: InstagramIcon,
  Lightbulb,
  Linkedin: LinkedInIcon,
  Microscope,
  Sparkles,
  Stethoscope,
  Twitter: XIcon,
  Wind,
  Youtube: YouTubeIcon,
} satisfies Record<string, IconComponent>;

export type IconName = keyof typeof ICONS;
