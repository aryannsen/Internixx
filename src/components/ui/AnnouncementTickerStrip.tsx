import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface TickerItem {
  id: string;
  text: string;
  isPrimaryHighlight?: boolean;
  isSecondaryHighlight?: boolean;
  iconType: 'check' | 'dot' | 'sparkle' | 'arrow';
}

const TICKER_ITEMS: TickerItem[] = [
  { id: '1', text: 'FREE TO APPLY', isPrimaryHighlight: true, iconType: 'check' },
  { id: '2', text: 'PROJECT-BASED INTERNSHIP', isPrimaryHighlight: false, iconType: 'dot' },
  { id: '3', text: 'BUILD REAL-WORLD PROJECTS', isPrimaryHighlight: true, isSecondaryHighlight: true, iconType: 'arrow' },
  { id: '4', text: 'ENHANCE YOUR RESUME', isPrimaryHighlight: false, isSecondaryHighlight: true, iconType: 'dot' },
  { id: '5', text: 'EARN A VERIFIABLE CREDENTIAL', isPrimaryHighlight: true, iconType: 'sparkle' },
  { id: '6', text: 'SHOWCASE YOUR WORK', isPrimaryHighlight: false, iconType: 'dot' },
  { id: '7', text: '100% STUDENT FRIENDLY', isPrimaryHighlight: true, iconType: 'check' },
];

export const AnnouncementTickerStrip: React.FC = () => {
  const renderIcon = (type: TickerItem['iconType']) => {
    switch (type) {
      case 'check':
        return (
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#0048D9]/10 text-[#0048D9] shrink-0 mr-2">
            <Check className="w-2.5 h-2.5 stroke-[3]" />
          </span>
        );
      case 'sparkle':
        return (
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#0048D9]/10 text-[#0048D9] shrink-0 mr-2">
            <Sparkles className="w-2.5 h-2.5 stroke-[2.5]" />
          </span>
        );
      case 'arrow':
        return (
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#0048D9]/10 text-[#0048D9] shrink-0 mr-2">
            <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
          </span>
        );
      case 'dot':
      default:
        return (
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#94A3B8] shrink-0 mx-3 sm:mx-4 opacity-70" aria-hidden="true" />
        );
    }
  };

  const renderItemContent = (item: TickerItem, keyPrefix: string) => {
    const isSpecialBadge = item.isPrimaryHighlight;

    return (
      <div
        key={`${keyPrefix}-${item.id}`}
        className="inline-flex items-center select-none shrink-0"
      >
        {item.iconType === 'dot' ? (
          renderIcon(item.iconType)
        ) : (
          <span className="inline-flex items-center ml-3 sm:ml-4">
            {renderIcon(item.iconType)}
          </span>
        )}

        <span
          className={`font-mono text-[11.5px] sm:text-[13px] tracking-[0.03em] font-semibold whitespace-nowrap transition-colors ${
            isSpecialBadge
              ? 'text-[#0048D9] font-bold'
              : 'text-[#0F172A] font-medium'
          }`}
        >
          {item.text}
        </span>
      </div>
    );
  };

  return (
    <aside
      aria-label="Internix Announcements and Key Features"
      className="relative z-10 w-full max-w-full overflow-hidden bg-gradient-to-r from-white via-[#F8FAFC] to-white border-y border-[#E2E8F0] py-3 sm:py-3.5 h-[52px] sm:h-[60px] flex items-center justify-center shadow-[0_2px_12px_rgba(7,27,59,0.02)]"
    >
      {/* Very subtle ambient blue glow backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,72,217,0.04)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      {/* Left/Right Subtle Vignette Blur Gradient Masks */}
      <div
        className="pointer-events-none absolute left-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10"
        aria-hidden="true"
      />

      {/* Continuous Seamless Marquee Container */}
      <div className="flex w-full overflow-hidden whitespace-nowrap group">
        <div className="animate-ticker-marquee flex items-center shrink-0">
          {/* First sequence */}
          <div className="flex items-center shrink-0 pr-4 sm:pr-6">
            {TICKER_ITEMS.map((item) => renderItemContent(item, 'set-1'))}
          </div>

          {/* Second duplicate sequence for seamless infinite loop */}
          <div className="flex items-center shrink-0 pr-4 sm:pr-6" aria-hidden="true">
            {TICKER_ITEMS.map((item) => renderItemContent(item, 'set-2'))}
          </div>

          {/* Third sequence to guarantee ultra-wide screen coverage without gaps */}
          <div className="flex items-center shrink-0 pr-4 sm:pr-6" aria-hidden="true">
            {TICKER_ITEMS.map((item) => renderItemContent(item, 'set-3'))}
          </div>

          {/* Fourth sequence */}
          <div className="flex items-center shrink-0 pr-4 sm:pr-6" aria-hidden="true">
            {TICKER_ITEMS.map((item) => renderItemContent(item, 'set-4'))}
          </div>
        </div>
      </div>
    </aside>
  );
};
