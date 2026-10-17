"""SQLAlchemy Customer model."""
try:
    from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, func
    from core.database import Base

    class Customer(Base):
        __tablename__ = "customers_customer"

        id = Column(Integer, primary_key=True, index=True)
        first_name = Column(String(100), nullable=False)
        last_name = Column(String(100), nullable=False)
        phone_number = Column(String(30), nullable=False, index=True)
        email = Column(String(150), nullable=True)
        city = Column(String(100), default="Nairobi")
        customer_type = Column(String(30), default="INDIVIDUAL")
        kra_pin = Column(String(30), nullable=True)
        is_vip = Column(Boolean, default=False)
        notes = Column(Text, nullable=True)
        created_at = Column(DateTime(timezone=True), server_default=func.now())
except Exception:
    class Customer:
        pass
