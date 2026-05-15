import { lazy, Suspense, type ComponentType, type ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ScrollToTop } from '@/components/ScrollToTop';
import { RouteFallback } from '@/components/RouteFallback';
import { PageEnterHairline } from '@/components/ui/PageEnterHairline';
import { CursorCompanion } from '@/components/ui/CursorCompanion';

// Code-split routes — first paint on / no longer ships sibling route JS.
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Research = lazy(() => import('@/pages/research/Index'));
const Publications = lazy(() => import('@/pages/research/Publications'));
const Book = lazy(() => import('@/pages/Book'));
const ThreeRules = lazy(() => import('@/pages/book/ThreeRules'));
const CaseStudies = lazy(() => import('@/pages/book/CaseStudies'));
const Writing = lazy(() => import('@/pages/writing/Index'));
const Article = lazy(() => import('@/pages/writing/Article'));
const Giving = lazy(() => import('@/pages/Giving'));
const Contact = lazy(() => import('@/pages/Contact'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Disclaimer = lazy(() => import('@/pages/Disclaimer'));
const Accessibility = lazy(() => import('@/pages/Accessibility'));
const NotFound = lazy(() => import('@/pages/NotFound'));

/**
 * Wraps a lazy-loaded route component in its own <ErrorBoundary>.
 *
 * Per-route boundaries mean a crash inside (say) /book no longer
 * collapses the whole site — Navbar, Footer, and other routes
 * continue to render normally; only the failing route shows the
 * fallback. Suspense stays at the outer level so the first lazy
 * import shows the calibrated RouteFallback once, not on every
 * navigation.
 */
const guard = (Component: ComponentType): ReactElement => (
  <ErrorBoundary>
    <Component />
  </ErrorBoundary>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageEnterHairline />
      <CursorCompanion />
      <div className="relative">
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <Navbar />

        <main id="main">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={guard(Home)} />
              <Route path="/about" element={guard(About)} />
              <Route path="/research" element={guard(Research)} />
              <Route path="/research/publications" element={guard(Publications)} />
              <Route path="/book" element={guard(Book)} />
              <Route path="/book/three-rules" element={guard(ThreeRules)} />
              <Route path="/book/case-studies" element={guard(CaseStudies)} />
              <Route path="/writing" element={guard(Writing)} />
              <Route path="/writing/:slug" element={guard(Article)} />
              <Route path="/giving" element={guard(Giving)} />
              <Route path="/contact" element={guard(Contact)} />
              <Route path="/privacy" element={guard(Privacy)} />
              <Route path="/disclaimer" element={guard(Disclaimer)} />
              <Route path="/accessibility" element={guard(Accessibility)} />
              <Route path="*" element={guard(NotFound)} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
