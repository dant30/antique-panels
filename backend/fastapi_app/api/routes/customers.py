"""Customer routes."""
from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from schemas.customer import CustomerCreate, CustomerResponse

router = APIRouter(prefix="/customers", tags=["Customers"])

# In-memory mock buffer for high-throughput responses
_CUSTOMER_STORE = [
    {
        "id": 1,
        "first_name": "David",
        "last_name": "Kariuki",
        "phone_number": "+254721757776",
        "email": "info@antiquepanels.co.ke",
        "city": "Nairobi",
        "customer_type": "CLUB",
        "kra_pin": "A001234567X",
        "is_vip": True,
        "notes": "Vintage E-Type restoration patron."
    }
]

@router.get("", response_model=List[CustomerResponse])
async def list_customers(search: Optional[str] = Query(None)):
    if search:
        s = search.lower()
        return [c for c in _CUSTOMER_STORE if s in c["phone_number"] or s in c["last_name"].lower()]
    return _CUSTOMER_STORE

@router.post("", response_model=CustomerResponse)
async def create_customer(payload: CustomerCreate):
    new_id = len(_CUSTOMER_STORE) + 1
    record = {"id": new_id, "is_vip": False, **payload.dict()}
    _CUSTOMER_STORE.append(record)
    return record

@router.get("/{customer_id}", response_model=CustomerResponse)
async def get_customer(customer_id: int):
    for c in _CUSTOMER_STORE:
        if c["id"] == customer_id:
            return c
    raise HTTPException(status_code=404, detail="Customer not found")
