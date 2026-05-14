import { Reveal } from '@/components/ui/Motion';
import { LEADERSHIP_ROLES, TRAINING } from '@/constants';

/**
 * Background — chronological essay layout.
 *
 * Reimagined per the Apple-grade brief:
 *  - Years anchor the left margin in Fraunces italic at meta size.
 *    Narrative blocks sit to the right in body type.
 *  - The right-column "Academic & leadership" sticky card becomes a
 *    quiet typographic addendum below the timeline — same column,
 *    flowing from the same rhythm. No glass card.
 *  - Reads like a chapter of a memoir, not a CV.
 */
export const Background = () => (
  <section
    id="background"
    aria-labelledby="background-heading"
    className="px-6 py-24 md:py-32"
  >
    <div className="mx-auto max-w-5xl">
      <Reveal>
        <p className="eyebrow">Training &amp; background</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          id="background-heading"
          className="mt-5 max-w-2xl text-balance font-display font-medium"
          style={{
            fontSize: 'var(--text-display)',
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
          }}
        >
          A foundation built{' '}
          <em className="font-display italic font-normal text-white/55">
            over decades.
          </em>
        </h2>
      </Reveal>

      <ol className="mt-16 md:mt-20">
        {TRAINING.map((item, i) => (
          <li
            key={`${item.year}-${i}`}
            className="grid grid-cols-[6rem_1fr] gap-x-8 gap-y-3 border-t border-white/5 py-7 first:border-0 first:pt-0 md:grid-cols-[8rem_1fr] md:gap-x-12"
          >
            <Reveal delay={i * 0.03}>
              <span
                className="font-display italic text-white/55 nums-tabular"
                style={{ fontSize: 'var(--text-meta)' }}
              >
                {item.year}
              </span>
            </Reveal>
            <Reveal delay={i * 0.03 + 0.02}>
              <p
                className="text-pretty leading-relaxed text-white/85"
                style={{ fontSize: 'var(--text-body)' }}
              >
                {item.label}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>

      {/* Academic / leadership — flows from the same rhythm, not a card. */}
      <div className="mt-20 border-t border-white/10 pt-12 md:mt-24">
        <Reveal>
          <p className="eyebrow">Academic &amp; leadership</p>
        </Reveal>
        <ul className="mt-8 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-10">
          {LEADERSHIP_ROLES.map(({ role, org }, i) => (
            <li
              key={`${role}-${org}`}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-5"
            >
              <Reveal delay={i * 0.03}>
                <span
                  aria-hidden="true"
                  className="block h-1 w-1 translate-y-[-3px] rounded-full bg-medical-teal/85"
                />
              </Reveal>
              <Reveal delay={i * 0.03 + 0.02}>
                <div>
                  <p
                    className="font-medium text-white/90"
                    style={{ fontSize: 'var(--text-body)' }}
                  >
                    {role}
                  </p>
                  <p
                    className="mt-1 text-white/55"
                    style={{ fontSize: 'var(--text-meta)' }}
                  >
                    {org}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal delay={0.16}>
          <p
            className="mt-10 text-white/45"
            style={{ fontSize: 'var(--text-meta)' }}
          >
            Presents at international surgical conferences.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
