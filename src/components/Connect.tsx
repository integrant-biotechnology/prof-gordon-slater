import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { Glow } from '@/components/ui/Glow';
import { ICONS } from '@/lib/icons';
import { CONTACT_EMAIL, PRACTICE_URL, PRESS_PHONE, SOCIAL_LINKS } from '@/constants';

const mailHref = `mailto:${CONTACT_EMAIL}`;
const telHref = `tel:${PRESS_PHONE.replace(/[^\d+]/g, '')}`;

export const Connect = () => {
  return (
    <section
      id="connect"
      aria-labelledby="connect-heading"
      className="relative overflow-hidden px-6 py-24 md:py-28"
    >
      <Glow className="bottom-0 left-1/2 -translate-x-1/2" color="blue" />

      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl glass bg-brand-panel/40 p-8 shadow-[0_0_100px_rgba(0,0,0,0.45)] md:rounded-[40px] md:p-14">
          <div className="text-center">
            <p className="eyebrow">Connect</p>
            <h2
              id="connect-heading"
              className="mt-4 text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
            >
              Stay in touch.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/65">
              This is a personal site — for clinical care or to arrange an appointment, please see
              the practice site.
            </p>
            <a
              href={PRACTICE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the practice site at orthopaedic-surgeon.com.au (opens in a new tab)"
              className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-medical-teal/85 transition-colors hover:text-medical-teal"
            >
              orthopaedic-surgeon.com.au
              <ArrowUpRight aria-hidden="true" size={13} />
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = ICONS[social.icon];
              const isPlaceholder = social.placeholder || social.url === '#';
              return (
                <li key={social.label}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label}${isPlaceholder ? ' (link coming soon)' : ' (opens in a new tab)'}`}
                    title={isPlaceholder ? `${social.label} — link coming soon` : social.label}
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-full glass text-white/65 transition-colors hover:text-medical-teal"
                  >
                    <Icon aria-hidden="true" size={18} strokeWidth={1.5} />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/5 pt-8 text-center">
            <a
              href={mailHref}
              className="inline-flex items-center gap-2 text-base font-medium text-white underline-offset-4 transition-colors hover:text-medical-teal hover:underline"
            >
              <Mail aria-hidden="true" size={18} strokeWidth={1.5} />
              {CONTACT_EMAIL}
            </a>
            <a
              href={telHref}
              className="inline-flex items-center gap-2 text-sm text-white/65 underline-offset-4 transition-colors hover:text-medical-teal hover:underline"
            >
              <Phone aria-hidden="true" size={15} strokeWidth={1.5} />
              {PRESS_PHONE}
            </a>
            <p className="mt-1 text-xs text-white/45">
              Media &amp; speaking enquiries — Adelaide Slater handles via the address above.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
