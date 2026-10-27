import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

interface GuaranteeCardProps {
  onLearnMore?: () => void;
}

export const GuaranteeCard: React.FC<GuaranteeCardProps> = () => {
  const badges = [
    {
      title: '100% Money-Back',
      sub: 'Zero financial risk',
    },
    {
      title: '14-Day Review',
      sub: 'Full staging testing',
    },
    {
      title: 'Legally Binding',
      sub: 'Milestone contract',
    },
    {
      title: 'Zero Retainer Trap',
      sub: 'Pay for deliverables',
    },
  ];


  return (
    <div className="relative rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-emerald-950/20 via-[#0B1010] to-[#0A0A0F] p-8 sm:p-12 lg:p-14 shadow-2xl shadow-emerald-950/30 overflow-hidden">
      {/* Subtle top ambient indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header with Official Guarantee Seal & Headline */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          {/* Authentic Guarantee Seal Emblem */}
          <div className="relative shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-emerald-500/50 bg-emerald-950/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-900/30">
              <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
            </div>
            <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-emerald-500 text-black text-[9px] font-extrabold uppercase tracking-wider">
              14 DAYS
            </div>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Client Protection Guarantee</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
              Our 100% 14-Day Money-Back Guarantee
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Most agencies sell you a landing page and disappear. We build systems you actually use —
              and we&apos;re the only ones who&apos;ll give you your money back if we don&apos;t deliver.
            </p>
          </div>
        </div>

        {/* 4 Trust Badges Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {badges.map((b, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl border border-emerald-500/25 bg-emerald-950/20 flex flex-col items-center text-center space-y-1"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <div className="text-xs font-bold text-white tracking-tight">{b.title}</div>
              <div className="text-[11px] text-slate-400">{b.sub}</div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};
