import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Code2, Globe, Award, ShieldCheck, FileCheck, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { APPLICATION_FORM_URL } from '../config/site';
import { PROGRAMS, PROGRAM_FILTER_CATEGORIES, FilterCategory } from '../data/programs';
import { ProgramCard } from '../components/programs/ProgramCard';
import { HeroCredentialVisual } from '../components/ui/HeroCredentialVisual';
import {
  useGsapContext,
  animateHeroEntrance,
  animateHeroScrollTrigger,
  animateProgramCards,
  animateSectionHeaders,
  animateBuildCredentialSection,
  animateWhyInternix,
  animateHowItWorksSteps,
  animateCtaBoxes,
  animateBackgroundParallax,
  setupDesktopPointerParallax,
} from '../lib/motionSystem';

const BUILD_CREDENTIAL_FEATURES = [
  {
    num: '01',
    title: 'PRACTICAL EXPERIENCE',
    desc: 'Build and submit project-based tasks designed around your selected internship track.',
    icon: Code2,
  },
  {
    num: '02',
    title: 'COMPLETION CERTIFICATE',
    desc: 'Receive an Internix internship completion certificate after successfully completing the required program work.',
    icon: Award,
  },
  {
    num: '03',
    title: 'SHOWCASE YOUR WORK',
    desc: 'Add your internship experience and certificate details to your resume, LinkedIn profile, and portfolio.',
    icon: Share2,
  },
];

const WHY_INTERNIX_BENEFITS = [
  {
    num: '01',
    title: 'PRACTICAL PROJECTS',
    desc: 'Work on structured, real-world style tasks instead of only watching lessons.',
    icon: Code2,
  },
  {
    num: '02',
    title: 'FLEXIBLE ONLINE FORMAT',
    desc: 'Complete your internship remotely with a simple and student-friendly workflow.',
    icon: Globe,
  },
  {
    num: '03',
    title: 'COMPLETION CERTIFICATE',
    desc: 'Eligible participants receive an Internix completion certificate after fulfilling the program requirements.',
    icon: Award,
  },
  {
    num: '04',
    title: 'VERIFIABLE RECORD',
    desc: 'Certificates can include a unique certificate ID and verification information.',
    icon: ShieldCheck,
  },
];

