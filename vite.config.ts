import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { writeFileSync } from 'node:fs';
import { defineConfig, type Plugin } from 'vite';
import { SITE_ROUTES } from './src/data/site';

/**
 * Inline sitemap plugin — generates public/sitemap.xml from
 * SITE_ROUTES at build start. SITE_ROUTES stays the single source
 * of truth; the XML is regenerated on every build. Dynamic routes
 * (paths containing ':') are skipped today; when /writing/:slug
 * entries get bodies, the script can enumerate them.
 */
const generateSitemap = (): Plugin => ({
  name: 'generate-sitemap',
  buildStart() {
    const today = new Date().toISOString().slice(0, 10);
    const origin = 'https://profgordonslater.com.au';

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

export default defineConfig({
  plugins: [react(), tailwindcss(), generateSitemap()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
