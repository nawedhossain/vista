import React from 'react';
import { PageId } from '../types';
import { BookCallButton } from '../components/common/BookCallButton';
import { BlueeyesCaseStudy } from '../components/case-study/BlueeyesCaseStudy';
import { ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 sm:space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 backdrop-blur-md">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Case Studies & Track Record</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-heading font-bold text-white tracking-tight">
          Proof, Not Promises.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We don&apos;t pad our portfolio with speculative concept art. Here is real production work
          delivering real revenue for our clients.
        </p>
      </section>

      {/* 2. CASE STUDY: BLUEEYES ECO RESORT (Clean & Static) */}
      <section className="space-y-6">
        <BlueeyesCaseStudy />
      </section>

      {/* 3. YOUR BRAND COULD BE NEXT GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Active Pipeline
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Your Brand Could Be Next
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            We limit concurrent builds to maintain direct founder oversight and guarantee delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-blue-400 uppercase">In Development</span>
              <h3 className="text-base font-heading font-bold text-white">
                B2B Subscription & Logistics Portal
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multi-tenant billing, automated invoices, and dispatch tracking.
              </p>
            </div>
            <div className="text-[11px] text-slate-500">Confidential Client · Launching Q2</div>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-purple-400 uppercase">Architecture Phase</span>
              <h3 className="text-base font-heading font-bold text-white">
                D2C Luxury Brand Experience
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                High-performance headless storefront with automated checkout workflows.
              </p>
            </div>
            <div className="text-[11px] text-slate-500">Launching Soon</div>
          </div>

          <div className="p-6 rounded-2xl border border-dashed border-blue-500/40 bg-blue-950/20 flex flex-col justify-between space-y-4 text-center">
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-emerald-400 uppercase">Open Slot</span>
              <h3 className="text-base font-heading font-bold text-white">
                Next Production Sprint
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                1 project slot open this month with our 100% 14-day money-back guarantee.
              </p>
            </div>
            <div>
              <BookCallButton size="sm" variant="primary" fullWidth>
                Claim This Slot
              </BookCallButton>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CONVERSION SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6 pt-4">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
          Ready to Build a High-Performing Platform?
        </h2>
        <p className="text-sm text-slate-300">
          Book a 30-minute discovery call with our founder.
        </p>
        <div className="flex justify-center">
          <BookCallButton size="lg" variant="primary">
            Book a Call
          </BookCallButton>
        </div>
      </section>
    </div>
  );
};
