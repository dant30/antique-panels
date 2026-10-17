"""SQLAlchemy Booking model."""
try:
    from sqlalchemy import Column, Integer, String, Text, Boolean, Date, DateTime, func
    from core.database import Base

    class Booking(Base):
        __tablename__ = "bookings_booking"

        id = Column(Integer, primary_key=True, index=True)
        reference_number = Column(String(30), unique=True, index=True, nullable=False)
        guest_name = Column(String(150), nullable=True)
        guest_phone = Column(String(30), nullable=True, index=True)
        guest_email = Column(String(150), nullable=True)
        vehicle_registration = Column(String(30), nullable=False, index=True)
        vehicle_make = Column(String(100), nullable=False)
        vehicle_model = Column(String(100), nullable=False)
        vehicle_year = Column(Integer, nullable=True)
        service_name_text = Column(String(200), nullable=False)
        preferred_date = Column(Date, nullable=False)
        preferred_time = Column(String(50), default="08:00 AM")
        needs_towing = Column(Boolean, default=False)
        towing_pickup_location = Column(String(255), nullable=True)
        status = Column(String(30), default="PENDING")
        client_notes = Column(Text, nullable=True)
        internal_notes = Column(Text, nullable=True)
        created_at = Column(DateTime(timezone=True), server_default=func.now())
except Exception:
    class Booking:
        pass
