import { Reveal } from '@/components/ui/Motion';
import { EditorialImage } from '@/components/ui/EditorialImage';
import { PageShell } from '@/templates/PageShell';
import { PageHero } from '@/templates/PageHero';
import { findRoute } from '@/lib/site';
import { CASE_STUDIES } from '@/constants';

/**
 * /book/case-studies — clinical-case editorial cards.
 *
 * Page character (plan §B): editorial card register with photo
 * treatment. Today every card uses the EditorialImage placeholder
 * (the component renders a quiet radial gradient when neither
 * `src` nor `fallbackSrc` is set) — commissioned photography lands
 * in a later content PR.
 */
const CaseStudies = () => {
  const route = findRoute('/book/case-studies');
  if (!route) return null;

  return (
    <PageShell route={route}>
      <PageHero
        variant="type-only"
        kicker="The Book / Case studies"
        eyebrow="Clinical record"
        title={
          <>
            From chaos to creation,{' '}
            <em className="font-display italic font-normal text-white/70">
              on real bodies.
            </em>
          </>
        }
        lede="Two factual clinical-case panels referenced in Chaos to Creation and the published literature. Each panel is a small worked example of the Life Force argument — environment, regenerative capacity, and damage composing into an outcome."
      />

      <section aria-label="Case studies" className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <ol className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12 lg:gap-16">
            {CASE_STUDIES.map((c, i) => (
              <li key={c.id}>
                <Reveal delay={i * 0.06}>
                  <article>
                    {/* Editorial-card photo treatment.
                        Placeholder block today; commissioned photography
                        lands later via the EditorialImage src API. */}
                    <EditorialImage
                      alt={`Case ${i + 1}: ${c.title} — placeholder photo`}
                      aspect="3/2"
                      sizes="(min-width: 768px) 45vw, 100vw"
                    />
                    <p
                      className="mt-7 font-display italic text-medical-teal nums-tabular"
                      style={{
                        fontSize: 'var(--text-meta)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      Case {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2
                      className="mt-3 font-display font-medium"
                      style={{
                        fontSize: 'var(--text-title)',
                        lineHeight: 1.1,
                        letterSpacing: '-0.012em',
                      }}
                    >
                      {c.title}
                    </h2>
                    <p
                      className="mt-5 text-pretty leading-relaxed text-white/75"
                      style={{ fontSize: 'var(--text-body)' }}
                    >
                      {c.body}
                    </p>
                    <p className="mt-7 eyebrow text-white/60">{c.attribution}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
};

export default CaseStudies;
