import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { findRoute } from '@/lib/site';
import { siteUrl } from '@/lib/site-origin';

// -------------------------------------------------------------
// Page metadata — ONE function decides the <head> for every URL.
//
//   metaFor(path)  → used at build time by scripts/prerender.mjs
//                    (via src/entry-server.tsx) to write each page's
//                    static <head>, and at runtime by <RouteMeta> to
//                    keep the head in sync on client navigation.
//
// Because both paths call the same function, the HTML Google
// crawls and the head a visitor sees after navigating can never
// disagree.
// -------------------------------------------------------------

export const SITE_NAME = 'Prof Gordon Slater';
export const DEFAULT_OG_IMAGE = '/og-card.png?v=1';
export const DEFAULT_OG_IMAGE_ALT =
  'Prof Gordon Slater — Orthopaedic Surgeon, Researcher and Author';

export interface PageMeta {
  /** Normalised path ('/' or '/about', never a trailing slash). */
  path: string;
  title: string;
  description: string;
  /** Absolute canonical URL; omitted for the 404 page. */
  canonical?: string;
  /** 'index,follow' or 'noindex,follow'. */
  robots: string;
  ogType: 'website' | 'profile' | 'book';
  /** Absolute image URL. */
  ogImage: string;
  ogImageAlt: string;
  /** False for 404 / unknown URLs. */
  found: boolean;
}

export const NOT_FOUND_META: Omit<PageMeta, 'path'> = {
  title: `Page not found | ${SITE_NAME}`,
  description:
    'This page could not be found on the personal website of Prof Gordon Slater, foot & ankle orthopaedic surgeon, researcher and author.',
  robots: 'noindex,follow',
  ogType: 'website',
  ogImage: siteUrl(DEFAULT_OG_IMAGE),
  ogImageAlt: DEFAULT_OG_IMAGE_ALT,
  found: false,
};

/** '/about/' → '/about'; '' → '/'. Query strings and hashes are dropped. */
export const normalizePath = (raw: string): string => {
  const path = raw.split(/[?#]/)[0] || '/';
  if (path.length > 1 && path.endsWith('/')) return path.replace(/\/+$/, '') || '/';
  return path;
};

export const metaFor = (rawPath: string): PageMeta => {
  const path = normalizePath(rawPath);
  const route = path.includes(':') ? undefined : findRoute(path);
  if (!route) return { ...NOT_FOUND_META, path };

  return {
    path,
    title: route.title,
    description: route.description,
    canonical: siteUrl(path),
    robots: route.noindex ? 'noindex,follow' : 'index,follow',
    ogType: path === '/' || path === '/about' ? 'profile' : path === '/book' ? 'book' : 'website',
    ogImage: siteUrl(route.ogImage ?? DEFAULT_OG_IMAGE),
    ogImageAlt: route.ogImageAlt ?? DEFAULT_OG_IMAGE_ALT,
    found: true,
  };
};

// ---- client-side sync --------------------------------------------------

const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertCanonical = (href: string | undefined) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/** Apply a PageMeta to the live document head. */
export const applyMeta = (meta: PageMeta): void => {
  if (typeof document === 'undefined') return;
  document.title = meta.title;
  upsertMeta('name', 'description', meta.description);
  upsertMeta('name', 'robots', meta.robots);
  upsertCanonical(meta.canonical);
  upsertMeta('property', 'og:title', meta.title);
  upsertMeta('property', 'og:description', meta.description);
  upsertMeta('property', 'og:type', meta.ogType);
  upsertMeta('property', 'og:image', meta.ogImage);
  upsertMeta('property', 'og:image:alt', meta.ogImageAlt);
  if (meta.canonical) upsertMeta('property', 'og:url', meta.canonical);
  upsertMeta('name', 'twitter:title', meta.title);
  upsertMeta('name', 'twitter:description', meta.description);
  upsertMeta('name', 'twitter:image', meta.ogImage);
};

/**
 * <RouteMeta> — mounted once in the app shell. Keeps <title>,
 * description, canonical, robots and Open Graph tags in sync with
 * the current URL on client-side navigation. (The first load is
 * already correct: it is served pre-rendered.)
 */
export const RouteMeta = (): null => {
  const { pathname } = useLocation();
  useEffect(() => {
    applyMeta(metaFor(pathname));
  }, [pathname]);
  return null;
};
