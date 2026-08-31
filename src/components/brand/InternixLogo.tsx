import React from 'react';
import { InternixSymbol } from './InternixSymbol';
import { InternixWordmark } from './InternixWordmark';

export interface InternixLogoProps {
  layout?: 'horizontal' | 'vertical' | 'icon-only';
  variant?: 'gradient' | 'dark' | 'white' | 'black';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  tagline?: string;
  className?: string;
  onClick?: () => void;
}

export const InternixLogo: React.FC<InternixLogoProps> = ({
  layout = 'horizontal',
  variant = 'gradient',
  size = 'md',
  showTagline = true,
  tagline = 'STUDENT PROGRAMS',
  className = '',
  onClick,
}) => {
  // Mapping layout & sizes
  const symbolSizes = {
    sm: layout === 'vertical' ? 44 : 32,
    md: layout === 'vertical' ? 60 : 42,
    lg: layout === 'vertical' ? 84 : 56,
    xl: layout === 'vertical' ? 112 : 76,
  };

  const wordmarkSizes = {
    sm: 'sm' as const,
    md: 'md' as const,
    lg: 'lg' as const,
    xl: 'xl' as const,
  };

  const currentSymbolSize = symbolSizes[size];
  const currentWordmarkSize = wordmarkSizes[size];

  // Convert variant to symbol/wordmark props
  const symbolVariant =
    variant === 'white' ? 'white' : variant === 'black' ? 'black' : variant === 'dark' ? 'gradient' : 'gradient';
  const wordmarkVariant =
    variant === 'white' ? 'white' : variant === 'black' ? 'black' : variant === 'dark' ? 'dark' : 'default';

  if (layout === 'icon-only') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center justify-center shrink-0 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      >
        <InternixSymbol size={currentSymbolSize} variant={symbolVariant} />
      </div>
    );
  }

  if (layout === 'vertical') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex flex-col items-center text-center gap-3 select-none ${
          onClick ? 'cursor-pointer group' : ''
        } ${className}`}
      >
        <InternixSymbol
          size={currentSymbolSize}
          variant={symbolVariant}
          className="transition-transform duration-200 group-hover:scale-105"
        />
        <InternixWordmark
          size={currentWordmarkSize}
          variant={wordmarkVariant}
          showTagline={showTagline}
          tagline={tagline}
          className="items-center text-center"
        />
      </div>
    );
  }

  // Default: Horizontal layout
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3.5 select-none ${
        onClick ? 'cursor-pointer group' : ''
      } ${className}`}
    >
      <InternixSymbol
        size={currentSymbolSize}
        variant={symbolVariant}
        className="transition-transform duration-200 group-hover:scale-105"
      />
      <InternixWordmark
        size={currentWordmarkSize}
        variant={wordmarkVariant}
        showTagline={showTagline}
        tagline={tagline}
      />
    </div>
  );
};
