import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { APPLICATION_FORM_URL } from '../config/site';
import { PROGRAMS } from '../data/programs';
import { ProgramCard } from '../components/programs/ProgramCard';
import { HeroOrbitalGraphic } from '../components/ui/HeroOrbitalGraphic';
import { TrustCollegeAvatars } from '../components/ui/TrustCollegeAvatars';
import { TrustMetricsBento } from '../components/ui/TrustMetricsBento';
import { HowItWorksRoadmap } from '../components/sections/HowItWorksRoadmap';
import { PremiumFinalCTA } from '../components/sections/PremiumFinalCTA';
import { AnnouncementTickerStrip } from '../components/ui/AnnouncementTickerStrip';
import {
  useGsapContext,
  animateHeroEntrance,
  animateHeroScrollTrigger,
  animateProgramCards,
  animateSectionHeaders,
  setupDesktopPointerParallax,
} from '../lib/motionSystem';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const heroBadgeRef = useRef<HTMLSpanElement | null>(null);
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Take the primary 4 featured programs for the landing page
  const featuredPrograms = PROGRAMS.slice(0, 4);

  // GSAP subtle entrance animations
  const pageContainerRef = useGsapContext((_ctx, root) => {
    if (!root) return;
    animateHeroEntrance(root);
    animateHeroScrollTrigger(root);
    animateSectionHeaders(root);
    animateProgramCards(root);
  }, []);

  // Desktop subtle pointer parallax on hero badge
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

  const handleMobileScroll = () => {
    if (!mobileCarouselRef.current) return;
    const scrollLeft = mobileCarouselRef.current.scrollLeft;
    const cardWidth = 280; // approximate width of mobile card + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlide(Math.min(Math.max(index, 0), featuredPrograms.length - 1));
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!mobileCarouselRef.current) return;
    const scrollAmount = direction === 'left' ? -290 : 290;
    mobileCarouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div
      ref={pageContainerRef}
      className="relative w-full max-w-full overflow-x-hidden bg-[#F8F9FA]"
    >
      {/* Soft Ambient Background Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 w-full max-w-full overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(37, 99, 255, 0.08) 0%, rgba(29, 143, 255, 0.02) 50%, transparent 80%)',
          }}
        />
        <div className="absolute inset-0 bg-subtle-grid opacity-50" />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO (Build skills. Gain practical experience.)                */}
      {/* ========================================================================= */}
      <section className="relative z-10 pt-6 pb-8 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-16 border-b border-[#E2E8F0] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* LEFT COLUMN: Main Headline, CTAs, and Trust Avatars */}
            <div className="hero-content-col w-full lg:col-span-6 xl:col-span-6 flex flex-col items-start will-change-transform">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-2.5">
                <span
                  ref={heroBadgeRef}
                  className="hero-eyebrow text-[#2563FF] font-mono font-bold text-[10.5px] sm:text-[12px] tracking-[0.2em] uppercase select-none will-change-transform"
                >
                  FREE ONLINE INTERNSHIP PROGRAMS
                </span>
              </div>

              {/* Headline */}
              <h1 className="hero-headline font-display text-[32px] sm:text-5xl lg:text-[52px] xl:text-[56px] font-extrabold text-[#071B3B] tracking-tight leading-[1.12] will-change-transform">
                Build skills.<br />
                Gain practical<br />
                <span className="text-[#2563FF]">experience.</span>
              </h1>

              {/* Supporting Text */}
              <p className="hero-text mt-3 sm:mt-4 text-xs sm:text-base text-[#475569] leading-relaxed max-w-lg font-normal will-change-transform">
                Project-based online internship programs designed to help students learn, build and grow.
              </p>

              {/* CTAs Row */}
              <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
                <a
                  href={APPLICATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta bg-[#2563FF] hover:bg-[#1D8FFF] active:bg-[#1D8FFF] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-[14px] font-semibold transition-all duration-150 inline-flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_16px_rgba(37,99,255,0.3)] will-change-transform"
                >
                  <span>Apply for Internship</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={scrollToPrograms}
                  className="hero-cta bg-white hover:bg-[#F8F9FA] text-[#071B3B] border border-[#CBD5E1] hover:border-[#071B3B] px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-[14px] font-semibold transition-colors duration-150 inline-flex items-center justify-center gap-2 cursor-pointer will-change-transform shadow-2xs"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 text-[#2563FF]" />
                </button>
              </div>

              {/* Trust Section with 6 College Seals */}
              <TrustCollegeAvatars />
            </div>

            {/* RIGHT COLUMN: Orbital Student Lifecycle Visual (Desktop & Tablet) */}
            <div className="hero-credential-col w-full lg:col-span-6 xl:col-span-6 flex items-center justify-center will-change-transform">
              <HeroOrbitalGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: EXPLORE PROGRAMS (Desktop 4-Grid / Mobile 1.25x Scrollable)    */}
      {/* ========================================================================= */}
      <section id="available-programs" className="relative z-10 py-8 sm:py-12 lg:py-14 border-b border-[#E2E8F0] bg-[#F8F9FA]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div data-reveal="header" className="flex items-center justify-between gap-4 mb-5 sm:mb-8">
            <div>
              <span className="text-[#2563FF] font-mono font-bold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase block mb-1">
                <span className="sm:hidden">OUR PROGRAMS</span>
                <span className="hidden sm:inline">OUR INTERNSHIP PROGRAMS</span>
              </span>
              <h2 className="font-display text-xl sm:text-3xl font-extrabold text-[#071B3B] tracking-tight">
                Explore Programs
              </h2>
            </div>

            <button
              type="button"
              onClick={() => navigate('/programs')}
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#2563FF] hover:text-[#1D8FFF] cursor-pointer group"
            >
              <span className="sm:hidden">View all</span>
              <span className="hidden sm:inline">View all programs</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Desktop / Tablet View: 4-Card Horizontal Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative">
            {featuredPrograms.map((program, idx) => (
              <ProgramCard key={program.id} program={program} index={idx} />
            ))}

            {/* Desktop subtle carousel arrow indicator button on the right edge */}
            <button
              type="button"
              onClick={() => navigate('/programs')}
              className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-[#E2E8F0] shadow-md items-center justify-center text-[#071B3B] hover:text-[#2563FF] hover:border-[#2563FF] transition-all cursor-pointer z-20"
              aria-label="View more programs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile View: Horizontal Scroll Carousel (~1.25 cards visible, smoothly swipeable) */}
          <div className="block sm:hidden">
            <div
              ref={mobileCarouselRef}
              onScroll={handleMobileScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-3 pt-1 no-scrollbar -mx-4 px-4 scroll-smooth"
            >
              {featuredPrograms.map((program, idx) => (
                <div key={program.id} className="w-[82%] min-w-[275px] max-w-[310px] shrink-0 snap-start">
                  <ProgramCard program={program} index={idx} />
                </div>
              ))}
            </div>

            {/* Mobile Carousel Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-2">
              {featuredPrograms.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    activeSlide === idx ? 'w-4 bg-[#2563FF]' : 'w-1.5 bg-[#CBD5E1]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: HOW IT WORKS (Connected 5-Step Roadmap)                         */}
      {/* ========================================================================= */}
      <HowItWorksRoadmap />

      {/* ========================================================================= */}
      {/* SECTION 4: STATS STRIP (25,000+ Students, 50+ Programs, 8,000+ Projects)   */}
      {/* ========================================================================= */}
      <TrustMetricsBento />

      {/* ========================================================================= */}
      {/* SECTION 5: FINAL CTA (Start Your Internship Journey Today)                */}
      {/* ========================================================================= */}
      <PremiumFinalCTA onExploreClick={scrollToPrograms} />

      {/* ========================================================================= */}
      {/* SECTION 6: ANNOUNCEMENT TICKER STRIP (Directly above footer)              */}
      {/* ========================================================================= */}
      <AnnouncementTickerStrip />
    </div>
  );
};
