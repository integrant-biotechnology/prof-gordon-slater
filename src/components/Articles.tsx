import { motion } from 'motion/react';
import { ARTICLES } from '../constants';
import { Card } from './ui/Card';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export const Articles = () => {
  return (
    <section id="articles" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
          <div className="max-w-3xl space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tight text-balance"
            >
              Insights for informed decisions.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/40 font-light leading-relaxed"
            >
              Clear, clinical information to help patients better understand complex 
              foot and ankle conditions and treatment considerations.
            </motion.p>
          </div>
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-medical-teal transition-colors">
              Medical Articles
            </span>
            <div className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:bg-medical-teal group-hover:text-brand-bg transition-all">
               <ArrowRight size={14} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ARTICLES.map((article, i) => (
            <Card key={article.id} className="group h-full flex flex-col justify-between p-12 border-white/5 bg-white/[0.01] hover:bg-white/[0.03]" glow>
              <div className="space-y-10">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.25em] font-bold px-3 py-1.5 bg-medical-teal/5 rounded-full text-medical-teal/60 border border-medical-teal/10">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-white/10 uppercase font-bold text-[9px] tracking-widest">
                    <Clock size={10} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-semibold group-hover:text-white transition-colors leading-[1.2]">
                  {article.title}
                </h3>
              </div>

              <div className="mt-16 flex items-center gap-4 text-white/20 group-hover:text-medical-teal transition-colors text-[10px] font-bold uppercase tracking-[0.2em]">
                < BookOpen size={14} strokeWidth={2} />
                <span>Read Full Insight</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
