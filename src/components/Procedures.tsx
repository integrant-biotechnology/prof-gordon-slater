import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Scale } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Motif } from '@/components/ui/Motif';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DOCTOR_NAME, PROCEDURES } from '@/constants';

export const Procedures = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="procedures" aria-labelledby="procedures-heading" className="px-6 py-28 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-8 md:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="procedures-heading"
            eyebrow="Procedures & techniques"
            title="Procedures and techniques."
            intro="Carefully considered treatment options — including non-surgical management and precision surgical procedures — tailored to your clinical assessment."
          />
          <span className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-medical-teal" />
            Non-surgical options considered first
          </span>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROCEDURES.map((procedure) => (
            <li key={procedure.id}>
              <Card className="flex h-full min-h-[300px] flex-col justify-between bg-white/[0.01] p-9 hover:bg-white/[0.03]">
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold leading-tight text-white">
                      {procedure.title}
                    </h3>
                    <span className="mt-1 shrink-0 rounded-full bg-white/5 p-2.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ArrowUpRight aria-hidden="true" size={18} className="text-medical-teal" />
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/60">{procedure.description}</p>
                </div>

                {procedure.features && (
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {procedure.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-full bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </li>
          ))}
        </ul>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="group relative mt-20 overflow-hidden rounded-3xl glass bg-linear-to-br from-white/[0.02] to-transparent p-10 md:mt-24 md:rounded-[48px] md:p-16"
        >
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-full w-1/3 bg-medical-teal/5 opacity-20 blur-[120px] transition-opacity duration-700 group-hover:opacity-40"
          />
          <div className="relative grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl glass text-medical-teal">
                <Scale aria-hidden="true" size={22} strokeWidth={1.5} />
              </span>
              <div className="space-y-4">
                <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  Precision at every scale.
                </h3>
                <p className="text-pretty text-lg leading-relaxed text-white/65">
                  {DOCTOR_NAME} uses advanced surgical instrumentation for precision-guided
                  interventions designed to preserve anatomical integrity.
                </p>
              </div>
              <blockquote className="inline-block rounded-2xl glass px-6 py-4">
                <p className="text-sm leading-relaxed text-medical-teal/80">
                  “Where appropriate, minimally invasive techniques may support smaller incisions,
                  reduced soft-tissue disruption, and a planned recovery pathway.”
                </p>
              </blockquote>
            </div>

            <div className="hidden aspect-square w-full max-w-sm justify-self-end overflow-hidden rounded-3xl glass md:flex">
              <Motif />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
