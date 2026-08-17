import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PageShell } from '@/templates/PageShell';
import { PageHero } from '@/templates/PageHero';
import { ListTemplate, type ListFilter } from '@/templates/ListTemplate';
import { JsonLd } from '@/templates/JsonLd';
import { Reveal } from '@/components/ui/Motion';
import { findRoute } from '@/lib/site';
import { siteUrl } from '@/lib/site-origin';
import { BOOK_CHAPTERS, FULL_PUBLICATIONS, RESEARCH_THEMES } from '@/constants';
import type { Publication } from '@/types';

/** "2026" → "2020s" — grouping key for the editorial era dividers. */
const decadeOf = (p: Publication) => `${Math.floor(Number(p.year ?? 0) / 10) * 10}s`;

const DECADE_ORDER = ['2020s', '2010s', '2000s', '1990s'];

const PUBLICATIONS_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Selected peer-reviewed publications by Prof Gordon Slater',
  url: siteUrl('/research/publications'),
  itemListElement: FULL_PUBLICATIONS.slice()
    .reverse()
    .map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'ScholarlyArticle',
        headline: p.title,
        ...(p.venue && { publisher: p.venue }),
        ...(p.year && { datePublished: p.year }),
        author: { '@type': 'Person', name: 'Prof Gordon Slater' },
      },
    })),
};

/**
 * /research/publications — full publications listing.
 *
 * Page character (plan §B): pure typographic, no photos. Search
 * field + filter chips for the six themes. Listed newest-first.
 *
 * Today 24 papers ship; the remaining ~36 land in a content PR.
 */
const Publications = () => {
  const route = findRoute('/research/publications');
  const [searchParams] = useSearchParams();
  // Deep-links from /research theme sections preselect their filter
  // via ?theme=<slug>; unknown slugs fall back to "all".
  const themeParam = searchParams.get('theme');
  const initialFilter =
    themeParam && RESEARCH_THEMES.some((t) => t.slug === themeParam) ? themeParam : 'all';
  const [filter, setFilter] = useState<string>(initialFilter);
  const [query, setQuery] = useState<string>('');

  const filters: ListFilter[] = useMemo(
    () => [
      { label: `All (${FULL_PUBLICATIONS.length})`, value: 'all' },
      ...RESEARCH_THEMES.map((t) => ({
        label: `${t.title} (${FULL_PUBLICATIONS.filter((p) => p.theme === t.slug).length})`,
        value: t.slug,
      })),
    ],
    [],
  );

  // Newest-first, then filter + search.
  const items = useMemo<Publication[]>(() => {
    const q = query.trim().toLowerCase();
    return FULL_PUBLICATIONS.slice()
      .reverse()
      .filter((p) => (filter === 'all' ? true : p.theme === filter))
      .filter((p) =>
        q === ''
          ? true
          : `${p.title} ${p.venue ?? ''} ${p.year ?? ''}`.toLowerCase().includes(q),
      );
  }, [filter, query]);

  if (!route) return null;

  const activeThemeTitle =
    filter === 'all' ? null : RESEARCH_THEMES.find((t) => t.slug === filter)?.title;
  const resultsLabel = [
    `${items.length} paper${items.length === 1 ? '' : 's'}`,
    activeThemeTitle,
    query.trim() ? `matching “${query.trim()}”` : null,
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <PageShell route={route}>
      <JsonLd data={PUBLICATIONS_LD} id="ld-publications" />
      <PageHero
        variant="type-only"
        kicker="Research / Publications"
        eyebrow="Peer-reviewed"
        title={
          <>
            {FULL_PUBLICATIONS.length} peer-reviewed papers ·{' '}
            <em className="font-display italic font-normal text-white/70">
              1993–2026.
            </em>
          </>
        }
        lede="Search across all titles and venues; filter by theme. Linked titles open the paper's DOI record at doi.org."
      />

      <section aria-label="Publications" className="px-6 pb-24 md:pb-32">
        <ListTemplate
          items={items}
          searchable
          searchValue={query}
          onSearchChange={setQuery}
          searchPlaceholder="Search titles, venues, years…"
          filters={filters}
          activeFilter={filter}
          onFilterChange={setFilter}
          emptyState="No publications match this filter and search."
          resultsLabel={resultsLabel}
          groupBy={decadeOf}
          groupOrder={DECADE_ORDER}
          renderItem={(p, i) => (
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <div className="flex-1">
                <p
                  className="font-display font-medium leading-snug text-white/90"
                  style={{ fontSize: '1.0625rem', letterSpacing: '-0.005em' }}
                >
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} (opens DOI record at doi.org)`}
                      className="group/link inline-flex items-baseline gap-1.5 underline-offset-4 transition-colors hover:text-white hover:underline"
                    >
                      {p.title}
                      <ArrowUpRight
                        aria-hidden="true"
                        size={11}
                        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                  ) : (
                    p.title
                  )}
                </p>
                {p.venue && (
                  <p
                    className="mt-1 italic text-white/60"
                    style={{ fontSize: 'var(--text-meta)' }}
                  >
                    {p.venue}
                  </p>
                )}
              </div>
              <p
                className="shrink-0 italic text-white/60 nums-tabular"
                style={{ fontSize: 'var(--text-meta)' }}
                aria-label={`Year ${p.year}, entry ${i + 1}`}
              >
                {p.year}
              </p>
            </div>
          )}
        />
      </section>

      {/* Book chapters — contributed chapters in surgical references. */}
      <section
        aria-labelledby="book-chapters-heading"
        className="border-t border-white/10 px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="eyebrow">Book chapters</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="book-chapters-heading"
              className="mt-4 font-display font-medium"
              style={{ fontSize: 'var(--text-title)', lineHeight: 1.1, letterSpacing: '-0.012em' }}
            >
              Contributed chapters in surgical references.
            </h2>
          </Reveal>
          <ol className="mt-10 divide-y divide-white/5">
            {BOOK_CHAPTERS.map((chapter) => (
              <li
                key={chapter.title}
                className="flex flex-col gap-2 py-6 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div className="flex-1">
                  <p
                    className="font-display font-medium leading-snug text-white/90"
                    style={{ fontSize: '1.0625rem', letterSpacing: '-0.005em' }}
                  >
                    {chapter.href ? (
                      <a
                        href={chapter.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${chapter.title} (opens DOI record at doi.org)`}
                        className="group/link inline-flex items-baseline gap-1.5 underline-offset-4 transition-colors hover:text-white hover:underline"
                      >
                        {chapter.title}
                        <ArrowUpRight
                          aria-hidden="true"
                          size={11}
                          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </a>
                    ) : (
                      chapter.title
                    )}
                  </p>
                  {chapter.venue && (
                    <p className="mt-1 italic text-white/70" style={{ fontSize: 'var(--text-meta)' }}>
                      {chapter.venue}
                    </p>
                  )}
                </div>
                <p
                  className="shrink-0 italic text-white/70 nums-tabular"
                  style={{ fontSize: 'var(--text-meta)' }}
                >
                  {chapter.year}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
};

export default Publications;
