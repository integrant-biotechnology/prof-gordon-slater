import { motion } from 'motion/react';
import { PROCEDURES } from '../constants';
import { Card } from './ui/Card';
import { ArrowUpRight, Scale } from 'lucide-react';

export const Procedures = () => {
  return (
    <section id="procedures" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
          <div className="max-w-3xl space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tight"
            >
              Procedures and techniques.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/40 font-light leading-relaxed text-balance"
            >
              Carefully considered treatment options including non-surgical management 
              and precision surgical procedures tailored to your clinical assessment.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROCEDURES.map((procedure, i) => (
            <Card key={procedure.id} className="group p-10 flex flex-col justify-between min-h-[320px] bg-white/[0.01] hover:bg-white/[0.03] border-white/5">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-display font-semibold text-white/80 group-hover:text-white transition-colors leading-tight max-w-[80%]">
                    {procedure.title}
                  </h3>
                  <div className="p-3 glass rounded-full opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                    <ArrowUpRight size={20} className="text-medical-teal" />
                  </div>
                </div>
                <p className="text-sm text-white/30 font-light leading-relaxed group-hover:text-white/50 transition-colors">
                  {procedure.description}
                </p>
              </div>
              
              {procedure.features && (
                <div className="flex flex-wrap gap-2 mt-8">
                  {procedure.features.map((feature, j) => (
                    <span key={j} className="text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 bg-white/5 rounded-full border border-white/5 text-white/20">
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 glass rounded-[60px] border-white/5 bg-linear-to-br from-white/[0.02] to-transparent relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-medical-teal/5 blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity" />
          
          <div className="relative grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-medical-teal">
                <Scale size={24} strokeWidth={1.5} />
              </div>
              <div className="space-y-6">
                <h4 className="text-3xl md:text-5xl font-display font-semibold tracking-tight">Precision at every scale.</h4>
                <p className="text-lg text-white/40 font-light leading-relaxed">
                  Dr Gordon Slater utilizes advanced surgical instrumentation for precision-guided 
                  interventions designed to preserve anatomical integrity.
                </p>
              </div>
              <div className="glass px-6 py-4 rounded-2xl border-white/5 inline-block">
                <p className="text-xs text-medical-teal/60 font-medium leading-relaxed">
                  “Where appropriate, minimally invasive techniques may support smaller incisions, 
                  reduced soft tissue disruption, and a planned recovery pathway.”
                </p>
              </div>
            </div>

            <div className="hidden md:flex justify-end">
               <div className="relative w-80 h-80 rounded-[40px] border border-white/5 glass flex items-center justify-center rotate-45 group-hover:rotate-[50deg] transition-transform duration-1000">
                  <div className="w-40 h-40 rounded-full border border-medical-teal/10 animate-pulse" />
                  <div className="absolute w-20 h-20 rounded-full border-2 border-medical-teal/20" />
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
