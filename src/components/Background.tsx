import { SectionHeading } from '@/components/ui/SectionHeading';
import { LEADERSHIP_ROLES, TRAINING } from '@/constants';

export const Background = () => {
  return (
    <section id="background" aria-labelledby="background-heading" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="background-heading"
          eyebrow="Training & background"
          title="A foundation built over decades."
          intro="From a medical degree at UNSW to sub-specialist fellowship training in New York — and an ongoing role in the foot and ankle literature."
          className="mb-14 md:mb-16"
        />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Training timeline */}
          <div>
            <h3 className="mb-8 font-display text-xl font-semibold text-white">Training &amp; milestones</h3>
            <ol className="relative space-y-7 border-l border-white/10 pl-8">
              {TRAINING.map((item, i) => (
                <li key={`${item.year}-${i}`} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-9 top-1.5 h-2 w-2 rounded-full bg-medical-teal ring-4 ring-brand-bg"
                  />
                  <p className="eyebrow text-medical-teal/80">{item.year}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/75">{item.label}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Academic / leadership */}
          <div className="rounded-3xl glass p-8 lg:sticky lg:top-28">
            <h3 className="font-display text-xl font-semibold text-white">Academic &amp; leadership</h3>
            <ul className="mt-6 space-y-4">
              {LEADERSHIP_ROLES.map(({ role, org }) => (
                <li key={`${role}-${org}`} className="border-t border-white/5 pt-4 first:border-0 first:pt-0">
                  <p className="font-medium text-white/85">{role}</p>
                  <p className="text-sm text-white/55">{org}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-white/55">
              Presents at international surgical conferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
