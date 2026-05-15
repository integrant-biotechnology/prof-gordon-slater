import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { DOCTOR_NAME } from '@/constants';

/**
 * AboutSpotlight — the home page's About teaser.
 *
 * Replaces the encyclopedic <About /> + <Background /> + <WhatHeDoes />
 * sections on the home page. Two-paragraph editorial teaser that links
 * to /about for the full bio.
 *
 * Apple-grade register: typographic, no glass card. The pull is the
 * eyebrow + display title + italic counterpoint + the arrow.
 */
export const AboutSpotlight = () => (
  <section
    id="about-spotlight"
    aria-labelledby="about-spotlight-heading"
    className="px-6 py-24 md:py-32"
  >
    <div className="mx-auto max-w-4xl">
      <Reveal>
        <p className="eyebrow">About</p>
      </Reveal>

      <Reveal delay={0.05}>
        <h2
          id="about-spotlight-heading"
          className="mt-5 text-balance font-display font-medium"
          style={{
            fontSize: 'var(--text-display)',
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
          }}
        >
          A surgeon&rsquo;s record.{' '}
          <em className="font-display italic font-normal text-white/55">
            A scientist&rsquo;s questions.
          </em>
        </h2>
      </Reveal>

      <Reveal delay={0.12}>
        <p
          className="mt-8 max-w-2xl text-pretty leading-relaxed text-white/70"
          style={{ fontSize: 'var(--text-lede)' }}
        >
          {DOCTOR_NAME} is an Australian orthopaedic surgeon with a thirty-year
          clinical record in foot &amp; ankle surgery, a growing body of
          peer-reviewed research, and active work in medical-device development —
          Professor at the University of Technology Sydney and author of{' '}
          <em>Chaos to Creation</em>.
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <p
          className="mt-4 max-w-2xl text-pretty leading-relaxed text-white/55"
          style={{ fontSize: 'var(--text-body)' }}
        >
          He was among the first surgeons in Australia to adopt minimally invasive
          techniques for the foot and ankle, and contributes to the international
          literature as Associate Editor of <em>Foot &amp; Ankle International</em>.
        </p>
      </Reveal>

      <Reveal delay={0.24}>
        <Link viewTransition
          to="/about"
          className="group/link mt-10 inline-flex items-center gap-1.5 text-white/65 transition-colors hover:text-medical-teal"
          style={{
            fontSize: 'var(--text-eyebrow)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Read the full bio
          <ArrowRight
            aria-hidden="true"
            size={13}
            className="transition-transform group-hover/link:translate-x-0.5"
          />
        </Link>
      </Reveal>
    </div>
  </section>
);
