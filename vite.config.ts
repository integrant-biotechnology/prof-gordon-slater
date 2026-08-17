import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { writeFileSync } from 'node:fs';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import { SITE_ROUTES } from './src/data/site';
import { DEFAULT_SITE_URL, normalizeSiteOrigin } from './src/lib/site-origin';
import {
  BOOK_CHAPTERS,
  FULL_PUBLICATIONS,
  SELECTED_PUBLICATIONS,
} from './src/data/research/publications';
import { RESEARCH_THEMES } from './src/data/research/themes';
import { MEDIA, SPEAKING } from './src/data/engagements';

/**
 * Inline data-integrity plugin — fails the build loudly when the
 * content layer violates its invariants, so duplicates or malformed
 * entries can never ship. Runs in dev and CI (build) alike.
 */
const checkDataIntegrity = (): Plugin => ({
  name: 'check-data-integrity',
  buildStart() {
    const errors: string[] = [];
    const normalize = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

    // 1. No duplicate publications (papers + chapters).
    const seen = new Map<string, string>();
    for (const p of [...FULL_PUBLICATIONS, ...BOOK_CHAPTERS]) {
      const key = normalize(p.title);
      if (seen.has(key)) errors.push(`duplicate publication title: "${p.title}"`);
      seen.set(key, p.title);
    }

    // 2. Shape checks.
    const themeSlugs = new Set(RESEARCH_THEMES.map((t) => t.slug));
    for (const p of [...FULL_PUBLICATIONS, ...BOOK_CHAPTERS]) {
      if (!p.title.trim()) errors.push('publication with empty title');
      const yearNum = Number(p.year);
      if (!p.year || Number.isNaN(yearNum) || yearNum < 1990 || yearNum > 2030)
        errors.push(`publication year out of range: "${p.title}" (${p.year})`);
      if (p.href && !/^https:\/\//.test(p.href))
        errors.push(`publication href not https: "${p.title}"`);
      if (p.theme && !themeSlugs.has(p.theme))
        errors.push(`publication with unknown theme "${p.theme}": "${p.title}"`);
    }

    // 3. Cross-references and floors.
    for (const s of SELECTED_PUBLICATIONS) {
      if (!FULL_PUBLICATIONS.some((p) => p.title === s.title))
        errors.push(`SELECTED publication missing from FULL list: "${s.title}"`);
    }
    if (FULL_PUBLICATIONS.length < 40)
      errors.push(`FULL_PUBLICATIONS suspiciously small: ${FULL_PUBLICATIONS.length} < 40`);
    const paths = new Set(SITE_ROUTES.map((r) => r.path));
    for (const r of SITE_ROUTES) {
      if (r.parent && !paths.has(r.parent)) errors.push(`route ${r.path}: missing parent ${r.parent}`);
      for (const rel of r.related ?? [])
        if (!paths.has(rel)) errors.push(`route ${r.path}: missing related ${rel}`);
    }
    for (const e of [...SPEAKING, ...MEDIA]) {
      if (!e.title.trim() || !e.year.trim())
        errors.push(`engagement with empty title/year: "${e.title}" (${e.year})`);
    }

    if (errors.length > 0) {
      throw new Error(`Data integrity check failed:\n  - ${errors.join('\n  - ')}`);
    }
    this.info(
      `✓ data integrity: ${FULL_PUBLICATIONS.length} publications, ${BOOK_CHAPTERS.length} chapters, ${SPEAKING.length} engagements, 0 violations`,
    );
  },
});

/**
 * Inline sitemap plugin — generates public/sitemap.xml from
 * SITE_ROUTES at build start. SITE_ROUTES stays the single source
 * of truth; the XML is regenerated on every build. Dynamic routes
 * (paths containing ':') are skipped today; when /writing/:slug
 * entries get bodies, the script can enumerate them.
 */
const generateSitemap = (origin: string): Plugin => ({
  name: 'generate-sitemap',
  buildStart() {
    const today = new Date().toISOString().slice(0, 10);

    const priorityFor = (routePath: string): string => {
      if (routePath === '/') return '1.0';
      if (routePath === '/about' || routePath === '/research' || routePath === '/book') return '0.9';
      if (routePath.startsWith('/research/') || routePath.startsWith('/book/') || routePath === '/writing') return '0.8';
      if (routePath === '/contact') return '0.7';
      return '0.6';
    };

    const entries = SITE_ROUTES
      .filter((r) => !r.path.includes(':'))
      .map(
        (r) =>
          `  <url>\n    <loc>${origin}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priorityFor(r.path)}</priority>\n  </url>`,
      )
      .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
    writeFileSync('public/sitemap.xml', xml);
  },
});

const injectSiteOrigin = (origin: string): Plugin => ({
  name: 'inject-site-origin',
  transformIndexHtml(html) {
    return html.replace(/%VITE_SITE_URL%/g, origin);
  },
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteOrigin = normalizeSiteOrigin(env.VITE_SITE_URL || DEFAULT_SITE_URL);
  process.env.VITE_SITE_URL = siteOrigin;

  return {
    plugins: [
      react(),
      tailwindcss(),
      checkDataIntegrity(),
      injectSiteOrigin(siteOrigin),
      generateSitemap(siteOrigin),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
