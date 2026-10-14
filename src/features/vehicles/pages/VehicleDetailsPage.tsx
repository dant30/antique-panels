import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHero } from '@/components/common/PageHero';
import { MetadataManager } from '@/components/common/MetadataManager';
import { VEHICLE_PROJECTS } from '../data/vehicles';
import { VehicleGallery } from '../components/VehicleGallery';
import { Card, Badge, Button } from '@/components/ui';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Wrench,
  CheckCircle2,
  AlertCircle,
  Quote,
  Star,
} from 'lucide-react';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export const VehicleDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const vehicle = VEHICLE_PROJECTS.find((v) => v.slug === slug);

  if (!vehicle) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-extrabold text-white">Vehicle Project Not Found</h2>
        <p className="mt-4 text-slate-400">
          The requested vehicle project portfolio does not exist or may have been archived.
        </p>
        <div className="mt-8">
          <Link to="/vehicles">
            <Button variant="primary">Browse All Vehicle Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [
    vehicle.images.hero,
    ...(vehicle.images.gallery || []),
    ...(vehicle.images.before ? [vehicle.images.before] : []),
    ...(vehicle.images.after ? [vehicle.images.after] : []),
  ];

  return (
    <div>
      <MetadataManager
        title={`${vehicle.title} – Restored Project Case Study | Antique Panels`}
        description={`${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.category}. Challenge: ${vehicle.challenge.slice(0, 70)}... Handover: ${vehicle.completionDate}`}
        image={vehicle.images.hero}
      />
      <PageHero
        title={vehicle.title}
        subtitle={`${vehicle.year} ${vehicle.make} ${vehicle.model} • ${vehicle.category}`}
        badge={vehicle.category}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/vehicles' },
        ]}
        backgroundImage={vehicle.images.hero}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/vehicles"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Gallery Section */}
        <div className="mb-14">
          <VehicleGallery images={allImages} title={vehicle.title} />
        </div>

        {/* Specs Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 mb-12">
          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Make / Model
            </span>
            <span className="text-sm sm:text-base font-bold text-white mt-1 block">
              {vehicle.make} {vehicle.model}
            </span>
          </div>
          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Year of Manufacture
            </span>
            <span className="text-sm sm:text-base font-bold text-white mt-1 block">
              {vehicle.year}
            </span>
          </div>
          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Workshop Turnaround
            </span>
            <span className="text-sm sm:text-base font-bold text-amber-400 mt-1 block">
              {vehicle.turnaroundDays} Days
            </span>
          </div>
          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Engine Spec
            </span>
            <span className="text-sm sm:text-base font-bold text-white mt-1 block truncate">
              {vehicle.specs?.engine || 'OEM Factory'}
            </span>
          </div>
        </div>

        {/* Case Study Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Project Overview & Background
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {vehicle.description}
              </p>
            </div>

            {/* Engineering Challenge & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6 bg-slate-900/60 border-slate-800">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-3">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Challenge</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {vehicle.challenge}
                </p>
              </Card>

              <Card className="p-6 bg-slate-900/60 border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Our Engineering Solution</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {vehicle.solution}
                </p>
              </Card>
            </div>

            {/* Scope of Work */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Complete Scope of Work Performed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehicle.servicesPerformed.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200"
                  >
                    <Wrench className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial if available */}
            {vehicle.clientFeedback && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/20">
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(vehicle.clientFeedback.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-base italic text-slate-200 leading-relaxed">
                  "{vehicle.clientFeedback.comment}"
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-white">
                    — {vehicle.clientFeedback.author}
                  </span>
                  <span>Verified Customer</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Build Inquiries */}
          <div className="space-y-6">
            <Card variant="elevated" className="p-6 bg-slate-900 border-slate-800 sticky top-28">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                Replicate This Standard
              </span>
              <h4 className="text-xl font-extrabold text-white mt-1">
                Have a Similar Build in Mind?
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Whether you need accident frame realignment or a bare-metal rebuild for your {vehicle.make}, our workshop is equipped to deliver.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  to={`/book-service?vehicleMake=${encodeURIComponent(vehicle.make)}&service=Full Restoration`}
                  className="block w-full"
                >
                  <Button variant="amber" size="md" className="w-full">
                    Book Similar Vehicle Intake
                  </Button>
                </Link>

                <WhatsAppButton
                  variant="button"
                  className="w-full"
                  customMessage={`Hello Antique Panels, I am inquiring about the ${vehicle.title} project and would like to discuss my vehicle.`}
                  label="Discuss on WhatsApp"
                />
              </div>

              {vehicle.specs?.colorCode && (
                <div className="mt-6 pt-5 border-t border-slate-800 text-xs">
                  <span className="text-slate-400 block mb-1">Color Ref:</span>
                  <span className="text-slate-200 font-mono font-semibold">
                    {vehicle.specs.colorCode}
                  </span>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
