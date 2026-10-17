"""Inventory, parts stock, and consumables routes."""
from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from schemas.inventory import InventoryItemCreate, InventoryItemResponse, StockAdjustment
from services.inventory_service import InventoryService

router = APIRouter(prefix="/inventory", tags=["Inventory"])

_INVENTORY_STORE = [
    {
        "id": 1,
        "sku": "PNT-GLAS-BC01",
        "name": "Glasurit 22-Line High-Solids British Racing Green (1L)",
        "category": "PAINT_MATERIAL",
        "quantity_on_hand": 14.5,
        "unit_of_measure": "liters",
        "reorder_threshold": 5.0,
        "cost_price": 6500.0,
        "selling_price": 9500.0,
        "location_bin": "Paint Mixing Vault",
        "is_low_stock": False
    },
    {
        "id": 2,
        "sku": "MET-CR-18GA",
        "name": "18-Gauge Cold-Rolled Auto Body Sheet Steel (8x4 ft)",
        "category": "RAW_METAL",
        "quantity_on_hand": 3.0,
        "unit_of_measure": "sheets",
        "reorder_threshold": 4.0,
        "cost_price": 8200.0,
        "selling_price": 12000.0,
        "location_bin": "Rack M-2",
        "is_low_stock": True
    }
]

@router.get("", response_model=List[InventoryItemResponse])
async def list_inventory(low_stock_only: bool = False):
    if low_stock_only:
        return [i for i in _INVENTORY_STORE if i["quantity_on_hand"] <= i["reorder_threshold"]]
    return _INVENTORY_STORE

@router.post("", response_model=InventoryItemResponse)
async def add_item(payload: InventoryItemCreate):
    new_id = len(_INVENTORY_STORE) + 1
    record = {
        "id": new_id,
        "is_low_stock": payload.quantity_on_hand <= payload.reorder_threshold,
        **payload.dict()
    }
    _INVENTORY_STORE.append(record)
    return record

@router.post("/{sku}/adjust", response_model=InventoryItemResponse)
async def adjust_stock(sku: str, payload: StockAdjustment):
    for i in _INVENTORY_STORE:
        if i["sku"] == sku.upper():
            i["quantity_on_hand"] += payload.delta
            i["is_low_stock"] = i["quantity_on_hand"] <= i["reorder_threshold"]
            return i
    raise HTTPException(status_code=404, detail=f"SKU {sku} not found")
