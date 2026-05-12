import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Glow = ({ className, color = 'teal' }: { className?: string; color?: 'teal' | 'blue' }) => {
  return (
    <motion.div
      className={cn(
        'absolute -z-10 blur-[120px] pointer-events-none rounded-full transition-all duration-1000',
        color === 'teal' ? 'bg-medical-teal/15 w-[500px] h-[500px]' : 'bg-medical-blue/10 w-[600px] h-[600px]',
        className
      )}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.5, 0.7, 0.5],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};
