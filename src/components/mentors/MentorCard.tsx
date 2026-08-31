import React, { useState } from 'react';
import { Mentor } from '../../types';
import { CompanyLogo } from '../ui/CompanyLogo';
import { getMentorImageUrl } from '../../lib/supabase';

interface MentorCardProps {
  mentor: Mentor;
  index: number;
  isFirst?: boolean;
}

export const MentorCard: React.FC<MentorCardProps> = ({ mentor, index, isFirst = false }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageUrl = getMentorImageUrl(mentor.image);

  // Extract initials for fallback avatar
  const initials = mentor.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div
      data-mentor-card
      className="mentor-card-item group relative bg-white rounded-[20px] border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:border-[#0048D9]/30 hover:shadow-[0_12px_32px_rgba(0,72,217,0.08)] transition-all duration-300 ease-out flex flex-col overflow-hidden select-none hover:-translate-y-1.5 will-change-transform"
    >
      {/* Subtle Blue Glow / Accent micro-interaction on hover */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#0048D9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 inset-y-0 w-0.5 bg-[#0048D9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        aria-hidden="true"
      />

      {/* Portrait Image Container */}
      <div className="relative w-full aspect-[4/3.8] bg-[#F8FAFC] overflow-hidden">
        {!imageError ? (
          <>
            {/* Smooth Skeleton placeholder until loaded */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-[#F1F5F9] animate-pulse" />
            )}
            <img
              src={imageUrl}
              alt={`Portrait of ${mentor.name}, ${mentor.role} at ${mentor.companyName}`}
              loading={isFirst ? 'eager' : 'lazy'}
              decoding="async"
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover object-top transition-all duration-350 ease-out group-hover:scale-[1.035] group-hover:brightness-[1.03] ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </>
        ) : (
          /* Fallback clean avatar */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#F1F5F9] to-[#E2E8F0] text-[#071B3B]">
            <div className="w-14 h-14 rounded-full bg-[#0048D9]/10 border border-[#0048D9]/20 flex items-center justify-center text-lg font-display font-bold text-[#0048D9]">
              {initials}
            </div>
          </div>
        )}

        {/* Very subtle gradient overlay at bottom edge of portrait for smooth text transition */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white/30 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Card Info Content */}
      <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between items-center text-center">
        {/* Mentor Name & Credentials */}
        <div className="flex flex-col items-center w-full">
          <h3 className="font-display font-bold text-[15px] sm:text-[16px] text-[#071B3B] tracking-tight group-hover:text-[#0048D9] transition-colors duration-200">
            {mentor.name}
          </h3>
          <p className="text-xs sm:text-[12.5px] text-[#475569] font-medium mt-1 leading-snug">
            {mentor.role}
          </p>
          <p className="text-[11.5px] sm:text-[12px] text-[#64748B] font-normal mt-0.5 leading-snug">
            {mentor.organization}
          </p>
        </div>

        {/* Organization / Affiliation Badge Footer */}
        <div className="w-full pt-3.5 mt-3 border-t border-[#F1F5F9] flex items-center justify-center min-h-[36px] transition-transform duration-200 group-hover:-translate-y-0.5">
          <CompanyLogo
            type={mentor.companyLogoType}
            name={mentor.companyName}
            customLogoUrl={mentor.customLogoUrl}
          />
        </div>
      </div>
    </div>
  );
};
