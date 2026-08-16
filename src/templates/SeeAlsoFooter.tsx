import { EditorialCard } from '@/components/ui/EditorialCard';
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
                <EditorialCard
                  to={item.path}
                  kicker={item.label}
                  title={item.title.split(' | ')[0]}
                  cta="Read"
                  size="sm"
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
