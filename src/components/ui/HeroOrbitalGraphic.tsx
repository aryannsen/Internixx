import React from 'react';
import { BookOpen, Code2, UploadCloud, Award, Share2 } from 'lucide-react';
import { InternixSymbol } from '../brand/InternixSymbol';

interface StepNode {
  num: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  positionClasses: string;
  nodePosClasses: string;
}

const STEPS: StepNode[] = [
  {
    num: '01',
    title: 'Learn',
    desc: 'Choose a program and learn in-demand skills.',
    icon: BookOpen,
    positionClasses: 'top-[2%] left-[44%] -translate-x-1/2 sm:top-[4%] sm:left-[48%]',
    nodePosClasses: 'top-[14%] left-[48%]',
  },
  {
    num: '02',
    title: 'Build',
    desc: 'Work on real-world projects and build your portfolio.',
    icon: Code2,
    positionClasses: 'top-[22%] right-[-14px] sm:top-[22%] sm:right-[-4px]',
    nodePosClasses: 'top-[36%] right-[8%]',
  },
  {
    num: '03',
    title: 'Submit',
    desc: 'Submit your projects for evaluation.',
    icon: UploadCloud,
    positionClasses: 'bottom-[34%] right-[-20px] sm:bottom-[34%] sm:right-[-10px]',
    nodePosClasses: 'bottom-[42%] right-[10%]',
  },
  {
    num: '04',
    title: 'Get Certified',
    desc: 'Earn your completion credential.',
    icon: Award,
    positionClasses: 'bottom-[2%] left-[46%] -translate-x-1/2 sm:bottom-[4%] sm:left-[48%]',
    nodePosClasses: 'bottom-[12%] left-[44%]',
  },
  {
    num: '05',
    title: 'Showcase',
    desc: 'Showcase your work on LinkedIn and stand out.',
    icon: Share2,
    positionClasses: 'top-[36%] left-[-20px] sm:top-[38%] sm:left-[-12px]',
    nodePosClasses: 'top-[44%] left-[10%]',
  },
];

export const HeroOrbitalGraphic: React.FC = () => {
  return (
    <div className="hero-orbital-container relative w-full max-w-[560px] lg:max-w-[620px] aspect-[1/0.92] sm:aspect-[1/0.88] mx-auto flex items-center justify-center select-none">
      {/* Background Soft Blue Ambient Glow (Top Right) */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,255,0.3) 0%, rgba(29,143,255,0.1) 50%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative Dot Matrix Grid (Bottom Right) */}
      <div
        className="absolute bottom-6 right-6 grid grid-cols-6 gap-2.5 opacity-30 pointer-events-none"
        aria-hidden="true"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-[#2563FF]" />
        ))}
      </div>

      {/* Dotted Orbital Circle */}
      <div
        className="absolute w-[72%] h-[72%] sm:w-[76%] sm:h-[76%] rounded-full border border-dashed border-[#2563FF]/30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Small blue connecting node dots on the orbit */}
      <div className="absolute w-2 h-2 rounded-full bg-[#2563FF] top-[14%] left-[48%] -translate-x-1/2 -translate-y-1/2 shadow-xs" />
      <div className="absolute w-2 h-2 rounded-full bg-[#2563FF] top-[36%] right-[12%] -translate-y-1/2 shadow-xs" />
      <div className="absolute w-2 h-2 rounded-full bg-[#2563FF] bottom-[38%] right-[12%] -translate-y-1/2 shadow-xs" />
      <div className="absolute w-2 h-2 rounded-full bg-[#2563FF] bottom-[14%] left-[44%] -translate-x-1/2 -translate-y-1/2 shadow-xs" />
      <div className="absolute w-2 h-2 rounded-full bg-[#2563FF] top-[48%] left-[14%] -translate-x-1/2 -translate-y-1/2 shadow-xs" />

      {/* Center 3D-effect Geometric INTERNIX Ribbon Emblem */}
      <div className="relative z-10 flex items-center justify-center p-6 sm:p-8 rounded-full bg-white/90 backdrop-blur-sm border border-[#E2E8F0] shadow-[0_20px_50px_rgba(7,27,59,0.1),0_0_30px_rgba(37,99,255,0.12)] group transition-transform duration-300 hover:scale-105">
        <InternixSymbol size={80} className="filter drop-shadow-md" />
      </div>

      {/* 5 Floating Step Cards */}
      {STEPS.map((step) => {
        const Icon = step.icon;
        return (
          <div
            key={step.num}
            className={`absolute ${step.positionClasses} z-20 transition-all duration-300 hover:scale-105 hover:z-30`}
          >
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_10px_30px_-5px_rgba(7,27,59,0.08)] hover:shadow-[0_16px_36px_-6px_rgba(37,99,255,0.16)] p-3 sm:p-3.5 max-w-[160px] sm:max-w-[195px] flex items-start gap-2.5">
              {/* Step Icon in soft squircle */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#2563FF]/10 text-[#2563FF] flex items-center justify-center shrink-0 mt-0.5 border border-[#2563FF]/15">
                <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>

              {/* Text Info */}
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-mono font-bold text-[#64748B] uppercase leading-tight">
                  {step.num}
                </div>
                <h4 className="font-display text-xs sm:text-[13px] font-bold text-[#071B3B] leading-tight truncate">
                  {step.title}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-[#64748B] leading-snug mt-0.5 line-clamp-2">
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
