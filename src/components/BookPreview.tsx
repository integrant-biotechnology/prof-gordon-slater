import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
import { Glow } from '@/components/ui/Glow';
import { BOOK, BOOK_COVER_SRCSET, BOOK_FORMATS } from '@/constants';

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
                <p className="eyebrow text-medical-teal/80">
                  A book by {BOOK.byline} · {BOOK.publishedDate}
                </p>
              </div>

              <h2
                id="book-preview-heading"
                className="text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
              >
                {BOOK.title} <span className="text-white/40">{BOOK.subtitle}.</span>
              </h2>

              <p className="text-pretty text-xl font-display font-semibold leading-snug text-medical-teal/85 sm:text-2xl">
                {BOOK.tagline}
              </p>

              <p className="text-pretty text-base leading-relaxed text-white/65">
                {BOOK.summary}
              </p>

              <div className="flex flex-col items-start gap-4 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/book"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-brand-bg transition-colors hover:bg-white/90"
                  >
                    Read more
                    <ArrowRight aria-hidden="true" size={14} />
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="eyebrow text-white/45">Find the book</span>
                  {BOOK_FORMATS.map((f) => (
                    <a
                      key={f.format}
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${f.format} on Amazon AU (opens in a new tab)`}
                      className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-medical-teal"
                    >
                      {f.format}
                      <ArrowUpRight aria-hidden="true" size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mx-auto aspect-[2/3] w-full max-w-xs overflow-hidden rounded-2xl shadow-2xl shadow-black/60 lg:max-w-[18rem]">
              <img
                src={BOOK.coverImage}
                srcSet={BOOK_COVER_SRCSET}
                sizes="(min-width: 1024px) 288px, (min-width: 640px) 320px, 240px"
                alt={BOOK.coverAlt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
