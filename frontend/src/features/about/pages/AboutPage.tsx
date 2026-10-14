import React from 'react';
import { PageHero } from '@/components/common/PageHero';
import { CompanyStory } from '../components/CompanyStory';
import { MissionVision } from '../components/MissionVision';
import { TeamSection } from '../components/TeamSection';
import { GoogleMap } from '@/components/common/GoogleMap';
import { Button } from '@/components/ui';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Wrench, Calendar } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHero
        title="About Antique Panels"
        subtitle="The story behind our master coachbuilding, factory-level paint ovens, and dedication to authentic automotive engineering."
        badge="Heritage & Standards"
        breadcrumbs={[{ label: 'Home', href: '/' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14 space-y-8 sm:space-y-12">
        {/* Story Section */}
        <CompanyStory />

        {/* Mission & Vision */}
        <MissionVision />

        {/* Team Section */}
        <TeamSection />

        {/* Facility Callout */}
        <div className="p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <span className="text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest">
              Visit The Bays
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              Want a Tour of our Workshop Before Committing?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1.5">
              We welcome vehicle owners to view our ongoing restorations, check out our Italian spray booth, and inspect our pulling jig in person.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0 w-full sm:w-auto">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                Find Our Facility
              </Button>
            </Link>
            <Link to="/book-service" className="w-full sm:w-auto">
              <Button variant="amber" size="sm" className="w-full sm:w-auto" leftIcon={<Calendar className="w-4 h-4" />}>
                Book Inspection
              </Button>
            </Link>
          </div>
        </div>

        {/* Location Map */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Workshop Location</h3>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};
