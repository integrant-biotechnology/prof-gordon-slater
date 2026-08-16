import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { BOOK, BOOK_COVER_SRCSET } from '@/constants';
import { cn } from '@/lib/utils';

interface BookCoverProps {
  /** sm ≈ 18rem cap (home showcase), lg ≈ 22rem cap (book hero). */
  size?: 'sm' | 'lg';
  /** Scroll-driven -10° → 0° Y rotation + settle. Off = rest pose. */
  tilt?: boolean;
  /** Eager-load with high priority — true only on /book's hero. */
  priority?: boolean;
  className?: string;
}

/**
 * BookCover — the cinematic 3D cover of Chaos to Creation.
 *
 * Extracted from the /book hero so the home showcase renders the same
 * physical-object treatment: perspective container, hairline edge
 * highlight, spine shadow, and (when `tilt`) a scroll-driven settle
 * from -10° rotation to rest. Reduced-motion users get the rest pose.
 */
export const BookCover = ({
  size = 'lg',
  tilt = false,
  priority = false,
  className,
}: BookCoverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-10, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1.0]);
  const liftY = useTransform(scrollYProgress, [0, 1], [16, 0]);

  const animated = tilt && !reduceMotion;

  return (
    <div ref={ref} className={cn('relative', className)} style={{ perspective: '1200px' }}>
      <motion.div
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0.2 : 1.1,
          ease: reduceMotion ? 'linear' : [0.22, 1, 0.36, 1],
          delay: reduceMotion ? 0 : 0.08,
        }}
        style={{
          rotateY: animated ? rotateY : 0,
          scale: animated ? scale : 1,
          y: animated ? liftY : 0,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
        className={cn(
          'mx-auto aspect-[2/3] w-full origin-center',
          size === 'lg' ? 'max-w-[22rem]' : 'max-w-[18rem]',
        )}
      >
        <div
          className="relative h-full w-full overflow-hidden rounded-3xl"
          style={{
            /* hairline edge highlight + subtle book "spine" gradient
               so the cover reads as a physical object */
            boxShadow:
              '0 30px 60px -15px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.08), inset 2px 0 0 rgba(0,0,0,0.4)',
          }}
        >
          <img
            src={BOOK.coverImage}
            srcSet={BOOK_COVER_SRCSET}
            sizes="(min-width: 1024px) 352px, (min-width: 640px) 320px, 288px"
            alt={BOOK.coverAlt}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding="async"
            className="h-full w-full object-cover"
          />
          {/* Subtle warm-light gradient on the right edge — adds depth
              when the cover rotates. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-transparent to-white/[0.04]"
          />
        </div>
      </motion.div>
    </div>
  );
};
