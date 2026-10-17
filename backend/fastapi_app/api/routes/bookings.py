"""Booking intake and reservation routes."""
from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from schemas.booking import BookingCreate, BookingResponse, BookingStatusUpdate
from services.booking_service import BookingService

router = APIRouter(prefix="/bookings", tags=["Bookings"])

_BOOKING_STORE = [
    {
        "id": 1,
        "reference_number": "AP-721757",
        "guest_name": "Dan Kariuki",
        "guest_phone": "+254721757776",
        "guest_email": "info@antiquepanels.co.ke",
        "vehicle_registration": "KAA 100A",
        "vehicle_make": "Jaguar",
        "vehicle_model": "E-Type",
        "vehicle_year": 1968,
        "service_name_text": "Bare-Metal Coachbuilding & Concours Paint",
        "preferred_date": "2026-10-20",
        "preferred_time": "08:30 AM",
        "needs_towing": False,
        "status": "CONFIRMED",
        "client_notes": "Full rotisserie inspection requested."
    }
]

@router.get("", response_model=List[BookingResponse])
async def list_bookings(status: Optional[str] = Query(None)):
    if status:
        return [b for b in _BOOKING_STORE if b["status"] == status]
    return _BOOKING_STORE

@router.post("", response_model=BookingResponse)
async def create_booking(payload: BookingCreate):
    record = BookingService.process_new_booking(payload)
    record["id"] = len(_BOOKING_STORE) + 1
    _BOOKING_STORE.append(record)
    return record

@router.get("/{reference_number}", response_model=BookingResponse)
async def get_booking_by_reference(reference_number: str):
    ref_clean = reference_number.strip().upper()
    for b in _BOOKING_STORE:
        if b["reference_number"] == ref_clean:
            return b
    raise HTTPException(status_code=404, detail=f"Booking reference {reference_number} not found")

@router.patch("/{reference_number}/status", response_model=BookingResponse)
async def update_booking_status(reference_number: str, payload: BookingStatusUpdate):
    for b in _BOOKING_STORE:
        if b["reference_number"] == reference_number.upper():
            b["status"] = payload.status
            if payload.internal_notes:
                b["internal_notes"] = payload.internal_notes
            return b
    raise HTTPException(status_code=404, detail="Booking not found")
