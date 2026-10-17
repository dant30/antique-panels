"""SQLAlchemy Vehicle model."""
try:
    from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime, func
    from core.database import Base

    class Vehicle(Base):
        __tablename__ = "vehicles_vehicle"

        id = Column(Integer, primary_key=True, index=True)
        owner_id = Column(Integer, ForeignKey("customers_customer.id"), nullable=False)
        license_plate = Column(String(20), unique=True, index=True, nullable=False)
        vin = Column(String(50), unique=True, nullable=True)
        make = Column(String(100), nullable=False)
        model = Column(String(100), nullable=False)
        year = Column(Integer, nullable=False)
        era = Column(String(30), default="CLASSIC_POSTWAR")
        color = Column(String(50), default="British Racing Green")
        current_mileage = Column(Integer, default=0)
        condition_rating = Column(String(50), default="Grade 3 (Good Driver)")
        created_at = Column(DateTime(timezone=True), server_default=func.now())
except Exception:
    class Vehicle:
        pass
