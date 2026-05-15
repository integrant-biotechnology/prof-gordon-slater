import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { AboutSpotlight } from '@/components/AboutSpotlight';
import { BookPreview } from '@/components/BookPreview';
import { BodyOfWork } from '@/components/BodyOfWork';
import { CommunityVision } from '@/components/CommunityVision';
import { Writing } from '@/components/Writing';
import { Connect } from '@/components/Connect';
import { PullQuote } from '@/components/ui/PullQuote';
import { BOOK, DOCTOR_NAME, DOCTOR_TITLE } from '@/constants';

/**
 * Home — curated entry, not the encyclopedia.
 *
 * PR-2 reduces home from 9 component sections (Hero + WhatHeDoes +
 * About + Background + BookPreview + BodyOfWork + CommunityVision +
 * Writing + Connect) plus a PullQuote interstitial down to 7 sections.
 * <About> + <Background> + <WhatHeDoes> migrated to /about; their slot
 * is now <AboutSpotlight />.
 *
 * Subsequent PRs continue the reduction:
 *   PR-3 → Connect → /contact
 *   PR-4 → BodyOfWork → /research
 *   PR-6 → Writing → /writing
 *
 * Target end state: 5 sections (Hero, CuratedTrio, PullQuote,
 * LatestEssay, ClosingConnect) — see plan §C.
 */
const Home = () => {
  const { hash, pathname } = useLocation();

  // per-route document title
  useEffect(() => {
    document.title = `${DOCTOR_NAME} | Personal site`;
  }, []);

  // hash navigation that works cross-route (e.g. /book → "/#work" → /, scroll to #work)
  useEffect(() => {
    if (!hash) {
      // when arriving at "/" with no hash, restore scroll to top
      if (pathname === '/') window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }
    const id = hash.slice(1);
    const tick = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
    return () => clearTimeout(tick);
  }, [hash, pathname]);

  return (
    <>
      <span className="sr-only">{DOCTOR_TITLE}</span>
      <Hero />
      <AboutSpotlight />
      {/* Editorial pull-quote moment — the book's central claim, lifted
          before BookPreview so the section opener lands with weight. */}
      <section
        aria-label="From the book"
        className="px-6 py-20 md:py-28"
      >
        <PullQuote
          align="center"
          width="wide"
          attribution={BOOK.heroQuoteSource}
        >
          {BOOK.heroQuote}
        </PullQuote>
      </section>
      <BookPreview />
      <BodyOfWork />
      <CommunityVision />
      <Writing />
      <Connect />
    </>
  );
};

export default Home;
