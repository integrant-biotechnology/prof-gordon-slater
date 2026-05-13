import type { PatientInfoItem } from '@/types';
import { AccordionItem } from '@/components/ui/Accordion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DOCTOR_NAME } from '@/constants';

const PATIENT_INFO: PatientInfoItem[] = [
  {
    title: 'Your first visit',
    content: (
      <div className="space-y-3">
        <p>
          Please arrive about 10 minutes early to complete your new-patient forms and pain
          assessment. {DOCTOR_NAME} allows around 30 minutes for an initial consultation — surgical
          consultations may run up to 60 minutes, depending on your condition.
        </p>
        <p>
          You&rsquo;re welcome to bring a family member or friend. Any decision to proceed with
          surgical treatment is always entirely yours.
        </p>
      </div>
    ),
  },
  {
    title: 'What to bring',
    content: (
      <ul className="list-disc space-y-2.5 pl-5">
        <li>Current X-rays and diagnostic scans (disc or hard copy) — call ahead if you can&rsquo;t obtain copies</li>
        <li>A current referral from your GP or specialist (needed to receive the Medicare rebate)</li>
        <li>Medicare and/or private health insurance details</li>
        <li>DVA or WorkCover details, if applicable</li>
        <li>Relevant medical history and a current list of medications</li>
      </ul>
    ),
  },
  {
    title: 'Referrals and Medicare',
    content:
      'A current referral is needed to claim the Medicare rebate on your consultation. GP referrals are usually valid for 12 months and specialist referrals for 3 months. You pay the full fee on the day, and our staff are happy to process the Medicare claim for you.',
  },
  {
    title: 'Fees and payment plans',
    content:
      'Before any treatment we provide an Informed Financial Consent form and a written fee estimate, including any out-of-pocket costs. If surgery is recommended, medical payment plans of up to $30,000 are available through MediPay, with online application and a same-day decision in many cases.',
  },
  {
    title: 'Albury & interstate patients',
    content: `${DOCTOR_NAME} consults in Albury approximately once a month — please call to confirm the next available dates. Telehealth consultations may also be arranged for initial assessments for regional or interstate patients where appropriate.`,
  },
  {
    title: 'Cancellations',
    content:
      'If you can’t make your appointment, please give us as much notice as possible so the time can be offered to another patient. A cancellation policy applies.',
  },
];

export const PatientInformation = () => {
  return (
    <section id="patient-info" aria-labelledby="patient-info-heading" className="px-6 py-28 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          id="patient-info-heading"
          eyebrow="Patient information"
          title="Before your visit."
          intro={`Helpful information to prepare for your consultation with ${DOCTOR_NAME}.`}
          className="mb-12 md:mb-16"
        />

        <div className="rounded-3xl glass bg-white/[0.01] px-6 py-6 md:rounded-[40px] md:px-12 md:py-8">
          {PATIENT_INFO.map((item, i) => (
            <AccordionItem key={item.title} title={item.title} defaultOpen={i === 0}>
              {item.content}
            </AccordionItem>
          ))}
        </div>

        <p className="mt-10 text-center text-sm italic text-white/45">
          Consultations are generally available within about 7 days, with urgent cases prioritised.
        </p>
      </div>
    </section>
  );
};
