import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, isReducedMotion, isTouchDevice } from './gsapConfig';

/**
 * Hook to manage a scoped GSAP context with automatic cleanup on unmount.
 */
export function useGsapContext(
  animationCallback: (ctx: gsap.Context, root: HTMLDivElement | null) => void,
  dependencies: any[] = []
) {
  const scopeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (isReducedMotion()) {
      // Show everything immediately if user prefers reduced motion
      if (scopeRef.current) {
        gsap.set(
          scopeRef.current.querySelectorAll(
            '[data-reveal], .hero-eyebrow, .hero-headline, .hero-text, .hero-cta, .program-card-item, .how-step-card, .why-benefit-item'
          ),
          { opacity: 1, y: 0, scale: 1, clearProps: 'all' }
        );
      }
      return;
    }

    const ctx = gsap.context((self) => {
      animationCallback(self, scopeRef.current);
    }, scopeRef);

    // Refresh ScrollTrigger after DOM has settled
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ctx.revert(); // Reverts all animations and kills ScrollTriggers created in this context
    };
  }, dependencies);

  return scopeRef;
}

/**
 * Staged Hero Entrance Sequence
 */
export function animateHeroEntrance(container: HTMLElement | null) {
  if (!container || isReducedMotion()) return;

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
  });

  const eyebrow = container.querySelector('.hero-eyebrow');
  const headline = container.querySelector('.hero-headline');
  const text = container.querySelector('.hero-text');
  const ctas = container.querySelectorAll('.hero-cta');
  const badge = container.querySelector('.hero-badge');

  // Initial states
  if (eyebrow) gsap.set(eyebrow, { opacity: 0, y: 20 });
  if (headline) gsap.set(headline, { opacity: 0, y: 20 });
  if (text) gsap.set(text, { opacity: 0, y: 20 });
  if (ctas.length) gsap.set(ctas, { opacity: 0, y: 20 });
  if (badge) gsap.set(badge, { opacity: 0, scale: 0.94 });

  // Staged Sequence
  if (eyebrow) {
    tl.to(eyebrow, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, 0.05);
  }

  if (headline) {
    tl.to(headline, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, 0.12);
  }

  if (text) {
    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      ease: 'power3.out',
    }, 0.22);
  }

  if (badge) {
    tl.to(badge, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out',
    }, 0.28);
  }

  if (ctas.length) {
    tl.to(ctas, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out',
    }, 0.32);
  }

  return tl;
}

/**
 * Setup Hero Credential Visual Motion:
 * 1. Card enters from right: opacity 0 -> 1, x: 60px -> 0, rotateY: 8deg -> 0
 * 2. Verification badge appears slightly after
 * 3. Light sweep travels across card once
 * 4. Ambient floating animation (yoyo 6-8px over 4.5s)
 * 5. Slow ambient gradient pulse behind card
 */
export interface HeroCredentialMotionElements {
  container: HTMLElement;
  card: HTMLElement;
  badge?: HTMLElement | null;
  shine?: HTMLElement | null;
  glow?: HTMLElement | null;
}

