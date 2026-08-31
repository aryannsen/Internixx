import React from 'react';
import { InternixSymbol } from '../brand/InternixSymbol';
import { InternixWordmark } from '../brand/InternixWordmark';

export interface BrandMarkProps {
  size?: number;
  className?: string;
  inverted?: boolean;
}

export const BrandMark: React.FC<BrandMarkProps> = ({
  size = 36,
  className = '',
  inverted = false,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <InternixSymbol
        size={size}
        variant={inverted ? 'white' : 'gradient'}
      />
    </div>
  );
};

export const BrandLogo: React.FC<{
  size?: number;
  subtitle?: string;
  onClick?: () => void;
  className?: string;
  inverted?: boolean;
}> = ({
  size = 38,
  subtitle = 'STUDENT PROGRAMS',
  onClick,
  className = '',
  inverted = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 text-left focus:outline-none cursor-pointer group select-none ${className}`}
      aria-label="Internix Home"
    >
      <InternixSymbol
        size={size}
        variant={inverted ? 'gradient' : 'gradient'}
        className="transition-transform duration-200 group-hover:scale-105"
      />

      <InternixWordmark
        size={size < 32 ? 'sm' : size > 44 ? 'lg' : 'md'}
        variant={inverted ? 'dark' : 'default'}
        showTagline={Boolean(subtitle)}
        tagline={subtitle}
      />
    </button>
  );
};
