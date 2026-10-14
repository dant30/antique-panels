import { z } from 'zod';

/**
 * Regular expressions for automotive service request validation
 */

// Precise Kenyan local phone number regex:
// Supports:
// - 07XXXXXXXX (e.g., 0724 167 076, 0724167076, 0712-345-678)
// - 01XXXXXXXX (e.g., 0110 123 456, 0112 345 678, 0110123456)
// - +254 7XXXXXXXX / +254 1XXXXXXXX
// - 254 7XXXXXXXX / 254 1XXXXXXXX
export const LOCAL_KENYAN_PHONE_REGEX =
  /^(?:(?:\+?254|0)(?:\s|-)?(?:[17]\d{2})(?:\s|-)?\d{3}(?:\s|-)?\d{3})$/;

// International phone number regex (E.164 standard with optional grouping characters)
export const INTERNATIONAL_PHONE_REGEX =
  /^\+?[1-9]\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

// Vehicle registration number plate regex:
// Supports Kenyan plates (KDA 123A, KAA 001A, KBZ 999Z, KCX 450B) and international formats
export const REGISTRATION_PLATE_REGEX =
  /^[A-Z0-9]{2,4}[\s-]?[0-9]{3,4}[\s-]?[A-Z0-9]{0,3}$/i;

/**
 * Helper to normalize telephone numbers by stripping whitespace, hyphens, and parentheses
 */
export function normalizePhoneNumber(phone: string): string {
  return phone.replace(/[\s\-().]/g, '');
}

/**
 * Validates if the given string is a valid Kenyan local number or international phone
 */
export function isValidPhoneNumber(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  const trimmed = phone.trim();
  const normalized = normalizePhoneNumber(trimmed);

  // 1. Check direct Kenyan local pattern
  if (LOCAL_KENYAN_PHONE_REGEX.test(trimmed)) return true;

  // 2. Check normalized Kenyan format (10 digits starting with 07 or 01, or 12 digits starting with 2547/2541)
  if (/^(?:0[17]\d{8}|254[17]\d{8}|\+254[17]\d{8})$/.test(normalized)) return true;

  // 3. Fallback to valid international format
  if (INTERNATIONAL_PHONE_REGEX.test(trimmed) && normalized.length >= 8 && normalized.length <= 16) {
    return true;
  }

  return false;
}

/**
 * Validates vehicle registration number plate
 */
export function isValidRegistration(reg: string): boolean {
  if (!reg || typeof reg !== 'string') return false;
  const trimmed = reg.trim();
  return trimmed.length >= 3 && trimmed.length <= 15;
}

const currentYear = new Date().getFullYear();

export const TIME_SLOT_OPTIONS = ['morning', 'midday', 'afternoon'] as const;

/**
 * Enhanced Zod schema for Antique Panels workshop service requests
 * with custom error messages and precise local phone number validation
 */
export const bookingFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, { message: 'Full name is required so our team can prepare your service job card.' })
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(80, { message: 'Full name cannot exceed 80 characters.' }),

  phone: z
    .string()
    .trim()
    .min(1, { message: 'Telephone hotline contact number is required.' })
    .refine((val) => normalizePhoneNumber(val).length >= 8, {
      message: 'Phone number is too short. Please provide at least 10 digits for local numbers (e.g. 0724 167 076).',
    })
    .refine((val) => isValidPhoneNumber(val), {
      message:
        'Please enter a valid telephone number (e.g., 0724 167 076, 0112 345 678, or +254 724 167 076).',
    }),

  email: z
    .string()
    .trim()
    .email({
      message: 'Please provide a valid email address (e.g., client@example.com) for itemized quote dossiers.',
    })
    .or(z.literal('')),

  vehicleRegistration: z
    .string()
    .trim()
    .min(1, { message: 'Vehicle registration / plate number is required.' })
    .min(3, { message: 'Vehicle registration is required (e.g., KDA 123A or KCX 450B).' })
    .max(15, { message: 'Registration number plate must be 15 characters or fewer.' }),

  vehicleMake: z
    .string()
    .trim()
    .min(1, { message: 'Vehicle manufacturer / make is required.' })
    .min(2, { message: 'Please specify the vehicle make (e.g., Toyota, Mercedes-Benz, Land Rover).' })
    .max(50, { message: 'Vehicle make is too long.' }),

  vehicleModel: z
    .string()
    .trim()
    .min(1, { message: 'Vehicle model is required (e.g., Land Cruiser, C200, Defender).' })
    .max(50, { message: 'Vehicle model is too long.' }),

  vehicleYear: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => {
        if (!val || val === '') return true;
        const num = parseInt(val, 10);
        return !isNaN(num) && num >= 1920 && num <= currentYear + 1;
      },
      {
        message: `Please enter a valid manufacture year between 1920 and ${currentYear + 1}.`,
      }
    ),

  serviceRequired: z
    .string()
    .trim()
    .min(1, { message: 'Please select or describe the service required.' })
    .min(2, { message: 'Please select a workshop discipline or describe the required automotive service.' }),

  preferredDate: z
    .string()
    .trim()
    .min(1, { message: 'Please select your preferred workshop intake date.' }),

  preferredTime: z.enum(TIME_SLOT_OPTIONS, {
    message:
      'Please select an intake window: Morning (7:30 AM - 12:00 PM), Midday (12:00 PM - 3:00 PM), or Afternoon (3:00 PM - 6:00 PM).',
  }),

  additionalInformation: z
    .string()
    .max(1000, {
      message: 'Additional notes cannot exceed 1000 characters.',
    })
    .optional(),

  requiresTowing: z.boolean(),

  simulateError: z.boolean().optional(),
});

export type BookingFormValues = z.infer<typeof bookingFormSchema>;
