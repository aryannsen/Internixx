import React, { useRef, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, QrCode, ArrowUpRight, Lock, Award, Sparkles } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { setupHeroCredentialMotion } from '../../lib/motionSystem';

export const HeroCredentialVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const shineRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const { navigate } = useRouter();

  useEffect(() => {
    if (!containerRef.current || !cardRef.current) return;

    const cleanup = setupHeroCredentialMotion({
      container: containerRef.current,
      card: cardRef.current,
      badge: badgeRef.current,
      shine: shineRef.current,
      glow: glowRef.current,
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-credential-container relative w-full max-w-[480px] lg:max-w-[520px] mx-auto lg:ml-auto select-none will-change-transform"
      style={{ perspective: '1200px' }}
    >
      {/* 
        Subtle Ambient Gradient Glow & Geometric Grid Accent behind Card 
      */}
      <div
        ref={glowRef}
        className="hero-credential-glow absolute -inset-4 sm:-inset-6 rounded-3xl opacity-60 pointer-events-none blur-2xl transition-opacity will-change-transform"
        style={{
          background: 'radial-gradient(ellipse at 55% 45%, rgba(0, 72, 217, 0.15) 0%, rgba(99, 102, 241, 0.08) 40%, rgba(248, 249, 250, 0) 75%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative Technical Background Circuit/Grid Lines (Ultra-Subtle) */}
      <div
        className="absolute -inset-2 rounded-2xl border border-[#0048D9]/10 bg-radial from-transparent to-white/40 pointer-events-none opacity-75"
        aria-hidden="true"
      />

      {/* 
        MAIN CREDENTIAL CARD
      */}
      <div
        ref={cardRef}
        className="hero-credential-card relative z-10 bg-white/95 backdrop-blur-md rounded-2xl border border-[#E2E8F0] shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08),0_0_1px_1px_rgba(0,72,217,0.05)] overflow-hidden transition-all duration-300 will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Light Sweep / Specular Shimmer */}
        <div
          ref={shineRef}
          className="hero-credential-shine pointer-events-none absolute inset-0 -translate-x-full w-[200%] h-full z-30 opacity-0 will-change-transform"
          style={{
            background:
              'linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.6) 45%, rgba(0, 72, 217, 0.15) 50%, rgba(255, 255, 255, 0.7) 55%, transparent 75%)',
          }}
          aria-hidden="true"
        />

        {/* Top Accent Strip: Crisp Internix Blue Precision Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0048D9] via-[#2563EB] to-[#60A5FA]" />

        <div className="p-5 sm:p-6 lg:p-7 flex flex-col gap-5">
          {/* Header Row: Brand + Program Tag */}
          <div className="flex items-start justify-between gap-3 border-b border-[#F1F3F5] pb-4">
            <div className="flex items-center gap-2.5">
              {/* Minimal Geometric Logo Mark */}
              <div className="w-8 h-8 rounded-lg bg-[#0048D9] flex items-center justify-center text-white shadow-xs">
                <span className="font-display font-extrabold text-sm tracking-tight">IX</span>
              </div>
              <div>
                <div className="font-display font-extrabold text-[13px] text-[#0F172A] tracking-wider uppercase flex items-center gap-1.5">
                  <span>INTERNIX</span>
                </div>
                <div className="text-[10px] text-[#64748B] font-semibold tracking-wider uppercase">
                  Student Programs
                </div>
              </div>
            </div>

            {/* Program Track Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] text-[11px] font-semibold text-[#0F172A] tracking-tight">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0048D9]" />
              <span>4 WEEK PROGRAM</span>
            </div>
          </div>

          {/* Body: Credential Title & Subject */}
          <div className="space-y-1">
            <div className="text-[11px] font-bold text-[#64748B] tracking-[0.16em] uppercase">
              INTERNSHIP COMPLETION
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-[#0F172A] tracking-tight flex items-baseline justify-between gap-2">
              <span>Frontend Development</span>
            </div>
            <p className="text-xs text-[#64748B] font-normal leading-relaxed pt-0.5">
              Awarded upon successful review of structured industry-standard milestones & codebase requirements.
            </p>
          </div>

          {/* Middle Meta Grid: Two Column Verification Specs */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0]/80">
            <div>
              <span className="block text-[10px] font-bold text-[#64748B] tracking-wider uppercase mb-1">
                COMPLETION STATUS
              </span>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#059669]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Verified</span>
              </div>
            </div>

            <div>
              <span className="block text-[10px] font-bold text-[#64748B] tracking-wider uppercase mb-1">
                CERTIFICATE ID
              </span>
              <div className="font-mono text-xs font-semibold text-[#0F172A] tracking-tight">
                INTX-2026-XXXX
              </div>
            </div>
          </div>

          {/* Footer Interactive Row: Verification System Element */}
          <div className="pt-2 flex items-center justify-between gap-3 border-t border-[#F1F3F5]">
            <div className="flex items-center gap-2 text-[#475569]">
              <div className="w-8 h-8 rounded-lg bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center text-[#0F172A]">
                <QrCode className="w-4 h-4 text-[#0F172A]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wide">
                  Public Ledger
                </span>
                <span className="text-[10px] text-[#64748B] font-mono">
                  internix.dev/verify
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate('/verify')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8F9FA] hover:bg-[#0048D9] text-[#0048D9] hover:text-white border border-[#E2E8F0] hover:border-[#0048D9] text-xs font-semibold transition-all duration-200 cursor-pointer group"
            >
              <span>Verify Credential</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* 
        FLOATING VERIFICATION BADGE (Appears right after card)
      */}
      <div
        ref={badgeRef}
        className="hero-credential-badge absolute -bottom-3.5 -left-3 sm:-left-4 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-[#E2E8F0] shadow-[0_10px_25px_-5px_rgba(15,23,42,0.1)] px-3.5 py-2.5 flex items-center gap-2.5 select-none will-change-transform"
      >
        <div className="w-6 h-6 rounded-md bg-[#0048D9]/10 text-[#0048D9] flex items-center justify-center">
          <ShieldCheck className="w-3.5 h-3.5" />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-[#0F172A] leading-tight flex items-center gap-1">
            Tamper-Resistant ID
          </span>
          <span className="text-[10px] text-[#64748B] leading-tight">
            Encrypted Verification
          </span>
        </div>
      </div>

      {/* Floating Mini Milestone Badge (Top-Right) */}
      <div className="hidden sm:flex absolute -top-3.5 -right-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-[#E2E8F0] shadow-[0_10px_25px_-5px_rgba(15,23,42,0.1)] px-3 py-1.5 items-center gap-2 select-none">
        <Award className="w-3.5 h-3.5 text-[#0048D9]" />
        <span className="text-[11px] font-semibold text-[#0F172A]">
          Direct Portfolio Proof
        </span>
      </div>
    </div>
  );
};
