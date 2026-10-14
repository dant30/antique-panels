import { ContactMessage, ContactResponse } from '@/types/contact';
import { generateBookingRef } from '@/lib/utils';
import { apiClient } from './api/apiClient';

const CONTACT_STORAGE_KEY = 'antique_panels_messages';

export const contactService = {
  /**
   * Submit a contact/inquiry message.
   */
  async sendMessage(data: ContactMessage): Promise<ContactResponse> {
    const hasLiveBackend = Boolean(import.meta.env.VITE_API_BASE_URL);

    if (hasLiveBackend) {
      try {
        return await apiClient<ContactResponse>('/contact', {
          method: 'POST',
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.warn('Backend API request failed, falling back to local simulation:', error);
      }
    }

    // Realistic network simulation
    await new Promise((resolve) => setTimeout(resolve, 500));

    const ticketNumber = `TKT-${generateBookingRef().replace('AP-', '')}`;

    try {
      const existing: ContactMessage[] = JSON.parse(
        localStorage.getItem(CONTACT_STORAGE_KEY) || '[]'
      );
      existing.unshift({
        ...data,
        id: ticketNumber,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }

    return {
      success: true,
      ticketNumber,
      message: 'Thank you for reaching out. A workshop coordinator will contact you shortly.',
    };
  },
};
