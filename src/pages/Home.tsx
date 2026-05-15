import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { AboutSpotlight } from '@/components/AboutSpotlight';
import { CuratedTrio } from '@/components/CuratedTrio';
import { CommunityVision } from '@/components/CommunityVision';
import { Writing } from '@/components/Writing';
import { ClosingConnect } from '@/components/ClosingConnect';
import { PullQuote } from '@/components/ui/PullQuote';
import { BOOK, DOCTOR_NAME, DOCTOR_TITLE } from '@/constants';

/**
 * Home — curated entry, not the encyclopedia.
 *
 * PR-4 swaps BookPreview + BodyOfWork (two heavy sections) for a
 * single <CuratedTrio /> editorial row — three typographic panels
 * pointing at /about, /research, /book. Net: −1 section, much
 * lighter visual weight.
 *
 * Final reduction lands in PR-6: <Writing /> → /writing index;
 * <LatestEssay /> teaser takes its slot.
 *
 * Target end state (after PR-6): 5 named sections (Hero,
 * AboutSpotlight, CuratedTrio, LatestEssay, ClosingConnect) plus
 * a PullQuote interstitial — see plan §C.
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
      <CommunityVision />
      <Writing />
      <ClosingConnect />
    </>
  );
};

export default Home;
