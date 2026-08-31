import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { MENTORS } from '../../data/mentors';
import { MentorCard } from '../mentors/MentorCard';
import { useRouter } from '../../context/RouterContext';

export const EducatorsMentorsSection: React.FC = () => {
  const { navigate } = useRouter();
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update carousel pagination and arrows on scroll
  const updateScrollState = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    
    // Estimate active slide
    const cardWidth = 270;
    const newActive = Math.round(scrollLeft / cardWidth);
    setActiveSlide(Math.min(Math.max(newActive, 0), MENTORS.length - 1));
    
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const cardWidth = 280;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const scrollToSlide = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = 280;
    carouselRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    const section = document.getElementById('available-programs');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/programs');
    }
  };

  return (
    <section
      id="mentors-section"
      aria-labelledby="mentors-heading"
      className="relative z-10 py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0] bg-white overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* AMBIENT BACKGROUND: Clean light base, subtle grid & slow breathing glow  */}
      {/* ========================================================================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-dot-grid opacity-35" />

        {/* Slow, nearly imperceptible ambient radial blue glow that drifts (8-12s cycle) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[450px] rounded-full blur-[100px] opacity-35 pointer-events-none animate-pulse"
          style={{
            animationDuration: '10s',
            background: 'radial-gradient(ellipse at center, rgba(0, 72, 217, 0.08) 0%, rgba(37, 99, 235, 0.04) 45%, transparent 75%)',
          }}
        />
        
        {/* Top & bottom boundary highlight line */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* ======================================================================= */}
        {/* SECTION HEADER: Eyebrow, Main Title, Subtitle, and Trust Label          */}
        {/* ======================================================================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          {/* Eyebrow Pill */}
          <div className="mentor-eyebrow inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0048D9]/5 border border-[#0048D9]/15 text-[#0048D9] text-[11px] sm:text-xs font-mono font-bold tracking-[0.18em] uppercase mb-3.5 select-none shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#0048D9]" />
            <span>LEARN. BUILD. GROW. – WITH EXPERT GUIDANCE</span>
          </div>

          {/* Main Title */}
          <h2
            id="mentors-heading"
            className="mentor-heading font-display text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#071B3B] tracking-tight leading-[1.2]"
          >
            Trusted by{' '}
            <span className="text-[#0048D9] relative inline-block">
              Educators &amp; Industry Mentors
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mentor-subtitle mt-3 sm:mt-4 text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl font-normal">
            Guided by experienced professionals from leading tech companies and top institutions.
          </p>

          {/* Trust Label above the cards */}
          <div className="mentor-trust-label mt-4 inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#64748B] bg-[#F8F9FA] px-3.5 py-1.5 rounded-lg border border-[#E2E8F0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0048D9]" />
            <span>Built around practical learning and industry-relevant skills.</span>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* MENTOR CARDS: Desktop 6-Grid / Tablet 3-Grid / Mobile Snap Carousel     */}
        {/* ======================================================================= */}
        
        {/* DESKTOP (1024px+): 6 Cards in One Single Horizontal Row */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-3.5 xl:gap-4 w-full">
          {MENTORS.map((mentor, idx) => (
            <MentorCard
              key={mentor.id}
              mentor={mentor}
              index={idx}
              isFirst={idx === 0}
            />
          ))}
        </div>

        {/* TABLET (640px - 1023px): 3 Cards per Row (2 Rows) */}
        <div className="hidden sm:grid lg:hidden sm:grid-cols-3 gap-4 w-full">
          {MENTORS.map((mentor, idx) => (
            <MentorCard
              key={mentor.id}
              mentor={mentor}
              index={idx}
              isFirst={idx === 0}
            />
          ))}
        </div>

        {/* MOBILE (<640px): Smooth Snap Carousel (~85-90% active card visible) */}
        <div className="block sm:hidden relative -mx-4 px-4">
          <div
            ref={carouselRef}
            tabIndex={0}
            aria-label="Mentors Carousel"
            className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-4 pt-1 no-scrollbar scroll-smooth outline-hidden focus-visible:ring-2 focus-visible:ring-[#0048D9]"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {MENTORS.map((mentor, idx) => (
              <div
                key={mentor.id}
                className="w-[86%] min-w-[260px] max-w-[300px] shrink-0 snap-center"
              >
                <MentorCard
                  mentor={mentor}
                  index={idx}
                  isFirst={idx === 0}
                />
              </div>
            ))}
          </div>

          {/* Mobile Carousel Controls & Pagination Dots */}
          <div className="flex items-center justify-between mt-2 px-1">
            {/* Left Button */}
            <button
              type="button"
              onClick={() => scrollCarousel('left')}
              disabled={!canScrollLeft}
              aria-label="Previous mentor"
              className={`w-8 h-8 rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center text-[#071B3B] transition-all shadow-2xs ${
                canScrollLeft ? 'opacity-100 active:scale-95' : 'opacity-40 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Carousel pagination">
              {MENTORS.map((m, idx) => (
                <button
                  key={m.id}
                  type="button"
                  role="tab"
                  aria-selected={activeSlide === idx}
                  aria-label={`Go to mentor ${idx + 1}: ${m.name}`}
                  onClick={() => scrollToSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    activeSlide === idx ? 'w-5 bg-[#0048D9]' : 'w-1.5 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                  }`}
                />
              ))}
            </div>

            {/* Right Button */}
            <button
              type="button"
              onClick={() => scrollCarousel('right')}
              disabled={!canScrollRight}
              aria-label="Next mentor"
              className={`w-8 h-8 rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center text-[#071B3B] transition-all shadow-2xs ${
                canScrollRight ? 'opacity-100 active:scale-95' : 'opacity-40 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* BOTTOM ACTION: Secondary "Explore learning programs →" CTA Link         */}
        {/* ======================================================================= */}
        <div className="mentor-cta-bottom mt-8 sm:mt-12 flex items-center justify-center">
          <button
            type="button"
            onClick={handleExploreClick}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#071B3B] hover:text-[#0048D9] border border-[#CBD5E1] hover:border-[#0048D9]/40 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-2xs hover:shadow-sm cursor-pointer"
          >
            <span>Explore learning programs</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0048D9] group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};
