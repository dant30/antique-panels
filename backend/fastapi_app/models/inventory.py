"""SQLAlchemy Inventory model."""
try:
    from sqlalchemy import Column, Integer, String, Text, Float, Boolean, DateTime, func
    from core.database import Base

    class InventoryItem(Base):
        __tablename__ = "inventory_inventoryitem"

        id = Column(Integer, primary_key=True, index=True)
        sku = Column(String(50), unique=True, index=True, nullable=False)
        name = Column(String(200), nullable=False)
        category = Column(String(40), nullable=False)
        quantity_on_hand = Column(Float, default=0.0)
        unit_of_measure = Column(String(20), default="pcs")
        reorder_threshold = Column(Float, default=5.0)
        cost_price = Column(Float, default=0.0)
        selling_price = Column(Float, default=0.0)
        location_bin = Column(String(50), default="Bin A-1")
        is_active = Column(Boolean, default=True)
        created_at = Column(DateTime(timezone=True), server_default=func.now())
except Exception:
    class InventoryItem:
        pass
