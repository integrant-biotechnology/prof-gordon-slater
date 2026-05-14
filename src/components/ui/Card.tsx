import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './Motion';

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Card — the default content surface.
 *
 *  • Hover is a calibrated 220ms colour shift on the border only —
 *    no glow swell. Apple-grade subtraction.
 *  • The reveal entry routes through the shared <Reveal> primitive
 *    so timing stays consistent with the rest of the page.
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
