import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

export const BlueeyesCaseStudy: React.FC = () => {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0E0E16] p-6 sm:p-8 space-y-6">
      {/* Header Row: Logo, Brand Info, and Prominent Visit Live Site Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <img
            src="https://blueeyesecoresort.in/wp-content/uploads/2026/08/favicon.png"
            alt="Blueeyes Eco Resort Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-white/15 bg-white/5 object-contain p-1.5 shrink-0 shadow-md"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const fallback = target.nextElementSibling;
              if (fallback) (fallback as HTMLElement).style.display = 'flex';
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-emerald-500/30 bg-emerald-950/40 items-center justify-center font-bold text-emerald-400 text-base shrink-0"
          >
            BE
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white tracking-tight">
                Blueeyes Eco Resort
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Delivered Dec 2024 · Luxury Hospitality Platform
            </p>
          </div>
        </div>

        {/* Prominent Visit Website Button */}
        <a
          href="https://blueeyesecoresort.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 hover:border-white/30 transition-all shadow-sm shrink-0"
        >
          <span>Visit Live Website</span>
          <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
        </a>
      </div>

      {/* Main Focus: Crisp Headline & Outcomes */}
      <div className="space-y-3">
        <h4 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
          From Zero to a Fully Booking-Enabled Hospitality Platform
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Full custom WordPress website with OYO-level UI/UX — a complete booking engine where guests
          select rooms, pick check-in/check-out dates, see live pricing, checkout with automatic 5% GST
          tax calculation, and pay via integrated Razorpay gateway.
        </p>
      </div>

      {/* 3 Essential Proof Points */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <div className="text-xs">
            <span className="font-semibold text-white">100% Direct Margins</span>
            <div className="text-[11px] text-slate-400">Zero OTA commissions</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5">
          <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
          <div className="text-xs">
            <span className="font-semibold text-white">OYO-Style UX</span>
            <div className="text-[11px] text-slate-400">Instant room date checkout</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5">
          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
          <div className="text-xs">
            <span className="font-semibold text-white">Razorpay Webhooks</span>
            <div className="text-[11px] text-slate-400">Automated 5% GST & payouts</div>
          </div>
        </div>
      </div>
    </div>
  );
};
