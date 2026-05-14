import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './Motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  /**
   * Legacy prop kept for backward-compat with existing callers.
   * Apple-grade hover is colour-shift only — no glow swell.
   * The `glow` flag is now a no-op visually but preserved so
   * existing call-sites compile without edits.
   */
  glow?: boolean;
}

/**
 * Card — the default content surface.
 *
 * Apple-grade refinement vs. the previous version:
 *  • The teal-sheen glow swell on hover is removed (it broke the
 *    "subtract, don't add" rule)
 *  • Hover is now a calibrated 220ms colour shift on the border only
 *  • The reveal entry routes through the shared <Reveal> primitive
 *    so timing stays consistent with the rest of the page
 */
export const Card = ({ children, className }: CardProps) => (
  <Reveal>
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl glass p-8 transition-colors duration-[220ms] ease-out hover:border-white/15',
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  </Reveal>
);
