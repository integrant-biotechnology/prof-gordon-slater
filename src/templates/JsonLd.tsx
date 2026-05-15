import { useEffect } from 'react';

interface JsonLdProps {
  /** schema.org payload; serialised to <script type="application/ld+json">. */
  data: unknown;
  /** Optional id so multiple JSON-LD scripts per page don't clash. */
  id?: string;
}

/**
 * JsonLd — per-route structured data injection.
 *
 * The SPA caveat: this is post-hydration. Google's crawler renders
 * JS-aware metadata so it picks this up; non-JS-aware crawlers see
 * only what's in index.html (which kept the Person schema for SEO
 * baseline). The proper fix — per-route pre-rendering — is the
 * developer audit's PR-G.
 *
 * Cleans up its own <script> on unmount so navigations between
 * routes don't accumulate dangling LD blocks.
 */
export const JsonLd = ({ data, id }: JsonLdProps) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const scriptId = id ?? `json-ld-${Math.random().toString(36).slice(2, 10)}`;
    const existing = document.getElementById(scriptId);

    const script = existing ?? document.createElement('script');
    script.id = scriptId;
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(data);

    if (!existing) document.head.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [data, id]);

  return null;
};
