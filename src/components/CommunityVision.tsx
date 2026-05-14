import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { PullQuote } from '@/components/ui/PullQuote';
import { COMMUNITY, VISION_STATEMENT } from '@/constants';

/**
 * CommunityVision — community contribution + the vision statement
 * as a full-width pull-quote.
 *
 * Reimagined per the Apple-grade brief:
 *  - The teal-gradient glassy figure that held the vision blockquote
 *    is removed. The vision now reads as a full-width pull-quote in
 *    Fraunces italic — typography on the page, not a card.
 *  - The community contribution list keeps its content but switches
 *    to flatter typographic rows (no glass cards).
 */
export const CommunityVision = () => {
  // The vision statement is long-form. We use its first sentence as
  // the headline pull-quote; the rest becomes attribution-style meta.
  const visionFirstSentence = VISION_STATEMENT.split('.')[0] + '.';

  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="border-y border-white/5 px-6 py-24 md:py-32"
      style={{ backgroundColor: 'var(--color-brand-panel)' }}
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Beyond the operating theatre</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="community-heading"
            className="mt-5 max-w-3xl text-balance font-display font-medium"
            style={{
              fontSize: 'var(--text-display)',
              lineHeight: 1.05,
              letterSpacing: '-0.015em',
            }}
          >
            Community &amp;{' '}
            <em className="font-display italic font-normal text-white/55">vision.</em>
          </h2>
        </Reveal>

        {/* The vision — full-width pull-quote moment. */}
        <div className="mt-16 md:mt-20">
          <PullQuote attribution="Anchored on Slater, Sambo & Hannan (2019) and the FDA–EMA Joint Guiding Principles of Good AI Practice (Jan 2026)">
            {visionFirstSentence}
          </PullQuote>
        </div>

        {/* Community contribution — flat typographic list. */}
        <div className="mt-20 border-t border-white/10 pt-12 md:mt-24">
          <Reveal>
            <p className="eyebrow">Community contribution</p>
          </Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
            {COMMUNITY.map((item, i) => {
              const isGiving = item.title === 'Supporting medical research';
              return (
                <li key={item.title}>
                  <Reveal delay={i * 0.03}>
                    <article>
                      <div className="flex items-baseline justify-between gap-3">
                        <h3
                          className="font-display font-medium text-white/90"
                          style={{
                            fontSize: '1.25rem',
                            lineHeight: 1.15,
                            letterSpacing: '-0.008em',
                          }}
                        >
                          {item.title}
                        </h3>
                        {item.placeholder && (
                          <span
                            className="shrink-0 text-white/30"
                            style={{
                              fontSize: 'var(--text-eyebrow)',
                              letterSpacing: '0.2em',
                              textTransform: 'uppercase',
                            }}
                          >
                            placeholder
                          </span>
                        )}
                      </div>
                      <p
                        className="mt-3 text-pretty leading-relaxed text-white/60"
                        style={{ fontSize: 'var(--text-body)' }}
                      >
                        {item.description}
                      </p>
                      {isGiving && (
                        <Link
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
        </div>
      </div>
    </section>
  );
};
