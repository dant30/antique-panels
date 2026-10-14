import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  bookingFormSchema,
  BookingFormValues,
} from '../schemas/booking.schema';
import { VehicleInformationForm } from './VehicleInformationForm';
import { Button, Input } from '@/components/ui';
import { GARAGE_SERVICES } from '@/features/services/data/services';
import { TIME_SLOTS } from '@/lib/constants';
import {
  User,
  Phone,
  Mail,
  Calendar,
  Clock,
  Wrench,
  Truck,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Zap,
} from 'lucide-react';
import { appConfig } from '@/app/config/app.config';

interface BookingFormProps {
  onSubmit: (values: BookingFormValues) => Promise<void>;
  isLoading: boolean;
  initialService?: string;
  initialMake?: string;
  errorMessage?: string | null;
  onClearError?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  onSubmit,
  isLoading,
  initialService = '',
  initialMake = '',
  errorMessage,
  onClearError,
}) => {
  // Tomorrow's date as min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      vehicleRegistration: '',
      vehicleMake: initialMake,
      vehicleModel: '',
      vehicleYear: '',
      serviceRequired: initialService,
      preferredDate: minDateString,
      preferredTime: 'morning',
      additionalInformation: '',
      requiresTowing: false,
      simulateError: false,
    },
  });

  const isSimulateError = watch('simulateError');

  // Quick preset helper for fast testing
  const handleApplyPreset = (preset: {
    name: string;
    phone: string;
    reg: string;
    make: string;
    model: string;
    year: string;
    service: string;
  }) => {
    setValue('fullName', preset.name);
    setValue('phone', preset.phone);
    setValue('vehicleRegistration', preset.reg);
    setValue('vehicleMake', preset.make);
    setValue('vehicleModel', preset.model);
    setValue('vehicleYear', preset.year);
    setValue('serviceRequired', preset.service);
    if (onClearError) onClearError();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Quick Demo Presets Bar */}
      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="text-slate-400 font-semibold flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Quick Autofill Presets:</span>
        </span>
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() =>
              handleApplyPreset({
                name: 'David Mwangi',
                phone: '+254700892400',
                reg: 'KDA 789X',
                make: 'Toyota',
                model: 'Land Cruiser HZJ79',
                year: '1998',
                service: 'Panel Beating & Chassis Realignment',
              })
            }
            className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-medium transition-colors"
          >
            Toyota Cruiser
          </button>
          <button
            type="button"
            onClick={() =>
              handleApplyPreset({
                name: 'Brian Kiprop',
                phone: '+254712345678',
                reg: 'KCB 420A',
                make: 'Subaru',
                model: 'WRX STI',
                year: '2016',
                service: 'Downdraft Oven Spray Painting & Refinishing',
              })
            }
            className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-medium transition-colors"
          >
            Subaru STI
          </button>
          <button
            type="button"
            onClick={() =>
              handleApplyPreset({
                name: 'Dr. Robert Omondi',
                phone: '+254722112233',
                reg: 'KBA 123M',
                make: 'Mercedes-Benz',
                model: 'W123 280E',
                year: '1982',
                service: 'Complete Vintage & Classic Vehicle Restoration',
              })
            }
            className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-medium transition-colors"
          >
            Mercedes W123
          </button>
        </div>
      </div>

      {/* Simulated Error Alert State */}
      {errorMessage && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-3 animate-fade-in">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-sm font-bold text-rose-300">
                Service Booking Request Failed
              </h5>
              <p className="text-xs text-rose-300/90 mt-1 leading-relaxed">
                {errorMessage}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-1">
            {onClearError && (
              <Button
                variant="outline"
                size="sm"
                type="button"
                onClick={onClearError}
                leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
              >
                Dismiss & Retry
              </Button>
            )}
            <a href={`tel:${appConfig.phoneRaw}`}>
              <Button variant="danger" size="sm" type="button" leftIcon={<Phone className="w-3.5 h-3.5" />}>
                Call Service Desk Directly
              </Button>
            </a>
          </div>
        </div>
      )}

      {/* Step 1: Customer Contact Info */}
      <div className="space-y-4">
        <div className="border-b border-slate-800 pb-2 mb-4">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <User className="w-4 h-4 text-amber-400" />
            <span>Customer Contact Information</span>
          </h4>
          <p className="text-xs text-slate-400">
            Our service advisor will reach you to confirm vehicle reception.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            placeholder="e.g. Michael Otieno"
            required
            leftIcon={<User className="w-4 h-4" />}
            error={errors.fullName?.message}
            {...register('fullName')}
          />

          <Input
            label="Mobile / WhatsApp Telephone"
            type="tel"
            placeholder="e.g. 0724 167 076 or +254 724 167 076"
            required
            leftIcon={<Phone className="w-4 h-4" />}
            error={errors.phone?.message}
            helperText="Local Kenyan format (07XX / 01XX) or international (+254)."
            {...register('phone')}
          />

          <div className="sm:col-span-2">
            <Input
              label="Email Address (Optional)"
              type="email"
              placeholder="e.g. michael@example.com"
              leftIcon={<Mail className="w-4 h-4" />}
              error={errors.email?.message}
              helperText="For receiving computerized estimation PDF and digital job card receipts."
              {...register('email')}
            />
          </div>
        </div>
      </div>

      {/* Step 2: Vehicle Information Form Subcomponent */}
      <VehicleInformationForm register={register} errors={errors} />

      {/* Step 3: Service Selection & Intake Schedule */}
      <div className="space-y-4">
        <div className="border-b border-slate-800 pb-2 mb-4">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Wrench className="w-4 h-4 text-amber-400" />
            <span>Service Request & Intake Schedule</span>
          </h4>
          <p className="text-xs text-slate-400">
            Select the principal scope of work needed for your vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Required Service Dropdown */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Service Required <span className="text-amber-500">*</span>
            </label>
            <select
              className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-amber-500 transition-colors"
              {...register('serviceRequired')}
            >
              <option value="">Select Service Scope</option>
              {GARAGE_SERVICES.map((srv) => (
                <option key={srv.id} value={srv.name}>
                  {srv.name} ({srv.estimatedTurnaround})
                </option>
              ))}
              <option value="General Mechanical Inspection & Diagnostics">
                General Mechanical Inspection & Diagnostics
              </option>
              <option value="Accident Collision Assessment (Insurance)">
                Accident Collision Assessment (Insurance)
              </option>
              <option value="Full Vintage Vehicle Restoration">
                Full Vintage Vehicle Restoration
              </option>
              <option value="Other Bespoke Requirement">Other Bespoke Requirement</option>
            </select>
            {errors.serviceRequired && (
              <p className="mt-1 text-xs text-rose-400">
                {errors.serviceRequired.message}
              </p>
            )}
          </div>

          {/* Preferred Date */}
          <Input
            label="Preferred Intake Date"
            type="date"
            min={minDateString}
            required
            leftIcon={<Calendar className="w-4 h-4" />}
            error={errors.preferredDate?.message}
            {...register('preferredDate')}
          />

          {/* Preferred Time Slot */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Preferred Time Window <span className="text-amber-500">*</span>
            </label>
            <select
              className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-amber-500 transition-colors"
              {...register('preferredTime')}
            >
              {TIME_SLOTS.map((slot) => (
                <option key={slot.id} value={slot.id}>
                  {slot.label}
                </option>
              ))}
            </select>
            {errors.preferredTime && (
              <p className="mt-1 text-xs text-rose-400">
                {errors.preferredTime.message}
              </p>
            )}
          </div>

          {/* Towing Assistance Checkbox */}
          <div className="sm:col-span-2 p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
            <input
              type="checkbox"
              id="requiresTowing"
              className="mt-1 w-4 h-4 rounded text-amber-500 bg-slate-900 border-slate-700 focus:ring-amber-500"
              {...register('requiresTowing')}
            />
            <label htmlFor="requiresTowing" className="cursor-pointer">
              <span className="text-sm font-semibold text-white flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400" />
                Vehicle is Non-Drivable / Requires Flatbed Towing Assistance
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                Our recovery flatbed truck can be dispatched to your location within the metro area.
              </p>
            </label>
          </div>

          {/* Additional Notes */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Symptoms / Additional Instructions
            </label>
            <textarea
              rows={3}
              placeholder="Describe any sounds, prior damage, insurance claim details, or specific requests..."
              className="w-full bg-slate-950/80 border border-slate-800 rounded-lg p-3 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
              {...register('additionalInformation')}
            />
          </div>
        </div>
      </div>

      {/* API Simulation Testing Switch (Demonstrates Mock Success vs Error States) */}
      <div className="p-3.5 rounded-xl bg-slate-950/90 border border-amber-500/20 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <input
            type="checkbox"
            id="simulateError"
            className="w-4 h-4 rounded text-rose-500 bg-slate-900 border-slate-700 focus:ring-rose-500"
            {...register('simulateError')}
          />
          <label htmlFor="simulateError" className="cursor-pointer text-xs">
            <span className="font-semibold text-slate-200">
              Simulate API Error State
            </span>
            <span className="text-slate-500 block">
              Tests mock server 503 capacity rejection and user recovery workflow.
            </span>
          </label>
        </div>

        <span
          className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded border ${
            isSimulateError
              ? 'bg-rose-500/10 text-rose-400 border-rose-500/30'
              : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
          }`}
        >
          {isSimulateError ? 'Mode: Error Simulation' : 'Mode: Success Simulation'}
        </span>
      </div>

      {/* Submission Button */}
      <div className="pt-4 border-t border-slate-800">
        <Button
          type="submit"
          variant={isSimulateError ? 'danger' : 'amber'}
          size="lg"
          className="w-full"
          isLoading={isLoading}
        >
          {isSimulateError
            ? 'Test Submit with Simulated Error'
            : 'Confirm & Submit Service Booking'}
        </Button>
        <p className="text-center text-xs text-slate-500 mt-2.5">
          No advance payment required. Estimated costs confirmed following initial vehicle check-in.
        </p>
      </div>
    </form>
  );
};
