import { useState } from 'react';
import { ContactMessage, ContactResponse } from '@/types/contact';
import { contactService } from '@/services/contact.service';

export function useContact() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<ContactResponse | null>(null);

  const sendMessage = async (data: ContactMessage) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await contactService.sendMessage(data);
      setResponse(result);
      return result;
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : 'Failed to send message. Please reach out via WhatsApp or direct phone.';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const resetState = () => {
    setError(null);
    setResponse(null);
    setIsLoading(false);
  };

  return {
    sendMessage,
    isLoading,
    error,
    response,
    resetState,
  };
}
