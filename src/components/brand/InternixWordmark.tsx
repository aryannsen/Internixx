import React from 'react';

export interface InternixWordmarkProps {
  variant?: 'default' | 'dark' | 'white' | 'black';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showTagline?: boolean;
  tagline?: string;
  className?: string;
}

export const InternixWordmark: React.FC<InternixWordmarkProps> = ({
  variant = 'default',
  size = 'md',
  showTagline = true,
  tagline = 'STUDENT PROGRAMS',
  className = '',
}) => {
  const isDark = variant === 'dark';
  const isWhite = variant === 'white';
  const isBlack = variant === 'black';

  // Size scale mappings
  const sizeStyles = {
    sm: {
      text: 'text-[15px] sm:text-[16px]',
      tagline: 'text-[7.5px] sm:text-[8px] tracking-[0.32em]',
      gap: 'gap-0.5',
      xSize: 'w-[13px] h-[13px]',
    },
    md: {
      text: 'text-[20px] sm:text-[22px]',
      tagline: 'text-[8.5px] sm:text-[9.5px] tracking-[0.34em]',
      gap: 'gap-1',
      xSize: 'w-[17px] h-[17px]',
    },
    lg: {
      text: 'text-[26px] sm:text-[30px]',
      tagline: 'text-[10px] sm:text-[11.5px] tracking-[0.36em]',
      gap: 'gap-1.5',
      xSize: 'w-[22px] h-[22px]',
    },
    xl: {
      text: 'text-[36px] sm:text-[42px]',
      tagline: 'text-[12px] sm:text-[14px] tracking-[0.38em]',
      gap: 'gap-2',
      xSize: 'w-[30px] h-[30px]',
    },
    '2xl': {
      text: 'text-[48px] sm:text-[56px]',
      tagline: 'text-[15px] sm:text-[17px] tracking-[0.4em]',
      gap: 'gap-2.5',
      xSize: 'w-[40px] h-[40px]',
    },
  };

  const currentSize = sizeStyles[size];

  // Base text color
  let textColor = 'text-[#071B3B]';
  let slashColor = '#2563FF';
  let taglineColor = 'text-[#64748B]';

  if (isDark) {
    textColor = 'text-white';
    slashColor = '#1D8FFF';
    taglineColor = 'text-[#94A3B8]';
  } else if (isWhite) {
    textColor = 'text-white';
    slashColor = '#FFFFFF';
    taglineColor = 'text-white/80';
  } else if (isBlack) {
    textColor = 'text-[#071B3B]';
    slashColor = '#071B3B';
    taglineColor = 'text-[#071B3B]/80';
  }

  return (
    <div className={`flex flex-col justify-center select-none ${currentSize.gap} ${className}`}>
      {/* Main Brand Wordmark: INTERNI + Custom X */}
      <div className={`font-display font-extrabold tracking-[0.14em] uppercase flex items-center leading-none ${currentSize.text} ${textColor}`}>
        <span>INTERNI</span>
        
        {/* Custom "X" with Blue Accent Slash */}
        <span className={`inline-flex items-center justify-center relative ${currentSize.xSize} ml-[0.08em]`}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full overflow-visible"
          >
            {/* Primary Backslash (\ stroke) in Deep Navy / White / Black */}
            <line
              x1="4"
              y1="4"
              x2="20"
              y2="20"
              stroke="currentColor"
              strokeWidth="4.2"
              strokeLinecap="round"
            />

            {/* Lower-left forward slash segment */}
            <line
              x1="4"
              y1="20"
              x2="11"
              y2="13"
              stroke="currentColor"
              strokeWidth="4.2"
              strokeLinecap="round"
            />

            {/* Upper-right ACCENT SLASH in Electric Blue (#2563FF / #1D8FFF) */}
            <line
              x1="13"
              y1="11"
              x2="20"
              y2="4"
              stroke={slashColor}
              strokeWidth="4.2"
              strokeLinecap="round"
              className="internix-x-slash"
            />
          </svg>
        </span>
      </div>

      {/* Tagline: STUDENT PROGRAMS */}
      {showTagline && (
        <span
          className={`font-mono font-medium uppercase leading-none mt-0.5 ${currentSize.tagline} ${taglineColor}`}
        >
          {tagline}
        </span>
      )}
    </div>
  );
};
