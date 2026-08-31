import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Sparkles, Layers, Sliders, CheckCircle2, ChevronRight } from 'lucide-react';
import { gsap } from '../../lib/gsapConfig';

export interface StoryboardStep {
  step: number;
  timecode: string;
  title: string;
  description: string;
  keyAction: string;
}

export const STORYBOARD_STEPS: StoryboardStep[] = [
  {
    step: 1,
    timecode: '0.0s – 0.4s',
    title: 'Blue Dot Genesis',
    description: 'A small electric blue node (#1D8FFF) scales up with spring dampening at (21, 18.5), establishing the brand origin anchor.',
    keyAction: 'Scale (0 -> 1) with cubic-bezier(0.34, 1.56, 0.64, 1) + subtle radial pulse.',
  },
  {
    step: 2,
    timecode: '0.4s – 0.9s',
    title: 'Vertical "i" Growth',
    description: 'The foundation monolith pillar unrolls smoothly downward from the dot anchor, creating the left structural backbone of the mark.',
    keyAction: 'Height expand (0% -> 100%) + vertical clip-path reveal along Y-axis.',
  },
  {
    step: 3,
    timecode: '0.9s – 1.4s',
    title: 'Origami Ribbon Fold',
    description: 'The top facet angles rightward into the origami fold, extruding the central diagonal and snapping into the right "N" pillar.',
    keyAction: 'Dynamic path morphing & isometric fold rotation with smooth linear-quality easing.',
  },
  {
    step: 4,
    timecode: '1.4s – 1.8s',
    title: 'Electric Light Wave',
    description: 'A high-velocity photon beam travels continuously through the ribbon trajectory, highlighting the precision edges.',
    keyAction: 'Stroke dashoffset travel along the folded guide contour (#FFFFFF + #AFCBFF glow).',
  },
  {
    step: 5,
    timecode: '1.8s – 2.2s',
    title: 'Wordmark Typography Entrance',
    description: 'The geometric uppercase "INTERNI" and "STUDENT PROGRAMS" tagline track outward into position with optical opacity fade.',
    keyAction: 'Letter-spacing expansion (0.05em -> 0.14em) + smooth opacity transition.',
  },
  {
    step: 6,
    timecode: '2.2s – 2.5s',
    title: 'Electric "X" Slash Accent',
    description: 'A signature electric blue slash strikes across the upper right arm of the "X", completing the brand signature lockup.',
    keyAction: 'Stroke draw-in from center outward (#2563FF -> #1D8FFF) + final subtle lockup settle.',
  },
];

