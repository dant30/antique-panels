"""Vehicle Pydantic schemas."""
from pydantic import BaseModel
from typing import Optional

class VehicleBase(BaseModel):
    license_plate: str
    make: str
    model: str
    year: int
    era: str = "CLASSIC_POSTWAR"
    color: str = "British Racing Green"
    vin: Optional[str] = None
    current_mileage: int = 0
    engine_displacement: Optional[str] = None
    condition_rating: str = "Grade 3 (Good Driver)"

class VehicleCreate(VehicleBase):
    owner_id: int

class VehicleResponse(VehicleBase):
    id: int
    owner_id: int

    class Config:
        from_attributes = True
