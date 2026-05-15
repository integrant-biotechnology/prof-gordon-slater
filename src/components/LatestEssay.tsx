import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { ARTICLES } from '@/constants';

/**
 * LatestEssay — single-article teaser for the home page.
 *
 * Replaces the full <Writing /> section on home with a quieter,
 * typographic teaser pointing at the most recent essay. Tone:
 * one article, one CTA. The full magazine TOC lives at /writing.
 *
 * Content gap: today the article links out (orthopaedic-surgeon.com.au)
 * because no ARTICLES entry has `body` + `slug`. When hosted essays
 * land, the CTA switches to an internal /writing/:slug link.
 */
export const LatestEssay = () => {
  const latest = ARTICLES[0];
  if (!latest) return null;

  const isHosted = Boolean(latest.slug);

  return (
    <section
      id="writing-spotlight"
      aria-labelledby="latest-essay-heading"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow">Latest essay</p>
        </Reveal>
        <Reveal delay={0.05}>
          <p
            className="mt-4 text-medical-teal/85"
            style={{
              fontSize: 'var(--text-eyebrow)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            {latest.category}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            id="latest-essay-heading"
            className="mt-5 max-w-3xl text-balance font-display font-medium"
            style={{
              fontSize: 'var(--text-display)',
              lineHeight: 1.05,
              letterSpacing: '-0.015em',
            }}
          >
            {latest.title}
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            {isHosted ? (
              <Link viewTransition
                to={`/writing/${latest.slug}`}
                className="group/link inline-flex items-center gap-1.5 text-white/85 transition-colors hover:text-medical-teal"
                style={{
                  fontSize: 'var(--text-eyebrow)',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                Read
                <ArrowRight
                  aria-hidden="true"
                  size={13}
                  className="transition-transform group-hover/link:translate-x-0.5"
                />
              </Link>
            ) : (
              <a
                href={latest.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read "${latest.title}" on orthopaedic-surgeon.com.au (opens in a new tab)`}
                className="group/link inline-flex items-center gap-1.5 text-white/85 transition-colors hover:text-medical-teal"
                style={{
                  fontSize: 'var(--text-eyebrow)',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                Read on orthopaedic-surgeon.com.au
                <ArrowUpRight
                  aria-hidden="true"
                  size={13}
                  className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </a>
            )}
            <Link viewTransition
              to="/writing"
              className="group/link inline-flex items-center gap-1.5 text-white/55 transition-colors hover:text-white/85"
              style={{
                fontSize: 'var(--text-eyebrow)',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              All writing
              <ArrowRight
                aria-hidden="true"
                size={13}
                className="transition-transform group-hover/link:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
