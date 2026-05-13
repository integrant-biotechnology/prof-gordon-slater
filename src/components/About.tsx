import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Award, FlaskConical, GraduationCap, Target } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { DOCTOR_CREDENTIALS, DOCTOR_NAME, PRACTICE_URL } from '@/constants';

const CREDENTIALS = [
  { icon: GraduationCap, text: 'Professor, University of Technology Sydney' },
  { icon: Target, text: 'Foot & ankle fellowship — Hospital for Special Surgery, New York' },
  { icon: Award, text: 'Fellow, Royal Australasian College of Surgeons (Orthopaedics)' },
  { icon: FlaskConical, text: 'Associate Editor, Foot & Ankle International' },
];

export const About = () => {
  const reduceMotion = useReducedMotion();
  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: 'easeOut' } as const,
  };

  return (
    <section id="about" aria-labelledby="about-heading" className="overflow-hidden px-6 py-24 md:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-12">
          <motion.h2
            {...reveal}
            id="about-heading"
            className="text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            About <br />
            <span className="text-white/40">{DOCTOR_NAME}.</span>
          </motion.h2>

          <motion.div {...reveal} className="space-y-6 text-pretty text-lg leading-relaxed text-white/65">
            <p>
              {DOCTOR_NAME} is an Australian orthopaedic surgeon with a thirty-year clinical record
              in foot &amp; ankle surgery, a growing body of peer-reviewed research, and active
              work in medical-device development. He was among the first surgeons in Australia to
              adopt minimally invasive techniques for the foot and ankle, and uses
              regenerative-medicine adjuncts where appropriate.
            </p>
            <p>
              He completed his medical degree at the University of New South Wales, then advanced
              sub-specialist training in foot and ankle surgery at New York&rsquo;s Hospital for
              Special Surgery in 1997. He has been a Fellow of the Royal Australasian College of
              Surgeons (Orthopaedics) since 1997, and is Professor at the University of Technology
              Sydney.
            </p>
            <p>
              He contributes to the international literature as Associate Editor of{' '}
              <em>Foot &amp; Ankle International</em>, sits on the editorial panel of{' '}
              <em>EC Orthopaedics</em>, and chairs Foot &amp; Ankle for the Asia Pacific
              Orthopaedic Association. His book{' '}
              <em>From Chaos to Creation: The Life Force Formula</em> (February 2026) is the
              long-form synthesis of that work.
            </p>
            <p className="text-base text-white/55">
              For clinical care or to arrange an appointment, please see the practice site —{' '}
              <a
                href={PRACTICE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-baseline gap-1 text-medical-teal underline-offset-4 transition-colors hover:underline"
              >
                orthopaedic-surgeon.com.au
                <ArrowUpRight aria-hidden="true" size={12} className="self-center" />
              </a>
              .
            </p>
          </motion.div>

          <ul className="space-y-5 border-t border-white/5 pt-8">
            {CREDENTIALS.map(({ icon: Icon, text }) => (
              <li key={text} className="group flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full glass text-white/45 transition-colors group-hover:text-medical-teal">
                  <Icon aria-hidden="true" size={16} strokeWidth={1.5} />
                </span>
                <span className="text-sm font-medium text-white/70">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <motion.div {...reveal} className="lg:sticky lg:top-28">
          <Card className="flex flex-col overflow-hidden bg-brand-panel p-0">
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-brand-bg">
              <img
                src="/portrait-gordon-slater.webp?v=2"
                alt={`${DOCTOR_NAME}, foot and ankle orthopaedic surgeon`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="space-y-6 border-t border-white/10 bg-brand-panel/70 p-8 backdrop-blur-2xl md:p-10">
              <div className="space-y-2 text-center">
                <p className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {DOCTOR_NAME}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-medical-teal">
                  {DOCTOR_CREDENTIALS}
                </p>
              </div>
              <dl className="flex justify-center gap-10 border-t border-white/5 pt-6">
                <div className="text-center">
                  <dt className="eyebrow mb-1">Focus</dt>
                  <dd className="text-sm font-medium text-white/75">Foot &amp; ankle</dd>
                </div>
                <div className="text-center">
                  <dt className="eyebrow mb-1">Experience</dt>
                  <dd className="text-sm font-medium text-white/75">30+ years</dd>
                </div>
              </dl>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
