import { Reveal } from './Motion';
import { cn } from '@/lib/utils';

interface ChapterMarkProps {
  /** Chapter number / index — rendered in Fraunces italic. */
  number: string;
  /** Chapter title or section label. */
  title: string;
  /** Optional one-line subtitle in body type. */
  subtitle?: string;
  /** Optional source attribution (e.g. "Chaos to Creation, pp. 14–22"). */
  source?: string;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * ChapterMark — a quiet typographic chapter hero used inside /book.
 *
 * Replaces the SectionHeading + glass-card pattern with a calmer
 * gesture: a Fraunces-italic number / index, then a display title
 * underneath. Designed to be set in generous whitespace so each
 * chapter reads as a distinct movement of the page.
 */
export const ChapterMark = ({
  number,
  title,
  subtitle,
  source,
  align = 'left',
  className,
}: ChapterMarkProps) => (
  <div
    className={cn(
      'max-w-3xl',
      align === 'center' && 'mx-auto text-center',
      className,
    )}
  >
    <Reveal>
      <p
        className="font-display italic text-medical-teal/80 nums-tabular"
        style={{ fontSize: 'var(--text-meta)', letterSpacing: '0.04em' }}
      >
        {number}
      </p>
    </Reveal>
    <Reveal delay={0.05}>
      <h2
        className="mt-4 text-balance font-display font-medium"
        style={{
          fontSize: 'var(--text-display)',
          lineHeight: 1.05,
          letterSpacing: '-0.015em',
        }}
      >
        {title}
      </h2>
    </Reveal>
    {subtitle && (
      <Reveal delay={0.1}>
        <p
          className="mt-5 text-pretty leading-relaxed text-white/65"
          style={{ fontSize: 'var(--text-lede)' }}
        >
          {subtitle}
        </p>
      </Reveal>
    )}
    {source && (
      <Reveal delay={0.14}>
        <p className="mt-6 eyebrow text-white/40">{source}</p>
      </Reveal>
    )}
  </div>
);
