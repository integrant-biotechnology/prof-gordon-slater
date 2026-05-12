import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { DOCTOR_NAME } from '../constants';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Conditions', href: '#conditions' },
    { name: 'Procedures', href: '#procedures' },
    { name: 'Patient Info', href: '#patient-info' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center py-6 px-6 pointer-events-none">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "pointer-events-auto rounded-full glass transition-all duration-500 py-2.5 px-3 md:px-6 flex items-center gap-8",
          isScrolled ? "scale-95 shadow-2xl shadow-black/80 ring-1 ring-white/10" : "scale-100 ring-1 ring-white/5"
        )}
      >
        <a href="#home" className="flex items-center gap-3 pr-4 border-r border-white/10 group">
          <div className="w-7 h-7 rounded-full bg-medical-teal flex items-center justify-center text-brand-bg font-bold text-[10px] transition-transform group-hover:scale-110">
            GS
          </div>
          <span className="font-display font-semibold text-sm tracking-tight hidden lg:block">
            {DOCTOR_NAME}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="primary" size="sm" className="hidden sm:inline-flex h-9 text-xs px-5 shadow-lg shadow-white/5" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
            Request Appointment
          </Button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/50 hover:text-white p-2"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="fixed inset-x-6 top-24 glass rounded-3xl p-8 md:hidden shadow-3xl pointer-events-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-display font-medium text-white/40 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[1px] bg-white/5 w-full my-2" />
              <Button variant="primary" className="w-full py-4 text-sm" onClick={() => { setIsOpen(false); document.getElementById('contact')?.scrollIntoView(); }}>
                Request Appointment
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
