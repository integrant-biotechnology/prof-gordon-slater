import { useEffect } from 'react';
import type { SiteRoute } from '@/data/site';

/**
 * useDocumentTitle — sets `<title>` and `<meta name="description">`
 * on every route the hook is invoked from.
 *
 * Called automatically by `<PageShell>` once the new templates wire
 * in (PR-2 onwards). Pages without `<PageShell>` (the legacy /book
 * and /giving until they migrate) can call this directly.
 */
export const useDocumentTitle = (route: SiteRoute): void => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = route.title;

    const metaDesc = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (metaDesc) {
      metaDesc.setAttribute('content', route.description);
    }
  }, [route]);
};
