import { ArrowUpRight } from 'lucide-react';
import { PageShell } from '@/templates/PageShell';
import { PageHero } from '@/templates/PageHero';
import { Reveal } from '@/components/ui/Motion';
import { PullQuote } from '@/components/ui/PullQuote';
import { findRoute } from '@/lib/site';
import {
  DOCTOR_CREDENTIALS,
  DOCTOR_NAME,
  LEADERSHIP_ROLES,
  PRACTICE_URL,
  TRAINING,
} from '@/constants';

const TAGS = [
  'Professor, UTS',
  'Foot & ankle fellowship — Hospital for Special Surgery, New York',
  'Fellow, Royal Australasian College of Surgeons (Orthopaedics)',
  'Associate Editor, Foot & Ankle International',
];

const About = () => {
  const route = findRoute('/about');
  if (!route) return null; // unreachable — registered in SITE_ROUTES

  return (
    <PageShell route={route}>
      {/* Editorial spread — portrait left (sticky on desktop), body right.
          Photo anchors the eye as the four paragraphs scroll past. */}
      <PageHero
        variant="photo-led"
        eyebrow="About"
        title={
          <>
            A surgeon&rsquo;s record.{' '}
            <em className="font-display italic font-normal text-white/55">
              A scientist&rsquo;s questions.
            </em>
          </>
        }
        photo={{
          src: '/portrait-gordon-slater-about.webp?v=4',
          alt: `${DOCTOR_NAME}, foot and ankle orthopaedic surgeon`,
        }}
      >
        <Reveal>
          <div
            className="space-y-6 text-pretty leading-relaxed text-white/75"
            style={{ fontSize: 'var(--text-body)' }}
          >
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

        <Reveal delay={0.1}>
          <p
            className="mt-8 text-pretty text-white/55"
            style={{ fontSize: 'var(--text-meta)' }}
          >
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

        <Reveal delay={0.16}>
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
      </PageHero>

      {/* Training & background — chronological essay layout. Lives below
          the editorial spread; reads like a chapter of a memoir, not a CV. */}
      <section
        id="background"
        aria-labelledby="background-heading"
        className="px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="eyebrow">Training &amp; background</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="background-heading"
              className="mt-5 max-w-2xl text-balance font-display font-medium"
              style={{
                fontSize: 'var(--text-display)',
                lineHeight: 1.05,
                letterSpacing: '-0.015em',
              }}
            >
              A foundation built{' '}
              <em className="font-display italic font-normal text-white/55">
                over decades.
              </em>
            </h2>
          </Reveal>

          <ol className="mt-16 md:mt-20">
            {TRAINING.map((item, i) => (
              <li
                key={`${item.year}-${i}`}
                className="grid grid-cols-[6rem_1fr] gap-x-8 gap-y-3 border-t border-white/5 py-7 first:border-0 first:pt-0 md:grid-cols-[8rem_1fr] md:gap-x-12"
              >
                <Reveal delay={i * 0.03}>
                  <span
                    className="font-display italic text-white/55 nums-tabular"
                    style={{ fontSize: 'var(--text-meta)' }}
                  >
                    {item.year}
                  </span>
                </Reveal>
                <Reveal delay={i * 0.03 + 0.02}>
                  <p
                    className="text-pretty leading-relaxed text-white/85"
                    style={{ fontSize: 'var(--text-body)' }}
                  >
                    {item.label}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>

          {/* Academic & leadership — flows from the same rhythm, not a card. */}
          <div className="mt-20 border-t border-white/10 pt-12 md:mt-24">
            <Reveal>
              <p className="eyebrow">Academic &amp; leadership</p>
            </Reveal>
            <ul className="mt-8 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-10">
              {LEADERSHIP_ROLES.map(({ role, org }, i) => (
                <li
                  key={`${role}-${org}`}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-x-5"
                >
                  <Reveal delay={i * 0.03}>
                    <span
                      aria-hidden="true"
                      className="block h-1 w-1 translate-y-[-3px] rounded-full bg-medical-teal/85"
                    />
                  </Reveal>
                  <Reveal delay={i * 0.03 + 0.02}>
                    <div>
                      <p
                        className="font-medium text-white/90"
                        style={{ fontSize: 'var(--text-body)' }}
                      >
                        {role}
                      </p>
                      <p
                        className="mt-1 text-white/55"
                        style={{ fontSize: 'var(--text-meta)' }}
                      >
                        {org}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal delay={0.16}>
              <p
                className="mt-10 text-white/45"
                style={{ fontSize: 'var(--text-meta)' }}
              >
                Presents at international surgical conferences. {DOCTOR_CREDENTIALS}.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing — the patient as partner, in Slater's voice. */}
      <section aria-label="Ethos" className="px-6 py-20 md:py-28">
        <PullQuote
          align="center"
          width="wide"
          attribution="Chaos to Creation, p. 222"
        >
          Biology is too complex to be fully captured in one equation.
        </PullQuote>
      </section>
    </PageShell>
  );
};

export default About;
