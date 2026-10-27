import React from 'react';
import { PageId } from '../types';
import { BookCallButton } from '../components/common/BookCallButton';
import {
  ShieldCheck,
  CheckCircle,
  XCircle,
  Zap,
  Cpu,
  Target,
  Sparkles,
  ArrowRight,
  UserCheck,
  Award,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const comparisonItems = [
    {
      factor: 'Team Structure',
      traditional: 'Junior designers overseen by account managers who don’t code.',
      vista: 'Founder-led engineering. You speak directly with the architects building your system.',
    },
    {
      factor: 'Contract Model',
      traditional: 'Expensive monthly retainers regardless of whether work moves your bottom line.',
      vista: 'Milestone-based project pricing with clear deliverable acceptance criteria.',
    },
    {
      factor: 'Technical Capability',
      traditional: 'Off-the-shelf templates and bloated theme builder plugins that slow down mobile.',
      vista: 'Custom code, high-performance headless architectures, and integrated APIs/webhooks.',
    },
    {
      factor: 'Risk Reversal',
      traditional: 'No refunds under any circumstances. You bear 100% of the project failure risk.',
      vista: '100% 14-Day Money-Back Guarantee. If we miss agreed milestones, you get a full refund.',
    },
  ];

  const guaranteeSteps = [
    {
      step: '1. Clear Scope & Criteria',
      desc: 'Before taking a single rupee/dollar, we write an unambiguous milestone spec outlining every feature, user flow, and design expectation.',
    },
    {
      step: '2. 14-Day Review Window',
      desc: 'Upon milestone delivery, you have 14 days to test the live staging environment on real devices with your team.',
    },
    {
      step: '3. Prompt Rectification',
      desc: 'If anything falls short of the written specification, we rectify it immediately at zero extra cost to you.',
    },
    {
      step: '4. 100% Unconditional Refund',
      desc: 'If we fail to deliver what was promised within the agreed milestone, you receive 100% of your deposit back without fine-print acrobatics.',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 backdrop-blur-md">
          <UserCheck className="w-3.5 h-3.5" />
          <span>Founder-Led & Execution-Obsessed</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-heading font-bold text-white tracking-tight">
          We Are Not a Template Agency.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Vista Visuals was founded on a simple truth: modern businesses don&apos;t need another
          bloated retainer invoice. They need high-leverage digital systems that convert traffic into revenue.
        </p>
      </section>

      {/* 2. FOUNDER STORY & POSITIONING */}
      <section className="p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-[#0E0E18] to-purple-950/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400">
              The Philosophy
            </div>

            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-snug">
              Why We Operate as a Lean Engineering Studio
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                In the traditional agency world, when you pay $10,000 or ₹5 Lakhs, 70% of that budget
                funds account managers, sales commissions, and overhead. The actual execution is handed
                down to junior contractors who rush through a generic template.
              </p>
              <p>
                At <strong className="text-white">Vista Visuals</strong>, we inverted that entire model.
                We operate as a founder-engineered, automation-powered studio. When you work with us,
                you communicate directly with technical builders who understand system architecture,
                payment APIs, and high-conversion UX.
              </p>
              <p>
                We build what works, measure what matters, and put our own skin in the game through an
                uncompromising 14-day guarantee.
              </p>
            </div>

            <div className="pt-2">
              <BookCallButton size="sm" variant="primary">
                Speak Directly with Our Founder
              </BookCallButton>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Core Studio Values
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Target className="w-3.5 h-3.5 text-blue-400" />
                    <span>Real Leverage Over Headcount</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    We use modern low-code, automated pipelines, and custom code to do the work of 10-person agencies in half the time.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" />
                    <span>Honesty Over Retainer Hype</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    If your business doesn&apos;t need an expensive web app, we will literally tell you not to build it.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Skin in the Game</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Every project is backed by our 100% money-back guarantee. If we don&apos;t deliver, you don&apos;t pay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 100% 14-DAY MONEY-BACK GUARANTEE IN FULL DETAIL */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Uncompromising Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            How Our 100% 14-Day Guarantee Works
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Most agencies make bold claims but hide behind 30-page contracts with zero refund clauses.
            We take the opposite stance: if we don&apos;t deliver the system we promised, you don&apos;t pay.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guaranteeSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] space-y-3 relative overflow-hidden group hover:border-emerald-500/40 transition-all"
            >
              <div className="text-sm font-heading font-bold text-emerald-400">
                {step.step}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-center max-w-2xl mx-auto text-xs sm:text-sm text-emerald-200">
          <strong>Why do we offer this?</strong> Because in over dozens of client deployments, our thorough discovery and engineering discipline ensure we hit the target every single time.
        </div>
      </section>

      {/* 4. COMPARISON: VISTA VISUALS VS TRADITIONAL AGENCIES */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
            Head-to-Head Comparison
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Vista Visuals vs. The Traditional Agency
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
            <thead>
              <tr className="border-b border-white/10 bg-black/40 text-slate-300">
                <th className="p-4 sm:p-5 font-semibold">Aspect</th>
                <th className="p-4 sm:p-5 font-semibold text-rose-300">Traditional Agency</th>
                <th className="p-4 sm:p-5 font-semibold text-purple-300">Vista Visuals</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonItems.map((item, index) => (
                <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-white whitespace-nowrap">
                    {item.factor}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-400">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{item.traditional}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-200 font-medium bg-purple-950/10">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item.vista}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="text-center max-w-3xl mx-auto space-y-6 pt-4">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
          Let&apos;s Discuss Your Project Directly
        </h2>
        <p className="text-sm text-slate-300">
          No salesmen. No slides. Just an honest conversation about your business architecture.
        </p>
        <BookCallButton size="lg" variant="primary">
          Book a Free Strategy Call
        </BookCallButton>
      </section>
    </div>
  );
};
