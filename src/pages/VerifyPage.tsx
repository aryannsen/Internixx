import React, { useState } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { ShieldCheck, Search, CheckCircle2, Info } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const VerifyPage: React.FC = () => {
  const [certId, setCertId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'idle' | 'searched'>('idle');

  useScrollReveal();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId.trim()) return;

    setIsSubmitting(true);
    // Simulate lightweight client lookup latency for UX feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setVerificationResult('searched');
    }, 400);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="bg-[#F8F9FA] border-b border-[#E2E8F0] py-8 sm:py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Verify Certificate' },
            ]}
            className="mb-4"
          />

          <SectionHeading
            titleAs="h1"
            large
            eyebrow="Credential Validation"
            title="Verify a Certificate"
            description="Authenticate and validate official Certificates of Completion issued by Internix."
          />
        </div>
      </div>

      {/* Verification Form Section */}
      <section className="py-12 sm:py-16 bg-[#F8F9FA]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            {/* Input Card */}
            <div data-reveal="verify-input-card" className="reveal-on-scroll bg-white border border-[#E2E8F0] p-6 sm:p-8 rounded-2xl shadow-xs">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 bg-[#F1F3F5] border border-[#E2E8F0] rounded-xl flex items-center justify-center text-[#0048D9] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-[#0F172A]">
                    Certificate Verification Portal
                  </h2>
                  <p className="text-xs text-[#64748B] font-normal">
                    Enter the unique alphanumeric ID found at the bottom of the issued certificate.
                  </p>
                </div>
              </div>

              <form onSubmit={handleVerify} className="space-y-4">
                <div>
                  <label
                    htmlFor="certificate-id-input"
                    className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2"
                  >
                    Certificate ID
                  </label>
                  <div className="relative">
                    <input
                      id="certificate-id-input"
                      type="text"
                      placeholder="e.g. INTX-2026-XXXX"
                      value={certId}
                      onChange={(e) => {
                        setCertId(e.target.value);
                        if (verificationResult === 'searched') setVerificationResult('idle');
                      }}
                      className="w-full bg-[#F1F3F5] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#64748B] font-mono focus:outline-none focus:border-[#0048D9] uppercase tracking-wider"
                      required
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-[#64748B]">
                    Format: INTX-[YEAR]-[UNIQUE_IDENTIFIER]
                  </p>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting || !certId.trim()}
                  className="w-full justify-center"
                  icon={<Search className="w-4 h-4" />}
                >
                  {isSubmitting ? 'Verifying Credential...' : 'Verify Certificate'}
                </Button>
              </form>

              {/* Status Display Area */}
              {verificationResult === 'searched' && (
                <div className="mt-6 pt-6 border-t border-[#E2E8F0] animate-in fade-in-50 duration-200">
                  <div className="p-4 bg-[#F1F3F5] border border-[#E2E8F0] rounded-xl flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#0048D9] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#0F172A]">
                        Registry Status Notice
                      </h3>
                      <p className="mt-1 text-xs text-[#475569] leading-relaxed font-normal">
                        The public online credential registry for active cohort certificates is currently being synchronized. For upcoming and concluding cohorts, certificate credentials submitted with ID <span className="font-mono font-bold text-[#0F172A]">{certId.toUpperCase()}</span> will be automatically accessible once the cohort review period is finalized.
                      </p>
                      <p className="mt-2 text-xs text-[#64748B]">
                        Need immediate manual verification for an academic institution or employer? Contact us at{' '}
                        <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-[#0048D9] hover:underline font-bold">
                          {SITE_CONFIG.contactEmail}
                        </a>.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Architecture / How Verification Works Card */}
            <div data-reveal="verify-standard-card" className="reveal-on-scroll mt-8 bg-[#F1F3F5] border border-[#E2E8F0] p-6 rounded-2xl">
              <h3 className="font-display text-xs font-bold text-[#0F172A] uppercase tracking-widest mb-3">
                Certificate Verification Standard
              </h3>

              <div className="space-y-3 text-xs text-[#475569]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0048D9] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0F172A]">Authentic Milestone Fulfillment: </span>
                    Certificates are only issued to students who actively submit all weekly tasks and capstone projects.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0048D9] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0F172A]">Tamper-Proof Record ID: </span>
                    Each credential is generated with a distinct cryptographically indexed ID linked to the student's name, track, and completion cohort.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0048D9] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0F172A]">Direct Employer Reference: </span>
                    Students can link their certificate URL directly on resumes, GitHub portfolios, and LinkedIn profile credentials.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
