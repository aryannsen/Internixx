import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { APPLICATION_FORM_URL } from '../../config/site';

interface PremiumFinalCTAProps {
  onExploreClick?: () => void;
}

export const PremiumFinalCTA: React.FC<PremiumFinalCTAProps> = () => {
  return (
    <section className="relative z-10 py-6 sm:py-10 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-10 lg:p-12 text-center shadow-[0_4px_20px_rgba(7,27,59,0.04)] relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#2563FF]/5 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            {/* Title */}
            <h2 className="font-display text-xl sm:text-3xl font-extrabold text-[#071B3B] tracking-tight leading-tight">
              Start your journey today
            </h2>

            {/* Subtitle */}
            <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-md">
              Join thousands of students building skills through real-world projects.
            </p>

            {/* Primary Action Button */}
            <div className="mt-5 sm:mt-6 w-full sm:w-auto">
              <a
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#2563FF] hover:bg-[#1D8FFF] active:bg-[#1D8FFF] text-white px-7 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 inline-flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_16px_rgba(37,99,255,0.25)]"
              >
                <span>Apply for Internship</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Supporting Trust Guarantee */}
            <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#64748B] font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2563FF]" />
              <span>No fees. 100% free to apply.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
