import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { ICONS } from '@/lib/icons';
import {
  BODY_OF_WORK,
  PUBLICATIONS_INDEX_URL,
  RESEARCH_THEMES,
  SELECTED_PUBLICATIONS,
} from '@/constants';

const isPlaceholderUrl = (url?: string) => !url || url === '#';

const HoverArrow = ({ external }: { external: boolean }) =>
  external ? (
    <ArrowUpRight aria-hidden="true" size={13} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
  ) : (
    <ArrowRight aria-hidden="true" size={13} className="transition-transform group-hover/link:translate-x-0.5" />
  );

/**
 * BodyOfWork — asymmetric editorial layout.
 *
 * Reimagined per the Apple-grade brief:
 *  - The four-column "icon + title + description" card grid is
 *    replaced with one feature theme at 7/12 width and three
 *    supporting themes stacked at 5/12 width.
 *  - No glass cards, no hover glow. The feature carries weight
 *    through scale; the supporting items through quiet typography.
 *  - Selected publications becomes a quiet typographic list — title
 *    in Fraunces, venue in Inter italic at meta size. No glass card.
 */
export const BodyOfWork = () => {
  const [feature, ...supporting] = BODY_OF_WORK;
  const FeatureIcon = feature ? ICONS[feature.icon] : null;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Body of work</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="work-heading"
            className="mt-5 max-w-3xl text-balance font-display font-medium"
            style={{
              fontSize: 'var(--text-display)',
              lineHeight: 1.05,
              letterSpacing: '-0.015em',
            }}
          >
            A wider body{' '}
            <em className="font-display italic font-normal text-white/55">
              of work.
            </em>
          </h2>
        </Reveal>

        {/* Research themes — quiet orientation strip. */}
        <Reveal delay={0.12}>
          <ul className="mt-10 flex flex-wrap gap-2">
            {RESEARCH_THEMES.map((theme) => (
              <li
                key={theme}
                className="rounded-full border border-medical-teal/20 bg-medical-teal/5 px-3.5 py-1.5 text-medical-teal/85"
                style={{ fontSize: 'var(--text-eyebrow)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}
              >
                {theme}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Asymmetric grid: feature 7/12, supporting 5/12. */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 md:mt-20">
          {feature && FeatureIcon && (
            <Reveal className="lg:col-span-7">
              <article>
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl glass text-medical-teal"
                >
                  <FeatureIcon size={20} strokeWidth={1.5} />
                </span>
                <h3
                  className="mt-7 font-display font-medium"
                  style={{
                    fontSize: 'var(--text-title)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.012em',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="mt-4 max-w-xl text-pretty leading-relaxed text-white/65"
                  style={{ fontSize: 'var(--text-body)' }}
                >
                  {feature.description}
                </p>
                {feature.href && feature.linkLabel && !isPlaceholderUrl(feature.href) && (
                  <div className="mt-7">
                    {feature.internal ? (
                      <Link
                        to={feature.href}
                        className="group/link inline-flex items-center gap-1.5 text-white/65 transition-colors hover:text-medical-teal"
                        style={{ fontSize: 'var(--text-eyebrow)', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 }}
                      >
                        {feature.linkLabel}
                        <HoverArrow external={false} />
                      </Link>
                    ) : (
                      <a
                        href={feature.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${feature.linkLabel} (opens in a new tab)`}
                        className="group/link inline-flex items-center gap-1.5 text-white/65 transition-colors hover:text-medical-teal"
                        style={{ fontSize: 'var(--text-eyebrow)', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 }}
                      >
                        {feature.linkLabel}
                        <HoverArrow external={true} />
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          )}

          {/* Supporting themes — stacked typographic list. */}
          <ul className="space-y-10 lg:col-span-5">
            {supporting.map((item, i) => {
              const Icon = ICONS[item.icon];
              const linkable = item.href && item.linkLabel && !isPlaceholderUrl(item.href);
              return (
                <li key={item.id}>
                  <Reveal delay={i * 0.04}>
                    <article className="grid grid-cols-[auto_1fr] items-baseline gap-5">
                      <span
                        aria-hidden="true"
                        className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl glass-thin text-white/55"
                      >
                        <Icon size={15} strokeWidth={1.5} />
                      </span>
                      <div>
                        <h3
                          className="font-display font-medium"
                          style={{
                            fontSize: '1.25rem',
                            lineHeight: 1.15,
                            letterSpacing: '-0.008em',
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="mt-2 text-pretty leading-relaxed text-white/55"
                          style={{ fontSize: 'var(--text-meta)' }}
                        >
                          {item.description}
                        </p>
                        {linkable && (
                          <div className="mt-3">
                            {item.internal ? (
                              <Link
                                to={item.href!}
                                className="group/link inline-flex items-center gap-1.5 text-white/55 transition-colors hover:text-medical-teal"
                                style={{ fontSize: 'var(--text-eyebrow)', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 }}
                              >
                                {item.linkLabel}
                                <HoverArrow external={false} />
                              </Link>
                            ) : (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${item.linkLabel} (opens in a new tab)`}
                                className="group/link inline-flex items-center gap-1.5 text-white/55 transition-colors hover:text-medical-teal"
                                style={{ fontSize: 'var(--text-eyebrow)', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 }}
                              >
                                {item.linkLabel}
                                <HoverArrow external={true} />
                              </a>
                            )}
                          </div>
                        )}
                        {item.placeholder && (
                          <p
                            className="mt-2 text-white/25"
                            style={{ fontSize: 'var(--text-eyebrow)', letterSpacing: '0.2em', textTransform: 'uppercase' }}
                          >
                            Placeholder — link to be supplied
                          </p>
                        )}
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Selected publications — flat typographic list, no glass card. */}
        <div id="publications" className="mt-24 border-t border-white/10 pt-12 md:mt-32">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Selected publications</p>
                <h3
                  className="mt-4 font-display font-medium"
                  style={{
                    fontSize: 'var(--text-title)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.012em',
                  }}
                >
                  Representative entries.{' '}
                  <span className="text-white/45">2003 &ndash; 2026.</span>
                </h3>
              </div>
              {!isPlaceholderUrl(PUBLICATIONS_INDEX_URL) ? (
                <a
                  href={PUBLICATIONS_INDEX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Full publications list (opens in a new tab)"
                  className="group/link inline-flex items-center gap-1.5 text-white/65 transition-colors hover:text-medical-teal"
                  style={{ fontSize: 'var(--text-eyebrow)', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 }}
                >
                  Full list
                  <HoverArrow external={true} />
                </a>
              ) : (
                <span
                  className="text-white/30"
                  style={{ fontSize: 'var(--text-eyebrow)', letterSpacing: '0.2em', textTransform: 'uppercase' }}
                >
                  Full Google Scholar / ORCID profile to be supplied
                </span>
              )}
            </div>
          </Reveal>

          <ol className="mt-10 divide-y divide-white/5">
            {SELECTED_PUBLICATIONS.map((pub, i) => (
              <li
                key={i}
                className="flex flex-col gap-2 py-6 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <Reveal delay={i * 0.02} as="span" className="block flex-1">
                  <p
                    className="font-display font-medium leading-snug text-white/90"
                    style={{ fontSize: '1.0625rem', letterSpacing: '-0.005em' }}
                  >
                    {pub.href && !isPlaceholderUrl(pub.href) ? (
                      <a
                        href={pub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 transition-colors hover:text-white hover:underline"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </p>
                </Reveal>
                {(pub.venue || pub.year) && (
                  <Reveal delay={i * 0.02 + 0.02} as="span" className="block shrink-0">
                    <p
                      className="italic text-white/45"
                      style={{ fontSize: 'var(--text-meta)' }}
                    >
                      {[pub.venue, pub.year].filter(Boolean).join(' · ')}
                    </p>
                  </Reveal>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
