import React from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { ServiceItem } from '@/types/service';
import { Button, Badge, Card } from '@/components/ui';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { appConfig } from '@/app/config/app.config';

interface ServiceDetailsProps {
  service: ServiceItem;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
  return (
    <div className="space-y-12">
      {/* Top Breadcrumb & Back Link */}
      <div className="flex items-center justify-between">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Garage Services</span>
        </Link>
        <Badge variant="amber" size="md">
          {service.category.toUpperCase()}
        </Badge>
      </div>

      {/* Main Grid: Details + Sidebar Booking Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Full Service Information */}
        <div className="lg:col-span-2 space-y-10">
          {/* Hero Image Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-80 sm:h-96 bg-slate-950">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {service.name}
              </h1>
            </div>
          </div>

          {/* Overview & Description */}
          <div className="prose prose-invert max-w-none space-y-4">
            <h3 className="text-xl font-bold text-white tracking-wide border-b border-slate-800 pb-3">
              Service Overview & Engineering Standards
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-wide border-b border-slate-800 pb-3">
              Specialized Equipment & Workflow
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800/90 flex items-start gap-3"
                >
                  <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Benefits & Guarantees */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-wide border-b border-slate-800 pb-3">
              Why Choose Antique Panels For This Service
            </h3>
            <div className="space-y-3">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Booking Intake Box & Quick Actions */}
        <div className="space-y-6">
          <Card variant="elevated" className="p-6 bg-slate-900 border-slate-800 sticky top-28">
            <div className="pb-5 border-b border-slate-800">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                Intake Scheduling
              </span>
              <h4 className="text-xl font-extrabold text-white mt-1">
                Book This Service
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Fast lane inspection & computerized quote upon arrival.
              </p>
            </div>

            <div className="py-5 space-y-4 text-sm border-b border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  Estimated Turnaround:
                </span>
                <span className="text-white font-semibold">{service.estimatedTurnaround}</span>
              </div>

              {service.warrantyPeriod && (
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    Warranty Coverage:
                  </span>
                  <span className="text-emerald-400 font-semibold text-right max-w-[150px]">
                    {service.warrantyPeriod}
                  </span>
                </div>
              )}

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400">
                <span className="text-slate-200 font-semibold block mb-1">Transparent Pricing:</span>
                Exact cost calculated after visual chassis inspection & laser diagnostics. No surprise fees.
              </div>
            </div>

            <div className="pt-5 space-y-3">
              <Link
                to={`/book-service?service=${encodeURIComponent(service.name)}`}
                className="block w-full"
              >
                <Button
                  variant="amber"
                  size="lg"
                  className="w-full"
                  leftIcon={<Calendar className="w-4 h-4" />}
                >
                  Schedule Appointment
                </Button>
              </Link>

              <WhatsAppButton
                variant="button"
                className="w-full"
                customMessage={`Hello Antique Panels, I would like to inquire about booking: ${service.name}.`}
                label="WhatsApp Service Inquiry"
              />

              <div className="pt-2 text-center">
                <a
                  href={`tel:${appConfig.phoneRaw}`}
                  className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Service Desk: {appConfig.phone}</span>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
