import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { Glow } from '@/components/ui/Glow';
import { DOCTOR_NAME } from '@/constants';

/**
 * NotFound — Apple-grade 404.
 *
 * A real page in the same design language, not a placeholder.
 * Eyebrow "404 · Not found", a quiet Fraunces-italic display title,
 * a single calm paragraph, and one typographic affordance back home.
 * Mirrors the BookCloseCTA register so the visitor feels they
 * arrived somewhere considered, not somewhere broken.
 */
const NotFound = () => {
  useEffect(() => {
    document.title = `Page not found | ${DOCTOR_NAME}`;
    return () => {
      document.title = `${DOCTOR_NAME} | Personal site`;
    };
  }, []);

  return (
    <section
      aria-labelledby="not-found-heading"
      className="relative flex min-h-svh items-center overflow-hidden px-6 py-32"
    >
      <Glow className="-left-[10%] top-[10%]" color="teal" />
      <Glow className="-right-[10%] bottom-[10%]" color="blue" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow text-medical-teal/85 nums-tabular">
            404 <span aria-hidden="true" className="mx-2 text-white/30">·</span> Not found
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1
            id="not-found-heading"
            className="mt-6 text-balance font-display font-medium"
            style={{
              fontSize: 'var(--text-hero)',
              lineHeight: 0.95,
              letterSpacing: '-0.025em',
            }}
          >
            The page{' '}
            <em className="font-display italic font-normal text-white/70">
              has wandered off.
            </em>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p
            className="mt-8 max-w-xl text-pretty leading-relaxed text-white/75"
            style={{ fontSize: 'var(--text-lede)' }}
          >
            The address you reached has moved or doesn&rsquo;t exist. Everything else is still
            here — head back home and pick up the thread.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <Link viewTransition
            to="/"
            className="group/back mt-12 inline-flex items-center gap-2 text-white/75 transition-colors hover:text-white"
            style={{
              fontSize: 'var(--text-eyebrow)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            <ArrowLeft
              aria-hidden="true"
              size={13}
              className="transition-transform group-hover/back:-translate-x-0.5"
            />
            Back to the personal site
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default NotFound;
