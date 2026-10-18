from ..models.models import Booking, BookingStatus

class BookingService:
    @staticmethod
    def confirm_intake(booking: Booking, internal_notes: str = None) -> Booking:
        booking.status = BookingStatus.CONFIRMED
        if internal_notes:
            booking.internal_notes = internal_notes
        booking.save()
        return booking
