import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './Motion';

interface SectionHeadingProps {
  /** id applied to the <h2>, so the parent <section> can reference it via aria-labelledby. */
  id: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: 'left' | 'center';
  className?: string;
  /** Render the title in italic Fraunces for editorial emphasis. */
  italic?: boolean;
}

/**
 * SectionHeading — the canonical section opener.
 *
 * Eyebrow (small caps, tracking 0.18em) → title (Fraunces, large) →
 * intro (Inter, lede-sized). All three reveal through the shared
 * Motion primitive with a calibrated 50ms / 100ms stagger.
 */
export const SectionHeading = ({
  id,
  eyebrow,
  title,
  intro,
  align = 'left',
  italic = false,
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      'max-w-3xl space-y-5',
      align === 'center' && 'mx-auto text-center',
      className,
    )}
  >
    {eyebrow && (
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
    )}
    <Reveal delay={0.05}>
      <h2
        id={id}
        className={cn(
          'text-balance font-display font-medium',
          italic && 'italic',
        )}
        style={{ fontSize: 'var(--text-display)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
      >
        {title}
      </h2>
    </Reveal>
    {intro && (
      <Reveal delay={0.1}>
        <p className="text-pretty leading-relaxed text-white/75" style={{ fontSize: 'var(--text-lede)' }}>
          {intro}
        </p>
      </Reveal>
    )}
  </div>
);
