import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { EditorialCard } from '@/components/ui/EditorialCard';
import { Reveal } from '@/components/ui/Motion';
import { FULL_PUBLICATIONS, RESEARCH_THEMES } from '@/constants';

/**
 * FeaturedResearch — the home research showcase.
 *
 * All six themes as EditorialCards in a 3×2 editorial grid, each
 * deep-linking to its section on /research. Publication counts are
 * derived from the theme tags on FULL_PUBLICATIONS — no hardcoded
 * numbers.
 */
export const FeaturedResearch = () => (
  <section aria-labelledby="featured-research-heading" className="px-6 py-24 md:py-32">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-3xl space-y-5">
          <Reveal>
            <p className="eyebrow">Research</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="featured-research-heading"
              className="text-balance font-display font-medium"
              style={{ fontSize: 'var(--text-display)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
            >
              Six lines of inquiry, <em className="italic">one question.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-pretty leading-relaxed text-white/75"
              style={{ fontSize: 'var(--text-lede)' }}
            >
              How does the body repair itself — and how far can that capacity be
              extended?
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.12}>
          <Link
            to="/research/publications"
            viewTransition
            className="inline-flex min-h-11 items-center gap-1.5 text-white/75 transition-colors hover:text-medical-teal"
            style={{
              fontSize: 'var(--text-eyebrow)',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            All publications
            <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </Reveal>
      </div>

      <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {RESEARCH_THEMES.map((theme, i) => {
          const count = FULL_PUBLICATIONS.filter((p) => p.theme === theme.slug).length;
          return (
            <li key={theme.slug}>
              <Reveal delay={(i % 3) * 0.06}>
                <EditorialCard
                  to={`/research#${theme.slug}`}
                  title={theme.title}
                  body={theme.summary}
                  meta={count > 0 ? `${count} listed publication${count === 1 ? '' : 's'}` : undefined}
                  cta="Explore"
                />
              </Reveal>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
