import React, { useState } from 'react';
import {
  Download,
  Copy,
  Check,
  Code2,
  Sparkles,
  Layers,
  Shield,
  Eye,
  Sliders,
  Palette,
  LayoutGrid,
  FileCheck,
  Maximize2,
  ArrowRight,
  ExternalLink,
  Award,
  Smartphone,
  Share2,
} from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { InternixSymbol } from '../components/brand/InternixSymbol';
import { InternixWordmark } from '../components/brand/InternixWordmark';
import { InternixLogo } from '../components/brand/InternixLogo';
import { MotionLogoPlayer } from '../components/brand/MotionLogoPlayer';
import { useRouter } from '../context/RouterContext';

// Color Palette Definition
interface ColorToken {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  cmyk: string;
  textColor: string;
  border?: boolean;
}

const COLOR_TOKENS: ColorToken[] = [
  {
    name: 'Primary Blue',
    role: 'Core Brand Action / Main Ribbon Gradient Stop',
    hex: '#2563FF',
    rgb: '37, 99, 255',
    cmyk: '85, 61, 0, 0',
    textColor: 'text-white',
  },
  {
    name: 'Electric Blue',
    role: 'Top Ribbon Apex Highlight & Custom "X" Accent Slash',
    hex: '#1D8FFF',
    rgb: '29, 143, 255',
    cmyk: '89, 44, 0, 0',
    textColor: 'text-white',
  },
  {
    name: 'Deep Navy',
    role: 'Primary Wordmark Ink / Dark Mode Stage Background',
    hex: '#071B3B',
    rgb: '7, 27, 59',
    cmyk: '88, 54, 0, 77',
    textColor: 'text-white',
  },
  {
    name: 'Light Blue',
    role: 'Secondary Accents, Highlight Stroking & Badges',
    hex: '#AFCBFF',
    rgb: '175, 203, 255',
    cmyk: '31, 20, 0, 0',
    textColor: 'text-[#071B3B]',
  },
  {
    name: 'Pure White',
    role: 'Light Canvas, Negative Space & Dark Mode Typography',
    hex: '#FFFFFF',
    rgb: '255, 255, 255',
    cmyk: '0, 0, 0, 0',
    textColor: 'text-[#071B3B]',
    border: true,
  },
];

