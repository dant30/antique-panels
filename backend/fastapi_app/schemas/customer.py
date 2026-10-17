"""Customer Pydantic schemas."""
from pydantic import BaseModel, EmailStr
from typing import Optional
import datetime

class CustomerBase(BaseModel):
    first_name: str
    last_name: str
    phone_number: str
    email: Optional[EmailStr] = None
    city: str = "Nairobi"
    customer_type: str = "INDIVIDUAL"
    kra_pin: Optional[str] = None
    notes: Optional[str] = None

class CustomerCreate(CustomerBase):
    pass

class CustomerResponse(CustomerBase):
    id: int
    is_vip: bool = False
    created_at: Optional[datetime.datetime] = None

    class Config:
        from_attributes = True
