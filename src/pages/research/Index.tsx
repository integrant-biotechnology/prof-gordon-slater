import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { PullQuote } from '@/components/ui/PullQuote';
import { PageShell } from '@/templates/PageShell';
import { PageHero } from '@/templates/PageHero';
import { ICONS } from '@/lib/icons';
import { findRoute } from '@/lib/site';
import {
  FULL_PUBLICATIONS,
  INNOVATIONS,
  RESEARCH_THEMES,
} from '@/constants';

/**
 * /research — structured editorial hub.
 *
 * Page character (plan §B): structured editorial — six themes as
 * numbered sections (1 through 6) using a ChapterMark register;
 * pull-quote interstitial between themes 3 and 4; publications and
 * innovations strips at the foot of the page.
 *
 * Per-theme deep pages (/research/themes/[slug]) are deferred until
 * each theme has bespoke 400+ word content — the plan trades 6 thin
 * pages for 1 rich page.
 */

/** Three most-recent publications shown inline in each theme section. */
const samplePapersFor = (slug: string) =>
  FULL_PUBLICATIONS
    .filter((p) => p.theme === slug)
    .slice()
    .reverse()
    .slice(0, 3);

/** Total corpus per theme — drives the per-theme "All …" links. */
const countFor = (slug: string) => FULL_PUBLICATIONS.filter((p) => p.theme === slug).length;