// Clean standalone SVG Vector string generators for export
const getSvgString = (
  type: 'horizontal' | 'vertical' | 'icon' | 'dark' | 'white' | 'black'
) => {
  if (type === 'icon') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="512" height="512">
  <defs>
    <linearGradient id="ix-primary" x1="14" y1="14" x2="86" y2="86" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1D8FFF" />
      <stop offset="50%" stop-color="#2563FF" />
      <stop offset="100%" stop-color="#0048D9" />
    </linearGradient>
    <linearGradient id="ix-left" x1="14" y1="32" x2="28" y2="86" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1D8FFF" />
      <stop offset="100%" stop-color="#0048D9" />
    </linearGradient>
    <linearGradient id="ix-apex" x1="14" y1="30" x2="44" y2="46" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#AFCBFF" />
      <stop offset="40%" stop-color="#1D8FFF" />
      <stop offset="100%" stop-color="#2563FF" />
    </linearGradient>
    <linearGradient id="ix-diag" x1="28" y1="46" x2="86" y2="86" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0048D9" />
      <stop offset="25%" stop-color="#2563FF" />
      <stop offset="85%" stop-color="#1D8FFF" />
      <stop offset="100%" stop-color="#38BDF8" />
    </linearGradient>
    <linearGradient id="ix-right" x1="70" y1="24" x2="86" y2="86" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="35%" stop-color="#1D8FFF" />
      <stop offset="100%" stop-color="#2563FF" />
    </linearGradient>
  </defs>
  <circle cx="21" cy="18.5" r="7.5" fill="url(#ix-primary)" />
  <path d="M 14 36.5 L 28 36.5 L 28 84 C 28 85.1 27.1 86 26 86 L 16 86 C 14.9 86 14 85.1 14 84 Z" fill="url(#ix-left)" />
  <path d="M 14 36.5 L 28 36.5 L 43 45 L 28 53 L 14 36.5 Z" fill="url(#ix-apex)" />
  <path d="M 28 53 L 43 45 L 86 86 L 72 86 Z" fill="url(#ix-diag)" />
  <path d="M 72 38 L 86 27 L 86 84 C 86 85.1 85.1 86 84 86 L 74 86 C 72.9 86 72 85.1 72 84 Z" fill="url(#ix-right)" />
</svg>`;
  }

  const isDark = type === 'dark';
  const isWhite = type === 'white';
  const isBlack = type === 'black';
  const textColor = isDark || isWhite ? '#FFFFFF' : '#071B3B';
  const slashColor = isWhite ? '#FFFFFF' : isBlack ? '#071B3B' : '#2563FF';
  const taglineColor = isDark ? '#AFCBFF' : isWhite ? '#FFFFFF' : isBlack ? '#071B3B' : '#64748B';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 90" width="760" height="180">
  <defs>
    <linearGradient id="ix-primary-logo" x1="14" y1="14" x2="86" y2="86" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${isWhite ? '#FFFFFF' : isBlack ? '#071B3B' : '#1D8FFF'}" />
      <stop offset="100%" stop-color="${isWhite ? '#FFFFFF' : isBlack ? '#071B3B' : '#0048D9'}" />
    </linearGradient>
  </defs>
  <!-- Symbol -->
  <g transform="translate(10, 5) scale(0.8)">
    <circle cx="21" cy="18.5" r="7.5" fill="url(#ix-primary-logo)" />
    <path d="M 14 36.5 L 28 36.5 L 28 84 C 28 85.1 27.1 86 26 86 L 16 86 C 14.9 86 14 85.1 14 84 Z" fill="url(#ix-primary-logo)" />
    <path d="M 14 36.5 L 28 36.5 L 43 45 L 28 53 L 14 36.5 Z" fill="url(#ix-primary-logo)" />
    <path d="M 28 53 L 43 45 L 86 86 L 72 86 Z" fill="url(#ix-primary-logo)" />
    <path d="M 72 38 L 86 27 L 86 84 C 86 85.1 85.1 86 84 86 L 74 86 C 72.9 86 72 85.1 72 84 Z" fill="url(#ix-primary-logo)" />
  </g>
  <!-- Wordmark -->
  <text x="102" y="48" font-family="Plus Jakarta Sans, system-ui, -apple-system, sans-serif" font-weight="800" font-size="36" letter-spacing="4" fill="${textColor}">INTERNI</text>
  <!-- Custom X with Accent Slash -->
  <g transform="translate(295, 20) scale(1.3)">
    <line x1="4" y1="4" x2="20" y2="20" stroke="${textColor}" stroke-width="4.2" stroke-linecap="round" />
    <line x1="4" y1="20" x2="11" y2="13" stroke="${textColor}" stroke-width="4.2" stroke-linecap="round" />
    <line x1="13" y1="11" x2="20" y2="4" stroke="${slashColor}" stroke-width="4.2" stroke-linecap="round" />
  </g>
  <!-- Tagline -->
  <text x="103" y="70" font-family="JetBrains Mono, monospace" font-weight="500" font-size="10.5" letter-spacing="4.5" fill="${taglineColor}">STUDENT PROGRAMS</text>
</svg>`;
};

