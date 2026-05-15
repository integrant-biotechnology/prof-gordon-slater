import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { RouteFallback } from '@/components/RouteFallback';
import { ARTICLES } from '@/constants';

// Lazy-loaded — keeps the article chunk tiny while still showing the
// designed 404 layout for unknown slugs.
const NotFound = lazy(() => import('@/pages/NotFound'));

/**
 * /writing/:slug — dynamic article page.
 *
 * Looks up the article by slug. If not found (the case today, since
 * no ARTICLES entry has `body` populated), renders the designed
 * NotFound inline — the URL stays at /writing/:slug rather than
 * bouncing to an arbitrary 404 path (cleaner UX than a redirect).
 *
 * Forward-ready render path: when content lands (an ARTICLES entry
 * gets a body + slug), this component will resolve and wrap it in
 * <ArticleTemplate>. Until then the inline NotFound is the honest
 * shape.
 */
const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Suspense fallback={<RouteFallback />}>
        <NotFound />
      </Suspense>
    );
  }

  // Forward-ready — reached only when an ARTICLES entry gains body.
  return (
    <main id="content" className="px-6 py-32">
      <article className="mx-auto max-w-3xl">
        <p
          className="text-medical-teal/85"
          style={{
            fontSize: 'var(--text-eyebrow)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          {article.category}
        </p>
        <h1
          className="mt-5 font-display font-medium"
          style={{
            fontSize: 'var(--text-display)',
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
          }}
        >
          {article.title}
        </h1>
      </article>
    </main>
  );
};

export default Article;
