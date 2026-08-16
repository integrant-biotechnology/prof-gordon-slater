import { Reveal } from '@/components/ui/Motion';
import { PullQuote } from '@/components/ui/PullQuote';
import { PageShell } from '@/templates/PageShell';
import { PageHero } from '@/templates/PageHero';
import { findRoute } from '@/lib/site';
import { BOOK_RULES, LIFE_FORCE } from '@/constants';

/**
 * /book/three-rules — promoted Three Rules deep-dive.
 *
 * Page character (plan §B): ChapterMark-led editorial; oversized
 * Fraunces-italic numerals as the visual anchor; each rule fades +
 * slides up on scroll.
 *
 * Closes with the Life Force Formula in display register — the
 * mathematical statement of the same argument.
 */
const ThreeRules = () => {
  const route = findRoute('/book/three-rules');
  if (!route) return null;

  return (
    <PageShell route={route}>
      <PageHero
        variant="type-only"
        kicker="The Book / Three Rules"
        eyebrow="Verbatim, book p. 221"
        title={
          <>
            The Three{' '}
            <em className="font-display italic font-normal text-white/70">Rules.</em>
          </>
        }
        lede="The three claims the rest of Chaos to Creation rests on — degeneration, inertia, energy balance. Stated verbatim, as the spine of the Life Force argument."
      />

      {/* Each rule as a numbered editorial section, generous whitespace. */}
      <section
        aria-label="The Three Rules"
        className="px-6 pb-16 md:pb-24"
      >
        <div className="mx-auto max-w-3xl">
          <ol className="space-y-24 md:space-y-32">
            {BOOK_RULES.map((rule, i) => (
              <li key={rule.number}>
                <Reveal delay={i * 0.08}>
                  <article>
                    <p
                      className="font-display italic text-medical-teal nums-tabular"
                      style={{
                        fontSize: 'var(--text-hero)',
                        lineHeight: 0.85,
                        letterSpacing: '-0.025em',
                      }}
                    >
                      {String(rule.number).padStart(2, '0')}
                    </p>
                    <h2
                      className="mt-8 text-balance font-display font-medium"
                      style={{
                        fontSize: 'var(--text-display)',
                        lineHeight: 1.05,
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {rule.title}
                    </h2>
                    <blockquote
                      className="mt-8 text-pretty font-display italic leading-relaxed text-white/85"
                      style={{ fontSize: 'var(--text-lede)' }}
                    >
                      <span aria-hidden="true" className="mr-1 text-white/30">
                        &ldquo;
                      </span>
                      {rule.quote}
                      <span aria-hidden="true" className="ml-0.5 text-white/30">
                        &rdquo;
                      </span>
                    </blockquote>
                    <p className="mt-6 eyebrow text-white/60">{rule.attribution}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing — the Life Force Formula as the mathematical
          restatement of the third rule. */}
      <section
        aria-label="The Life Force Formula"
        className="border-t border-white/10 px-6 py-24 md:py-32"
        style={{ backgroundColor: 'var(--color-brand-panel)' }}
      >
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="eyebrow text-medical-teal/85">Appendix · pp. 220–226</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mt-5 text-balance font-display font-medium"
              style={{
                fontSize: 'var(--text-title)',
                lineHeight: 1.1,
                letterSpacing: '-0.012em',
              }}
            >
              The same argument,{' '}
              <em className="font-display italic font-normal text-white/70">
                in one expression.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div
              role="img"
              aria-label={`Life Force Formula: ${LIFE_FORCE.plain}`}
              className="mt-12 mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-3xl glass-thick px-6 py-12 font-display text-white sm:text-4xl md:px-14 md:text-5xl"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
            >
              <span>
                L<sup className="text-[0.55em]">F</sup>
              </span>
              <span className="text-white/60">=</span>
              <span className="italic">Ē</span>
              <span className="text-white/30 text-[1.4em] leading-none">(</span>
              <span className="inline-flex flex-col items-center text-[0.78em] leading-tight">
                <span>R − D</span>
                <span aria-hidden="true" className="my-1 h-px w-full min-w-[3.5rem] bg-white/45" />
                <span>I</span>
              </span>
              <span className="text-white/30 text-[1.4em] leading-none">)</span>
              <span className="text-white/60">+</span>
              <span>
                S<sub className="text-[0.45em]">Addition</sub>
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <p
              className="mt-12 max-w-3xl mx-auto text-pretty text-center font-display italic leading-relaxed text-white/75"
              style={{ fontSize: 'var(--text-lede)' }}
            >
              <span className="not-italic text-white/60 mr-2">Reading.</span>
              {LIFE_FORCE.reading}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Final pull-quote — Rule 3, the closing line. */}
      <section aria-label="Closing" className="px-6 py-24 md:py-32">
        <PullQuote
          align="center"
          width="wide"
          attribution="Chaos to Creation, p. 221 — Rule 3"
        >
          Lifespan is an energy balance, not a clock.
        </PullQuote>
      </section>
    </PageShell>
  );
};

export default ThreeRules;
