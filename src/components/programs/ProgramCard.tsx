import React, { useEffect, useRef } from 'react';
import { Clock, FolderKanban, ArrowRight, Code2, Layout, BarChart2, Megaphone } from 'lucide-react';
import { Program } from '../../types';
import { useRouter } from '../../context/RouterContext';
import { setupDesktopCardHover } from '../../lib/motionSystem';

export interface ProgramCardProps {
  program: Program;
  index?: number;
  className?: string;
}

const getCategoryTheme = (category: string) => {
  switch (category.toUpperCase()) {
    case 'DEVELOPMENT':
    case 'FRONTEND':
      return {
        icon: Code2,
        iconBg: 'bg-[#2563FF]/10 text-[#2563FF]',
        badgeBg: 'bg-[#2563FF]/10 text-[#2563FF]',
      };
    case 'DESIGN':
    case 'UI/UX':
      return {
        icon: Layout,
        iconBg: 'bg-[#059669]/10 text-[#059669]',
        badgeBg: 'bg-[#059669]/10 text-[#059669]',
      };
    case 'DATA':
      return {
        icon: BarChart2,
        iconBg: 'bg-[#9333EA]/10 text-[#9333EA]',
        badgeBg: 'bg-[#9333EA]/10 text-[#9333EA]',
      };
    case 'MARKETING':
      return {
        icon: Megaphone,
        iconBg: 'bg-[#EA580C]/10 text-[#EA580C]',
        badgeBg: 'bg-[#EA580C]/10 text-[#EA580C]',
      };
    default:
      return {
        icon: FolderKanban,
        iconBg: 'bg-[#2563FF]/10 text-[#2563FF]',
        badgeBg: 'bg-[#2563FF]/10 text-[#2563FF]',
      };
  }
};

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, className = '' }) => {
  const cardRef = useRef<HTMLElement | null>(null);
  const { navigate } = useRouter();
  const theme = getCategoryTheme(program.category);
  const CategoryIcon = theme.icon;

  useEffect(() => {
    if (!cardRef.current) return;
    const cleanup = setupDesktopCardHover(cardRef.current);
    return cleanup;
  }, []);

  return (
    <article
      ref={cardRef}
      id={`program-card-${program.slug}`}
      onClick={() => navigate(`/programs/${program.slug}`)}
      className={`group bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_4px_20px_rgba(7,27,59,0.04)] hover:border-[#2563FF]/40 hover:shadow-[0_16px_36px_-6px_rgba(37,99,255,0.12)] transition-all duration-200 flex flex-col justify-between p-5 sm:p-6 cursor-pointer will-change-transform ${className}`}
    >
      <div>
        {/* Minimal Icon */}
        <div className="mb-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${theme.iconBg}`}>
            <CategoryIcon className="w-5 h-5" />
          </div>
        </div>

        {/* Program Name */}
        <h3 className="font-display text-[17px] sm:text-[18px] font-bold text-[#071B3B] group-hover:text-[#2563FF] transition-colors tracking-tight leading-snug">
          {program.name}
        </h3>

        {/* Category Badge */}
        <div className="mt-2 mb-3">
          <span className={`inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${theme.badgeBg}`}>
            {program.category}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal">
          {program.tagline || program.description}
        </p>
      </div>

      {/* Card Meta Footer */}
      <div className="mt-5 pt-3.5 border-t border-[#F1F3F5] flex items-center justify-between text-[11px] sm:text-xs font-semibold text-[#64748B]">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span>{program.duration || '4 Weeks'}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <FolderKanban className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span>Project Based</span>
        </div>
      </div>
    </article>
  );
};
