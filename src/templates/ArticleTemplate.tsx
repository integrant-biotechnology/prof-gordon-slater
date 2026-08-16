import type { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Motion';
import { ChapterMark } from '@/components/ui/ChapterMark';
import { PullQuote } from '@/components/ui/PullQuote';

/**
 * Discriminated block union for an article body. Authors compose
 * an Article as { body: ArticleBlock[] }; the template walks the
 * array and renders each block via its primitive.
 */
export type ArticleBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'lead'; text: string }
  | { kind: 'chapter'; number: number | string; title: string }
  | { kind: 'pullquote'; quote: string; attribution?: string }
  | { kind: 'image'; src: string; alt: string; caption?: string };

interface ArticleTemplateProps {
  /** Slot for the PageHero (composed by the page, not by the template). */
  hero: ReactNode;
  /** Optional slot for a ReadingProgress component (composed by the page). */
  progress?: ReactNode;
  /** Article body blocks. */
  body: ArticleBlock[];
}

/**
 * ArticleTemplate — the long-form reading template for /writing/:slug.
 *
 * The page composes its <PageHero> (title + lede + date) and passes it
 * via the `hero` slot. The template renders the body, applying the
 * drop-cap to the first paragraph automatically.
 *
 * Today (PR-1) this is a typed scaffold. PR-6 adopts it.
 */
export const ArticleTemplate = ({ hero, progress, body }: ArticleTemplateProps) => {
  let paragraphIndex = 0;

  return (
    <>
      {progress}
      {hero}

      <article className="mx-auto max-w-3xl px-6 pb-24 md:pb-32">
        {body.map((block, i) => {
          if (block.kind === 'paragraph') {
            const isFirst = paragraphIndex === 0;
            paragraphIndex += 1;
            return (
              <Reveal key={i} delay={0.02}>
                <p
                  className={
                    isFirst
                      ? 'drop-cap mt-8 text-pretty leading-relaxed text-white/80'
                      : 'mt-6 text-pretty leading-relaxed text-white/75'
                  }
                  style={{ fontSize: 'var(--text-body)' }}
                >
                  {block.text}
                </p>
              </Reveal>
            );
          }
          if (block.kind === 'lead') {
            return (
              <Reveal key={i}>
                <p className="lede mt-8">{block.text}</p>
              </Reveal>
            );
          }
          if (block.kind === 'chapter') {
            return (
              <div key={i} className="mt-16">
                <ChapterMark number={String(block.number)} title={block.title} />
              </div>
            );
          }
          if (block.kind === 'pullquote') {
            return (
              <div key={i} className="my-12">
                <PullQuote align="center" attribution={block.attribution}>
                  {block.quote}
                </PullQuote>
              </div>
            );
          }
          // image
          return (
            <figure key={i} className="my-12">
              <img
                src={block.src}
                alt={block.alt}
                loading="lazy"
                className="w-full rounded-2xl"
              />
              {block.caption && (
                <figcaption
                  className="mt-3 text-white/70"
                  style={{ fontSize: 'var(--text-meta)' }}
                >
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        })}
      </article>
    </>
  );
};
