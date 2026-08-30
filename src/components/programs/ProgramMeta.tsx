import React from 'react';
import { Clock, Globe, BarChart2, Layers } from 'lucide-react';

export interface ProgramMetaProps {
  duration: string;
  mode: string;
  level?: string;
  format?: string;
  variant?: 'inline' | 'grid' | 'stacked';
  className?: string;
}

export const ProgramMeta: React.FC<ProgramMetaProps> = ({
  duration,
  mode,
  level,
  format,
  variant = 'inline',
  className = '',
}) => {
  if (variant === 'grid') {
    return (
      <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 ${className}`}>
        <div className="bg-[#F5F5F0] border border-[#E5E5E0] rounded-none p-4 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-xs text-[#666] font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-[#0055FF] shrink-0" />
            <span>Duration</span>
          </div>
          <span className="text-base font-bold text-[#1A1A1A] mt-2">{duration}</span>
        </div>

        <div className="bg-[#F5F5F0] border border-[#E5E5E0] rounded-none p-4 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-xs text-[#666] font-bold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 text-[#0055FF] shrink-0" />
            <span>Mode</span>
          </div>
          <span className="text-base font-bold text-[#1A1A1A] mt-2">{mode}</span>
        </div>

        {level && (
          <div className="bg-[#F5F5F0] border border-[#E5E5E0] rounded-none p-4 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-xs text-[#666] font-bold uppercase tracking-wider">
              <BarChart2 className="w-3.5 h-3.5 text-[#0055FF] shrink-0" />
              <span>Level</span>
            </div>
            <span className="text-base font-bold text-[#1A1A1A] mt-2">{level}</span>
          </div>
        )}

        {format && (
          <div className="bg-[#F5F5F0] border border-[#E5E5E0] rounded-none p-4 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-xs text-[#666] font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#0055FF] shrink-0" />
              <span>Format</span>
            </div>
            <span className="text-base font-bold text-[#1A1A1A] mt-2 truncate" title={format}>
              {format}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#666] font-medium ${className}`}>
      <div className="flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5 text-[#888]" />
        <span className="font-semibold text-[#1A1A1A]">{duration}</span>
      </div>
      <span className="text-[#CCC]">•</span>
      <div className="flex items-center gap-1.5">
        <Globe className="w-3.5 h-3.5 text-[#888]" />
        <span>{mode}</span>
      </div>
      {level && (
        <>
          <span className="text-[#CCC]">•</span>
          <div className="flex items-center gap-1.5">
            <BarChart2 className="w-3.5 h-3.5 text-[#888]" />
            <span>{level}</span>
          </div>
        </>
      )}
    </div>
  );
};
