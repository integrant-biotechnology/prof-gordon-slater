import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Eye, Heart, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { GivingEvent } from '@/types';
import { Card } from '@/components/ui/Card';
import { Glow } from '@/components/ui/Glow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatStrip } from '@/components/ui/StatStrip';
import { JsonLd } from '@/templates/JsonLd';
import { siteUrl } from '@/lib/site-origin';
import {
  DOCTOR_NAME,
  GIVING_CLOSE,
  GIVING_EVENTS,
  GIVING_INTRO,
  GIVING_PLEDGE,
  GIVING_STATS,
} from '@/constants';

const GIVING_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Sydney charity events supported by Prof Gordon Slater',
  url: siteUrl('/giving'),
  itemListElement: GIVING_EVENTS.map((event, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Event',
      name: event.name,
      description: event.blurb,
      url: event.eventUrl,
      location: { '@type': 'Place', name: 'Sydney' },
      ...(event.beneficiary && {
        organizer: { '@type': 'Organization', name: event.beneficiary },
      }),
    },
  })),
};

const Giving = () => {
  useEffect(() => {
    document.title = `Giving back | ${DOCTOR_NAME}`;
    return () => {
      document.title = `${DOCTOR_NAME} | Personal site`;
    };
  }, []);

  return (
    <>
      <JsonLd data={GIVING_LD} id="ld-giving" />
      <GivingHero />
      <StatStrip
        stats={GIVING_STATS}
        ariaLabel="By the numbers"
        className="border-t border-white/5"
      />
      <GivingEvents />
      <GivingPartners />
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
      <Link viewTransition
        to="/"
        className="group/back eyebrow inline-flex items-center gap-2 transition-colors hover:text-white"
      >
        <ArrowLeft
          aria-hidden="true"
          size={13}
          className="transition-transform group-hover/back:-translate-x-0.5"
        />
        Back to the personal site
      </Link>

      <p className="mt-10 eyebrow">Giving back</p>

      <h1
        id="giving-hero"
        className="mt-5 text-balance font-display font-medium"
        style={{
          fontSize: 'var(--text-display)',
          lineHeight: 1.05,
          letterSpacing: '-0.015em',
        }}
      >
        Supporting Australian{' '}
        <em className="font-display italic font-normal text-white/70">
          medical research.
        </em>
      </h1>

      <p
        className="mt-7 text-pretty leading-relaxed text-white/70"
        style={{ fontSize: 'var(--text-lede)' }}
      >
        {GIVING_INTRO}
      </p>

      <p
        className="mt-5 text-pretty font-display italic leading-relaxed text-white/70"
        style={{ fontSize: 'var(--text-meta)' }}
      >
        {GIVING_PLEDGE}
      </p>
    </div>
  </section>
);

const ACCENT_META: Record<
  GivingEvent['accent'],
  {
    icon: LucideIcon;
    ring: string;
    text: string;
    dot: string;
    chipGrad: string;
    chipText: string;
  }
> = {
  pink: {
    icon: Sparkles,
    ring: 'ring-pink-300/30',
    text: 'text-pink-300',
    dot: 'bg-pink-300',
    chipGrad: 'from-pink-500/20 via-pink-300/10 to-transparent',
    chipText: 'text-pink-200',
  },
  red: {
    icon: Heart,
    ring: 'ring-red-400/30',
    text: 'text-red-400',
    dot: 'bg-red-400',
    chipGrad: 'from-red-500/20 via-red-300/10 to-transparent',
    chipText: 'text-red-200',
  },
  neutral: {
    icon: Eye,
    ring: 'ring-white/20',
    text: 'text-white/85',
    dot: 'bg-white/85',
    chipGrad: 'from-white/10 via-white/5 to-transparent',
    chipText: 'text-white/85',
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
        title="Three Sydney charity events this year."
        intro="Each event funds research into conditions Prof Slater encounters in clinical practice. Contributions are non-monetary in-kind donations of HBOT sessions and Integrant skincare products."
        className="mb-12 md:mb-16"
      />

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {GIVING_EVENTS.map((e) => (
          <li key={e.id}>
            <EventCard event={e} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const EventCard = ({ event: e }: { event: GivingEvent }) => {
  const accent = ACCENT_META[e.accent];
  const Icon = accent.icon;

  return (
    <Card className="flex h-full flex-col overflow-hidden bg-white/[0.01] p-0">
      <EventHero event={e} />

      <div className="flex flex-1 flex-col gap-5 p-7 md:p-8">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={`flex h-10 w-10 items-center justify-center rounded-full glass ring-1 ${accent.ring}`}
          >
            <Icon size={16} strokeWidth={1.5} className={accent.text} />
          </span>
          <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
          {e.since && (
            <span
              className="ml-auto nums-tabular text-white/35"
              style={{
                fontSize: 'var(--text-eyebrow)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Since {e.since}
            </span>
          )}
        </div>

        <div>
          <h3
            className="font-display font-medium leading-tight text-white"
            style={{ fontSize: 'var(--text-title)', letterSpacing: '-0.012em' }}
          >
            {e.name}
          </h3>
          <p
            className="mt-2 leading-relaxed text-white/70"
            style={{ fontSize: 'var(--text-meta)' }}
          >
            {e.host}
          </p>
          {e.blurb && (
            <p
              className="mt-3 text-pretty leading-relaxed text-white/75"
              style={{ fontSize: 'var(--text-meta)' }}
            >
              {e.blurb}
            </p>
          )}
        </div>

        <dl className="mt-auto space-y-3 border-t border-white/5 pt-5">
          <div>
            <dt className="eyebrow">Supporting</dt>
            <dd
              className="mt-1 leading-relaxed text-white/80"
              style={{ fontSize: 'var(--text-meta)' }}
            >
              {e.cause}
              {e.beneficiary && (
                <>
                  {' '}
                  —{' '}
                  <span className="text-white/75">{e.beneficiary}</span>
                </>
              )}
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Contribution</dt>
            <dd
              className="mt-1 leading-relaxed text-white/80"
              style={{ fontSize: 'var(--text-meta)' }}
            >
              {e.contribution}
            </dd>
          </div>
        </dl>

        {e.eventUrl && (
          <a
            href={e.eventUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/learn inline-flex items-center gap-1.5 ${accent.chipText} transition-colors hover:text-white`}
            style={{
              fontSize: 'var(--text-eyebrow)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Learn more
            <ArrowUpRight
              aria-hidden="true"
              size={12}
              className="transition-transform group-hover/learn:translate-x-0.5 group-hover/learn:-translate-y-0.5"
            />
          </a>
        )}
      </div>
    </Card>
  );
};

const EventHero = ({ event: e }: { event: GivingEvent }) => {
  const accent = ACCENT_META[e.accent];

  if (e.heroBase) {
    return (
      <figure className="relative aspect-[16/10] overflow-hidden">
        <picture>
          <source
            type="image/webp"
            srcSet={`${e.heroBase}-800.webp 800w, ${e.heroBase}-1600.webp 1600w`}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          <img
            src={`${e.heroBase}.jpg`}
            alt={e.heroAlt ?? `${e.name} — event imagery`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </picture>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-bg via-brand-bg/40 to-brand-bg/10"
        />
        {e.logo && (
          <img
            src={e.logo}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute bottom-3 right-3 h-7 max-w-[40%] rounded-md bg-white/85 px-2 py-1 object-contain"
          />
        )}
      </figure>
    );
  }

  // Typographic chip fallback (used when no event imagery is available).
  return (
    <figure
      className={`relative aspect-[16/10] overflow-hidden bg-linear-to-br ${accent.chipGrad}`}
      aria-label={`${e.name} — host mark`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06),transparent_60%)]"
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3">
        <span
          className={`font-display font-medium italic ${accent.chipText}`}
          style={{
            fontSize: 'clamp(3rem, 7vw, 4.5rem)',
            letterSpacing: '0.08em',
            lineHeight: 1,
          }}
        >
          {e.hostMark ?? e.host.slice(0, 3).toUpperCase()}
        </span>
        <span
          className="text-white/60"
          style={{
            fontSize: 'var(--text-eyebrow)',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          {e.host}
        </span>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-bg via-transparent to-transparent"
      />
    </figure>
  );
};

const GivingPartners = () => {
  const partners = GIVING_EVENTS.filter((e) => e.logo);
  if (partners.length === 0) return null;

  return (
    <section aria-label="In support of" className="border-t border-white/5 px-6 py-14 md:py-16">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow text-center">In support of</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-10">
          {partners.map((p) => (
            <li key={p.id}>
              <a
                href={p.eventUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.beneficiary ?? p.host} — opens in a new tab`}
                className="flex h-16 items-center justify-center rounded-xl bg-white/90 px-5 opacity-80 transition-opacity hover:opacity-100 md:h-20 md:px-6"
              >
                <img
                  src={p.logo}
                  alt={p.beneficiary ?? p.host}
                  loading="lazy"
                  decoding="async"
                  className="h-9 w-auto max-w-[180px] object-contain md:h-11"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const GivingCloseSection = () => (
  <section
    aria-label="Closing note"
    className="relative overflow-hidden px-6 py-20 md:py-24"
  >
    <Glow className="bottom-0 left-1/2 -translate-x-1/2" color="teal" />
    <div className="relative mx-auto max-w-3xl text-center">
      <p
        className="text-pretty leading-relaxed text-white/75"
        style={{ fontSize: 'var(--text-lede)' }}
      >
        {GIVING_CLOSE}
      </p>
      <Link viewTransition
        to="/"
        className="group/back mt-12 inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
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
    </div>
  </section>
);
