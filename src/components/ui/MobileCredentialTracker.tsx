import React from 'react';
import { Code2, CheckCircle2, Award, Share2, ArrowRight } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

const MOBILE_FLOW_NODES = [
  {
    step: '01',
    label: 'BUILD',
    desc: 'Real project tasks',
    icon: Code2,
    color: 'text-[#0048D9] bg-[#0048D9]/10 border-[#0048D9]/30',
  },
  {
    step: '02',
    label: 'COMPLETE',
    desc: 'Pass milestone review',
    icon: CheckCircle2,
    color: 'text-[#059669] bg-[#059669]/10 border-[#059669]/30',
  },
  {
    step: '03',
    label: 'EARN',
    desc: 'Verifiable Certificate ID',
    icon: Award,
    color: 'text-[#0048D9] bg-[#0048D9]/10 border-[#0048D9]/30',
  },
  {
    step: '04',
    label: 'SHOWCASE',
    desc: 'LinkedIn & resume proof',
    icon: Share2,
    color: 'text-[#7C3AED] bg-[#7C3AED]/10 border-[#7C3AED]/30',
  },
];

export const MobileCredentialTracker: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-xs">
      {/* Mini Flow Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#F1F3F5] mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0048D9] animate-pulse" />
          <span className="font-mono text-[10.5px] font-bold text-[#0F172A] uppercase tracking-wider">
            CREDENTIAL LIFECYCLE
          </span>
        </div>
        <span className="text-[10px] font-mono font-semibold text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded">
          4 WEEKS • FREE
        </span>
      </div>

      {/* Compact 2x2 Flow Grid */}
      <div className="grid grid-cols-2 gap-2">
        {MOBILE_FLOW_NODES.map((node) => {
          const Icon = node.icon;
          return (
            <div
              key={node.step}
              className="p-2.5 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[9px] font-bold text-[#94A3B8]">
                  {node.step}
                </span>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${node.color}`}>
                  <Icon className="w-3 h-3" />
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-xs text-[#0F172A] block leading-none">
                  {node.label}
                </span>
                <span className="text-[10px] text-[#64748B] font-normal leading-tight mt-0.5 block">
                  {node.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mini Verifier Action */}
      <button
        type="button"
        onClick={() => navigate('/verify')}
        className="w-full mt-3 py-2 px-3 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] text-[11px] font-semibold flex items-center justify-between cursor-pointer transition-colors"
      >
        <span className="font-mono text-[10px] text-[#475569]">Preview Certificate Format</span>
        <span className="text-[#0048D9] flex items-center gap-1 font-sans">
          Verify Demo <ArrowRight className="w-3 h-3" />
        </span>
      </button>
    </div>
  );
};
