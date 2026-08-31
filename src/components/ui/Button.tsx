import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  target,
  rel,
  children,
  className = '',
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0048D9] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl cursor-pointer whitespace-nowrap tracking-tight';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5 min-h-[36px] font-semibold rounded-lg',
    md: 'text-[14px] px-5 py-2.5 gap-2 min-h-[42px] font-semibold rounded-xl',
    lg: 'text-[15px] px-7 py-3 gap-2.5 min-h-[48px] font-bold rounded-xl',
  }[size];

  const variantStyles = {
    primary: 'bg-[#0048D9] text-white hover:bg-[#003BB3] active:bg-[#002D8A] shadow-xs border border-[#0048D9]',
    dark: 'bg-[#0F172A] text-white hover:bg-[#1E293B] active:bg-black border border-[#0F172A]',
    secondary: 'bg-[#F1F3F5] text-[#0F172A] hover:bg-[#E2E8F0] active:bg-[#CBD5E1] border border-[#E2E8F0]',
    outline: 'border border-[#E2E8F0] text-[#0F172A] bg-white hover:bg-[#F8F9FA] hover:border-[#CBD5E1] active:bg-[#F1F3F5]',
    ghost: 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F3F5] active:bg-[#E2E8F0]',
    link: 'text-[#0048D9] hover:underline p-0 min-h-0 font-bold',
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (as === 'a' || href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