export const BrandSystemPage: React.FC = () => {
  const { navigate } = useRouter();
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [copiedSvg, setCopiedSvg] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'deliverables' | 'motion' | 'guidelines' | 'mockups'>('deliverables');

  // Copy Color HEX to Clipboard
  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  // Copy SVG String
  const handleCopySvg = (type: 'horizontal' | 'vertical' | 'icon' | 'dark' | 'white' | 'black') => {
    const svgCode = getSvgString(type);
    navigator.clipboard.writeText(svgCode);
    setCopiedSvg(type);
    setTimeout(() => setCopiedSvg(null), 2000);
  };

  // Download SVG file directly
  const handleDownloadSvg = (type: 'horizontal' | 'vertical' | 'icon' | 'dark' | 'white' | 'black', filename: string) => {
    const svgCode = getSvgString(type);
    const blob = new Blob([svgCode], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Download PNG file directly via Canvas rendering
  const handleDownloadPng = (
    type: 'horizontal' | 'vertical' | 'icon' | 'dark' | 'white' | 'black',
    filename: string,
    width = 1200,
    height = 600
  ) => {
    const svgCode = getSvgString(type);
    const img = new Image();
    const svgBlob = new Blob([svgCode], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Transparent or dark background
        if (type === 'dark') {
          ctx.fillStyle = '#071B3B';
          ctx.fillRect(0, 0, width, height);
        } else if (type === 'white') {
          ctx.fillStyle = '#071B3B';
          ctx.fillRect(0, 0, width, height);
        }
        ctx.drawImage(img, 0, 0, width, height);
        const pngUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <div className="w-full flex flex-col bg-[#F8F9FA] pb-16">
      {/* 
        HERO BANNER: BRAND SYSTEM INTRO 
      */}
      <div className="bg-[#071B3B] text-white border-b border-[#1E293B] py-10 sm:py-16 relative overflow-hidden">
        {/* Subtle geometric dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Ambient glow accent */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-25"
          style={{
            background: 'radial-gradient(circle, #2563FF 0%, transparent 70%)',
          }}
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Brand & Logo System' },
            ]}
            className="mb-4 text-white/70"
          />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563FF]/20 border border-[#2563FF]/40 text-xs font-mono text-[#AFCBFF] uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#1D8FFF]" />
                <span>INTERNIX BRAND IDENTITY SPECIFICATION</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Refined Startup Logo System
              </h1>

              <p className="mt-3.5 text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl font-normal">
                A world-class visual identity crafted for a funded EdTech startup. Featuring the geometric folded ribbon "i + N" mark, custom accent slash wordmark, and complete motion suite.
              </p>
            </div>

            {/* Quick Hero Brand Showcase Box */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center shrink-0">
              <InternixLogo layout="horizontal" variant="dark" size="lg" />
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-3 text-[11px] font-mono text-[#AFCBFF]">
                <span>Vector Master</span>
                <span>•</span>
                <span>Retina 4K</span>
                <span>•</span>
                <span>SVG Native</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        NAVIGATION TABS BAR
      */}
      <div className="sticky top-16 sm:top-[68px] z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center gap-2 overflow-x-auto py-2.5">
          <button
            type="button"
            onClick={() => setActiveTab('deliverables')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-150 cursor-pointer whitespace-nowrap ${
              activeTab === 'deliverables'
                ? 'bg-[#071B3B] text-white shadow-xs'
                : 'text-[#475569] hover:bg-[#F1F3F5] hover:text-[#071B3B]'
            }`}
          >
            1. Core Deliverables (10 Assets)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('motion')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-150 cursor-pointer whitespace-nowrap ${
              activeTab === 'motion'
                ? 'bg-[#071B3B] text-white shadow-xs'
                : 'text-[#475569] hover:bg-[#F1F3F5] hover:text-[#071B3B]'
            }`}
          >
            2. Motion Logo & Storyboard
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('guidelines')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-150 cursor-pointer whitespace-nowrap ${
              activeTab === 'guidelines'
                ? 'bg-[#071B3B] text-white shadow-xs'
                : 'text-[#475569] hover:bg-[#F1F3F5] hover:text-[#071B3B]'
            }`}
          >
            3. Palette & Construction
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('mockups')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-150 cursor-pointer whitespace-nowrap ${
              activeTab === 'mockups'
                ? 'bg-[#071B3B] text-white shadow-xs'
                : 'text-[#475569] hover:bg-[#F1F3F5] hover:text-[#071B3B]'
            }`}
          >
            4. Applications & Real-World Mockups
          </button>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12 w-full">
        {/* ========================================================================= */}
        {/* TAB 1: 10 CORE DELIVERABLES                                               */}
        {/* ========================================================================= */}
        {activeTab === 'deliverables' && (
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#2563FF] font-mono font-bold text-[11px] tracking-[0.2em] uppercase">
                  DELIVERABLE SPECIFICATION
                </span>
                <span className="text-[#CBD5E1]">•</span>
                <span className="text-[#64748B] font-mono font-bold text-[10.5px] uppercase">
                  100% VECTOR PRECISION
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071B3B] tracking-tight">
                Logo System Deliverables
              </h2>
              <p className="mt-1 text-sm text-[#475569] max-w-2xl">
                Ready-to-use vector SVG files, PNG exports, and monochrome lockups tested across websites, certificates, and mobile app icons.
              </p>
            </div>

            {/* 6 Logo Variation Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Primary Horizontal Logo */}
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#CBD5E1] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold text-[#2563FF] bg-[#2563FF]/10 px-2 py-0.5 rounded">
                      01. PRIMARY HORIZONTAL
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">Light Canvas</span>
                  </div>

                  <div className="py-8 px-4 bg-[#F8F9FA] rounded-xl border border-[#E2E8F0] flex items-center justify-center min-h-[140px]">
                    <InternixLogo layout="horizontal" variant="gradient" size="md" />
                  </div>

                  <p className="mt-3 text-xs text-[#475569] leading-relaxed">
                    Primary master lockup for headers, navigation bars, certificates, and letterheads.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopySvg('horizontal')}
                    className="text-xs font-mono font-semibold text-[#071B3B] hover:text-[#2563FF] inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedSvg === 'horizontal' ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSvg === 'horizontal' ? 'Copied' : 'Copy SVG'}</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleDownloadSvg('horizontal', 'internix-logo-horizontal.svg')}
                      className="p-1.5 rounded-lg bg-[#F1F3F5] hover:bg-[#E2E8F0] text-[#071B3B] text-xs font-mono cursor-pointer"
                      title="Download SVG"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDownloadPng('horizontal', 'internix-logo-horizontal.png')}
                      className="px-2.5 py-1 rounded-lg bg-[#2563FF] text-white hover:bg-[#1D8FFF] text-xs font-semibold cursor-pointer"
                    >
                      PNG
                    </button>
                  </div>
                </div>
              </div>

              {/* 2. Vertical / Stacked Logo */}
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#CBD5E1] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold text-[#2563FF] bg-[#2563FF]/10 px-2 py-0.5 rounded">
                      02. VERTICAL / STACKED
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">Centered</span>
                  </div>

                  <div className="py-8 px-4 bg-[#F8F9FA] rounded-xl border border-[#E2E8F0] flex items-center justify-center min-h-[140px]">
                    <InternixLogo layout="vertical" variant="gradient" size="md" />
                  </div>

                  <p className="mt-3 text-xs text-[#475569] leading-relaxed">
                    Compact vertical orientation ideal for splash screens, app welcome layouts, and badges.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopySvg('vertical')}
                    className="text-xs font-mono font-semibold text-[#071B3B] hover:text-[#2563FF] inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedSvg === 'vertical' ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSvg === 'vertical' ? 'Copied' : 'Copy SVG'}</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleDownloadSvg('vertical', 'internix-logo-vertical.svg')}
                      className="p-1.5 rounded-lg bg-[#F1F3F5] hover:bg-[#E2E8F0] text-[#071B3B] text-xs font-mono cursor-pointer"
                      title="Download SVG"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDownloadPng('vertical', 'internix-logo-vertical.png')}
                      className="px-2.5 py-1 rounded-lg bg-[#2563FF] text-white hover:bg-[#1D8FFF] text-xs font-semibold cursor-pointer"
                    >
                      PNG
                    </button>
                  </div>
                </div>
              </div>

              {/* 3. Icon Only ("i + N" Folded Ribbon) */}
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#CBD5E1] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold text-[#2563FF] bg-[#2563FF]/10 px-2 py-0.5 rounded">
                      03. ICON ONLY (SYMBOL)
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">Folded "i+N"</span>
                  </div>

                  <div className="py-8 px-4 bg-[#F8F9FA] rounded-xl border border-[#E2E8F0] flex items-center justify-center min-h-[140px]">
                    <InternixSymbol size={64} variant="gradient" />
                  </div>

                  <p className="mt-3 text-xs text-[#475569] leading-relaxed">
                    The standalone geometric symbol. Scales cleanly from 16px micro-favicons up to 4K billboard sizes.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopySvg('icon')}
                    className="text-xs font-mono font-semibold text-[#071B3B] hover:text-[#2563FF] inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedSvg === 'icon' ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSvg === 'icon' ? 'Copied' : 'Copy SVG'}</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleDownloadSvg('icon', 'internix-symbol-icon.svg')}
                      className="p-1.5 rounded-lg bg-[#F1F3F5] hover:bg-[#E2E8F0] text-[#071B3B] text-xs font-mono cursor-pointer"
                      title="Download SVG"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDownloadPng('icon', 'internix-symbol-icon.png', 512, 512)}
                      className="px-2.5 py-1 rounded-lg bg-[#2563FF] text-white hover:bg-[#1D8FFF] text-xs font-semibold cursor-pointer"
                    >
                      PNG
                    </button>
                  </div>
                </div>
              </div>

              {/* 4. Dark Background Version */}
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#CBD5E1] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold text-[#1D8FFF] bg-[#071B3B] px-2 py-0.5 rounded">
                      04. DARK BACKGROUND
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">Navy Canvas</span>
                  </div>

                  <div className="py-8 px-4 bg-[#071B3B] rounded-xl border border-[#1E293B] flex items-center justify-center min-h-[140px]">
                    <InternixLogo layout="horizontal" variant="dark" size="md" />
                  </div>

                  <p className="mt-3 text-xs text-[#475569] leading-relaxed">
                    Electric Blue ribbon + pure white wordmark + glowing electric slash for dark interfaces and footers.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopySvg('dark')}
                    className="text-xs font-mono font-semibold text-[#071B3B] hover:text-[#2563FF] inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedSvg === 'dark' ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSvg === 'dark' ? 'Copied' : 'Copy SVG'}</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleDownloadSvg('dark', 'internix-logo-dark.svg')}
                      className="p-1.5 rounded-lg bg-[#F1F3F5] hover:bg-[#E2E8F0] text-[#071B3B] text-xs font-mono cursor-pointer"
                      title="Download SVG"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDownloadPng('dark', 'internix-logo-dark.png')}
                      className="px-2.5 py-1 rounded-lg bg-[#071B3B] text-white hover:bg-[#1E293B] text-xs font-semibold cursor-pointer"
                    >
                      PNG
                    </button>
                  </div>
                </div>
              </div>

              {/* 5. White Monochrome Version */}
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#CBD5E1] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold text-white bg-[#0F172A] px-2 py-0.5 rounded">
                      05. MONOCHROME WHITE
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">Single Tone</span>
                  </div>

                  <div className="py-8 px-4 bg-[#0F172A] rounded-xl border border-[#334155] flex items-center justify-center min-h-[140px]">
                    <InternixLogo layout="horizontal" variant="white" size="md" />
                  </div>

                  <p className="mt-3 text-xs text-[#475569] leading-relaxed">
                    Pure white 1-color vector for laser engraving, monochrome screen printing, and official foil stamps.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopySvg('white')}
                    className="text-xs font-mono font-semibold text-[#071B3B] hover:text-[#2563FF] inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedSvg === 'white' ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSvg === 'white' ? 'Copied' : 'Copy SVG'}</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleDownloadSvg('white', 'internix-logo-white-mono.svg')}
                      className="p-1.5 rounded-lg bg-[#F1F3F5] hover:bg-[#E2E8F0] text-[#071B3B] text-xs font-mono cursor-pointer"
                      title="Download SVG"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDownloadPng('white', 'internix-logo-white-mono.png')}
                      className="px-2.5 py-1 rounded-lg bg-[#0F172A] text-white text-xs font-semibold cursor-pointer"
                    >
                      PNG
                    </button>
                  </div>
                </div>
              </div>

              {/* 6. Black Monochrome Version */}
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#CBD5E1] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold text-[#071B3B] bg-[#E2E8F0] px-2 py-0.5 rounded">
                      06. MONOCHROME BLACK
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">Single Tone</span>
                  </div>

                  <div className="py-8 px-4 bg-white rounded-xl border border-[#CBD5E1] flex items-center justify-center min-h-[140px]">
                    <InternixLogo layout="horizontal" variant="black" size="md" />
                  </div>

                  <p className="mt-3 text-xs text-[#475569] leading-relaxed">
                    100% black ink vector for grayscale print, fax documents, and single-pass thermal printers.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopySvg('black')}
                    className="text-xs font-mono font-semibold text-[#071B3B] hover:text-[#2563FF] inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedSvg === 'black' ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSvg === 'black' ? 'Copied' : 'Copy SVG'}</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleDownloadSvg('black', 'internix-logo-black-mono.svg')}
                      className="p-1.5 rounded-lg bg-[#F1F3F5] hover:bg-[#E2E8F0] text-[#071B3B] text-xs font-mono cursor-pointer"
                      title="Download SVG"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDownloadPng('black', 'internix-logo-black-mono.png')}
                      className="px-2.5 py-1 rounded-lg bg-[#071B3B] text-white text-xs font-semibold cursor-pointer"
                    >
                      PNG
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Favicon & App Icon Suite (Items 7, 8, 9) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[#2563FF] font-mono font-bold text-[11px] tracking-wider uppercase block mb-1">
                    09. FAVICON & APP ICON ASSETS
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#071B3B]">
                    Multi-Resolution Favicon & Icon Suite
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleDownloadPng('icon', 'internix-app-icon-1024.png', 1024, 1024)}
                    icon={<Download className="w-3.5 h-3.5" />}
                  >
                    1024x1024 Master PNG
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleDownloadPng('icon', 'internix-app-icon-512.png', 512, 512)}
                    icon={<Download className="w-3.5 h-3.5" />}
                  >
                    512x512 PNG
                  </Button>
                </div>
              </div>

              {/* Favicon Preview Sizes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/* 1024 App Master */}
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#071B3B] p-2 flex items-center justify-center shadow-sm">
                    <InternixSymbol size={44} variant="gradient" />
                  </div>
                  <span className="mt-2.5 font-mono text-xs font-bold text-[#071B3B]">1024x1024</span>
                  <span className="text-[10.5px] text-[#64748B]">iOS / Android Store</span>
                </div>

                {/* 512 PWA Icon */}
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-white border border-[#E2E8F0] p-1.5 flex items-center justify-center shadow-xs">
                    <InternixSymbol size={36} variant="gradient" />
                  </div>
                  <span className="mt-2.5 font-mono text-xs font-bold text-[#071B3B]">512x512</span>
                  <span className="text-[10.5px] text-[#64748B]">PWA & Web Manifest</span>
                </div>

                {/* 192 Splash Touch */}
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-[#2563FF] p-1 flex items-center justify-center shadow-xs">
                    <InternixSymbol size={30} variant="white" />
                  </div>
                  <span className="mt-2.5 font-mono text-xs font-bold text-[#071B3B]">192x192</span>
                  <span className="text-[10.5px] text-[#64748B]">Apple Touch Icon</span>
                </div>

                {/* 32 Browser Tab */}
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-md bg-white border border-[#CBD5E1] flex items-center justify-center shadow-xs">
                    <InternixSymbol size={22} variant="gradient" />
                  </div>
                  <span className="mt-2.5 font-mono text-xs font-bold text-[#071B3B]">32x32</span>
                  <span className="text-[10.5px] text-[#64748B]">Browser Tab Favicon</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: MOTION LOGO & STORYBOARD (DELIVERABLE 10)                           */}
        {/* ========================================================================= */}
        {activeTab === 'motion' && (
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#2563FF] font-mono font-bold text-[11px] tracking-[0.2em] uppercase">
                  DELIVERABLE 10: MOTION LOGO IDENTITY
                </span>
                <span className="text-[#CBD5E1]">•</span>
                <span className="text-[#64748B] font-mono font-bold text-[10.5px] uppercase">
                  2.5s DURATION • CUBIC-BEZIER EASING
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071B3B] tracking-tight">
                Motion Identity & Animation Engine
              </h2>
              <p className="mt-1 text-sm text-[#475569] max-w-2xl">
                Real-time interactive GSAP animation engine implementing the exact 6-step motion sequence: Blue Dot Genesis &rarr; Vertical Pillar &rarr; Origami Ribbon Fold &rarr; Photon Wave &rarr; Wordmark Entrance &rarr; "X" Slash Accent.
              </p>
            </div>

            {/* Interactive Motion Logo Component */}
            <MotionLogoPlayer />
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: PALETTE & GEOMETRIC CONSTRUCTION                                   */}
        {/* ========================================================================= */}
        {activeTab === 'guidelines' && (
          <div className="space-y-10">
            {/* Color Palette Spec */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#2563FF] font-mono font-bold text-[11px] tracking-[0.2em] uppercase">
                  COLOR PALETTE SYSTEM
                </span>
                <span className="text-[#CBD5E1]">•</span>
                <span className="text-[#64748B] font-mono font-bold text-[10.5px] uppercase">
                  5 PRECISE HEX VALUES
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071B3B] tracking-tight">
                Brand Color Palette
              </h2>
              <p className="mt-1 text-sm text-[#475569] max-w-2xl">
                Strict 5-color palette built for high-contrast digital interfaces, accessible readability, and vibrant ed-tech identity.
              </p>

              {/* Color Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
                {COLOR_TOKENS.map((c) => (
                  <div
                    key={c.hex}
                    onClick={() => handleCopyColor(c.hex)}
                    className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#CBD5E1] transition-all cursor-pointer group"
                  >
                    <div>
                      {/* Color Swatch */}
                      <div
                        className={`w-full h-24 rounded-xl flex items-center justify-center shadow-inner relative overflow-hidden ${
                          c.border ? 'border border-[#CBD5E1]' : ''
                        }`}
                        style={{ backgroundColor: c.hex }}
                      >
                        <span className={`font-mono text-xs font-bold uppercase ${c.textColor}`}>
                          {c.hex}
                        </span>

                        {copiedHex === c.hex && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-xs font-mono font-bold gap-1">
                            <Check className="w-3.5 h-3.5" />
                            <span>COPIED</span>
                          </div>
                        )}
                      </div>

                      <h3 className="font-display text-sm font-bold text-[#071B3B] mt-3">
                        {c.name}
                      </h3>

                      <p className="text-[11px] text-[#64748B] leading-relaxed mt-0.5">
                        {c.role}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex flex-col gap-1 text-[10.5px] font-mono text-[#64748B]">
                      <div className="flex justify-between">
                        <span>RGB:</span>
                        <span className="font-semibold text-[#071B3B]">{c.rgb}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CMYK:</span>
                        <span className="font-semibold text-[#071B3B]">{c.cmyk}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Geometric Construction & Grid Rules */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0]">
              <div className="flex items-center gap-2 mb-2">
                <LayoutGrid className="w-4 h-4 text-[#2563FF]" />
                <h3 className="font-display text-lg font-bold text-[#071B3B]">
                  Geometric Construction & Clear Space
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
                {/* Construction Grid Graphic */}
                <div className="lg:col-span-6 bg-[#071B3B] p-6 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Grid Lines */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, #AFCBFF 1px, transparent 1px), linear-gradient(to bottom, #AFCBFF 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Clear Space Guide Box */}
                  <div className="border border-dashed border-[#AFCBFF]/60 p-6 rounded-xl relative">
                    <span className="absolute -top-3 left-4 bg-[#2563FF] text-white text-[9px] font-mono px-1.5 py-0.5 rounded">
                      Clear Space: 1X (Dot Radius)
                    </span>
                    <InternixLogo layout="horizontal" variant="dark" size="lg" />
                  </div>
                </div>

                {/* Rules List */}
                <div className="lg:col-span-6 space-y-4 text-xs text-[#475569]">
                  <div className="p-3.5 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0]">
                    <span className="font-bold text-[#071B3B] block mb-0.5">
                      1. Mathematical Proportions & Angle:
                    </span>
                    The ribbon origami folds are locked at a precise 45-degree angle. The left "i" stem width is exactly 14% of the symbol viewBox width.
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0]">
                    <span className="font-bold text-[#071B3B] block mb-0.5">
                      2. Custom "X" Accent Slash:
                    </span>
                    The upper right arm of the "X" always carries the electric blue gradient (`#1D8FFF` to `#2563FF`), matching the apex highlight of the "i + N" mark.
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0]">
                    <span className="font-bold text-[#071B3B] block mb-0.5">
                      3. Minimum Digital Size:
                    </span>
                    Horizontal lockup minimum digital height: 28px. Standalone icon minimum digital dimension: 16px.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: APPLICATIONS & REAL-WORLD MOCKUPS                                  */}
        {/* ========================================================================= */}
        {activeTab === 'mockups' && (
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#2563FF] font-mono font-bold text-[11px] tracking-[0.2em] uppercase">
                  BRAND IN ACTION
                </span>
                <span className="text-[#CBD5E1]">•</span>
                <span className="text-[#64748B] font-mono font-bold text-[10.5px] uppercase">
                  STUDENT TOUCHPOINTS
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071B3B] tracking-tight">
                Brand Applications
              </h2>
              <p className="mt-1 text-sm text-[#475569] max-w-2xl">
                Preview how the refined Internix identity elevates official student completion certificates, offer letters, student ID cards, and social headers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Application 1: Verified Certificate Mockup */}
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#2563FF]" />
                    <h3 className="font-display text-sm font-bold text-[#071B3B] uppercase tracking-wider">
                      Official Certificate of Completion
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded font-semibold">
                    VERIFIED SPEC
                  </span>
                </div>

                {/* Certificate Visual Container */}
                <div className="p-6 rounded-xl bg-[#F8F9FA] border-2 border-[#CBD5E1] shadow-inner relative overflow-hidden">
                  {/* Decorative Border */}
                  <div className="border border-[#2563FF]/30 p-5 rounded-lg bg-white relative">
                    <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3 mb-4">
                      <InternixLogo layout="horizontal" variant="gradient" size="sm" />
                      <span className="font-mono text-[9px] text-[#64748B] tracking-widest">
                        ID: INTX-2026-XXXX
                      </span>
                    </div>

                    <div className="text-center space-y-1.5 py-3">
                      <span className="text-[9px] font-mono tracking-[0.2em] text-[#64748B] uppercase">
                        CERTIFICATE OF COMPLETION
                      </span>
                      <h4 className="font-display text-base font-extrabold text-[#071B3B]">
                        STUDENT NAME HERE
                      </h4>
                      <p className="text-[10px] text-[#475569] max-w-xs mx-auto leading-relaxed">
                        Has successfully completed the 4-week intensive practical online internship program in Full Stack Development.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[9px] text-[#64748B]">
                      <span>Aryan, Founder</span>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#2563FF] to-[#1D8FFF] text-white flex items-center justify-center text-[7px] font-bold shadow-xs">
                        SEAL
                      </div>
                      <span>Internix Credential Ledger</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application 2: Official Internship Offer Letter Header */}
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#2563FF]" />
                    <h3 className="font-display text-sm font-bold text-[#071B3B] uppercase tracking-wider">
                      Official Offer Letter Lockup
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#2563FF] bg-[#2563FF]/10 px-2 py-0.5 rounded font-semibold">
                    FORMAL LETTERHEAD
                  </span>
                </div>

                {/* Offer Letter Mockup */}
                <div className="p-6 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] space-y-3 text-xs text-[#475569]">
                  <div className="flex items-start justify-between border-b border-[#E2E8F0] pb-3">
                    <InternixLogo layout="horizontal" variant="gradient" size="sm" />
                    <div className="text-right text-[10px] font-mono text-[#64748B]">
                      <span>INTERNIX EDTECH</span><br />
                      <span>COHORT ADMISSIONS 2026</span>
                    </div>
                  </div>

                  <p className="font-bold text-[#071B3B] pt-1">
                    Subject: Offer of Internship — Frontend Engineering Track
                  </p>

                  <p className="text-[11px] leading-relaxed">
                    Dear Candidate, We are pleased to offer you an internship position at Internix. During this 1-month program, you will collaborate on real-world milestones, master modern codebases, and earn verifiable completion credentials.
                  </p>

                  <div className="pt-2 text-[10.5px] font-mono text-[#64748B]">
                    <span>Official Document Ref: IX-ADM-2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
