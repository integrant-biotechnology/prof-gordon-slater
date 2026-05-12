import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const Card = ({ children, className, glow }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        'relative group rounded-3xl p-8 glass overflow-hidden transition-all duration-500 hover:border-white/20',
        className
      )}
    >
      {glow && (
        <div className="absolute inset-0 bg-linear-to-br from-medical-teal/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
