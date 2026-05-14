import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds before the reveal starts. */
  delay?: number;
  /** Duration in seconds. Defaults to 0.6s (Apple register). */
  duration?: number;
  /** y-offset in px from which content rises. Default 16. */
  y?: number;
  /** Render as block (div) or inline (span). */
  as?: 'div' | 'span';
  className?: string;
};

/**
 * Reveal — the single motion primitive used across the site.
 *
 * Every entry animation should route through this so timing and
 * easing stay consistent. Apple-feel "spring-out" cubic-bezier is
 * canonical; under `prefers-reduced-motion: reduce` everything
 * collapses to a 200ms opacity-only fade.
 */
export const Reveal = ({
  children,
  delay = 0,
  duration = 0.6,
  y = 16,
  as = 'div',
  className,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();
  const MotionTag = as === 'span' ? motion.span : motion.div;

  return (
    <MotionTag
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{
        duration: reduceMotion ? 0.2 : duration,
        ease: reduceMotion ? 'linear' : [0.22, 1, 0.36, 1], // var(--ease-apple)
        delay: reduceMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};
