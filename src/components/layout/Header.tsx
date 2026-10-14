import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone, Calendar, Clock, MapPin, Mail, MessageSquare, Search } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { appConfig } from '@/app/config/app.config';
import { Button } from '@/components/ui';
import { MobileMenu } from './MobileMenu';
import { EmergencyTowBar } from '@/components/common/EmergencyTowBar';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const weekdayHours = appConfig.openingHours[0]?.hours || '7:30 AM – 6:00 PM';
  const saturdayHours = appConfig.openingHours[1]?.hours || '8:00 AM – 4:00 PM';

  return (
    <>
      {/* 24/7 Breakdown & Towing Emergency Strip - Visible on All Screens */}
      <EmergencyTowBar />

      {/* Top Notification Bar consuming appConfig business metadata (Desktop) */}
      <div className="bg-slate-900 border-b border-slate-800/80 text-xs text-slate-300 hidden md:block select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <div className="flex items-center space-x-5 lg:space-x-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Mon–Fri: {weekdayHours} | Sat: {saturdayHours}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{appConfig.address.neighborhood}, {appConfig.address.city}</span>
            </div>
            <a
              href={`mailto:${appConfig.email}`}
              className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
              title="Official Email"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{appConfig.email}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`https://wa.me/${appConfig.whatsappRaw}?text=${encodeURIComponent(appConfig.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 font-medium transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>WhatsApp</span>
            </a>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400/90 font-medium">Hotline:</span>
              <a
                href={`tel:${appConfig.phoneRaw}`}
                className="flex items-center gap-1.5 font-bold text-white hover:text-amber-400 transition-colors"
                title="Call Antique Panels Workshop"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{appConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar with deep shadow and continuous animated theme border */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 shadow-2xl shadow-black/80 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md'
            : 'bg-slate-950/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-18">
            {/* Logo consuming appConfig */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0" title={appConfig.name}>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center font-black text-slate-950 text-base sm:text-xl tracking-tighter shadow-md shadow-amber-500/25 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 shrink-0">
                AP
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-xl tracking-wider text-white leading-tight">
                  ANTIQUE <span className="text-amber-500">PANELS</span>
                </span>
                <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-slate-400 font-semibold truncate max-w-[120px] sm:max-w-none">
                  {appConfig.tagline.split(',')[0] || 'Automotive Specialist'}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-amber-400 bg-amber-500/10 font-semibold shadow-sm shadow-amber-500/10'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900/70 hover:-translate-y-0.5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA Buttons & Mobile Triggers */}
            <div className="flex items-center space-x-1.5 sm:space-x-3">
              {/* Desktop Booking CTA */}
              <Link to="/book-service" className="hidden sm:inline-block">
                <Button
                  variant="amber"
                  size="md"
                  className="shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200"
                  leftIcon={<Calendar className="w-4 h-4" />}
                >
                  Book a Service
                </Button>
              </Link>

              {/* Tablet Track Shortcut */}
              <Link
                to="/book-service?tab=track"
                className="hidden sm:inline-flex md:hidden px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800 text-xs font-semibold items-center gap-1.5 hover:-translate-y-0.5 transition-all"
                title="Track Live Job Card"
              >
                <Search className="w-3.5 h-3.5 text-amber-400" />
                <span>Track Job</span>
              </Link>

              {/* Mobile 1-Tap WhatsApp Button */}
              <a
                href={`https://wa.me/${appConfig.whatsappRaw}?text=${encodeURIComponent(appConfig.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-xl text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center active:scale-95 transition-all duration-200 shadow-sm"
                aria-label={`Chat with Antique Panels on WhatsApp ${appConfig.whatsapp}`}
                title={`WhatsApp ${appConfig.whatsapp}`}
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Mobile 1-Tap Call Hotline Button */}
              <a
                href={`tel:${appConfig.phoneRaw}`}
                className="p-2 sm:p-2.5 rounded-xl text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 flex items-center justify-center active:scale-95 transition-all duration-200 shadow-sm"
                aria-label={`Call Workshop Hotline ${appConfig.phone}`}
                title={`Call Hotline ${appConfig.phone}`}
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 sm:p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none cursor-pointer active:scale-95 transition-all duration-200"
                aria-label="Open mobile menu drawer"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Continuous Animated Bottom Border moving left to right with theme colours */}
        <div
          className="h-[2px] w-full animate-border-flow"
          aria-hidden="true"
        />
      </header>

      {/* Slide-out Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
