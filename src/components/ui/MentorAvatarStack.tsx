import React, { useState } from 'react';
import { getMentorImageUrl } from '../../lib/supabase';

interface MentorAvatarItem {
  id: string;
  src: string;
  label: 'Industry Mentor' | 'Educator';
  floatDelay: string;
}

const MENTOR_AVATARS: MentorAvatarItem[] = [
  { id: 'm-1', src: '/mentors/mentor-nishant.jpg', label: 'Industry Mentor', floatDelay: '0s' },
  { id: 'm-2', src: '/mentors/mentor-abdul.jpg', label: 'Educator', floatDelay: '0.8s' },
  { id: 'm-3', src: '/mentors/mentor-shradha.jpg', label: 'Educator', floatDelay: '1.6s' },
  { id: 'm-4', src: '/mentors/mentor-kunal.jpg', label: 'Industry Mentor', floatDelay: '2.4s' },
  { id: 'm-5', src: '/mentors/mentor-anurag.jpg', label: 'Industry Mentor', floatDelay: '3.2s' },
  { id: 'm-6', src: '/mentors/mentor-swarnima.jpg', label: 'Industry Mentor', floatDelay: '4.0s' },
];

interface MentorAvatarStackProps {
  className?: string;
}

export const MentorAvatarStack: React.FC<MentorAvatarStackProps> = ({ className = '' }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div
      className={`flex flex-wrap items-center gap-2.5 sm:gap-3 select-none ${className}`}
      aria-label="Educators and industry mentors"
    >
      {/* Overlapping Avatars Stack with +20 Badge */}
      <div className="flex items-center -space-x-2 sm:-space-x-2.5 py-1.5 overflow-visible">
        {MENTOR_AVATARS.map((mentor, index) => {
          const isHovered = hoveredId === mentor.id;
          const imageUrl = getMentorImageUrl(mentor.src);

          return (
            <div
              key={mentor.id}
              className="relative"
              style={{ zIndex: isHovered ? 50 : 20 - index }}
              onMouseEnter={() => setHoveredId(mentor.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full ring-2 ring-white shadow-[0_2px_6px_rgba(7,27,59,0.08)] bg-[#F1F5F9] overflow-hidden transition-all duration-200 ease-out cursor-pointer hover:scale-115 hover:ring-[#0048D9] hover:shadow-[0_4px_12px_rgba(0,72,217,0.3)] animate-avatar-float"
                style={{
                  animationDelay: mentor.floatDelay,
                  animationDuration: '5.5s',
                }}
              >
                {!imageErrors[mentor.id] ? (
                  <img
                    src={imageUrl}
                    alt={mentor.label}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(mentor.id)}
                    className="w-full h-full object-cover object-top pointer-events-none"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#E2E8F0] text-[#071B3B] text-[10px] font-bold">
                    {mentor.label[0]}
                  </div>
                )}
              </div>

              {/* Minimal Clean Tooltip - fully visible and positioned directly above */}
              <div
                className={`pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md bg-[#0F172A] text-white text-[11px] font-semibold tracking-tight whitespace-nowrap shadow-xl border border-slate-700/60 transition-all duration-200 z-[100] ${
                  isHovered
                    ? 'opacity-100 translate-y-0 visible scale-100'
                    : 'opacity-0 translate-y-1 invisible scale-95'
                }`}
                role="tooltip"
                aria-hidden={!isHovered}
              >
                {mentor.label}
                {/* Micro tooltip arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-[#0F172A]" />
              </div>
            </div>
          );
        })}

        {/* Count Pill Badge (+20) */}
        <div
          className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full ring-2 ring-white bg-[#EFF6FF] text-[#0048D9] border border-[#BFDBFE] flex items-center justify-center text-[10.5px] sm:text-[11px] font-bold tracking-tight shadow-[0_2px_6px_rgba(7,27,59,0.06)] hover:bg-[#0048D9] hover:text-white hover:scale-110 transition-all duration-200 cursor-default select-none"
          title="20+ industry mentors and educators"
          style={{ zIndex: 10 }}
        >
          +20
        </div>
      </div>

      {/* Label Text */}
      <div className="flex items-center gap-1.5 text-xs sm:text-[12.5px] text-[#475569] font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0048D9] shrink-0" />
        <span>Guided by <strong className="text-[#071B3B] font-semibold">educators &amp; industry mentors</strong></span>
      </div>
    </div>
  );
};
