import { PHILOSOPHY } from '../constants';
import { Card } from './ui/Card';
import { Search, MessageSquare, User, Repeat } from 'lucide-react';
import { motion } from 'motion/react';

const icons: Record<string, any> = {
  Search: Search,
  MessageSquare: MessageSquare,
  User: User,
  Repeat: Repeat,
};

export const Philosophy = () => {
  return (
    <section className="py-40 px-6 bg-brand-panel/[0.3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-32 space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight"
          >
            A considered approach.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/40 font-light leading-relaxed text-balance"
          >
            Care begins with careful assessment, clear explanation, and a therapeutic 
            plan tailored to your individual clinical journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PHILOSOPHY.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Card key={i} className="text-center flex flex-col items-center py-16 px-10 group border-white/[0.03]">
                <div className="w-20 h-20 rounded-full glass mb-10 flex items-center justify-center text-white/20 group-hover:text-medical-teal border-white/5 transition-all duration-700 bg-brand-bg/50">
                  <Icon size={32} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-6 text-white/80">{item.title}</h3>
                <p className="text-sm text-white/30 leading-relaxed font-light group-hover:text-white/40 transition-colors">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
