import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { BookCallButton } from './BookCallButton';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'services', label: 'Services' },
    { id: 'webapp', label: 'Web App Dev' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-gradient-to-r from-[#05050A] via-[#0A0A0F]/95 to-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60 py-2.5 sm:py-3'
            : 'bg-gradient-to-r from-[#05050A]/70 via-[#0A0A0F]/30 to-transparent py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 sm:gap-6 md:gap-8">
            {/* Zone 1: Brand Wordmark with Looping V Icon — Darkened contrast backdrop */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none shrink-0"
              aria-label="Vista Visuals Home"
            >
              <img
                src="/logo.png"
                alt="Vista Visuals Logo"
                className="h-7 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to high-res SVG Ribbon V if logo asset fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling;
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              />
              <div
                style={{ display: 'none' }}
                className="items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-purple-600 to-fuchsia-500 p-0.5 flex items-center justify-center shadow-md shadow-purple-600/30">
                  <div className="w-full h-full bg-[#0A0A0F] rounded-[7px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 to-fuchsia-400 text-lg">
                    V
                  </div>
                </div>
                <span className="font-heading font-bold text-lg sm:text-xl text-white tracking-tight">
                  Vista <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Visuals</span>
                </span>
              </div>
            </button>

            {/* Zone 2: Navigation Links (Single line, subtle underline on hover) */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative py-1 whitespace-nowrap transition-colors duration-200 cursor-pointer text-sm ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Sticky / Dominant Cal.com CTA button + Mobile hamburger */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden sm:block">
                <BookCallButton size="sm" variant="primary">
                  Book a Call
                </BookCallButton>
              </div>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Glass Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col justify-between bg-[#0A0A0F]/95 backdrop-blur-2xl px-6 pt-24 pb-8 border-b border-white/10 animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between w-full py-3.5 px-4 rounded-xl text-base font-medium transition-all text-left ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-purple-500/30'
                      : 'text-slate-200 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <div className="text-xs text-slate-400 text-center">
              100% 14-Day Money-Back Guarantee
            </div>
            <BookCallButton
              size="lg"
              fullWidth
              variant="primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Strategy Call
            </BookCallButton>
          </div>
        </div>
      )}
    </>
  );
};
