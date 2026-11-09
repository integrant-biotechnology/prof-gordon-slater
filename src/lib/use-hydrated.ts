import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

/**
 * False during the server pre-render and while React hydrates that
 * markup; true on every render after. Use it for values that only the
 * browser knows (query string, media queries), so the first client
 * render matches the static HTML exactly and the browser-only value
 * applies in the very next render — without a setState-in-effect.
 */
export const useHydrated = (): boolean =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
