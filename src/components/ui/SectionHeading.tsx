import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  /** id applied to the <h2>, so the parent <section> can reference it via aria-labelledby. */
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading = ({
  id,
  eyebrow,
  title,
  intro,
  align = 'left',
  className,
}: SectionHeadingProps) => {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: 'easeOut', delay } as const,
  });

  return (
    <div className={cn('max-w-3xl space-y-5', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <motion.p {...reveal()} className="eyebrow">
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        {...reveal(0.05)}
        id={id}
        className="text-balance font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p {...reveal(0.1)} className="text-pretty text-lg leading-relaxed text-white/65">
          {intro}
        </motion.p>
      )}
    </div>
  );
};