export function setupHeroCredentialMotion(elements: HeroCredentialMotionElements) {
  if (isReducedMotion() || typeof window === 'undefined') {
    if (elements.card) gsap.set(elements.card, { opacity: 1, x: 0, rotateY: 0, clearProps: 'all' });
    if (elements.badge) gsap.set(elements.badge, { opacity: 1, y: 0, clearProps: 'all' });
    return () => {};
  }

  // Desktop check: Only run animation on screens 1024px and above
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return () => {};
  }

  const { card, badge, shine, glow } = elements;

  // Initial state setup
  gsap.set(card, {
    opacity: 0,
    x: 60,
    rotateY: 8,
    transformPerspective: 1200,
  });

  if (badge) {
    gsap.set(badge, {
      opacity: 0,
      y: 16,
      scale: 0.94,
    });
  }

  if (shine) {
    gsap.set(shine, {
      xPercent: -120,
      opacity: 0,
    });
  }

  if (glow) {
    gsap.set(glow, {
      opacity: 0.3,
      scale: 0.92,
    });
  }

  // Entrance Timeline
  const entranceTl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    delay: 0.15,
  });

  // 1. Card enters smoothly from right with 3D rotation
  entranceTl.to(card, {
    opacity: 1,
    x: 0,
    rotateY: 0,
    duration: 0.95,
    ease: 'power3.out',
  });

  // 2. Verification badge appears slightly after
  if (badge) {
    entranceTl.to(
      badge,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        ease: 'back.out(1.4)',
      },
      '-=0.45'
    );
  }

  // 3. Subtle light sweep across the credential card once
  if (shine) {
    entranceTl.to(
      shine,
      {
        opacity: 1,
        xPercent: 120,
        duration: 1.1,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(shine, { opacity: 0 });
        },
      },
      '-=0.3'
    );
  }

  // 4. Continuous gentle float & ambient glow breathing after entrance
  let floatTween: gsap.core.Tween | null = null;
  let glowTween: gsap.core.Tween | null = null;

  entranceTl.add(() => {
    // Subtle vertical float (6-8px, 4.5s ease-in-out yoyo)
    floatTween = gsap.to(card, {
      y: -8,
      duration: 4.2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    if (glow) {
      glowTween = gsap.to(glow, {
        opacity: 0.65,
        scale: 1.05,
        duration: 5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }
  });

  return () => {
    entranceTl.kill();
    if (floatTween) floatTween.kill();
    if (glowTween) glowTween.kill();
  };
}

/**
 * Scroll Animation for Hero Section:
 * Subtly scales content down to 0.97 and moves credential visual slightly upward on scroll.
 */
export function animateHeroScrollTrigger(container: HTMLElement | null) {
  if (!container || isReducedMotion()) return;

  const heroContent = container.querySelector<HTMLElement>('.hero-content-col');
  const credentialCol = container.querySelector<HTMLElement>('.hero-credential-col');
  const glow = container.querySelector<HTMLElement>('.hero-ambient-glow');

  if (heroContent) {
    gsap.to(heroContent, {
      scale: 0.97,
      opacity: 0.92,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  if (credentialCol) {
    gsap.to(credentialCol, {
      y: -24,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  if (glow) {
    gsap.to(glow, {
      y: 40,
      opacity: 0.2,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }
}

/**
 * Section Header Scroll Reveal
 */
export function animateSectionHeaders(container: HTMLElement | null) {
  if (!container || isReducedMotion()) return;

  const headers = container.querySelectorAll<HTMLElement>(
    '[data-reveal="header"], [data-reveal="how-header"], .section-header-reveal'
  );

  headers.forEach((header) => {
    gsap.fromTo(
      header,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
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
}

/**
 * Program Cards Staggered Viewport Entrance + Internal Elements Choreography
 */
export function animateProgramCards(container: HTMLElement | null) {
  if (!container || isReducedMotion()) return;

  const cards = container.querySelectorAll<HTMLElement>('.program-card-item');
  if (!cards.length) return;

  cards.forEach((card, index) => {
    const category = card.querySelector('.card-category');
    const title = card.querySelector('.card-title');
    const desc = card.querySelector('.card-desc');
    const meta = card.querySelector('.card-meta');
    const skills = card.querySelector('.card-skills');
    const cta = card.querySelector('.card-cta');

    const cardTl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none none',
        once: true,
      },
    });

    // Outer card reveal with subtle scale and upward motion
    cardTl.fromTo(
      card,
      { opacity: 0, y: 36, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.75,
        ease: 'power3.out',
        delay: (index % 2) * 0.08, // Stagger pairs in 2-column grid
      }
    );

    // Internal elements stagger (category -> title -> description -> meta -> skills -> cta)
    const internals = [category, title, desc, meta, skills, cta].filter(Boolean);
    if (internals.length) {
      cardTl.fromTo(
        internals,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
        },
        '-=0.5' // Overlap with card entrance for fluid feel
      );
    }
  });
}

/**
 * Setup Desktop-Only Card Hover Interaction
 */
export function setupDesktopCardHover(card: HTMLElement) {
  if (isTouchDevice() || isReducedMotion()) return () => {};

  const arrow = card.querySelector<HTMLElement>('.card-arrow');
  
  const onMouseEnter = () => {
    gsap.to(card, {
      y: -4,
      scale: 1.008,
      duration: 0.28,
      ease: 'power2.out',
      overwrite: 'auto',
    });
    if (arrow) {
      gsap.to(arrow, {
        x: 2,
        y: -2,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }
  };

  const onMouseLeave = () => {
    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: 'power2.out',
      overwrite: 'auto',
    });
    if (arrow) {
      gsap.to(arrow, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }
  };

  card.addEventListener('mouseenter', onMouseEnter);
  card.addEventListener('mouseleave', onMouseLeave);

  return () => {
    card.removeEventListener('mouseenter', onMouseEnter);
    card.removeEventListener('mouseleave', onMouseLeave);
  };
}

/**
 * How It Works Step Cards Reveal with Progressive Stagger
 */
export function animateHowItWorksSteps(container: HTMLElement | null) {
  if (!container || isReducedMotion()) return;

  const stepCards = container.querySelectorAll<HTMLElement>('.how-step-card');
  if (!stepCards.length) return;

  gsap.fromTo(
    stepCards,
    { opacity: 0, y: 30, scale: 0.98 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: stepCards[0],
        start: 'top 88%',
        toggleActions: 'play none none none',
        once: true,
      },
    }
  );
}

/**
 * Why Internix Section Entrance
 * Heading reveals first, followed by benefit items (01-04) sequentially
 * moving upward by 16px with smooth opacity and an 80ms stagger.
 * Once revealed, elements remain completely stable.
 */
export function animateWhyInternix(container: HTMLElement | null) {
  if (!container || isReducedMotion()) return;

  const section = container.querySelector<HTMLElement>('#why-internix');
  if (!section) return;

  const headingBlock = section.querySelector<HTMLElement>('[data-reveal="why-header"]');
  const benefitItems = section.querySelectorAll<HTMLElement>('.why-benefit-item');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 85%',
      toggleActions: 'play none none none',
      once: true,
    },
  });

  if (headingBlock) {
    tl.fromTo(
      headingBlock,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
      }
    );
  }

  if (benefitItems.length) {
    tl.fromTo(
      benefitItems,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform',
      },
      '-=0.35' // Overlap naturally as heading finishes
    );
  }

  return tl;
}

/**
 * Build Your Credential Trust Section Entrance
 * Heading fades upward, 3 horizontal feature items reveal sequentially with 80-100ms stagger,
 * and the desktop certificate preview gently scales from 0.96 -> 1 with smooth opacity.
 */
export function animateBuildCredentialSection(container: HTMLElement | null) {
  if (!container || isReducedMotion()) return;

  const section = container.querySelector<HTMLElement>('#build-credential');
  if (!section) return;

  const header = section.querySelector<HTMLElement>('[data-reveal="credential-header"]');
  const items = section.querySelectorAll<HTMLElement>('.credential-feature-item');
  const preview = section.querySelector<HTMLElement>('.credential-preview-card');
  const footerTag = section.querySelector<HTMLElement>('[data-reveal="credential-footer-tag"]');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 85%',
      toggleActions: 'play none none none',
      once: true,
    },
  });

  if (header) {
    tl.fromTo(
      header,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
      }
    );
  }

  if (items.length) {
    tl.fromTo(
      items,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.09,
        ease: 'power3.out',
        clearProps: 'transform',
      },
      '-=0.35'
    );
  }

  if (preview) {
    tl.fromTo(
      preview,
      { opacity: 0, scale: 0.96, y: 12 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        clearProps: 'transform',
      },
      '-=0.45'
    );
  }

  if (footerTag) {
    tl.fromTo(
      footerTag,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      '-=0.2'
    );
  }

  return tl;
}

