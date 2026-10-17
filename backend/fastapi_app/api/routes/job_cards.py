"""Workshop Job Card routes and telemetry."""
from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from schemas.job_card import JobCardCreate, JobCardResponse, JobCardStageUpdate
from services.job_card_service import JobCardService
import uuid

router = APIRouter(prefix="/job-cards", tags=["Job Cards"])

_JOBCARD_STORE = [
    {
        "id": 1,
        "job_number": "JC-E100A",
        "vehicle_id": 1,
        "bay_number": "Bay 1 (Coachbuilding)",
        "current_stage": "PANEL_BEATING",
        "progress_percentage": 45,
        "estimated_labor_hours": 120.0,
        "actual_labor_hours": 54.0,
        "scope_of_work": "Handcrafting aluminum bonnet and passenger door skins.",
        "is_blocked": False,
        "intake_date": "2026-10-01"
    }
]

@router.get("", response_model=List[JobCardResponse])
async def list_job_cards(stage: Optional[str] = Query(None)):
    if stage:
        return [j for j in _JOBCARD_STORE if j["current_stage"] == stage]
    return _JOBCARD_STORE

@router.post("", response_model=JobCardResponse)
async def create_job_card(payload: JobCardCreate):
    new_id = len(_JOBCARD_STORE) + 1
    job_number = f"JC-{uuid.uuid4().hex[:6].upper()}"
    record = {
        "id": new_id,
        "job_number": job_number,
        "intake_date": "2026-10-15",
        **payload.dict()
    }
    _JOBCARD_STORE.append(record)
    return record

@router.get("/{job_number}", response_model=JobCardResponse)
async def get_job_card(job_number: str):
    for j in _JOBCARD_STORE:
        if j["job_number"] == job_number.upper():
            return j
    raise HTTPException(status_code=404, detail="Job card not found")

@router.patch("/{job_number}/stage", response_model=JobCardResponse)
async def advance_stage(job_number: str, payload: JobCardStageUpdate):
    for j in _JOBCARD_STORE:
        if j["job_number"] == job_number.upper():
            j["current_stage"] = payload.next_stage
            j["progress_percentage"] = (
                payload.progress_percentage 
                if payload.progress_percentage is not None 
                else JobCardService.calculate_progress(payload.next_stage)
            )
            return j
    raise HTTPException(status_code=404, detail="Job card not found")
