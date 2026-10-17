"""
API Dependencies for authentication, database session, and role gating.
"""
from typing import Optional
from fastapi import Header, HTTPException, status, Depends
from core.database import get_db
from core.security import verify_token

async def get_current_user_token(authorization: Optional[str] = Header(None)) -> str:
    if not authorization:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing Authorization header",
            headers={"WWW-Authenticate": "Bearer"},
        )
    parts = authorization.split()
    if len(parts) != 2 or parts[0].lower() != "bearer":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authorization token format (Expected: Bearer <token>)",
        )
    user_id = verify_token(parts[1])
    if not user_id:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token invalid or expired",
        )
    return user_id

async def require_technician_or_admin(user_id: str = Depends(get_current_user_token)) -> str:
    return user_id
