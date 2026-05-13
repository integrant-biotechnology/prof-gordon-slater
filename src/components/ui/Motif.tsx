import { cn } from '@/lib/utils';

interface MotifProps {
  className?: string;
  /** Optional faint caption marking this as a placeholder for real photography. */
  placeholderLabel?: string;
}

/**
 * Calm, abstract "clinical precision" motif used as an image placeholder in
 * the hero, the about portrait, and the procedures highlight. Concentric
 * registration rings with a slow orbiting marker and a soft teal core —
 * intentionally restrained so it reads as composed rather than as a loader.
 * All looping motion is paused for users who prefer reduced motion (see index.css).
 */
export const Motif = ({ className, placeholderLabel }: MotifProps) => {
  return (
    <div aria-hidden="true" className={cn('relative h-full w-full overflow-hidden', className)}>
      {/* soft teal sheen */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(20,184,166,0.1),transparent_62%)]" />

      {/* registration hairlines */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-linear-to-b from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-linear-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* concentric rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid place-items-center">
          <div className="absolute h-[clamp(14rem,40vw,28rem)] w-[clamp(14rem,40vw,28rem)] rounded-full border border-white/[0.06]" />
          <div className="absolute h-[clamp(9rem,26vw,18rem)] w-[clamp(9rem,26vw,18rem)] rounded-full border border-dashed border-white/[0.05]" />

          {/* outer ring carrying an orbiting marker — the marker makes the slow rotation legible */}
          <div className="absolute h-[clamp(14rem,40vw,28rem)] w-[clamp(14rem,40vw,28rem)] animate-spin-slow rounded-full">
            <span className="absolute -top-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-medical-teal shadow-[0_0_12px_2px_rgba(20,184,166,0.45)]" />
          </div>

          {/* soft glowing core */}
          <div className="h-[clamp(4rem,12vw,7rem)] w-[clamp(4rem,12vw,7rem)] animate-drift rounded-full bg-medical-teal/15 blur-2xl" />
          <div className="absolute h-2 w-2 rounded-full bg-white/20" />
        </div>
      </div>

      {placeholderLabel && (
        <div className="absolute inset-x-0 bottom-5 flex justify-center">
          <span className="eyebrow text-white/15">{placeholderLabel}</span>
        </div>
      )}
    </div>
  );
};
