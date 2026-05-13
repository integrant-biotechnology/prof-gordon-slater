import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { Book } from '@/pages/Book';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <Navbar />

        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
