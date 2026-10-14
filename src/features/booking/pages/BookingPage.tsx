import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHero } from '@/components/common/PageHero';
import { BookingForm } from '../components/BookingForm';
import { AppointmentSummary } from '../components/AppointmentSummary';
import { JobCardTracker } from '../components/JobCardTracker';
import { useBooking } from '@/hooks/useBooking';
import { BookingFormValues } from '../schemas/booking.schema';
import { Card } from '@/components/ui';
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  Phone,
  AlertCircle,
  Calendar,
  Search,
  Sparkles,
} from 'lucide-react';
import { appConfig } from '@/app/config/app.config';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';
  const initialMake = searchParams.get('vehicleMake') || '';
  const defaultTab = searchParams.get('tab') === 'track' ? 'track' : 'book';

  const [activeTab, setActiveTab] = useState<'book' | 'track'>(defaultTab);

  const { submitBooking, isLoading, error, response, resetState } = useBooking();

  const handleFormSubmit = async (values: BookingFormValues) => {
    await submitBooking({
      fullName: values.fullName,
      phone: values.phone,
      email: values.email || '',
      vehicleRegistration: values.vehicleRegistration,
      vehicleMake: values.vehicleMake,
      vehicleModel: values.vehicleModel,
      vehicleYear: values.vehicleYear,
      serviceRequired: values.serviceRequired,
      preferredDate: values.preferredDate,
      preferredTime: values.preferredTime,
      additionalInformation: values.additionalInformation,
      requiresTowing: values.requiresTowing,
      simulateError: values.simulateError,
    });
  };

  return (
    <div>
      <PageHero
        title="Workshop Service & Repair Booking"
        subtitle="Schedule fast-track vehicle intake, mechanical diagnostics, chassis realignments, or track an existing job card ticket."
        badge="Direct Workshop Booking"
        breadcrumbs={[{ label: 'Home', href: '/' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14 space-y-6 sm:space-y-10">
        {/* Navigation Tabs between Schedule and Tracker - Full width on mobile */}
        <div className="flex justify-center">
          <div className="bg-slate-900 border border-slate-800 p-1 rounded-xl grid grid-cols-2 w-full max-w-md shadow-xl">
            <button
              onClick={() => setActiveTab('book')}
              className={`flex items-center justify-center gap-1.5 px-3 py-2 sm:px-6 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'book'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Schedule Intake</span>
            </button>
            <button
              onClick={() => setActiveTab('track')}
              className={`flex items-center justify-center gap-1.5 px-3 py-2 sm:px-6 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'track'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Track Job Card</span>
            </button>
          </div>
        </div>

        {activeTab === 'track' ? (
          <JobCardTracker onScheduleNew={() => setActiveTab('book')} />
        ) : response ? (
          <div className="space-y-6">
            <AppointmentSummary response={response} onReset={resetState} />
            <div className="text-center pt-2">
              <button
                onClick={() => setActiveTab('track')}
                className="text-xs text-amber-400 hover:underline font-mono font-bold inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Track this booking on the live workshop timeline</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <Card variant="elevated" className="p-4 sm:p-7 lg:p-10 bg-slate-900 border-slate-800">
                <div className="mb-5 sm:mb-8">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] sm:text-xs font-semibold mb-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Direct Bay Allocation</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Service Intake Request Form
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Fill in your vehicle particulars below. Our service manager will inspect available bay slots and verify intake timing.
                  </p>
                </div>

                {error && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-300 text-sm">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <BookingForm
                  onSubmit={handleFormSubmit}
                  isLoading={isLoading}
                  initialService={initialService}
                  initialMake={initialMake}
                  errorMessage={error}
                  onClearError={resetState}
                />
              </Card>
            </div>

            {/* Sidebar Column: What to Expect & Support */}
            <div className="space-y-6">
              {/* Process Step Card */}
              <Card className="p-6 bg-slate-900 border-slate-800">
                <h4 className="text-base font-bold text-white mb-4">
                  What Happens After Submission?
                </h4>
                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <span className="font-semibold text-white block">Digital Job Ticket Created</span>
                      <p className="text-slate-400 text-xs mt-0.5">
                        A unique reference code is issued to reserve your service bay.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <span className="font-semibold text-white block">Service Advisor Follow-Up</span>
                      <p className="text-slate-400 text-xs mt-0.5">
                        We contact you via call or WhatsApp within 60 minutes to confirm vehicle arrival.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div>
                      <span className="font-semibold text-white block">45-Point Visual Check-In</span>
                      <p className="text-slate-400 text-xs mt-0.5">
                        Free walkaround inspection & digital damage mapping prior to commencement.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Direct Assistance Card */}
              <Card className="p-6 bg-slate-900 border-slate-800">
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                  Urgent Assistance?
                </span>
                <h4 className="text-base font-extrabold text-white mt-1">
                  Prefer Booking Over Phone?
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Call our service advisor directly or initiate a WhatsApp chat for immediate roadside breakdown assistance.
                </p>

                <div className="mt-5 space-y-3">
                  <a
                    href={`tel:${appConfig.phoneRaw}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors text-white font-semibold text-xs"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Call Hotline: {appConfig.phone}</span>
                  </a>

                  <WhatsAppButton
                    variant="button"
                    className="w-full text-xs"
                    label="Chat with Service Manager"
                  />
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
