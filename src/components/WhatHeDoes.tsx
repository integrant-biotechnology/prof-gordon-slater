import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { Button } from '@/components/ui/Button';
import { ICONS } from '@/lib/icons';
import { CAPABILITIES } from '@/constants';

const scrollTo = (id: string) => () =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/**
 * WhatHeDoes — the second section, where the visitor exhales after the
 * hero and reads the four threads that run through the work.
 *
 * Reimagined per the Apple-grade brief:
 *  - The four "icon + title + description" cards become a single
 *    column of four declarations. Each one line of headline-typography
 *    + a short Inter paragraph. Icon stays, smaller and quieter, to
 *    the left of the headline.
 *  - The two CTAs removed from the hero in PR #9 re-emerge here as a
 *    grounded pair beneath the four declarations.
 *  - No cards. No grid. No hover glow. Typography and rhythm.
 */
export const WhatHeDoes = () => {
  const navigate = useNavigate();
  return (
    <section
      id="focus"
      aria-labelledby="focus-heading"
      className="border-y border-white/5 px-6 py-24 md:py-32"
      style={{ backgroundColor: 'var(--color-brand-panel)' }}
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow">What he does</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="focus-heading"
            className="mt-5 max-w-3xl text-balance font-display font-medium"
            style={{
              fontSize: 'var(--text-display)',
              lineHeight: 1.05,
              letterSpacing: '-0.015em',
            }}
          >
            Four threads,{' '}
            <em className="font-display italic font-normal">one practice.</em>
          </h2>
        </Reveal>

        <ol className="mt-16 space-y-12 md:mt-20 md:space-y-16">
          {CAPABILITIES.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <li key={item.title}>
                <Reveal delay={i * 0.04}>
                  <article className="grid grid-cols-[auto_1fr] items-baseline gap-6 md:gap-10">
                    <span
                      aria-hidden="true"
                      className="mt-2 flex h-10 w-10 items-center justify-center rounded-full glass-thin text-white/55"
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3
                        className="font-display font-medium"
                        style={{
                          fontSize: 'var(--text-title)',
                          lineHeight: 1.1,
                          letterSpacing: '-0.012em',
                        }}
                      >
                        {item.title}.
                      </h3>
                      <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-white/65">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>

        {/* The two CTAs that left the hero. Grounded here in the second
            section, where the visitor is ready to act. */}
        <Reveal delay={0.18}>
          <div className="mt-20 flex flex-col gap-3 sm:flex-row md:mt-24">
            <Button
              size="lg"
              variant="primary"
              className="min-w-[220px]"
              onClick={() => navigate('/book')}
            >
              Read the book
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="group min-w-[220px]"
              onClick={scrollTo('work')}
            >
              Explore his work
              <ArrowRight
                aria-hidden="true"
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
