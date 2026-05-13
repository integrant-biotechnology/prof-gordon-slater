import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { DOCTOR_NAME } from '@/constants';

const NotFound = () => {
  useEffect(() => {
    document.title = `Page not found | ${DOCTOR_NAME}`;
    return () => {
      document.title = `${DOCTOR_NAME} | Personal site`;
    };
  }, []);

  return (
    <section
      aria-labelledby="not-found-heading"
      className="flex min-h-svh flex-col items-center justify-center px-6 py-32 text-center"
    >
      <p className="eyebrow text-medical-teal/80">404</p>
      <h1
        id="not-found-heading"
        className="mt-4 text-balance font-display text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl"
      >
        Page not found.
      </h1>
      <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-white/65">
        The page you were looking for has moved or doesn’t exist. Head back to the home page and
        you’ll find what you need.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-brand-bg transition-colors hover:bg-white/90"
      >
        <ArrowLeft aria-hidden="true" size={14} />
        Back to the personal site
      </Link>
    </section>
  );
};

export default NotFound;
