import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';
import { EditorialImage } from '@/components/ui/EditorialImage';
import { DOCTOR_CREDENTIALS, DOCTOR_NAME, PRACTICE_URL } from '@/constants';

const TAGS = [
  'Professor, UTS',
  'Foot & ankle fellowship — Hospital for Special Surgery, New York',
  'Fellow, Royal Australasian College of Surgeons (Orthopaedics)',
  'Associate Editor, Foot & Ankle International',
];

/**
 * About — magazine spread.
 *
 * Reimagined per the Apple-grade brief:
 *  - Two-column editorial layout: large environmental photo on the
 *    left (3:4), body copy on the right.
 *  - First paragraph carries a CSS `::first-letter` drop cap in
 *    Fraunces at ~4× body height — the magazine signature.
 *  - Credentials list collapses from a vertical icon list into a
 *    quiet inline meta row at the bottom. No card.
 *  - The right-column "metadata card" is removed entirely. The
 *    photograph carries the identity; the type does the rest.
 */
export const About = () => (
  <section
    id="about"
    aria-labelledby="about-heading"
    className="overflow-hidden px-6 py-24 md:py-32"
  >
    <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[5fr_7fr] lg:gap-20">
      {/* Photograph column — sticky on desktop so the eye stays
          anchored as the body copy scrolls past. */}
      <div className="lg:sticky lg:top-28">
        <Reveal>
          <EditorialImage
            fallbackSrc="/portrait-gordon-slater-about.webp?v=4"
            alt={`${DOCTOR_NAME}, foot and ankle orthopaedic surgeon`}
            aspect="3/4"
            sizes="(min-width: 1024px) 40vw, 100vw"
            caption={DOCTOR_NAME}
            attribution={DOCTOR_CREDENTIALS}
          />
        </Reveal>
      </div>

      {/* Body column — the magazine page. */}
      <div>
        <Reveal>
          <p className="eyebrow">About</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="about-heading"
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
          <div className="mt-10 space-y-6 text-pretty leading-relaxed text-white/75" style={{ fontSize: 'var(--text-body)' }}>
            <p className="drop-cap">
              {DOCTOR_NAME} is an Australian orthopaedic surgeon with a thirty-year clinical record
              in foot &amp; ankle surgery, a growing body of peer-reviewed research, and active
              work in medical-device development. He was among the first surgeons in Australia to
              adopt minimally invasive techniques for the foot and ankle, and uses
              regenerative-medicine adjuncts where appropriate.
            </p>
            <p>
              He completed his medical degree at the University of New South Wales, then advanced
              sub-specialist training in foot and ankle surgery at New York&rsquo;s Hospital for
              Special Surgery in 1997. He has been a Fellow of the Royal Australasian College of
              Surgeons (Orthopaedics) since 1997, and is Professor at the University of Technology
              Sydney.
            </p>
            <p>
              His research sits inside a wider Sydney ecosystem. Regular collaborators include
              UNSW&rsquo;s Ramaciotti Centre for Genomics, the UTS Biologics Innovation Facility,
              the Garvan Institute, and the Westmead Institute for Medical Research — partners on
              the biomarker, methylation and biologics work behind the longevity and regeneration
              thesis.
            </p>
            <p>
              He contributes to the international literature as Associate Editor of{' '}
              <em>Foot &amp; Ankle International</em>, sits on the editorial panel of{' '}
              <em>EC Orthopaedics</em>, and chairs Foot &amp; Ankle for the Asia Pacific
              Orthopaedic Association. His book{' '}
              <em>Chaos to Creation: Longevity and Regeneration Frontiers</em> (9 April 2026) is
              the long-form synthesis of that work, drawing on sixty peer-reviewed publications
              and multiple medical-technology patents.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-8 text-pretty text-white/55" style={{ fontSize: 'var(--text-meta)' }}>
            For clinical care or to arrange an appointment, please see the practice site —{' '}
            <a
              href={PRACTICE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline gap-1 text-medical-teal underline-offset-4 transition-colors hover:underline"
            >
              orthopaedic-surgeon.com.au
              <ArrowUpRight aria-hidden="true" size={11} className="self-center" />
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <ul className="mt-12 flex flex-wrap gap-x-3 gap-y-2 border-t border-white/5 pt-8">
            {TAGS.map((tag) => (
              <li
                key={tag}
                className="rounded-full glass-thin px-3.5 py-1.5 text-white/65"
                style={{ fontSize: 'var(--text-meta)' }}
              >
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);
