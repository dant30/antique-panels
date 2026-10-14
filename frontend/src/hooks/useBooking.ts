import { useState } from 'react';
import { BookingRequest, BookingResponse } from '@/types/booking';
import { bookingService } from '@/services/booking.service';

export function useBooking() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<BookingResponse | null>(null);

  const submitBooking = async (data: BookingRequest) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await bookingService.createBooking(data);
      setResponse(result);
      return result;
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : 'Failed to submit booking. Please contact our workshop directly.';
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
    submitBooking,
    isLoading,
    error,
    response,
    resetState,
  };
}
