import React from 'react';

interface CompanyLogoProps {
  type: 'microsoft' | 'iit-delhi' | 'iit-madras' | 'scaler' | 'google' | 'amazon' | 'custom' | string;
  name: string;
  customLogoUrl?: string;
  className?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  type,
  name,
  customLogoUrl,
  className = 'h-5 w-auto',
}) => {
  if (customLogoUrl) {
    return (
      <img
        src={customLogoUrl}
        alt={name}
        className={`object-contain max-h-6 ${className}`}
        loading="lazy"
      />
    );
  }

  switch (type) {
    case 'microsoft':
      return (
        <div className="flex items-center gap-2 select-none" title="Microsoft">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 21 21" fill="none">
            <rect x="1" y="1" width="9" height="9" fill="#F25022" />
            <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
            <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
            <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
          </svg>
          <span className="font-sans font-semibold text-[13px] tracking-tight text-[#475569] group-hover:text-[#0F172A] transition-colors">
            Microsoft
          </span>
        </div>
      );

    case 'iit-delhi':
      return (
        <div className="flex items-center gap-1.5 select-none" title="IIT Delhi">
          <svg className="w-5 h-5 shrink-0 text-[#1E293B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <span className="font-sans font-bold text-[12px] tracking-wider text-[#1E293B] uppercase">
            IIT DELHI
          </span>
        </div>
      );

    case 'iit-madras':
      return (
        <div className="flex items-center gap-1.5 select-none" title="IIT Madras">
          <span className="font-display font-extrabold text-[13px] tracking-tight text-[#002B7F] flex items-center gap-1">
            <span className="text-[14px] text-[#0048D9]">4iT</span>
            <span>MADRAS</span>
          </span>
        </div>
      );

    case 'scaler':
      return (
        <div className="flex items-center select-none" title="Scaler">
          <span className="font-display font-extrabold text-[13.5px] tracking-[0.14em] text-[#00227B] uppercase">
            SCALER
          </span>
        </div>
      );

    case 'google':
      return (
        <div className="flex items-center select-none" title="Google">
          <span className="font-display font-bold text-[15px] tracking-tight flex items-center">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
        </div>
      );

    case 'amazon':
      return (
        <div className="flex flex-col items-center justify-center select-none pt-0.5" title="Amazon">
          <div className="relative">
            <span className="font-sans font-extrabold text-[14px] tracking-tight text-[#0F172A] lowercase leading-none block">
              amazon
            </span>
            <svg
              className="w-full h-2 text-[#FF9900] -mt-0.5"
              viewBox="0 0 60 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 3 Q 30 11 54 4" />
              <path d="M48 2 L 56 4 L 52 9" fill="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>
      );

    default:
      return (
        <span className="font-sans font-semibold text-xs text-[#475569]">{name}</span>
      );
  }
};
