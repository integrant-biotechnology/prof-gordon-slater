import { motion } from 'motion/react';
import { ArrowRight, BadgeCheck, Crosshair, Route } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Glow } from '@/components/ui/Glow';
import { Motif } from '@/components/ui/Motif';
import { DOCTOR_TITLE } from '@/constants';

const TRUST_POINTS = [
  { icon: BadgeCheck, text: 'Foot & ankle specialist' },
  { icon: Crosshair, text: 'Precision-focused' },
  { icon: Route, text: 'Patient-centred planning' },
];

const scrollTo = (id: string) => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      <Glow className="-left-[10%] -top-[10%]" color="teal" />
      <Glow className="-right-[10%] bottom-[10%]" color="blue" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center space-y-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 rounded-full glass px-4 py-1.5"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-medical-teal" />
            <span className="eyebrow">{DOCTOR_TITLE}</span>
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="max-w-4xl text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Precision care for{' '}
            <span className="text-white/40">complex feet and ankles.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl text-balance text-lg leading-relaxed text-white/65 md:text-xl"
          >
            Specialist orthopaedic care for foot and ankle conditions, sports injuries, and
            trauma — with a clinical focus on careful assessment and considered patient outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col items-center gap-3 pt-2 sm:flex-row"
          >
            <Button size="lg" variant="primary" className="min-w-[220px]" onClick={scrollTo('contact')}>
              Request appointment
            </Button>
            <Button size="lg" variant="secondary" className="group min-w-[220px]" onClick={scrollTo('conditions')}>
              Explore areas of care
              <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mt-10 aspect-video w-full max-w-5xl overflow-hidden rounded-3xl glass md:aspect-[21/9] md:rounded-[40px]"
          >
            <Motif placeholderLabel="Replace with clinical photography" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-brand-bg/30 to-brand-bg"
            />
            <ul className="absolute inset-x-6 bottom-8 z-10 flex flex-wrap justify-center gap-x-10 gap-y-3 md:bottom-10 md:gap-x-14">
              {TRUST_POINTS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-white/70">
                  <Icon aria-hidden="true" className="h-4 w-4 text-medical-teal" strokeWidth={1.75} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
