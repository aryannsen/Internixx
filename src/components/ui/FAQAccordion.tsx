import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../../types';

export interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`divide-y divide-[#E5E5E0] border-y border-[#E5E5E0] ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const buttonId = `faq-btn-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div key={item.id} className="py-5 sm:py-6">
            <button
              id={buttonId}
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none cursor-pointer"
            >
              <span className="text-base sm:text-lg font-bold text-[#1A1A1A] group-hover:text-[#0055FF] transition-colors">
                {item.question}
              </span>
              <span
                className={`p-1.5 text-[#888] group-hover:text-[#0055FF] transition-all duration-200 shrink-0 ${
                  isOpen ? 'rotate-180 text-[#0055FF]' : ''
                }`}
              >
                <ChevronDown className="w-5 h-5" aria-hidden="true" />
              </span>
            </button>
            
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="mt-3 text-sm sm:text-base text-[#4A4A4A] leading-relaxed max-w-3xl pr-6 animate-in fade-in-50 duration-150 font-normal"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
