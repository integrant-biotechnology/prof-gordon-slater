import { SITE_ROUTES, SITE_ROUTES_BY_PATH, type SiteRoute } from '@/data/site';

// -------------------------------------------------------------
// Route helpers — every navigation surface (Navbar, Footer,
// Breadcrumbs, SeeAlsoFooter, sitemap generator) reads through
// these so SITE_ROUTES remains the single source of truth.
// -------------------------------------------------------------

/** Find a route by exact path. */
export const findRoute = (path: string): SiteRoute | undefined =>
  SITE_ROUTES_BY_PATH[path];

/** Parent of a route, derived from its `parent` field. */
export const parentOf = (route: SiteRoute): SiteRoute | undefined =>
  route.parent ? findRoute(route.parent) : undefined;

/** Direct children of a route (one level down). */
export const childrenOf = (path: string): SiteRoute[] =>
  SITE_ROUTES.filter((r) => r.parent === path);

/**
 * The list of routes shown in the per-page "See also" footer.
 * Drops any path that isn't a registered route — keeps the footer
 * resilient if `related` is mid-edit.
 */
export const relatedRoutes = (route: SiteRoute): SiteRoute[] =>
  (route.related ?? [])
    .map((p) => findRoute(p))
    .filter((r): r is SiteRoute => r !== undefined);

/** Routes that appear in the top navigation pill. */
export const topNavRoutes = (): SiteRoute[] =>
  SITE_ROUTES.filter((r) => r.inTopNav);

/** Routes linked from the footer "Resources" column. */
export const footerRoutes = (): SiteRoute[] =>
  SITE_ROUTES.filter((r) => r.inFooter);

/**
 * Breadcrumb chain from root → leaf for a given route.
 * Always includes the route itself as the last entry. For the
 * home page (no parent), returns `[homeRoute]`.
 */
export const breadcrumbsFor = (route: SiteRoute): SiteRoute[] => {
  const chain: SiteRoute[] = [route];
  let cursor: SiteRoute | undefined = route;
  while (cursor?.parent) {
    const next = findRoute(cursor.parent);
    if (!next || chain.includes(next)) break; // guard against cycles
    chain.unshift(next);
    cursor = next;
  }
  return chain;
};
