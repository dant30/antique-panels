"""Vehicle routes."""
from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from schemas.vehicle import VehicleCreate, VehicleResponse

router = APIRouter(prefix="/vehicles", tags=["Vehicles"])

_VEHICLE_STORE = [
    {
        "id": 1,
        "owner_id": 1,
        "license_plate": "KAA 100A",
        "vin": "SAJ-1968-ETYPE-001",
        "make": "Jaguar",
        "model": "E-Type Series 1 4.2L",
        "year": 1968,
        "era": "CLASSIC_POSTWAR",
        "color": "Carmine Red",
        "current_mileage": 42000,
        "condition_rating": "Grade 1 (Concours Winner)"
    },
    {
        "id": 2,
        "owner_id": 1,
        "license_plate": "KBZ 500M",
        "vin": "WDB-1971-PAGODA-113",
        "make": "Mercedes-Benz",
        "model": "280SL W113 Pagoda",
        "year": 1971,
        "era": "MUSCLE_PONY",
        "color": "Silver Metallic",
        "current_mileage": 68000,
        "condition_rating": "Grade 2 (Show Quality)"
    }
]

@router.get("", response_model=List[VehicleResponse])
async def list_vehicles(make: Optional[str] = Query(None)):
    if make:
        return [v for v in _VEHICLE_STORE if v["make"].lower() == make.lower()]
    return _VEHICLE_STORE

@router.post("", response_model=VehicleResponse)
async def register_vehicle(payload: VehicleCreate):
    new_id = len(_VEHICLE_STORE) + 1
    record = {"id": new_id, **payload.dict()}
    _VEHICLE_STORE.append(record)
    return record

@router.get("/{vehicle_id}", response_model=VehicleResponse)
async def get_vehicle(vehicle_id: int):
    for v in _VEHICLE_STORE:
        if v["id"] == vehicle_id:
            return v
    raise HTTPException(status_code=404, detail="Vehicle not found")
