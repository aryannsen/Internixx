import React from 'react';

export interface InternixSymbolProps {
  size?: number;
  className?: string;
  variant?: 'gradient' | 'dark' | 'white' | 'black';
  animated?: boolean;
}

export const InternixSymbol: React.FC<InternixSymbolProps> = ({
  size = 48,
  className = '',
  variant = 'gradient',
  animated = false,
}) => {
  const uniqueId = React.useId().replace(/:/g, '');

  // Color mapping based on variant
  const isWhite = variant === 'white';
  const isBlack = variant === 'black';
  const isDark = variant === 'dark';

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible select-none"
      >
        <defs>
          {/* Main Primary Electric Blue Gradient */}
          <linearGradient
            id={`ix-primary-${uniqueId}`}
            x1="14"
            y1="14"
            x2="86"
            y2="86"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#1D8FFF" />
            <stop offset="50%" stopColor="#2563FF" />
            <stop offset="100%" stopColor="#0048D9" />
          </linearGradient>

          {/* Left Pillar Gradient */}
          <linearGradient
            id={`ix-left-pillar-${uniqueId}`}
            x1="14"
            y1="32"
            x2="28"
            y2="86"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#1D8FFF" />
            <stop offset="100%" stopColor="#0048D9" />
          </linearGradient>

          {/* Fold Apex Highlight Gradient */}
          <linearGradient
            id={`ix-fold-apex-${uniqueId}`}
            x1="14"
            y1="30"
            x2="44"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#AFCBFF" />
            <stop offset="40%" stopColor="#1D8FFF" />
            <stop offset="100%" stopColor="#2563FF" />
          </linearGradient>

          {/* Central Diagonal Ribbon Gradient */}
          <linearGradient
            id={`ix-diagonal-${uniqueId}`}
            x1="28"
            y1="46"
            x2="86"
            y2="86"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#0048D9" />
            <stop offset="25%" stopColor="#2563FF" />
            <stop offset="85%" stopColor="#1D8FFF" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>

          {/* Right Pillar Gradient */}
          <linearGradient
            id={`ix-right-pillar-${uniqueId}`}
            x1="70"
            y1="24"
            x2="86"
            y2="86"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="35%" stopColor="#1D8FFF" />
            <stop offset="100%" stopColor="#2563FF" />
          </linearGradient>

          {/* Soft Ribbon Fold Shadow */}
          <linearGradient
            id={`ix-shadow-${uniqueId}`}
            x1="28"
            y1="46"
            x2="38"
            y2="58"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#071B3B" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#071B3B" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. "i" CIRCULAR DOT */}
        <circle
          cx="21"
          cy="18.5"
          r="7.5"
          fill={
            isWhite
              ? '#FFFFFF'
              : isBlack
              ? '#071B3B'
              : `url(#ix-primary-${uniqueId})`
          }
        />

        {/* 2. LEFT VERTICAL PILLAR (The 'i' Body) */}
        <path
          d="M 14 36.5 L 28 36.5 L 28 84 C 28 85.1 27.1 86 26 86 L 16 86 C 14.9 86 14 85.1 14 84 Z"
          fill={
            isWhite
              ? '#FFFFFF'
              : isBlack
              ? '#071B3B'
              : `url(#ix-left-pillar-${uniqueId})`
          }
        />

        {/* 3. FOLDED APEX WEDGE (Ribbon bend on top of left pillar) */}
        <path
          d="M 14 36.5 L 28 36.5 L 43 45 L 28 53 L 14 36.5 Z"
          fill={
            isWhite
              ? '#FFFFFF'
              : isBlack
              ? '#071B3B'
              : `url(#ix-fold-apex-${uniqueId})`
          }
        />

        {/* 4. CENTRAL DIAGONAL RIBBON (Connecting left fold to right pillar) */}
        <path
          d="M 28 53 L 43 45 L 86 86 L 72 86 Z"
          fill={
            isWhite
              ? '#FFFFFF'
              : isBlack
              ? '#071B3B'
              : `url(#ix-diagonal-${uniqueId})`
          }
        />

        {/* 4b. Optical Inner Fold Shadow for 3D Ribbon Depth */}
        {!isWhite && !isBlack && (
          <path
            d="M 28 53 L 39 47.3 L 34 59 Z"
            fill={`url(#ix-shadow-${uniqueId})`}
          />
        )}

        {/* 5. RIGHT VERTICAL PILLAR WITH TOP ANGLED FACET */}
        <path
          d="M 72 38 L 86 27 L 86 84 C 86 85.1 85.1 86 84 86 L 74 86 C 72.9 86 72 85.1 72 84 Z"
          fill={
            isWhite
              ? '#FFFFFF'
              : isBlack
              ? '#071B3B'
              : `url(#ix-right-pillar-${uniqueId})`
          }
        />

        {/* Subtle Ambient Light Beam (Optional Motion/Glow) */}
        {animated && (
          <path
            d="M 14 36.5 L 43 45 L 86 86"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="opacity-75 animate-pulse"
          />
        )}
      </svg>
    </div>
  );
};
