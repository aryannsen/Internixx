import { useEffect } from 'react';
import { gsap, ScrollTrigger, isReducedMotion } from '../lib/gsapConfig';

/**
 * Universal hook using GSAP ScrollTrigger for any page that has [data-reveal], .reveal-on-scroll, etc.
 * Features GPU-accelerated transform/opacity transitions with power3.out easing,
 * automatic cleanup on unmount/dependency change, and full prefers-reduced-motion support.
 */
export function useScrollReveal(dependencyKey?: any) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (isReducedMotion()) {
      const elements = document.querySelectorAll<HTMLElement>(
        '[data-reveal], .reveal-on-scroll, .card-stagger'
      );
      elements.forEach((el) => {
        gsap.set(el, { opacity: 1, y: 0, scale: 1, clearProps: 'all' });
      });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Section headers & badges
      const headers = document.querySelectorAll<HTMLElement>(
        '[data-reveal="header"], [data-reveal="how-header"], .section-header-reveal'
      );
      headers.forEach((header) => {
        gsap.fromTo(
          header,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 88%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      // 2. Large containers / visual blocks / CTA cards
      const ctaCards = document.querySelectorAll<HTMLElement>(
        '[data-reveal="cta-box"], [data-reveal="cta-section"], [data-reveal="about-story"], [data-reveal="about-principles"], [data-reveal="about-positioning"], [data-reveal="about-facts"], [data-reveal="verify-input-card"], [data-reveal="verify-standard-card"], [data-reveal="faq-filter"], [data-reveal="faq-list"]'
      );
      ctaCards.forEach((box) => {
        gsap.fromTo(
          box,
          { opacity: 0, y: 28, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: box,
              start: 'top 88%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      // 3. Generic [data-reveal] elements not already handled
      const genericElements = document.querySelectorAll<HTMLElement>(
        '[data-reveal]:not([data-reveal="header"]):not([data-reveal="how-header"]):not([data-reveal="card"]):not([data-reveal="cta-box"]):not([data-reveal="cta-section"]):not([data-reveal="step-card"])'
      );
      genericElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });
    });

    // Refresh triggers slightly after DOM stabilizes
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 80);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [dependencyKey]);
}
