import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { DOCTOR_NAME } from '@/constants';
import { topNavRoutes } from '@/lib/site';
import { cn } from '@/lib/utils';

/**
 * Navbar — SITE_ROUTES-driven full-width glass header.
 *
 * Every top-nav entry comes from SITE_ROUTES.filter(r => r.inTopNav).
 * No hardcoded list, no hash anchors. To add a route to the top
 * navigation, set `inTopNav: true` on its SITE_ROUTES entry.
 *
 * Designed for legibility first (older readers): 17px links at high
 * contrast, ≥44px targets everywhere, and an active page marked by a
 * filled backdrop + 3px teal underline instead of a 4px dot.
 *
 * Behaviour preserved from the pill era:
 *  - glass-thin at top-of-page, glass-thick on scroll (bar condenses)
 *  - mobile menu collapses on route change
 *  - View Transitions API engages on every <Link> for cross-fade
 *    + slide registers (see index.css)
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  const links = topNavRoutes();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav aria-label="Primary" className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'w-full border-b border-white/10',
          'transition-[background-color,box-shadow] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          isScrolled ? 'glass-thick shadow-2xl shadow-black/40' : 'glass-thin',
        )}
      >
        <div
          className={cn(
            'mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8',
            'transition-[padding] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
            isScrolled ? 'py-2.5' : 'py-4 md:py-5',
          )}
        >
          <Link
            to="/"
            viewTransition
            aria-label={`${DOCTOR_NAME} — home`}
            className="group flex min-h-11 items-center gap-3.5 rounded-lg"
          >
            <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-medical-teal text-[15px] font-medium italic transition-transform duration-[220ms] ease-out group-hover:scale-105"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-brand-bg)',
                letterSpacing: '-0.02em',
              }}
            >
              GS
            </span>
            <span className="flex flex-col md:hidden lg:flex">
              <span
                className="font-display text-xl font-medium tracking-tight whitespace-nowrap text-white"
                style={{ letterSpacing: '-0.01em' }}
              >
                {DOCTOR_NAME}
              </span>
              <span className="hidden text-[13px] text-white/70 lg:block">
                Orthopaedic Surgeon · Author
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links
              .filter((r) => r.path !== '/')
              .map((route) => {
                const active = pathname === route.path;
                return (
                  <li key={route.path}>
                    <Link
                      to={route.path}
                      viewTransition
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'relative inline-flex h-12 items-center rounded-lg px-3 text-[1.0625rem] font-medium lg:px-4',
                        'transition-colors duration-[220ms] ease-out',
                        active
                          ? 'bg-white/10 text-white'
                          : 'text-white/85 hover:bg-white/10 hover:text-white',
                      )}
                    >
                      {route.label}
                      {active && (
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-3 bottom-1 h-[3px] rounded-full bg-medical-teal"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
          </ul>

          <div className="flex items-center gap-2.5">
            <Link
              to="/contact"
              viewTransition
              className={cn(
                'hidden h-12 items-center justify-center rounded-full bg-medical-teal px-7 text-base font-semibold whitespace-nowrap lg:inline-flex',
                'transition-[background-color,transform] duration-200 ease-out hover:scale-[1.02] hover:bg-medical-teal/90',
              )}
              style={{ color: 'var(--color-brand-bg)' }}
            >
              Get in touch
            </Link>
            <button
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 text-white/85 transition-colors duration-[220ms] ease-out hover:text-white md:hidden"
            >
              {isOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-24 rounded-3xl glass-thick p-8 shadow-2xl shadow-black/60 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((route) => {
                const active = pathname === route.path;
                return (
                  <li key={route.path}>
                    <Link
                      to={route.path}
                      viewTransition
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex items-center rounded-xl px-3 py-3 font-display text-[1.625rem] font-medium transition-colors',
                        active ? 'bg-white/10 text-white' : 'text-white/85 hover:text-white',
                      )}
                    >
                      {route.label}
                      {active && (
                        <span
                          aria-hidden="true"
                          className="ml-3 inline-block h-2 w-2 rounded-full bg-medical-teal"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="my-5 h-px w-full bg-white/10" />
            <Link
              to="/contact"
              viewTransition
              onClick={() => setIsOpen(false)}
              className="flex h-13 min-h-12 w-full items-center justify-center rounded-full bg-medical-teal text-lg font-semibold transition-colors hover:bg-medical-teal/90"
              style={{ color: 'var(--color-brand-bg)' }}
            >
              Get in touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
