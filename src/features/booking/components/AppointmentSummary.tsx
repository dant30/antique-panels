import React from 'react';
import { CheckCircle2, Calendar, Phone, Clock, FileText, ArrowLeft } from 'lucide-react';
import { BookingResponse } from '@/types/booking';
import { Button, Card } from '@/components/ui';
import { appConfig } from '@/app/config/app.config';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { Link } from 'react-router-dom';

interface AppointmentSummaryProps {
  response: BookingResponse;
  onReset: () => void;
}

export const AppointmentSummary: React.FC<AppointmentSummaryProps> = ({
  response,
  onReset,
}) => {
  const { booking, referenceNumber } = response;

  return (
    <Card variant="elevated" className="p-8 sm:p-10 max-w-2xl mx-auto bg-slate-900 border-slate-800 text-center">
      {/* Success Icon */}
      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-9 h-9" />
      </div>

      <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
        Booking Request Registered
      </span>
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
        Intake Confirmed!
      </h3>
      <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
        {response.message}
      </p>

      {/* Reference Code Box */}
      <div className="my-6 p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center">
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
          Job Card Reference Code
        </span>
        <span className="text-2xl sm:text-3xl font-mono font-bold text-amber-400 tracking-wider mt-1">
          {referenceNumber}
        </span>
        <span className="text-[11px] text-slate-500 mt-1">
          Quote this reference when arriving at our workshop entrance.
        </span>
      </div>

      {/* Booking Details Breakdown */}
      {booking && (
        <div className="text-left bg-slate-950/60 rounded-xl p-5 border border-slate-800/80 mb-8 space-y-3 text-xs sm:text-sm">
          <div className="flex justify-between py-1 border-b border-slate-800">
            <span className="text-slate-400">Client Name:</span>
            <span className="font-semibold text-white">{booking.fullName}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-800">
            <span className="text-slate-400">Vehicle:</span>
            <span className="font-semibold text-white">
              {booking.vehicleMake} {booking.vehicleModel} ({booking.vehicleRegistration})
            </span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-800">
            <span className="text-slate-400">Requested Service:</span>
            <span className="font-semibold text-amber-400">{booking.serviceRequired}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-800">
            <span className="text-slate-400">Preferred Date:</span>
            <span className="font-semibold text-white">
              {booking.preferredDate} ({booking.preferredTime.toUpperCase()})
            </span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-400">Contact Telephone:</span>
            <span className="font-semibold text-white">{booking.phone}</span>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-3">
        <WhatsAppButton
          variant="button"
          className="w-full"
          customMessage={`Hello Antique Panels, my service booking reference is ${referenceNumber} for ${booking?.vehicleRegistration || 'my car'}.`}
          label="Share Reference to Workshop WhatsApp"
        />

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="secondary"
            onClick={onReset}
            className="w-full"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Submit Another Request
          </Button>

          <Link to="/" className="w-full">
            <Button variant="outline" className="w-full">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
