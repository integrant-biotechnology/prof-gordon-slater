import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './Motion';

interface PullQuoteProps {
  /** The quote body — verbatim text. */
  children: ReactNode;
  /** Optional attribution rendered as a small meta line below. */
  attribution?: string;
  /** Align the quote left (default) or center. */
  align?: 'left' | 'center';
  /** Tighten or widen the column. Defaults to a single column width. */
  width?: 'narrow' | 'wide';
  className?: string;
}

/**
 * PullQuote — display-italic Fraunces, em-dash attribution.
 *
 * The page's editorial high point. Reserved for verbatim quotes from
 * Slater or his book. One per home-page max; one per book chapter max.
 */
export const PullQuote = ({
  children,
  attribution,
  align = 'left',
  width = 'narrow',
  className,
}: PullQuoteProps) => (
  <Reveal as="div" className={className}>
    <figure
      className={cn(
        'mx-auto',
        width === 'narrow' ? 'max-w-3xl' : 'max-w-5xl',
        align === 'center' && 'text-center',
      )}
    >
      <blockquote
        className="text-balance font-display italic font-medium leading-[1.1] tracking-[-0.015em]"
        style={{ fontSize: 'var(--text-display)' }}
      >
        <span aria-hidden="true" className="text-white/30">&ldquo;</span>
        {children}
        <span aria-hidden="true" className="text-white/30">&rdquo;</span>
      </blockquote>
      {attribution && (
        <figcaption
          className={cn(
            'mt-6 text-[length:var(--text-meta)] text-white/55',
            align === 'center' ? 'mx-auto' : '',
          )}
        >
          <span aria-hidden="true" className="mr-2">—</span>
          {attribution}
        </figcaption>
      )}
    </figure>
  </Reveal>
);
