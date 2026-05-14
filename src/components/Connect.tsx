import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { ICONS } from '@/lib/icons';
import { CONTACT_EMAIL, PRACTICE_URL, PRESS_PHONE, SOCIAL_LINKS } from '@/constants';

const mailHref = `mailto:${CONTACT_EMAIL}`;
const telHref = `tel:${PRESS_PHONE.replace(/[^\d+]/g, '')}`;

/**
 * Connect — flat two-column.
 *
 * Reimagined per the Apple-grade brief:
 *  - The large rounded glass container is gone. Connect now reads as
 *    typography on the page, anchored by a single eyebrow.
 *  - Left column: the "this is a personal site" copy + practice-site
 *    affordance.
 *  - Right column: the four verified social profiles (rel="me") plus
 *    email and phone.
 *  - Quiet exit. No CTA pressure.
 */
export const Connect = () => (
  <section
    id="connect"
    aria-labelledby="connect-heading"
    className="px-6 py-24 md:py-32"
  >
    <div className="mx-auto max-w-7xl">
      <Reveal>
        <p className="eyebrow">Connect</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          id="connect-heading"
          className="mt-5 max-w-3xl text-balance font-display font-medium"
          style={{
            fontSize: 'var(--text-display)',
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
          }}
        >
          Stay in{' '}
          <em className="font-display italic font-normal text-white/55">touch.</em>
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-12 border-t border-white/10 pt-12 lg:grid-cols-2 lg:gap-20 md:mt-16 md:pt-14">
        {/* Left column — what this site is, where the clinic is. */}
        <div>
          <Reveal>
            <p
              className="max-w-md text-pretty leading-relaxed text-white/70"
              style={{ fontSize: 'var(--text-lede)' }}
            >
              This is a personal site — for clinical care or to arrange an appointment,
              please see the practice site.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href={PRACTICE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the practice site at orthopaedic-surgeon.com.au (opens in a new tab)"
              className="group/link mt-6 inline-flex items-center gap-1.5 text-medical-teal/85 transition-colors hover:text-medical-teal"
              style={{
                fontSize: 'var(--text-eyebrow)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              orthopaedic-surgeon.com.au
              <ArrowUpRight
                aria-hidden="true"
                size={13}
                className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>

        {/* Right column — channels. */}
        <div className="space-y-10">
          <Reveal>
            <div>
              <a
                href={mailHref}
                className="inline-flex items-center gap-3 text-white/90 underline-offset-4 transition-colors hover:text-medical-teal hover:underline"
                style={{ fontSize: 'var(--text-title)', fontFamily: 'var(--font-display)' }}
              >
                <Mail aria-hidden="true" size={20} strokeWidth={1.5} />
                {CONTACT_EMAIL}
              </a>
              <a
                href={telHref}
                className="mt-3 inline-flex items-center gap-2 text-white/55 underline-offset-4 transition-colors hover:text-medical-teal hover:underline"
                style={{ fontSize: 'var(--text-meta)' }}
              >
                <Phone aria-hidden="true" size={13} strokeWidth={1.5} />
                {PRESS_PHONE}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-white/45"
              style={{ fontSize: 'var(--text-meta)' }}
            >
              Media &amp; speaking enquiries — Adelaide Slater handles via the address above.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <ul className="flex flex-wrap items-center gap-3 border-t border-white/5 pt-8">
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
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full glass-thin text-white/65 transition-colors hover:text-medical-teal"
                    >
                      <Icon aria-hidden="true" size={17} strokeWidth={1.5} />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
