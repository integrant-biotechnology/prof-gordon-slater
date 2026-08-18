import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PageShell } from '@/templates/PageShell';
import { PageHero } from '@/templates/PageHero';
import { EditorialCard } from '@/components/ui/EditorialCard';
import { Reveal } from '@/components/ui/Motion';
import { findRoute } from '@/lib/site';
import { ARTICLES, BLOG_INDEX_URL, BOOK_PRESS_URL, MEDIA, SPEAKING } from '@/constants';

/**
 * /writing — magazine presentation.
 *
 * Featured article as a full-width editorial moment, category filter
 * chips, then the remaining pieces as a two-column card grid. All
 * articles currently live on the practice blog, so every card is an
 * outbound link with the ↗ affordance. Speaking & media sections are
 * render-gated on the (currently empty) engagements data.
 */
const Writing = () => {
  const route = findRoute('/writing');
  const [filter, setFilter] = useState<string>('all');

  const categories = useMemo(
    () => ['all', ...Array.from(new Set(ARTICLES.map((a) => a.category)))],
    [],
  );

  const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0]!;
  const rest = useMemo(
    () =>
      ARTICLES.filter((a) => a.id !== featured.id).filter((a) =>
        filter === 'all' ? true : a.category === filter,
      ),
    [featured.id, filter],
  );
  const featuredVisible = filter === 'all' || featured.category === filter;

  if (!route) return null;

  return (
    <PageShell route={route}>
      <PageHero
        variant="type-only"
        eyebrow="Writing"
        title={
          <>
            Essays &amp;{' '}
            <em className="font-display italic font-normal text-white/70">insights.</em>
          </>
        }
        lede="Clinical writing for a general readership — regenerative medicine, the diabetic foot, and where orthopaedics is heading. Published on the practice blog; collected here."
      />

      {/* Topic filter — accessible chip row. */}
      <section aria-label="Filter by topic" className="px-6 pb-4">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <ul className="flex flex-wrap gap-2.5">
              {categories.map((cat) => {
                const active = filter === cat;
                return (
                  <li key={cat}>
                    <button
                      type="button"
                      aria-pressed={active}
                      onClick={() => setFilter(cat)}
                      className={
                        active
                          ? 'inline-flex min-h-11 items-center rounded-full bg-medical-teal px-5 font-semibold transition-colors'
                          : 'inline-flex min-h-11 items-center rounded-full glass-thin px-5 text-white/80 transition-colors hover:text-white'
                      }
                      style={{
                        fontSize: 'var(--text-meta)',
                        ...(active ? { color: 'var(--color-brand-bg)' } : {}),
                      }}
                    >
                      {cat === 'all' ? 'All topics' : cat}
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Featured article — the magazine cover story. */}
      {featuredVisible && (
        <section aria-label="Featured article" className="px-6 pt-12 pb-4 md:pt-16">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <EditorialCard
                href={featured.href}
                kicker={`Featured · ${featured.category}`}
                title={featured.title}
                body={featured.lede}
                meta="orthopaedic-surgeon.com.au"
                cta="Read the article"
                size="lg"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* Remaining pieces — two-column editorial grid. */}
      <section aria-label="All articles" className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          {rest.length > 0 ? (
            <ul className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">
              {rest.map((article, i) => (
                <li key={article.id}>
                  <Reveal delay={(i % 2) * 0.06}>
                    <EditorialCard
                      href={article.href}
                      kicker={article.category}
                      title={article.title}
                      body={article.lede}
                      cta="Read"
                    />
                  </Reveal>
                </li>
              ))}
            </ul>
          ) : (
            !featuredVisible && (
              <p className="text-white/70">No articles in this topic yet.</p>
            )
          )}
        </div>
      </section>

      {/* Speaking & media — render-gated until real entries exist. */}
      {SPEAKING.length > 0 && (
        <section aria-label="Speaking" className="border-t border-white/10 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow">Speaking</p>
            <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
              {SPEAKING.map((talk) => (
                <li key={`${talk.title}-${talk.year}`}>
                  <EditorialCard
                    href={talk.href}
                    kicker={`${talk.venue} · ${talk.year}`}
                    title={talk.title}
                    cta={talk.href ? 'Watch' : undefined}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {MEDIA.length > 0 && (
        <section aria-label="Media" className="border-t border-white/10 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow">Media</p>
            <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
              {MEDIA.map((mention) => (
                <li key={`${mention.title}-${mention.year}`}>
                  <EditorialCard
                    href={mention.href}
                    kicker={`${mention.outlet} · ${mention.year}`}
                    title={mention.title}
                    cta={mention.href ? 'Read' : undefined}
                  />
                </li>
              ))}
            </ul>
            <Reveal>
              <a
                href={BOOK_PRESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/kit mt-12 inline-flex min-h-11 items-center gap-1.5 text-white/75 transition-colors hover:text-medical-teal"
                style={{
                  fontSize: 'var(--text-eyebrow)',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                Press &amp; media kit — chaostocreation.com.au
                <ArrowUpRight
                  aria-hidden="true"
                  size={14}
                  className="transition-transform group-hover/kit:translate-x-0.5 group-hover/kit:-translate-y-0.5"
                />
              </a>
            </Reveal>
          </div>
        </section>
      )}

      {/* Outro — everything else lives on the practice blog. */}
      <section aria-label="More writing" className="border-t border-white/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <a
              href={BLOG_INDEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/more inline-flex min-h-11 items-center gap-1.5 text-white/75 transition-colors hover:text-medical-teal"
              style={{
                fontSize: 'var(--text-eyebrow)',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              More in the news — orthopaedic-surgeon.com.au
              <ArrowUpRight
                aria-hidden="true"
                size={14}
                className="transition-transform group-hover/more:translate-x-0.5 group-hover/more:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
};

export default Writing;
