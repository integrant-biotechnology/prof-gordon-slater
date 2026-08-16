import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { CONTACT_PATHWAYS } from '@/data/contact';

/**
 * ClosingConnect — the home page's action close.
 *
 * Mirrors the three /contact pathways in miniature so the last thing
 * a visitor sees is a clear way in — then one button to the full
 * contact page.
 */
export const ClosingConnect = () => (
  <section
    id="connect"
    aria-labelledby="closing-connect-heading"
    className="px-6 py-24 md:py-32"
  >
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2
            id="closing-connect-heading"
            className="text-balance font-display font-medium"
            style={{
              fontSize: 'var(--text-display)',
              lineHeight: 1.05,
              letterSpacing: '-0.015em',
            }}
          >
            Work with{' '}
            <em className="font-display italic font-normal text-white/70">
              Professor Slater.
            </em>
          </h2>
        </Reveal>
      </div>

      <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-x-10 gap-y-10 text-left md:grid-cols-3">
        {CONTACT_PATHWAYS.map((pathway, i) => (
          <li key={pathway.id}>
            <Reveal delay={i * 0.05}>
              <div className="border-t border-white/10 pt-6">
                <p
                  className="text-medical-teal/90"
                  style={{
                    fontSize: 'var(--text-eyebrow)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  {pathway.kicker}
                </p>
                <p className="mt-3 font-display font-medium leading-snug text-white/90"
                  style={{ fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)', letterSpacing: '-0.008em' }}
                >
                  {pathway.title}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-14 text-center">
        <Reveal delay={0.12}>
          <Link
            viewTransition
            to="/contact"
            className="group/link inline-flex h-13 min-h-12 items-center gap-2 rounded-full bg-medical-teal px-8 text-base font-semibold transition-[background-color,transform] duration-200 ease-out hover:scale-[1.02] hover:bg-medical-teal/90"
            style={{ color: 'var(--color-brand-bg)' }}
          >
            Get in touch
            <ArrowRight
              aria-hidden="true"
              size={16}
              strokeWidth={2}
              className="transition-transform group-hover/link:translate-x-0.5"
            />
          </Link>
        </Reveal>
      </div>
    </div>
  </section>
);
