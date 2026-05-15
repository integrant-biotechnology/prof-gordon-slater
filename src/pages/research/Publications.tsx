import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Breadcrumbs } from '@/templates/Breadcrumbs';
import { PageShell } from '@/templates/PageShell';
import { PageHero } from '@/templates/PageHero';
import { ListTemplate, type ListFilter } from '@/templates/ListTemplate';
import { findRoute } from '@/lib/site';
import { FULL_PUBLICATIONS, RESEARCH_THEMES } from '@/constants';
import type { Publication } from '@/types';

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
  const [filter, setFilter] = useState<string>('all');
  const [query, setQuery] = useState<string>('');

  const filters: ListFilter[] = useMemo(
    () => [
      { label: 'All', value: 'all' },
      ...RESEARCH_THEMES.map((t) => ({ label: t.title, value: t.slug })),
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

  return (
    <PageShell route={route}>
      <Breadcrumbs route={route} />

      <PageHero
        variant="type-only"
        kicker="Research / Publications"
        eyebrow="Peer-reviewed"
        title={
          <>
            Sixty peer-reviewed papers ·{' '}
            <em className="font-display italic font-normal text-white/55">
              2003–2026.
            </em>
          </>
        }
        lede="Search across all titles and venues; filter by theme. Outbound links point to the journal entry where available."
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
                    className="mt-1 italic text-white/45"
                    style={{ fontSize: 'var(--text-meta)' }}
                  >
                    {p.venue}
                  </p>
                )}
              </div>
              <p
                className="shrink-0 italic text-white/45 nums-tabular"
                style={{ fontSize: 'var(--text-meta)' }}
                aria-label={`Year ${p.year}, entry ${i + 1}`}
              >
                {p.year}
              </p>
            </div>
          )}
        />
      </section>
    </PageShell>
  );
};

export default Publications;
