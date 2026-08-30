import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const { navigate } = useRouter();

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs text-[#666] ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="w-3 h-3 text-[#888] shrink-0" aria-hidden="true" />}
              {isLast || !item.href ? (
                <span className="font-bold text-[#1A1A1A] truncate max-w-[200px] sm:max-w-none" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => item.href && navigate(item.href)}
                  className="hover:text-[#0055FF] transition-colors focus:outline-none focus:underline cursor-pointer"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
