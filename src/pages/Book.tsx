import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from 'lucide-react';
import { BookCover } from '@/components/ui/BookCover';
import { Glow } from '@/components/ui/Glow';
import { ChapterMark } from '@/components/ui/ChapterMark';
import { PullQuote } from '@/components/ui/PullQuote';
import { ReadingProgress } from '@/components/ui/ReadingProgress';
import { Reveal } from '@/components/ui/Motion';
import { JsonLd } from '@/templates/JsonLd';
import { siteUrl } from '@/lib/site-origin';
import {
  BOOK,
  BOOK_ENDORSEMENTS,
  BOOK_FORMATS,
  BOOK_SITE_URL,
  BOOK_INSIDE,
  BOOK_RULES,
  CASE_STUDIES,
  DOCTOR_NAME,
  LIFE_FORCE,
} from '@/constants';

const BOOK_LD = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'Chaos to Creation',
  alternateName: 'Longevity and Regeneration Frontiers',
  author: {
    '@type': 'Person',
    name: 'Professor Gordon Slater',
    url: siteUrl(''),
  },
  datePublished: '2026-04-09',
  inLanguage: 'en-AU',
  image: siteUrl('/book-cover-chaos-to-creation.webp'),
  bookFormat: ['Hardcover', 'Paperback', 'EBook'],
  url: 'https://chaostocreation.com.au',
  mainEntityOfPage: siteUrl('/book'),
  sameAs: [
    'https://chaostocreation.com.au',
    'https://www.amazon.com.au/Chaos-Creation-Prof-Gordon-Slater/dp/B0GWTSZN7M',
    'https://www.amazon.com.au/Chaos-Creation-Prof-Gordon-Slater/dp/B0GWTQFMSP',
    'https://www.amazon.com.au/Chaos-Creation-Prof-Gordon-Slater-ebook/dp/B0GWTGTHBN',
  ],
};

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
      <JsonLd data={BOOK_LD} id="ld-book" />
      <ReadingProgress />
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
// Reusable: 3-format chips (Hardcover · Paperback · Kindle)
// -------------------------------------------------------------

