import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { useRouter } from '../../context/RouterContext';
import { APPLICATION_FORM_URL } from '../../config/site';
import { 
  Sparkles, 
  Terminal, 
  Layers, 
  Code2, 
  CheckCircle2, 
  Award, 
  Share2, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck,
  FolderGit2
} from 'lucide-react';

interface StoryStep {
  number: string;
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  metaBadge: string;
  points: string[];
  visualType: 'tracks' | 'code' | 'tasks' | 'credential' | 'showcase';
}

const STORY_STEPS: StoryStep[] = [
  {
    number: '01',
    title: 'CHOOSE YOUR PROGRAM',
    eyebrow: 'Cohort Selection',
    headline: 'Select your specialized 4-week track',
    description: 'Explore specialized online tracks in Frontend, Backend, Full Stack, and UI/UX Design. Every track is 100% free to join and designed around hands-on execution.',
    metaBadge: 'Free Cohort Access',
    points: [
      'Comprehensive weekly task briefs with real deliverables',
      'Flexible 8–12 hour/week pace for university students',
      'No prior professional background required'
    ],
    visualType: 'tracks'
  },
  {
    number: '02',
    title: 'BUILD A REAL PROJECT',
    eyebrow: 'Execution Phase',
    headline: 'Craft real codebases from scratch',
    description: 'Break free from passive video tutorials. Build functional web components, relational schemas, REST APIs, or Figma design systems with modern standards.',
    metaBadge: 'Production Code',
    points: [
      'Work with React, TypeScript, Node.js, Python, and Figma',
      'Modular architecture and standard design system tokens',
      'Clean Git version control from Day 1'
    ],
    visualType: 'code'
  },
  {
    number: '03',
    title: 'COMPLETE YOUR TASKS',
    eyebrow: 'Milestone Delivery',
    headline: 'Submit 4 structured weekly deliverables',
    description: 'Each week focuses on a tangible component of the capstone project. Receive clear submission guidelines, automated checks, and structured review criteria.',
    metaBadge: 'Milestone-Based',
    points: [
      'Week 1: Architecture & Foundations',
      'Weeks 2–3: Core Feature Implementation & Database Logic',
      'Week 4: Performance Audits & Live Production Deployment'
    ],
    visualType: 'tasks'
  },
  {
    number: '04',
    title: 'RECEIVE YOUR CREDENTIAL',
    eyebrow: 'Encrypted Credential',
    headline: 'Earn a verified Certificate of Completion',
    description: 'Upon meeting milestone standards, receive an official Internix Certificate of Completion with a unique, encrypted Certificate ID that anyone can verify instantly.',
    metaBadge: 'Verifiable Digital ID',
    points: [
      'Instant public verification at /verify',
      'Tamper-resistant digital certificate record',
      'Zero credential issuance or claim fees'
    ],
    visualType: 'credential'
  },
  {
    number: '05',
    title: 'SHOWCASE YOUR WORK',
    eyebrow: 'Career Readiness',
    headline: 'Level up your portfolio & LinkedIn',
    description: 'Add your live deployment URLs, GitHub repositories, and verified certificate to your resume. Stand out in tech interviews with proof of execution.',
    metaBadge: 'Interview Proof',
    points: [
      'Direct proof of practical technical execution',
      'One-click credential sharing for LinkedIn profiles',
      'Tangible code samples to present in technical interviews'
    ],
    visualType: 'showcase'
  }
];

