import React, { useEffect, useRef } from 'react';
import { gsap, isReducedMotion } from '../../lib/gsapConfig';

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const orbit1Ref = useRef<SVGGElement | null>(null);
  const orbit2Ref = useRef<SVGGElement | null>(null);
  const orbit3Ref = useRef<SVGGElement | null>(null);
  const nodeRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    if (isReducedMotion() || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Orbit 1 (Primary Arc): Smooth clockwise rotation (10s, linear infinite)
      if (orbit1Ref.current) {
        gsap.to(orbit1Ref.current, {
          rotation: 360,
          duration: 10,
          ease: 'none',
          repeat: -1,
          transformOrigin: '24px 24px',
        });
      }

      // Orbit 2 (Secondary Outer Track): Smooth counter-clockwise rotation (15s, linear infinite)
      if (orbit2Ref.current) {
        gsap.to(orbit2Ref.current, {
          rotation: -360,
          duration: 15,
          ease: 'none',
          repeat: -1,
          transformOrigin: '24px 24px',
        });
      }

      // Orbit 3 (Inner Micro Coordinate Accent): Slow clockwise precession (22s)
      if (orbit3Ref.current) {
        gsap.to(orbit3Ref.current, {
          rotation: 360,
          duration: 22,
          ease: 'none',
          repeat: -1,
          transformOrigin: '24px 24px',
        });
      }

      // Node subtle opacity pulse (3.5s smooth sine)
      if (nodeRef.current) {
        gsap.to(nodeRef.current, {
          opacity: 0.45,
          duration: 1.8,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [inverted]);

  const uniqueId = inverted ? 'inv' : 'std';

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible pointer-events-none select-none"
      >
        <defs>
          {/* Subtle Precision Linear Gradients */}
          <linearGradient id={`ix-gradient-primary-${uniqueId}`} x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={inverted ? '#60A5FA' : '#0048D9'} />
            <stop offset="100%" stopColor={inverted ? '#A78BFA' : '#4F46E5'} />
          </linearGradient>

          <linearGradient id={`ix-gradient-accent-${uniqueId}`} x1="20" y1="8" x2="28" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={inverted ? '#93C5FD' : '#2563EB'} />
            <stop offset="100%" stopColor={inverted ? '#60A5FA' : '#0048D9'} />
          </linearGradient>
        </defs>

        {/* ------------------------------------------------------------------------- */}
        {/* STATIC BACKGROUND GUIDE RINGS (Geometric Alignment Grid)                  */}
        {/* ------------------------------------------------------------------------- */}
        {/* Outer subtle boundary ring */}
        <circle
          cx="24"
          cy="24"
          r="21.5"
          stroke={inverted ? '#334155' : '#E2E8F0'}
          strokeWidth="0.8"
          className="opacity-40"
        />

        {/* Inner subtle guide track */}
        <circle
          cx="24"
          cy="24"
          r="17"
          stroke={inverted ? '#334155' : '#E2E8F0'}
          strokeWidth="0.8"
          strokeDasharray="1.5 3.5"
          className="opacity-50"
        />

        {/* ------------------------------------------------------------------------- */}
        {/* ORBIT 2: Outer Counter-Clockwise Track (15s) with Secondary Satellite Node */}
        {/* ------------------------------------------------------------------------- */}
        <g ref={orbit2Ref} className="will-change-transform">
          {/* Segmented outer sweep arc */}
          <path
            d="M 24 2.5 A 21.5 21.5 0 0 1 44 32"
            stroke={inverted ? '#64748B' : '#94A3B8'}
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="5 7"
            className={inverted ? 'opacity-65' : 'opacity-55'}
          />
          {/* Satellite Coordinate Node */}
          <circle
            cx="44"
            cy="32"
            r="1.4"
            fill={inverted ? '#94A3B8' : '#64748B'}
          />
        </g>

        {/* ------------------------------------------------------------------------- */}
        {/* ORBIT 3: Inner Micro Coordinate Track (22s slow precession)              */}
        {/* ------------------------------------------------------------------------- */}
        <g ref={orbit3Ref} className="will-change-transform">
          <circle
            cx="24"
            cy="7"
            r="1"
            fill={inverted ? '#818CF8' : '#6366F1'}
            className="opacity-60"
          />
        </g>

        {/* ------------------------------------------------------------------------- */}
        {/* ORBIT 1: Primary Electric Blue Sweep Arc (10s clockwise) + Traveling Node */}
        {/* ------------------------------------------------------------------------- */}
        <g ref={orbit1Ref} className="will-change-transform">
          {/* Dynamic Velocity Arc */}
          <path
            d="M 24 7 A 17 17 0 0 1 39.5 29"
            stroke={`url(#ix-gradient-primary-${uniqueId})`}
            strokeWidth="1.6"
            strokeLinecap="round"
            className={inverted ? 'opacity-95' : 'opacity-90'}
          />
          {/* Leading Precision Node */}
          <circle
            ref={nodeRef}
            cx="39.5"
            cy="29"
            r="2"
            fill={inverted ? '#93C5FD' : '#0048D9'}
          />
        </g>

        {/* ------------------------------------------------------------------------- */}
        {/* CENTRAL CUSTOM ABSTRACT "I" SYMBOL (Completely Stable Tech Core)          */}
        {/* ------------------------------------------------------------------------- */}
        {/* Top Ascending Prism (Upper Apex Diamond / Growth Chevron) */}
        <path
          d="M 24 10.5 L 28.5 15.5 L 24 17.5 L 19.5 15.5 Z"
          fill={`url(#ix-gradient-accent-${uniqueId})`}
        />

        {/* Main Monolith Pillar (The "I" Vertical Column) */}
        <path
          d="M 21.2 19.5 H 26.8 C 27.46 19.5 28 20.04 28 20.7 V 32.3 C 28 32.96 27.46 33.5 26.8 33.5 H 21.2 C 20.54 33.5 20 32.96 20 32.3 V 20.7 C 20 20.04 20.54 19.5 21.2 19.5 Z"
          fill={inverted ? '#FFFFFF' : '#0F172A'}
        />

        {/* Sub-Pillar Tech Slit Detail (Micro vertical precision cutout for modern ed-tech identity) */}
        <rect
          x="23.4"
          y="22"
          width="1.2"
          height="9"
          rx="0.6"
          fill={inverted ? '#0F172A' : '#F8F9FA'}
          className="opacity-90"
        />

        {/* Lower Foundation Base Bar */}
        <rect
          x="18.5"
          y="35"
          width="11"
          height="2"
          rx="1"
          fill={inverted ? '#FFFFFF' : '#0F172A'}
        />
      </svg>
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
      <BrandMark size={size} inverted={inverted} />

      <div className="flex flex-col justify-center">
        <span
          className={`text-[19px] sm:text-[21px] font-extrabold tracking-[-0.02em] font-display leading-none transition-colors ${
            inverted
              ? 'text-white group-hover:text-[#60A5FA]'
              : 'text-[#0F172A] group-hover:text-[#0048D9]'
          }`}
        >
          INTERNIX
        </span>
        {subtitle && (
          <span
            className={`text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.24em] uppercase mt-1 leading-none ${
              inverted ? 'text-[#94A3B8]' : 'text-[#64748B]'
            }`}
          >
            {subtitle}
          </span>
        )}
      </div>
    </button>
  );
};
