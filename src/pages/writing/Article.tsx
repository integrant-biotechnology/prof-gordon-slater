import { Navigate, useParams } from 'react-router-dom';
import { ARTICLES } from '@/constants';

/**
 * /writing/:slug — dynamic article page.
 *
 * Today no articles have `body` populated, so any slug renders the
 * site-wide NotFound (via the wildcard route by redirecting). The
 * route exists today as the destination for /writing index links
 * once articles get bodies (later content PR).
 *
 * When body data lands, this component will resolve the article by
 * slug, wrap it in <PageShell> + <ArticleTemplate>, and render the
 * typed ArticleBlock[] body. For now: redirect to NotFound.
 */
const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find((a) => a.slug === slug);

  // Today: every slug resolves to undefined (no slugs populated).
  // Redirect to NotFound so the user gets the designed 404 rather
  // than a blank page.
  if (!article) {
    return <Navigate to="/not-a-real-route-fallback-to-404" replace />;
  }

  // Forward-ready render path — kicks in when content PR adds bodies.
  // Until then this branch is unreachable; keeping it minimal so the
  // PR diff stays clean.
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
