import type { FormEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Glow } from '@/components/ui/Glow';
import { CONTACT_INFO, LOCATIONS } from '@/constants';

const ASSURANCES = ['Careful assessment', 'Clear guidance', 'Specialist care'];

const telHref = `tel:${CONTACT_INFO.phone.replace(/[^\d]/g, '')}`;
const mailHref = `mailto:${CONTACT_INFO.email}`;
const mapsHref = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

// Front-end-only fallback: compose an email from the form fields. Replace with a
// real form endpoint (e.g. a serverless function or Formspree) before launch.
const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const get = (key: string) => String(data.get(key) ?? '').trim();
  const body = [
    `Name: ${get('firstName')} ${get('lastName')}`.trim(),
    `Email: ${get('email')}`,
    `Phone: ${get('phone')}`,
    '',
    get('message'),
  ].join('\n');
  window.location.href = `${mailHref}?subject=${encodeURIComponent('Appointment request')}&body=${encodeURIComponent(body)}`;
};

export const ContactCTA = () => {
  const reduceMotion = useReducedMotion();
  const reveal = (x = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, x },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: 'easeOut' } as const,
  });

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden px-6 py-28 md:py-32">
      <Glow className="bottom-0 left-1/2 -translate-x-1/2" color="blue" />

      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl glass bg-brand-panel/40 p-8 shadow-[0_0_100px_rgba(0,0,0,0.45)] md:rounded-[48px] md:p-16 lg:p-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_85%_15%,rgba(20,184,166,0.06),transparent_60%)]"
          />

          <div className="relative grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-12">
              <div className="space-y-6">
                <motion.h2
                  {...reveal()}
                  id="contact-heading"
                  className="text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
                >
                  Ready to discuss your <br />
                  <span className="text-white/40">clinical concern?</span>
                </motion.h2>
                <motion.p {...reveal()} className="max-w-md text-pretty text-lg leading-relaxed text-white/65">
                  Request a consultation and the practice team will arrange a suitable time to begin
                  your assessment. Consultations are generally available within about 7 days, with
                  urgent cases prioritised.
                </motion.p>
                <ul className="flex flex-wrap gap-x-8 gap-y-3 pt-1">
                  {ASSURANCES.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-medical-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 border-t border-white/5 pt-10">
                <p className="eyebrow">Consulting locations</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {LOCATIONS.map((loc) => (
                    <div key={loc.name} className="group rounded-2xl glass p-5">
                      <div className="mb-3 flex items-center gap-2.5">
                        <MapPin aria-hidden="true" size={16} strokeWidth={1.5} className="text-medical-teal" />
                        <span className="font-display text-base font-semibold text-white">{loc.name}</span>
                      </div>
                      <a
                        href={mapsHref(loc.address)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm leading-relaxed text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                      >
                        {loc.address}
                      </a>
                      <p className="mt-2 text-xs leading-relaxed text-white/45">{loc.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <ContactDetail icon={Phone} label="Phone" value={CONTACT_INFO.phone} href={telHref} />
                <ContactDetail icon={Mail} label="Email" value={CONTACT_INFO.email} href={mailHref} />
              </div>
            </div>

            <motion.div
              {...reveal(20)}
              className="rounded-3xl glass bg-white/[0.02] p-8 shadow-2xl md:rounded-[36px] md:p-12"
            >
              <form className="space-y-7" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field id="firstName" label="First name" autoComplete="given-name" placeholder="Jane" required />
                  <Field id="lastName" label="Last name" autoComplete="family-name" placeholder="Doe" required />
                </div>
                <Field id="email" label="Email address" type="email" autoComplete="email" placeholder="you@example.com" required />
                <Field id="phone" label="Contact number" type="tel" autoComplete="tel" placeholder="02 0000 0000" />

                <div className="space-y-2.5">
                  <label htmlFor="message" className="ml-5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="A brief clinical context — and any referral details."
                    className="w-full rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm leading-relaxed text-white transition-colors placeholder:text-white/30 hover:border-white/20 focus:border-medical-teal/40 focus:bg-white/[0.05]"
                  />
                </div>

                <Button type="submit" variant="primary" className="group h-auto w-full rounded-2xl py-4">
                  <span className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.12em]">
                    Send appointment request
                    <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>

                <p className="flex items-start gap-2.5 px-1 text-xs leading-relaxed text-white/45">
                  <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-medical-teal" />
                  Submitting this form opens a pre-filled email to the practice. Information you send
                  is handled in line with our privacy practices.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactDetailProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const ContactDetail = ({ icon: Icon, label, value, href }: ContactDetailProps) => (
  <div className="group flex items-start gap-4">
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl glass text-white/45 transition-colors duration-500 group-hover:text-medical-teal">
      <Icon aria-hidden="true" size={18} strokeWidth={1.25} />
    </span>
    <div className="space-y-1">
      <p className="eyebrow">{label}</p>
      {href ? (
        <a href={href} className="text-sm leading-relaxed text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline">
          {value}
        </a>
      ) : (
        <p className="text-sm leading-relaxed text-white/75">{value}</p>
      )}
    </div>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'tel';
  autoComplete?: string;
  required?: boolean;
}

const Field = ({ id, label, placeholder, type = 'text', autoComplete, required }: FieldProps) => (
  <div className="space-y-2.5">
    <label htmlFor={id} className="ml-5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
      {label}
      {required && <span className="text-medical-teal"> *</span>}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      autoComplete={autoComplete}
      required={required}
      placeholder={placeholder}
      className="w-full rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm text-white transition-colors placeholder:text-white/30 hover:border-white/20 focus:border-medical-teal/40 focus:bg-white/[0.05]"
    />
  </div>
);
