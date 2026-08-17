import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageShell } from '@/templates/PageShell';
import { PageHero } from '@/templates/PageHero';
import { Reveal } from '@/components/ui/Motion';
import { PullQuote } from '@/components/ui/PullQuote';
import { Timeline } from '@/components/ui/Timeline';
import { findRoute } from '@/lib/site';
import {
  CAREER_TIMELINE,
  COMMUNITY,
  DOCTOR_CREDENTIALS,
  DOCTOR_NAME,
  HOSPITAL_APPOINTMENTS,
  LEADERSHIP_ROLES,
  PRACTICE_URL,
  RECOGNITION,
  SCHOLAR_METRICS,
  VISION_STATEMENT,
} from '@/constants';

const TAGS = [
  'Professor, UTS',
  'Foot & ankle fellowship — Hospital for Special Surgery, New York',
  'Fellow, Royal Australasian College of Surgeons (Orthopaedics)',
  'Associate Editor, Foot & Ankle International',
];

/** Numbered story-section opener — the About page's chapter rhythm. */
const StoryHeading = ({
  id,
  number,
  title,
  italic,
}: {
  id: string;
  number: string;
  title: string;
  italic?: string;
}) => (
  <>
    <Reveal>
      <p className="eyebrow nums-tabular">
        <span className="text-medical-teal/90">{number}</span>
        <span aria-hidden="true" className="mx-2 text-white/30">·</span>
        {title}
      </p>
    </Reveal>
    <Reveal delay={0.05}>
      <h2
        id={id}
        className="mt-5 max-w-3xl text-balance font-display font-medium"
        style={{ fontSize: 'var(--text-display)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
      >
        {title}
        {italic && (
          <>
            {' '}
            <em className="font-display italic font-normal text-white/70">{italic}</em>
          </>
        )}
      </h2>
    </Reveal>
  </>
);

/**
 * /about — the story, not the CV.
 *
 * Structured as the brief's narrative arc:
 *   Origins → Medical Training → Research Journey → Innovation →
 *   Longevity Vision → Future Work
 * The career Timeline carries training and innovation milestones;
 * every claim traces to the data layer.
 */
const About = () => {
  const route = findRoute('/about');
  if (!route) return null; // unreachable — registered in SITE_ROUTES

  const training = CAREER_TIMELINE.filter((e) => e.era === 'training');
  const record = CAREER_TIMELINE.filter((e) => e.era !== 'training');

  return (
    <PageShell route={route}>
      {/* Origins — editorial spread, portrait left (sticky on desktop). */}
      <PageHero
        variant="photo-led"
        eyebrow="About · The story"
        title={
          <>
            A surgeon&rsquo;s record.{' '}
            <em className="font-display italic font-normal text-white/70">
              A scientist&rsquo;s questions.
            </em>
          </>
        }
        photo={{
          src: '/portrait-gordon-slater-about.webp?v=4',
          alt: `${DOCTOR_NAME}, foot and ankle orthopaedic surgeon`,
        }}
      >
        <Reveal>
          <div
            className="space-y-6 text-pretty leading-relaxed text-white/80"
            style={{ fontSize: 'var(--text-body)' }}
          >
            <p className="drop-cap">
              {DOCTOR_NAME} is an Australian orthopaedic surgeon with a thirty-year clinical record
              in foot &amp; ankle surgery, a growing body of peer-reviewed research, and active
              work in medical-device development. He was among the first surgeons in Australia to
              adopt minimally invasive techniques for the foot and ankle, and uses
              regenerative-medicine adjuncts where appropriate.
            </p>
            <p>
              The through-line of the work is a single question: how does the body repair itself —
              and how far can that capacity be extended? What began in the operating theatre now
              spans genomics, biologics, and the biology of aging.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            className="mt-8 text-pretty text-white/70"
            style={{ fontSize: 'var(--text-meta)' }}
          >
            For clinical care or to arrange an appointment, please see the practice site —{' '}
            <a
              href={PRACTICE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline gap-1 text-medical-teal underline-offset-4 transition-colors hover:underline"
            >
              orthopaedic-surgeon.com.au
              <ArrowUpRight aria-hidden="true" size={11} className="self-center" />
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <ul className="mt-12 flex flex-wrap gap-x-3 gap-y-2 border-t border-white/5 pt-8">
            {TAGS.map((tag) => (
              <li
                key={tag}
                className="rounded-full glass-thin px-3.5 py-1.5 text-white/80"
                style={{ fontSize: 'var(--text-meta)' }}
              >
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>
      </PageHero>

      {/* 01 · Medical Training — the timeline's first era. */}
      <section
        id="background"
        aria-labelledby="training-heading"
        className="px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-5xl">
          <StoryHeading id="training-heading" number="01" title="Medical training" italic="— the foundation." />
          <Reveal delay={0.1}>
            <p
              className="mt-6 max-w-2xl text-pretty leading-relaxed text-white/80"
              style={{ fontSize: 'var(--text-lede)' }}
            >
              From UNSW to the Hospital for Special Surgery in New York — a decade of training
              that ended where the questions began.
            </p>
          </Reveal>
          <div className="mt-16 md:mt-20">
            <Timeline entries={training} />
          </div>
        </div>
      </section>

      {/* 02 · Research Journey — collaborators + editorial standing. */}
      <section
        id="research-journey"
        aria-labelledby="research-journey-heading"
        className="border-t border-white/10 px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-5xl">
          <StoryHeading id="research-journey-heading" number="02" title="Research journey" italic="— the record in print." />
          <Reveal delay={0.1}>
            <div
              className="mt-8 max-w-2xl space-y-6 text-pretty leading-relaxed text-white/80"
              style={{ fontSize: 'var(--text-body)' }}
            >
              <p>
                His research sits inside a wider Sydney ecosystem. Regular collaborators include
                UNSW&rsquo;s Ramaciotti Centre for Genomics, the UTS Biologics Innovation Facility,
                the Garvan Institute, and the Westmead Institute for Medical Research — partners on
                the biomarker, methylation and biologics work behind the longevity and regeneration
                thesis.
              </p>
              <p>
                He contributes to the international literature as Associate Editor of{' '}
                <em>Foot &amp; Ankle International</em>, sits on the editorial panel of{' '}
                <em>EC Orthopaedics</em>, and chairs Foot &amp; Ankle for the Asia Pacific
                Orthopaedic Association.
              </p>
            </div>
          </Reveal>

          <ul className="mt-14 grid grid-cols-1 gap-y-6 border-t border-white/10 pt-10 md:grid-cols-2 md:gap-x-10">
            {LEADERSHIP_ROLES.map(({ role, org }, i) => (
              <li
                key={`${role}-${org}`}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-5"
              >
                <Reveal delay={i * 0.03}>
                  <span
                    aria-hidden="true"
                    className="block h-1.5 w-1.5 translate-y-[-3px] rounded-full bg-medical-teal/85"
                  />
                </Reveal>
                <Reveal delay={i * 0.03 + 0.02}>
                  <div>
                    <p
                      className="font-medium text-white/90"
                      style={{ fontSize: 'var(--text-body)' }}
                    >
                      {role}
                    </p>
                    <p className="mt-1 text-white/70" style={{ fontSize: 'var(--text-meta)' }}>
                      {org}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          {/* Scholar metrics + hospital appointments — quiet meta lines. */}
          <Reveal delay={0.12}>
            <p className="mt-10 text-brand-muted nums-tabular" style={{ fontSize: 'var(--text-meta)' }}>
              {SCHOLAR_METRICS.citations} citations on Google Scholar · h-index{' '}
              {SCHOLAR_METRICS.hIndex} · i10-index {SCHOLAR_METRICS.i10Index}
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-2 text-brand-muted" style={{ fontSize: 'var(--text-meta)' }}>
              Hospital appointments: {HOSPITAL_APPOINTMENTS.join(' · ')}
            </p>
          </Reveal>

          {/* Recognition — honors and named acknowledgements. */}
          <div className="mt-14 border-t border-white/10 pt-10">
            <Reveal>
              <p className="eyebrow">Recognition</p>
            </Reveal>
            <ul className="mt-8 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-10">
              {RECOGNITION.map((item, i) => (
                <li key={item.title} className="grid grid-cols-[auto_1fr] items-baseline gap-x-5">
                  <Reveal delay={i * 0.03}>
                    <span
                      aria-hidden="true"
                      className="block h-1.5 w-1.5 translate-y-[-3px] rounded-full bg-medical-teal/85"
                    />
                  </Reveal>
                  <Reveal delay={i * 0.03 + 0.02}>
                    <div>
                      <p className="font-medium text-white/90" style={{ fontSize: 'var(--text-body)' }}>
                        {item.title}
                      </p>
                      {item.detail && (
                        <p className="mt-1 text-white/70" style={{ fontSize: 'var(--text-meta)' }}>
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={0.16}>
            <Link
              viewTransition
              to="/research"
              className="group/link mt-12 inline-flex min-h-11 items-center gap-1.5 text-white/75 transition-colors hover:text-medical-teal"
              style={{
                fontSize: 'var(--text-eyebrow)',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Explore the research
              <ArrowRight
                aria-hidden="true"
                size={13}
                className="transition-transform group-hover/link:translate-x-0.5"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 03 · Innovation — the record's inflection points. */}
      <section
        id="innovation"
        aria-labelledby="innovation-heading"
        className="border-t border-white/10 px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-5xl">
          <StoryHeading id="innovation-heading" number="03" title="Innovation" italic="— from theatre to bench." />
          <Reveal delay={0.1}>
            <p
              className="mt-6 max-w-2xl text-pretty leading-relaxed text-white/80"
              style={{ fontSize: 'var(--text-lede)' }}
            >
              Eponymous techniques, named devices, a peptide patent — and a book that gathers
              thirty years of it into one argument.
            </p>
          </Reveal>
          <div className="mt-16 md:mt-20">
            <Timeline entries={record} />
          </div>
        </div>
      </section>

      {/* 04 · Longevity Vision — panel-toned, the thesis. */}
      <section
        id="beyond-the-clinic"
        aria-labelledby="vision-heading"
        className="border-t border-white/10 px-6 py-24 md:py-32"
        style={{ backgroundColor: 'var(--color-brand-panel)' }}
      >
        <div className="mx-auto max-w-5xl">
          <StoryHeading id="vision-heading" number="04" title="Longevity vision" italic="— the thesis." />

          <div className="mt-14 md:mt-16">
            <PullQuote attribution="Anchored on Slater, Sambo & Hannan (2019) and the FDA–EMA Joint Guiding Principles of Good AI Practice (Jan 2026)">
              {VISION_STATEMENT.split('.')[0]! + '.'}
            </PullQuote>
          </div>

          <Reveal delay={0.1}>
            <p
              className="mt-12 max-w-3xl text-pretty leading-relaxed text-white/80"
              style={{ fontSize: 'var(--text-body)' }}
            >
              {VISION_STATEMENT.split('.').slice(1).join('.').trim()}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 05 · Future Work — community contribution + what's next. */}
      <section
        id="future-work"
        aria-labelledby="future-heading"
        className="border-t border-white/10 px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-5xl">
          <StoryHeading id="future-heading" number="05" title="Future work" italic="— beyond the theatre." />
          <ul className="mt-14 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
            {COMMUNITY.map((item, i) => {
              const isGiving = item.title === 'Supporting medical research';
              return (
                <li key={item.title}>
                  <Reveal delay={i * 0.03}>
                    <article>
                      <h3
                        className="font-display font-medium text-white/90"
                        style={{
                          fontSize: 'var(--text-title)',
                          lineHeight: 1.15,
                          letterSpacing: '-0.008em',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="mt-3 text-pretty leading-relaxed text-white/75"
                        style={{ fontSize: 'var(--text-body)' }}
                      >
                        {item.description}
                      </p>
                      {isGiving && (
                        <Link
                          viewTransition
                          to="/giving"
                          className="group/link mt-4 inline-flex items-center gap-1.5 text-medical-teal/85 transition-colors hover:text-medical-teal"
                          style={{
                            fontSize: 'var(--text-eyebrow)',
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                            fontWeight: 600,
                          }}
                        >
                          See more
                          <ArrowRight
                            aria-hidden="true"
                            size={13}
                            className="transition-transform group-hover/link:translate-x-0.5"
                          />
                        </Link>
                      )}
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
          <Reveal delay={0.16}>
            <p className="mt-12 text-white/70" style={{ fontSize: 'var(--text-meta)' }}>
              Presents at international surgical conferences. {DOCTOR_CREDENTIALS}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Closing — in Slater's voice. */}
      <section aria-label="Ethos" className="px-6 py-20 md:py-28">
        <PullQuote align="center" width="wide" attribution="Chaos to Creation, p. 222">
          Biology is too complex to be fully captured in one equation.
        </PullQuote>
      </section>
    </PageShell>
  );
};

export default About;
