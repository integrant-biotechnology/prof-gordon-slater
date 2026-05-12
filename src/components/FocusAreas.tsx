import { motion } from 'motion/react';
import { 
  Activity, 
  Shield, 
  Zap, 
  Footprints, 
  HeartPulse, 
  ChevronRightSquare, 
  Layout, 
  Scan
} from 'lucide-react';
import { Card } from './ui/Card';
import { CONDITIONS } from '../constants';

const icons: Record<string, any> = {
  Focus: Scan,
  Activity: Activity,
  Shield: Shield,
  Zap: Zap,
  Footprints: Footprints,
  HeartPulse: HeartPulse,
  ChevronRightSquare: ChevronRightSquare,
  Layout: Layout,
};

export const FocusAreas = () => {
  return (
    <section id="conditions" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8"
          >
            Specialist focus.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/40 font-light leading-relaxed text-balance"
          >
            Assessment and treatment planning for a range of foot and ankle concerns, 
            from common conditions to complex clinical presentations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONDITIONS.map((condition, i) => {
            const Icon = icons[condition.icon] || Activity;
            return (
              <Card key={condition.id} className="group border-white/5 hover:bg-white/[0.02]" glow>
                <div className="w-10 h-10 rounded-xl glass mb-10 flex items-center justify-center text-white/20 group-hover:text-medical-teal transition-all duration-700 bg-brand-bg/50 border-white/5">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-4 text-white/80 group-hover:text-white transition-colors">
                  {condition.title}
                </h3>
                <p className="text-sm text-white/30 leading-relaxed font-light group-hover:text-white/50 transition-colors">
                  {condition.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
