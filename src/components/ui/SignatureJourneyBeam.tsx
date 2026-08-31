import React from 'react';
import { ArrowDown, Sparkles, Check, ChevronDown } from 'lucide-react';

interface SignatureJourneyBeamProps {
  fromText?: string;
  toText?: string;
}

export const SignatureJourneyBeam: React.FC<SignatureJourneyBeamProps> = ({
  fromText = "INTERNIX APPLICATION",
  toText = "VERIFIED PORTFOLIO CREDENTIAL",
}) => {
  return (
    <div className="relative w-full py-3 sm:py-8 overflow-hidden select-none" aria-hidden="true">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center">
        {/* Animated Connector Line Container */}
        <div className="relative w-full max-w-2xl flex flex-col items-center">
          {/* Subtle Top Indicator Pill */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white border border-[#E2E8F0] shadow-xs text-[10px] sm:text-[11px] font-mono font-semibold text-[#64748B] uppercase tracking-wider mb-1 sm:mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0048D9] animate-ping" />
            <span>{fromText}</span>
          </div>

          {/* Vertical Connecting Pulse Beam */}
          <div className="relative h-8 sm:h-16 w-full flex items-center justify-center">
            {/* Background hairline line */}
            <div className="absolute h-full w-[2px] bg-gradient-to-b from-[#E2E8F0] via-[#0048D9]/40 to-[#E2E8F0]" />
            
            {/* Glowing Traveling Pulse Node */}
            <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#0048D9] shadow-[0_0_12px_#0048D9] animate-bounce" />

            {/* Horizontal Nodes Stream */}
            <div className="hidden sm:flex items-center justify-between w-full max-w-xl text-[10px] font-mono uppercase tracking-widest text-[#94A3B8]">
              <span className="bg-[#F8F9FA] px-2">01 APPLY</span>
              <span className="bg-[#F8F9FA] px-2 text-[#0048D9] font-bold">02 BUILD REAL TASKS</span>
              <span className="bg-[#F8F9FA] px-2">03 CERTIFY</span>
            </div>
          </div>

          {/* Bottom Target Indicator */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-[#0F172A] text-white shadow-sm text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider mt-1 sm:mt-2">
            <Sparkles className="w-3 h-3 text-[#38BDF8]" />
            <span>{toText}</span>
            <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
          </div>
        </div>
      </div>
    </div>
  );
};
