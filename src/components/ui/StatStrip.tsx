import { Reveal } from './Motion';
import { cn } from '@/lib/utils';

export interface Stat {
  value: string;
  label: string;
}

interface StatStripProps {
  stats: Stat[];
  /** ARIA label for the section. */
  ariaLabel?: string;
  className?: string;
}

/**
 * StatStrip — a 3-up "by the numbers" rhythm strip.
 *
 * Extracted from /giving so it's reusable on Home and /book. Uses the
 * design-token type scale (--text-display for values, .eyebrow for
 * labels) so it auto-tunes with the rest of the page. Hairline
 * dividers between cells; no visible borders around the strip itself.
 */
export const StatStrip = ({ stats, ariaLabel = 'By the numbers', className }: StatStripProps) => (
  <section aria-label={ariaLabel} className={cn('px-6 py-12 md:py-14', className)}>
    <div className="mx-auto max-w-7xl">
      <Reveal>
        <dl
          className={cn(
            'grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/[0.04]',
            stats.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2 md:grid-cols-4',
          )}
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-brand-bg px-7 py-7">
              <dt className="eyebrow">{s.label}</dt>
              <dd
                className="mt-3 font-display font-medium tracking-tight"
                style={{ fontSize: 'var(--text-display)', lineHeight: 1, letterSpacing: '-0.02em' }}
              >
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </section>
);
