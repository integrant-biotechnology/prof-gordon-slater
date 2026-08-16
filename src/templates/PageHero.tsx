import type { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Motion';
import { EditorialImage } from '@/components/ui/EditorialImage';
import { cn } from '@/lib/utils';

export type PageHeroVariant = 'editorial' | 'photo-led' | 'type-only';

interface PageHeroProps {
  /** Visual register — selects the layout. Defaults to type-only. */
  variant?: PageHeroVariant;
  /** Small uppercase line above the title (e.g. "About"). */
  eyebrow?: string;
  /** Display headline. Renders as <h1 id="page-title"> for PageShell aria-labelledby. */
  title: ReactNode;
  /** Optional opening paragraph in lede register. */
  lede?: ReactNode;
  /** Photo metadata — required for 'photo-led', optional for 'editorial'. */
  photo?: { src: string; alt: string };
  /** Optional kicker line above the eyebrow (e.g. "Research / Publications"). */
  kicker?: string;
  /** Body content rendered in the text column below the lede. For
   *  photo-led + editorial variants it stays inside the same grid so the
   *  sticky photo (if any) anchors throughout the body. */
  children?: ReactNode;
}

/**
 * PageHero — the top of every non-home page. Three variants tuned
 * to per-page editorial character (see plan §B):
 *   - editorial: eyebrow + display + lede + optional photo right
 *   - photo-led: portrait left, body right (About-style spread)
 *   - type-only: type-only register (apple.com/leadership style)
 *
 * Today (PR-1) this is a typed scaffold consumers can import; the
 * three variants are laid out but not yet refined visually. PR-2/3/4
 * tunes per-page as we adopt.
 */
export const PageHero = ({
  variant = 'type-only',
  eyebrow,
  title,
  lede,
  photo,
  kicker,
  children,
}: PageHeroProps) => {
  // Photo-led: portrait left (sticky on desktop), body right (5/7 split).
  // Children render inside the right column so the sticky photo anchors
  // for the duration of the body, not just the lede.
  if (variant === 'photo-led' && photo) {
    return (
      <section className="overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div className="md:sticky md:top-28">
            <Reveal>
              <EditorialImage
                fallbackSrc={photo.src}
                alt={photo.alt}
                aspect="3/4"
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </Reveal>
          </div>
          <div>
            <PageHeroText
              eyebrow={eyebrow}
              kicker={kicker}
              title={title}
              lede={lede}
            />
            {children && <div className="mt-12">{children}</div>}
          </div>
        </div>
      </section>
    );
  }

  // Editorial: type-led with optional photo to the right (7/5 split).
  if (variant === 'editorial') {
    return (
      <section className="overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div
          className={cn(
            'mx-auto grid max-w-7xl items-end gap-12',
            photo && 'lg:grid-cols-[7fr_5fr] lg:gap-20',
          )}
        >
          <div>
            <PageHeroText
              eyebrow={eyebrow}
              kicker={kicker}
              title={title}
              lede={lede}
            />
            {children && <div className="mt-12">{children}</div>}
          </div>
          {photo && (
            <div>
              <Reveal>
                <EditorialImage
                  fallbackSrc={photo.src}
                  alt={photo.alt}
                  aspect="4/5"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </Reveal>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Type-only: pure typographic hero (default).
  return (
    <section className="overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-5xl">
        <PageHeroText
          eyebrow={eyebrow}
          kicker={kicker}
          title={title}
          lede={lede}
        />
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
};

interface PageHeroTextProps {
  eyebrow?: string;
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
}

const PageHeroText = ({ eyebrow, kicker, title, lede }: PageHeroTextProps) => (
  <>
    {kicker && (
      <Reveal>
        <p
          className="text-white/60"
          style={{
            fontSize: 'var(--text-eyebrow)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          {kicker}
        </p>
      </Reveal>
    )}
    {eyebrow && (
      <Reveal delay={kicker ? 0.04 : 0}>
        <p className={cn('eyebrow', kicker && 'mt-3')}>{eyebrow}</p>
      </Reveal>
    )}
    <Reveal delay={eyebrow ? 0.08 : 0}>
      <h1
        id="page-title"
        className="mt-5 text-balance font-display font-medium"
        style={{
          fontSize: 'var(--text-display)',
          lineHeight: 1.05,
          letterSpacing: '-0.015em',
        }}
      >
        {title}
      </h1>
    </Reveal>
    {lede && (
      <Reveal delay={0.16}>
        <p
          className="mt-8 max-w-2xl text-pretty leading-relaxed text-white/70"
          style={{ fontSize: 'var(--text-lede)' }}
        >
          {lede}
        </p>
      </Reveal>
    )}
  </>
);
