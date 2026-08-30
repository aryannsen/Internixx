import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'blue' | 'slate' | 'emerald' | 'amber' | 'editorial';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'sm',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 font-bold uppercase tracking-wider',
    md: 'text-[12px] px-3 py-1 font-bold uppercase tracking-widest',
  }[size];

  const variantStyles = {
    neutral: 'bg-[#F5F5F0] text-[#666] border border-[#E5E5E0]',
    blue: 'bg-[#0055FF] text-white border border-[#0055FF]',
    editorial: 'bg-[#0055FF] text-white border border-[#0055FF]',
    slate: 'bg-[#1A1A1A] text-white border border-[#1A1A1A]',
    emerald: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    amber: 'bg-amber-50 text-amber-900 border border-amber-200',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-none ${sizeStyles} ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
