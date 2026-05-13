import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ICONS } from '@/lib/icons';
import { CONDITIONS } from '@/constants';

export const FocusAreas = () => {
  return (
    <section id="conditions" aria-labelledby="conditions-heading" className="px-6 py-28 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="conditions-heading"
          eyebrow="Areas of care"
          title="Specialist focus."
          intro="Assessment and treatment planning for a range of foot and ankle concerns, from common conditions to complex clinical presentations."
          className="mb-16 md:mb-20"
        />

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CONDITIONS.map((condition) => {
            const Icon = ICONS[condition.icon];
            return (
              <li key={condition.id}>
                <Card className="h-full hover:bg-white/[0.02]" glow>
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-bg/60 text-white/40 ring-1 ring-white/10 transition-colors duration-500 group-hover:text-medical-teal">
                    <Icon aria-hidden="true" size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold text-white">{condition.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{condition.description}</p>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
