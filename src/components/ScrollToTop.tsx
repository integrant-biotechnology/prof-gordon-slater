import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll restoration on route change. Defers to in-page hash navigation
 * (Home.tsx already handles `/#about`-style hash scrolling), so this only
 * acts when there's no hash.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
};
