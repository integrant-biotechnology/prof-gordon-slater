import { motion } from 'motion/react';
import { Target, Award, MapPin } from 'lucide-react';
import { Card } from './ui/Card';
import { DOCTOR_NAME, DOCTOR_CREDENTIALS } from '../constants';

export const About = () => {
  const credentials = [
    { icon: Target, text: "Advanced Foot & Ankle Training, New York" },
    { icon: Award, text: "Fellow of the Royal Australasian College of Surgeons" },
    { icon: MapPin, text: "Strategic Consultations across Sydney" }
  ];

  return (
    <section id="about" className="py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-start">
          <div className="space-y-16">
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-display font-bold tracking-tight text-balance leading-[1.1]"
              >
                Focused expertise. <br />
                <span className="text-white/20">Considered care.</span>
              </motion.h2>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-white/40 font-light text-xl leading-relaxed text-balance"
            >
              <p>
                Dr Gordon Slater is an orthopaedic surgeon specialising in foot and ankle conditions, 
                sports injuries, and trauma. He provides high-precision clinical solutions 
                designed for anatomical integrity and functional recovery.
              </p>
              <p>
                Following his training at the University of New South Wales, Dr Slater completed advanced 
                sub-specialist training at New York’s Hospital for Special Surgery in 1997.
              </p>
              <p>
                A Fellow of the Royal Australasian College of Surgeons since 1997, he remains committed 
                to clinical excellence, contributing to medical literature and presenting at leading 
                international surgical conferences.
              </p>
            </motion.div>

            <div className="space-y-6 pt-8 border-t border-white/5">
              {credentials.map((cred, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/20 group-hover:text-medical-teal transition-colors">
                    <cred.icon size={16} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-white/50 group-hover:text-white transition-colors">{cred.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="sticky top-40"
          >
            <Card className="p-0 border-white/5 aspect-3/4 flex flex-col overflow-hidden bg-brand-panel">
              <div className="flex-1 bg-linear-to-b from-white/[0.03] to-transparent relative group">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-white/5 animate-pulse" />
                  </div>
                </div>
                {/* Image Placeholder Link: Replace with Dr Gordon Slater portrait */}
                <div className="absolute inset-0 flex items-end justify-center pb-20 px-12 text-center">
                   <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/10 hidden group-hover:block">
                     Replace with Official Portrait
                   </p>
                </div>
              </div>
              <div className="p-10 space-y-6 glass border-0 border-t border-white/10 backdrop-blur-2xl">
                <div className="space-y-2 text-center">
                  <div className="text-3xl font-display font-semibold tracking-tight">{DOCTOR_NAME}</div>
                  <div className="text-[10px] text-medical-teal font-bold tracking-[0.2em] uppercase">{DOCTOR_CREDENTIALS}</div>
                </div>
                <div className="flex justify-center gap-8 border-t border-white/5 pt-6">
                   <div className="text-center">
                      <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-1">Focus</div>
                      <div className="text-xs font-medium text-white/60">Lower Limb</div>
                   </div>
                   <div className="text-center">
                      <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-1">Experience</div>
                      <div className="text-xs font-medium text-white/60">25+ Years</div>
                   </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
