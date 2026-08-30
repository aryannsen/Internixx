import React, { useEffect, useRef } from 'react';
import { SITE_CONFIG, APPLICATION_FORM_URL } from '../../config/site';
import { useRouter } from '../../context/RouterContext';
import { BrandLogo } from '../ui/BrandMark';
import { CheckCircle2, Phone, ShieldCheck, Instagram } from 'lucide-react';
import { animateFooter } from '../../lib/motionSystem';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!footerRef.current) return;
    animateFooter(footerRef.current);
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#0B1220] border-t border-[#1E293B] text-[#94A3B8] text-sm relative w-full overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="footer-brand md:col-span-5 flex flex-col items-start">
            <BrandLogo
              size={36}
              subtitle="STUDENT PROGRAMS"
              inverted={true}
              onClick={() => navigate('/')}
              className="mb-4"
            />

            <p className="footer-desc text-[#94A3B8] text-sm leading-relaxed max-w-sm font-normal">
              {SITE_CONFIG.tagline}
            </p>

            <p className="text-[#64748B] text-xs mt-2 leading-relaxed max-w-sm font-normal">
              Structured online project tracks and milestone-driven cohorts designed for students to develop verified technical skills.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-[#94A3B8] bg-[#0F172A] border border-[#1E293B] px-3.5 py-2 rounded-lg">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
              <span>Official Cohort Applications Open for Upcoming Batches</span>
            </div>
          </div>

          {/* Contact Col (Placed immediately after brand on mobile) */}
          <div className="footer-col md:col-span-3">
            <h3 className="font-semibold text-xs text-white uppercase tracking-[0.2em] mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-sm text-white">Aryan</p>
                <p className="text-xs text-[#94A3B8] mt-0.5">Founder, Internix</p>
              </div>
              <div className="pt-1">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                  WhatsApp / Direct
                </span>
                <a
                  href={`tel:${SITE_CONFIG.contactNumber}`}
                  className="text-sm font-semibold text-[#60A5FA] hover:text-[#93C5FD] transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{SITE_CONFIG.contactNumber}</span>
                </a>
              </div>
              <div className="pt-1">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block mb-1.5">
                  Instagram
                </span>
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-[#1E293B] hover:bg-[#F472B6]/15 text-[#F472B6] hover:text-[#F9A8D4] border border-[#334155]/60 hover:border-[#F472B6]/40 transition-colors inline-flex items-center justify-center cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="footer-col md:col-span-2">
            <h3 className="font-semibold text-xs text-white uppercase tracking-[0.2em] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="text-[#94A3B8] hover:text-white transition-colors duration-150 text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/about')}
                  className="text-[#94A3B8] hover:text-white transition-colors duration-150 text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/programs')}
                  className="text-[#94A3B8] hover:text-white transition-colors duration-150 text-left cursor-pointer"
                >
                  Internships
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/how-it-works')}
                  className="text-[#94A3B8] hover:text-white transition-colors duration-150 text-left cursor-pointer"
                >
                  How It Works
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Col */}
          <div className="footer-col md:col-span-2">
            <h3 className="font-semibold text-xs text-white uppercase tracking-[0.2em] mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/verify')}
                  className="text-[#94A3B8] hover:text-white transition-colors duration-150 text-left cursor-pointer inline-flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Verify Certificate</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/faq')}
                  className="text-[#94A3B8] hover:text-white transition-colors duration-150 text-left cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a
                  href={APPLICATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-white transition-colors duration-150 text-left cursor-pointer"
                >
                  Apply Form
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Subtle Divider */}
        <div className="footer-bottom mt-12 pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] font-medium">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="uppercase tracking-widest text-[#94A3B8]">
              © {new Date().getFullYear()} INTERNIX. ALL RIGHTS RESERVED.
            </span>
          </div>

          <div className="flex items-center gap-6 uppercase tracking-widest text-[11px]">
            <button
              type="button"
              onClick={() => navigate('/verify')}
              className="text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
            >
              Verify Certificate
            </button>
            <button
              type="button"
              onClick={() => navigate('/about')}
              className="text-[#64748B] hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => navigate('/faq')}
              className="text-[#64748B] hover:text-white transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
