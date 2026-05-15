import { PageHero } from '@/templates/PageHero';
import { PageShell } from '@/templates/PageShell';
import { findRoute } from '@/lib/site';
import { CONTACT_EMAIL, PRACTICE_URL } from '@/constants';

const Privacy = () => {
  const route = findRoute('/privacy');
  if (!route) return null;

  return (
    <PageShell route={route}>
      <PageHero
        variant="type-only"
        eyebrow="Privacy"
        title="Privacy on this personal site."
        lede="This website is informational. It does not currently collect personal information through forms, patient portals, or analytics tooling."
      />

      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl space-y-10 text-white/72">
          <div>
            <h2 className="font-display text-2xl text-white/92">What is collected</h2>
            <p className="mt-4 leading-relaxed">
              This site does not offer contact forms, appointment booking, newsletter signup, or
              account features. As shipped today, it does not intentionally collect personal
              information from visitors.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-white/92">Clinical care</h2>
            <p className="mt-4 leading-relaxed">
              This is not the practice website and it is not used for clinical communication. If
              you need clinical care, referrals, or an appointment, please use the practice site at{' '}
              <a
                href={PRACTICE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white"
              >
                orthopaedic-surgeon.com.au
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-white/92">Future changes</h2>
            <p className="mt-4 leading-relaxed">
              If analytics, forms, or other data-collection features are added in the future, this
              page should be updated to describe what is collected, why it is collected, and how it
              is handled under Australian privacy obligations.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-white/92">Contact</h2>
            <p className="mt-4 leading-relaxed">
              Questions about this site can be directed to{' '}
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

export default Privacy;
