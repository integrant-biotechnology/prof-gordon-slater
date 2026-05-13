import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Glow } from '@/components/ui/Glow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BOOK, BOOK_RULES, CASE_STUDIES, DOCTOR_NAME, LIFE_FORCE } from '@/constants';

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

export const Book = () => {
  useEffect(() => {
    document.title = `${BOOK.title} — ${BOOK.subtitle} | ${DOCTOR_NAME}`;
    return () => {
      document.title = `${DOCTOR_NAME} | Personal site`;
    };
  }, []);

  return (
    <>
      <BookHero />
      <OpeningFraming />
      <LifeForceFormulaSection />
      <ThreeRules />
      <HypothesisCallout />
      <EpilogueExtract />
      <ClinicalCases />
      <BookCloseCTA />
    </>
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
          {BOOK.title}{' '}
          <span className="text-white/40">{BOOK.subtitle}.</span>
        </h1>

        <blockquote className="border-l-2 border-medical-teal/50 pl-5 text-pretty text-lg leading-relaxed text-white/75 md:text-xl">
          “{BOOK.heroQuote}”
          <footer className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
            — {BOOK.heroQuoteSource}
          </footer>
        </blockquote>

        <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center">
          <Button
            size="lg"
            variant="primary"
            className="min-w-[200px]"
            onClick={() => window.open(BOOK.purchaseUrl, '_blank', 'noopener,noreferrer')}
          >
            <span className="flex items-center gap-2">
              {BOOK.purchaseLabel}
              <ArrowUpRight aria-hidden="true" size={16} />
            </span>
          </Button>
          {BOOK.purchasePlaceholder && (
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
              Purchase link to be supplied
            </span>
          )}
        </div>
      </div>

      <BookCover />
    </div>
  </section>
);

/** Calm, premium book-cover placeholder — replace with a real image asset when available. */
const BookCover = () => (
  <div className="relative mx-auto aspect-[2/3] w-full max-w-[18rem] overflow-hidden rounded-2xl glass shadow-2xl shadow-black/60 sm:max-w-[20rem]">
    <div className="absolute inset-0 bg-linear-to-br from-medical-teal/20 via-transparent to-medical-blue/20" />
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(20,184,166,0.18),transparent_55%)]"
    />
    <div className="relative flex h-full flex-col justify-between p-7 md:p-8">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">A book by</p>
        <p className="mt-1 font-display text-sm font-semibold text-white">{BOOK.byline}</p>
      </div>
      <div>
        <h2 className="font-display text-3xl font-bold leading-[1.05] text-white md:text-4xl">
          {BOOK.title}
        </h2>
        <p className="mt-2 font-display text-base font-medium italic text-white/70 md:text-lg">
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
          — From Chaos to Creation, p. 14
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
          From Chaos to Creation, p. 15
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
        intro="The book's Appendix is where Slater formally states his synthesis."
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
        eyebrow="Slater's Three Rules"
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
        From Chaos to Creation, pp. 209–218
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
            — From Chaos to Creation, p. 221
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

const BookCloseCTA = () => (
  <section
    aria-label="Close"
    className="relative overflow-hidden px-6 py-20 md:py-24"
  >
    <Glow className="bottom-0 left-1/2 -translate-x-1/2" color="teal" />

    <div className="relative mx-auto max-w-3xl text-center">
      <p className="eyebrow">From Chaos to Creation</p>
      <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
        “Lifespan is an energy balance, not a clock.”
      </h2>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
        From Chaos to Creation, p. 221 — Rule 3
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button
          size="lg"
          variant="primary"
          className="min-w-[200px]"
          onClick={() => window.open(BOOK.purchaseUrl, '_blank', 'noopener,noreferrer')}
        >
          <span className="flex items-center gap-2">
            {BOOK.purchaseLabel}
            <ArrowUpRight aria-hidden="true" size={16} />
          </span>
        </Button>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
        >
          <ArrowLeft aria-hidden="true" size={14} />
          Back to the personal site
        </Link>
      </div>
    </div>
  </section>
);
