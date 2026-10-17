"""FastAPI Routes aggregator."""
from .customers import router as customers_router
from .vehicles import router as vehicles_router
from .bookings import router as bookings_router
from .job_cards import router as job_cards_router
from .inventory import router as inventory_router
