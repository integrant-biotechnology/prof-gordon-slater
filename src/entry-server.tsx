/* eslint-disable react-refresh/only-export-components -- build-time server entry, never hot-reloaded */
import { StrictMode } from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router';
import { AppShell } from './App';

export { headFor } from '@/lib/head-html';
export { metaFor } from '@/lib/seo';
export { indexablePaths, prerenderPaths, graphFor } from '@/lib/structured-data';
export { SITE_ORIGIN } from '@/lib/site-origin';

/**
 * Build-time render of one URL to an HTML string.
 *
 * Uses React 19's prerender API, which waits for every lazy route
 * chunk and Suspense boundary to resolve — the output is the full
 * page, never the loading fallback.
 */
/**
 * `progressiveChunkSize: Infinity` keeps every Suspense boundary inline.
 * By default React outlines any boundary larger than ~12 KB: it writes
 * the fallback, then the real content later with inline reveal
 * scripts ($RC/$RV). That suits streaming, but for static HTML it is
 * harmful — production's CSP (script-src 'self') blocks those inline
 * scripts, so the content would stay hidden and never hydrate.
 * check-seo.mjs fails the build if a pending boundary or inline script
 * ever slips through.
 */
export async function render(url: string): Promise<string> {
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </StrictMode>,
    { progressiveChunkSize: Number.POSITIVE_INFINITY },
  );
  let html = '';
  for await (const chunk of prelude) html += chunk;
  return html;
}