export const ExperienceScrollStory: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const { navigate } = useRouter();
  const current = STORY_STEPS[activeStepIndex];

  return (
    <section className="py-10 sm:py-20 lg:py-24 bg-[#F8F9FA] border-t border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 mb-6 sm:mb-12">
          <SectionHeading
            eyebrow="The Internix Experience"
            title="How Students Progress"
            description="A clear, structured journey from program selection to verified credential."
          />
          <div className="shrink-0 flex items-center justify-between sm:justify-end">
            <span className="font-mono text-xs font-semibold text-[#0048D9] bg-[#0048D9]/10 px-3 py-1.5 rounded-lg border border-[#0048D9]/20">
              STEP {current.number} OF 05
            </span>
          </div>
        </div>

        {/* Step Selector Tabs - Mobile horizontal scroll / Desktop 5-col grid */}
        <div className="flex sm:grid sm:grid-cols-5 gap-1.5 sm:gap-2 mb-5 sm:mb-8 overflow-x-auto pb-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {STORY_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`shrink-0 sm:shrink p-2.5 sm:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#0048D9] shadow-xs ring-1 ring-[#0048D9]'
                    : 'bg-white/60 border-[#E2E8F0] hover:bg-white hover:border-[#CBD5E1]'
                }`}
              >
                <span className={`font-mono text-[10px] sm:text-xs font-bold block mb-0.5 sm:mb-1 ${
                  isActive ? 'text-[#0048D9]' : 'text-[#94A3B8]'
                }`}>
                  {step.number}
                </span>
                <span className={`font-display text-[11px] sm:text-[13px] font-bold block whitespace-nowrap sm:whitespace-normal leading-tight ${
                  isActive ? 'text-[#0F172A]' : 'text-[#64748B]'
                }`}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Step Content Display Container */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_4px_20px_-8px_rgba(15,23,42,0.05)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Narrative Panel */}
            <div className="lg:col-span-6 p-4 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0048D9]/10 text-[#0048D9] font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-4">
                  <span>{current.eyebrow}</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F172A] tracking-tight mb-2 sm:mb-4">
                  {current.headline}
                </h3>

                <p className="text-xs sm:text-base text-[#475569] leading-relaxed font-normal mb-4 sm:mb-6">
                  {current.description}
                </p>

                <div className="space-y-2 sm:space-y-3 pt-1 mb-5 sm:mb-8">
                  {current.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0048D9]/10 text-[#0048D9] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#0F172A] font-medium leading-snug sm:leading-relaxed">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Actions */}
              <div className="flex items-center gap-2.5 pt-4 sm:pt-6 border-t border-[#F1F3F5]">
                <a
                  href={APPLICATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#0048D9] hover:bg-[#003BB3] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                {activeStepIndex < STORY_STEPS.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex((prev) => prev + 1)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#F8F9FA] hover:bg-[#E2E8F0] text-[#0F172A] text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => navigate('/verify')}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#F8F9FA] hover:bg-[#E2E8F0] text-[#0F172A] text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                  >
                    <span>Verify</span>
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Interactive Mockup / Visual Card */}
            <div className="lg:col-span-6 bg-[#F8F9FA] p-4 sm:p-8 lg:p-10 flex items-center justify-center">
              {activeStepIndex === 0 && (
                <div className="w-full max-w-md space-y-3">
                  <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[10px] text-[#0048D9] font-bold uppercase tracking-wider">TRACK 01</span>
                      <h5 className="font-display font-bold text-[#0F172A] text-sm">Frontend Developer</h5>
                      <span className="text-xs text-[#64748B]">React, HTML5, CSS Grid, TypeScript</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-md">Free</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#0048D9] shadow-sm ring-1 ring-[#0048D9]/20 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[10px] text-[#0048D9] font-bold uppercase tracking-wider">TRACK 02</span>
                      <h5 className="font-display font-bold text-[#0F172A] text-sm">Full Stack Developer</h5>
                      <span className="text-xs text-[#64748B]">React, Node.js, Express, Databases</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-md">Free</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[10px] text-[#0048D9] font-bold uppercase tracking-wider">TRACK 03</span>
                      <h5 className="font-display font-bold text-[#0F172A] text-sm">UI/UX Designer</h5>
                      <span className="text-xs text-[#64748B]">Figma, Design Systems, Heuristics</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-md">Free</span>
                  </div>
                </div>
              )}

              {activeStepIndex === 1 && (
                <div className="w-full max-w-md bg-[#0F172A] rounded-xl p-5 text-white shadow-md font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-[#1E293B] pb-2.5 text-[#94A3B8]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                      <span className="ml-2 text-[11px]">capstone-project.tsx</span>
                    </div>
                    <span className="text-[#38BDF8]">WEEK 2</span>
                  </div>
                  <div className="space-y-1 text-[#E2E8F0] pt-1">
                    <p className="text-[#94A3B8]">// Step 02: Real Component Logic</p>
                    <p><span className="text-[#F472B6]">export const</span> <span className="text-[#60A5FA]">DashboardView</span> = () =&gt; &#123;</p>
                    <p className="pl-4"><span className="text-[#F472B6]">const</span> [items, setItems] = <span className="text-[#60A5FA]">useState</span>([]);</p>
                    <p className="pl-4"><span className="text-[#F472B6]">return</span> &lt;<span className="text-[#38BDF8]">ProjectGrid</span> items=&#123;items&#125; /&gt;;</p>
                    <p>&#125;;</p>
                  </div>
                  <div className="pt-2 border-t border-[#1E293B] flex items-center justify-between text-[11px] text-[#059669]">
                    <span>✓ Build Passed</span>
                    <span>Zero Lint Errors</span>
                  </div>
                </div>
              )}

              {activeStepIndex === 2 && (
                <div className="w-full max-w-md bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-[#F1F3F5] pb-3">
                    <span className="font-mono text-xs font-bold text-[#0F172A]">MILESTONE ROADMAP</span>
                    <span className="text-xs font-bold text-[#0048D9]">4 Weeks</span>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8F9FA]">
                      <span className="font-medium text-[#0F172A]">W1: Foundations & Architecture</span>
                      <span className="text-[#059669] font-bold">100%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8F9FA]">
                      <span className="font-medium text-[#0F172A]">W2: Dynamic Logic & APIs</span>
                      <span className="text-[#059669] font-bold">100%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8F9FA]">
                      <span className="font-medium text-[#0F172A]">W3: Component System & Security</span>
                      <span className="text-[#059669] font-bold">100%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#0048D9]/10 border border-[#0048D9]/20">
                      <span className="font-bold text-[#0048D9]">W4: Production Deploy & Capstone</span>
                      <span className="text-[#0048D9] font-bold">Ready</span>
                    </div>
                  </div>
                </div>
              )}

              {activeStepIndex === 3 && (
                <div className="w-full max-w-md bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-wider">OFFICIAL CREDENTIAL</span>
                      <h5 className="font-display font-bold text-[#0F172A] text-base">Certificate of Completion</h5>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#0048D9] text-white flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#E2E8F0] font-mono text-xs flex justify-between items-center">
                    <span className="text-[#64748B]">ID: INTX-2026-8942</span>
                    <span className="text-[#059669] font-bold">● VERIFIED</span>
                  </div>
                  <p className="text-xs text-[#64748B]">Public queryable registry record backed by encrypted digital ledger.</p>
                </div>
              )}

              {activeStepIndex === 4 && (
                <div className="w-full max-w-md bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0048D9]/10 text-[#0048D9] flex items-center justify-center">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-display font-bold text-[#0F172A] text-sm">Resume & LinkedIn Ready</h5>
                      <span className="text-xs text-[#64748B]">Verified proof of technical skill</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-[#475569]">
                    <div className="p-2.5 rounded-lg bg-[#F8F9FA] border border-[#E2E8F0] flex items-center justify-between">
                      <span>✓ GitHub Repository Code</span>
                      <FolderGit2 className="w-4 h-4 text-[#0048D9]" />
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#F8F9FA] border border-[#E2E8F0] flex items-center justify-between">
                      <span>✓ Live Production URL Demo</span>
                      <ExternalLink className="w-4 h-4 text-[#0048D9]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
