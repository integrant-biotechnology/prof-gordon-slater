import * as React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-white text-brand-bg hover:bg-white/90 active:scale-95',
      secondary: 'glass text-white/80 hover:text-white active:scale-95',
      ghost: 'hover:bg-white/5 active:scale-95',
      outline: 'border border-brand-border hover:border-white/30 active:scale-95',
    };

    const sizes = {
      sm: 'px-4 py-1.5 text-sm',
      md: 'px-6 py-2.5 text-base',
      lg: 'px-8 py-3 text-lg font-medium',
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-medical-teal/50',
          variants[variant],
          sizes[size],
          className
        )}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      />
    );
  }
);
