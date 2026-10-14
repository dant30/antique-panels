"""
FastAPI High-Performance API Gateway for Antique Panels.
Handles real-time technician job cards, customer bookings, and inventory telemetry.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI(
    title="Antique Panels Automotive API",
    description="Operational API for Workshop Intake, Job Cards, and Telemetry",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class BookingPayload(BaseModel):
    full_name: str
    phone: str
    email: Optional[str] = None
    vehicle_registration: str
    vehicle_make: str
    vehicle_model: str
    service_required: str
    preferred_date: str
    preferred_time: str
    additional_notes: Optional[str] = None

@app.get("/api/v1/health")
async def health_check():
    return {"status": "ok", "service": "Antique Panels Engine", "version": "1.0.0"}

@app.post("/api/v1/bookings")
async def create_booking(booking: BookingPayload):
    import uuid
    ref_code = f"AP-{uuid.uuid4().hex[:6].upper()}"
    return {
        "success": True,
        "reference_number": ref_code,
        "message": f"Intake booked for {booking.vehicle_make} {booking.vehicle_model}",
        "booking": booking.dict(),
    }