/**
 * Large Visual / CTA Box Reveal
 */
export function animateCtaBoxes(container: HTMLElement | null) {
  if (!container || isReducedMotion()) return;

  const ctaBoxes = container.querySelectorAll<HTMLElement>(
    '[data-reveal="cta-box"], [data-reveal="cta-section"]'
  );

  ctaBoxes.forEach((box) => {
    gsap.fromTo(
      box,
      { opacity: 0, y: 32, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
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
}

/**
 * Ambient Background Subtle Parallax Depth (Scrub)
 * Safe: ONLY moves vertically by a few pixels, zero horizontal movement
 */
export function animateBackgroundParallax(bgElement: HTMLElement | null) {
  if (!bgElement || isReducedMotion()) return;

  const glowCircle = bgElement.querySelector<HTMLElement>('.ambient-bg-motion');
  if (!glowCircle) return;

  gsap.to(glowCircle, {
    y: 80,
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
    },
  });
}

/**
 * Staged Footer Entrance
 */
export function animateFooter(footerElement: HTMLElement | null) {
  if (!footerElement || isReducedMotion()) return;

  const brand = footerElement.querySelector('.footer-brand');
  const desc = footerElement.querySelector('.footer-desc');
  const cols = footerElement.querySelectorAll('.footer-col');
  const bottom = footerElement.querySelector('.footer-bottom');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: footerElement,
      start: 'top 92%',
      toggleActions: 'play none none none',
      once: true,
    },
  });

  if (brand) {
    tl.fromTo(
      brand,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );
  }

  if (desc) {
    tl.fromTo(
      desc,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
      '-=0.3'
    );
  }

  if (cols.length) {
    tl.fromTo(
      cols,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      },
      '-=0.2'
    );
  }

  if (bottom) {
    tl.fromTo(
      bottom,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
      '-=0.2'
    );
  }
}

/**
 * Desktop Pointer Parallax on Hero Badge / Decorative Accents (Restrained)
 */
export function setupDesktopPointerParallax(
  target: HTMLElement | null,
  maxMove: number = 4
) {
  if (!target || isTouchDevice() || isReducedMotion()) return () => {};

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const x = ((clientX / innerWidth) - 0.5) * (maxMove * 2);
    const y = ((clientY / innerHeight) - 0.5) * (maxMove * 2);

    gsap.to(target, {
      x,
      y,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  window.addEventListener('mousemove', handleMouseMove, { passive: true });

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}
