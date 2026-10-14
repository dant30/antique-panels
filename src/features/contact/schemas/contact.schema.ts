import { z } from 'zod';
import { PHONE_REGEX, isValidPhoneNumber } from '@/lib/validators';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(80, { message: 'Name is too long.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .min(1, { message: 'Phone number is required.' })
    .refine((val) => isValidPhoneNumber(val), {
      message: 'Please enter a valid telephone number (e.g. 0724 167 076, 0112 345 678, or +254 724 167 076).',
    }),
  subject: z
    .string()
    .min(3, { message: 'Subject must be at least 3 characters.' })
    .max(120, { message: 'Subject too long.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(2000, { message: 'Message cannot exceed 2000 characters.' }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
