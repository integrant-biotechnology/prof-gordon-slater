import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { DOCTOR_NAME } from '@/constants';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Conditions', href: '#conditions' },
  { name: 'Procedures', href: '#procedures' },
  { name: 'Patient Info', href: '#patient-info' },
  { name: 'Contact', href: '#contact' },
];

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-5 sm:px-6"
    >
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={cn(
          'pointer-events-auto flex items-center gap-6 rounded-full glass px-3 py-2.5 transition-shadow duration-500 md:gap-8 md:px-6',
          isScrolled ? 'shadow-2xl shadow-black/60 ring-1 ring-white/10' : 'ring-1 ring-white/5',
        )}
      >
        <a
          href="#home"
          aria-label={`${DOCTOR_NAME} — home`}
          className="group flex items-center gap-3 border-r border-white/10 pr-4"
        >
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-medical-teal text-[10px] font-bold text-brand-bg transition-transform group-hover:scale-110"
          >
            GS
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-white lg:block">
            {DOCTOR_NAME}
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            className="hidden h-9 px-5 text-xs sm:inline-flex"
            onClick={scrollToContact}
          >
            Request appointment
          </Button>
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-full p-2 text-white/65 transition-colors hover:text-white md:hidden"
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto fixed inset-x-4 top-24 rounded-3xl glass p-8 shadow-2xl shadow-black/60 md:hidden"
          >
            <ul className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-xl font-medium text-white/65 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="my-5 h-px w-full bg-white/10" />
            <Button
              variant="primary"
              className="w-full py-3.5 text-sm"
              onClick={() => {
                setIsOpen(false);
                scrollToContact();
              }}
            >
              Request appointment
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
