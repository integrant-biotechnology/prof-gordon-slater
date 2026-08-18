import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { BookCover } from '@/components/ui/BookCover';
import { Reveal } from '@/components/ui/Motion';
import { BOOK, BOOK_SITE_URL } from '@/constants';

/**
 * BookShowcase — the home book moment, Stripe Press register.
 *
 * Panel-toned section: framing on the left (eyebrow, title, italic
 * subtitle, summary, sanctioned hero quote), the physical cover on
 * the right. One CTA into /book, where the full experience lives.
 */
export const BookShowcase = () => (
  <section
    aria-labelledby="book-showcase-heading"
    className="px-6 py-24 md:py-32"
    style={{ backgroundColor: 'var(--color-brand-panel)' }}
  >
    <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
      <div>
        <Reveal>
          <p className="eyebrow text-medical-teal/90 nums-tabular">
            The book <span aria-hidden="true" className="mx-2 text-white/30">·</span>
            {BOOK.publishedDate}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2
            id="book-showcase-heading"
            className="mt-6 text-balance font-display font-medium"
            style={{ fontSize: 'var(--text-display)', lineHeight: 1, letterSpacing: '-0.02em' }}
          >
            {BOOK.title}{' '}
            <em
              className="font-display italic font-normal text-white/70"
              style={{ display: 'block', fontSize: '0.6em', lineHeight: 1.1, marginTop: '0.35em' }}
            >
              {BOOK.subtitle}.
            </em>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p
            className="mt-8 max-w-xl text-pretty leading-relaxed text-white/80"
            style={{ fontSize: 'var(--text-lede)' }}
          >
            {BOOK.summary}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <blockquote
            className="mt-10 max-w-xl border-l border-medical-teal/40 pl-6 text-pretty font-display italic text-white/85"
            style={{ fontSize: 'var(--text-lede)', lineHeight: 1.4 }}
          >
            &ldquo;{BOOK.heroQuote}&rdquo;
            <footer className="mt-4 eyebrow text-white/60">
              <span aria-hidden="true" className="mr-2">—</span>
              {BOOK.heroQuoteSource}
            </footer>
          </blockquote>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              to="/book"
              viewTransition
              className="group/bookcta inline-flex h-13 min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-8 text-base font-medium text-white/90 transition-colors hover:border-medical-teal/60 hover:text-white"
            >
              Discover the Book
              <ArrowRight
                aria-hidden="true"
                size={16}
                className="transition-transform group-hover/bookcta:translate-x-0.5"
              />
            </Link>
            <a
              href={BOOK_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Official book site, chaostocreation.com.au (opens in a new tab)"
              className="group/booksite inline-flex min-h-11 items-center gap-1.5 text-white/75 transition-colors hover:text-medical-teal"
              style={{
                fontSize: 'var(--text-eyebrow)',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              chaostocreation.com.au
              <ArrowUpRight
                aria-hidden="true"
                size={14}
                className="transition-transform group-hover/booksite:translate-x-0.5 group-hover/booksite:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <BookCover size="lg" />
      </Reveal>
    </div>
  </section>
);
