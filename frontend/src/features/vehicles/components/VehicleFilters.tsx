import React from 'react';
import { POPULAR_VEHICLE_MAKES } from '@/lib/constants';

interface VehicleFiltersProps {
  selectedMake: string;
  onMakeChange: (make: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
}

const CATEGORIES = [
  'All Categories',
  'Classic Restoration',
  'Accident Repair',
  'Custom Paint',
  'Body Fabrication',
];

export const VehicleFilters: React.FC<VehicleFiltersProps> = ({
  selectedMake,
  onMakeChange,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 p-4 sm:p-6 rounded-2xl mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const val = cat === 'All Categories' ? 'all' : cat;
          const isActive = selectedCategory === val;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(val)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Make dropdown */}
      <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
        <label htmlFor="make-filter" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Filter Make:
        </label>
        <select
          id="make-filter"
          value={selectedMake}
          onChange={(e) => onMakeChange(e.target.value)}
          className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-amber-500"
        >
          <option value="all">All Makes</option>
          {POPULAR_VEHICLE_MAKES.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
