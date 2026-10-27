import React from 'react';
import { ShieldCheck, Zap, Code2, RefreshCw } from 'lucide-react';

interface TrustStripProps {
  onLearnMoreGuarantee?: () => void;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ onLearnMoreGuarantee }) => {
  const items = [
    {
      icon: ShieldCheck,
      title: '100% 14-Day Money-Back Guarantee',
      sub: 'Zero risk. If we do not deliver, you do not pay.',
      interactive: true,
    },
    {
      icon: Zap,
      title: 'Results-First, Not Retainer-First',
      sub: 'Milestone deliverables tied to actual business outcomes.',
      interactive: false,
    },
    {
      icon: Code2,
      title: 'Production-Grade Architecture',
      sub: 'Custom booking engines, secure APIs, and responsive UX.',
      interactive: false,
    },
    {
      icon: RefreshCw,
      title: 'Zero Vendor Lock-In',
      sub: 'You own 100% of your code, credentials, and assets.',
      interactive: false,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              onClick={item.interactive && onLearnMoreGuarantee ? onLearnMoreGuarantee : undefined}
              className={`p-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-start gap-3.5 transition-all duration-200 ${
                item.interactive ? 'cursor-pointer hover:border-purple-500/40 hover:bg-white/[0.06] group' : ''
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shrink-0 text-blue-400 group-hover:text-purple-300 transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-semibold text-white tracking-tight flex items-center gap-1.5">
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  {item.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
