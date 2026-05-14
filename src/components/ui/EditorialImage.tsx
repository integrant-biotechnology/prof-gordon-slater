import { cn } from '@/lib/utils';

type Aspect = '3/4' | '4/5' | '1/1' | '3/2' | '16/10' | '16/9';

const ASPECT_CLASS: Record<Aspect, string> = {
  '3/4': 'aspect-[3/4]',
  '4/5': 'aspect-[4/5]',
  '1/1': 'aspect-square',
  '3/2': 'aspect-[3/2]',
  '16/10': 'aspect-[16/10]',
  '16/9': 'aspect-video',
};

interface EditorialImageProps {
  /** Base path without size/extension — e.g. "/photography/portrait".
   *  Component appends -800.webp / -1600.webp / .jpg for the picture sources. */
  src?: string;
  /** Single explicit src — used when responsive variants aren't generated. */
  fallbackSrc?: string;
  alt: string;
  aspect?: Aspect;
  /** Render priority — sets eager loading + high fetchpriority for the hero photo. */
  priority?: boolean;
  /** Optional caption rendered below the figure in meta type. */
  caption?: string;
  /** Optional attribution line in even smaller type. */
  attribution?: string;
  /** Tailwind sizes attribute for the <img>; defaults sensibly. */
  sizes?: string;
  className?: string;
  imgClassName?: string;
}

/**
 * EditorialImage — the responsive `<picture>` primitive.
 *
 * Renders WebP at 800w / 1600w with a JPG fallback at the same base
 * path. Above-the-fold images should pass `priority` so they preload
 * eagerly and don't block LCP.
 *
 * If neither `src` nor `fallbackSrc` is supplied, the component
 * renders a quiet placeholder block — useful while photography is
 * being commissioned. The frame still occupies its aspect ratio so
 * the layout is forward-compatible.
 */
export const EditorialImage = ({
  src,
  fallbackSrc,
  alt,
  aspect = '3/4',
  priority = false,
  caption,
  attribution,
  sizes = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
  className,
  imgClassName,
}: EditorialImageProps) => {
  const hasResponsive = Boolean(src);
  const explicit = fallbackSrc;

  return (
    <figure className={cn('relative', className)}>
      <div
        className={cn(
          'relative overflow-hidden rounded-3xl bg-brand-panel/40',
          ASPECT_CLASS[aspect],
        )}
      >
        {hasResponsive ? (
          <picture>
            <source
              type="image/webp"
              srcSet={`${src}-800.webp 800w, ${src}-1600.webp 1600w`}
              sizes={sizes}
            />
            <img
              src={`${src}.jpg`}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              decoding={priority ? 'sync' : 'async'}
              fetchPriority={priority ? 'high' : 'auto'}
              className={cn('h-full w-full object-cover', imgClassName)}
            />
          </picture>
        ) : explicit ? (
          <img
            src={explicit}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            fetchPriority={priority ? 'high' : 'auto'}
            className={cn('h-full w-full object-cover', imgClassName)}
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_60%)]"
          />
        )}
      </div>
      {(caption || attribution) && (
        <figcaption className="mt-3 text-[length:var(--text-meta)] leading-snug text-white/55">
          {caption}
          {attribution && (
            <span className="ml-2 text-white/35">
              <span aria-hidden="true" className="mr-1">·</span>
              {attribution}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};
