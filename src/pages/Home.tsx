import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { AboutSpotlight } from '@/components/AboutSpotlight';
import { CuratedTrio } from '@/components/CuratedTrio';
import { LatestEssay } from '@/components/LatestEssay';
import { ClosingConnect } from '@/components/ClosingConnect';
import { PullQuote } from '@/components/ui/PullQuote';
import { BOOK, DOCTOR_NAME, DOCTOR_TITLE } from '@/constants';

/**
 * Home — curated entry, not the encyclopedia.
 *
 * PR-6 reaches the Apple-bar target: 5 named sections.
 * <Writing /> → /writing index; <LatestEssay /> teaser takes its
 * slot. <CommunityVision /> is folded into /about as a "Beyond the
 * operating theatre" section — its content fits a bio page; on home
 * it was a hold-over from the encyclopedic era.
 *
 * End state achieved:
 *   1. Hero
 *   2. AboutSpotlight
 *   3. PullQuote interstitial (book central claim)
 *   4. CuratedTrio (About · Research · Book panels)
 *   5. LatestEssay
 *   6. ClosingConnect
 *
 * Five named sections + one editorial interstitial + one closing
 * CTA — the curated entry the plan describes in §C.
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
      <CuratedTrio />
      <LatestEssay />
      <ClosingConnect />
    </>
  );
};

export default Home;
