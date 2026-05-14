import { useEffect, useState } from 'react';

/**
 * PageEnterHairline — a 1px teal line that scans top → bottom of the
 * viewport on first paint (and on subsequent route changes), then
 * dissolves.
 *
 * Apple-grade "we noticed you arrived" acknowledgement. Calibrated,
 * not flashy — 1200ms total, hidden under `prefers-reduced-motion`.
 *
 * Self-unmounts after the animation completes so it never blocks
 * interactions or repaints.
 */
export const PageEnterHairline = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 1300);
    return () => window.clearTimeout(t);
  }, []);

  if (!visible) return null;
  return <div aria-hidden="true" className="page-enter-hairline" />;
};
