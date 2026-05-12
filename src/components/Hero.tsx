import { motion } from 'motion/react';
import { Shield, ArrowRight, MousePointer2 } from 'lucide-react';
import { Button } from './ui/Button';
import { Glow } from './ui/Glow';
import { DOCTOR_TITLE } from '../constants';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <Glow className="-top-[10%] -left-[10%] scale-150" color="teal" />
      <Glow className="bottom-[10%] -right-[10%] scale-125" color="blue" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 px-4 py-1.5 rounded-full glass border-white/5 active:scale-95 transition-transform"
          >
            <div className="w-2 h-2 rounded-full bg-medical-teal animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.25em] text-white/50 uppercase">
              {DOCTOR_TITLE}
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-6 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[100px] font-display font-bold leading-[0.95] tracking-tight text-white text-balance"
            >
              Precision care for 
              <span className="block text-white/20">complex feet and ankles.</span>
            </motion.h1>
          </div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl font-light text-balance"
          >
            Specialist orthopaedic care for foot and ankle conditions, 
            sports injuries, and trauma with a clinical focus on refined patient outcomes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <Button size="lg" variant="primary" className="min-w-[220px]" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              Request Appointment
            </Button>
            <Button size="lg" variant="secondary" className="min-w-[220px] group" onClick={() => document.getElementById('conditions')?.scrollIntoView()}>
              Explore Areas of Care
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Cinematic Visual Representation (Abstract anatomical precision) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="relative w-full max-w-5xl aspect-video md:aspect-[21/9] mt-12 rounded-[40px] overflow-hidden border border-white/5 glass"
          >
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-bg/40 to-brand-bg select-none pointer-events-none z-10" />
            
            {/* Visual Placeholder: In production, replace with high-end clinical sculpture video/image */}
            <div className="absolute inset-0 bg-linear-to-tr from-medical-teal/5 to-medical-blue/5 flex items-center justify-center">
               <div className="relative">
                  <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/5 animate-spin-slow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-medical-teal/20 animate-ping" />
                    <div className="absolute w-2 h-[400px] bg-linear-to-b from-transparent via-medical-teal/40 to-transparent rotate-45 blur-xl opacity-20" />
                  </div>
               </div>
            </div>

            <div className="absolute bottom-12 left-12 right-12 z-20 flex flex-wrap justify-center gap-12">
               {[
                 { icon: Shield, text: "Foot & Ankle Specialist" },
                 { icon: MousePointer2, text: "Minimally Invasive" },
                 { icon: ArrowRight, text: "Patient-Centred Planning" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
                    <item.icon className="w-4 h-4 text-medical-teal" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{item.text}</span>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