const Research = () => {
  const route = findRoute('/research');
  if (!route) return null;

  // Five most-recent publications for the strip near the page foot.
  const recent = FULL_PUBLICATIONS.slice().reverse().slice(0, 5);

  return (
    <PageShell route={route}>
      <PageHero
        variant="type-only"
        eyebrow="Research"
        title={
          <>
            A wider body{' '}
            <em className="font-display italic font-normal text-white/70">of work.</em>
          </>
        }
        lede="More than fifty peer-reviewed papers, 1993–2026, across six themes — from foot &amp; ankle surgery and orthobiologics to hyperbaric oxygen therapy, aging biology, and AI in medicine."
      />

      {/* Six themes as numbered editorial sections (ChapterMark register).
          A pull-quote interstitial lands between themes 3 and 4. */}
      <section
        aria-label="Research themes"
        className="px-6 pb-16 md:pb-24"
      >
        <div className="mx-auto max-w-5xl">
          <ol className="space-y-24 md:space-y-32">
            {RESEARCH_THEMES.map((theme, i) => {
              const Icon = ICONS[theme.icon];
              const papers = samplePapersFor(theme.slug);
              const isPivot = i === 3; // pull-quote runs before theme #4
              return (
                <li
                  key={theme.slug}
                  id={theme.slug}
                  className="scroll-mt-28 grid grid-cols-1 gap-10 md:grid-cols-[8rem_1fr] md:gap-16"
                >
                  {isPivot && (
                    <div className="md:col-span-2 -mt-12 mb-12 md:-mt-20 md:mb-20">
                      <PullQuote
                        align="center"
                        width="wide"
                        attribution="Slater, Sambo &amp; Hannan · 2019"
                      >
                        The future of medicine is biologics and artificial intelligence.
                      </PullQuote>
                    </div>
                  )}
                  <Reveal>
                    <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-5">
                      <p
                        className="font-display italic text-medical-teal/85 nums-tabular"
                        style={{ fontSize: 'var(--text-title)', letterSpacing: '-0.02em' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </p>
                      <span
                        aria-hidden="true"
                        className="flex h-11 w-11 items-center justify-center rounded-2xl glass-thin text-white/75"
                      >
                        <Icon size={18} strokeWidth={1.5} />
                      </span>
                    </div>
                  </Reveal>
                  <div>
                    <Reveal delay={0.04}>
                      <h2
                        className="font-display font-medium"
                        style={{
                          fontSize: 'var(--text-title)',
                          lineHeight: 1.1,
                          letterSpacing: '-0.012em',
                        }}
                      >
                        {theme.title}
                      </h2>
                    </Reveal>
                    <Reveal delay={0.08}>
                      <p
                        className="mt-4 max-w-2xl text-pretty leading-relaxed text-white/75"
                        style={{ fontSize: 'var(--text-body)' }}
                      >
                        {theme.summary}
                      </p>
                    </Reveal>
                    {papers.length > 0 && (
                      <Reveal delay={0.14}>
                        <ul className="mt-7 space-y-2.5 border-t border-white/10 pt-6">
                          {papers.map((p, j) => (
                            <li
                              key={`${theme.slug}-${j}`}
                              className="flex items-baseline justify-between gap-6"
                            >
                              <p
                                className="font-display font-medium leading-snug text-white/85"
                                style={{ fontSize: 'var(--text-meta)', letterSpacing: '-0.005em' }}
                              >
                                {p.title}
                              </p>
                              <p
                                className="shrink-0 italic text-white/60 nums-tabular"
                                style={{ fontSize: 'var(--text-eyebrow)', letterSpacing: '0.04em' }}
                              >
                                {p.year}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </Reveal>
                    )}
                    {countFor(theme.slug) > 0 && (
                      <Reveal delay={0.18}>
                        <Link
                          viewTransition
                          to={`/research/publications?theme=${theme.slug}`}
                          className="group/theme-link mt-6 inline-flex min-h-11 items-center gap-1.5 text-white/75 transition-colors hover:text-medical-teal"
                          style={{
                            fontSize: 'var(--text-eyebrow)',
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                            fontWeight: 600,
                          }}
                        >
                          All {countFor(theme.slug)} publication{countFor(theme.slug) === 1 ? '' : 's'} in this theme
                          <ArrowRight
                            aria-hidden="true"
                            size={13}
                            className="transition-transform group-hover/theme-link:translate-x-0.5"
                          />
                        </Link>
                      </Reveal>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Publications strip — 5 most-recent + "All publications →". */}
      <section
        aria-label="Recent publications"
        className="border-t border-white/10 px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Recent publications</p>
                <h3
                  className="mt-4 font-display font-medium"
                  style={{
                    fontSize: 'var(--text-title)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.012em',
                  }}
                >
                  Latest five.
                </h3>
              </div>
              <Link viewTransition
                to="/research/publications"
                className="group/link inline-flex items-center gap-1.5 text-white/75 transition-colors hover:text-medical-teal"
                style={{
                  fontSize: 'var(--text-eyebrow)',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                All publications
                <ArrowRight
                  aria-hidden="true"
                  size={13}
                  className="transition-transform group-hover/link:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>
          <ol className="mt-10 divide-y divide-white/5">
            {recent.map((p, i) => (
              <li
                key={`recent-${i}`}
                className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <Reveal delay={i * 0.02} as="span" className="block flex-1">
                  <p
                    className="font-display font-medium leading-snug text-white/90"
                    style={{ fontSize: '1.0625rem', letterSpacing: '-0.005em' }}
                  >
                    {p.title}
                  </p>
                  {p.venue && (
                    <p
                      className="mt-1 italic text-white/60"
                      style={{ fontSize: 'var(--text-meta)' }}
                    >
                      {p.venue}
                    </p>
                  )}
                </Reveal>
                <Reveal delay={i * 0.02 + 0.02} as="span" className="block shrink-0">
                  <p
                    className="italic text-white/60 nums-tabular"
                    style={{ fontSize: 'var(--text-meta)' }}
                  >
                    {p.year}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Innovations strip — patents, named devices, named techniques. */}
      <section
        aria-label="Innovations"
        className="border-t border-white/10 px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="eyebrow">Innovations</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h3
              className="mt-4 font-display font-medium"
              style={{
                fontSize: 'var(--text-title)',
                lineHeight: 1.1,
                letterSpacing: '-0.012em',
              }}
            >
              Patents, devices, named techniques.
            </h3>
          </Reveal>
          <ol className="mt-10 space-y-10">
            {INNOVATIONS.map((item, i) => (
              <li key={item.id}>
                <Reveal delay={i * 0.03}>
                  <article>
                    <p
                      className="text-medical-teal/85"
                      style={{
                        fontSize: 'var(--text-eyebrow)',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                      }}
                    >
                      {item.kind === 'patent'
                        ? 'Patent'
                        : item.kind === 'device'
                          ? 'Named device'
                          : 'Named technique'}
                      {item.identifier && (
                        <>
                          <span aria-hidden="true" className="mx-2 text-white/30">·</span>
                          <span className="nums-tabular">{item.identifier}</span>
                        </>
                      )}
                      <span aria-hidden="true" className="mx-2 text-white/30">·</span>
                      <span className="nums-tabular">{item.year}</span>
                    </p>
                    <h4
                      className="mt-3 font-display font-medium"
                      style={{
                        fontSize: 'var(--text-title)',
                        lineHeight: 1.15,
                        letterSpacing: '-0.008em',
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="mt-3 max-w-2xl text-pretty leading-relaxed text-white/75"
                      style={{ fontSize: 'var(--text-body)' }}
                    >
                      {item.body}
                    </p>
                    {item.href && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link mt-4 inline-flex items-center gap-1.5 text-white/75 transition-colors hover:text-medical-teal"
                        style={{
                          fontSize: 'var(--text-eyebrow)',
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          fontWeight: 600,
                        }}
                      >
                        Reference
                        <ArrowUpRight
                          aria-hidden="true"
                          size={13}
                          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </a>
                    )}
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
};

export default Research;
