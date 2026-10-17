"""Pydantic schemas root."""
from .customer import CustomerCreate, CustomerResponse
from .vehicle import VehicleCreate, VehicleResponse
from .booking import BookingCreate, BookingResponse, BookingStatusUpdate
from .job_card import JobCardCreate, JobCardResponse, JobCardStageUpdate
from .inventory import InventoryItemCreate, InventoryItemResponse, StockAdjustment
