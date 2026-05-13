import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { WhatHeDoes } from '@/components/WhatHeDoes';
import { About } from '@/components/About';
import { Background } from '@/components/Background';
import { BookPreview } from '@/components/BookPreview';
import { BodyOfWork } from '@/components/BodyOfWork';
import { CommunityVision } from '@/components/CommunityVision';
import { Writing } from '@/components/Writing';
import { Connect } from '@/components/Connect';
import { DOCTOR_NAME, DOCTOR_TITLE } from '@/constants';

export const Home = () => {
  const { hash, pathname } = useLocation();

  // per-route document title
  useEffect(() => {
    document.title = `${DOCTOR_NAME} | Personal site`;
  }, []);

  // hash navigation that works cross-route (e.g. /book → "/#about" → /, scroll to #about)
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
      <WhatHeDoes />
      <About />
      <Background />
      <BookPreview />
      <BodyOfWork />
      <CommunityVision />
      <Writing />
      <Connect />
    </>
  );
};
