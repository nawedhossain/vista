/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingBackground } from './components/common/FloatingElements';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WebAppDevPage } from './pages/WebAppDevPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const pageToPath: Record<PageId, string> = {
  home: '/',
  services: '/services',
  webapp: '/web-app-development',
  portfolio: '/portfolio',
  about: '/about',
  contact: '/contact',
};

const pathToPage: Record<string, PageId> = {
  '/': 'home',
  '/services': 'services',
  '/services/': 'services',
  '/web-app-development': 'webapp',
  '/web-app-development/': 'webapp',
  '/webapp': 'webapp',
  '/webapp/': 'webapp',
  '/portfolio': 'portfolio',
  '/portfolio/': 'portfolio',
  '/about': 'about',
  '/about/': 'about',
  '/contact': 'contact',
  '/contact/': 'contact',
};

const pageTitles: Record<PageId, string> = {
  home: 'Vista Visuals — Results-Driven Web Apps & Digital Systems',
  services: 'Capabilities & Services — Vista Visuals',
  webapp: 'Web App Development — Vista Visuals',
  portfolio: 'Portfolio & Case Studies — Vista Visuals',
  about: 'About & 14-Day Guarantee — Vista Visuals',
  contact: 'Contact & Strategy Session — Vista Visuals',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Handle clean URL pathname routing (HTML5 History API — zero hashtags)
  useEffect(() => {
    const syncPageFromUrl = () => {
      const path = window.location.pathname.toLowerCase();
      const resolvedPage = pathToPage[path] || 'home';
      setCurrentPage(resolvedPage);
      document.title = pageTitles[resolvedPage] || pageTitles.home;
    };

    syncPageFromUrl();
    window.addEventListener('popstate', syncPageFromUrl);
    return () => window.removeEventListener('popstate', syncPageFromUrl);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const targetPath = pageToPath[page] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
    document.title = pageTitles[page] || pageTitles.home;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0F] text-slate-100 flex flex-col justify-between selection:bg-blue-600/30 selection:text-white">
      {/* Ambient background glows & 3D floating glass elements */}
      <FloatingBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Global Sticky Navbar */}
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

        {/* Main Content Viewport */}
        <main className="flex-1 pb-16">
          {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
          {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
          {currentPage === 'webapp' && <WebAppDevPage onNavigate={handleNavigate} />}
          {currentPage === 'portfolio' && <PortfolioPage onNavigate={handleNavigate} />}
          {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
          {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
        </main>

        {/* Global Glass Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
