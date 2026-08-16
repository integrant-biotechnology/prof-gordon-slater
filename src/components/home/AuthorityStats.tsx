import { Link } from 'react-router-dom';
import { Reveal } from '@/components/ui/Motion';
import { SITE_STATS } from '@/data/site-stats';

/**
 * AuthorityStats — the editorial "by the numbers" row under the hero.
 *
 * Large Fraunces values over hairline rules; no panels, no glass —
 * the numbers carry the weight. Stats with an `href` are links whose
 * rule warms to teal on hover. Verified claims only (site-stats.ts).
 */
export const AuthorityStats = () => (
  <section aria-label="Authority at a glance" className="px-6 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        {SITE_STATS.map((stat, i) => {
          const inner = (
            <>
              <span
                className="block font-display font-medium tracking-tight text-white/95 nums-tabular"
                style={{
                  fontSize: 'clamp(3rem, 5.5vw, 4.5rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </span>
              <span className="mt-3 block leading-snug text-white/75">{stat.label}</span>
            </>
          );
          const shell = 'block border-t border-white/10 pt-6 transition-colors';
          return (
            <li key={stat.label}>
              <Reveal delay={i * 0.06}>
                {stat.href ? (
                  <Link
                    to={stat.href}
                    viewTransition
                    className={`${shell} hover:border-medical-teal/40`}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className={shell}>{inner}</div>
                )}
              </Reveal>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
