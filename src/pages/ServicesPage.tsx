import React from 'react';
import { PageId } from '../types';
import { BookCallButton } from '../components/common/BookCallButton';
import {
  Globe,
  Search,
  Palette,
  Share2,
  Cpu,
  Layers,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Code2,
  Sparkles,
  BarChart3,
  Bot,
  Zap,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 sm:space-y-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-purple-300 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Full-Spectrum Digital Capabilities</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
          Services Built for Revenue, Not Just Aesthetic Praise
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Every capability is focused on measurable growth: higher booking conversions,
          organic discoverability, seamless user journeys, and automated back-office ops.
        </p>

        {/* Dedicated Web App Dev Banner */}
        <div className="pt-4">
          <div
            onClick={() => onNavigate('webapp')}
            className="p-4 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-blue-950/40 hover:border-blue-400/60 transition-all duration-200 cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-4 text-left group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-2">
                  <span>Hero Offering Spotlight</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300">
                    Dedicated Page
                  </span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Looking for Custom Web App Development?
                </div>
                <div className="text-xs text-slate-400">
                  Dashboards, portals, and custom web tools without enterprise agency overhead.
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 shrink-0">
              <span>View Web App Page</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 1: WordPress Web Design — "Build Anything" Pitch */}
      <section id="service-wordpress" className="scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              01 · WordPress Web Design
            </div>

            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              &ldquo;Build Anything&rdquo; — Custom Systems on WordPress
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We don&apos;t do cookie-cutter template landing pages. If your business needs a booking
              engine like a luxury resort, a recurring subscription portal like a fitness club, a
              service marketplace, or an authenticated client portal — we build it natively on
              WordPress with the power and fluidity of a custom web application.
            </p>

            {/* Proof of Range Use Cases */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Proven Use Cases We Engineer:
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <strong className="text-white">Resort & Hospitality Booking Systems:</strong> Live room calendar, automated GST taxes, and Razorpay checkout (see our{' '}
                  <button
                    onClick={() => onNavigate('portfolio')}
                    className="text-blue-400 hover:underline font-medium cursor-pointer"
                  >
                    Blueeyes Eco Resort case study
                  </button>
                  ).
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <strong className="text-white">Gym & Member Subscription Portals:</strong> Automated recurring billing, class bookings, and self-serve member dashboards.
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <strong className="text-white">Multi-Vendor & Service Marketplaces:</strong> Real-time quote generators, vendor payouts, and scheduling tools.
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <BookCallButton size="sm" variant="primary">
                Want this for your business? → Book a Call
              </BookCallButton>
            </div>
          </div>

          {/* Right: Interactive Visual Card */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-black/60 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold text-white">
                    Advanced WordPress Engine
                  </span>
                </div>
                <span className="text-[11px] text-emerald-400 font-mono">0 Bloat Plugins</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Dynamic Booking Logic</span>
                  <span className="text-purple-300 font-medium">Headless REST API</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Payment Gateways</span>
                  <span className="text-blue-300 font-medium">Razorpay / Stripe Webhooks</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Database Optimization</span>
                  <span className="text-emerald-300 font-medium">Custom Post Tables & Indexing</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Core Web Vitals</span>
                  <span className="text-fuchsia-300 font-medium">Sub-second LCP & 95+ Score</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <span>See It in Action: Blueeyes Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2: WordPress RankMath SEO */}
      <section id="service-seo" className="scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Visual Card (Alternating) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-black/60 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-semibold text-white">RankMath Technical Audit</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold">100/100 Score</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">Schema.org Rich Snippets</span>
                    <span className="text-emerald-400 text-[11px]">Validated JSON-LD</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Product, LocalBusiness, FAQ, and Review schemas that win Google search real estate.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">Core Web Vitals & Speed</span>
                    <span className="text-blue-400 text-[11px]">LCP &lt; 0.9s</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Edge caching, responsive AVIF image formatting, and zero cumulative layout shift.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">Keyword Cannibalization Guard</span>
                    <span className="text-purple-400 text-[11px]">Rank Strategy</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Siloed content architecture directing link equity to your highest-converting pages.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
              02 · WordPress RankMath SEO
            </div>

            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              We Don&apos;t Just Build It. We Make Sure People Find It.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              A visually stunning website is worthless if it sits on page 4 of Google. We implement
              deep technical SEO, on-page content architecture, structured Schema markup, and speed
              optimization using RankMath Pro — ensuring your site converts organic intent into
              paying clients.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Technical Site Architecture:</strong> Canonical routing, clean XML sitemaps, and robots directives.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Rich Schema Markup:</strong> JSON-LD structured data for hotels, SaaS, e-commerce, and services.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">On-Page Keyword Strategy:</strong> High-intent search terms mapped to conversion landing pages.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Core Web Vitals Pass:</strong> Green scores across FID, LCP, and CLS benchmarks.</span>
              </li>
            </ul>

            <div className="pt-4">
              <BookCallButton size="sm" variant="primary">
                Want this for your business? → Book a Call
              </BookCallButton>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 3: UI/UX Design (Figma) */}
      <section id="service-uiux" className="scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold uppercase tracking-wider">
              03 · UI/UX Design (Figma)
            </div>

            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Engineered for Conversion, Not Just Design Dribbble Shots
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We design digital interfaces that guide users smoothly toward action. From low-fidelity
              architectural wireframes to interactive high-fidelity prototypes and full design systems,
              our work eliminates friction and builds instant trust with your buyers.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Frictionless User Journeys:</strong> Clear visual hierarchy and single-goal conversion funnels.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Scalable Figma Design Systems:</strong> Reusable tokens, typography scales, and modular component kits.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Developer-Ready Specs:</strong> Zero guesswork when translating Figma components into production code.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Dark Mode & Glassmorphism:</strong> Premium, modern styling that sets your brand apart in competitive verticals.</span>
              </li>
            </ul>

            <div className="pt-4">
              <BookCallButton size="sm" variant="primary">
                Want this for your business? → Book a Call
              </BookCallButton>
            </div>
          </div>

          {/* Right: Visual Card */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-black/60 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-fuchsia-400" />
                  <span className="text-xs font-semibold text-white">Figma Design System Architecture</span>
                </div>
                <span className="text-[11px] text-fuchsia-400">Tokens & Auto-Layout</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <div className="text-[10px] text-slate-400 uppercase">Typography</div>
                  <div className="font-heading font-semibold text-white">Space Grotesk + Inter</div>
                  <div className="text-[10px] text-slate-400">Harmonized typographic scale</div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <div className="text-[10px] text-slate-400 uppercase">Color Science</div>
                  <div className="font-heading font-semibold text-white">Electric Blue &rarr; Magenta</div>
                  <div className="text-[10px] text-slate-400">WCAG AA 4.5:1 Contrast</div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <div className="text-[10px] text-slate-400 uppercase">Micro-Motion</div>
                  <div className="font-heading font-semibold text-white">200ms Settling</div>
                  <div className="text-[10px] text-slate-400">Snappy cubic-bezier curves</div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <div className="text-[10px] text-slate-400 uppercase">Mobile Ergonomics</div>
                  <div className="font-heading font-semibold text-white">44px Touch Targets</div>
                  <div className="text-[10px] text-slate-400">Bottom-thumb reachable CTAs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 4: Social Media Content */}
      <section id="service-social" className="scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Visual Card (Alternating) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-black/60 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold text-white">High-Impact Creative Suite</span>
                </div>
                <span className="text-[11px] text-blue-400">Organic Velocity</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">High-Retention Carousels</div>
                    <div className="text-[11px] text-slate-400">Educational multi-slide story frameworks</div>
                  </div>
                  <span className="text-blue-400 font-semibold text-xs">Instagram & LinkedIn</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">Brand Visual Identity Kits</div>
                    <div className="text-[11px] text-slate-400">Consistent typographic and color guidelines</div>
                  </div>
                  <span className="text-purple-400 font-semibold text-xs">Omnichannel</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">Video & Motion Hooks</div>
                    <div className="text-[11px] text-slate-400">First 3-second retention hooks for Reels & Shorts</div>
                  </div>
                  <span className="text-fuchsia-400 font-semibold text-xs">Short-Form</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              04 · Social Media Content
            </div>

            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Scroll-Stopping Creative That Builds Authority
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We design magnetic social assets, content calendars, and brand-consistent visual
              identities that command attention in crowded algorithmic feeds. No generic Canva
              templates — every graphic is bespoke and engineered to drive profile visits and clicks.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Multi-Slide Carousels:</strong> Deep educational narratives that earn saves, bookmarks, and shares.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Strategic Content Calendars:</strong> Consistent publishing schedules mapped to product drops and sales cycles.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Brand Visual Cohesion:</strong> Ensuring your social presence mirrors the premium quality of your website.</span>
              </li>
            </ul>

            <div className="pt-4">
              <BookCallButton size="sm" variant="primary">
                Want this for your business? → Book a Call
              </BookCallButton>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 5: AI Automations */}
      <section id="service-automations" className="scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              05 · AI Automations & Systems
            </div>

            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              We Don&apos;t Just Make You Look Good. We Make Your Business Run Itself.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Stop manually copy-pasting customer inquiries across WhatsApp, email, and spreadsheets.
              We build intelligent operational pipelines using n8n, Make, and LLM integrations that
              qualify incoming leads, sync your CRM, and dispatch automated follow-ups instantly.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Instant Lead Routing:</strong> Form submissions auto-qualified and synced to HubSpot/Notion/Sheets.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">AI Support & Inquiry Chatbots:</strong> Natural language bots answering FAQs and booking calls 24/7.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Automated Invoicing & WhatsApp Notifications:</strong> Instant PDF invoices and payment receipt confirmations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Internal Ops Automation:</strong> Eliminating 15+ hours of repetitive manual data entry per week.</span>
              </li>
            </ul>

            <div className="pt-4">
              <BookCallButton size="sm" variant="primary">
                Want this for your business? → Book a Call
              </BookCallButton>
            </div>
          </div>

          {/* Right: Visual Card */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-black/60 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-white">Automated Ops Architecture</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-mono">24/7 Active Execution</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-white font-medium">Inbound Lead Captured</span>
                  </div>
                  <span className="text-slate-400">Trigger: Website / Cal.com</span>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    <span className="text-white font-medium">AI Qualification & Scoring</span>
                  </div>
                  <span className="text-slate-400">Latency: &lt; 800ms</span>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-white font-medium">WhatsApp / Email Dispatch</span>
                  </div>
                  <span className="text-slate-400">Instant VIP Notification</span>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-400" />
                    <span className="text-white font-medium">CRM Records Synchronized</span>
                  </div>
                  <span className="text-slate-400">Zero Manual Entry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Call to Action at Bottom of Services */}
      <section className="text-center max-w-4xl mx-auto p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-purple-950/20 space-y-6">
        <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white">
          Not Sure Which Combination Your Business Needs?
        </h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Book a free 30-minute system architecture call. We will examine your current bottleneck,
          propose the leanest technical stack, and give you an exact price and timeline.
        </p>
        <BookCallButton size="lg" variant="primary">
          Book a Free Strategy Call
        </BookCallButton>
      </section>
    </div>
  );
};
