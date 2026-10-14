import React from 'react';
import { appConfig } from '@/app/config/app.config';
import { Wrench, Shield, Award, Clock } from 'lucide-react';

export const CompanyStory: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Visual Image Grid */}
      <div className="relative">
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-96 sm:h-[460px] bg-slate-950">
          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
            alt="Antique Panels master panel beater metal working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        {/* Floating badge */}
        <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-slate-900 border border-slate-700/80 p-5 rounded-2xl shadow-2xl max-w-xs backdrop-blur-md hidden sm:block">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 font-black text-xl flex items-center justify-center shrink-0">
              18+
            </div>
            <div>
              <h5 className="text-white font-bold text-sm">Years of Craft</h5>
              <p className="text-slate-400 text-xs">Pioneering automotive restoration & panel beating since 2008.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Our Heritage & Craft
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 leading-tight">
            Built on Honest Metal, Modern Diagnostics, and Uncompromising Precision.
          </h2>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Founded in 2008, Antique Panels originated from a specialized classic car restoration guild into a 12-bay automotive powerhouse. We observed that modern body shops relied heavily on quick polyester fillers and low-temperature lacquer that faded after a single rainy season.
        </p>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          We chose a different standard: reviving the time-honored discipline of master panel beating, chassis pulling with computerized laser benches, and temperature-controlled downdraft ovens using premium Glasurit and PPG paint formulas.
        </p>

        {/* Milestones / Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 block font-mono">
              {appConfig.metrics.vehiclesRestored}
            </span>
            <span className="text-xs text-slate-400 mt-0.5 block">
              Vehicles Handed Over
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white block font-mono">
              {appConfig.metrics.expertTechnicians}
            </span>
            <span className="text-xs text-slate-400 mt-0.5 block">
              Certified Technicians
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white block font-mono">
              {appConfig.metrics.workshopBays}
            </span>
            <span className="text-xs text-slate-400 mt-0.5 block">
              Active Workshop Bays
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
