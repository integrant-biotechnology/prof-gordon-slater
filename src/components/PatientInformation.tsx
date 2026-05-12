import { motion } from 'motion/react';
import { AccordionItem } from './ui/Accordion';

export const PatientInformation = () => {
  const patientInfoData = [
    {
      title: "Your first visit",
      content: "Initially, we will discuss your clinical history and any previous treatments. This is followed by a physical examination. We will then discuss diagnosis and work together to formulate a management plan."
    },
    {
      title: "What to bring",
      content: (
        <ul className="space-y-4 list-disc pl-5">
          <li>Current X-rays or diagnostic scans (CD or hard copy)</li>
          <li>A valid GP or specialist referral</li>
          <li>Medicare and/or private health insurance details</li>
          <li>DVA or WorkCover details if applicable</li>
          <li>Relevant medical history and current list of medications</li>
        </ul>
      )
    },
    {
      title: "Referrals and Medicare",
      content: "A current referral is necessary to claim the Medicare rebate. GP referrals are usually valid for 12 months, while specialist referrals are valid for 3 months."
    },
    {
      title: "Fees and payment",
      content: "Payment is required at the time of consultation. We accept all major credit cards. Our staff will provide detailed information regarding procedure costs and insurance gaps should surgery be required."
    },
    {
      title: "Hospitals",
      content: "Dr Gordon Slater consults and operates at established surgical facilities across Sydney, ensuring access to modern clinical infrastructure."
    },
    {
      title: "Interstate and overseas patients",
      content: "Telehealth consultations may be arranged for initial assessments for regional or interstate patients where appropriate."
    }
  ];

  return (
    <section id="patient-info" className="py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8"
          >
            Before your visit.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/40 font-light leading-relaxed"
          >
            Helpful information to prepare for your consultation with Dr Gordon Slater.
          </motion.p>
        </div>

        <div className="glass rounded-[60px] px-8 md:px-20 py-12 border-white/5 bg-white/[0.01]">
          {patientInfoData.map((item, i) => (
            <AccordionItem key={i} title={item.title}>
              {item.content}
            </AccordionItem>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-white/20 italic font-light tracking-wide">
            Initial consultations may include clinical assessment, discussion of treatment options, and forward planning.
          </p>
        </div>
      </div>
    </section>
  );
};