const HOW_IT_WORKS_SIMPLE_STEPS = [
  {
    num: '01',
    title: 'Choose a Program',
    desc: 'Select a track aligned with the technical skills you want to build.',
  },
  {
    num: '02',
    title: 'Apply Online',
    desc: 'Submit your application details through the official cohort form.',
  },
  {
    num: '03',
    title: 'Complete the Program',
    desc: 'Build practical project tasks and earn a verifiable completion certificate.',
  },
];

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('ALL');
  const heroBadgeRef = useRef<HTMLSpanElement | null>(null);

  // Filter programs based on selected category
  const filteredPrograms = PROGRAMS.filter((program) => {
    if (selectedCategory === 'ALL') return true;
    return program.category === selectedCategory;
  });

  // Centralized GSAP animation lifecycle management
  const pageContainerRef = useGsapContext((_ctx, root) => {
    if (!root) return;

    // 1. Initial Hero Staged Sequence
    animateHeroEntrance(root);

    // 2. Hero Scroll Parallax Trigger
    animateHeroScrollTrigger(root);

    // 3. Section Headers ScrollTriggers
    animateSectionHeaders(root);

    // 4. Build Your Credential Trust Section Stagger
    animateBuildCredentialSection(root);

    // 5. Program Cards Grid Entrance & Internal Stagger
    animateProgramCards(root);

    // 6. Why Internix Benefit Blocks Stagger
    animateWhyInternix(root);

    // 7. How It Works Step Cards Reveal
    animateHowItWorksSteps(root);

    // 8. CTA Visual Box Entrance
    animateCtaBoxes(root);

    // 9. Ambient Background Subtle Parallax
    animateBackgroundParallax(root);
  }, [selectedCategory]);

  // Desktop-only subtle pointer micro-interaction for hero badge
  useEffect(() => {
    if (!heroBadgeRef.current) return;
    const cleanup = setupDesktopPointerParallax(heroBadgeRef.current, 3);
    return cleanup;
  }, []);

  const scrollToPrograms = () => {
    const section = document.getElementById('available-programs');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={pageContainerRef}
      className="relative w-full max-w-full overflow-x-hidden bg-[#F8F9FA]"
    >
      {/* 
        PREMIUM SUBTLE AMBIENT BACKGROUND:
        Soft ambient depth with calm vertical scroll parallax.
      */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 w-full max-w-full overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="ambient-bg-motion absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-3xl opacity-40 pointer-events-none will-change-transform"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 72, 217, 0.08) 0%, rgba(37, 99, 235, 0.02) 50%, transparent 80%)',
          }}
        />
        <div
          className="absolute inset-0 bg-subtle-grid opacity-60"
        />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO (Staged Entrance on Initial Load & Two-Column on Desktop) */}
      {/* ========================================================================= */}
      <section className="relative z-10 pt-8 pb-10 sm:pt-14 sm:pb-14 lg:pt-18 lg:pb-20 border-b border-[#E2E8F0] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN: Main Typography & CTAs (Full width on mobile/tablet, 7 cols on desktop) */}
            <div className="hero-content-col w-full lg:col-span-7 flex flex-col items-start will-change-transform">
              {/* Small Eyebrow */}
              <span
                ref={heroBadgeRef}
                className="hero-eyebrow text-[#0048D9] font-semibold text-[11px] sm:text-[12px] tracking-[0.2em] uppercase mb-2.5 inline-block select-none will-change-transform"
              >
                FREE ONLINE INTERNSHIP PROGRAMS
              </span>

              {/* Headline */}
              <h1 className="hero-headline font-display text-3xl sm:text-5xl lg:text-[50px] xl:text-[54px] font-bold text-[#0F172A] tracking-tight leading-[1.12] will-change-transform">
                Build skills.<br />
                Gain practical experience.
              </h1>

              {/* Short Supporting Text */}
              <p className="hero-text mt-3.5 sm:mt-4 text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl font-normal will-change-transform">
                Explore practical online internship programs designed for students.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  href={APPLICATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta bg-[#0048D9] text-white px-6 py-3 rounded-xl text-[14px] font-semibold hover:bg-[#003BB3] transition-colors duration-150 inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs will-change-transform"
                >
                  <span>Apply for Internship</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={scrollToPrograms}
                  className="hero-cta bg-transparent hover:bg-[#F1F3F5] text-[#0F172A] border border-[#0F172A] px-6 py-3 rounded-xl text-[14px] font-semibold transition-colors duration-150 inline-flex items-center justify-center gap-2 cursor-pointer will-change-transform"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 text-[#0F172A]" />
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Desktop/Laptop ONLY (1024px+). Completely removed/hidden below 1024px */}
            <div className="hero-credential-col hidden lg:flex lg:col-span-5 w-full items-center justify-end will-change-transform">
              <HeroCredentialVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 1.5: BUILD YOUR CREDENTIAL (Trust & Career Value Section)         */}
      {/* ========================================================================= */}
      <section
        id="build-credential"
        className="relative z-10 py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0] bg-white scroll-mt-16 sm:scroll-mt-[72px]"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Main Two-Column Layout (Content on left, realistic preview on right on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtext & 3 Feature Items */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Section Header */}
              <div data-reveal="credential-header" className="max-w-2xl mb-8 sm:mb-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0048D9] inline-block" />
                  <span className="text-[#0048D9] font-semibold text-[11px] sm:text-[12px] tracking-[0.2em] uppercase">
                    CREDENTIAL VALUE
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
                  Build Experience. Earn Your Credential.
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
                  Complete your internship projects and receive an Internix completion certificate you can showcase on your resume and LinkedIn profile.
                </p>
              </div>

              {/* 3 Horizontal Feature Items */}
              <div className="space-y-4 sm:space-y-5">
                {BUILD_CREDENTIAL_FEATURES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.num}
                      className="credential-feature-item flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-colors"
                    >
                      {/* Number & Icon Badge */}
                      <div className="flex flex-col items-center gap-1.5 shrink-0 pt-0.5">
                        <span className="font-mono text-xs font-bold text-[#0048D9] bg-white border border-[#E2E8F0] px-2 py-0.5 rounded-md leading-none select-none">
                          {item.num}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0F172A]">
                          <Icon className="w-3.5 h-3.5 text-[#0048D9]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-xs sm:text-sm font-bold text-[#0F172A] tracking-wider uppercase leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Premium Footer Tagline */}
              <div
                data-reveal="credential-footer-tag"
                className="mt-6 pt-5 border-t border-[#F1F3F5] flex items-center gap-2 text-xs font-semibold text-[#64748B] tracking-wide"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0048D9]" />
                <span className="font-medium text-[#0F172A]">Your work. Your experience. Your credential.</span>
              </div>
            </div>

            {/* Right Column: Small Realistic Certificate Visual Preview (Desktop/Laptop Only) */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
              <div className="credential-preview-card w-full max-w-[420px] bg-[#FAFAF9] rounded-2xl border border-[#E2E8F0] p-6 shadow-[0_15px_35px_-10px_rgba(15,23,42,0.06)] relative overflow-hidden select-none">
                {/* Subtle Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0048D9] via-[#2563EB] to-[#60A5FA]" />

                {/* Watermark/Preview Indicator */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#0048D9] flex items-center justify-center text-white font-bold text-xs">
                      IX
                    </div>
                    <div>
                      <span className="block font-display text-xs font-extrabold text-[#0F172A] tracking-wider uppercase leading-none">
                        INTERNIX
                      </span>
                      <span className="text-[9px] text-[#64748B] font-semibold tracking-wider uppercase leading-none mt-0.5">
                        STUDENT PROGRAMS
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#64748B] bg-white border border-[#E2E8F0] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Visual Preview
                  </span>
                </div>

                {/* Certificate Core Text */}
                <div className="space-y-2 text-center py-3">
                  <span className="text-[10px] font-bold text-[#64748B] tracking-[0.18em] uppercase block">
                    INTERNSHIP COMPLETION CERTIFICATE
                  </span>
                  <div className="text-base font-display font-bold text-[#0F172A]">
                    Program: Frontend Development
                  </div>
                  <p className="text-[11px] text-[#64748B] font-normal leading-relaxed max-w-[280px] mx-auto">
                    Issued upon successful evaluation of project tasks, deliverables, and milestone criteria.
                  </p>
                </div>

                {/* Meta Verification Strip */}
                <div className="mt-4 pt-3.5 border-t border-[#E2E8F0] grid grid-cols-2 gap-2 text-left bg-white p-3 rounded-xl border border-[#E2E8F0]/70">
                  <div>
                    <span className="block text-[9px] font-bold text-[#64748B] uppercase tracking-wider">
                      Certificate ID
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-[#0F172A]">
                      INTX-2026-XXXX
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-bold text-[#64748B] uppercase tracking-wider">
                      Status
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#059669]">
                      <CheckCircle2 className="w-3 h-3" />
                      COMPLETED
                    </span>
                  </div>
                </div>

                {/* Bottom Verification Note */}
                <div className="mt-3.5 text-center">
                  <span className="text-[10px] text-[#94A3B8] font-mono">
                    Verifiable on internix.dev/verify
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: AVAILABLE PROGRAMS + COMPACT CATEGORY ROW                      */}
      {/* ========================================================================= */}
      <section id="available-programs" className="relative z-10 py-10 sm:py-14 lg:py-18 border-b border-[#E2E8F0] bg-[#F8F9FA]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div data-reveal="header" className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#0048D9] font-semibold text-[11px] tracking-[0.2em] uppercase">
                  AVAILABLE PROGRAMS
                </span>
                <span className="text-[#CBD5E1]">•</span>
                <span className="text-[#64748B] font-bold text-[10.5px] tracking-[0.15em] uppercase">
                  FREE TO JOIN
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                Choose your track
              </h2>
            </div>

            <span className="text-xs font-semibold text-[#64748B]">
              {filteredPrograms.length} {filteredPrograms.length === 1 ? 'Program' : 'Programs'} Available
            </span>
          </div>

          {/* 
            CATEGORY NAVIGATION ROW:
            Simple category buttons in ONE HORIZONTAL ROW.
            Horizontal scroll allowed ONLY on this row for small screens.
          */}
          <div data-reveal="categories" className="w-full overflow-x-auto pb-2 pt-1 scrollbar-none mb-8">
            <div className="flex items-center gap-2 min-w-max">
              {PROGRAM_FILTER_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-[#0F172A] text-white shadow-xs'
                        : 'bg-white text-[#475569] border border-[#E2E8F0] hover:text-[#0F172A] hover:border-[#0F172A]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-6">
            {filteredPrograms.map((program, idx) => (
              <ProgramCard key={program.id} program={program} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WHY INTERNIX (Premium Editorial Benefit Blocks)               */}
      {/* ========================================================================= */}
      <section
        id="why-internix"
        className="relative z-10 py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0] bg-white scroll-mt-16 sm:scroll-mt-[72px]"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div data-reveal="why-header" className="max-w-2xl mb-10 sm:mb-12 lg:mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0048D9] inline-block" />
              <span className="text-[#0048D9] font-semibold text-[11px] sm:text-[12px] tracking-[0.2em] uppercase">
                WHY INTERNIX
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
              Why Students Choose Internix
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
              Everything you need to turn an online internship into practical, portfolio-ready experience.
            </p>
          </div>

          {/* 4 Premium Benefit Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E2E8F0] border-t border-[#E2E8F0] pt-8 sm:pt-10">
            {WHY_INTERNIX_BENEFITS.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.num}
                  className={`why-benefit-item flex flex-col justify-between ${
                    idx === 0
                      ? 'lg:pr-8'
                      : idx === 3
                      ? 'lg:pl-8'
                      : 'lg:px-8'
                  }`}
                >
                  <div>
                    {/* Top Row: Large Subtle Number & Minimal Icon */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="font-mono text-3xl sm:text-4xl font-bold text-[#94A3B8]/60 tracking-tight select-none">
                        {benefit.num}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#F8F9FA] border border-[#E2E8F0] flex items-center justify-center text-[#0048D9]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Benefit Title with Small Blue Accent Indicator */}
                    <h3 className="font-display text-[13px] sm:text-[14px] font-bold text-[#0F172A] tracking-wider uppercase leading-snug flex items-center gap-2">
                      <span className="w-1 h-3 rounded-full bg-[#0048D9] shrink-0" />
                      <span>{benefit.title}</span>
                    </h3>

                    {/* Benefit Description */}
                    <p className="mt-2.5 text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: HOW IT WORKS (3 Simple Steps, Compact & Stationary)            */}
      {/* ========================================================================= */}
      <section
        id="how-it-works"
        className="relative z-10 py-10 sm:py-14 lg:py-16 border-b border-[#E2E8F0] bg-white scroll-mt-16 sm:scroll-mt-[72px] w-full max-w-full"
        style={{ isolation: 'isolate' }}
      >
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-12 box-border">
          {/* Section Header */}
          <div data-reveal="how-header" className="max-w-xl mb-7 sm:mb-9">
            <span className="text-[#0048D9] font-semibold text-[11px] tracking-[0.2em] uppercase block mb-1">
              HOW IT WORKS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
              Three simple steps
            </h2>
          </div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 w-full">
            {HOW_IT_WORKS_SIMPLE_STEPS.map((step, idx) => (
              <div
                key={step.num}
                data-reveal="step-card"
                className="how-step-card bg-[#F8F9FA] border border-[#E2E8F0] rounded-2xl p-5 sm:p-6 flex flex-col justify-between h-full min-h-[150px] w-full max-w-full box-border shadow-xs hover:border-[#0F172A] transition-colors"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#0048D9] bg-[#F1F3F5] border border-[#E2E8F0] px-2.5 py-1 rounded-md inline-block mb-3 leading-none select-none">
                    {step.num}
                  </span>
                  <h3 className="font-display text-base font-bold text-[#0F172A] leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: FINAL CTA (Minimal, Strong, One-Focus Action)                  */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-10 sm:py-14 bg-[#F8F9FA]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div data-reveal="cta-box" className="bg-[#0F172A] rounded-2xl p-7 sm:p-10 md:p-12 text-center text-white border border-[#0F172A]">
            <div className="max-w-xl mx-auto flex flex-col items-center">
              <span className="text-[#3B82F6] font-semibold text-[11px] tracking-[0.2em] uppercase mb-2 block">
                COHORT ADMISSIONS OPEN
              </span>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Ready to start building?
              </h2>

              <p className="mt-2.5 text-sm sm:text-base text-[#94A3B8] leading-relaxed font-normal max-w-md">
                Choose a program and take your first step into practical learning.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto">
                <a
                  href={APPLICATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0048D9] text-white px-6 py-3 rounded-xl text-[14px] font-semibold hover:bg-[#003BB3] transition-colors duration-150 inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Apply for Internship</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={scrollToPrograms}
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white px-6 py-3 rounded-xl text-[14px] font-semibold transition-colors duration-150 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="mt-5 text-[11px] text-[#64748B] font-medium tracking-wide uppercase">
                100% Online • 1-Month Program • Verified Completion
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
