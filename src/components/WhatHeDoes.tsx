import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ICONS } from '@/lib/icons';
import { CAPABILITIES } from '@/constants';

export const WhatHeDoes = () => {
  return (
    <section
      id="focus"
      aria-labelledby="focus-heading"
      className="border-y border-white/5 bg-brand-panel/30 px-6 py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="focus-heading"
          eyebrow="What he does"
          title="Surgery, research, education, innovation."
          intro="A short factual overview of the four threads that run through the work."
          align="center"
          className="mb-14 md:mb-16"
        />

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <li key={item.title}>
                <Card className="flex h-full flex-col items-center px-8 py-12 text-center">
                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-brand-bg/60 text-white/45 ring-1 ring-white/10 transition-colors duration-500 group-hover:text-medical-teal">
                    <Icon aria-hidden="true" size={26} strokeWidth={1.25} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/65">{item.description}</p>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
