"""Inventory Pydantic schemas."""
from pydantic import BaseModel
from typing import Optional

class InventoryItemBase(BaseModel):
    sku: str
    name: str
    category: str
    quantity_on_hand: float
    unit_of_measure: str = "pcs"
    reorder_threshold: float = 5.0
    cost_price: float
    selling_price: float
    location_bin: str = "Bin A-1"

class InventoryItemCreate(InventoryItemBase):
    pass

class StockAdjustment(BaseModel):
    delta: float
    reason: str

class InventoryItemResponse(InventoryItemBase):
    id: int
    is_low_stock: bool = False

    class Config:
        from_attributes = True
