import { BookingRequest, BookingResponse } from '@/types/booking';
import { generateBookingRef } from '@/lib/utils';
import { apiClient } from './api/apiClient';

const STORAGE_KEY = 'antique_panels_bookings';

const DEMO_SEED_BOOKINGS: BookingRequest[] = [
  {
    id: 'AP-749102',
    fullName: 'David Mwangi',
    email: 'david.mwangi@safarioperations.com',
    phone: '+254 700 892 400',
    vehicleRegistration: 'KDA 789X',
    vehicleMake: 'Toyota',
    vehicleModel: 'Land Cruiser HZJ79',
    vehicleYear: 1998,
    serviceRequired: 'Chassis Alignment & Laser Frame Pulling',
    preferredDate: '2026-10-15',
    preferredTime: 'morning',
    requiresTowing: false,
    status: 'in_progress',
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    additionalInformation: 'Vehicle intake completed. Electronic measuring bench calibrated. Subframe pulled to OEM spec.',
  },
  {
    id: 'AP-518294',
    fullName: 'Brian Kiprop',
    email: 'brian.kiprop@motorsport.co.ke',
    phone: '+254 712 345 678',
    vehicleRegistration: 'KCB 420A',
    vehicleMake: 'Subaru',
    vehicleModel: 'WRX STI Type RA',
    vehicleYear: 2016,
    serviceRequired: 'Downdraft Oven Spray Painting & Refinishing',
    preferredDate: '2026-10-12',
    preferredTime: 'midday',
    requiresTowing: false,
    status: 'confirmed',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    additionalInformation: 'Tri-coat pearl formulate verified on spectrophotometer. Oven bay reserved.',
  },
];

export const bookingService = {
  /**
   * Submit a new service booking request.
   * Simulates both API SUCCESS and ERROR states based on data payload or mock flags.
   * If a live backend API is configured via VITE_API_BASE_URL, calls POST /bookings.
   */
  async createBooking(data: BookingRequest): Promise<BookingResponse> {
    const hasLiveBackend = Boolean(import.meta.env.VITE_API_BASE_URL);

    // Check if error simulation is requested (either via explicit flag or trigger plate/email)
    const shouldSimulateError =
      data.simulateError === true ||
      data.vehicleRegistration?.trim().toUpperCase() === 'ERROR' ||
      data.email?.trim().toLowerCase() === 'error@example.com';

    // Realistic API network latency simulation
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Simulated API Failure State
    if (shouldSimulateError) {
      throw new Error(
        'API 503 Service Unavailable: Workshop bay allocation failed for the selected slot. Please select an alternate time window or contact our hotline directly.'
      );
    }

    // If real backend is active, try sending to backend
    if (hasLiveBackend) {
      try {
        return await apiClient<BookingResponse>('/bookings', {
          method: 'POST',
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.warn('Backend API request failed, falling back to local simulation:', error);
      }
    }

    // Simulated API Success State
    const ref = generateBookingRef();
    const newBooking: BookingRequest = {
      ...data,
      id: ref,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // Store in localStorage for demo review and job card tracker
    try {
      const existing: BookingRequest[] = await this.getStoredBookings();
      existing.unshift(newBooking);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }

    return {
      success: true,
      referenceNumber: ref,
      message: `Your booking request for ${data.vehicleMake} ${data.vehicleModel} has been registered. Our service coordinator will call you to confirm intake.`,
      booking: newBooking,
    };
  },

  /**
   * Retrieve past bookings (for client-side verification and testing)
   */
  async getStoredBookings(): Promise<BookingRequest[]> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEMO_SEED_BOOKINGS));
        return DEMO_SEED_BOOKINGS;
      }
      return JSON.parse(raw);
    } catch {
      return DEMO_SEED_BOOKINGS;
    }
  },

  /**
   * Query single booking by reference code (e.g. AP-749102)
   */
  async getBookingByReference(ref: string): Promise<BookingRequest | null> {
    const normalized = ref.trim().toUpperCase();
    const all = await this.getStoredBookings();
    return all.find((b) => b.id?.toUpperCase() === normalized) || null;
  },
};
