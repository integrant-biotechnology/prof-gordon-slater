import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Weight = 'thin' | 'glass' | 'thick';

interface MaterialProps {
  weight?: Weight;
  className?: string;
  children: ReactNode;
}

const WEIGHT_CLASS: Record<Weight, string> = {
  thin: 'glass-thin',
  glass: 'glass',
  thick: 'glass-thick',
};

/**
 * Material — the calibrated glass surface used throughout the site.
 *
 * Three weights, each with its own backdrop-blur, saturation and
 * brightness calibration:
 *  - `thin`  — chips, footer bar, ambient overlays
 *  - `glass` — default cards and panels (the workhorse)
 *  - `thick` — modals and the Navbar pill on scroll
 *
 * Each weight carries a hairline top-edge highlight via inset-shadow
 * so the surface reads as glass, not as a flat panel.
 */
export const Material = ({ weight = 'glass', className, children }: MaterialProps) => (
  <div className={cn(WEIGHT_CLASS[weight], 'rounded-3xl', className)}>{children}</div>
);
