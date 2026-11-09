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
export async function render(url: string): Promise<string> {
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </StrictMode>,
  );
  let html = '';
  for await (const chunk of prelude) html += chunk;
  return html;
}
