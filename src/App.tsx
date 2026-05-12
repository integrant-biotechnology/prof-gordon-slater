import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FocusAreas } from './components/FocusAreas';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { Procedures } from './components/Procedures';
import { PatientInformation } from './components/PatientInformation';
import { Articles } from './components/Articles';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { DOCTOR_NAME, DOCTOR_TITLE, CONTACT_INFO } from './constants';

export default function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": DOCTOR_NAME,
    "image": "https://profgordonslater.com.au/placeholder-dr- Gordon-slater.jpg",
    "description": DOCTOR_TITLE,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CONTACT_INFO.address.split(", ")[0],
      "addressLocality": "Potts Point",
      "addressRegion": "NSW",
      "postalCode": "2011",
      "addressCountry": "AU"
    },
    "telephone": CONTACT_INFO.phone,
    "url": "https://profgordonslater.com.au",
    "medicalSpecialty": "OrthopaedicSurgery",
    "openingHours": "Mo-Fr 09:00-17:00"
  };

  return (
    <div className="relative selection:bg-medical-teal/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <FocusAreas />
        <About />
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

