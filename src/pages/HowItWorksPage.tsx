import React from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';
import { APPLICATION_FORM_URL } from '../config/site';
import { useRouter } from '../context/RouterContext';
import {
  Compass,
  FileCheck,
  Mail,
  MessageSquare,
  Code2,
  Send,
  Award,
  Check,
  ArrowRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const HowItWorksPage: React.FC = () => {
  const { navigate } = useRouter();
  useScrollReveal();

  const steps = [
    {
      number: '01',
      title: 'Discover a program',
      description: 'Explore the available Internix tracks, review the 4-week milestones, weekly commitments, and expected project outputs to find the right fit for your learning goals.',
      icon: <Compass className="w-5 h-5 text-[#0048D9]" />,
      details: [
        'Detailed syllabus and milestone breakdown for every track',
        'Transparent prerequisite requirements (beginner friendly)',
        'Clear preview of final portfolio deliverables',
      ],
    },
    {
      number: '02',
      title: 'Submit your application',
      description: 'Fill out the official Google Form application with your background details, contact information, and track choice. There is no complex test or fee required to apply.',
      icon: <FileCheck className="w-5 h-5 text-[#0048D9]" />,
      details: [
        'Quick 3-minute application via Google Forms',
        'Select your preferred track and cohort timeline',
        'Rolling review and admissions confirmation',
      ],
    },
    {
      number: '03',
      title: 'Receive program instructions',
      description: 'Prior to cohort kickoff, you will receive an orientation guide via email containing environment setup instructions, milestone calendar, and starter documentation.',
      icon: <Mail className="w-5 h-5 text-[#0048D9]" />,
      details: [
        'Complete software and tooling setup guides',
        'Calendar of milestone release dates and deadlines',
        'Code style guides, best practices, and starter templates',
      ],
    },
    {
      number: '04',
      title: 'Join program communication',
      description: 'Connect with fellow student cohort members through the official Internix communication channel. Ask technical questions, share progress, and receive weekly cohort announcements.',
      icon: <MessageSquare className="w-5 h-5 text-[#0048D9]" />,
      details: [
        'Dedicated track discussion rooms',
        'Cohort announcements and milestone updates',
        'Collaborative peer review and troubleshooting',
      ],
    },
    {
      number: '05',
      title: 'Complete weekly tasks',
      description: 'Each week focuses on a tangible milestone. Work through practical exercises, develop project modules, and apply concepts directly into real code or design files.',
      icon: <Code2 className="w-5 h-5 text-[#0048D9]" />,
      details: [
        'Structured 8–12 hour weekly commitment',
        'Practical hands-on building, no rote memorization',
        'Incremental progress toward your capstone project',
      ],
    },
    {
      number: '06',
      title: 'Submit your work',
      description: 'Submit your milestone repositories, live application URLs, or Figma prototypes through our structured submission portal for criteria review.',
      icon: <Send className="w-5 h-5 text-[#0048D9]" />,
      details: [
        'Digital submission of GitHub repos, live sites, or Figma files',
        'Criteria validation for completeness and functionality',
        'Opportunity to refine submissions based on feedback',
      ],
    },
    {
      number: '07',
      title: 'Complete the program & earn certificate',
      description: 'Students who fulfill all milestone requirements receive an official, verifiable Internix Certificate of Completion along with a completed portfolio project.',
      icon: <Award className="w-5 h-5 text-[#0048D9]" />,
      details: [
        'Official Certificate of Completion with unique verification ID',
        'Verifiable online credential shareable on LinkedIn and resumes',
        'Tangible portfolio asset to demonstrate practical ability',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="bg-[#F8F9FA] border-b border-[#E2E8F0] py-8 sm:py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'How It Works' },
            ]}
            className="mb-4"
          />

          <SectionHeading
            titleAs="h1"
            large
            eyebrow="Cohort Process"
            title="How Internix Works"
            description="From application to verified project completion: a transparent, structured student journey designed around practical outcomes."
          />
        </div>
      </div>

      {/* Main Process List */}
      <section className="py-12 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="space-y-6 max-w-4xl mx-auto">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                data-reveal={`step-${step.number}`}
                className="reveal-on-scroll bg-white border border-[#E2E8F0] p-6 sm:p-8 rounded-2xl shadow-xs hover:border-[#0F172A] transition-colors"
              >
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  {/* Step icon & number */}
                  <div className="flex items-center gap-3 sm:flex-col sm:items-center shrink-0">
                    <div className="w-10 h-10 bg-[#F1F3F5] border border-[#E2E8F0] rounded-xl flex items-center justify-center">
                      {step.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-[#64748B]">
                      STEP {step.number}
                    </span>
                  </div>

                  {/* Step content */}
                  <div className="flex-1">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] capitalize">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
                      {step.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                      <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-widest block mb-2">
                        Key Details
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#475569] list-none p-0 m-0">
                        {step.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#0048D9] shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance Callout */}
      <section className="py-16 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div data-reveal="hiw-reassurance" className="reveal-on-scroll max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 bg-[#F1F3F5] border border-[#E2E8F0] rounded-xl flex items-center justify-center text-[#0048D9] mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#0F172A]">
              Clear expectations, no surprises
            </h3>
            <p className="mt-3 text-base text-[#475569] leading-relaxed font-normal">
              We do not lock tasks behind paywalls, change deadlines abruptly, or demand full-time hours. Internix is engineered specifically to empower students to build real portfolio pieces at a sustainable weekly pace.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Button
                type="button"
                onClick={() => navigate('/programs')}
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Browse Programs
              </Button>
              <Button
                as="a"
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Apply for Internship
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
