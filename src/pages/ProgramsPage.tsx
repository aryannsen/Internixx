import React, { useState } from 'react';
import { ProgramCard } from '../components/programs/ProgramCard';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { PROGRAMS, PROGRAM_FILTER_CATEGORIES, FilterCategory } from '../data/programs';
import { APPLICATION_FORM_URL } from '../config/site';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const ProgramsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('ALL');

  useScrollReveal(selectedCategory);

  const filteredPrograms = PROGRAMS.filter((program) => {
    if (selectedCategory === 'ALL') return true;
    return program.category === selectedCategory;
  });

  return (
    <div className="flex flex-col bg-[#F8F9FA] min-h-screen">
      {/* Header Area */}
      <div className="border-b border-[#E2E8F0] py-6 sm:py-10 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Programs' },
            ]}
            className="mb-3"
          />

          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#0048D9] font-semibold text-[11px] tracking-[0.2em] uppercase">
              STUDENT INTERNSHIPS
            </span>
            <span className="text-[#CBD5E1]">•</span>
            <span className="text-[#64748B] font-bold text-[10.5px] tracking-[0.15em] uppercase">
              FREE TO JOIN
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Available Programs
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#475569] max-w-xl">
            Choose a practical track to gain hands-on experience and build portfolio projects.
          </p>
        </div>
      </div>

      {/* Category Filter Navigation */}
      <div className="sticky top-16 sm:top-[68px] z-20 bg-[#F8F9FA]/95 backdrop-blur-md border-b border-[#E2E8F0] py-3.5 shadow-2xs">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="w-full overflow-x-auto pb-1 scrollbar-none">
            <div className="flex items-center gap-2 min-w-max">
              {PROGRAM_FILTER_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-[#0F172A] text-white shadow-xs'
                        : 'bg-white text-[#475569] border border-[#E2E8F0] hover:text-[#0F172A] hover:border-[#0F172A]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Program Grid */}
      <section className="py-8 sm:py-12 flex-1">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-6">
            {filteredPrograms.map((program, idx) => (
              <ProgramCard key={program.id} program={program} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Apply Banner */}
      <section className="border-t border-[#E2E8F0] py-8 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-bold text-[#0F172A]">
              Ready to submit your application?
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
              Online 1-month structured student programs with verified certificates.
            </p>
          </div>

          <a
            href={APPLICATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0048D9] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#003BB3] transition-colors inline-flex items-center gap-1.5 shrink-0 shadow-xs"
          >
            <span>Apply for Internship</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
