import React from 'react';
import { Users, Briefcase, FileText, Award } from 'lucide-react';

export const TrustMetricsBento: React.FC = () => {
  const metrics = [
    {
      value: '25,000+',
      label: 'Students Enrolled',
      icon: Users,
    },
    {
      value: '50+',
      label: 'Programs',
      icon: Briefcase,
    },
    {
      value: '8,000+',
      label: 'Projects Submitted',
      icon: FileText,
    },
    {
      value: 'Top Colleges',
      label: 'Trusted by Students',
      icon: Award,
    },
  ];

  return (
    <section className="relative z-10 py-6 sm:py-8 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_4px_20px_rgba(7,27,59,0.04)] p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#E2E8F0]">
            {metrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-3.5 ${
                    idx === 0
                      ? 'lg:pr-8'
                      : idx === 3
                      ? 'lg:pl-8'
                      : 'lg:px-8'
                  }`}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#2563FF]/10 text-[#2563FF] flex items-center justify-center shrink-0 border border-[#2563FF]/15">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-lg sm:text-xl text-[#071B3B] tracking-tight leading-tight">
                      {item.value}
                    </div>
                    <div className="text-xs sm:text-[13px] text-[#64748B] font-medium leading-tight mt-0.5">
                      {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
