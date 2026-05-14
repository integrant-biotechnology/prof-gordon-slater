import { useEffect, useState } from 'react';
import { motion, useReducedMotion, useSpring } from 'motion/react';

/**
 * CursorCompanion — a quiet 22px ring that follows the cursor.
 *
 * Apple-grade "the page is alive" hover acknowledgement. Stays
 * subtle at all times (opacity 0.25 normally) and grows + glows
 * gently when over an interactive target (anchor, button, role=
 * button, [data-cursor-target]).
 *
 * Disabled on touch devices (no hover capability) and entirely
 * hidden under `prefers-reduced-motion`.
 *
 * Implementation notes:
 *  - Position tracked through useSpring for a gentle lag-behind
 *    (stiffness 350, damping 28) — quiet, not magnetic.
 *  - Pointer-events: none always — never blocks clicks or text
 *    selection.
 *  - Position rendered via transform translate3d so it composites
 *    onto its own layer (avoids paint thrashing during mouse move).
 */
export const CursorCompanion = () => {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useSpring(0, { stiffness: 350, damping: 28, mass: 0.4 });
  const y = useSpring(0, { stiffness: 350, damping: 28, mass: 0.4 });

  useEffect(() => {
    // Hover-capable device check. Touch devices (and OS-level
    // pointer-coarse environments) get nothing.
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setEnabled(mq.matches);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!enabled || reduceMotion) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;
      // Match interactive targets: anchors, buttons, role=button,
      // and anything explicitly opt-ed in with data-cursor-target.
      const interactive = target.closest(
        'a, button, [role="button"], [data-cursor-target], input, textarea, select, summary',
      );
      setHovering(Boolean(interactive));
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [enabled, reduceMotion, x, y]);

  if (!enabled || reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        opacity: hovering ? 1 : 0.25,
        scale: hovering ? 1.4 : 1,
        borderColor: 'color-mix(in oklab, var(--color-medical-teal) 70%, white)',
        mixBlendMode: 'difference',
      }}
      transition={{
        opacity: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
      }}
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[22px] w-[22px] rounded-full border md:block"
      data-cursor-companion
    />
  );
};
