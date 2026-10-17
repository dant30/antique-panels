"""FastAPI Booking Business Logic."""
import uuid
import datetime
from schemas.booking import BookingCreate

class BookingService:
    @staticmethod
    def generate_reference() -> str:
        return f"AP-{uuid.uuid4().hex[:6].upper()}"

    @staticmethod
    def process_new_booking(payload: BookingCreate) -> dict:
        ref = BookingService.generate_reference()
        return {
            "id": 1,
            "reference_number": ref,
            "status": "CONFIRMED" if not payload.needs_towing else "PENDING_DISPATCH",
            **payload.dict(),
            "created_at": datetime.datetime.now(datetime.timezone.utc)
        }
