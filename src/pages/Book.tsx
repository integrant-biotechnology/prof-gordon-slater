import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Quote, Sparkle } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Glow } from '@/components/ui/Glow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  BOOK,
  BOOK_COVER_SRCSET,
  BOOK_ENDORSEMENTS,
  BOOK_FORMATS,
  BOOK_INSIDE,
  BOOK_RULES,
  CASE_STUDIES,
  DOCTOR_NAME,
  LIFE_FORCE,
} from '@/constants';

const FOUR_QUESTIONS = [
  'What can we address with the data at hand?',
  'What practical steps can we take to influence the outcome of our genetic inheritance?',
  'What can we learn from nature itself?',
  'Is it possible to question whether there are ways to do better than nature?',
];

const EPILOGUE_POINTS = [
  {
    title: 'Aging is not abstract.',
    body: 'It happens in real bodies on real mornings.',
  },
  {
    title: 'The patient is a partner, not a recipient.',
    body:
      'Regenerative medicine does not work like antibiotics — the patient must do the environmental and lifestyle work while the clinician handles the pharmacology.',
  },
  {
    title: 'Longevity is compounding, not heroic.',
    body: 'One intervention does not extend life; a stacked, sequenced, sustained program does.',
  },
  {
    title: 'Humility.',
    body: 'Biology is too complex to be fully captured in one equation. The formula is a conceptual frame, not a predictive machine.',
  },
];

const Book = () => {
  useEffect(() => {
    document.title = `${BOOK.title}: ${BOOK.subtitle} | ${DOCTOR_NAME}`;
    return () => {
      document.title = `${DOCTOR_NAME} | Personal site`;
    };
  }, []);

  return (
    <>
      <BookHero />
      <InsideThisBook />
      <OpeningFraming />
      <LifeForceFormulaSection />
      <ThreeRules />
      <HypothesisCallout />
      <EpilogueExtract />
      <ClinicalCases />
      <EndorsementsSection />
      <BookCloseCTA />
    </>
  );
};

export default Book;

// -------------------------------------------------------------
// Reusable: 3-format buttons (Hardcover · Paperback · Kindle)
// -------------------------------------------------------------

