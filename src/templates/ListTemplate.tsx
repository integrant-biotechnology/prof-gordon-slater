import type { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Motion';

export interface ListFilter {
  /** Display label, e.g. "All", "HBOT". */
  label: string;
  /** Filter value passed back to onFilterChange. */
  value: string;
}

interface ListTemplateProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  /** Optional client-side filter chips. */
  filters?: ListFilter[];
  activeFilter?: string;
  onFilterChange?: (value: string) => void;
  /** Optional search input. When provided, controlled by `searchValue`. */
  searchable?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  /** Optional message rendered when items is empty. */
  emptyState?: ReactNode;
  /**
   * Live result summary (e.g. "12 papers · Hyperbaric oxygen").
   * Announced politely to screen readers as filters/search change.
   */
  resultsLabel?: string;
  /**
   * Group items under editorial era dividers. When provided, items
   * are keyed by groupBy and rendered under groupOrder headings;
   * groups with no items are skipped.
   */
  groupBy?: (item: T) => string;
  groupOrder?: string[];
}

/**
 * ListTemplate — typographic list with optional search + filter chips.
 *
 * Used by /research/publications, /writing index, /speaking (if it
 * ships later). Today (PR-1) this is a typed scaffold; consumers
 * adopt it in PR-4 / PR-6.
 */
export const ListTemplate = <T,>({
  items,
  renderItem,
  filters,
  activeFilter,
  onFilterChange,
  searchable = false,
  searchValue = '',
  onSearchChange,
  searchPlaceholder = 'Search…',
  emptyState,
  resultsLabel,
  groupBy,
  groupOrder,
}: ListTemplateProps<T>) => {
  // Preserve item order within groups; group order comes from groupOrder
  // (or first-seen order as a fallback).
  const grouped = (() => {
    if (!groupBy || items.length === 0) return null;
    const map = new Map<string, T[]>();
    for (const item of items) {
      const key = groupBy(item);
      const bucket = map.get(key);
      if (bucket) bucket.push(item);
      else map.set(key, [item]);
    }
    const order = groupOrder ?? Array.from(map.keys());
    return order
      .filter((key) => map.has(key))
      .map((key) => ({ label: key, items: map.get(key)! }));
  })();

  const renderRows = (rows: T[], offset: number) => (
    <ol className="divide-y divide-white/5">
      {rows.map((item, i) => (
        <li key={offset + i} className="py-6 first:pt-0 last:pb-0">
          {renderItem(item, offset + i)}
        </li>
      ))}
    </ol>
  );

  let runningOffset = 0;

  return (
  <div className="mx-auto max-w-5xl px-6">
    {(searchable || filters?.length) && (
      <div className="mb-12 flex flex-col gap-6">
        {searchable && (
          <Reveal>
            <input
              type="search"
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full rounded-full border bg-brand-panel/40 px-5 py-3 text-white/85 placeholder:text-white/35 focus:outline-none"
              style={{
                fontSize: 'var(--text-meta)',
                borderColor: 'var(--color-brand-border)',
              }}
            />
          </Reveal>
        )}
        {filters && filters.length > 0 && (
          <Reveal delay={0.04}>
            <ul className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <li key={f.value}>
                  <button
                    type="button"
                    onClick={() => onFilterChange?.(f.value)}
                    aria-pressed={activeFilter === f.value}
                    className={
                      activeFilter === f.value
                        ? 'inline-flex min-h-11 items-center rounded-full border border-medical-teal/40 bg-medical-teal/10 px-4 text-medical-teal transition-colors'
                        : 'inline-flex min-h-11 items-center rounded-full border bg-brand-panel/30 px-4 text-white/75 transition-colors hover:text-white/90'
                    }
                    style={{
                      fontSize: 'var(--text-eyebrow)',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      borderColor:
                        activeFilter === f.value
                          ? undefined
                          : 'var(--color-brand-border)',
                    }}
                  >
                    {f.label}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    )}

    {resultsLabel && (
      <p
        aria-live="polite"
        className="mb-8 text-brand-muted nums-tabular"
        style={{ fontSize: 'var(--text-meta)' }}
      >
        {resultsLabel}
      </p>
    )}

    {items.length === 0 ? (
      <div className="py-12 text-white/70" style={{ fontSize: 'var(--text-meta)' }}>
        {emptyState ?? 'No entries match.'}
      </div>
    ) : grouped ? (
      <div className="space-y-14">
        {grouped.map((group) => {
          const offset = runningOffset;
          runningOffset += group.items.length;
          return (
            <section key={group.label} aria-label={group.label}>
              <h3
                className="mb-6 border-b border-white/10 pb-3 font-display italic text-white/70 nums-tabular"
                style={{ fontSize: 'var(--text-title)', letterSpacing: '-0.015em' }}
              >
                {group.label}
              </h3>
              {renderRows(group.items, offset)}
            </section>
          );
        })}
      </div>
    ) : (
      renderRows(items, 0)
    )}
  </div>
  );
};
