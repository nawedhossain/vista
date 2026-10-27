import React, { useState } from 'react';
import { PageId } from '../types';
import { BookCallButton } from '../components/common/BookCallButton';
import {
  Layers,
  Calendar,
  Users,
  LayoutDashboard,
  ShieldCheck,
  CheckCircle,
  Zap,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Database,
  Code2,
  Lock,
  Workflow,
  Sparkles,
} from 'lucide-react';

interface WebAppDevPageProps {
  onNavigate: (page: PageId) => void;
}

export const WebAppDevPage: React.FC<WebAppDevPageProps> = ({ onNavigate }) => {
  const [activeAppType, setActiveAppType] = useState<number>(0);

  const appTypes = [
    {
      title: 'Booking & Reservation Engines',
      desc: 'Real-time date availability, inventory management, multi-tier pricing, automated taxes, and integrated payment gateways like Razorpay or Stripe.',
      metrics: 'Zero OTA Commissions · Sub-second booking checkout',
      sampleUI: {
        header: 'Live Hotel & Experience Booking Platform',
        badge: 'OYO-Grade UX',
        stats: [
          { label: 'Booking Conversion', value: '+42%' },
          { label: 'Merchant Processing', value: 'Instant' },
          { label: 'Platform Fee', value: '₹0 / month' },
        ],
      },
    },
    {
      title: 'Subscription & Membership Portals',
      desc: 'Self-serve customer account management, tiered recurring subscriptions, protected member content, and automated renewal dunning.',
      metrics: 'Automated recurring billing · Role-based access control',
      sampleUI: {
        header: 'Membership Dashboard & Access Gateway',
        badge: 'RBAC Security',
        stats: [
          { label: 'Churn Reduction', value: '-28%' },
          { label: 'Self-Service Upgrades', value: '78%' },
          { label: 'Billing Gateway', value: 'Stripe / Razorpay' },
        ],
      },
    },
    {
      title: 'Internal Operations Dashboards',
      desc: 'Custom back-office control centers replacing chaotic Google Sheets. Track inventory, dispatch teams, analyze revenue, and manage customer tickets in one place.',
      metrics: 'Single source of truth · Real-time operational oversight',
      sampleUI: {
        header: 'Operations Hub & Logistics Tracker',
        badge: 'Live Data Sync',
        stats: [
          { label: 'Hours Saved / Wk', value: '18 hrs' },
          { label: 'Data Latency', value: '< 200ms' },
          { label: 'Sync Endpoints', value: '100% Realtime' },
        ],
      },
    },
    {
      title: 'Customer & Client Portals',
      desc: 'Private authenticated portals where your clients can view project progress, approve deliverables, pay milestones, and submit feedback without messy email chains.',
      metrics: 'White-glove client experience · Accelerated invoice clearance',
      sampleUI: {
        header: 'Enterprise Client Workspace',
        badge: 'Brand Matched',
        stats: [
          { label: 'Invoice Clearance', value: '2.4x Faster' },
          { label: 'Client Satisfaction', value: '98%' },
          { label: 'Email Reductions', value: '-65%' },
        ],
      },
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & System Blueprint',
      desc: 'We map your business logic, database schemas, user roles, and payment flows before writing a single line of code.',
      icon: Database,
    },
    {
      step: '02',
      title: 'High-Fidelity Prototype (Figma)',
      desc: 'Interactive clickable prototype matching your brand identity and tested for frictionless conversion on mobile and desktop.',
      icon: LayoutDashboard,
    },
    {
      step: '03',
      title: 'Rapid Production Build',
      desc: 'Engineered using modern low-code + custom React/Node API stacks to deliver production stability in weeks rather than months.',
      icon: Code2,
    },
    {
      step: '04',
      title: 'Launch, Gateway & 14-Day Guarantee',
      desc: 'Production deployment, domain configuration, payment webhook testing, and full handover backed by our 100% 14-day guarantee.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* 1. HERO SECTION */}
      <section className="relative text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 backdrop-blur-md">
          <Layers className="w-3.5 h-3.5" />
          <span>Standalone Hero Offering · Custom Engineering</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-heading font-bold text-white tracking-tight leading-[1.1]">
          Custom Web Apps, Built{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400">
            Without the Enterprise
          </span>{' '}
          Price Tag.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Traditional enterprise software houses quote ₹15 Lakhs and 6 months for a custom
          dashboard or booking platform. We use modern, rapid low-code and custom architectures
          to ship production-ready, revenue-generating web applications in <strong className="text-white">weeks</strong>.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <BookCallButton size="lg" variant="primary">
            Book a Web App Strategy Call
          </BookCallButton>

          <button
            onClick={() => onNavigate('portfolio')}
            className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            <span>See Blueeyes Live Proof</span>
            <ChevronRight className="w-4 h-4 text-purple-400" />
          </button>
        </div>
      </section>

      {/* 2. "WHAT WE BUILD" - INTERACTIVE APPLICATION MATRIX */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
            Engineered Systems
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            What We Build
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Production-grade web software tailored to your specific business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Selector Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {appTypes.map((app, index) => {
              const isSelected = activeAppType === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveAppType(index)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer text-left ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-transparent border-purple-500 shadow-lg shadow-purple-900/20'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`text-base font-heading font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {app.title}
                    </h3>
                    {isSelected && <ArrowRight className="w-4 h-4 text-purple-400" />}
                  </div>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {app.desc}
                  </p>
                  <div className="mt-3 text-[11px] font-medium text-blue-400 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{app.metrics}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Preview Canvas (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-[#12121E] to-[#0A0A0F] shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-heading font-bold text-white">
                      {appTypes[activeAppType].sampleUI.header}
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30">
                      {appTypes[activeAppType].sampleUI.badge}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Live production architecture preview
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified Architecture</span>
                </div>
              </div>

              {/* Stat metric cards */}
              <div className="grid grid-cols-3 gap-3 my-6">
                {appTypes[activeAppType].sampleUI.stats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/5 text-center">
                    <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
                    <div className="text-lg sm:text-xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 tabular-nums">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Specifications Strip */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                <div className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                  <span>Stack Specifications</span>
                  <span className="text-[10px] text-purple-400">Production-Ready</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-blue-400" />
                    <span>Realtime Cloud Database</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>End-to-End SSL & Encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Workflow className="w-3.5 h-3.5 text-purple-400" />
                    <span>Webhooks & Automated Triggers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-fuchsia-400" />
                    <span>14-Day Money-Back Policy</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Ready to build your version?</span>
                <BookCallButton size="sm" variant="primary">
                  Book a Call
                </BookCallButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS SECTION: HOW WE BUILD (4-STEP GLASS TIMELINE) */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Execution Velocity
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            How We Build & Ship in Weeks, Not Quarters
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            A disciplined four-phase deployment lifecycle with clear milestone sign-offs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md relative group hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {step.step}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-purple-300 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-heading font-bold text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. PROOF SECTION: BLUEEYES BOOKING PLATFORM REFERENCE */}
      <section className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-950/20 via-purple-950/20 to-black/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Flagship Proof Point · Live in Production</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Blueeyes Eco Resort: OYO-Style Booking Engine
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              We engineered a full-featured hospitality booking platform for Blueeyes Eco Resort
              (blueeyesecoresort.in) in Dec 2024. Guests select dates, inspect room amenities, see
              automated 5% GST tax breakdowns, and checkout seamlessly via integrated Razorpay gateway.
              The client eliminated 20%+ OTA commission fees and owns the platform outright.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://blueeyesecoresort.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-colors"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider pb-2 border-b border-white/10">
              Platform Features Shipped:
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Live check-in & check-out date range picker</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dynamic pricing with automated 5% GST calculation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Integrated Razorpay payment gateway & webhooks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant automated booking ticket dispatch to guests</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6 pt-4">
        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
          Have a Custom Web App Idea? Let&apos;s Architect It.
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Schedule a 30-minute system discovery call. We will review your workflow, recommend
          the optimal architecture, and provide a fixed quote with our 14-day money-back guarantee.
        </p>
        <div className="pt-2">
          <BookCallButton size="lg" variant="primary">
            Book a Free Strategy Call
          </BookCallButton>
        </div>
      </section>
    </div>
  );
};
