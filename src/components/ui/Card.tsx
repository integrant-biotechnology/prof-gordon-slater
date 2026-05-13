import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Adds a subtle teal sheen that fades in on hover. */
  glow?: boolean;
}

export const Card = ({ children, className, glow }: CardProps) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'group relative overflow-hidden rounded-3xl glass p-8 transition-colors duration-500 hover:border-white/15',
        className,
      )}
    >
      {glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-medical-teal/8 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
