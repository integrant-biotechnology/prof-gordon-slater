#!/usr/bin/env node
/**
 * Build-time pre-renderer.
 *
 * Runs after `vite build` (client → dist/) and
 * `vite build --ssr src/entry-server.tsx` (server bundle → dist-server/).
 *
 * For every registered route it writes dist/<path>.html containing
 * the fully rendered page body and that page's own <head> (title,
 * description, canonical, robots, Open Graph, JSON-LD). It also writes
 * dist/404.html, dist/sitemap.xml and dist/robots.txt — all derived from
 * the same SITE_ROUTES table, so they can never disagree.
 *
 * Fails the build (exit 1) on any problem rather than shipping a page
 * with a missing or empty body.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const serverEntry = join(root, 'dist-server', 'entry-server.js');

const fail = (msg) => {
  console.error(`\n✗ prerender: ${msg}\n`);
  process.exit(1);
};

if (!existsSync(serverEntry)) fail(`missing ${serverEntry} — run the SSR build first`);

const template = readFileSync(join(dist, 'index.html'), 'utf8');
for (const marker of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(marker)) fail(`dist/index.html is missing the ${marker} placeholder`);
}

const { render, headFor, prerenderPaths, indexablePaths, SITE_ORIGIN } = await import(
  pathToFileURL(serverEntry).href
);

const page = (head, body) =>
  template.replace('<!--app-head-->', () => head).replace('<!--app-html-->', () => body);

// '/about' → dist/about.html. Vercel's `cleanUrls` serves it at /about
// (and 308s /about.html → /about), so there is exactly one URL per page.
const outFile = (path) => (path === '/' ? join(dist, 'index.html') : join(dist, `${path.slice(1)}.html`));

// ---- pages ---------------------------------------------------------------
const written = [];
for (const path of prerenderPaths()) {
  let body;
  try {
    body = await render(path);
  } catch (err) {
    fail(`render failed for ${path}: ${err?.stack ?? err}`);
  }
  if (!body || body.length < 500) fail(`render for ${path} produced almost no HTML (${body?.length ?? 0} chars)`);
  const file = outFile(path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page(headFor(path), body));
  written.push(path);
}

// 404 — any path that matches no route renders <NotFound>. Vercel serves
// dist/404.html with a real 404 status for unknown URLs.
const NOT_FOUND_PROBE = '/__not-found__';
writeFileSync(join(dist, '404.html'), page(headFor(NOT_FOUND_PROBE), await render(NOT_FOUND_PROBE)));

// ---- sitemap.xml ---------------------------------------------------------
// lastmod = date of the last git commit touching the page's own sources
// (plus the route table, which holds its title/description). If git
// history is unavailable (e.g. a shallow CI clone) lastmod is omitted —
// an honest omission beats a fake "today" on every build.
const SOURCES = {
  '/': ['src/pages/Home.tsx', 'src/components/Hero.tsx', 'src/components/home'],
  '/about': ['src/pages/About.tsx', 'src/data/background.ts', 'src/data/identity.ts'],
  '/research': ['src/pages/research/Index.tsx', 'src/data/research'],
  '/research/publications': ['src/pages/research/Publications.tsx', 'src/data/research/publications.ts'],
  '/book': ['src/pages/Book.tsx', 'src/data/book.ts'],
  '/book/three-rules': ['src/pages/book/ThreeRules.tsx', 'src/data/book.ts'],
  '/book/case-studies': ['src/pages/book/CaseStudies.tsx', 'src/data/book.ts'],
  '/writing': ['src/pages/writing/Index.tsx', 'src/data/writing.ts'],
  '/contact': ['src/pages/Contact.tsx', 'src/data/contact.ts'],
  '/giving': ['src/pages/Giving.tsx', 'src/data/giving.ts'],
  '/accessibility': ['src/pages/Accessibility.tsx'],
};

const gitDate = (files) => {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', ...files, 'src/data/site.ts'], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : undefined;
  } catch {
    return undefined;
  }
};

const IMAGES = {
  '/': [{ loc: '/portrait-gordon-slater-hero.jpg', title: 'Prof Gordon Slater' }],
  '/about': [{ loc: '/portrait-gordon-slater-about.jpg', title: 'Prof Gordon Slater, foot and ankle orthopaedic surgeon' }],
  '/book': [{ loc: '/book-cover-chaos-to-creation.jpg', title: 'Chaos to Creation by Prof Gordon Slater — book cover' }],
};

const xmlEsc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const urlFor = (path) => (path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`);

const entries = indexablePaths().map((path) => {
  const lastmod = gitDate(SOURCES[path] ?? ['src']);
  const images = (IMAGES[path] ?? [])
    .map(
      (img) =>
        `\n    <image:image>\n      <image:loc>${xmlEsc(SITE_ORIGIN + img.loc)}</image:loc>\n      <image:title>${xmlEsc(img.title)}</image:title>\n    </image:image>`,
    )
    .join('');
  return `  <url>\n    <loc>${xmlEsc(urlFor(path))}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}${images}\n  </url>`;
});

writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries.join('\n')}\n</urlset>\n`,
);

// ---- robots.txt ----------------------------------------------------------
writeFileSync(
  join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`,
);

rmSync(join(root, 'dist-server'), { recursive: true, force: true });

console.log(
  `✓ prerender: ${written.length} pages + 404.html, sitemap.xml (${entries.length} URLs), robots.txt → ${SITE_ORIGIN}`,
);
