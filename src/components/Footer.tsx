import { Link, useLocation } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { ICONS } from '@/lib/icons';
import {
  DOCTOR_NAME,
  DOCTOR_TITLE,
  FOOTER_DISCLAIMER,
  PRACTICE_URL,
  SOCIAL_LINKS,
} from '@/constants';

interface FooterLink {
  label: string;
  /** Required when `route` or `external` is set. Omitted for `hash` links. */
  href?: string;
  /** Internal route (use react-router Link). */
  route?: boolean;
  /** Internal hash anchor — rendered as `#anchor` on home, `/#anchor` elsewhere. */
  hash?: string;
  /** External URL (use <a target="_blank">). */
  external?: boolean;
}

const FOOTER_SECTIONS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Site',
    links: [
      { label: 'Home', hash: 'home' },
      { label: 'About', href: '/about', route: true },
      { label: 'Research', href: '/research', route: true },
      { label: 'Publications', href: '/research/publications', route: true },
    ],
  },
  {
    title: 'Work',
    links: [
      { label: 'The book', href: '/book', route: true },
      { label: 'Writing', href: '/writing', route: true },
      { label: 'Giving back', href: '/giving', route: true },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Get in touch', href: '/contact', route: true },
      { label: 'Practice site', href: PRACTICE_URL, external: true },
    ],
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: 'Privacy', href: '/privacy', route: true },
  { label: 'Disclaimer', href: '/disclaimer', route: true },
  { label: 'Accessibility', href: '/accessibility', route: true },
];

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

/**
 * Footer — Apple-grade quiet exit.
 *
 * Refinements vs. the previous version:
 *  - Identity column shows DOCTOR_NAME in Fraunces at title-size + the
 *    professional summary in meta type. Smaller, calmer.
 *  - Three navigation columns of typographic links — no glass card on
 *    the back-to-top button (it's now a typographic hairline)
 *  - Verified social profiles surface as a quiet row in the bottom
 *    strip, mirroring the Connect section's social treatment
 *  - The disclaimer + qualification meta sit at the bottom in a clean
 *    grid with the legal links and copyright in a single hairline-
 *    divided row
 *  - All links use the new design tokens and the calibrated hover
 *    treatment from the rest of the site
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  return (
    <footer className="relative z-10 border-t border-white/5 bg-brand-bg px-6 pb-14 pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl">
        {/* Top — identity + navigation. */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          {/* Identity column — 4/12. */}
          <div className="space-y-7 md:col-span-4">
            <div>
              <p
                className="font-display font-medium"
                style={{
                  fontSize: 'var(--text-title)',
                  letterSpacing: '-0.012em',
                  lineHeight: 1.1,
                }}
              >
                {DOCTOR_NAME}
              </p>
              <p className="mt-3 max-w-xs text-[0.9375rem] leading-relaxed text-white/75">
                {DOCTOR_TITLE}
              </p>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group/top inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/15 px-5 text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-white/80 transition-colors hover:border-medical-teal/60 hover:text-medical-teal"
            >
              <ArrowUp
                aria-hidden="true"
                size={16}
                className="transition-transform group-hover/top:-translate-y-0.5"
              />
              Back to top
            </button>
          </div>

          {/* Navigation columns — 8/12, split into three. */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-12 md:col-span-8 md:grid-cols-3">
            {FOOTER_SECTIONS.map((section) => (
              <nav key={section.title} aria-label={section.title}>
                <p className="eyebrow">{section.title}</p>
                <ul className="mt-5 space-y-1.5">
                  {section.links.map((link) => {
                    const className =
                      'inline-flex min-h-10 items-center gap-1.5 rounded-md leading-snug text-white/85 transition-colors hover:text-white hover:underline hover:underline-offset-4 hover:decoration-medical-teal/70';
                    const style = { fontSize: 'var(--text-body)' };
                    if (link.external) {
                      return (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={className}
                            style={style}
                          >
                            {link.label}
                            <ArrowUpRight aria-hidden="true" size={14} />
                          </a>
                        </li>
                      );
                    }
                    if (link.route) {
                      return (
                        <li key={link.label}>
                          <Link to={link.href!} viewTransition className={className} style={style}>
                            {link.label}
                          </Link>
                        </li>
                      );
                    }
                    const id = link.hash!;
                    if (onHome) {
                      return (
                        <li key={link.label}>
                          <a href={`#${id}`} className={className} style={style}>
                            {link.label}
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li key={link.label}>
                        <Link
                          to={{ pathname: '/', hash: `#${id}` }}
                          viewTransition
                          className={className}
                          style={style}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Middle — social row + disclaimer + qualifications. */}
        <div className="mt-20 border-t border-white/10 pt-12 md:mt-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Social profiles — left 6/12. */}
            <div className="lg:col-span-6">
              <p className="eyebrow">Follow</p>
              <ul className="mt-5 flex flex-wrap items-center gap-2.5">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = ICONS[social.icon];
                  const isPlaceholder = social.placeholder || social.url === '#';
                  return (
                    <li key={social.label}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel={isPlaceholder ? 'noopener noreferrer' : 'me noopener noreferrer'}
                        aria-label={`${social.label}${isPlaceholder ? ' (link coming soon)' : ' (opens in a new tab)'}`}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full glass-thin text-white/80 transition-colors hover:text-medical-teal"
                      >
                        <Icon aria-hidden="true" size={19} strokeWidth={1.5} />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Qualifications meta — right 6/12. */}
            <dl className="grid grid-cols-2 gap-x-10 gap-y-4 self-start lg:col-span-6 lg:justify-self-end">
              <div>
                <dt className="eyebrow">Qualification</dt>
                <dd
                  className="mt-2 font-medium text-white/80"
                  style={{
                    fontSize: 'var(--text-eyebrow)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  FRACS (Orth)
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Registration</dt>
                <dd
                  className="mt-2 font-medium text-white/80"
                  style={{
                    fontSize: 'var(--text-eyebrow)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  AHPRA specialist
                </dd>
              </div>
            </dl>
          </div>

          <p className="mt-12 max-w-3xl text-pretty text-[0.9375rem] leading-relaxed text-white/70">
            {FOOTER_DISCLAIMER}
          </p>
        </div>

        {/* Bottom — legal + copyright. */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href!}
                  viewTransition
                  className="inline-flex min-h-10 items-center text-white/70 transition-colors hover:text-white"
                  style={{
                    fontSize: '0.8125rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p
            className="text-white/70 nums-tabular"
            style={{
              fontSize: '0.8125rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            © {currentYear} {DOCTOR_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
};
