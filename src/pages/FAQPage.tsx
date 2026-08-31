import React, { useState, useMemo } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { CTASection } from '../components/sections/CTASection';
import { FAQ_DATA } from '../data/faq';
import { Search, HelpCircle, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useScrollReveal();

  const categories = ['All', 'General', 'Applications', 'Curriculum & Tasks', 'Certificates'];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="bg-[#F8F9FA] border-b border-[#E2E8F0] py-8 sm:py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'FAQ' },
            ]}
            className="mb-4"
          />

          <SectionHeading
            titleAs="h1"
            large
            eyebrow="Help & Knowledge Base"
            title="Frequently Asked Questions"
            description="Find direct answers regarding program structure, admissions, technical tasks, and certificate credentials."
          />
        </div>
      </div>

      {/* Main FAQ Container */}
      <section className="py-12 sm:py-16 bg-[#F8F9FA]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Search & Category Filter */}
            <div data-reveal="faq-filter" className="reveal-on-scroll bg-white border border-[#E2E8F0] p-4 sm:p-6 mb-8 rounded-2xl shadow-xs">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search any question or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#F1F3F5] border border-[#E2E8F0] rounded-xl pl-10 pr-4 py-2 text-sm text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:border-[#0048D9]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-[#64748B] hover:text-[#0F172A] font-bold uppercase absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg border transition-colors whitespace-nowrap cursor-pointer ${
                          isSelected
                            ? 'bg-[#0048D9] text-white border-[#0048D9]'
                            : 'bg-[#F1F3F5] text-[#475569] hover:text-[#0F172A] border-[#E2E8F0]'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Accordion List */}
            {filteredFaqs.length > 0 ? (
              <div data-reveal="faq-list" className="reveal-on-scroll bg-white border border-[#E2E8F0] p-6 sm:p-8 rounded-2xl shadow-xs">
                <FAQAccordion items={filteredFaqs} />
              </div>
            ) : (
              <div className="bg-white border border-[#E2E8F0] p-12 rounded-2xl text-center">
                <HelpCircle className="w-8 h-8 text-[#64748B] mx-auto mb-3" />
                <h3 className="font-display font-bold text-[#0F172A] text-lg">No matching questions</h3>
                <p className="text-sm text-[#475569] mt-1">
                  We couldn't find an answer matching "{searchQuery}". Try selecting "All" or reach out to our team.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 text-xs font-bold uppercase tracking-wider text-[#0048D9] hover:underline cursor-pointer"
                >
                  Reset filters
                </button>
              </div>
            )}

            {/* Direct Contact Support Box */}
            <div data-reveal="faq-contact-box" className="reveal-on-scroll mt-10 bg-[#F1F3F5] border border-[#E2E8F0] p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-sm font-bold text-[#0F172A]">
                  Still have questions?
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-0.5 font-normal">
                  Reach out to the Internix coordination desk for help with applications or program tracks.
                </p>
              </div>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0048D9] bg-white border border-[#E2E8F0] hover:border-[#0048D9] hover:bg-[#F8FAFC] px-4 py-2.5 rounded-xl transition-colors shrink-0 shadow-2xs group"
              >
                <Mail className="w-3.5 h-3.5 text-[#0048D9] group-hover:scale-110 transition-transform" />
                <span>{SITE_CONFIG.contactEmail}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
