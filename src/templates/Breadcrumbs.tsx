import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { breadcrumbsFor, parentOf } from '@/lib/site';
import type { SiteRoute } from '@/data/site';

interface BreadcrumbsProps {
  route: SiteRoute;
}

/**
 * Breadcrumbs — only renders for routes with a `parent`.
 *
 *   Desktop: full chain — e.g. "Research › Publications"
 *   Mobile : single back chevron to the immediate parent
 *
 * Today (PR-1) this is a typed scaffold; PR-7 wires it into
 * <PageShell> so every sub-page gets it for free.
 */
export const Breadcrumbs = ({ route }: BreadcrumbsProps) => {
  const parent = parentOf(route);
  if (!parent) return null;

  const chain = breadcrumbsFor(route);

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-28 md:pt-32">
      {/* Mobile: back chevron only */}
      <Link
        to={parent.path}
        className="inline-flex items-center gap-1.5 text-white/55 transition-colors hover:text-white/85 md:hidden"
        style={{ fontSize: 'var(--text-meta)' }}
      >
        <ChevronLeft aria-hidden="true" size={14} strokeWidth={1.5} />
        {parent.label}
      </Link>

      {/* Desktop: full chain */}
      <ol
        className="hidden items-center gap-2 md:flex"
        style={{
          fontSize: 'var(--text-eyebrow)',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}
      >
        {chain.map((step, i) => {
          const isLast = i === chain.length - 1;
          return (
            <li key={step.path} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-white/55" aria-current="page">
                  {step.label}
                </span>
              ) : (
                <>
                  <Link
                    to={step.path}
                    className="text-white/35 transition-colors hover:text-white/65"
                  >
                    {step.label}
                  </Link>
                  <span aria-hidden="true" className="text-white/20">
                    ›
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
