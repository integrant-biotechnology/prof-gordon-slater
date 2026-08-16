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
}: ListTemplateProps<T>) => (
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
                        ? 'rounded-full border border-medical-teal/40 bg-medical-teal/10 px-3.5 py-1.5 text-medical-teal transition-colors'
                        : 'rounded-full border bg-brand-panel/30 px-3.5 py-1.5 text-white/70 transition-colors hover:text-white/85'
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

    {items.length === 0 ? (
      <div className="py-12 text-white/60" style={{ fontSize: 'var(--text-meta)' }}>
        {emptyState ?? 'No entries match.'}
      </div>
    ) : (
      <ol className="divide-y divide-white/5">
        {items.map((item, i) => (
          <li key={i} className="py-6 first:pt-0 last:pb-0">
            {renderItem(item, i)}
          </li>
        ))}
      </ol>
    )}
  </div>
);
