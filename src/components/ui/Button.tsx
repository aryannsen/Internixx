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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0055FF] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xs cursor-pointer whitespace-nowrap tracking-tight';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5 min-h-[34px] font-semibold',
    md: 'text-[14px] px-6 py-2.5 gap-2 min-h-[40px] font-semibold',
    lg: 'text-[16px] px-8 py-3.5 gap-2.5 min-h-[48px] font-bold',
  }[size];

  const variantStyles = {
    primary: 'bg-[#0055FF] text-white hover:bg-blue-700 active:bg-blue-800 shadow-xs border border-[#0055FF]',
    dark: 'bg-[#1A1A1A] text-white hover:opacity-90 active:bg-black border border-[#1A1A1A]',
    secondary: 'bg-[#1A1A1A] text-white hover:opacity-90 active:bg-black border border-[#1A1A1A]',
    outline: 'border border-[#1A1A1A] text-[#1A1A1A] bg-transparent hover:bg-[#F0F0EE] active:bg-[#E5E5E0]',
    ghost: 'text-[#1A1A1A] hover:bg-[#F5F5F0] active:bg-[#EAEAE5]',
    link: 'text-[#0055FF] hover:underline p-0 min-h-0 font-bold',
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
