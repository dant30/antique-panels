import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { VehicleProject } from '@/types/vehicle';
import { Card, Badge } from '@/components/ui';
import { LazyImage } from '@/components/common/LazyImage';

interface VehicleCardProps {
  vehicle: VehicleProject;
  index?: number;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.1, 0.3),
        ease: 'easeOut',
      }}
      whileHover={{ y: -6 }}
      className="h-full flex flex-col"
    >
      <Card
        variant="default"
        className="flex flex-col h-full bg-slate-900/90 border-slate-800/90 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-colors duration-300 group overflow-hidden"
      >
        {/* Vehicle Hero Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-950">
          <LazyImage
            src={vehicle.images.hero}
            alt={vehicle.title}
            wrapperClassName="w-full h-full"
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <Badge variant="amber" size="sm">
              {vehicle.category}
            </Badge>
          </div>

          {/* Make and Year */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-white px-2 py-0.5 bg-slate-950/80 rounded border border-slate-800 backdrop-blur-sm text-[11px]">
              {vehicle.make} • {vehicle.year}
            </span>
            <div className="flex items-center gap-1 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800 backdrop-blur-sm text-[11px]">
              <Calendar className="w-3 h-3 text-amber-400" />
              <span>{vehicle.turnaroundDays} Days</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
            {vehicle.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {vehicle.description}
          </p>

          {/* Services Performed Pills */}
          <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-1 mb-4">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block mb-1">
              Scope Performed:
            </span>
            <div className="flex flex-wrap gap-1">
              {vehicle.servicesPerformed.slice(0, 3).map((item, idx) => (
                <span
                  key={idx}
                  className="text-[11px] bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link with micro-interaction */}
          <div className="mt-auto pt-3 border-t border-slate-800/60 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">
              {vehicle.specs?.engine ? vehicle.specs.engine.split(' ')[0] : 'Restored'}
            </span>
            <Link
              to={`/vehicles/${vehicle.slug}`}
              className="text-amber-400 hover:text-amber-300 font-semibold text-xs inline-flex items-center gap-1 group/link transition-colors"
            >
              <span>Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