const FormatButtons = ({ size = 'md' }: { size?: 'md' | 'lg' }) => {
  const padding = size === 'lg' ? 'px-5 py-3' : 'px-4 py-2.5';
  return (
    <div className="flex flex-wrap items-center gap-3">
      {BOOK_FORMATS.map((f, i) => (
        <a
          key={f.format}
          href={f.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${f.format} on Amazon AU (opens in a new tab)`}
          className={`inline-flex items-center gap-2 rounded-full text-sm font-medium transition-colors ${padding} ${
            i === 0
              ? 'bg-white text-brand-bg hover:bg-white/90'
              : 'glass text-white/80 hover:text-white hover:border-medical-teal/40'
          }`}
        >
          {f.format}
          <ArrowUpRight aria-hidden="true" size={14} />
        </a>
      ))}
    </div>
  );
};

// -------------------------------------------------------------
// Sub-sections (module-private)
// -------------------------------------------------------------

const BookHero = () => (
  <section
    aria-labelledby="book-hero"
    className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28"
  >
    <Glow className="-left-[10%] top-[5%]" color="teal" />
    <Glow className="-right-[15%] bottom-[10%]" color="blue" />

    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
      <div className="space-y-7">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-white"
        >
          <ArrowLeft aria-hidden="true" size={14} />
          Back to the personal site
        </Link>

        <p className="eyebrow">A book by {BOOK.byline} · {BOOK.publishedDate}</p>

        <h1
          id="book-hero"
          className="text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {BOOK.title} <span className="text-white/40">{BOOK.subtitle}.</span>
        </h1>

        <p className="text-pretty font-display text-2xl font-semibold leading-snug text-medical-teal/85 sm:text-3xl">
          {BOOK.tagline}
        </p>

        <p className="text-pretty text-base leading-relaxed text-white/65 md:text-lg">
          {BOOK.subtagline}
        </p>

        <blockquote className="border-l-2 border-medical-teal/50 pl-5 text-pretty text-lg leading-relaxed text-white/75 md:text-xl">
          “{BOOK.heroQuote}”
          <footer className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
            — {BOOK.heroQuoteSource}
          </footer>
        </blockquote>

        <div className="pt-3">
          <FormatButtons size="lg" />
        </div>
      </div>

      <BookCoverImage priority />
    </div>
  </section>
);

interface BookCoverImageProps {
  /** When true, hint the browser this is the LCP element (eager + fetchpriority high). */
  priority?: boolean;
}

const BookCoverImage = ({ priority = false }: BookCoverImageProps) => (
  <div className="relative mx-auto aspect-[2/3] w-full max-w-[18rem] overflow-hidden rounded-2xl shadow-2xl shadow-black/60 sm:max-w-[20rem]">
    <img
      src={BOOK.coverImage}
      srcSet={BOOK_COVER_SRCSET}
      sizes="(min-width: 1024px) 320px, (min-width: 640px) 320px, 288px"
      alt={BOOK.coverAlt}
      loading={priority ? 'eager' : 'lazy'}
      // fetchPriority is React 19+
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className="h-full w-full object-cover"
    />
  </div>
);

const InsideThisBook = () => (
  <section
    aria-labelledby="inside-heading"
    className="border-t border-white/5 px-6 py-20 md:py-24"
  >
    <div className="mx-auto max-w-4xl">
      <SectionHeading
        id="inside-heading"
        eyebrow="Inside this book"
        title="What you’ll explore."
        intro="A short orientation, lifted from the back jacket."
        className="mb-10"
      />

      <ul className="space-y-3">
        {BOOK_INSIDE.map((b, i) => (
          <li
            key={i}
            className="flex items-start gap-4 rounded-2xl glass bg-white/[0.01] p-5"
          >
            <Sparkle
              aria-hidden="true"
              size={16}
              strokeWidth={1.5}
              className="mt-1 shrink-0 text-medical-teal"
            />
            <p className="text-[15px] leading-relaxed text-white/75">{b.text}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
        From the back cover
      </p>
    </div>
  </section>
);

const OpeningFraming = () => (
  <section
    aria-labelledby="opening-heading"
    className="border-t border-white/5 px-6 py-20 md:py-24"
  >
    <div className="mx-auto max-w-4xl">
      <SectionHeading
        id="opening-heading"
        eyebrow="Opening framing"
        title="The central move."
        intro="Lifespan is not a predetermined clock but a modifiable outcome. The book opens by asking why some lifeforms live so much longer than others — and what the levers are."
        className="mb-12"
      />

      <blockquote className="rounded-3xl glass bg-white/[0.01] p-8 text-pretty text-xl leading-relaxed text-white/80 md:text-2xl">
        “Just as a civilisation as mighty as the Roman Empire did not fail all at once, the death
        of each organism occurs in different measurable stages.”
        <footer className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
          — Chaos to Creation, p. 14
        </footer>
      </blockquote>

      <div className="mt-12">
        <h3 className="mb-6 font-display text-xl font-semibold text-white">Four guiding questions</h3>
        <ol className="space-y-4">
          {FOUR_QUESTIONS.map((q, i) => (
            <li
              key={i}
              className="flex gap-5 rounded-2xl glass bg-white/[0.01] p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-medical-teal/15 font-display text-sm font-semibold text-medical-teal">
                {i + 1}
              </span>
              <p className="text-[15px] leading-relaxed text-white/75">{q}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
          Chaos to Creation, p. 15
        </p>
      </div>
    </div>
  </section>
);

const LifeForceFormulaSection = () => (
  <section
    aria-labelledby="formula-heading"
    className="border-y border-white/5 bg-brand-panel/30 px-6 py-20 md:py-24"
  >
    <div className="mx-auto max-w-5xl">
      <SectionHeading
        id="formula-heading"
        eyebrow="The Life Force Formula"
        title="Life Force = environment × (regeneration − damage) ÷ inertia, plus stem-cell input."
        intro="The book’s Appendix is where Slater formally states his synthesis."
        align="center"
        className="mb-12 md:mb-14"
      />

      {/* Formula display */}
      <div
        role="img"
        aria-label={`Life Force Formula: ${LIFE_FORCE.plain}`}
        className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-3xl glass bg-white/[0.01] px-6 py-10 font-display text-3xl text-white sm:text-4xl md:px-12 md:text-5xl"
      >
        <span>
          L<sup className="text-[0.55em]">F</sup>
        </span>
        <span className="text-white/45">=</span>
        <span className="italic">Ē</span>
        <span className="text-white/30 text-[1.4em] leading-none">(</span>
        <span className="inline-flex flex-col items-center text-[0.78em] leading-tight">
          <span>R − D</span>
          <span aria-hidden="true" className="my-1 h-px w-full min-w-[3.5rem] bg-white/45" />
          <span>I</span>
        </span>
        <span className="text-white/30 text-[1.4em] leading-none">)</span>
        <span className="text-white/45">+</span>
        <span>
          S<sub className="text-[0.45em]">Addition</sub>
        </span>
      </div>

      {/* Variables table */}
      <ul className="mt-12 space-y-3">
        {LIFE_FORCE.variables.map((v) => (
          <li
            key={v.symbolHtml}
            className="grid grid-cols-[5rem_1fr] items-baseline gap-5 rounded-2xl glass bg-white/[0.01] px-6 py-4 sm:grid-cols-[7rem_1fr]"
          >
            <span
              className="font-display text-2xl font-semibold text-medical-teal"
              dangerouslySetInnerHTML={{ __html: v.symbolHtml }}
            />
            <span className="text-[15px] leading-relaxed text-white/75">{v.meaning}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-pretty text-center text-base leading-relaxed text-white/65">
        <span className="text-white/45">Reading.</span> {LIFE_FORCE.reading}
      </p>
      <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
        {LIFE_FORCE.attribution}
      </p>
    </div>
  </section>
);

const ThreeRules = () => (
  <section aria-labelledby="rules-heading" className="px-6 py-20 md:py-24">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        id="rules-heading"
        eyebrow="Slater’s Three Rules"
        title="The three claims the rest of the book rests on."
        intro="Stated verbatim from the book — the spine of the Life Force argument."
        className="mb-12 md:mb-14"
      />

      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {BOOK_RULES.map((rule) => (
          <li key={rule.number}>
            <Card className="flex h-full flex-col gap-6 bg-white/[0.01] p-9" glow>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-medical-teal/15 font-display text-base font-semibold text-medical-teal">
                  {rule.number}
                </span>
                <span className="eyebrow">Rule {rule.number}</span>
              </div>
              <h3 className="font-display text-lg font-semibold leading-tight text-white">
                {rule.title}
              </h3>
              <blockquote className="text-[15px] leading-relaxed text-white/70">
                “{rule.quote}”
              </blockquote>
              <p className="mt-auto text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                {rule.attribution}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const HypothesisCallout = () => (
  <section
    aria-labelledby="hypothesis-heading"
    className="border-y border-white/5 bg-brand-panel/30 px-6 py-20 md:py-24"
  >
    <div className="mx-auto max-w-4xl">
      <p className="eyebrow text-medical-teal/80">Chapter 9 · Beyond Mortality</p>
      <h2
        id="hypothesis-heading"
        className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl"
      >
        A median healthy lifespan of <span className="text-medical-teal">150–200 years</span> is
        achievable within this century — conditional on net regenerative capacity (R − D) staying
        positive over time.
      </h2>

      <p className="mt-6 text-pretty text-lg leading-relaxed text-white/65">
        The argument: senolytics, CRISPR, and epigenetic reprogramming have each shown 20–30%
        lifespan extension in mice. <em>Combinatorially</em>, these could push human healthspan
        toward 150–200 years — a 60–65% gain over Jeanne Calment&rsquo;s observed 122-year human
        maximum.
      </p>

      <div className="mt-8 flex items-start gap-3 rounded-2xl glass bg-white/[0.02] p-5">
        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-medical-teal" />
        <p className="text-sm leading-relaxed text-white/65">
          <span className="font-semibold text-white/80">This is founder-voice material.</span>{' '}
          It is Slater&rsquo;s hypothesis — not a clinical claim, not a treatment promise.
        </p>
      </div>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
        Chaos to Creation, pp. 209–218
      </p>
    </div>
  </section>
);

const EpilogueExtract = () => (
  <section aria-labelledby="epilogue-heading" className="px-6 py-20 md:py-24">
    <div className="mx-auto max-w-4xl">
      <SectionHeading
        id="epilogue-heading"
        eyebrow="Epilogue"
        title="Be a participant, not a passenger."
        intro="A short note from the author — out of the technical frame, into the so-what-now register."
        className="mb-10"
      />

      <ul className="grid gap-4 md:grid-cols-2">
        {EPILOGUE_POINTS.map((p) => (
          <li key={p.title} className="rounded-2xl glass bg-white/[0.01] p-6">
            <p className="font-display text-base font-semibold text-white">{p.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{p.body}</p>
          </li>
        ))}
      </ul>

      <blockquote className="mt-10 flex items-start gap-4 rounded-3xl glass bg-white/[0.02] p-8">
        <Quote aria-hidden="true" size={22} className="shrink-0 text-medical-teal" strokeWidth={1.5} />
        <div>
          <p className="text-pretty text-lg leading-relaxed text-white/80">
            “Biology is too complex to be fully captured in one equation.”
          </p>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
            — Chaos to Creation, p. 221
          </p>
        </div>
      </blockquote>
    </div>
  </section>
);

const ClinicalCases = () => (
  <section
    aria-labelledby="cases-heading"
    className="border-t border-white/5 px-6 py-20 md:py-24"
  >
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        id="cases-heading"
        eyebrow="Two clinical cases"
        title="Where the formula meets the bedside."
        intro="Two factual case panels referenced in the book and the published literature."
        className="mb-12 md:mb-14"
      />

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {CASE_STUDIES.map((c) => (
          <li key={c.id}>
            <Card className="flex h-full flex-col gap-4 bg-white/[0.01] p-9" glow>
              <h3 className="font-display text-2xl font-semibold leading-tight text-white">
                {c.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-white/70">{c.body}</p>
              <p className="mt-auto pt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                {c.attribution}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const EndorsementsSection = () => (
  <section
    aria-labelledby="endorsements-heading"
    className="border-y border-white/5 bg-brand-panel/30 px-6 py-20 md:py-24"
  >
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        id="endorsements-heading"
        eyebrow="Praise for the book"
        title="From the book jacket."
        intro="Reactions to Chaos to Creation from beyond the author’s own field."
        className="mb-12 md:mb-14"
      />

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {BOOK_ENDORSEMENTS.map((e) => (
          <li key={e.by}>
            <Card className="flex h-full flex-col gap-5 bg-white/[0.01] p-8" glow>
              <Quote
                aria-hidden="true"
                size={22}
                strokeWidth={1.5}
                className="text-medical-teal/80"
              />
              <blockquote className="text-pretty text-base leading-relaxed text-white/80">
                “{e.quote}”
              </blockquote>
              <footer className="mt-auto pt-2">
                <p className="font-display text-base font-semibold text-white">{e.by}</p>
                <p className="text-xs leading-relaxed text-white/55">{e.title}</p>
              </footer>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const BookCloseCTA = () => (
  <section
    aria-label="Close"
    className="relative overflow-hidden px-6 py-20 md:py-24"
  >
    <Glow className="bottom-0 left-1/2 -translate-x-1/2" color="teal" />

    <div className="relative mx-auto max-w-3xl text-center">
      <p className="eyebrow">{BOOK.title}</p>
      <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
        “Lifespan is an energy balance, not a clock.”
      </h2>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
        Chaos to Creation, p. 221 — Rule 3
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-5">
        <FormatButtons size="lg" />
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-white"
        >
          <ArrowLeft aria-hidden="true" size={13} />
          Back to the personal site
        </Link>
      </div>
    </div>
  </section>
);
