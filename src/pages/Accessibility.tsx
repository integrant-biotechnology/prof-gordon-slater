import { PageHero } from '@/templates/PageHero';
import { PageShell } from '@/templates/PageShell';
import { findRoute } from '@/lib/site';
import { CONTACT_EMAIL } from '@/constants';

const Accessibility = () => {
  const route = findRoute('/accessibility');
  if (!route) return null;

  return (
    <PageShell route={route}>
      <PageHero
        variant="type-only"
        eyebrow="Accessibility"
        title="Accessibility matters here."
        lede="The site is designed to be readable, keyboard-friendly, and respectful of reduced-motion preferences. If something gets in the way, we want to know."
      />

      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl space-y-10 text-white/72">
          <div>
            <h2 className="font-display text-2xl text-white/92">Current approach</h2>
            <p className="mt-4 leading-relaxed">
              The site uses semantic headings, visible focus states, skip-link support, readable
              contrast, and reduced-motion fallbacks for visitors who prefer less animation.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-white/92">Images and media</h2>
            <p className="mt-4 leading-relaxed">
              Key images include alt text, and decorative graphics are treated as non-essential to
              understanding the content. The goal is to keep the editorial presentation usable even
              when visual effects are reduced or unavailable.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-white/92">Ongoing improvement</h2>
            <p className="mt-4 leading-relaxed">
              Accessibility is an ongoing process. If you encounter a barrier, a confusing
              interaction, or content that is difficult to access with assistive technology, please
              report it so it can be improved.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-white/92">Feedback</h2>
            <p className="mt-4 leading-relaxed">
              Accessibility feedback can be sent to{' '}
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

export default Accessibility;
