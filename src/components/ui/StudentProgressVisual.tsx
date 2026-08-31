import React, { useState } from 'react';
import { BookOpen, Code2, UploadCloud, Award, Share2, CheckCircle2, ChevronRight, Terminal, Sparkles } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

interface JourneyStage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  tag: string;
  detailHeadline: string;
  deliverable: string;
  techTags: string[];
}

const STAGES: JourneyStage[] = [
  {
    id: 'learn',
    step: '01',
    title: 'LEARN',
    subtitle: 'Milestone Briefs',
    icon: BookOpen,
    tag: 'Week 1 Foundation',
    detailHeadline: 'Structured Architecture & System Design',
    deliverable: 'Access clear project requirements, standard workflows, and curated production references.',
    techTags: ['Git Workflow', 'Clean Architecture', 'System Specs'],
  },
  {
    id: 'build',
    step: '02',
    title: 'BUILD',
    subtitle: 'Real Codebases',
    icon: Code2,
    tag: 'Weeks 2–3 Development',
    detailHeadline: 'Write Code, Not Passive Tutorials',
    deliverable: 'Construct real client components, REST APIs, or UI design systems from empty files.',
    techTags: ['Hands-on Code', 'State Logic', 'API Integration'],
  },
  {
    id: 'submit',
    step: '03',
    title: 'SUBMIT',
    subtitle: 'Code Review',
    icon: UploadCloud,
    tag: 'Week 4 Submission',
    detailHeadline: 'Live Deployments & Repository Audits',
    deliverable: 'Deploy your project live to production hosts and submit clean GitHub repositories.',
    techTags: ['Live Deploy', 'Documentation', 'Code Quality'],
  },
  {
    id: 'certified',
    step: '04',
    title: 'CERTIFY',
    subtitle: 'Digital ID',
    icon: Award,
    tag: 'Validation',
    detailHeadline: 'Verifiable Certificate of Completion',
    deliverable: 'Obtain an encrypted, publicly queryable Certificate of Completion with tamper-resistant ID.',
    techTags: ['Verifiable ID', 'Public Ledger', 'Zero-Fee'],
  },
  {
    id: 'showcase',
    step: '05',
    title: 'SHOWCASE',
    subtitle: 'Career Proof',
    icon: Share2,
    tag: 'Career Readiness',
    detailHeadline: 'Real Portfolio Value for Resumes',
    deliverable: 'Attach real repository links, live demos, and verified credential badges to your LinkedIn & CV.',
    techTags: ['LinkedIn Badge', 'Live URL Proof', 'Resume Asset'],
  },
];

export const StudentProgressVisual: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('build');
  const { navigate } = useRouter();

  const currentStage = STAGES.find((s) => s.id === activeStageId) || STAGES[1];

  return (
    <div className="w-full bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_12px_36px_-12px_rgba(15,23,42,0.06)] overflow-hidden">
      {/* Header Bar */}
      <div className="bg-[#0F172A] text-white px-5 py-3.5 flex items-center justify-between border-b border-[#1E293B]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0048D9] animate-pulse" />
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#94A3B8]">
            INTERNIX PROGRESSION ENGINE
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-[#38BDF8]">
          <span>4-WEEK LIFECYCLE</span>
        </div>
      </div>

      {/* Interactive Progress Rail */}
      <div className="p-4 sm:p-6 bg-[#F8F9FA] border-b border-[#E2E8F0]">
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageId(stage.id)}
                className={`group relative flex flex-col items-center text-center p-2 sm:p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#0048D9] shadow-sm ring-1 ring-[#0048D9]'
                    : 'bg-white/60 border-[#E2E8F0] hover:bg-white hover:border-[#CBD5E1]'
                }`}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mb-1.5 transition-colors ${
                    isActive
                      ? 'bg-[#0048D9] text-white'
                      : 'bg-[#F1F5F9] text-[#64748B] group-hover:text-[#0F172A]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span
                  className={`font-mono text-[9px] sm:text-[10px] font-bold tracking-wider uppercase block ${
                    isActive ? 'text-[#0048D9]' : 'text-[#64748B]'
                  }`}
                >
                  {stage.step} {stage.title}
                </span>
                <span className="hidden md:block text-[10px] text-[#94A3B8] font-normal truncate max-w-full">
                  {stage.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Detailed Inspector */}
      <div className="p-5 sm:p-6 bg-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-[#F1F3F5]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#0048D9]/10 text-[#0048D9] font-mono text-[11px] font-semibold tracking-wide uppercase mb-1.5">
              <span>{currentStage.tag}</span>
            </div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-[#0F172A]">
              {currentStage.detailHeadline}
            </h4>
          </div>

          <button
            type="button"
            onClick={() => navigate('/how-it-works')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0048D9] hover:text-[#003BB3] transition-colors cursor-pointer shrink-0"
          >
            <span>Learn full workflow</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="mt-4 text-sm text-[#475569] leading-relaxed font-normal">
          {currentStage.deliverable}
        </p>

        {/* Tech Stack & Milestone Tokens */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider mr-1">
            Focus:
          </span>
          {currentStage.techTags.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F8F9FA] border border-[#E2E8F0] text-xs font-medium text-[#0F172A]"
            >
              <CheckCircle2 className="w-3 h-3 text-[#0048D9]" />
              <span>{tech}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
