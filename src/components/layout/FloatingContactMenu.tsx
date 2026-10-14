import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MessageSquare, X, ChevronUp, Sparkles, Clock } from 'lucide-react';
import { appConfig } from '@/app/config/app.config';
import { cn } from '@/lib/utils';

export const FloatingContactMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const whatsappMessage = encodeURIComponent(appConfig.whatsappDefaultMessage);
  const whatsappUrl = `https://wa.me/${appConfig.whatsappRaw}?text=${whatsappMessage}`;
  const telUrl = `tel:${appConfig.phoneRaw}`;
  const mailtoUrl = `mailto:${appConfig.email}?subject=Antique%20Panels%20Automotive%20Service%20Inquiry`;

  return (
    <>
      {/* Mobile Dimmed Backdrop when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-[2px] z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        ref={menuRef}
        className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end"
      >
        {/* Pop-out Menu Items */}
        {isOpen && (
          <div className="mb-2.5 flex flex-col items-end space-y-2.5 animate-pop-out">
            {/* Quick Status Bar */}
            <div className="bg-slate-900/95 backdrop-blur-md border border-slate-800 text-[10px] sm:text-[11px] text-slate-300 px-3 py-1 rounded-full shadow-xl flex items-center gap-2 mb-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-white">Workshop Available</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">7:30 AM – 6:00 PM</span>
            </div>

            {/* 1. Email Option */}
            <a
              href={mailtoUrl}
              className="group flex items-center gap-2.5 bg-slate-900/95 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/60 text-white px-3.5 py-2 rounded-full shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95"
              title="Send Email to Service Desk"
            >
              <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                Email ({appConfig.email})
              </span>
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                <Mail className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* 2. Direct Call Option */}
            <a
              href={telUrl}
              className="group flex items-center gap-2.5 bg-slate-900/95 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/60 text-white px-3.5 py-2 rounded-full shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95"
              title="Call Workshop Telephone"
            >
              <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                Hotline ({appConfig.phone})
              </span>
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* 3. WhatsApp Option */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/40 text-white px-3.5 py-2 rounded-full shadow-2xl shadow-emerald-950/50 transition-all duration-200 hover:scale-105 active:scale-95"
              title="Chat directly on WhatsApp"
            >
              <span className="text-xs font-bold text-white">
                WhatsApp Chat
              </span>
              <div className="w-8 h-8 rounded-full bg-white text-emerald-600 flex items-center justify-center shrink-0">
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
              </div>
            </a>
          </div>
        )}

        {/* Primary Floating Action Trigger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close Contact Menu' : 'Open WhatsApp, Call and Email Contact Options'}
          aria-expanded={isOpen}
          className={cn(
            'relative flex items-center justify-center p-2.5 sm:px-4 sm:py-3 rounded-full font-bold text-sm shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-500/30 group cursor-pointer active:scale-95',
            isOpen
              ? 'bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 rotate-90 scale-100'
              : 'bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/25 hover:shadow-amber-500/40'
          )}
        >
          {isOpen ? (
            <X className="w-5 h-5 transition-transform -rotate-90" />
          ) : (
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
              </span>
              <MessageSquare className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline font-extrabold tracking-wide text-xs uppercase">
                Contact & WhatsApp
              </span>
            </div>
          )}
        </button>
      </div>
    </>
  );
};
