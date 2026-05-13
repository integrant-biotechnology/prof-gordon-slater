import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
import { Glow } from '@/components/ui/Glow';
import { BOOK } from '@/constants';

export const BookPreview = () => {
  return (
    <section
      id="the-book"
      aria-labelledby="book-preview-heading"
      className="relative overflow-hidden px-6 py-24 md:py-28"
    >
      <Glow className="-right-[10%] top-[20%]" color="teal" />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl glass bg-brand-panel/40 p-8 md:rounded-[40px] md:p-14 lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <BookOpen aria-hidden="true" size={16} className="text-medical-teal" strokeWidth={1.75} />
                <p className="eyebrow text-medical-teal/80">A book by {BOOK.byline} · {BOOK.publishedDate}</p>
              </div>

              <h2
                id="book-preview-heading"
                className="text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
              >
                {BOOK.title} <span className="text-white/40">{BOOK.subtitle}.</span>
              </h2>

              <blockquote className="border-l-2 border-medical-teal/50 pl-5 text-pretty text-lg leading-relaxed text-white/75">
                “{BOOK.heroQuote}”
                <footer className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  — {BOOK.heroQuoteSource}
                </footer>
              </blockquote>

              <p className="text-pretty text-base leading-relaxed text-white/65">{BOOK.summary}</p>

              <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-brand-bg transition-colors hover:bg-white/90"
                >
                  Read more
                  <ArrowRight aria-hidden="true" size={14} />
                </Link>
                <a
                  href={BOOK.purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${BOOK.purchaseLabel} (opens in a new tab)`}
                  className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white"
                >
                  {BOOK.purchaseLabel}
                  <ArrowUpRight aria-hidden="true" size={13} />
                </a>
              </div>
              {BOOK.purchasePlaceholder && (
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Purchase link to be supplied
                </p>
              )}
            </div>

            <div className="relative mx-auto aspect-[2/3] w-full max-w-xs overflow-hidden rounded-2xl glass shadow-2xl shadow-black/60 lg:max-w-[18rem]">
              <div className="absolute inset-0 bg-linear-to-br from-medical-teal/20 via-transparent to-medical-blue/20" />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(20,184,166,0.18),transparent_55%)]"
              />
              <div className="relative flex h-full flex-col justify-between p-7">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">A book by</p>
                  <p className="mt-1 font-display text-sm font-semibold text-white">{BOOK.byline}</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold leading-[1.05] text-white md:text-3xl">
                    {BOOK.title}
                  </p>
                  <p className="mt-2 font-display text-sm font-medium italic text-white/70 md:text-base">
                    {BOOK.subtitle}
                  </p>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                    {BOOK.publishedDate}
                  </p>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/20">
                    Cover · placeholder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
