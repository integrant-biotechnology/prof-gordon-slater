import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { BOOK } from '@/constants';

interface Panel {
  to: string;
  kicker: string;
  title: string;
  italic?: string;
  body: string;
  cta: string;
}

const PANELS: Panel[] = [
  {
    to: '/about',
    kicker: 'About',
    title: 'A surgeon’s record.',
    italic: 'A scientist’s questions.',
    body:
      'Thirty years of clinical foot & ankle work, plus the Sydney research network behind the longevity and regeneration thesis.',
    cta: 'Read about',
  },
  {
    to: '/research',
    kicker: 'Research',
    title: 'A wider body',
    italic: 'of work.',
    body:
      'Sixty peer-reviewed papers across six themes — surgery, orthobiologics, stem cells, HBOT, aging biology, AI in medicine.',
    cta: 'Explore research',
  },
  {
    to: '/book',
    kicker: 'Book',
    title: BOOK.title + '.',
    italic: BOOK.subtitle + '.',
    body: BOOK.summary,
    cta: 'Read the book page',
  },
];

/**
 * CuratedTrio — home page curated destinations.
 *
 * Replaces the former <BodyOfWork /> + <BookPreview /> on home with
 * a single editorial row of three typographic panels. Each panel is
 * a destination tile linking to its dedicated page (/about,
 * /research, /book). No glass cards, no hover glow — typography,
 * rhythm, and one quiet "Read" affordance per panel.
 */
export const CuratedTrio = () => (
  <section
    id="explore"
    aria-labelledby="curated-trio-heading"
    className="px-6 py-24 md:py-32"
  >
    <div className="mx-auto max-w-7xl">
      <Reveal>
        <p className="eyebrow">Explore</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          id="curated-trio-heading"
          className="mt-5 max-w-3xl text-balance font-display font-medium"
          style={{
            fontSize: 'var(--text-display)',
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
          }}
        >
          Three threads,{' '}
          <em className="font-display italic font-normal text-white/55">
            three pages.
          </em>
        </h2>
      </Reveal>

      <ul className="mt-16 grid grid-cols-1 gap-12 md:mt-20 lg:grid-cols-3 lg:gap-10">
        {PANELS.map((panel, i) => (
          <li key={panel.to}>
            <Reveal delay={i * 0.06}>
              <Link viewTransition
                to={panel.to}
                aria-label={`${panel.cta} — ${panel.kicker}`}
                className="group/panel block border-t border-white/10 pt-8 transition-colors hover:border-medical-teal/40"
              >
                <p
                  className="text-medical-teal/85"
                  style={{
                    fontSize: 'var(--text-eyebrow)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  {panel.kicker}
                </p>
                <h3
                  className="mt-5 text-balance font-display font-medium"
                  style={{
                    fontSize: 'var(--text-title)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.012em',
                  }}
                >
                  {panel.title}{' '}
                  {panel.italic && (
                    <em className="font-display italic font-normal text-white/55">
                      {panel.italic}
                    </em>
                  )}
                </h3>
                <p
                  className="mt-4 text-pretty leading-relaxed text-white/65"
                  style={{ fontSize: 'var(--text-body)' }}
                >
                  {panel.body}
                </p>
                <span
                  className="mt-7 inline-flex items-center gap-1.5 text-white/55 transition-colors group-hover/panel:text-medical-teal"
                  style={{
                    fontSize: 'var(--text-eyebrow)',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  {panel.cta}
                  <ArrowRight
                    aria-hidden="true"
                    size={13}
                    className="transition-transform group-hover/panel:translate-x-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
