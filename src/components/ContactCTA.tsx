import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { CONTACT_INFO } from '../constants';
import { Glow } from './ui/Glow';

export const ContactCTA = () => {
  return (
    <section id="contact" className="py-40 px-6 relative overflow-hidden">
      <Glow className="bottom-0 left-1/2 -translate-x-1/2 scale-150" color="blue" />
      
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[80px] p-10 md:p-24 border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden bg-brand-panel/40">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-radial-gradient from-medical-teal/[0.03] via-transparent to-transparent opacity-50 pointer-events-none" />
          
          <div className="relative grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-20">
              <div className="space-y-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight"
                >
                  Ready to discuss your <br />
                  <span className="text-white/20">clinical concern?</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-white/40 leading-relaxed font-light max-w-md text-balance"
                >
                  Request a consultation and our specialist team will facilitate a suitable 
                  time to begin your assessment.
                </motion.p>
                <div className="flex flex-wrap gap-x-10 gap-y-6 pt-6 uppercase tracking-[0.25em] font-bold text-[10px] text-white/20">
                  {[
                    "Careful assessment",
                    "Clear guidance",
                    "Specialist care"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <div className="w-1 h-1 rounded-full bg-medical-teal/40" />
                       <span className="group-hover:text-white/40 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                <ContactDetail 
                  icon={MapPin} 
                  label="Practice Location" 
                  value={CONTACT_INFO.address} 
                />
                <ContactDetail 
                  icon={Phone} 
                  label="Clinical Contact" 
                  value={CONTACT_INFO.phone} 
                />
                <ContactDetail 
                  icon={Mail} 
                  label="Direct Inquiry" 
                  value={CONTACT_INFO.email} 
                />
                <ContactDetail 
                  icon={Clock} 
                  label="Practice Hours" 
                  value={CONTACT_INFO.hours} 
                />
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass bg-white/[0.02] border-white/5 rounded-[60px] p-10 md:p-16 shadow-2xl relative"
            >
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <Input label="First Name" placeholder="Gordon" />
                  <Input label="Last Name" placeholder="Slater" />
                </div>
                <Input label="Email Address" type="email" placeholder="email@direct.com" />
                <Input label="Contact Number" type="tel" placeholder="02 0000 0000" />
                
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 ml-6">Patient Inquiry</label>
                  <textarea 
                    className="w-full bg-white/[0.02] border border-white/5 rounded-3xl p-6 text-white placeholder:text-white/10 focus:outline-hidden focus:border-medical-teal/30 focus:bg-white/[0.04] transition-all min-h-[160px] text-sm font-light leading-relaxed"
                    placeholder="Provide a brief clinical context..."
                  />
                </div>

                <Button className="w-full py-5 rounded-3xl group h-auto" variant="primary">
                  <span className="flex items-center gap-3 font-bold tracking-[0.05em] uppercase text-xs">
                    Send Appointment Request
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <div className="px-8 flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-medical-teal shrink-0 mt-1" />
                  <p className="text-[9px] uppercase font-bold tracking-[0.15em] text-white/10 leading-relaxed">
                    By submitting this form, you acknowledge that communications through our website are subject to our clinical privacy protocols.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactDetail = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex flex-col gap-4 group">
    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/10 group-hover:text-medical-teal transition-all duration-700 bg-white/[0.02] border-white/5">
      <Icon size={20} strokeWidth={1} />
    </div>
    <div className="space-y-1">
      <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/20 leading-none">{label}</div>
      <div className="text-sm font-light text-white/60 leading-relaxed group-hover:text-white transition-colors">{value}</div>
    </div>
  </div>
);

const Input = ({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) => (
  <div className="space-y-3">
    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 ml-6">{label}</label>
    <input 
      type={type}
      className="w-full bg-white/[0.02] border border-white/5 rounded-full px-7 py-4 text-white placeholder:text-white/10 focus:outline-hidden focus:border-medical-teal/30 focus:bg-white/[0.04] transition-all text-sm font-light"
      placeholder={placeholder}
    />
  </div>
);
