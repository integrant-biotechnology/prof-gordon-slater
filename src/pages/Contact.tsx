import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { PageShell } from '@/templates/PageShell';
import { PageHero } from '@/templates/PageHero';
import { ICONS } from '@/lib/icons';
import { findRoute } from '@/lib/site';
import {
  CONTACT_EMAIL,
  PRACTICE_URL,
  PRESS_PHONE,
  SOCIAL_LINKS,
} from '@/constants';

const mailHref = `mailto:${CONTACT_EMAIL}`;
const telHref = `tel:${PRESS_PHONE.replace(/[^\d+]/g, '')}`;

/**
 * /contact — minimal, single-focus.
 *
 * Page character (plan §B): type-only register; three explicit
 * contact paths in a vertical typographic stack — clinical care,
 * press & marketing, speaking inquiries. No glass cards, no CTA
 * pressure. Closes with the four verified social profiles.
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
            Get in{' '}
            <em className="font-display italic font-normal text-white/55">touch.</em>
          </>
        }
        lede="This is a personal site — not a clinic. The three paths below cover clinical care, press &amp; marketing, and speaking inquiries."
      />

      {/* Three contact paths — typographic stack. */}
      <section
        aria-label="Contact paths"
        className="px-6 pb-16 md:pb-24"
      >
        <div className="mx-auto max-w-3xl">
          <ol className="divide-y divide-white/10">
            {/* 1. Clinical care */}
            <li className="py-10 first:pt-0">
              <Reveal>
                <p className="eyebrow">Clinical care</p>
                <p
                  className="mt-5 max-w-xl text-pretty leading-relaxed text-white/75"
                  style={{ fontSize: 'var(--text-body)' }}
                >
                  For appointments, referrals, or anything clinical, please go through the
                  practice site.
                </p>
                <a
                  href={PRACTICE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit the practice site at orthopaedic-surgeon.com.au (opens in a new tab)"
                  className="group/link mt-5 inline-flex items-center gap-1.5 text-medical-teal/85 transition-colors hover:text-medical-teal"
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
            </li>

            {/* 2. Press & marketing */}
            <li className="py-10">
              <Reveal>
                <p className="eyebrow">Press &amp; marketing</p>
                <p
                  className="mt-5 max-w-xl text-pretty leading-relaxed text-white/75"
                  style={{ fontSize: 'var(--text-body)' }}
                >
                  Media inquiries, book press, podcast bookings, and partnership requests —
                  Adelaide Slater handles these.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href={mailHref}
                    className="inline-flex items-center gap-3 text-white/90 underline-offset-4 transition-colors hover:text-medical-teal hover:underline"
                    style={{
                      fontSize: 'var(--text-title)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    <Mail aria-hidden="true" size={20} strokeWidth={1.5} />
                    {CONTACT_EMAIL}
                  </a>
                  <a
                    href={telHref}
                    className="inline-flex items-center gap-2 text-white/55 underline-offset-4 transition-colors hover:text-medical-teal hover:underline"
                    style={{ fontSize: 'var(--text-meta)' }}
                  >
                    <Phone aria-hidden="true" size={13} strokeWidth={1.5} />
                    {PRESS_PHONE}
                  </a>
                </div>
              </Reveal>
            </li>

            {/* 3. Speaking inquiries */}
            <li className="py-10 last:pb-0">
              <Reveal>
                <p className="eyebrow">Speaking inquiries</p>
                <p
                  className="mt-5 max-w-xl text-pretty leading-relaxed text-white/75"
                  style={{ fontSize: 'var(--text-body)' }}
                >
                  Conference invitations, university lectures, and panel appearances — same
                  contact as press &amp; marketing above.
                </p>
              </Reveal>
            </li>
          </ol>
        </div>
      </section>

      {/* Social profiles — four verified accounts. */}
      <section
        aria-label="Social profiles"
        className="border-t border-white/10 px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-3xl">
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
      </section>
    </PageShell>
  );
};

export default Contact;
