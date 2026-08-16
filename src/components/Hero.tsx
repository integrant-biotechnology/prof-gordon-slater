import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
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
            <p className="eyebrow">Professor Gordon Slater</p>
          </Reveal>

          <Reveal delay={0.05}>
            <p
              className="mt-4 font-medium text-white/85"
              style={{ fontSize: 'var(--text-meta)', letterSpacing: '0.02em' }}
            >
              Orthopaedic Surgeon, Researcher and Author
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              id="hero-heading"
              className="mt-7 text-balance font-display font-medium"
              style={{
                fontSize: 'var(--text-hero)',
                lineHeight: 0.95,
                letterSpacing: '-0.025em',
              }}
            >
              The future of longevity is{' '}
              <em
                className="font-display italic font-normal"
                style={{ fontStyle: 'italic' }}
              >
                being written today.
              </em>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="mt-8 max-w-xl text-pretty leading-relaxed text-white/80"
              style={{ fontSize: 'var(--text-lede)' }}
            >
              For thirty years {DOCTOR_NAME} has worked at the intersection of
              surgery, biology and human regeneration — sixty peer-reviewed
              papers, TGA-registered devices, and{' '}
              <em>Chaos to Creation</em>.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/research"
                viewTransition
                className="inline-flex h-13 min-h-12 items-center justify-center rounded-full bg-medical-teal px-8 text-base font-semibold whitespace-nowrap transition-[background-color,transform] duration-200 ease-out hover:scale-[1.02] hover:bg-medical-teal/90"
                style={{ color: 'var(--color-brand-bg)' }}
              >
                Explore the Research
              </Link>
              <Link
                to="/book"
                viewTransition
                className="inline-flex h-13 min-h-12 items-center justify-center rounded-full border border-white/20 px-8 text-base font-medium whitespace-nowrap text-white/90 transition-colors duration-200 ease-out hover:border-white/40 hover:text-white"
              >
                Discover the Book
              </Link>
            </div>
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
                fallbackSrc="/portrait-gordon-slater-hero.webp?v=4"
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
