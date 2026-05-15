import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { DOCTOR_NAME } from '@/constants';
import { topNavRoutes } from '@/lib/site';
import { cn } from '@/lib/utils';

/**
 * Navbar — SITE_ROUTES-driven floating glass pill (PR-7).
 *
 * Every top-nav entry comes from SITE_ROUTES.filter(r => r.inTopNav).
 * No hardcoded list, no hash anchors. To add a route to the top
 * navigation, set `inTopNav: true` on its SITE_ROUTES entry. The
 * pill itself stays unchanged — only the link source is centralised.
 *
 * Behaviour preserved:
 *  - glass-thin at top-of-page, glass-thick on scroll
 *  - 4px teal dot under the active route
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
    <nav
      aria-label="Primary"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-4 sm:px-6 sm:py-5"
    >
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'pointer-events-auto flex items-center gap-5 rounded-full',
          'transition-[padding,background-color,box-shadow] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          'md:gap-7',
          isScrolled
            ? 'glass-thick px-4 py-2.5 shadow-2xl shadow-black/40 md:px-7 md:py-3'
            : 'glass-thin px-3 py-2 md:px-5 md:py-2.5',
        )}
      >
        <Link
          to="/"
          viewTransition
          aria-label={`${DOCTOR_NAME} — home`}
          className="group flex items-center gap-3 border-r border-white/10 pr-4"
        >
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-medical-teal text-[12px] font-medium italic transition-transform duration-[220ms] ease-out group-hover:scale-105"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-brand-bg)',
              letterSpacing: '-0.02em',
            }}
          >
            GS
          </span>
          <span
            className="hidden font-display font-medium tracking-tight text-white lg:block"
            style={{ fontSize: 'var(--text-meta)', letterSpacing: '-0.005em' }}
          >
            {DOCTOR_NAME}
          </span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
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
                    className="inline-flex items-center text-white/55 transition-colors duration-[220ms] ease-out hover:text-white"
                  >
                    {route.label}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="ml-1.5 inline-block h-1 w-1 translate-y-[-2px] rounded-full bg-medical-teal"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            viewTransition
            className="hidden sm:inline-flex"
            aria-label="Get in touch — contact page"
          >
            <Button variant="secondary" size="sm" className="h-9 px-5">
              Get in touch
            </Button>
          </Link>
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-full p-2 text-white/65 transition-colors duration-[220ms] ease-out hover:text-white md:hidden"
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
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto fixed inset-x-4 top-24 rounded-3xl glass-thick p-8 shadow-2xl shadow-black/60 md:hidden"
          >
            <ul className="flex flex-col gap-5">
              {links.map((route) => {
                const active = pathname === route.path;
                return (
                  <li key={route.path}>
                    <Link
                      to={route.path}
                      viewTransition
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className="inline-flex items-center font-display text-xl font-medium text-white/65 transition-colors hover:text-white"
                    >
                      {route.label}
                      {active && (
                        <span
                          aria-hidden="true"
                          className="ml-2 inline-block h-1.5 w-1.5 translate-y-[-3px] rounded-full bg-medical-teal"
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
              aria-label="Get in touch — contact page"
            >
              <Button variant="secondary" className="w-full py-3.5">
                Get in touch
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
