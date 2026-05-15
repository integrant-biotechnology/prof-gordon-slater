import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ScrollToTop } from '@/components/ScrollToTop';
import { RouteFallback } from '@/components/RouteFallback';
import { PageEnterHairline } from '@/components/ui/PageEnterHairline';
import { CursorCompanion } from '@/components/ui/CursorCompanion';

// Code-split routes — first paint on / no longer ships /book or /giving JS.
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Research = lazy(() => import('@/pages/research/Index'));
const Publications = lazy(() => import('@/pages/research/Publications'));
const Book = lazy(() => import('@/pages/Book'));
const ThreeRules = lazy(() => import('@/pages/book/ThreeRules'));
const CaseStudies = lazy(() => import('@/pages/book/CaseStudies'));
const Giving = lazy(() => import('@/pages/Giving'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

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
          <ErrorBoundary>
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/research" element={<Research />} />
                <Route path="/research/publications" element={<Publications />} />
                <Route path="/book" element={<Book />} />
                <Route path="/book/three-rules" element={<ThreeRules />} />
                <Route path="/book/case-studies" element={<CaseStudies />} />
                <Route path="/giving" element={<Giving />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
