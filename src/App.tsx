import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhatHeDoes } from '@/components/WhatHeDoes';
import { About } from '@/components/About';
import { Background } from '@/components/Background';
import { BodyOfWork } from '@/components/BodyOfWork';
import { CommunityVision } from '@/components/CommunityVision';
import { Writing } from '@/components/Writing';
import { Connect } from '@/components/Connect';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <div className="relative">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <WhatHeDoes />
        <About />
        <Background />
        <BodyOfWork />
        <CommunityVision />
        <Writing />
        <Connect />
      </main>

      <Footer />
    </div>
  );
}
