import { useId, useState, type ReactNode } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem = ({ title, children, defaultOpen = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const reduceMotion = useReducedMotion();
  const id = useId();
  const triggerId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  return (
    <div className="border-b border-brand-border last:border-0">
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
          className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors"
        >
          <span className="text-lg font-medium text-white/75 transition-colors group-hover:text-white">
            {title}
          </span>
          <ChevronDown
            aria-hidden="true"
            className={cn(
              'h-5 w-5 shrink-0 text-white/45 transition-transform duration-300',
              isOpen && 'rotate-180 text-white',
            )}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            className="overflow-hidden"
            initial={reduceMotion ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: 'easeInOut' }}
          >
            <div className="pb-8 text-[15px] leading-relaxed text-white/65">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
