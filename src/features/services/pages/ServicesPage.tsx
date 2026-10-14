import React, { useState, useMemo } from 'react';
import { PageHero } from '@/components/common/PageHero';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { GARAGE_SERVICES } from '../data/services';
import { ServiceGrid } from '../components/ServiceGrid';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Shield, Sparkles, Wrench, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'all') return GARAGE_SERVICES;
    return GARAGE_SERVICES.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Garage Services & Mechanical Engineering"
        subtitle="Full-cycle automotive excellence: from digital chassis realignment and high-bake spray painting to precision engine rebuilding."
        badge="Workshop Capabilities"
        breadcrumbs={[{ label: 'Home', href: '/' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 sm:mb-8 scrollbar-none">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <ServiceGrid services={filteredServices} />

        {/* Quality Standard Banner */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">Full Workmanship Warranty</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  All structural welding, paint jobs, and major mechanical services carry written guarantees.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Wrench className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">Genuine OEM Parts</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Direct relationships with authorized distributors ensure authentic replacement components.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">State-of-the-Art Facility</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Equipped with Italian downdraft ovens, computerized laser alignment, and digital scan tools.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
              Need a tailored assessment or fleet maintenance proposal?
            </p>
            <Link to="/book-service" className="w-full sm:w-auto">
              <Button variant="amber" size="sm" className="w-full sm:w-auto">
                Schedule Vehicle Intake
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
