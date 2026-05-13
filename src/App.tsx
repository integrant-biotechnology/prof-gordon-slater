import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FocusAreas } from '@/components/FocusAreas';
import { About } from '@/components/About';
import { Background } from '@/components/Background';
import { Philosophy } from '@/components/Philosophy';
import { Procedures } from '@/components/Procedures';
import { PatientInformation } from '@/components/PatientInformation';
import { Articles } from '@/components/Articles';
import { ContactCTA } from '@/components/ContactCTA';
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
        <FocusAreas />
        <About />
        <Background />
        <Philosophy />
        <Procedures />
        <PatientInformation />
        <Articles />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
