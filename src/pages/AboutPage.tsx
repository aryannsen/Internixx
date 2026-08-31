import React from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';
import { StudentStoriesSection } from '../components/sections/StudentStoriesSection';
import { useRouter } from '../context/RouterContext';
import { APPLICATION_FORM_URL } from '../config/site';
import { Target, CheckCircle2, Shield, Sparkles, Code2, Users, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();
  useScrollReveal();

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="bg-[#F8F9FA] border-b border-[#E2E8F0] py-8 sm:py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'About' },
            ]}
            className="mb-4"
          />

          <SectionHeading
            titleAs="h1"
            large
            eyebrow="Our Purpose"
            title="About Internix"
            description="A student-focused platform built on one core conviction: the best way to master technical and design skills is by building real projects."
          />
        </div>
      </div>

      {/* Main Narrative */}
      <section className="py-12 sm:py-16 bg-[#F8F9FA]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Story & Philosophy */}
            <div className="lg:col-span-8 space-y-8">
              <div data-reveal="about-story" className="reveal-on-scroll bg-white border border-[#E2E8F0] p-6 sm:p-8 rounded-2xl">
                <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-4">
                  Why We Built Internix
                </h2>
                <div className="space-y-4 text-base text-[#475569] leading-relaxed font-normal">
                  <p>
                    Many students find themselves trapped in what the developer community calls <em>"tutorial hell"</em>—watching hundreds of hours of video lectures, following along passively, but struggling when asked to start a project from an empty file.
                  </p>
                  <p>
                    Internix was created to provide the missing layer: <strong>structured project execution</strong>. We organize practical learning into defined 4-week tracks with clear weekly milestones, real deliverables, and transparent requirements.
                  </p>
                  <p>
                    Instead of testing memorization, Internix tests your ability to solve problems, write clean code, craft user-friendly interfaces, and deploy working software to the world.
                  </p>
                </div>
              </div>

              {/* Core Principles */}
              <div data-reveal="about-principles" className="reveal-on-scroll bg-white border border-[#E2E8F0] p-6 sm:p-8 rounded-2xl">
                <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-6">
                  Our Guiding Principles
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#F1F3F5] border border-[#E2E8F0] rounded-lg flex items-center justify-center text-[#0048D9] shrink-0 mt-0.5">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#0F172A]">
                        1. Action Over Theory
                      </h3>
                      <p className="text-sm text-[#475569] mt-1 leading-relaxed font-normal">
                        Theory matters, but implementation solidifies understanding. Every week at Internix produces tangible code or design artifacts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#F1F3F5] border border-[#E2E8F0] rounded-lg flex items-center justify-center text-[#0048D9] shrink-0 mt-0.5">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#0F172A]">
                        2. Transparent Expectations
                      </h3>
                      <p className="text-sm text-[#475569] mt-1 leading-relaxed font-normal">
                        We do not make exaggerated employment promises or fabricate partner logos. We offer honest, high-quality project frameworks and verified completion credentials.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#F1F3F5] border border-[#E2E8F0] rounded-lg flex items-center justify-center text-[#0048D9] shrink-0 mt-0.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#0F172A]">
                        3. Student-First Accessibility
                      </h3>
                      <p className="text-sm text-[#475569] mt-1 leading-relaxed font-normal">
                        Our programs are designed to accommodate busy student schedules with a reasonable 8–12 hour weekly commitment, fully remote participation, and free application access.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Internix is and is not */}
              <div data-reveal="about-positioning" className="reveal-on-scroll bg-white border border-[#E2E8F0] p-6 sm:p-8 rounded-2xl">
                <h2 className="font-display text-2xl font-bold text-[#0F172A] mb-4">
                  Honest Positioning
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="p-5 bg-[#F1F3F5] border border-[#E2E8F0] rounded-xl">
                    <span className="text-[11px] font-bold text-[#0048D9] uppercase tracking-widest block mb-3">
                      What Internix Is
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0048D9] shrink-0 mt-0.5" />
                        <span>A structured project program platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0048D9] shrink-0 mt-0.5" />
                        <span>Hands-on portfolio building</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0048D9] shrink-0 mt-0.5" />
                        <span>Verifiable Certificate of Completion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0048D9] shrink-0 mt-0.5" />
                        <span>Student community collaboration</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 bg-[#F1F3F5] border border-[#E2E8F0] rounded-xl">
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-widest block mb-3">
                      What Internix Is Not
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#64748B]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#64748B] font-bold">•</span>
                        <span>Not an accredited degree program</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#64748B] font-bold">•</span>
                        <span>No fabricated job guarantee claims</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#64748B] font-bold">•</span>
                        <span>No passive multi-hour lecture marathons</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#64748B] font-bold">•</span>
                        <span>No hidden fees or locked content</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Key Facts & Next Steps */}
            <div className="lg:col-span-4 space-y-6">
              <div data-reveal="about-facts" className="reveal-on-scroll bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-xs">
                <h3 className="font-display text-base font-bold text-[#0F172A] mb-3">
                  Program Structure At a Glance
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#475569]">
                  <div className="flex justify-between py-2 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B]">Duration:</span>
                    <span className="font-bold text-[#0F172A]">4 Weeks</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B]">Format:</span>
                    <span className="font-bold text-[#0F172A]">100% Online</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B]">Weekly Pace:</span>
                    <span className="font-bold text-[#0F172A]">8–12 Hours</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B]">Application:</span>
                    <span className="font-bold text-[#0F172A]">Online Application Form</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#64748B]">Certificate:</span>
                    <span className="font-bold text-[#0F172A]">Verifiable Digital ID</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    type="button"
                    onClick={() => navigate('/programs')}
                    variant="primary"
                    className="w-full"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore Programs
                  </Button>
                </div>
              </div>

              <div data-reveal="about-faq-card" className="reveal-on-scroll bg-[#F1F3F5] border border-[#E2E8F0] p-6 rounded-2xl">
                <h3 className="font-display text-sm font-bold text-[#0F172A] mb-2">
                  Have Questions?
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed mb-4 font-normal">
                  Check our FAQ page for detailed answers on admissions, project submissions, and certificate validation.
                </p>
                <button
                  type="button"
                  onClick={() => navigate('/faq')}
                  className="text-xs font-bold uppercase tracking-wider text-[#0048D9] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Read our FAQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Stories & Authentic Feedback */}
      <StudentStoriesSection />

      <CTASection />
    </div>
  );
};
