"""Job Card Pydantic schemas."""
from pydantic import BaseModel
from typing import Optional, List
import datetime

class JobCardBase(BaseModel):
    vehicle_id: int
    bay_number: str = "Bay 1 (Coachbuilding)"
    current_stage: str = "INTAKE_QC"
    progress_percentage: int = 5
    estimated_labor_hours: float = 40.0
    actual_labor_hours: float = 0.0
    scope_of_work: str
    is_blocked: bool = False
    block_reason: Optional[str] = None
    target_delivery_date: Optional[datetime.date] = None

class JobCardCreate(JobCardBase):
    booking_id: Optional[int] = None
    lead_technician_id: Optional[int] = None

class JobCardStageUpdate(BaseModel):
    next_stage: str
    progress_percentage: Optional[int] = None
    notes: Optional[str] = None

class JobCardResponse(JobCardBase):
    id: int
    job_number: str
    intake_date: datetime.date

    class Config:
        from_attributes = True
