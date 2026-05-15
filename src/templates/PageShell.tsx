import type { ReactNode } from 'react';
import { useDocumentTitle } from '@/lib/seo';
import type { SiteRoute } from '@/data/site';

interface PageShellProps {
  /** The route this page renders. Drives <title>, meta, breadcrumbs, see-also. */
  route: SiteRoute;
  children: ReactNode;
}

/**
 * PageShell — wraps every non-home page from PR-2 onwards.
 *
 * Today (PR-1) it is a typed scaffold that:
 *   - sets document.title + meta description via useDocumentTitle
 *   - wraps the content in a <main> landmark
 *
 * PR-7 adds <Breadcrumbs> (when route.parent exists) and
 * <SeeAlsoFooter> (when route.related exists). Keep the API stable
 * so PR-2/3/4/5/6 can adopt this without churn.
 */
export const PageShell = ({ route, children }: PageShellProps) => {
  useDocumentTitle(route);

  return (
    <main id="content" aria-labelledby="page-title">
      {children}
    </main>
  );
};
