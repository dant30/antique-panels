import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Award,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { appConfig } from '@/app/config/app.config';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center font-black text-slate-950 text-xl tracking-tighter shadow-md shadow-amber-500/20">
                AP
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-wider text-white">
                  ANTIQUE <span className="text-amber-500">PANELS</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
                  {appConfig.legalName}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {appConfig.description}
            </p>

            <div className="pt-2">
              <WhatsAppButton variant="inline" label="Direct WhatsApp Support" />
            </div>

            {/* Metrics Badges from appConfig */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{appConfig.metrics.expertTechnicians} Certified Technicians</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{appConfig.metrics.workshopBays} Active Bays</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                <Wrench className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{appConfig.metrics.vehiclesRestored} Restorations</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/book-service"
                  className="text-amber-400 font-semibold hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <Calendar className="w-3 h-3 text-amber-500" />
                  <span>Book Service Intake</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Garage Disciplines Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Garage Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/panel-beating" className="hover:text-white transition-colors">
                  Panel Beating & Chassis Jig
                </Link>
              </li>
              <li>
                <Link to="/services/spray-painting" className="hover:text-white transition-colors">
                  65°C Downdraft Oven Painting
                </Link>
              </li>
              <li>
                <Link to="/services/mechanical-repairs" className="hover:text-white transition-colors">
                  Engine & Transmission Overhaul
                </Link>
              </li>
              <li>
                <Link to="/services/computer-diagnostics" className="hover:text-white transition-colors">
                  CAN-Bus Diagnostics
                </Link>
              </li>
              <li>
                <Link to="/services/suspension-brakes" className="hover:text-white transition-colors">
                  Suspension & Brake Overhaul
                </Link>
              </li>
              <li>
                <Link to="/services/classic-restoration" className="hover:text-white transition-colors">
                  Nut-and-Bolt Restoration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column (Consuming appConfig) */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Workshop Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">
                  {appConfig.address.street}, {appConfig.address.neighborhood},{' '}
                  {appConfig.address.city}, {appConfig.address.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`tel:${appConfig.phoneRaw}`}
                  className="text-xs text-slate-300 hover:text-amber-400 font-semibold"
                >
                  {appConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`mailto:${appConfig.email}`}
                  className="text-xs text-slate-300 hover:text-amber-400"
                >
                  {appConfig.email}
                </a>
              </div>

              {/* Dynamic Opening Hours from appConfig */}
              <div className="pt-2 border-t border-slate-900 text-xs space-y-1.5">
                {appConfig.openingHours.map((slot, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-2 text-slate-400">
                    <span className="truncate">{slot.day}:</span>
                    <span className={slot.isClosed ? 'text-amber-400/90 font-mono text-[11px]' : 'text-slate-200 font-semibold'}>
                      {slot.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Social Channels from appConfig */}
              <div className="pt-2 flex items-center space-x-3 text-xs text-slate-400">
                <a
                  href={appConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Facebook
                </a>
                <span>•</span>
                <a
                  href={appConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Instagram
                </a>
                <span>•</span>
                <a
                  href={appConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Twitter
                </a>
                <span>•</span>
                <a
                  href={appConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {appConfig.legalName}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="text-slate-500">Enterprise Automotive Management Ready</span>
            <span className="text-slate-700">|</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Privacy & Warranty Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
