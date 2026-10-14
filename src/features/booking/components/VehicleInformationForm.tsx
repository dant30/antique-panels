import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { BookingFormValues } from '../schemas/booking.schema';
import { POPULAR_VEHICLE_MAKES } from '@/lib/constants';
import { Car, Hash, Calendar } from 'lucide-react';
import { Input } from '@/components/ui';

interface VehicleInformationFormProps {
  register: UseFormRegister<BookingFormValues>;
  errors: FieldErrors<BookingFormValues>;
}

export const VehicleInformationForm: React.FC<VehicleInformationFormProps> = ({
  register,
  errors,
}) => {
  return (
    <div className="space-y-4">
      <div className="border-b border-slate-800 pb-2 mb-4">
        <h4 className="text-sm font-bold text-white flex items-center gap-2">
          <Car className="w-4 h-4 text-amber-400" />
          <span>Vehicle Details & Identification</span>
        </h4>
        <p className="text-xs text-slate-400">
          Ensure registration matches logbook for intake documentation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Registration */}
        <Input
          label="Registration / Number Plate"
          placeholder="e.g. KDA 450M"
          required
          leftIcon={<Hash className="w-4 h-4" />}
          error={errors.vehicleRegistration?.message}
          {...register('vehicleRegistration')}
        />

        {/* Vehicle Year */}
        <Input
          label="Year of Manufacture (Optional)"
          type="number"
          placeholder="e.g. 2018"
          leftIcon={<Calendar className="w-4 h-4" />}
          error={errors.vehicleYear?.message}
          {...register('vehicleYear')}
        />

        {/* Vehicle Make */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Vehicle Make <span className="text-amber-500">*</span>
          </label>
          <div className="relative">
            <select
              className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-amber-500 transition-colors"
              {...register('vehicleMake')}
            >
              <option value="">Select Vehicle Make</option>
              {POPULAR_VEHICLE_MAKES.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>
          {errors.vehicleMake && (
            <p className="mt-1 text-xs text-rose-400">{errors.vehicleMake.message}</p>
          )}
        </div>

        {/* Vehicle Model */}
        <Input
          label="Vehicle Model"
          placeholder="e.g. Land Cruiser Prado TX / Impreza WRX"
          required
          error={errors.vehicleModel?.message}
          {...register('vehicleModel')}
        />
      </div>
    </div>
  );
};
