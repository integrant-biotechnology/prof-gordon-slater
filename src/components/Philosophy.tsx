import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ICONS } from '@/lib/icons';
import { PHILOSOPHY } from '@/constants';

export const Philosophy = () => {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="border-y border-white/5 bg-brand-panel/30 px-6 py-28 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="philosophy-heading"
          eyebrow="Clinical philosophy"
          title="A considered approach."
          intro="Care begins with careful assessment, clear explanation, and a treatment plan tailored to your individual clinical journey."
          align="center"
          className="mb-16 md:mb-20"
        />

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PHILOSOPHY.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <li key={item.title}>
                <Card className="flex h-full flex-col items-center px-8 py-14 text-center">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-brand-bg/60 text-white/40 ring-1 ring-white/10 transition-colors duration-500 group-hover:text-medical-teal">
                    <Icon aria-hidden="true" size={28} strokeWidth={1.25} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
