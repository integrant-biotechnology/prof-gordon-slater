import { Link, useLocation } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { DOCTOR_NAME, DOCTOR_TITLE, FOOTER_DISCLAIMER, PRACTICE_URL } from '@/constants';

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
      { label: 'About', hash: 'about' },
      { label: 'Background', hash: 'background' },
    ],
  },
  {
    title: 'Work',
    links: [
      { label: 'The book', href: '/book', route: true },
      { label: 'Body of work', hash: 'work' },
      { label: 'Community & vision', hash: 'community' },
      { label: 'Writing', hash: 'writing' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Get in touch', hash: 'connect' },
      { label: 'Practice site', href: PRACTICE_URL, external: true },
    ],
  },
];

const LEGAL_LINKS = ['Privacy', 'Disclaimer', 'Accessibility'];

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  return (
    <footer className="relative z-10 border-t border-white/5 bg-brand-bg px-6 pb-16 pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 space-y-8 lg:col-span-2">
            <div className="space-y-3">
              <p className="font-display text-2xl font-bold tracking-tight text-white">{DOCTOR_NAME}</p>
              <p className="eyebrow max-w-xs leading-relaxed">{DOCTOR_TITLE}</p>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex h-12 w-12 items-center justify-center rounded-2xl glass text-white/55 transition-colors hover:border-medical-teal/30 hover:text-medical-teal"
            >
              <ArrowUp aria-hidden="true" size={20} strokeWidth={1.5} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <nav key={section.title} aria-label={section.title} className="space-y-6">
              <h2 className="eyebrow">{section.title}</h2>
              <ul className="space-y-3.5">
                {section.links.map((link) => {
                  const className = 'text-sm text-white/60 transition-colors hover:text-white';
                  if (link.external) {
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${className} inline-flex items-center gap-1`}
                        >
                          {link.label}
                          <ArrowUpRight aria-hidden="true" size={12} />
                        </a>
                      </li>
                    );
                  }
                  if (link.route) {
                    return (
                      <li key={link.label}>
                        <Link to={link.href!} className={className}>
                          {link.label}
                        </Link>
                      </li>
                    );
                  }
                  // hash anchor — same-page on / , router nav with hash from /book
                  const id = link.hash!;
                  if (onHome) {
                    return (
                      <li key={link.label}>
                        <a href={`#${id}`} className={className}>
                          {link.label}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={link.label}>
                      <Link to={{ pathname: '/', hash: `#${id}` }} className={className}>
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="space-y-12 border-t border-white/5 pt-12">
          <div className="grid gap-10 lg:grid-cols-12">
            <p className="text-sm leading-relaxed text-white/55 lg:col-span-8">{FOOTER_DISCLAIMER}</p>
            <div className="flex gap-10 lg:col-span-4 lg:justify-end">
              <div className="space-y-1.5">
                <p className="eyebrow">Qualification</p>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">FRACS (Orth)</p>
              </div>
              <div className="space-y-1.5">
                <p className="eyebrow">Registration</p>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">AHPRA specialist</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {LEGAL_LINKS.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white/75">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              © {currentYear} {DOCTOR_NAME}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
