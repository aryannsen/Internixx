import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { APPLICATION_FORM_URL } from '../../config/site';
import { useRouter } from '../../context/RouterContext';

export const StickyMobileCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      // Show only when scrolled past the top hero (~240px)
      if (window.scrollY > 240) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-[#CBD5E1] shadow-[0_-4px_20px_rgba(15,23,42,0.08)] px-4 py-2.5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] font-bold text-[#0048D9] uppercase tracking-wider leading-none">
            COHORT 2026
          </span>
          <span className="text-xs font-semibold text-[#0F172A] leading-tight mt-0.5">
            100% Free Online Tracks
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={APPLICATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0048D9] active:bg-[#003BB3] text-white px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1 shadow-sm transition-transform active:scale-95"
          >
            <span>Apply Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </aside>
  );
};
