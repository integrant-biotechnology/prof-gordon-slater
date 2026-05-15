import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';

/**
 * ClosingConnect — the home page's quiet exit.
 *
 * Replaces the full <Connect /> section on home. One sentence,
 * one button. Apple-grade closing register — invitation without
 * pressure, then a clean handoff to /contact.
 */
export const ClosingConnect = () => (
  <section
    id="connect"
    aria-labelledby="closing-connect-heading"
    className="px-6 py-24 md:py-32"
  >
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <h2
          id="closing-connect-heading"
          className="text-balance font-display font-medium"
          style={{
            fontSize: 'var(--text-display)',
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
          }}
        >
          Stay in{' '}
          <em className="font-display italic font-normal text-white/55">touch.</em>
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <Link
          to="/contact"
          className="group/link mt-10 inline-flex items-center gap-2 rounded-full glass-thick px-6 py-3 text-white transition-colors hover:text-medical-teal"
          style={{
            fontSize: 'var(--text-eyebrow)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Get in touch
          <ArrowRight
            aria-hidden="true"
            size={14}
            strokeWidth={1.5}
            className="transition-transform group-hover/link:translate-x-0.5"
          />
        </Link>
      </Reveal>
    </div>
  </section>
);
