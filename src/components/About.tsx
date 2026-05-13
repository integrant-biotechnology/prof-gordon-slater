import { motion, useReducedMotion } from 'motion/react';
import { Award, MapPin, Target } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { DOCTOR_CREDENTIALS, DOCTOR_NAME } from '@/constants';

const CREDENTIALS = [
  { icon: Target, text: 'Foot & ankle fellowship — Hospital for Special Surgery, New York' },
  { icon: Award, text: 'Fellow, Royal Australasian College of Surgeons (Orthopaedics)' },
  { icon: MapPin, text: 'Consulting in Sydney & Albury' },
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
    <section id="about" aria-labelledby="about-heading" className="overflow-hidden px-6 py-28 md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-12">
          <motion.h2
            {...reveal}
            id="about-heading"
            className="text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Focused expertise. <br />
            <span className="text-white/40">Considered care.</span>
          </motion.h2>

          <motion.div {...reveal} className="space-y-6 text-pretty text-lg leading-relaxed text-white/65">
            <p>
              {DOCTOR_NAME} is an orthopaedic surgeon specialising in foot and ankle conditions,
              sports injuries, and trauma. He was among the first surgeons in Australia to adopt
              minimally invasive techniques for the foot and ankle, and uses regenerative-medicine
              adjuncts where appropriate.
            </p>
            <p>
              He completed his medical degree at the University of New South Wales, then advanced
              sub-specialist training in foot and ankle surgery at New York’s Hospital for Special
              Surgery in 1997. He has been a Fellow of the Royal Australasian College of Surgeons
              (Orthopaedics) since 1997.
            </p>
            <p>
              He contributes to the field as Associate Editor of <em>Foot &amp; Ankle International</em>,
              sits on the editorial panel of <em>EC Orthopaedics</em>, chairs Foot &amp; Ankle for the
              Asia Pacific Orthopaedic Association, and presents at international surgical conferences.
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
                src="/portrait-gordon-slater.webp"
                alt="Prof Gordon Slater, foot and ankle orthopaedic surgeon"
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
                  <dd className="text-sm font-medium text-white/75">25+ years</dd>
                </div>
              </dl>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
