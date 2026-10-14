import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VehicleProject } from '@/types/vehicle';
import { VEHICLE_PROJECTS } from '../data/vehicles';
import { VehicleCard } from './VehicleCard';
import { Car, Calendar, RotateCcw, Search, Sparkles, SlidersHorizontal } from 'lucide-react';
import { Button, Input } from '@/components/ui';

interface VehicleGridProps {
  vehicles?: VehicleProject[];
  showFilters?: boolean;
}

const CATEGORIES = [
  'All Categories',
  'Classic Restoration',
  'Custom Paint',
  'Accident Repair',
  'Body Fabrication',
] as const;

const YEAR_ERAS = [
  { id: 'all', label: 'All Years' },
  { id: 'pre-1990', label: 'Vintage (Pre-1990)' },
  { id: '1990-2010', label: 'Classic Era (1990–2010)' },
  { id: '2011-plus', label: 'Modern (2011+)' },
] as const;

export const VehicleGrid: React.FC<VehicleGridProps> = ({
  vehicles: externalVehicles,
  showFilters = true,
}) => {
  // Use provided vehicles or default to the full restoration projects dataset
  const baseVehicles = externalVehicles || VEHICLE_PROJECTS;

  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedYearEra, setSelectedYearEra] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Apply Category, Year Era, and Search Filters
  const filteredVehicles = useMemo(() => {
    return baseVehicles.filter((vehicle) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'All Categories' ||
        vehicle.category.toLowerCase() === selectedCategory.toLowerCase();

      // Year Era filter
      let matchesYear = true;
      if (selectedYearEra === 'pre-1990') {
        matchesYear = vehicle.year < 1990;
      } else if (selectedYearEra === '1990-2010') {
        matchesYear = vehicle.year >= 1990 && vehicle.year <= 2010;
      } else if (selectedYearEra === '2011-plus') {
        matchesYear = vehicle.year >= 2011;
      }

      // Keyword Search
      const matchesSearch =
        !searchQuery.trim() ||
        vehicle.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.year.toString().includes(searchQuery) ||
        vehicle.servicesPerformed.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesYear && matchesSearch;
    });
  }, [baseVehicles, selectedCategory, selectedYearEra, searchQuery]);

  const hasActiveFilters =
    selectedCategory !== 'All Categories' || selectedYearEra !== 'all' || searchQuery.trim() !== '';

  const handleResetFilters = () => {
    setSelectedCategory('All Categories');
    setSelectedYearEra('all');
    setSearchQuery('');
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Interactive Filter Toggles for Category and Year */}
      {showFilters && (
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 sm:space-y-5 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-slate-800">
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Restoration Portfolio Filter</span>
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Browse Restored Builds by Discipline & Era
              </h4>
            </div>

            {/* Keyword Search Box */}
            <div className="w-full md:w-64">
              <Input
                placeholder="Search make, model, year..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={<Search className="w-4 h-4 text-slate-400" />}
                className="text-xs bg-slate-950 py-2"
              />
            </div>
          </div>

          {/* 1. Category Filter - Horizontally Scrollable Track */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <SlidersHorizontal className="w-3 h-3 text-amber-400" />
                <span>Filter by Service Category:</span>
              </span>
              <span className="text-[10px] text-slate-500 sm:hidden">Swipe pills →</span>
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 scrollbar-none no-scrollbar touch-pan-x -mx-1 px-1">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <motion.button
                      key={cat}
                      type="button"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(cat)}
                      className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer select-none ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25 ring-1 ring-amber-400'
                          : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {cat}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 2. Year Era Filter - Horizontally Scrollable Track */}
          <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-amber-400" />
                <span>Filter by Vehicle Era / Year:</span>
              </span>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-[11px] text-rose-400 hover:text-rose-300 font-medium transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            <div className="relative">
              <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 scrollbar-none no-scrollbar touch-pan-x -mx-1 px-1">
                {YEAR_ERAS.map((era) => {
                  const isActive = selectedYearEra === era.id;
                  return (
                    <motion.button
                      key={era.id}
                      type="button"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedYearEra(era.id)}
                      className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer select-none ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25 ring-1 ring-amber-400'
                          : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {era.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Filter Metrics */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800/40">
            <span>
              Showing <strong className="text-white font-mono">{filteredVehicles.length}</strong> of{' '}
              <strong className="text-slate-300 font-mono">{baseVehicles.length}</strong> Restored Builds
            </span>
            {hasActiveFilters && (
              <span className="text-amber-400/90 font-mono text-[11px]">
                Active Filters Applied
              </span>
            )}
          </div>
        </div>
      )}

      {/* Grid of Vehicle Projects with Framer Motion Animation */}
      {filteredVehicles.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center py-16 sm:py-20 bg-slate-900/50 rounded-2xl border border-slate-800 space-y-4"
        >
          <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <Car className="w-6 h-6" />
          </div>
          <div>
            <h5 className="text-base font-bold text-white">No Restoration Projects Found</h5>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              No vehicles in our portfolio match the selected category, era, or search query.
            </p>
          </div>
          {hasActiveFilters && (
            <Button variant="secondary" size="sm" onClick={handleResetFilters}>
              Clear All Filters
            </Button>
          )}
        </motion.div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.3,
                  delay: Math.min(index * 0.05, 0.25),
                  ease: 'easeOut',
                }}
              >
                <VehicleCard vehicle={vehicle} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};
