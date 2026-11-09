import { DEFAULT_OG_IMAGE, SITE_NAME, metaFor } from '@/lib/seo';
import { siteUrl } from '@/lib/site-origin';
import { graphFor } from '@/lib/structured-data';

// -------------------------------------------------------------
// Build-time <head> renderer. Server-only (imported by
// src/entry-server.tsx). Produces the per-page tags that replace
// the <!--app-head--> placeholder in index.html.
// -------------------------------------------------------------

const esc = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

/** JSON safe to embed inside <script>: no `</script>` breakout. */
const safeJson = (data: unknown): string =>
  JSON.stringify(data).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');

export const headFor = (path: string): string => {
  const meta = metaFor(path);
  const graph = graphFor(path);
  const isDefaultImage = meta.ogImage === siteUrl(DEFAULT_OG_IMAGE);

  const tags: string[] = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="robots" content="${meta.robots}${meta.found ? ',max-image-preview:large,max-snippet:-1' : ''}" />`,
    ...(meta.canonical ? [`<link rel="canonical" href="${esc(meta.canonical)}" />`] : []),
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:locale" content="en_AU" />`,
    `<meta property="og:type" content="${meta.ogType}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    ...(meta.canonical ? [`<meta property="og:url" content="${esc(meta.canonical)}" />`] : []),
    `<meta property="og:image" content="${esc(meta.ogImage)}" />`,
    ...(isDefaultImage
      ? ['<meta property="og:image:width" content="1200" />', '<meta property="og:image:height" content="630" />']
      : []),
    `<meta property="og:image:alt" content="${esc(meta.ogImageAlt)}" />`,
    ...(meta.ogType === 'profile'
      ? ['<meta property="profile:first_name" content="Gordon" />', '<meta property="profile:last_name" content="Slater" />']
      : []),
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@drgordonslater" />`,
    `<meta name="twitter:creator" content="@drgordonslater" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${esc(meta.ogImage)}" />`,
    `<meta name="twitter:image:alt" content="${esc(meta.ogImageAlt)}" />`,
    ...(graph ? [`<script type="application/ld+json">${safeJson(graph)}</script>`] : []),
  ];

  return tags.join('\n    ');
};
