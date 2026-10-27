import React from 'react';
import { PageId } from '../types';
import { BookCallButton } from '../components/common/BookCallButton';
import { TrustStrip } from '../components/common/TrustStrip';
import { GuaranteeCard } from '../components/common/GuaranteeCard';
import { BlueeyesCaseStudy } from '../components/case-study/BlueeyesCaseStudy';
import {
  Globe,
  Search,
  Palette,
  Share2,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const serviceTeasers = [
    {
      id: 'wordpress',
      page: 'services' as PageId,
      icon: Globe,
      title: 'WordPress Web Design',
      hook: 'Custom booking engines, member portals, and advanced systems.',
      tag: 'Build Anything',
    },
    {
      id: 'webapp',
      page: 'webapp' as PageId,
      icon: Layers,
      title: 'Web App Development',
      hook: 'Custom SaaS dashboards, tools, and portals without enterprise price tags.',
      tag: 'Hero Offering',
      highlight: true,
    },
    {
      id: 'seo',
      page: 'services' as PageId,
      icon: Search,
      title: 'WordPress RankMath SEO',
      hook: 'Deep technical SEO, Schema markup, and speed for Google rankings.',
      tag: 'Organic Growth',
    },
    {
      id: 'uiux',
      page: 'services' as PageId,
      icon: Palette,
      title: 'UI/UX Design in Figma',
      hook: 'Prototypes, user flows, and conversion-engineered design systems.',
      tag: 'High Conversion',
    },
    {
      id: 'social',
      page: 'services' as PageId,
      icon: Share2,
      title: 'Social Media Content',
      hook: 'Scroll-stopping visual assets, carousels, and brand creative.',
      tag: 'Brand Velocity',
    },
    {
      id: 'automations',
      page: 'services' as PageId,
      icon: Cpu,
      title: 'AI Automations',
      hook: 'Automated CRM routing, lead qualification, and hands-off ops.',
      tag: 'Self-Running Ops',
    },
  ];

  const handleScrollToCaseStudy = () => {
    const el = document.getElementById('case-study-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION — Singular, High-Converting Focal Point (Mobile-Optimized) */}
      <section className="relative pt-6 sm:pt-20 pb-4 text-center max-w-4xl mx-auto px-4 sm:px-6">
        {/* Responsive trust badge */}
        <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs text-slate-300 backdrop-blur-md mb-5 sm:mb-6 max-w-full text-center">
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
          <span className="font-semibold text-white">100% 14-Day Money-Back Guarantee</span>
          <span className="hidden sm:inline text-slate-500">·</span>
          <span className="text-blue-400 font-medium">Results-First Agency</span>
        </div>

        {/* Big Bold Headline — Adjusted for Mobile */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-heading font-bold tracking-tight text-white leading-[1.15] sm:leading-[1.08] px-1 sm:px-0">
          Websites and Systems That{' '}
          <span className="text-blue-500">Actually Move</span> Your Business.
        </h1>

        {/* Crisp Subheadline */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-1 sm:px-0">
          We engineer custom booking platforms, web applications, and automated workflows that
          generate real revenue. If we don&apos;t deliver, you don&apos;t pay.
        </p>

        {/* Clear Primary CTAs — Full-width friendly on Mobile */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
          <BookCallButton size="lg" variant="primary" className="w-full sm:w-auto">
            Book a Free Strategy Call
          </BookCallButton>

          <button
            type="button"
            onClick={handleScrollToCaseStudy}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>See Live Proof</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </button>
        </div>

        {/* Mobile-wrapping trust checklist */}
        <div className="mt-6 text-[11px] sm:text-xs text-slate-400 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 px-2">
          <span>✓ 30-min architecture review</span>
          <span className="hidden sm:inline">·</span>
          <span>✓ Direct founder execution</span>
          <span className="hidden sm:inline">·</span>
          <span>✓ No retainer trap</span>
        </div>
      </section>

      {/* 2. TRUST / DIFFERENTIATOR STRIP */}
      <section>
        <TrustStrip onLearnMoreGuarantee={() => onNavigate('about')} />
      </section>

      {/* 3. SERVICES OVERVIEW — Focused 6-Card Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Six Ways We Grow Your Business
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Click any service to view full capabilities and real-world use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceTeasers.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onNavigate(service.page)}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer group flex flex-col justify-between ${
                  service.highlight
                    ? 'border-blue-500/50 bg-blue-950/20 hover:border-blue-400'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.05]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {service.hook}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white">
                  <span>Explore capability</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. THE 100% 14-DAY MONEY-BACK GUARANTEE — Badges & Emerald Outline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <GuaranteeCard onLearnMore={() => onNavigate('about')} />
      </section>

      {/* 5. FEATURED CASE STUDY: BLUEEYES ECO RESORT (Clean & Static) */}
      <section id="case-study-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
            Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Featured Case Study
          </h2>
        </div>

        {/* Static, High-Impact Case Study Component with Real Square Logo */}
        <BlueeyesCaseStudy />
      </section>

      {/* 6. FINAL CTA SECTION — Sharp Conversion Focus */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-10 sm:p-14 rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-950/30 to-[#0A0A0F] space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Let&apos;s Build Something That Actually Works.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Ready to replace brochure pages with a system that drives measurable revenue?
            Book a 30-minute discovery call today.
          </p>

          <div className="pt-2 flex justify-center">
            <BookCallButton size="lg" variant="primary">
              Book a Call
            </BookCallButton>
          </div>

          <div className="text-xs text-slate-400 pt-1">
            100% 14-Day Money-Back Guarantee · No Sales Pressure
          </div>
        </div>
      </section>
    </div>
  );
};
