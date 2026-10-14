import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { appConfig } from '@/app/config/app.config';

export const EmergencyTowBar: React.FC = () => {
  return (
    <aside
      aria-label="24/7 Breakdown & Towing Support"
      className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 text-xs font-semibold py-1.5 px-3 sm:px-6 shadow-sm border-b border-amber-600/30 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left: Emergency Status & Label (Fits cleanly without truncating) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-80" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
          </span>
          <span className="font-extrabold uppercase tracking-tight text-[11px] sm:text-xs text-slate-950 whitespace-nowrap">
            24/7 Breakdown & Towing
          </span>
          <span className="hidden md:inline text-[11px] text-slate-900 font-medium">
            • Immediate Accident Recovery (Nairobi & Suburbs)
          </span>
        </div>

        {/* Right: Direct Tap-to-Call Hotline & WhatsApp (Guaranteed to fit and tap on any phone) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Direct Dial Hotline Button */}
          <a
            href={`tel:${appConfig.phoneRaw}`}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full bg-slate-950 hover:bg-slate-900 text-amber-300 hover:text-amber-200 text-[11px] sm:text-xs font-black shadow-sm transition-all duration-200 active:scale-95 whitespace-nowrap group"
            title={`Call Hotline ${appConfig.phone}`}
            aria-label={`Call 24/7 Emergency Hotline ${appConfig.phone}`}
          >
            <Phone className="w-3 h-3 text-amber-400 fill-current shrink-0 group-hover:scale-110 transition-transform" />
            <span className="tracking-tight">{appConfig.phone}</span>
          </a>

          {/* Quick WhatsApp Chat Button */}
          <a
            href={`https://wa.me/${appConfig.whatsappRaw}?text=${encodeURIComponent(
              'Hello Antique Panels, I need immediate 24/7 breakdown and emergency vehicle recovery assistance.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-[10px] sm:text-[11px] font-bold shadow-sm transition-all duration-200 active:scale-95 whitespace-nowrap group"
            title="Chat on WhatsApp +254 724 167 076"
            aria-label="Chat on WhatsApp"
          >
            <MessageSquare className="w-3 h-3 fill-current shrink-0 group-hover:scale-110 transition-transform" />
            <span className="hidden xs:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
