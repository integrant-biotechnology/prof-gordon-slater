import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Lede — the magazine-standard "first paragraph stands apart" treatment.
 *
 * Larger than body copy, serif (Fraunces), slightly faded. Used for the
 * opening sentence of long-form sections. Renders as a <p> by default so
 * it slots naturally inside semantic flow.
 */
export const Lede = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p className={cn('lede text-pretty', className)}>{children}</p>
);
