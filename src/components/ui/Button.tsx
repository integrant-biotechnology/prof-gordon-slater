import { forwardRef } from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-white text-brand-bg hover:bg-white/90',
  secondary: 'glass text-white hover:bg-brand-panel/60',
  ghost: 'text-white/80 hover:text-white hover:bg-white/5',
  outline: 'border border-brand-border text-white/80 hover:text-white hover:border-white/30',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg font-medium',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', type = 'button', ...props }, ref) => {
    const reduceMotion = useReducedMotion();
    return (
      <motion.button
        ref={ref}
        type={type}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200',
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        whileHover={reduceMotion ? undefined : { y: -1 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
