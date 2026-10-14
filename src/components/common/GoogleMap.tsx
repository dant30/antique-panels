import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { appConfig } from '@/app/config/app.config';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';

export interface GoogleMapProps {
  className?: string;
}

export const GoogleMap: React.FC<GoogleMapProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group',
        className
      )}
    >
      {/* Interactive Map Visual Mock with realistic street grid styling */}
      <div className="relative w-full h-80 sm:h-96 bg-slate-950 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        {/* Background Stylized Map Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-gradient-to-tr from-amber-500/10 via-transparent to-slate-800" />

        {/* Decorative Grid Lines to simulate engineering automotive schematic map */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-slate-800" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-slate-800" />

        {/* Pin Location Marker */}
        <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
          <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/40 ring-4 ring-amber-500/20">
            <MapPin className="w-6 h-6 fill-current" />
          </div>
          <div className="w-4 h-1.5 bg-black/60 rounded-full blur-[1px] mt-1" />
        </div>

        <div className="relative z-10 mt-4 max-w-sm">
          <h4 className="text-base font-bold text-white tracking-wide">
            {appConfig.name} Workshop
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            {appConfig.address.street}, {appConfig.address.neighborhood},{' '}
            {appConfig.address.city}
          </p>
          <p className="text-[11px] text-amber-400/90 font-mono mt-1">
            Coordinates: {appConfig.address.coordinates.lat},{' '}
            {appConfig.address.coordinates.lng}
          </p>
        </div>

        <div className="relative z-10 mt-5 flex items-center gap-3">
          <a
            href={appConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Navigation className="w-3.5 h-3.5" />}
              rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
            >
              Get Turn-by-Turn Directions
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
