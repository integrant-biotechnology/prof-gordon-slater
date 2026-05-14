import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { DOCTOR_NAME } from '@/constants';
import { cn } from '@/lib/utils';

interface NavLink {
  name: string;
  /** Hash anchor on the home route (e.g. 'about'). Mutually exclusive with `route`. */
  hash?: string;
  /** Internal router path (e.g. '/book'). */
  route?: string;
}

const NAV_LINKS: NavLink[] = [
  { name: 'Home', hash: 'home' },
  { name: 'About', hash: 'about' },
  { name: 'Work', hash: 'work' },
  { name: 'Book', route: '/book' },
  { name: 'Giving', route: '/giving' },
  { name: 'Connect', hash: 'connect' },
];

/**
 * Navbar — floating glass pill.
 *
 * Apple-grade refinements:
 *  - At top of page: uses `glass-thin` material (almost transparent)
 *    so the hero is the moment, not the chrome.
 *  - On scroll: pill transitions to `glass-thick` with a calibrated
 *    drop shadow and slightly larger padding — it "settles" into a
 *    more visible state once the hero has been read.
 *  - Active-route indicator: a 4px teal dot sits beneath the link
 *    of the current route (Book / Giving). Subtle, calibrated.
 *  - Monogram uses Fraunces italic to match the new favicon.
 *  - All hover transitions calibrated through --ease-apple.
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onHome = pathname === '/';

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

  const goConnect = () => {
    if (onHome) {
      document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate({ pathname: '/', hash: '#connect' });
    }
  };

  const isActiveRoute = (link: NavLink): boolean => {
    if (link.route) return pathname === link.route;
    return false;
  };

  const renderLink = (link: NavLink, className: string, onClick?: () => void) => {
    const active = isActiveRoute(link);
    if (link.route) {
      return (
        <Link
          to={link.route}
          className={className}
          onClick={onClick}
          aria-current={active ? 'page' : undefined}
        >
          {link.name}
          {active && (
            <span
              aria-hidden="true"
              className="ml-1.5 inline-block h-1 w-1 translate-y-[-2px] rounded-full bg-medical-teal"
            />
          )}
        </Link>
      );
    }
    const id = link.hash!;
    if (onHome) {
      return (
        <a href={`#${id}`} className={className} onClick={onClick}>
          {link.name}
        </a>
      );
    }
    return (
      <Link to={{ pathname: '/', hash: `#${id}` }} className={className} onClick={onClick}>
        {link.name}
      </Link>
    );
  };

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
          // Single source of truth: Tailwind drives everything. Transitions
          // are declared once via the arbitrary-value ease + duration so
          // they don't conflict with inline style.
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
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              {renderLink(
                link,
                'inline-flex items-center text-white/55 transition-colors duration-[220ms] ease-out hover:text-white',
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            className="hidden h-9 px-5 sm:inline-flex"
            onClick={goConnect}
          >
            Get in touch
          </Button>
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
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  {renderLink(
                    link,
                    'inline-flex items-center font-display text-xl font-medium text-white/65 transition-colors hover:text-white',
                    () => setIsOpen(false),
                  )}
                </li>
              ))}
            </ul>
            <div className="my-5 h-px w-full bg-white/10" />
            <Button
              variant="secondary"
              className="w-full py-3.5"
              onClick={() => {
                setIsOpen(false);
                goConnect();
              }}
            >
              Get in touch
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
