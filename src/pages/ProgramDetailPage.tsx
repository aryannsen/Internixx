import React from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { ProgramMeta } from '../components/programs/ProgramMeta';
import { getProgramBySlug, PROGRAMS } from '../data/programs';
import { APPLICATION_FORM_URL } from '../config/site';
import { useRouter } from '../context/RouterContext';
import { ArrowUpRight, ArrowRight, Clock, Globe, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export interface ProgramDetailPageProps {
  slug: string;
}

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const program = getProgramBySlug(slug);

  useScrollReveal(slug);

  if (!program) {
    return (
      <div className="py-20 text-center max-w-lg mx-auto px-4">
        <h1 className="font-display text-2xl font-bold text-[#0F172A] mb-2">Program Not Found</h1>
        <p className="text-sm text-[#475569] mb-6">
          The program you requested does not exist or has been updated.
        </p>
        <button
          type="button"
          onClick={() => navigate('/programs')}
          className="bg-[#0048D9] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#003BB3]"
        >
          Browse All Programs
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-[#F8F9FA]">
      {/* Top Banner / Breadcrumb */}
      <section className="bg-white border-b border-[#E2E8F0] py-8 sm:py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Programs', href: '/programs' },
              { label: program.name },
            ]}
            className="mb-4"
          />

          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-[0.15em]">
                {program.category}
              </span>
              <span className="text-[10px] font-bold text-[#0048D9] bg-[#0048D9]/8 border border-[#0048D9]/20 px-2 py-0.5 rounded-md tracking-wider uppercase select-none">
                FREE TO JOIN
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight">
              {program.name}
            </h1>

            <p className="mt-3.5 text-base sm:text-lg text-[#475569] leading-relaxed">
              {program.tagline || program.description}
            </p>

            {/* Meta row */}
            <div className="mt-5 flex items-center gap-4 text-xs font-semibold text-[#0F172A]">
              <div className="flex items-center gap-1.5 text-[#334155]">
                <Clock className="w-4 h-4 text-[#64748B]" />
                <span>{program.duration || '1 Month'}</span>
              </div>
              <span className="text-[#CBD5E1]">•</span>
              <div className="flex items-center gap-1.5 text-[#334155]">
                <Globe className="w-4 h-4 text-[#0048D9]" />
                <span>{program.mode || 'Online'}</span>
              </div>
            </div>

            {/* Skills */}
            {program.skills && program.skills.length > 0 && (
              <div className="mt-4 text-xs text-[#64748B] font-medium">
                {program.skills.join(' • ')}
              </div>
            )}

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0048D9] hover:bg-[#003BB3] text-white py-3 px-6 rounded-xl text-sm font-semibold transition-colors duration-150 inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Apply for Internship</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => navigate('/programs')}
                className="bg-transparent hover:bg-[#F1F3F5] text-[#0F172A] border border-[#0F172A] py-3 px-6 rounded-xl text-sm font-semibold transition-colors duration-150 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View All Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-10 sm:py-14 border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-xl font-bold text-[#0F172A] mb-4">
              What you will work on
            </h2>
            <div className="space-y-3">
              {program.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white border border-[#E2E8F0] p-4 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#0048D9] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
