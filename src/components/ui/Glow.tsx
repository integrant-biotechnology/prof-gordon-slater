import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

interface GlowProps {
  className?: string;
  color?: 'teal' | 'blue';
}

/** Soft, blurred ambient light blob used behind hero / CTA sections. Purely decorative. */
export const Glow = ({ className, color = 'teal' }: GlowProps) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute -z-10 rounded-full blur-[120px]',
        color === 'teal' ? 'h-[480px] w-[480px] bg-medical-teal/12' : 'h-[560px] w-[560px] bg-medical-blue/10',
        className,
      )}
      animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
      transition={reduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
};
