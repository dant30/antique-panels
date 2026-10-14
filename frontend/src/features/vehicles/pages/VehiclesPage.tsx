import React from 'react';
import { PageHero } from '@/components/common/PageHero';
import { VehicleGrid } from '../components/VehicleGrid';
import { Button } from '@/components/ui';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export const VehiclesPage: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Vehicle Projects & Build Portfolio"
        subtitle="Explore our documented craftsmanship: structural frame restorations, custom panel beating, and concours-grade finishes."
        badge="Garage Showcase"
        breadcrumbs={[{ label: 'Home', href: '/' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14">
        {/* Interactive Vehicle Grid with built-in Category & Year Era Toggles */}
        <VehicleGrid showFilters={true} />

        {/* Book Your Project Callout */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 text-center max-w-4xl mx-auto shadow-xl">
          <div className="inline-flex p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-3">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Have a Classic or Project Vehicle in Need of Expert Hands?
          </h3>
          <p className="mt-2 text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
            We schedule private consultation sessions to inspect your car, review restoration blueprints, and plan staged milestones.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link to="/book-service" className="w-full sm:w-auto">
              <Button variant="amber" size="sm" className="w-full sm:w-auto" leftIcon={<Calendar className="w-4 h-4" />}>
                Request Assessment
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="sm" className="w-full sm:w-auto" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Talk to Lead Builder
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
