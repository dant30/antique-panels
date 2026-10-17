"""Booking Pydantic schemas."""
from pydantic import BaseModel
from typing import Optional
import datetime

class BookingCreate(BaseModel):
    guest_name: str
    guest_phone: str
    guest_email: Optional[str] = None
    vehicle_registration: str
    vehicle_make: str
    vehicle_model: str
    vehicle_year: Optional[int] = None
    service_name_text: str
    preferred_date: datetime.date
    preferred_time: str = "08:00 AM"
    needs_towing: bool = False
    towing_pickup_location: Optional[str] = None
    client_notes: Optional[str] = None

class BookingStatusUpdate(BaseModel):
    status: str
    internal_notes: Optional[str] = None

class BookingResponse(BookingCreate):
    id: int
    reference_number: str
    status: str
    created_at: Optional[datetime.datetime] = None

    class Config:
        from_attributes = True
