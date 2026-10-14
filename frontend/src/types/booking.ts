export type PreferredTimeSlot = 'morning' | 'midday' | 'afternoon';

export interface BookingRequest {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  vehicleRegistration: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear?: string | number;
  serviceRequired: string;
  preferredDate: string;
  preferredTime: PreferredTimeSlot;
  additionalInformation?: string;
  requiresTowing?: boolean;
  simulateError?: boolean;
  status?: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  createdAt?: string;
}

export interface BookingResponse {
  success: boolean;
  referenceNumber: string;
  message: string;
  booking?: BookingRequest;
}
