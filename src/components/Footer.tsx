import { DOCTOR_NAME, FOOTER_DISCLAIMER } from '../constants';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Conditions", href: "#conditions" },
        { label: "Procedures", href: "#procedures" }
      ]
    },
    {
      title: "Patient Info",
      links: [
        { label: "First Visit", href: "#patient-info" },
        { label: "Information", href: "#patient-info" },
        { label: "Inquiries", href: "#contact" }
      ]
    },
    {
      title: "Medical Insights",
      links: [
        { label: "Articles", href: "#articles" },
        { label: "Clinical Philosophy", href: "#philosophy" }
      ]
    }
  ];

  return (
    <footer className="pt-32 pb-20 px-6 border-t border-white/5 bg-brand-bg relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-32">
          <div className="col-span-2 lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <div className="text-2xl font-display font-bold tracking-tight text-white whitespace-nowrap">
                {DOCTOR_NAME}
              </div>
              <p className="text-xs text-white/20 font-bold uppercase tracking-[0.3em] leading-relaxed max-w-xs">
                Specialist Foot & Ankle <br /> Orthopaedic Surgeon
              </p>
            </div>
            
            <div className="flex gap-4">
               <button 
                onClick={scrollToTop}
                className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/20 hover:text-medical-teal hover:border-medical-teal/30 hover:bg-white/[0.05] transition-all group"
               >
                 <ArrowUp size={20} strokeWidth={1.5} className="group-hover:-translate-y-0.5 transition-transform" />
               </button>
            </div>
          </div>

          {sections.map((section, i) => (
            <div key={i} className="space-y-8">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/20">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href} 
                      className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-16 pt-16 border-t border-white/5">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
               <p className="text-[11px] leading-relaxed text-white/10 uppercase font-bold tracking-widest text-justify lg:text-left">
                {FOOTER_DISCLAIMER}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end gap-10">
               <div className="space-y-2">
                 <div className="text-[9px] font-bold uppercase tracking-widest text-white/10">Compliance</div>
                 <div className="text-[10px] font-medium text-white/30 uppercase tracking-widest">FRACS Orth</div>
               </div>
               <div className="space-y-2">
                 <div className="text-[9px] font-bold uppercase tracking-widest text-white/10">Registry</div>
                 <div className="text-[10px] font-medium text-white/30 uppercase tracking-widest">AHPRA Specialist</div>
               </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {["Privacy Policy", "Medical Disclaimer", "Accessibility"].map((item, i) => (
                <a key={i} href="#" className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/15 hover:text-white/40 transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/15">
              © {currentYear} Prof Gordon Slater. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
