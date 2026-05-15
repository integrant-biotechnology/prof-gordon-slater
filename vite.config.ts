import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { writeFileSync } from 'node:fs';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import { SITE_ROUTES } from './src/data/site';
import { DEFAULT_SITE_URL, normalizeSiteOrigin } from './src/lib/site-origin';

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
    plugins: [react(), tailwindcss(), injectSiteOrigin(siteOrigin), generateSitemap(siteOrigin)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
