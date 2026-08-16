import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { AuthorityStats } from '@/components/home/AuthorityStats';
import { FeaturedResearch } from '@/components/home/FeaturedResearch';
import { BookShowcase } from '@/components/home/BookShowcase';
import { AboutSpotlight } from '@/components/AboutSpotlight';
import { LatestEssay } from '@/components/LatestEssay';
import { ClosingConnect } from '@/components/ClosingConnect';
import { DOCTOR_NAME, DOCTOR_TITLE } from '@/constants';

/**
 * Home — the credibility → expertise → thought leadership → action arc.
 *
 *   1. Hero            — who he is, the thesis, two CTAs
 *   2. AuthorityStats  — verified numbers, editorial rules
 *   3. FeaturedResearch — six themes as cards into /research
 *   4. BookShowcase    — Stripe Press moment (carries the hero quote)
 *   5. AboutSpotlight  — the story teaser into /about
 *   6. LatestEssay     — writing teaser
 *   7. ClosingConnect  — the action close
 */
const Home = () => {
  const { hash, pathname } = useLocation();

  // per-route document title
  useEffect(() => {
    document.title = `${DOCTOR_NAME} | Personal site`;
  }, []);

  // hash navigation that works cross-route (e.g. /book → "/#explore" → /, scroll)
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
      <AuthorityStats />
      <FeaturedResearch />
      <BookShowcase />
      <AboutSpotlight />
      <LatestEssay />
      <ClosingConnect />
    </>
  );
};

export default Home;
