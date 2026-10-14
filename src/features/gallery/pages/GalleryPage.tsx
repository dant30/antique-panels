import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '@/components/common/PageHero';
import { GalleryGrid } from '../components/GalleryGrid';
import { Calendar, Sparkles } from 'lucide-react';
import { Button, Container } from '@/components/ui';

export const GalleryPage: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Garage & Workshop Visual Gallery"
        subtitle="A behind-the-scenes view of our equipment, master panel beaters, downdraft spray booths, and finished automotive builds."
        badge="Craftsmanship Gallery"
        breadcrumbs={[{ label: 'Home', href: '/' }]}
      />

      <Container size="lg" className="py-6 sm:py-10 lg:py-14 space-y-8 sm:space-y-12">
        {/* Responsive Filterable Gallery Grid with integrated Lightbox modal */}
        <GalleryGrid showFilters={true} />

        {/* Bottom Booking Intake Banner */}
        <div className="p-4 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl">
          <div>
            <div className="flex items-center gap-1.5 text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bring Your Car Into The Bays</span>
            </div>
            <h4 className="text-lg sm:text-2xl font-extrabold text-white">
              Ready to See Your Vehicle in Our Completed Gallery?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              We photograph and document every stage of repair, from initial laser measurement to final oven bake.
            </p>
          </div>
          <Link to="/book-service" className="w-full sm:w-auto shrink-0">
            <Button variant="amber" size="md" className="w-full sm:w-auto" leftIcon={<Calendar className="w-4 h-4" />}>
              Schedule Service Intake
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
