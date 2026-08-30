import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { APPLICATION_FORM_URL } from '../../config/site';

export interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to start building?",
  description = "Choose a program and take your first step into practical learning.",
  primaryCtaText = "Apply for Internship",
  primaryCtaHref = APPLICATION_FORM_URL,
  secondaryCtaText = "View Programs",
  secondaryCtaHref = "/programs",
  className = "",
}) => {
  const { navigate } = useRouter();

  return (
    <section className={`py-14 sm:py-20 bg-[#F8F9FA] border-t border-[#E2E8F0] ${className}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div data-reveal="cta-section" className="reveal-on-scroll bg-[#0F172A] rounded-2xl p-8 sm:p-12 md:p-14 text-center text-white border border-[#0F172A] relative">
          <div className="max-w-xl mx-auto flex flex-col items-center">
            <span className="text-[#3B82F6] font-bold text-[11px] tracking-[0.2em] uppercase mb-3 block">
              COHORT ADMISSIONS OPEN
            </span>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              {title}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed font-normal max-w-lg">
              {description}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <a
                href={primaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#0048D9] text-white px-6 py-3 rounded-xl text-[14px] font-semibold hover:bg-[#003BB3] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{primaryCtaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {secondaryCtaHref && (
                <button
                  type="button"
                  onClick={() => navigate(secondaryCtaHref)}
                  className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white px-6 py-3 rounded-xl text-[14px] font-semibold transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{secondaryCtaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            <p className="mt-5 text-[11px] text-[#64748B] font-medium tracking-wide uppercase">
              100% Online • 4-Week Milestone Schedule • Verified Completion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
