import React from 'react';

// Authentic collegiate seal SVGs inspired by top technical universities (IIT, NIT, DU, BITS, IISc, VIT)
const CollegeSeal: React.FC<{ color: string; label: string }> = ({ color, label }) => {
  return (
    <div
      title={label}
      className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#CBD5E1] bg-white flex items-center justify-center p-1 shadow-2xs hover:scale-110 transition-transform duration-200"
    >
      <svg viewBox="0 0 32 32" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke={color} strokeWidth="1.5" strokeDasharray="2 1.5" />
        <circle cx="16" cy="16" r="11" stroke={color} strokeWidth="0.75" />
        <path
          d="M16 8L18.5 13H23.5L19.5 16.5L21 21.5L16 18.5L11 21.5L12.5 16.5L8.5 13H13.5L16 8Z"
          fill={color}
          fillOpacity="0.85"
        />
        <circle cx="16" cy="16" r="3" fill="white" />
      </svg>
    </div>
  );
};

export const TrustCollegeAvatars: React.FC = () => {
  const colleges = [
    { color: '#475569', label: 'IIT Delhi / Bombay' },
    { color: '#E11D48', label: 'BITS Pilani' },
    { color: '#B91C1C', label: 'NIT Trichy / Surathkal' },
    { color: '#0284C7', label: 'Delhi University' },
    { color: '#059669', label: 'IISc Bangalore' },
    { color: '#9333EA', label: 'VIT / SRM' },
  ];

  return (
    <div className="flex flex-col items-start gap-2.5 pt-4 sm:pt-6 border-t border-[#E2E8F0] mt-6 sm:mt-8 w-full">
      <div className="text-xs sm:text-[13px] text-[#475569] font-medium">
        Trusted by <strong className="text-[#2563FF] font-bold">25,000+</strong> students from top colleges
      </div>

      {/* 6 College Seals + "+30" pill */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {colleges.map((col, idx) => (
          <CollegeSeal key={idx} color={col.color} label={col.label} />
        ))}
        <div className="h-7 sm:h-8 px-2 rounded-full border border-[#CBD5E1] bg-white flex items-center justify-center text-[#475569] font-mono text-[10px] sm:text-[11px] font-bold shadow-2xs">
          +30
        </div>
      </div>
    </div>
  );
};
