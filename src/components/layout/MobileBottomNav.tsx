import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Wrench, Calendar, Image, PhoneCall } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-[0_-8px_25px_rgba(0,0,0,0.7)] px-2 pt-1 pb-[calc(env(safe-area-inset-bottom,0px)+0.35rem)]"
    >
      <div className="grid grid-cols-5 items-end justify-center max-w-md mx-auto h-13">
        {/* 1. Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full py-1 transition-all duration-150 active:scale-95 ${
              isActive ? 'text-amber-400 font-semibold' : 'text-slate-400 hover:text-white'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="relative flex items-center justify-center">
                <Home className="w-5 h-5 transition-transform duration-150" />
                {isActive && (
                  <span className="absolute -bottom-1.5 w-1 h-1 bg-amber-400 rounded-full" />
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-1 truncate ${isActive ? 'text-white font-bold' : ''}`}>
                Home
              </span>
            </>
          )}
        </NavLink>

        {/* 2. Services */}
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full py-1 transition-all duration-150 active:scale-95 ${
              isActive ? 'text-amber-400 font-semibold' : 'text-slate-400 hover:text-white'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="relative flex items-center justify-center">
                <Wrench className="w-5 h-5 transition-transform duration-150" />
                {isActive && (
                  <span className="absolute -bottom-1.5 w-1 h-1 bg-amber-400 rounded-full" />
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-1 truncate ${isActive ? 'text-white font-bold' : ''}`}>
                Services
              </span>
            </>
          )}
        </NavLink>

        {/* 3. Center Elevated CTA: Book Now */}
        <NavLink
          to="/book-service"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center relative -top-2.5 transition-all duration-200 active:scale-95 ${
              isActive ? 'text-amber-400' : 'text-slate-300'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 ${
                  isActive
                    ? 'bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 shadow-amber-500/50 ring-3 ring-amber-400/50 scale-105'
                    : 'bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-600 text-slate-950 shadow-amber-500/30 ring-3 ring-slate-950 hover:scale-105'
                }`}
              >
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black tracking-tight text-amber-400 mt-0.5 whitespace-nowrap">
                Book Now
              </span>
            </>
          )}
        </NavLink>

        {/* 4. Gallery / Showcase */}
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full py-1 transition-all duration-150 active:scale-95 ${
              isActive ? 'text-amber-400 font-semibold' : 'text-slate-400 hover:text-white'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="relative flex items-center justify-center">
                <Image className="w-5 h-5 transition-transform duration-150" />
                {isActive && (
                  <span className="absolute -bottom-1.5 w-1 h-1 bg-amber-400 rounded-full" />
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-1 truncate ${isActive ? 'text-white font-bold' : ''}`}>
                Gallery
              </span>
            </>
          )}
        </NavLink>

        {/* 5. Contact / Workshop */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full py-1 transition-all duration-150 active:scale-95 ${
              isActive ? 'text-amber-400 font-semibold' : 'text-slate-400 hover:text-white'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="relative flex items-center justify-center">
                <PhoneCall className="w-5 h-5 transition-transform duration-150" />
                {isActive && (
                  <span className="absolute -bottom-1.5 w-1 h-1 bg-amber-400 rounded-full" />
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-1 truncate ${isActive ? 'text-white font-bold' : ''}`}>
                Contact
              </span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
};
