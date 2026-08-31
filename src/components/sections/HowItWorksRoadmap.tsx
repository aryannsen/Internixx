import React from 'react';
import { BookOpen, Code2, UploadCloud, Award, Share2 } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    mobileLabel: 'Learn',
    title: 'Learn',
    desc: 'Choose a program and learn in-demand skills.',
    icon: BookOpen,
  },
  {
    step: '02',
    mobileLabel: 'Build',
    title: 'Build',
    desc: 'Work on real-world projects and build your portfolio.',
    icon: Code2,
  },
  {
    step: '03',
    mobileLabel: 'Submit',
    title: 'Submit',
    desc: 'Submit your projects for evaluation.',
    icon: UploadCloud,
  },
  {
    step: '04',
    mobileLabel: 'Certify',
    title: 'Get Certified',
    desc: 'Earn your completion credential.',
    icon: Award,
  },
  {
    step: '05',
    mobileLabel: 'Showcase',
    title: 'Showcase',
    desc: 'Showcase your work on LinkedIn and stand out.',
    icon: Share2,
  },
];

export const HowItWorksRoadmap: React.FC = () => {
  return (
    <section id="how-it-works" className="relative z-10 py-8 sm:py-14 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Mobile View: Compact Horizontal 5-Step Connected Timeline (Matching Reference Design) */}
        <div className="block sm:hidden">
          <div className="text-left mb-4">
            <span className="text-[#2563FF] font-mono font-bold text-[10px] tracking-[0.2em] uppercase block">
              HOW IT WORKS
            </span>
          </div>

          <div className="relative flex items-center justify-between py-2">
            {/* Connecting Dashed Line */}
            <div
              className="absolute top-5 left-4 right-4 h-0.5 border-t border-dashed border-[#2563FF]/30 z-0"
              aria-hidden="true"
            />

            {STEPS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#2563FF]/30 shadow-2xs flex items-center justify-center text-[#2563FF] mb-1">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-[10px] font-mono font-bold text-[#64748B]">
                    {item.step}
                  </div>
                  <div className="text-[10px] font-bold text-[#071B3B]">
                    {item.mobileLabel}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop / Tablet View: Spacious Connected Horizontal 5-Card Roadmap */}
        <div className="hidden sm:block">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-0.5 rounded-full bg-[#2563FF]/10 border border-[#2563FF]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF] inline-block" />
              <span className="text-[#2563FF] font-mono font-bold text-[11px] tracking-[0.2em] uppercase">
                HOW IT WORKS
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#071B3B] tracking-tight">
              How It Works
            </h2>
            <p className="mt-2 text-sm text-[#64748B]">
              A structured 5-step path to learn, build and earn verified credentials.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Dashed Line */}
            <div
              className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-0.5 border-t border-dashed border-[#2563FF]/30 z-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-5 gap-4 relative z-10">
              {STEPS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="bg-[#F8F9FA] rounded-2xl border border-[#E2E8F0] hover:border-[#2563FF]/40 p-4 flex flex-col items-center text-center transition-all duration-200 hover:shadow-[0_10px_25px_rgba(37,99,255,0.06)] group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#E2E8F0] group-hover:border-[#2563FF] flex items-center justify-center text-[#2563FF] shadow-2xs mb-3 transition-transform group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="font-mono text-[10px] font-bold text-[#2563FF] uppercase tracking-wider mb-0.5">
                      {item.step}
                    </span>

                    <h3 className="font-display text-xs sm:text-sm font-bold text-[#071B3B] group-hover:text-[#2563FF] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[11px] text-[#64748B] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