export const MotionLogoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<1 | 0.5 | 0.25>(1);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [canvasTheme, setCanvasTheme] = useState<'dark' | 'light'>('dark');

  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // SVG Refs for motion steps
  const dotRef = useRef<SVGCircleElement | null>(null);
  const leftPillarRef = useRef<SVGPathElement | null>(null);
  const foldApexRef = useRef<SVGPathElement | null>(null);
  const diagonalRef = useRef<SVGPathElement | null>(null);
  const rightPillarRef = useRef<SVGPathElement | null>(null);
  const lightBeamRef = useRef<SVGPathElement | null>(null);
  const wordmarkRef = useRef<HTMLDivElement | null>(null);
  const taglineRef = useRef<HTMLDivElement | null>(null);
  const xSlashRef = useRef<SVGLineElement | null>(null);

  // Build GSAP Timeline
  useEffect(() => {
    if (
      !dotRef.current ||
      !leftPillarRef.current ||
      !foldApexRef.current ||
      !diagonalRef.current ||
      !rightPillarRef.current ||
      !lightBeamRef.current ||
      !wordmarkRef.current ||
      !taglineRef.current ||
      !xSlashRef.current
    ) {
      return;
    }

    // Kill existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const tl = gsap.timeline({
      paused: !isPlaying,
      repeat: -1,
      repeatDelay: 1.2,
      onUpdate: () => {
        const time = tl.time();
        setCurrentTime(time);

        // Map time to active step
        if (time < 0.4) setActiveStep(1);
        else if (time < 0.9) setActiveStep(2);
        else if (time < 1.4) setActiveStep(3);
        else if (time < 1.8) setActiveStep(4);
        else if (time < 2.2) setActiveStep(5);
        else setActiveStep(6);
      },
    });

    // Reset elements initial states
    gsap.set(dotRef.current, { scale: 0, opacity: 0, transformOrigin: '21px 18.5px' });
    gsap.set(leftPillarRef.current, { scaleY: 0, opacity: 0, transformOrigin: '21px 36.5px' });
    gsap.set([foldApexRef.current, diagonalRef.current, rightPillarRef.current], {
      scale: 0.85,
      opacity: 0,
      transformOrigin: '50px 50px',
    });
    gsap.set(lightBeamRef.current, { strokeDashoffset: 160, strokeDasharray: '40 120', opacity: 0 });
    gsap.set(wordmarkRef.current, { opacity: 0, x: -12, filter: 'blur(4px)' });
    gsap.set(taglineRef.current, { opacity: 0, y: 6 });
    gsap.set(xSlashRef.current, { strokeDashoffset: 30, strokeDasharray: 30, opacity: 0 });

    // Step 1: Small blue dot appears (0.0s - 0.4s)
    tl.to(
      dotRef.current,
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(2)',
      },
      0
    );

    // Step 2: Vertical "i" grows upward/downward (0.4s - 0.9s)
    tl.to(
      leftPillarRef.current,
      {
        scaleY: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      },
      0.35
    );

    // Step 3: Ribbon folds into the "N" (0.9s - 1.4s)
    tl.to(
      [foldApexRef.current, diagonalRef.current, rightPillarRef.current],
      {
        scale: 1,
        opacity: 1,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out',
      },
      0.8
    );

    // Step 4: Blue light travels through the ribbon (1.4s - 1.8s)
    tl.to(
      lightBeamRef.current,
      {
        opacity: 1,
        duration: 0.1,
      },
      1.35
    );
    tl.to(
      lightBeamRef.current,
      {
        strokeDashoffset: -120,
        duration: 0.5,
        ease: 'power1.inOut',
      },
      1.35
    );
    tl.to(
      lightBeamRef.current,
      {
        opacity: 0,
        duration: 0.15,
      },
      1.75
    );

    // Step 5: INTERNIX wordmark fades in (1.8s - 2.2s)
    tl.to(
      wordmarkRef.current,
      {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 0.45,
        ease: 'power2.out',
      },
      1.75
    );

    tl.to(
      taglineRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      },
      1.95
    );

    // Step 6: Blue slash animates across the X (2.2s - 2.5s)
    tl.to(
      xSlashRef.current,
      {
        opacity: 1,
        strokeDashoffset: 0,
        duration: 0.35,
        ease: 'power3.out',
      },
      2.15
    );

    tl.timeScale(playbackSpeed);
    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [playbackSpeed]);

  // Handle Play/Pause toggle
  const togglePlay = () => {
    if (!timelineRef.current) return;
    if (isPlaying) {
      timelineRef.current.pause();
      setIsPlaying(false);
    } else {
      timelineRef.current.play();
      setIsPlaying(true);
    }
  };

  // Handle Restart
  const handleRestart = () => {
    if (!timelineRef.current) return;
    timelineRef.current.restart();
    setIsPlaying(true);
  };

  // Handle Speed change
  const handleSpeedChange = (speed: 1 | 0.5 | 0.25) => {
    setPlaybackSpeed(speed);
    if (timelineRef.current) {
      timelineRef.current.timeScale(speed);
    }
  };

  // Scrubber jump to specific step
  const seekToStep = (stepNumber: number) => {
    if (!timelineRef.current) return;
    const stepTimes = [0, 0.2, 0.6, 1.1, 1.5, 1.9, 2.3];
    const targetTime = stepTimes[stepNumber] || 0;
    timelineRef.current.seek(targetTime);
    setCurrentTime(targetTime);
    setActiveStep(stepNumber);
  };

  const isDark = canvasTheme === 'dark';

  return (
    <div className="w-full flex flex-col gap-6" ref={containerRef}>
      {/* 
        MAIN MOTION STAGE / STUDIO CANVAS 
      */}
      <div
        className={`relative rounded-2xl border transition-colors duration-300 overflow-hidden shadow-xl ${
          isDark
            ? 'bg-[#071B3B] border-[#1E293B] text-white'
            : 'bg-[#F8F9FA] border-[#CBD5E1] text-[#071B3B]'
        }`}
      >
        {/* Subtle Architectural Motion Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `radial-gradient(${isDark ? '#38BDF8' : '#071B3B'} 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Ambient Top Glow Spotlight */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-3xl pointer-events-none opacity-30"
          style={{
            background: 'radial-gradient(circle, #2563FF 0%, transparent 70%)',
          }}
        />

        {/* Top Stage Header Controls */}
        <div className="relative z-10 px-5 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#1D8FFF] animate-pulse" />
            <span className="font-semibold uppercase tracking-widest text-[#AFCBFF]">
              Motion Logo Sequence (2.5s)
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Dark / Light Stage Theme Toggle */}
            <div className="flex items-center bg-black/20 p-0.5 rounded-lg border border-white/10 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setCanvasTheme('dark')}
                className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                  isDark ? 'bg-[#2563FF] text-white font-bold' : 'text-white/70 hover:text-white'
                }`}
              >
                Dark Canvas
              </button>
              <button
                type="button"
                onClick={() => setCanvasTheme('light')}
                className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                  !isDark ? 'bg-white text-[#071B3B] font-bold shadow-xs' : 'text-white/70 hover:text-white'
                }`}
              >
                Light Canvas
              </button>
            </div>

            {/* Speed Toggle */}
            <div className="flex items-center bg-black/20 p-0.5 rounded-lg border border-white/10 text-[11px] font-mono">
              {([1, 0.5, 0.25] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleSpeedChange(s)}
                  className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                    playbackSpeed === s
                      ? 'bg-[#1D8FFF] text-white font-bold'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center Animated Logo Lockup Display */}
        <div className="relative z-10 py-16 sm:py-24 px-6 flex flex-col items-center justify-center min-h-[280px] sm:min-h-[340px]">
          <div className="flex items-center gap-5 sm:gap-7 select-none">
            {/* ANIMATED SYMBOL SVG */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
              >
                <defs>
                  <linearGradient id="motion-primary-grad" x1="14" y1="14" x2="86" y2="86" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1D8FFF" />
                    <stop offset="50%" stopColor="#2563FF" />
                    <stop offset="100%" stopColor="#0048D9" />
                  </linearGradient>

                  <linearGradient id="motion-left-grad" x1="14" y1="32" x2="28" y2="86" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1D8FFF" />
                    <stop offset="100%" stopColor="#0048D9" />
                  </linearGradient>

                  <linearGradient id="motion-apex-grad" x1="14" y1="30" x2="44" y2="46" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#AFCBFF" />
                    <stop offset="40%" stopColor="#1D8FFF" />
                    <stop offset="100%" stopColor="#2563FF" />
                  </linearGradient>

                  <linearGradient id="motion-diag-grad" x1="28" y1="46" x2="86" y2="86" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0048D9" />
                    <stop offset="25%" stopColor="#2563FF" />
                    <stop offset="85%" stopColor="#1D8FFF" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>

                  <linearGradient id="motion-right-grad" x1="70" y1="24" x2="86" y2="86" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="35%" stopColor="#1D8FFF" />
                    <stop offset="100%" stopColor="#2563FF" />
                  </linearGradient>
                </defs>

                {/* 1. Dot */}
                <circle
                  ref={dotRef}
                  cx="21"
                  cy="18.5"
                  r="7.5"
                  fill="url(#motion-primary-grad)"
                />

                {/* 2. Left Pillar */}
                <path
                  ref={leftPillarRef}
                  d="M 14 36.5 L 28 36.5 L 28 84 C 28 85.1 27.1 86 26 86 L 16 86 C 14.9 86 14 85.1 14 84 Z"
                  fill="url(#motion-left-grad)"
                />

                {/* 3a. Fold Apex */}
                <path
                  ref={foldApexRef}
                  d="M 14 36.5 L 28 36.5 L 43 45 L 28 53 L 14 36.5 Z"
                  fill="url(#motion-apex-grad)"
                />

                {/* 3b. Diagonal */}
                <path
                  ref={diagonalRef}
                  d="M 28 53 L 43 45 L 86 86 L 72 86 Z"
                  fill="url(#motion-diag-grad)"
                />

                {/* 3c. Right Pillar */}
                <path
                  ref={rightPillarRef}
                  d="M 72 38 L 86 27 L 86 84 C 86 85.1 85.1 86 84 86 L 74 86 C 72.9 86 72 85.1 72 84 Z"
                  fill="url(#motion-right-grad)"
                />

                {/* 4. Electric Light Photon Wave Path */}
                <path
                  ref={lightBeamRef}
                  d="M 21 18.5 L 21 36.5 L 43 45 L 72 86 L 86 86 L 86 38"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="filter drop-shadow-[0_0_8px_#38BDF8]"
                />
              </svg>
            </div>

            {/* ANIMATED WORDMARK & TAGLINE */}
            <div className="flex flex-col justify-center">
              <div
                ref={wordmarkRef}
                className={`font-display font-extrabold tracking-[0.16em] uppercase flex items-center text-3xl sm:text-4xl lg:text-5xl leading-none ${
                  isDark ? 'text-white' : 'text-[#071B3B]'
                }`}
              >
                <span>INTERNI</span>

                {/* Custom X */}
                <span className="inline-flex items-center justify-center relative w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11 ml-1 sm:ml-1.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Dark / Navy Base \ slash */}
                    <line
                      x1="4"
                      y1="4"
                      x2="20"
                      y2="20"
                      stroke={isDark ? '#FFFFFF' : '#071B3B'}
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    {/* Lower-left / slash segment */}
                    <line
                      x1="4"
                      y1="20"
                      x2="11"
                      y2="13"
                      stroke={isDark ? '#FFFFFF' : '#071B3B'}
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    {/* ANIMATED UPPER-RIGHT ACCENT SLASH */}
                    <line
                      ref={xSlashRef}
                      x1="13"
                      y1="11"
                      x2="20"
                      y2="4"
                      stroke="#1D8FFF"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>

              {/* Tagline */}
              <div
                ref={taglineRef}
                className={`font-mono text-[10px] sm:text-xs tracking-[0.38em] uppercase font-semibold mt-1.5 sm:mt-2 ${
                  isDark ? 'text-[#AFCBFF]' : 'text-[#64748B]'
                }`}
              >
                STUDENT PROGRAMS
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Timeline Scrubber & Player Controls */}
        <div className="relative z-10 p-4 border-t border-white/10 bg-black/20 flex flex-col gap-3">
          {/* Progress Track */}
          <div className="w-full flex items-center gap-3">
            <span className="font-mono text-[11px] text-white/70 shrink-0">
              {currentTime.toFixed(2)}s
            </span>
            <div className="flex-1 h-2 rounded-full bg-white/10 relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#1D8FFF] to-[#2563FF] transition-all duration-75"
                style={{ width: `${Math.min(100, (currentTime / 2.5) * 100)}%` }}
              />
            </div>
            <span className="font-mono text-[11px] text-white/70 shrink-0">2.50s</span>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="w-8 h-8 rounded-lg bg-[#2563FF] hover:bg-[#1D8FFF] text-white flex items-center justify-center cursor-pointer transition-colors"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <button
                type="button"
                onClick={handleRestart}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                title="Restart Sequence"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Step Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {[1, 2, 3, 4, 5, 6].map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => seekToStep(st)}
                  className={`px-2 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                    activeStep === st
                      ? 'bg-white text-[#071B3B] font-bold shadow-xs'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  Step {st}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 
        6-STEP MOTION STORYBOARD CARD DECK 
      */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#2563FF]" />
            <h3 className="font-display font-bold text-sm sm:text-base text-[#071B3B] uppercase tracking-wider">
              Motion Logo Storyboard (Keyframe Breakdown)
            </h3>
          </div>
          <span className="text-xs font-mono text-[#64748B]">Apple + Stripe Easing Spec</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {STORYBOARD_STEPS.map((item) => {
            const isCurrent = activeStep === item.step;
            return (
              <div
                key={item.step}
                onClick={() => seekToStep(item.step)}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? 'bg-white border-[#2563FF] shadow-md ring-2 ring-[#2563FF]/20'
                    : 'bg-[#F8F9FA] border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-6 h-6 rounded-md font-mono text-xs font-bold flex items-center justify-center ${
                        isCurrent ? 'bg-[#2563FF] text-white' : 'bg-[#E2E8F0] text-[#071B3B]'
                      }`}
                    >
                      {item.step}
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-[#64748B]">
                      {item.timecode}
                    </span>
                  </div>

                  {isCurrent && (
                    <span className="text-[10px] font-mono font-bold text-[#2563FF] bg-[#2563FF]/10 px-2 py-0.5 rounded-full">
                      ACTIVE
                    </span>
                  )}
                </div>

                <h4 className="font-display font-bold text-sm text-[#071B3B] mb-1">
                  {item.title}
                </h4>

                <p className="text-xs text-[#475569] leading-relaxed mb-2.5">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-[#E2E8F0] text-[10.5px] font-mono text-[#64748B]">
                  <span className="font-bold text-[#071B3B]">Action: </span>
                  {item.keyAction}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
