import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Heart, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { GivingEvent } from '@/types';
import { Card } from '@/components/ui/Card';
import { Glow } from '@/components/ui/Glow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  DOCTOR_NAME,
  GIVING_CLOSE,
  GIVING_EVENTS,
  GIVING_INTRO,
  GIVING_PLEDGE,
} from '@/constants';

const Giving = () => {
  useEffect(() => {
    document.title = `Giving back | ${DOCTOR_NAME}`;
    return () => {
      document.title = `${DOCTOR_NAME} | Personal site`;
    };
  }, []);

  return (
    <>
      <GivingHero />
      <GivingEvents />
      <GivingCloseSection />
    </>
  );
};

export default Giving;

// -------------------------------------------------------------
// Sub-sections (module-private)
// -------------------------------------------------------------

const GivingHero = () => (
  <section
    aria-labelledby="giving-hero"
    className="relative overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-20"
  >
    <Glow className="-left-[10%] top-[5%]" color="teal" />
    <Glow className="-right-[10%] bottom-[10%]" color="blue" />

    <div className="relative z-10 mx-auto max-w-4xl">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-white"
      >
        <ArrowLeft aria-hidden="true" size={14} />
        Back to the personal site
      </Link>

      <p className="mt-7 eyebrow">Giving back</p>

      <h1
        id="giving-hero"
        className="mt-4 text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl"
      >
        Supporting Australian{' '}
        <span className="text-white/40">medical research.</span>
      </h1>

      <p className="mt-7 text-pretty text-lg leading-relaxed text-white/70 md:text-xl">
        {GIVING_INTRO}
      </p>

      <p className="mt-5 text-pretty text-base italic leading-relaxed text-white/55">
        {GIVING_PLEDGE}
      </p>
    </div>
  </section>
);

const ACCENT_META: Record<GivingEvent['accent'], { icon: LucideIcon; ring: string; text: string; dot: string }> = {
  pink: {
    icon: Sparkles,
    ring: 'ring-pink-300/30',
    text: 'text-pink-300',
    dot: 'bg-pink-300',
  },
  red: {
    icon: Heart,
    ring: 'ring-red-400/30',
    text: 'text-red-400',
    dot: 'bg-red-400',
  },
  neutral: {
    icon: Eye,
    ring: 'ring-white/20',
    text: 'text-white/85',
    dot: 'bg-white/85',
  },
};

const GivingEvents = () => (
  <section
    aria-labelledby="events-heading"
    className="border-t border-white/5 px-6 py-20 md:py-24"
  >
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        id="events-heading"
        eyebrow="Events"
        title="Three Sydney charity events."
        intro="Each event funds research into conditions Prof Slater encounters in clinical practice. Contributions are non-monetary in-kind donations of HBOT sessions and Integrant skincare products."
        className="mb-12 md:mb-16"
      />

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {GIVING_EVENTS.map((e) => {
          const accent = ACCENT_META[e.accent];
          const Icon = accent.icon;
          return (
            <li key={e.id}>
              <Card className="flex h-full flex-col gap-6 bg-white/[0.01] p-9" glow>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`flex h-11 w-11 items-center justify-center rounded-full glass ring-1 ${accent.ring}`}
                  >
                    <Icon size={18} strokeWidth={1.5} className={accent.text} />
                  </span>
                  <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-semibold leading-tight text-white">
                    {e.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{e.host}</p>
                </div>

                <dl className="mt-auto space-y-3 border-t border-white/5 pt-5">
                  <div>
                    <dt className="eyebrow">Supporting</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-white/80">
                      {e.cause}
                      {e.beneficiary && (
                        <>
                          {' '}
                          —{' '}
                          <span className="text-white/65">{e.beneficiary}</span>
                        </>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Contribution</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-white/80">{e.contribution}</dd>
                  </div>
                </dl>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

const GivingCloseSection = () => (
  <section
    aria-label="Closing note"
    className="relative overflow-hidden px-6 py-20 md:py-24"
  >
    <Glow className="bottom-0 left-1/2 -translate-x-1/2" color="teal" />
    <div className="relative mx-auto max-w-3xl text-center">
      <p className="text-pretty text-lg leading-relaxed text-white/75 md:text-xl">{GIVING_CLOSE}</p>
      <Link
        to="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
      >
        <ArrowLeft aria-hidden="true" size={14} />
        Back to the personal site
      </Link>
    </div>
  </section>
);
