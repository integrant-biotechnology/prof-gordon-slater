#!/usr/bin/env node
/**
 * SEO gate — runs at the end of `npm run build` (so in CI and on every
 * Vercel deploy). Reads the finished dist/ output exactly as Google will
 * receive it and fails the build if any page regresses.
 *
 * Zero dependencies: plain regex over the static HTML we generate.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const errors = [];
const err = (file, msg) => errors.push(`${file}: ${msg}`);

// AHPRA: no superlatives, testimonials or outcome guarantees in the
// text that appears in search results.
const FORBIDDEN = /\b(best|leading|top[- ]rated|number one|#1|world[- ]class|guarantee[ds]?|testimonials?|miracle|cure[sd]?)\b/i;

const decode = (s) =>
  s.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const all = (html, re) => [...html.matchAll(re)].map((m) => m[1]);
const metaContent = (html, attr, key) =>
  all(html, new RegExp(`<meta ${attr}="${key.replace(/[:]/g, '\\$&')}" content="([^"]*)"`, 'g'));

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return name === 'assets' ? [] : walk(full);
    return name.endsWith('.html') ? [full] : [];
  });

if (!existsSync(join(dist, 'robots.txt')) || !existsSync(join(dist, 'sitemap.xml'))) {
  console.error('✗ check-seo: dist/robots.txt or dist/sitemap.xml missing — did prerender run?');
  process.exit(1);
}

const robotsTxt = readFileSync(join(dist, 'robots.txt'), 'utf8');
const sitemapXml = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
const sitemapLine = robotsTxt.match(/^Sitemap:\s*(\S+)$/m)?.[1];
if (!sitemapLine) err('robots.txt', 'no Sitemap: line');
if (/^Disallow:\s*\/\s*$/m.test(robotsTxt)) err('robots.txt', 'disallows the whole site');
const origin = sitemapLine ? new URL(sitemapLine).origin : '';

const sitemapUrls = new Set(all(sitemapXml, /<loc>([^<]+)<\/loc>/g).filter((u) => !/\.(jpe?g|png|webp)$/.test(u)));
for (const u of sitemapUrls) if (new URL(u).origin !== origin) err('sitemap.xml', `URL on a different host than robots.txt: ${u}`);

const titles = new Map();
const descriptions = new Map();
const indexable = new Set();

for (const file of walk(dist)) {
  const rel = relative(dist, file);
  const html = readFileSync(file, 'utf8');
  const is404 = rel === '404.html';

  const titleTags = all(html, /<title>([^<]*)<\/title>/g);
  const descs = metaContent(html, 'name', 'description');
  const robots = metaContent(html, 'name', 'robots');
  const canonicals = all(html, /<link rel="canonical" href="([^"]*)"/g);
  const h1s = all(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/g);
  // Everything inside <div id="root"> … up to </body> (the bundler may
  // put its module <script> in <head> or after #root; scripts are stripped).
  const root = html.match(/<div id="root">([\s\S]*)<\/body>/)?.[1] ?? '';
  const text = root.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const noindex = robots.some((r) => r.includes('noindex'));

  if (html.includes('<!--app-head-->') || html.includes('<!--app-html-->')) err(rel, 'unfilled prerender placeholder');
  // Production CSP is script-src 'self': any inline script other than
  // JSON-LD data would be blocked, and a pending Suspense boundary
  // (<!--$?-->) relies on one to reveal its content.
  if (/<!--\$\?-->/.test(html)) err(rel, 'pending Suspense boundary in static HTML (content hidden until an inline script runs)');
  for (const tag of all(html, /<script\b([^>]*)>/g))
    if (!/\bsrc=/.test(tag) && !/type="application\/ld\+json"/.test(tag))
      err(rel, `inline <script${tag}> would be blocked by the CSP (script-src 'self')`);
  if (titleTags.length !== 1) err(rel, `expected 1 <title>, found ${titleTags.length}`);
  if (descs.length !== 1) err(rel, `expected 1 meta description, found ${descs.length}`);
  if (robots.length !== 1) err(rel, `expected 1 meta robots, found ${robots.length}`);
  if (h1s.length !== 1) err(rel, `expected exactly 1 <h1>, found ${h1s.length}`);
  else if (!h1s[0].replace(/<[^>]+>/g, '').trim()) err(rel, '<h1> is empty');
  if (text.length < 200) err(rel, `rendered body text too short (${text.length} chars) — prerender failed?`);

  // JSON-LD: valid JSON, a @context, and every {"@id"} reference defined in the same graph.
  for (const raw of all(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      err(rel, `JSON-LD does not parse: ${e.message}`);
      continue;
    }
    if (!data['@context']) err(rel, 'JSON-LD without @context');
    const defined = new Set();
    const refs = new Set();
    const visit = (node) => {
      if (Array.isArray(node)) return node.forEach(visit);
      if (!node || typeof node !== 'object') return;
      const keys = Object.keys(node);
      if (keys.length === 1 && keys[0] === '@id') refs.add(node['@id']);
      else if (node['@id']) defined.add(node['@id']);
      Object.values(node).forEach(visit);
    };
    visit(data);
    for (const r of refs) if (!defined.has(r)) err(rel, `JSON-LD references undefined @id ${r}`);
  }

  if (is404) {
    if (!noindex) err(rel, '404 page must be noindex');
    if (canonicals.length) err(rel, '404 page must not have a canonical');
    continue;
  }

  const title = decode(titleTags[0] ?? '');
  const desc = decode(descs[0] ?? '');
  const path = rel === 'index.html' ? '/' : `/${rel.replace(/\.html$/, '')}`;
  const expectedCanonical = path === '/' ? `${origin}/` : `${origin}${path}`;

  if (canonicals.length !== 1) err(rel, `expected 1 canonical, found ${canonicals.length}`);
  else if (decode(canonicals[0]) !== expectedCanonical)
    err(rel, `canonical ${canonicals[0]} should be self-referencing ${expectedCanonical}`);
  if (metaContent(html, 'property', 'og:url')[0] !== canonicals[0]) err(rel, 'og:url differs from canonical');

  if (title.length < 15 || title.length > 60) err(rel, `title length ${title.length} (want 15–60): "${title}"`);
  if (desc.length < 50 || desc.length > 160) err(rel, `description length ${desc.length} (want 50–160)`);
  if (FORBIDDEN.test(title) || FORBIDDEN.test(desc)) err(rel, `AHPRA-restricted wording in title/description: "${title}" / "${desc}"`);
  if (titles.has(title)) err(rel, `duplicate title (also ${titles.get(title)})`);
  if (descriptions.has(desc)) err(rel, `duplicate description (also ${descriptions.get(desc)})`);
  titles.set(title, rel);
  descriptions.set(desc, rel);

  if (noindex) {
    if (sitemapUrls.has(expectedCanonical)) err(rel, 'noindex page is listed in sitemap.xml');
  } else {
    indexable.add(expectedCanonical);
    if (!html.includes('application/ld+json')) err(rel, 'indexable page has no JSON-LD');
  }
}

if (!existsSync(join(dist, '404.html'))) err('404.html', 'missing');
for (const u of indexable) if (!sitemapUrls.has(u)) err('sitemap.xml', `indexable page missing from sitemap: ${u}`);
for (const u of sitemapUrls) if (!indexable.has(u)) err('sitemap.xml', `lists ${u} but no indexable pre-rendered page exists`);

if (errors.length) {
  console.error(`\n✗ SEO gate failed (${errors.length}):\n  - ${errors.join('\n  - ')}\n`);
  process.exit(1);
}
console.log(`✓ SEO gate: ${indexable.size} indexable pages, unique titles/descriptions, self-canonicals on ${origin}, sitemap in sync`);
