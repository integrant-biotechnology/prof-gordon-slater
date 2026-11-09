import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * PageEnterHairline — a 1px teal line that scans top → bottom of the
 * viewport on first paint AND on every route change, then dissolves.
 *
 * Apple-grade "we noticed you arrived" acknowledgement. Calibrated,
 * not flashy — 1200ms total, hidden under `prefers-reduced-motion`.
 *
 * Re-triggers on every route change: the line is keyed by
 * `location.pathname`, so each navigation mounts a fresh instance.
 */
export const PageEnterHairline = () => {
  const { pathname } = useLocation();
  return <Hairline key={pathname} />;
};

/** One scan. Removes itself once the animation has finished so it
 *  never sits in the DOM blocking interactions. */
const Hairline = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 1300);
    return () => window.clearTimeout(t);
  }, []);

  if (!visible) return null;
  return <div aria-hidden="true" className="page-enter-hairline" />;
};
