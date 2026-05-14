import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { ARTICLES, BLOG_INDEX_URL } from '@/constants';

/**
 * Writing — featured-article + supporting grid.
 *
 * Reimagined per the Apple-grade brief:
 *  - The 3-card grid is preceded by a featured-article slot — large
 *    headline (Fraunces), category eyebrow, and a single outbound
 *    link. No card framing.
 *  - The supporting articles render as a quieter typographic list
 *    rather than glassy cards. Three cards become three rows of
 *    headline + category in inline meta.
 *  - "All articles →" affordance sits as a typographic link, not a
 *    glass pill.
 */
export const Writing = () => {
  const [featured, ...rest] = ARTICLES;
  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow">Writing &amp; commentary</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="writing-heading"
                className="mt-5 text-balance font-display font-medium"
                style={{
                  fontSize: 'var(--text-display)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.015em',
                }}
              >
                In his own{' '}
                <em className="font-display italic font-normal text-white/55">words.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p
                className="mt-6 max-w-xl text-pretty leading-relaxed text-white/65"
                style={{ fontSize: 'var(--text-lede)' }}
              >
                Long-form pieces on foot and ankle conditions, regenerative orthopaedics,
                and the research behind current practice.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <a
              href={BLOG_INDEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex w-fit items-center gap-1.5 text-white/65 transition-colors hover:text-medical-teal"
              style={{
                fontSize: 'var(--text-eyebrow)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              All articles
              <ArrowUpRight
                aria-hidden="true"
                size={13}
                className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>

        {/* Featured article — magazine-grade lead. */}
        {featured && (
          <Reveal delay={0.16}>
            <article className="mt-16 border-t border-white/10 pt-12 md:mt-20 md:pt-14">
              <p
                className="text-medical-teal/85"
                style={{
                  fontSize: 'var(--text-eyebrow)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                Featured &nbsp;·&nbsp; {featured.category}
              </p>
              <h3
                className="mt-5 max-w-3xl text-balance font-display font-medium"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.018em',
                }}
              >
                {featured.title}
              </h3>
              <a
                href={featured.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read "${featured.title}" on orthopaedic-surgeon.com.au (opens in a new tab)`}
                className="group/link mt-7 inline-flex items-center gap-1.5 text-white/55 transition-colors hover:text-medical-teal"
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
            </article>
          </Reveal>
        )}

        {/* Supporting articles — quiet typographic list. */}
        <ol className="mt-16 divide-y divide-white/5 border-t border-white/5 md:mt-20">
          {rest.map((article, i) => (
            <li key={article.id}>
              <Reveal delay={i * 0.04}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read "${article.title}" on orthopaedic-surgeon.com.au (opens in a new tab)`}
                  className="group/link flex flex-col gap-3 py-7 transition-colors hover:bg-white/[0.015] md:flex-row md:items-baseline md:justify-between md:gap-10 md:px-1"
                >
                  <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
                    <span
                      className="shrink-0 text-medical-teal/85"
                      style={{
                        fontSize: 'var(--text-eyebrow)',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        minWidth: '8rem',
                      }}
                    >
                      {article.category}
                    </span>
                    <h4
                      className="font-display font-medium leading-snug text-white/90 transition-colors group-hover/link:text-white"
                      style={{ fontSize: 'var(--text-title)', letterSpacing: '-0.01em' }}
                    >
                      {article.title}
                    </h4>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    size={16}
                    className="shrink-0 text-white/35 transition-all group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-medical-teal"
                  />
                </a>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
