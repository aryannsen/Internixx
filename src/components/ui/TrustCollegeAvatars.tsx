import React, { useState } from 'react';
import { MentorAvatarStack } from './MentorAvatarStack';

interface CollegeLogo {
  id: string;
  name: string;
  shortName: string;
  logoSrc: string;
  imgClassName?: string;
}

const COLLEGES: CollegeLogo[] = [
  {
    id: 'chandigarh',
    name: 'Chandigarh University',
    shortName: 'Chandigarh Univ',
    logoSrc: '/colleges/chandigarh.png',
    imgClassName: 'max-h-10 sm:max-h-12 w-auto object-contain',
  },
  {
    id: 'manipal',
    name: 'Manipal University',
    shortName: 'Manipal',
    logoSrc: '/colleges/manipal.png',
    imgClassName: 'max-h-10 sm:max-h-12 w-auto object-contain',
  },
  {
    id: 'bits-pilani',
    name: 'BITS Pilani',
    shortName: 'BITS Pilani',
    logoSrc: '/colleges/bits-pilani.svg',
    imgClassName: 'max-h-9 sm:max-h-11 w-auto object-contain',
  },
  {
    id: 'vit',
    name: 'VIT Vellore',
    shortName: 'VIT',
    logoSrc: '/colleges/vit.svg',
    imgClassName: 'max-h-9 sm:max-h-11 w-auto object-contain',
  },
  {
    id: 'amity',
    name: 'Amity University',
    shortName: 'Amity Univ',
    logoSrc: '/colleges/amity.png',
    imgClassName: 'max-h-10 sm:max-h-12 w-auto object-contain',
  },
  {
    id: 'nmims',
    name: 'NMIMS University',
    shortName: 'NMIMS',
    logoSrc: '/colleges/nmims.png',
    imgClassName: 'max-h-10 sm:max-h-12 w-auto object-contain',
  },
];

export const TrustCollegeAvatars: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="flex flex-col items-start gap-3 pt-4 sm:pt-6 border-t border-[#E2E8F0] mt-6 sm:mt-8 w-full max-w-full">
      {/* Section Heading */}
      <div className="text-xs sm:text-[13px] text-[#475569] font-medium leading-tight">
        Trusted by <strong className="text-[#2563FF] font-bold">25,000+</strong> students from top colleges
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP / TABLET: 6-Card Balanced Horizontal Row                         */}
      {/* ========================================================================= */}
      <div className="hidden sm:grid sm:grid-cols-6 gap-2 sm:gap-2.5 w-full">
        {COLLEGES.map((college) => (
          <div
            key={college.id}
            title={college.name}
            className="group relative bg-white rounded-xl border border-[#E2E8F0] shadow-[0_2px_10px_rgba(7,27,59,0.03)] hover:border-[#2563FF]/30 hover:shadow-[0_8px_20px_rgba(37,99,255,0.08)] transition-all duration-200 h-16 lg:h-18 p-2 flex items-center justify-center cursor-default select-none"
          >
            {!imgErrors[college.id] ? (
              <img
                src={college.logoSrc}
                alt={college.name}
                referrerPolicy="no-referrer"
                onError={() => handleImageError(college.id)}
                className={`transition-transform duration-200 group-hover:scale-105 ${college.imgClassName}`}
              />
            ) : (
              <span className="text-[11px] font-bold text-[#071B3B] text-center leading-tight">
                {college.shortName}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* MOBILE: Automatic Continuous Infinite Linear Marquee (Right -> Left)     */}
      {/* ========================================================================= */}
      <div className="block sm:hidden relative w-full overflow-hidden py-1">
        {/* Subtle Fade Edge Masks */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-[#F8F9FA] to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-[#F8F9FA] to-transparent"
          aria-hidden="true"
        />

        {/* Continuous Seamless Scrolling Track */}
        <div className="animate-infinite-marquee flex items-center gap-2.5">
          {/* First Set of Logos */}
          {COLLEGES.map((college) => (
            <div
              key={`marquee-1-${college.id}`}
              className="shrink-0 w-[108px] h-14 bg-white rounded-xl border border-[#E2E8F0] shadow-[0_2px_8px_rgba(7,27,59,0.03)] p-1.5 flex items-center justify-center select-none"
            >
              {!imgErrors[college.id] ? (
                <img
                  src={college.logoSrc}
                  alt={college.name}
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(college.id)}
                  className="max-h-9 w-auto max-w-full object-contain"
                />
              ) : (
                <span className="text-[10px] font-bold text-[#071B3B] text-center leading-tight">
                  {college.shortName}
                </span>
              )}
            </div>
          ))}

          {/* Duplicate Second Set of Logos for 100% Seamless Infinite Loop */}
          {COLLEGES.map((college) => (
            <div
              key={`marquee-2-${college.id}`}
              className="shrink-0 w-[108px] h-14 bg-white rounded-xl border border-[#E2E8F0] shadow-[0_2px_8px_rgba(7,27,59,0.03)] p-1.5 flex items-center justify-center select-none"
            >
              {!imgErrors[college.id] ? (
                <img
                  src={college.logoSrc}
                  alt={college.name}
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(college.id)}
                  className="max-h-9 w-auto max-w-full object-contain"
                />
              ) : (
                <span className="text-[10px] font-bold text-[#071B3B] text-center leading-tight">
                  {college.shortName}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* COMPACT TRUST LAYER: Educators & Industry Mentors Avatar Stack            */}
      {/* ========================================================================= */}
      <div className="pt-2 sm:pt-2.5 mt-0.5 border-t border-[#F1F5F9] w-full">
        <MentorAvatarStack />
      </div>
    </div>
  );
};
