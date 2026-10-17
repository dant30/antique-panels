"""SQLAlchemy Job Card model."""
try:
    from sqlalchemy import Column, Integer, String, Text, Boolean, Date, Float, ForeignKey, DateTime, func
    from core.database import Base

    class JobCard(Base):
        __tablename__ = "job_cards_jobcard"

        id = Column(Integer, primary_key=True, index=True)
        job_number = Column(String(30), unique=True, index=True, nullable=False)
        vehicle_id = Column(Integer, ForeignKey("vehicles_vehicle.id"), nullable=False)
        lead_technician_id = Column(Integer, nullable=True)
        bay_number = Column(String(30), default="Bay 1 (Coachbuilding)")
        current_stage = Column(String(40), default="INTAKE_QC")
        progress_percentage = Column(Integer, default=5)
        estimated_labor_hours = Column(Float, default=40.0)
        actual_labor_hours = Column(Float, default=0.0)
        scope_of_work = Column(Text, nullable=False)
        is_blocked = Column(Boolean, default=False)
        block_reason = Column(String(255), nullable=True)
        intake_date = Column(Date, server_default=func.current_date())
        target_delivery_date = Column(Date, nullable=True)
        created_at = Column(DateTime(timezone=True), server_default=func.now())
except Exception:
    class JobCard:
        pass
