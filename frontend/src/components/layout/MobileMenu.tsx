import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, Phone, Calendar, Clock, MapPin, Mail, MessageSquare } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { appConfig } from '@/app/config/app.config';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { Button } from '@/components/ui';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop with fade-in transition */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Menu Drawer with entrance animation */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-slate-950 border-l border-slate-800/90 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10 animate-fade-in">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-800">
            <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center font-black text-slate-950 text-base shadow-md shadow-amber-500/20">
                AP
              </div>
              <span className="font-extrabold text-white text-lg tracking-wider">
                ANTIQUE <span className="text-amber-500">PANELS</span>
              </span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-5 flex flex-col space-y-1">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={onClose}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold translate-x-1'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white hover:translate-x-1'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="mt-6 space-y-2.5">
            <Link to="/book-service" onClick={onClose} className="block w-full">
              <Button
                variant="amber"
                size="md"
                className="w-full shadow-lg shadow-amber-500/20"
                leftIcon={<Calendar className="w-4 h-4" />}
              >
                Book a Service
              </Button>
            </Link>

            <WhatsAppButton
              variant="button"
              className="w-full"
              label="Chat on WhatsApp"
            />

            <a
              href={`tel:${appConfig.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-white font-semibold text-sm border border-slate-800 transition-all active:scale-98"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Hotline: {appConfig.phone}</span>
            </a>
          </div>
        </div>

        {/* Footer Contact Info */}
        <div className="pt-5 border-t border-slate-900 mt-6 space-y-2.5 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-500 shrink-0" />
            <a href={`tel:${appConfig.phoneRaw}`} className="hover:text-white font-medium">
              {appConfig.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-amber-500 shrink-0" />
            <a href={`mailto:${appConfig.email}`} className="hover:text-white font-medium truncate">
              {appConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Mon–Fri: 7:30 AM – 6:00 PM</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>{appConfig.address.street}, {appConfig.address.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
