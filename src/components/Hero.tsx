import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { EditorialImage } from '@/components/ui/EditorialImage';
import { DOCTOR_NAME } from '@/constants';

/**
 * Hero — the moment.
 *
 * One sentence. One photograph. Nothing else above the fold.
 *
 * Scroll-driven settle: the portrait scales 1.05 → 1.0 and its inner
 * image shifts +5% → 0% as the user scrolls from page-top through the
 * end of the hero section. Calibrated through the shared Apple-feel
 * easing so it never feels "scrolled past" — it feels delivered.
 *
 * `prefers-reduced-motion` users get the photograph in its rest pose
 * with no scroll-driven transformation.
 */
export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Portrait settle: 1.05 → 1.0 across the hero scroll range.
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.0]);
  // Subtle parallax inside the frame so the photo "leans into" the page.
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh items-center overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-24"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
        {/* Sentence column — 7/12 at desktop, full-width on mobile. */}
        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow nums-tabular">
              Sydney <span aria-hidden="true" className="mx-2 text-white/30">·</span>
              UTS <span aria-hidden="true" className="mx-2 text-white/30">·</span>
              Author
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-heading"
              className="mt-7 text-balance font-display font-medium"
              style={{
                fontSize: 'var(--text-hero)',
                lineHeight: 0.95,
                letterSpacing: '-0.025em',
              }}
            >
              The future of surgery is{' '}
              <em
                className="font-display italic font-normal"
                style={{ fontStyle: 'italic' }}
              >
                regenerative.
              </em>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p
              className="mt-8 max-w-xl text-pretty leading-relaxed text-white/65"
              style={{ fontSize: 'var(--text-lede)' }}
            >
              The personal site of {DOCTOR_NAME} — foot &amp; ankle orthopaedic
              surgeon, Professor at the University of Technology Sydney, and
              author of <em>Chaos to Creation</em>.
            </p>
          </Reveal>

          {/* Quiet "scroll to read" affordance — Apple-grade affordance,
              not a CTA button. */}
          <Reveal delay={0.32}>
            <a
              href="#work"
              className="mt-12 inline-flex items-center gap-2 text-[length:var(--text-meta)] font-medium text-white/55 transition-colors hover:text-white/85"
            >
              <span className="eyebrow !text-white/55">Read on</span>
              <span
                aria-hidden="true"
                className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full glass-thin"
              >
                <ArrowDown size={13} strokeWidth={1.5} />
              </span>
            </a>
          </Reveal>
        </div>

        {/* Photograph column — 5/12 at desktop, full-width above the
            sentence on mobile so the visitor's first impression is
            still photographic. */}
        <div className="order-first md:order-last md:col-span-5">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 1.0,
              ease: reduceMotion ? 'linear' : [0.22, 1, 0.36, 1],
              delay: reduceMotion ? 0 : 0.05,
            }}
            style={{ scale: reduceMotion ? 1 : scale }}
            className="relative origin-center will-change-transform"
          >
            <motion.div
              style={{ y: reduceMotion ? 0 : y }}
              className="relative overflow-hidden rounded-3xl"
            >
              <EditorialImage
                fallbackSrc="/portrait-gordon-slater.webp?v=3"
                alt={`${DOCTOR_NAME} — portrait`}
                aspect="3/4"
                priority
                imgClassName="object-cover"
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
              />
              {/* Bottom-edge gradient — lifts the photo into the page. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-brand-bg/60 to-transparent"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
