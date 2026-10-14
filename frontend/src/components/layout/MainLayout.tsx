import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingContactMenu } from './FloatingContactMenu';
import { MobileBottomNav } from './MobileBottomNav';
import { MetadataManager } from '@/components/common/MetadataManager';
import { ScrollProgressBar } from '@/components/common/ScrollProgressBar';

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Visual scroll reading progress bar at top of viewport */}
      <ScrollProgressBar />
      {/* Dynamic SEO, OpenGraph & Structured Data Manager */}
      <MetadataManager />
      <Header />
      <main className="flex-grow pb-24 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      {/* Floating Pop-out Contact Button (WhatsApp, Call, Email) */}
      <FloatingContactMenu />
      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav />
    </div>
  );
};
