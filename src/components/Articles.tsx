import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ARTICLES, BLOG_INDEX_URL } from '@/constants';

export const Articles = () => {
  return (
    <section id="articles" aria-labelledby="articles-heading" className="px-6 py-28 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-8 md:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="articles-heading"
            eyebrow="Medical insights"
            title="Insights for informed decisions."
            intro="Clear, clinical writing from Prof Slater on foot and ankle conditions, regenerative approaches, and the research behind them."
          />
          <a
            href={BLOG_INDEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white"
          >
            All articles
            <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <li key={article.id}>
              <Card className="flex h-full flex-col justify-between gap-10 bg-white/[0.01] p-10" glow>
                <div className="space-y-7">
                  <span className="inline-block rounded-full bg-medical-teal/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-medical-teal/90">
                    {article.category}
                  </span>
                  <h3 className="font-display text-2xl font-semibold leading-tight text-white">
                    {article.title}
                  </h3>
                </div>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read “${article.title}” on orthopaedic-surgeon.com.au (opens in a new tab)`}
                  className="inline-flex items-center gap-2 self-start text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-medical-teal"
                >
                  Read on orthopaedic-surgeon.com.au
                  <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
