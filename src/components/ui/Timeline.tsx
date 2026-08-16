import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Motion';
import { cn } from '@/lib/utils';
import type { TimelineEntry } from '@/data/background';

interface TimelineProps {
  entries: TimelineEntry[];
  className?: string;
}

/**
 * Timeline — vertical editorial career rail.
 *
 * A 1px hairline runs the full height; each milestone is a Fraunces
 * tabular-num year on the rail with label/detail to the right. Teal
 * node dots mark innovation/synthesis milestones so the eye catches
 * the inflection points. `<ol>` semantics; entries with `href` link
 * onward.
 */
export const Timeline = ({ entries, className }: TimelineProps) => (
  <ol className={cn('relative border-l border-white/10 pl-8 md:pl-12', className)}>
    {entries.map((entry, i) => {
      const accent = entry.era === 'innovation' || entry.era === 'synthesis';
      const body = (
        <>
          <p
            className={cn(
              'font-display italic nums-tabular',
              accent ? 'text-medical-teal/90' : 'text-white/70',
            )}
            style={{ fontSize: 'var(--text-title)', letterSpacing: '-0.015em', lineHeight: 1 }}
          >
            {entry.year}
          </p>
          <p className="mt-2 font-display font-medium leading-snug text-white/90"
            style={{ fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)', letterSpacing: '-0.008em' }}
          >
            {entry.label}
          </p>
          {entry.detail && (
            <p className="mt-2 max-w-xl text-pretty leading-relaxed text-white/75">
              {entry.detail}
            </p>
          )}
          {entry.href && (
            <span
              className="mt-3 inline-flex items-center gap-1.5 text-white/70 transition-colors group-hover/milestone:text-medical-teal"
              style={{
                fontSize: 'var(--text-eyebrow)',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Read
              <ArrowRight aria-hidden="true" size={13} />
            </span>
          )}
        </>
      );

      return (
        <li key={`${entry.year}-${entry.label}`} className="relative pb-12 last:pb-0">
          {/* Node dot on the rail. */}
          <span
            aria-hidden="true"
            className={cn(
              'absolute top-2 -left-8 md:-left-12 h-2.5 w-2.5 -translate-x-[calc(50%+0.5px)] rounded-full',
              accent ? 'bg-medical-teal' : 'bg-white/25',
            )}
          />
          <Reveal delay={Math.min(i * 0.04, 0.2)}>
            {entry.href ? (
              <Link to={entry.href} viewTransition className="group/milestone block">
                {body}
              </Link>
            ) : (
              <div>{body}</div>
            )}
          </Reveal>
        </li>
      );
    })}
  </ol>
);
