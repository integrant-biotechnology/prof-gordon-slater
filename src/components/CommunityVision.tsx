import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { COMMUNITY, VISION_STATEMENT } from '@/constants';

export const CommunityVision = () => {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="border-y border-white/5 bg-brand-panel/30 px-6 py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="community-heading"
          eyebrow="Beyond the operating theatre"
          title="Community & vision."
          intro="Mentoring and teaching, contribution to professional bodies, and a long-running interest in supporting Australian medical-device innovation."
          className="mb-14 md:mb-16"
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div>
            <h3 className="mb-6 font-display text-xl font-semibold text-white">Community contribution</h3>
            <ul className="space-y-3">
              {COMMUNITY.map((item) => {
                const isGiving = item.title === 'Supporting medical research';
                return (
                  <li key={item.title} className="rounded-2xl glass bg-white/[0.01] p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-medium text-white/85">{item.title}</p>
                      {item.placeholder && (
                        <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-white/30">
                          placeholder
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.description}</p>
                    {isGiving && (
                      <Link
                        to="/giving"
                        className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-medical-teal/85 transition-colors hover:text-medical-teal"
                      >
                        See more
                        <ArrowRight aria-hidden="true" size={12} />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <figure className="relative overflow-hidden rounded-3xl glass bg-linear-to-br from-medical-teal/[0.06] to-transparent p-8 md:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_85%_15%,rgba(20,184,166,0.08),transparent_60%)]"
            />
            <div className="relative">
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl glass text-medical-teal">
                <Quote aria-hidden="true" size={20} strokeWidth={1.5} />
              </span>
              <h3 className="mb-4 font-display text-2xl font-semibold leading-tight text-white">
                A vision for Australian medical innovation
              </h3>
              <blockquote className="text-pretty text-base leading-relaxed text-white/75">
                {VISION_STATEMENT}
              </blockquote>
              <figcaption className="mt-6 text-[10px] uppercase tracking-[0.22em] text-white/35">
                Anchored on Slater, Sambo &amp; Hannan (2019) and the FDA–EMA Joint Guiding Principles of Good AI Practice (Jan 2026)
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};
