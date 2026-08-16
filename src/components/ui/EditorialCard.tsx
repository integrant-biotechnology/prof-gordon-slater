import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type EditorialCardSize = 'sm' | 'md' | 'lg';

interface EditorialCardProps {
  /** Internal route — renders a react-router <Link viewTransition>. */
  to?: string;
  /** External URL — renders an <a target="_blank"> with ↗ affordance. */
  href?: string;
  /** Teal small-caps kicker above the title. */
  kicker?: string;
  title: ReactNode;
  body?: string;
  /** Quiet metadata line under the body (e.g. "12 publications"). */
  meta?: string;
  /** CTA label; arrow affordance appended automatically. */
  cta?: string;
  size?: EditorialCardSize;
  className?: string;
  /** Extra content slot (featured publication lists, action rows). */
  children?: ReactNode;
}

const titleSizeFor: Record<EditorialCardSize, string> = {
  sm: 'var(--text-title)',
  md: 'var(--text-title)',
  lg: 'clamp(1.75rem, 3vw, 2.75rem)',
};

/**
 * EditorialCard — the site's single top-ruled panel.
 *
 * One hairline top rule that warms to teal on hover, teal kicker,
 * Fraunces title, quiet body/meta, arrow CTA. The whole card is the
 * link when `to`/`href` is given; otherwise it renders as a static
 * article block (children can carry their own links).
 *
 * Consolidates the three near-identical panel patterns that used to
 * live in CuratedTrio, SeeAlsoFooter, and the research theme rails.
 */
export const EditorialCard = ({
  to,
  href,
  kicker,
  title,
  body,
  meta,
  cta,
  size = 'md',
  className,
  children,
}: EditorialCardProps) => {
  const interactive = Boolean(to || href);

  const inner = (
    <>
      {kicker && (
        <p
          className="text-medical-teal/90"
          style={{
            fontSize: 'var(--text-eyebrow)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          {kicker}
        </p>
      )}
      <p
        className={cn(
          'font-display font-medium leading-tight text-white/90',
          kicker && 'mt-4',
          interactive && 'transition-colors group-hover/card:text-white',
        )}
        style={{ fontSize: titleSizeFor[size], letterSpacing: '-0.012em' }}
      >
        {title}
      </p>
      {body && (
        <p className="mt-4 max-w-prose text-pretty leading-relaxed text-white/75">{body}</p>
      )}
      {meta && (
        <p className="mt-4 text-brand-muted" style={{ fontSize: 'var(--text-meta)' }}>
          {meta}
        </p>
      )}
      {children}
      {cta && (
        <span
          className={cn(
            'mt-6 inline-flex items-center gap-1.5 text-white/70',
            interactive && 'transition-colors group-hover/card:text-medical-teal',
          )}
          style={{
            fontSize: 'var(--text-eyebrow)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          {cta}
          {href ? (
            <ArrowUpRight
              aria-hidden="true"
              size={14}
              className="transition-transform group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
            />
          ) : (
            <ArrowRight
              aria-hidden="true"
              size={14}
              className="transition-transform group-hover/card:translate-x-0.5"
            />
          )}
        </span>
      )}
    </>
  );

  const shellClass = cn(
    'group/card block border-t border-white/10 transition-colors',
    size === 'lg' ? 'pt-8 md:pt-10' : 'pt-6',
    interactive && 'hover:border-medical-teal/40',
    className,
  );

  if (to) {
    return (
      <Link to={to} viewTransition className={shellClass}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={shellClass}>
        {inner}
      </a>
    );
  }
  return <article className={shellClass}>{inner}</article>;
};
