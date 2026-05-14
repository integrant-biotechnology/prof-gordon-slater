import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * PageEnterHairline — a 1px teal line that scans top → bottom of the
 * viewport on first paint AND on every route change, then dissolves.
 *
 * Apple-grade "we noticed you arrived" acknowledgement. Calibrated,
 * not flashy — 1200ms total, hidden under `prefers-reduced-motion`.
 *
 * Re-triggers on every route change by keying off `location.pathname`
 * so the visitor gets the same quiet acknowledgement when they
 * navigate between rooms.
 */
export const PageEnterHairline = () => {
  const { pathname } = useLocation();
  const [token, setToken] = useState(0);

  // Re-mount the line on every route change by bumping a token.
  useEffect(() => {
    setToken((t) => t + 1);
  }, [pathname]);

  // Auto-hide after the animation completes so the element does not
  // sit in the DOM blocking interactions.
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setVisible(true);
    const t = window.setTimeout(() => setVisible(false), 1300);
    return () => window.clearTimeout(t);
  }, [token]);

  if (!visible) return null;
  return <div key={token} aria-hidden="true" className="page-enter-hairline" />;
};
