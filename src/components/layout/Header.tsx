import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG, APPLICATION_FORM_URL } from '../../config/site';
import { useRouter } from '../../context/RouterContext';
import { BrandLogo } from '../ui/BrandMark';
import { gsap, isReducedMotion } from '../../lib/gsapConfig';

export const Header: React.FC = () => {
  const { path, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Mobile drawer staggered entrance
  useEffect(() => {
    if (!mobileMenuOpen || !drawerRef.current || isReducedMotion()) return;

    const drawer = drawerRef.current;
    const items = drawer.querySelectorAll('.mobile-nav-item');

    gsap.fromTo(
      drawer,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.25, ease: 'power2.out' }
    );

    if (items.length) {
      gsap.fromTo(
        items,
        { opacity: 0, x: -8 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.04, ease: 'power2.out', delay: 0.05 }
      );
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };

    // Initial check on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        document.body.style.overflow = '';
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    setMobileMenuOpen(false);
    navigate(href);
  };

  const isActive = (href: string) => {
    const cleanPath = path.split('?')[0].split('#')[0] || '/';
    const cleanHref = href.split('?')[0].split('#')[0] || '/';

    if (cleanHref === '/') {
      return cleanPath === '/';
    }

    if (cleanHref === '/programs') {
      return cleanPath === '/programs' || cleanPath.startsWith('/programs/');
    }

    return cleanPath === cleanHref || cleanPath.startsWith(`${cleanHref}/`);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 h-16 sm:h-[68px] border-b ${
          scrolled
            ? 'bg-[#F8F9FA] border-[#CBD5E1] shadow-[0_2px_12px_rgba(15,23,42,0.06)]'
            : 'bg-[#F8F9FA] border-[#E2E8F0] shadow-none'
        }`}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div className="max-w-[1280px] h-full mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Logo & Navigation */}
          <div className="flex items-center gap-8 lg:gap-10">
            <BrandLogo
              size={36}
              subtitle="STUDENT PROGRAMS"
              onClick={() => handleNavClick('/')}
            />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-[#475569] tracking-tight">
              {SITE_CONFIG.navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className={`transition-colors duration-150 cursor-pointer ${
                      active
                        ? 'text-[#0048D9] font-semibold'
                        : 'hover:text-[#0F172A]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Side: Primary CTA */}
          <div className="hidden md:flex items-center gap-5">
            <button
              type="button"
              onClick={() => handleNavClick('/verify')}
              className="text-[12px] font-semibold text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Verify Certificate
            </button>

            <a
              href={APPLICATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0048D9] text-white px-4 py-2 rounded-xl text-[13px] font-semibold hover:bg-[#003BB3] transition-colors duration-150 inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Apply for Internship</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions: CTA + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={APPLICATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0048D9] text-white px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold hover:bg-[#003BB3] transition-colors inline-flex items-center gap-1 cursor-pointer whitespace-nowrap"
            >
              <span>Apply for Internship</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#0F172A] hover:bg-[#F1F3F5] border border-[#E2E8F0] rounded-lg focus:outline-none cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-black/40 backdrop-blur-xs flex flex-col justify-start w-full max-w-full"
          onClick={() => {
            document.body.style.overflow = '';
            setMobileMenuOpen(false);
          }}
        >
          <div
            ref={drawerRef}
            className="bg-[#F8F9FA] w-full max-w-full max-h-[90vh] overflow-y-auto border-b border-[#E2E8F0] shadow-xl p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3.5 border-b border-[#E2E8F0] mb-3">
              <BrandLogo
                size={28}
                subtitle="STUDENT PROGRAMS"
                onClick={() => handleNavClick('/')}
              />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#64748B] hover:text-[#0F172A] border border-[#E2E8F0] rounded-lg"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-0.5">
              {SITE_CONFIG.navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className={`mobile-nav-item flex items-center justify-between px-3 py-2.5 text-sm font-medium text-left transition-colors rounded-lg ${
                      active
                        ? 'text-[#0048D9] font-semibold bg-[#F1F3F5]'
                        : 'text-[#0F172A] hover:bg-[#F1F3F5]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#64748B]" />
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => handleNavClick('/verify')}
                className="mobile-nav-item flex items-center justify-between px-3 py-2.5 text-sm font-medium text-left text-[#0F172A] hover:bg-[#F1F3F5] mt-1 border-t border-[#E2E8F0] pt-2.5 rounded-lg"
              >
                <span>Verify a Certificate</span>
                <ArrowRight className="w-4 h-4 text-[#64748B]" />
              </button>
            </nav>

            <div className="mobile-nav-item mt-4 pt-3.5 border-t border-[#E2E8F0] flex flex-col gap-2">
              <a
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0048D9] text-white py-2.5 px-4 rounded-xl text-sm font-semibold text-center hover:bg-[#003BB3] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Apply for Internship</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-[#64748B]">
                Online 4-week structured student programs
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