/** Primary outbound CTA — the official book site leads every action row. */
const BookSiteButton = ({ size = 'md' }: { size?: 'md' | 'lg' }) => (
  <a
    href={BOOK_SITE_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit the official book site, chaostocreation.com.au (opens in a new tab)"
    className={`group/site inline-flex min-h-11 items-center gap-1.5 rounded-full bg-white text-brand-bg transition-colors hover:bg-white/90 ${
      size === 'lg' ? 'px-6 py-3' : 'px-5 py-2'
    }`}
    style={{
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      fontWeight: 600,
    }}
  >
    Official book site
    <ArrowUpRight
      aria-hidden="true"
      size={13}
      className="transition-transform group-hover/site:translate-x-0.5 group-hover/site:-translate-y-0.5"
    />
  </a>
);

const FormatButtons = ({ size = 'md' }: { size?: 'md' | 'lg' }) => {
  const padding = size === 'lg' ? 'px-5 py-3' : 'px-4 py-2';
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <BookSiteButton size={size} />
      {BOOK_FORMATS.map((f) => (
        <a
          key={f.format}
          href={f.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${f.format} on Amazon AU (opens in a new tab)`}
          className={`group/format inline-flex min-h-11 items-center gap-1.5 rounded-full transition-colors ${padding} glass-thin text-white/80 hover:text-medical-teal`}
          style={{
            fontSize: 'var(--text-eyebrow)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          {f.format}
          <ArrowUpRight
            aria-hidden="true"
            size={12}
            className="transition-transform group-hover/format:translate-x-0.5 group-hover/format:-translate-y-0.5"
          />
        </a>
      ))}
    </div>
  );
};

// -------------------------------------------------------------
// Book hero — cinematic moment.
//
// The cover is the page. As the visitor scrolls through the hero
// section, the cover rotates -10° → 0° on its Y axis, scales 0.97
// → 1.0, and lifts subtly. This is the page's largest motion — by
// design, the book is the emotional peak of the visit.
// -------------------------------------------------------------

const BookHero = () => {
  return (
    <section
      aria-labelledby="book-hero"
      className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <Glow className="-left-[10%] top-[5%]" color="teal" />
      <Glow className="-right-[15%] bottom-[10%]" color="blue" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        {/* Left column — the framing. */}
        <div>
          <Reveal>
            <Link viewTransition
              to="/"
              className="group/back inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
              style={{
                fontSize: 'var(--text-eyebrow)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              <ArrowLeft
                aria-hidden="true"
                size={13}
                className="transition-transform group-hover/back:-translate-x-0.5"
              />
              Back to the personal site
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mt-10 eyebrow text-medical-teal/85 nums-tabular">
              A book by {BOOK.byline}
              <span aria-hidden="true" className="mx-2 text-white/30">·</span>
              {BOOK.publishedDate}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              id="book-hero"
              className="mt-5 text-balance font-display font-medium"
              style={{
                fontSize: 'var(--text-hero)',
                lineHeight: 0.95,
                letterSpacing: '-0.025em',
              }}
            >
              {BOOK.title}{' '}
              <em
                className="font-display italic font-normal text-white/70"
                style={{ display: 'block', fontSize: '0.5em', lineHeight: 1, marginTop: '0.3em' }}
              >
                {BOOK.subtitle}.
              </em>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p
              className="mt-8 max-w-xl text-pretty font-display italic text-medical-teal/90"
              style={{ fontSize: 'var(--text-title)', letterSpacing: '-0.01em', lineHeight: 1.15 }}
            >
              {BOOK.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="mt-7 max-w-xl text-pretty leading-relaxed text-white/75"
              style={{ fontSize: 'var(--text-body)' }}
            >
              {BOOK.subtagline}
            </p>
          </Reveal>

          <Reveal delay={0.26}>
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

          <Reveal delay={0.32}>
            <div className="mt-10">
              <FormatButtons size="lg" />
            </div>
          </Reveal>
        </div>

        {/* Right column — the cinematic cover. */}
        <BookCover size="lg" tilt priority />
      </div>
    </section>
  );
};

// -------------------------------------------------------------
// Inside this book — quiet typographic list.
// -------------------------------------------------------------

const InsideThisBook = () => (
  <section
    aria-labelledby="inside-heading"
    className="border-t border-white/5 px-6 py-24 md:py-28"
  >
    <div className="mx-auto max-w-4xl">
      <ChapterMark
        number="ORIENTATION"
        title="What you'll explore."
        subtitle="A short orientation, lifted from the back jacket."
      />
      <ol className="mt-14 divide-y divide-white/5 border-t border-white/10">
        {BOOK_INSIDE.map((b, i) => (
          <li key={i} className="grid grid-cols-[3rem_1fr] items-baseline gap-6 py-6 md:grid-cols-[4rem_1fr] md:gap-10">
            <Reveal delay={i * 0.03}>
              <span
                className="font-display italic text-white/60 nums-tabular"
                style={{ fontSize: 'var(--text-meta)', letterSpacing: '0.04em' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </Reveal>
            <Reveal delay={i * 0.03 + 0.02}>
              <p
                className="text-pretty leading-relaxed text-white/85"
                style={{ fontSize: 'var(--text-body)' }}
              >
                {b.text}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
      <Reveal>
        <p className="mt-8 eyebrow text-white/60">From the back cover</p>
      </Reveal>
    </div>
  </section>
);

// -------------------------------------------------------------
// Opening framing — the central move.
// -------------------------------------------------------------

const OpeningFraming = () => (
  <section
    aria-labelledby="opening-heading"
    className="border-t border-white/5 px-6 py-24 md:py-32"
  >
    <div className="mx-auto max-w-4xl">
      <ChapterMark
        number="OPENING FRAMING"
        title="The central move."
        subtitle="Lifespan is not a predetermined clock but a modifiable outcome. The book opens by asking why some lifeforms live so much longer than others — and what the levers are."
      />

      <div className="mt-16 md:mt-20">
        <PullQuote attribution="Chaos to Creation, p. 14" width="wide">
          Just as a civilisation as mighty as the Roman Empire did not fail all at once, the death
          of each organism occurs in different measurable stages.
        </PullQuote>
      </div>

      <div className="mt-20 border-t border-white/10 pt-12 md:mt-24">
        <Reveal>
          <p className="eyebrow">Four guiding questions</p>
        </Reveal>
        <ol className="mt-10 space-y-7">
          {FOUR_QUESTIONS.map((q, i) => (
            <li
              key={i}
              className="grid grid-cols-[2.5rem_1fr] items-baseline gap-6 md:grid-cols-[3.5rem_1fr] md:gap-8"
            >
              <Reveal delay={i * 0.03}>
                <span
                  className="font-display italic text-medical-teal/85 nums-tabular"
                  style={{ fontSize: 'var(--text-title)', letterSpacing: '-0.01em' }}
                >
                  {i + 1}.
                </span>
              </Reveal>
              <Reveal delay={i * 0.03 + 0.02}>
                <p
                  className="text-pretty leading-relaxed text-white/85"
                  style={{ fontSize: 'var(--text-body)' }}
                >
                  {q}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal>
          <p className="mt-8 eyebrow text-white/60">Chaos to Creation, p. 15</p>
        </Reveal>
      </div>
    </div>
  </section>
);

// -------------------------------------------------------------
// The Life Force Formula — the page's most striking typographic
// moment. Keeps the existing formula display but quietens the
// variables table.
// -------------------------------------------------------------

const LifeForceFormulaSection = () => (
  <section
    aria-labelledby="formula-heading"
    className="border-y border-white/5 px-6 py-24 md:py-32"
    style={{ backgroundColor: 'var(--color-brand-panel)' }}
  >
    <div className="mx-auto max-w-5xl">
      <ChapterMark
        number="APPENDIX"
        title="The Life Force Formula."
        subtitle="The book's appendix is where Slater formally states his synthesis — a single expression for how regenerative capacity, damage, environment and inertia compose into a lifespan."
        align="center"
      />

      {/* Formula display — kept as the centrepiece. */}
      <Reveal delay={0.16}>
        <div
          role="img"
          aria-label={`Life Force Formula: ${LIFE_FORCE.plain}`}
          className="mt-16 mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-3xl glass-thick px-6 py-12 font-display text-white sm:text-4xl md:px-14 md:text-5xl"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
        >
          <span>
            L<sup className="text-[0.55em]">F</sup>
          </span>
          <span className="text-white/60">=</span>
          <span className="italic">Ē</span>
          <span className="text-white/30 text-[1.4em] leading-none">(</span>
          <span className="inline-flex flex-col items-center text-[0.78em] leading-tight">
            <span>R − D</span>
            <span aria-hidden="true" className="my-1 h-px w-full min-w-[3.5rem] bg-white/45" />
            <span>I</span>
          </span>
          <span className="text-white/30 text-[1.4em] leading-none">)</span>
          <span className="text-white/60">+</span>
          <span>
            S<sub className="text-[0.45em]">Addition</sub>
          </span>
        </div>
      </Reveal>

      {/* Variables — quiet typographic table. */}
      <ol className="mt-16 divide-y divide-white/5 border-t border-white/10">
        {LIFE_FORCE.variables.map((v, i) => (
          <li
            key={v.symbolHtml}
            className="grid grid-cols-[5rem_1fr] items-baseline gap-6 py-5 sm:grid-cols-[7rem_1fr] sm:gap-10"
          >
            <Reveal delay={i * 0.025}>
              <span
                className="font-display font-medium text-medical-teal"
                style={{ fontSize: 'var(--text-title)' }}
                dangerouslySetInnerHTML={{ __html: v.symbolHtml }}
              />
            </Reveal>
            <Reveal delay={i * 0.025 + 0.02}>
              <span
                className="leading-relaxed text-white/80"
                style={{ fontSize: 'var(--text-body)' }}
              >
                {v.meaning}
              </span>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={0.18}>
        <p
          className="mt-12 max-w-3xl mx-auto text-pretty text-center font-display italic leading-relaxed text-white/75"
          style={{ fontSize: 'var(--text-lede)' }}
        >
          <span className="not-italic text-white/60 mr-2">Reading.</span>
          {LIFE_FORCE.reading}
        </p>
      </Reveal>
      <Reveal delay={0.22}>
        <p className="mt-6 eyebrow text-center text-white/60">{LIFE_FORCE.attribution}</p>
      </Reveal>
    </div>
  </section>
);

// -------------------------------------------------------------
// Three rules — three quiet typographic columns with a big number.
// -------------------------------------------------------------

const ThreeRules = () => (
  <section aria-labelledby="rules-heading" className="px-6 py-24 md:py-32">
    <div className="mx-auto max-w-7xl">
      <ChapterMark
        number="THE THREE RULES"
        title="The three claims the rest of the book rests on."
        subtitle="Stated verbatim — the spine of the Life Force argument."
      />

      <ol className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16 md:mt-20">
        {BOOK_RULES.map((rule, i) => (
          <li key={rule.number}>
            <Reveal delay={i * 0.06}>
              <article>
                <p
                  className="font-display italic text-medical-teal nums-tabular"
                  style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1, letterSpacing: '-0.02em' }}
                >
                  {String(rule.number).padStart(2, '0')}
                </p>
                <h3
                  className="mt-6 font-display font-medium"
                  style={{
                    fontSize: 'var(--text-title)',
                    lineHeight: 1.15,
                    letterSpacing: '-0.012em',
                  }}
                >
                  {rule.title}
                </h3>
                <blockquote
                  className="mt-5 text-pretty font-display italic leading-relaxed text-white/75"
                  style={{ fontSize: 'var(--text-body)' }}
                >
                  &ldquo;{rule.quote}&rdquo;
                </blockquote>
                <p className="mt-6 eyebrow text-white/60">{rule.attribution}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={0.24}>
        <div className="mt-16 flex justify-center md:mt-20">
          <Link viewTransition
            to="/book/three-rules"
            className="group/link inline-flex items-center gap-2 text-white/75 transition-colors hover:text-medical-teal"
            style={{
              fontSize: 'var(--text-eyebrow)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Read the Three Rules in full
            <ArrowRight
              aria-hidden="true"
              size={13}
              className="transition-transform group-hover/link:translate-x-0.5"
            />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

// -------------------------------------------------------------
// Hypothesis callout — the big claim, framed as founder voice.
// -------------------------------------------------------------

const HypothesisCallout = () => (
  <section
    aria-labelledby="hypothesis-heading"
    className="border-y border-white/5 px-6 py-24 md:py-32"
    style={{ backgroundColor: 'var(--color-brand-panel)' }}
  >
    <div className="mx-auto max-w-4xl">
      <Reveal>
        <p className="eyebrow text-medical-teal/85">Chapter 9 · Beyond Mortality</p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2
          id="hypothesis-heading"
          className="mt-5 text-balance font-display font-medium"
          style={{
            fontSize: 'var(--text-display)',
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
          }}
        >
          A median healthy lifespan of{' '}
          <em className="font-display italic font-normal text-medical-teal">
            150–200 years
          </em>{' '}
          is achievable within this century — conditional on net regenerative capacity (R − D)
          staying positive over time.
        </h2>
      </Reveal>

      <Reveal delay={0.12}>
        <p
          className="mt-8 text-pretty leading-relaxed text-white/75"
          style={{ fontSize: 'var(--text-body)' }}
        >
          The argument: senolytics, CRISPR, and epigenetic reprogramming have each shown 20–30%
          lifespan extension in mice. <em>Combinatorially</em>, these could push human healthspan
          toward 150–200 years — a 60–65% gain over Jeanne Calment&rsquo;s observed 122-year human
          maximum.
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-10 flex items-start gap-3 border-l-2 border-medical-teal/40 pl-5">
          <p
            className="text-pretty leading-relaxed text-white/70"
            style={{ fontSize: 'var(--text-meta)' }}
          >
            <span className="font-semibold text-white/90">This is founder-voice material.</span>{' '}
            It is Slater&rsquo;s hypothesis — not a clinical claim, not a treatment promise.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.22}>
        <p className="mt-6 eyebrow text-white/60">Chaos to Creation, pp. 209–218</p>
      </Reveal>
    </div>
  </section>
);

// -------------------------------------------------------------
// Epilogue extract — the so-what-now register.
// -------------------------------------------------------------

const EpilogueExtract = () => (
  <section aria-labelledby="epilogue-heading" className="px-6 py-24 md:py-32">
    <div className="mx-auto max-w-4xl">
      <ChapterMark
        number="EPILOGUE"
        title="Be a participant, not a passenger."
        subtitle="A short note from the author — out of the technical frame, into the so-what-now register."
      />

      <ol className="mt-16 space-y-10 md:mt-20">
        {EPILOGUE_POINTS.map((p, i) => (
          <li
            key={p.title}
            className="grid grid-cols-[2.5rem_1fr] items-baseline gap-6 border-t border-white/5 pt-6 first:border-0 first:pt-0 md:grid-cols-[3.5rem_1fr] md:gap-8"
          >
            <Reveal delay={i * 0.04}>
              <span
                className="font-display italic text-white/60 nums-tabular"
                style={{ fontSize: 'var(--text-meta)', letterSpacing: '0.04em' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </Reveal>
            <Reveal delay={i * 0.04 + 0.02}>
              <div>
                <p
                  className="font-display font-medium"
                  style={{ fontSize: 'var(--text-title)', lineHeight: 1.15, letterSpacing: '-0.01em' }}
                >
                  {p.title}
                </p>
                <p
                  className="mt-3 text-pretty leading-relaxed text-white/75"
                  style={{ fontSize: 'var(--text-body)' }}
                >
                  {p.body}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-16 md:mt-20">
        <PullQuote attribution="Chaos to Creation, p. 221" width="wide">
          Biology is too complex to be fully captured in one equation.
        </PullQuote>
      </div>
    </div>
  </section>
);

// -------------------------------------------------------------
// Clinical cases — two factual case panels.
// -------------------------------------------------------------

const ClinicalCases = () => (
  <section
    aria-labelledby="cases-heading"
    className="border-t border-white/5 px-6 py-24 md:py-32"
  >
    <div className="mx-auto max-w-7xl">
      <ChapterMark
        number="CLINICAL CASES"
        title="Where the formula meets the bedside."
        subtitle="Two factual case panels referenced in the book and the published literature."
      />

      <ol className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-2 md:gap-16">
        {CASE_STUDIES.map((c, i) => (
          <li key={c.id}>
            <Reveal delay={i * 0.05}>
              <article>
                <p
                  className="font-display italic text-medical-teal nums-tabular"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1, letterSpacing: '-0.02em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3
                  className="mt-6 font-display font-medium"
                  style={{
                    fontSize: 'var(--text-title)',
                    lineHeight: 1.15,
                    letterSpacing: '-0.012em',
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="mt-5 text-pretty leading-relaxed text-white/75"
                  style={{ fontSize: 'var(--text-body)' }}
                >
                  {c.body}
                </p>
                <p className="mt-6 eyebrow text-white/60">{c.attribution}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={0.18}>
        <div className="mt-16 flex justify-center md:mt-20">
          <Link viewTransition
            to="/book/case-studies"
            className="group/link inline-flex items-center gap-2 text-white/75 transition-colors hover:text-medical-teal"
            style={{
              fontSize: 'var(--text-eyebrow)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Read the case studies in full
            <ArrowRight
              aria-hidden="true"
              size={13}
              className="transition-transform group-hover/link:translate-x-0.5"
            />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

// -------------------------------------------------------------
// Endorsements — refined glass cards (glass-thin), Fraunces titles.
// -------------------------------------------------------------

const EndorsementsSection = () => (
  <section
    aria-labelledby="endorsements-heading"
    className="border-y border-white/5 px-6 py-24 md:py-32"
    style={{ backgroundColor: 'var(--color-brand-panel)' }}
  >
    <div className="mx-auto max-w-7xl">
      <ChapterMark
        number="PRAISE FOR THE BOOK"
        title="From the book jacket."
        subtitle="Reactions to Chaos to Creation from beyond the author's own field."
      />

      <ul className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
        {BOOK_ENDORSEMENTS.map((e, i) => (
          <li key={e.by}>
            <Reveal delay={i * 0.05}>
              <article className="flex h-full flex-col gap-6 rounded-3xl glass-thin p-8">
                <Quote
                  aria-hidden="true"
                  size={20}
                  strokeWidth={1.5}
                  className="text-medical-teal/80"
                />
                <blockquote
                  className="text-pretty font-display italic leading-relaxed text-white/85"
                  style={{ fontSize: 'var(--text-body)' }}
                >
                  &ldquo;{e.quote}&rdquo;
                </blockquote>
                <footer className="mt-auto border-t border-white/5 pt-5">
                  <p
                    className="font-display font-medium text-white/95"
                    style={{ fontSize: 'var(--text-body)' }}
                  >
                    {e.by}
                  </p>
                  <p
                    className="mt-1 leading-relaxed text-white/70"
                    style={{ fontSize: 'var(--text-meta)' }}
                  >
                    {e.title}
                  </p>
                </footer>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

// -------------------------------------------------------------
// Close — quiet exit, mirrors the opening hero in register.
// -------------------------------------------------------------

const BookCloseCTA = () => (
  <section
    aria-label="Close"
    className="relative overflow-hidden px-6 py-28 md:py-36"
  >
    <Glow className="bottom-0 left-1/2 -translate-x-1/2" color="teal" />

    <div className="relative mx-auto max-w-3xl text-center">
      <Reveal>
        <p className="eyebrow text-medical-teal/85">{BOOK.title}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          className="mt-6 text-balance font-display italic font-medium"
          style={{
            fontSize: 'var(--text-display)',
            lineHeight: 1.1,
            letterSpacing: '-0.018em',
          }}
        >
          &ldquo;Lifespan is an energy balance, not a clock.&rdquo;
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 eyebrow text-white/60">Chaos to Creation, p. 221 — Rule 3</p>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mt-14 flex flex-col items-center justify-center gap-6">
          <FormatButtons size="lg" />
          <Link viewTransition
            to="/"
            className="group/back mt-2 inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            style={{
              fontSize: 'var(--text-eyebrow)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            <ArrowLeft
              aria-hidden="true"
              size={13}
              className="transition-transform group-hover/back:-translate-x-0.5"
            />
            Back to the personal site
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);
