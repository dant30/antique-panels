"""
Application configuration for Antique Panels FastAPI gateway.
"""
import os
from pydantic import BaseModel
from typing import List

class Settings(BaseModel):
    PROJECT_NAME: str = "Antique Panels Automotive API Gateway"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Security
    SECRET_KEY: str = os.getenv("SECRET_KEY", "antique-panels-fastapi-jwt-secret-key-2026")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days
    
    # Database
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL", 
        "postgresql+asyncpg://antique_admin:password@localhost:5432/antique_panels_db"
    )
    SQLITE_FALLBACK_URL: str = "sqlite+aiosqlite:///./antique_panels.db"
    
    # CORS
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://antiquepanels.co.ke",
        "https://www.antiquepanels.co.ke"
    ]
    
    # Workshop Contact Telemetry
    HOTLINE_PHONE: str = "+254721757776"
    OFFICIAL_EMAIL: str = "info@antiquepanels.co.ke"
    SUPPORT_EMAIL: str = "support@antiquepanels.co.ke"
    SECONDARY_PHONE: str = "+254703758016"
    WORKSHOP_LOCATION: str = "Enterprise Road, Industrial Area, Nairobi, Kenya"

settings = Settings()
