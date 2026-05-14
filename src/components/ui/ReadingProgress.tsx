import { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';

/**
 * ReadingProgress — a 1px teal line at the top of the viewport that
 * grows in width as the visitor scrolls. Used on long-form routes
 * (/book) to give the page a "you're reading" affordance.
 *
 * Implementation notes:
 *  - Tracks document scroll via useScroll, mapped through a soft spring
 *    so the line doesn't jitter on micro-scrolls
 *  - Hidden under prefers-reduced-motion
 *  - Renders below the navbar (z-50) and is purely decorative — does
 *    not steal focus or interact with the keyboard
 *  - Only paints after the first scroll event so the line doesn't sit
 *    at 0-width during the page-enter hairline scan
 */
export const ReadingProgress = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    mass: 0.3,
  });

  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 4) setHasScrolled(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        transformOrigin: '0% 50%',
        opacity: hasScrolled ? 1 : 0,
      }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-px bg-medical-teal transition-opacity duration-300"
    />
  );
};
