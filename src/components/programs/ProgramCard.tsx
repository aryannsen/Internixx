import React, { useEffect, useRef } from 'react';
import { Clock, Globe, ArrowUpRight } from 'lucide-react';
import { Program } from '../../types';
import { APPLICATION_FORM_URL } from '../../config/site';
import { setupDesktopCardHover } from '../../lib/motionSystem';

export interface ProgramCardProps {
  program: Program;
  index?: number;
  className?: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, index = 0, className = '' }) => {
  const cardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const cleanup = setupDesktopCardHover(cardRef.current);
    return cleanup;
  }, []);

  return (
    <article
      ref={cardRef}
      id={`program-card-${program.slug}`}
      data-reveal="card"
      className={`program-card-item group bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_4px_rgba(15,23,42,0.04)] hover:border-[#0F172A] hover:shadow-[0_6px_20px_rgba(15,23,42,0.08)] transition-colors duration-200 flex flex-col justify-between p-6 sm:p-7 h-full will-change-transform ${className}`}
    >
      <div>
        {/* Subtle Category & Free to Join Row */}
        <div className="card-category flex items-center justify-between gap-2 mb-2.5">
          <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-[0.15em]">
            {program.category}
          </span>
          <span className="text-[10px] font-bold text-[#0048D9] bg-[#0048D9]/8 border border-[#0048D9]/20 px-2 py-0.5 rounded-md tracking-wider uppercase select-none">
            FREE TO JOIN
          </span>
        </div>

        {/* Program Title */}
        <h3 className="card-title font-display text-2xl sm:text-[26px] font-bold text-[#0F172A] group-hover:text-[#0048D9] transition-colors tracking-tight leading-tight">
          {program.name}
        </h3>

        {/* 1–2 Line Description */}
        <p className="card-desc mt-2.5 text-sm text-[#475569] leading-relaxed font-normal">
          {program.tagline || program.description}
        </p>

        {/* Program Meta Row */}
        <div className="card-meta mt-4 pt-3.5 border-t border-[#E2E8F0] flex items-center gap-4 text-xs font-semibold text-[#0F172A]">
          <div className="flex items-center gap-1.5 text-[#334155]">
            <Clock className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
            <span>{program.duration || '1 Month'}</span>
          </div>
          <span className="text-[#CBD5E1]">•</span>
          <div className="flex items-center gap-1.5 text-[#334155]">
            <Globe className="w-3.5 h-3.5 text-[#0048D9] shrink-0" />
            <span>{program.mode || 'Online'}</span>
          </div>
        </div>

        {/* Small Skills Line */}
        {program.skills && program.skills.length > 0 && (
          <div className="card-skills mt-3.5 text-xs text-[#64748B] font-medium tracking-tight">
            {program.skills.join(' • ')}
          </div>
        )}
      </div>

      {/* Primary CTA */}
      <div className="card-cta mt-6 pt-4 border-t border-[#E2E8F0]">
        <a
          href={APPLICATION_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#0048D9] hover:bg-[#003BB3] text-white py-3 px-4 rounded-xl text-sm font-semibold transition-colors duration-150 inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <span>Apply Now</span>
          <ArrowUpRight className="card-arrow w-4 h-4 transition-transform duration-200" />
        </a>
      </div>
    </article>
  );
};
