import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ICONS } from '@/lib/icons';
import { BODY_OF_WORK, PUBLICATIONS_INDEX_URL, SELECTED_PUBLICATIONS } from '@/constants';

export const BodyOfWork = () => {
  return (
    <section id="work" aria-labelledby="work-heading" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="work-heading"
          eyebrow="Body of work"
          title="A wider body of work."
          intro="Surgery is one strand. Below: research, work on medical devices, long-form writing, and editorial roles in the international literature."
          className="mb-14 md:mb-16"
        />

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {BODY_OF_WORK.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <li key={item.id}>
                <Card className="flex h-full flex-col bg-white/[0.01] p-8 hover:bg-white/[0.02]" glow>
                  <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl glass text-medical-teal">
                    <Icon aria-hidden="true" size={20} strokeWidth={1.5} />
                  </span>
                  <h3 className="mb-3 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/65">{item.description}</p>
                  <div className="mt-auto pt-7">
                    {item.href && item.linkLabel ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.linkLabel} (opens in a new tab)`}
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-medical-teal"
                      >
                        {item.linkLabel}
                        <ArrowUpRight aria-hidden="true" size={13} />
                      </a>
                    ) : null}
                    {item.placeholder && (
                      <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
                        Placeholder — link to be supplied
                      </p>
                    )}
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 rounded-3xl glass bg-white/[0.01] p-8 md:p-10">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-display text-xl font-semibold text-white">Selected publications</h3>
            <a
              href={PUBLICATIONS_INDEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Full publications list (opens in a new tab)"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-medical-teal"
            >
              Full list
              <ArrowUpRight aria-hidden="true" size={13} />
            </a>
          </div>
          <ol className="divide-y divide-white/5">
            {SELECTED_PUBLICATIONS.map((pub, i) => (
              <li key={i} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <p className="text-[15px] leading-snug text-white/80">
                  {pub.href ? (
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 transition-colors hover:text-white hover:underline"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                  {pub.placeholder && (
                    <span className="ml-2 align-middle text-[10px] uppercase tracking-[0.2em] text-white/30">
                      placeholder
                    </span>
                  )}
                </p>
                {(pub.venue || pub.year) && (
                  <p className="shrink-0 text-xs italic text-white/45">
                    {[pub.venue, pub.year].filter(Boolean).join(' · ')}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
