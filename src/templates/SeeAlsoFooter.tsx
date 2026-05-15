import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { relatedRoutes } from '@/lib/site';
import type { SiteRoute } from '@/data/site';

interface SeeAlsoFooterProps {
  route: SiteRoute;
}

/**
 * SeeAlsoFooter — per-page "Continue" block.
 *
 * Rendered automatically by <PageShell> at the foot of every page
 * whose route has a `related[]` array in SITE_ROUTES. Drives the
 * Apple sub-page cross-linking pattern (apple.com/leadership →
 * other pages always invites onward navigation).
 *
 * Returns null when the route has no related entries, so pages
 * without onward links don't render an empty section.
 */
export const SeeAlsoFooter = ({ route }: SeeAlsoFooterProps) => {
  const items = relatedRoutes(route);
  if (items.length === 0) return null;

  return (
    <section
      aria-label="See also"
      className="border-t border-white/10 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Continue</p>
        </Reveal>
        <ul className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {items.map((item, i) => (
            <li key={item.path}>
              <Reveal delay={i * 0.04}>
                <Link
                  to={item.path}
                  viewTransition
                  className="group/related block border-t border-white/10 pt-6 transition-colors hover:border-medical-teal/40"
                >
                  <p
                    className="text-medical-teal/85"
                    style={{
                      fontSize: 'var(--text-eyebrow)',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="mt-4 font-display font-medium leading-snug text-white/90 transition-colors group-hover/related:text-white"
                    style={{
                      fontSize: 'var(--text-title)',
                      letterSpacing: '-0.012em',
                    }}
                  >
                    {item.title.split(' | ')[0]}
                  </p>
                  <span
                    className="mt-5 inline-flex items-center gap-1.5 text-white/55 transition-colors group-hover/related:text-medical-teal"
                    style={{
                      fontSize: 'var(--text-eyebrow)',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    Read
                    <ArrowRight
                      aria-hidden="true"
                      size={13}
                      className="transition-transform group-hover/related:translate-x-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
