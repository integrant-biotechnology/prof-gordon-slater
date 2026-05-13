/**
 * Quiet fallback shown while a code-split route chunk is loading.
 * Centred glass shimmer; respects `prefers-reduced-motion` via the
 * global CSS rule that neutralises animation-duration.
 */
export const RouteFallback = () => (
  <div
    role="status"
    aria-live="polite"
    aria-label="Loading"
    className="flex min-h-svh items-center justify-center px-6"
  >
    <div className="flex items-center gap-3 rounded-full glass px-5 py-2.5">
      <span
        aria-hidden="true"
        className="h-2 w-2 animate-pulse rounded-full bg-medical-teal"
      />
      <span className="eyebrow text-white/55">Loading</span>
    </div>
  </div>
);
