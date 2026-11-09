import type { ReactNode } from 'react';
import { Breadcrumbs } from '@/templates/Breadcrumbs';
import { SeeAlsoFooter } from '@/templates/SeeAlsoFooter';
import type { SiteRoute } from '@/data/site';

interface PageShellProps {
  /** The route this page renders. Drives <title>, meta, breadcrumbs, see-also. */
  route: SiteRoute;
  children: ReactNode;
  /** Skip the auto-rendered SeeAlsoFooter — for pages with custom closers. */
  hideSeeAlso?: boolean;
}

/**
 * PageShell — wraps every non-home page.
 *
 *   - <head> metadata is owned by <RouteMeta> (src/lib/seo.ts)
 *   - App.tsx owns the single <main id="main"> landmark; this shell
 *     renders a plain wrapper to avoid nested main elements
 *   - Auto-renders <Breadcrumbs> when route.parent is set (PR-7)
 *   - Auto-renders <SeeAlsoFooter> when route.related is set (PR-7)
 *
 * Pages no longer need to wire Breadcrumbs / SeeAlsoFooter
 * themselves — the shell does it from SITE_ROUTES. Opt out with
 * hideSeeAlso when a page has a bespoke closing moment.
 */
export const PageShell = ({ route, children, hideSeeAlso = false }: PageShellProps) => {
  return (
    <div id="content">
      {route.parent && <Breadcrumbs route={route} />}
      {children}
      {!hideSeeAlso && <SeeAlsoFooter route={route} />}
    </div>
  );
};
