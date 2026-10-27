import React, { useState } from 'react';
import { PageId } from '../types';
import { BookCallButton } from '../components/common/BookCallButton';
import {
  Calendar,
  Mail,
  Send,
  CheckCircle,
  MessageSquare,
  ShieldCheck,
  Activity,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Clock,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    business: '',
    service: 'Web App Development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate instantaneous client-side submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-20 sm:space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* 1. DOMINANT HERO CTA: BOOK A CALL (CAL.COM PRIMARY) */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 backdrop-blur-md">
          <Calendar className="w-3.5 h-3.5" />
          <span>Fastest Response Route</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-heading font-bold text-white tracking-tight">
          Book a Free 30-Minute Architecture Call
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Skip the email ping-pong. Pick a time directly on our calendar to talk through
          your business objectives, technical requirements, and guaranteed timeline.
        </p>

        {/* Big Dominant Cal.com Button */}
        <div className="pt-2 flex flex-col items-center justify-center gap-3">
          <BookCallButton size="lg" variant="primary" className="py-4 px-8 text-lg">
            Schedule Directly via Cal.com
          </BookCallButton>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Instant Confirmation</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Free Strategy Session</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. SECONDARY OPTION: GLASS CONTACT FORM & CHANNELS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Glass Contact Form (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl relative">
          <div className="space-y-2 mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400">
              Prefer Writing?
            </div>
            <h2 className="text-2xl font-heading font-bold text-white">
              Send Us a Project Inquiry
            </h2>
            <p className="text-xs text-slate-400">
              Our response time is less than an hour with technical scope ideas and cost ranges.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Your Full Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Work Email <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    value={formState.business}
                    onChange={(e) => setFormState({ ...formState, business: e.target.value })}
                    placeholder="e.g. Acme Resorts"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Service Interested In
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm transition-colors"
                  >
                    <option value="Web App Development">Web App Development (Hero)</option>
                    <option value="WordPress Web Design">WordPress Web Design (Advanced Systems)</option>
                    <option value="WordPress RankMath SEO">WordPress RankMath SEO</option>
                    <option value="UI/UX Design">UI/UX Design (Figma)</option>
                    <option value="AI Automations">AI Automations & Operations</option>
                    <option value="Social Media Content">Social Media Content Suite</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Project Details & Goals <span className="text-purple-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell us what you're trying to build, your current bottlenecks, and your desired target launch date."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                {submitting ? (
                  <span>Sending inquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-purple-400" />
                    <span>Send Project Inquiry</span>
                  </>
                )}
              </button>

              <div className="text-center text-[11px] text-slate-400 pt-1">
                Protected by our 100% 14-day money-back guarantee. No spam ever.
              </div>
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 mx-auto flex items-center justify-center text-emerald-400">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Inquiry Received!
              </h3>
              <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, {formState.name || 'there'}. Our engineering team has received your note and will review your requirements and respond in less than an hour.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-purple-400 hover:text-purple-300 underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right: Direct Channels & OpenWidget helper (5 cols) */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl space-y-6">
            <h3 className="text-lg font-heading font-bold text-white">
              Direct Contact Details
            </h3>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-slate-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold text-white">Direct Email</span>
                </div>
                <div className="pl-6">
                  <a
                    href="mailto:care@vistavisuals.in"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium underline underline-offset-4"
                  >
                    care@vistavisuals.in
                  </a>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Our response time is less than an hour.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-slate-400 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold text-white">Live Chat Support</span>
                </div>
                <div className="pl-6 text-[11px] text-slate-400">
                  Click the OpenWidget bubble in the bottom-right corner of your screen for real-time chat with our team.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-slate-400 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-purple-400" />
                  <span className="font-semibold text-white">System Status</span>
                </div>
                <div className="pl-6 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Live service uptime & telemetry</span>
                  <a
                    href="https://status.vistavisuals.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Cal.com card reminder */}
          <div className="p-6 rounded-2xl border border-purple-500/30 bg-gradient-to-tr from-purple-900/20 via-blue-900/10 to-transparent space-y-3">
            <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
              Need Answers Today?
            </div>
            <div className="text-sm font-semibold text-white">
              Calendar bookings get priority over form inquiries.
            </div>
            <BookCallButton size="sm" variant="primary" fullWidth>
              Open Cal.com Calendar
            </BookCallButton>
          </div>
        </div>
      </section>
    </div>
  );
};
