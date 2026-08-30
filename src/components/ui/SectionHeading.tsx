import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  titleAs?: 'h1' | 'h2' | 'h3';
  large?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  titleAs: TitleTag = 'h2',
  large = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {eyebrow && (
        <span className="text-[#0055FF] font-bold text-[12px] tracking-[0.2em] uppercase mb-3 inline-block">
          {eyebrow}
        </span>
      )}
      
      <TitleTag
        className={`font-display font-extrabold text-[#1A1A1A] tracking-tight leading-[1.08] ${
          large
            ? 'text-3xl sm:text-4xl md:text-5xl lg:text-[54px]'
            : 'text-2xl sm:text-3xl md:text-4xl'
        }`}
      >
        {title}
      </TitleTag>

      {description && (
        <p
          className={`mt-3 sm:mt-4 text-base sm:text-lg text-[#4A4A4A] leading-relaxed font-normal ${
            isCenter ? 'max-w-2xl mx-auto' : 'max-w-3xl'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
