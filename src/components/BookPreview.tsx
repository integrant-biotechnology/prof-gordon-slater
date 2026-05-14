import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { Glow } from '@/components/ui/Glow';
import { BOOK, BOOK_COVER_SRCSET, BOOK_FORMATS } from '@/constants';

/**
 * BookPreview — light Apple-grade refinement.
 *
 * Full cinematic rebuild (scroll-driven rotateY, large centered
 * reveal) lands in a later PR. For now: switch to the new design
 * tokens (Fraunces title, italic emphasis on subtitle), refine the
 * format chips to use glass-thin, and tone down the heavy white CTA
 * button to a calmer outline + teal accent line.
 */
export const BookPreview = () => (
  <section
    id="the-book"
    aria-labelledby="book-preview-heading"
    className="relative overflow-hidden px-6 py-24 md:py-32"
  >
    <Glow className="-right-[10%] top-[20%]" color="teal" />

    <div className="relative mx-auto max-w-7xl">
      <div className="overflow-hidden rounded-3xl glass-thick p-8 md:rounded-[40px] md:p-14 lg:p-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <BookOpen aria-hidden="true" size={16} className="text-medical-teal" strokeWidth={1.75} />
                <p className="eyebrow text-medical-teal/85">
                  A book by {BOOK.byline} <span aria-hidden="true" className="mx-1.5 text-white/30">·</span> {BOOK.publishedDate}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2
                id="book-preview-heading"
                className="mt-6 text-balance font-display font-medium"
                style={{
                  fontSize: 'var(--text-display)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.015em',
                }}
              >
                {BOOK.title}{' '}
                <em className="font-display italic font-normal text-white/55">
                  {BOOK.subtitle}.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p
                className="mt-5 text-pretty font-display italic leading-snug text-medical-teal/90"
                style={{ fontSize: 'var(--text-title)', letterSpacing: '-0.01em' }}
              >
                {BOOK.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p
                className="mt-6 text-pretty leading-relaxed text-white/65"
                style={{ fontSize: 'var(--text-body)' }}
              >
                {BOOK.summary}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col items-start gap-5">
                <Link
                  to="/book"
                  className="group/link inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-brand-bg transition-colors hover:bg-white/90"
                  style={{ fontSize: 'var(--text-meta)' }}
                >
                  Read more
                  <ArrowRight
                    aria-hidden="true"
                    size={14}
                    className="transition-transform group-hover/link:translate-x-0.5"
                  />
                </Link>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="eyebrow text-white/45">Find the book</span>
                  {BOOK_FORMATS.map((f) => (
                    <a
                      key={f.format}
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${f.format} on Amazon AU (opens in a new tab)`}
                      className="inline-flex items-center gap-1.5 rounded-full glass-thin px-4 py-1.5 text-white/70 transition-colors hover:text-medical-teal"
                      style={{
                        fontSize: 'var(--text-eyebrow)',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                      }}
                    >
                      {f.format}
                      <ArrowUpRight aria-hidden="true" size={11} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="lg:translate-y-0">
            <div className="group/cover relative mx-auto aspect-[2/3] w-full max-w-xs overflow-hidden rounded-2xl shadow-2xl shadow-black/60 transition-transform duration-[420ms] ease-out hover:-translate-y-1 lg:max-w-[18rem]">
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
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
