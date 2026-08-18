import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';
import { PageShell } from '@/templates/PageShell';
import { PageHero } from '@/templates/PageHero';
import { Reveal } from '@/components/ui/Motion';
import { findRoute } from '@/lib/site';
import { ICONS } from '@/lib/icons';
import { CONTACT_PATHWAYS } from '@/data/contact';
import { SOCIAL_LINKS } from '@/constants';

/**
 * /contact — Work With Professor Gordon Slater.
 *
 * Three large pathway cards (Clinical → practice site, Research &
 * Collaboration → email, Speaking & Media → email + phone). The site
 * stays non-clinical and form-free; every action is an outbound
 * link, mailto or tel.
 */
const Contact = () => {
  const route = findRoute('/contact');
  if (!route) return null;

  return (
    <PageShell route={route}>
      <PageHero
        variant="type-only"
        eyebrow="Contact"
        title={
          <>
            Work with{' '}
            <em className="font-display italic font-normal text-white/70">
              Professor Gordon Slater.
            </em>
          </>
        }
        lede="Three pathways — clinical care through the practice, research and collaboration, and speaking or media. Choose the one that fits and reach out directly."
      />

      {/* The three pathways — large panel cards. */}
      <section aria-label="Contact pathways" className="px-6 pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
          {CONTACT_PATHWAYS.map((pathway, i) => (
            <Reveal key={pathway.id} delay={i * 0.06} className="h-full">
              <article
                className="flex h-full flex-col rounded-3xl p-8 md:p-10"
                style={{ backgroundColor: 'var(--color-brand-panel)' }}
              >
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
                <h2
                  className="mt-4 font-display font-medium text-white/95"
                  style={{
                    fontSize: 'var(--text-title)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.012em',
                  }}
                >
                  {pathway.title}
                </h2>
                <p className="mt-4 flex-1 text-pretty leading-relaxed text-white/80">
                  {pathway.body}
                </p>
                <div className="mt-8 space-y-4">
                  {pathway.action.external ? (
                    <a
                      href={pathway.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/action inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-full border border-white/20 px-6 font-medium text-white/90 transition-colors hover:border-medical-teal/60 hover:text-white"
                    >
                      <span className="truncate">{pathway.action.label}</span>
                      <ArrowUpRight
                        aria-hidden="true"
                        size={17}
                        className="shrink-0 transition-transform group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5"
                      />
                    </a>
                  ) : (
                    <a
                      href={pathway.action.href}
                      className="group/action inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-full border border-white/20 px-6 font-medium text-white/90 transition-colors hover:border-medical-teal/60 hover:text-white"
                    >
                      <span className="truncate">{pathway.action.label}</span>
                      <ArrowRight
                        aria-hidden="true"
                        size={17}
                        className="shrink-0 transition-transform group-hover/action:translate-x-0.5"
                      />
                    </a>
                  )}
                  {pathway.secondary && (
                    <a
                      href={pathway.secondary.href}
                      className="inline-flex min-h-11 items-center gap-2 px-1 text-white/75 underline-offset-4 transition-colors hover:text-medical-teal hover:underline nums-tabular"
                      style={{ fontSize: 'var(--text-meta)' }}
                    >
                      <Phone aria-hidden="true" size={15} strokeWidth={1.5} />
                      {pathway.secondary.label}
                    </a>
                  )}
                  {pathway.press && (
                    <a
                      href={pathway.press.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${pathway.press.label} (opens in a new tab)`}
                      className="group/press inline-flex min-h-11 items-center gap-2 px-1 text-white/75 underline-offset-4 transition-colors hover:text-medical-teal hover:underline"
                      style={{ fontSize: 'var(--text-meta)' }}
                    >
                      {pathway.press.label}
                      <ArrowUpRight
                        aria-hidden="true"
                        size={14}
                        className="transition-transform group-hover/press:translate-x-0.5 group-hover/press:-translate-y-0.5"
                      />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Social profiles — four verified accounts. */}
      <section
        aria-label="Social profiles"
        className="border-t border-white/10 px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">Follow</p>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="mt-6 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = ICONS[social.icon];
                const isPlaceholder = social.placeholder || social.url === '#';
                return (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel={isPlaceholder ? 'noopener noreferrer' : 'me noopener noreferrer'}
                      aria-label={`${social.label}${isPlaceholder ? ' (link coming soon)' : ' (opens in a new tab)'}`}
                      title={isPlaceholder ? `${social.label} — link coming soon` : social.label}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full glass-thin text-white/80 transition-colors hover:text-medical-teal"
                    >
                      <Icon aria-hidden="true" size={18} strokeWidth={1.5} />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
