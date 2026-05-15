import { PageHero } from '@/templates/PageHero';
import { PageShell } from '@/templates/PageShell';
import { findRoute } from '@/lib/site';
import { CONTACT_EMAIL, PRACTICE_URL } from '@/constants';

const Disclaimer = () => {
  const route = findRoute('/disclaimer');
  if (!route) return null;

  return (
    <PageShell route={route}>
      <PageHero
        variant="type-only"
        eyebrow="Disclaimer"
        title="General information, not medical advice."
        lede="The content on this site is a factual overview of Prof Gordon Slater’s work. It is not a substitute for personal medical advice, diagnosis, or treatment."
      />

      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl space-y-10 text-white/72">
          <div>
            <h2 className="font-display text-2xl text-white/92">Personal site only</h2>
            <p className="mt-4 leading-relaxed">
              This website is a personal and professional profile. It exists separately from the
              clinical practice and should not be used as a channel for treatment decisions or
              urgent health concerns.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-white/92">No clinician-patient relationship</h2>
            <p className="mt-4 leading-relaxed">
              Reading material on this site, sending email, or following external links does not
              create a clinician-patient relationship. Clinical matters should go through the
              practice website and the appropriate referral pathways.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-white/92">Research and book content</h2>
            <p className="mt-4 leading-relaxed">
              Research summaries, device references, and book material are presented for general
              informational purposes. They should not be interpreted as individual treatment advice
              or as a guarantee of outcomes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-white/92">Clinical and media contact</h2>
            <p className="mt-4 leading-relaxed">
              For clinical care, use{' '}
              <a
                href={PRACTICE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white"
              >
                orthopaedic-surgeon.com.au
              </a>
              . For media and professional inquiries, use{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="underline underline-offset-4 hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Disclaimer;
