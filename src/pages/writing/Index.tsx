import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { PageShell } from '@/templates/PageShell';
import { PageHero } from '@/templates/PageHero';
import { findRoute } from '@/lib/site';
import { ARTICLES, BLOG_INDEX_URL } from '@/constants';

/**
 * /writing — magazine table-of-contents.
 *
 * Page character (plan §B): magazine TOC register; rows of category
 * eyebrow + title + outbound chevron. No photos.
 *
 * Content gap (acknowledged in plan §M): today every article links
 * out — none has `body` populated. Hosted essays land in a later
 * content PR. Index reads as N outbound rows until then.
 */
const WritingIndex = () => {
  const route = findRoute('/writing');
  if (!route) return null;

  // Internal hosted (has slug + body) come first; external link-out rest.
  // Both lists today are entirely external; the partition is forward-ready.
  const hosted = ARTICLES.filter((a) => a.slug);
  const external = ARTICLES.filter((a) => !a.slug);

  return (
    <PageShell route={route}>
      <PageHero
        variant="type-only"
        eyebrow="Writing"
        title={
          <>
            Essays at the intersection of surgery, science,{' '}
            <em className="font-display italic font-normal text-white/55">
              and regeneration.
            </em>
          </>
        }
        lede="Long-form pieces — some hosted here, some on the practice site. Foot &amp; ankle conditions, regenerative orthopaedics, and the research behind current practice."
      />

      {/* Hosted essays — internal links. Empty today; forward-ready. */}
      {hosted.length > 0 && (
        <section
          aria-label="Hosted essays"
          className="px-6 pb-16 md:pb-24"
        >
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <p className="eyebrow">Hosted</p>
            </Reveal>
            <ol className="mt-8 divide-y divide-white/10">
              {hosted.map((article, i) => (
                <li key={article.id}>
                  <Reveal delay={i * 0.04}>
                    <Link
                      to={`/writing/${article.slug}`}
                      className="group/row flex flex-col gap-3 py-7 transition-colors hover:bg-white/[0.015] md:flex-row md:items-baseline md:justify-between md:gap-10"
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
                        <h2
                          className="font-display font-medium leading-snug text-white/90 transition-colors group-hover/row:text-white"
                          style={{ fontSize: 'var(--text-title)', letterSpacing: '-0.01em' }}
                        >
                          {article.title}
                        </h2>
                      </div>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* External — published on the practice site. */}
      <section
        aria-label="On the practice site"
        className={
          hosted.length > 0
            ? 'border-t border-white/10 px-6 py-16 md:py-24'
            : 'px-6 pb-16 md:pb-24'
        }
      >
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="eyebrow">On the practice site</p>
          </Reveal>
          <ol className="mt-8 divide-y divide-white/5">
            {external.map((article, i) => (
              <li key={article.id}>
                <Reveal delay={i * 0.04}>
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read "${article.title}" on orthopaedic-surgeon.com.au (opens in a new tab)`}
                    className="group/row flex flex-col gap-3 py-7 transition-colors hover:bg-white/[0.015] md:flex-row md:items-baseline md:justify-between md:gap-10"
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
                      <h2
                        className="font-display font-medium leading-snug text-white/90 transition-colors group-hover/row:text-white"
                        style={{ fontSize: 'var(--text-title)', letterSpacing: '-0.01em' }}
                      >
                        {article.title}
                      </h2>
                    </div>
                    <ArrowUpRight
                      aria-hidden="true"
                      size={16}
                      className="shrink-0 text-white/35 transition-all group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5 group-hover/row:text-medical-teal"
                    />
                  </a>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={0.3}>
            <a
              href={BLOG_INDEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-12 inline-flex items-center gap-1.5 text-white/65 transition-colors hover:text-medical-teal"
              style={{
                fontSize: 'var(--text-eyebrow)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              More in the news
              <ArrowUpRight
                aria-hidden="true"
                size={13}
                className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
};

export default WritingIndex;
