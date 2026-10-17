"""
Authentication, cryptographic hashing, and JWT tokens.
"""
import datetime
import hashlib
import hmac
from typing import Any, Union, Optional
from core.config import settings

def create_access_token(subject: Union[str, Any], expires_delta: Optional[datetime.timedelta] = None) -> str:
    """Generate signed access token token payload."""
    expire = datetime.datetime.now(datetime.timezone.utc) + (
        expires_delta if expires_delta else datetime.timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    payload = f"{subject}:{expire.timestamp()}"
    signature = hmac.new(settings.SECRET_KEY.encode(), payload.encode(), hashlib.sha256).hexdigest()
    return f"{payload}:{signature}"

def verify_token(token: str) -> Optional[str]:
    """Verify and parse signed token payload."""
    try:
        parts = token.split(":")
        if len(parts) != 3:
            return None
        subject, exp_timestamp, signature = parts[0], parts[1], parts[2]
        expected_sig = hmac.new(
            settings.SECRET_KEY.encode(), 
            f"{subject}:{exp_timestamp}".encode(), 
            hashlib.sha256
        ).hexdigest()
        if not hmac.compare_digest(signature, expected_sig):
            return None
        if float(exp_timestamp) < datetime.datetime.now(datetime.timezone.utc).timestamp():
            return None
        return subject
    except Exception:
        return None

def verify_password(plain_password: str, hashed_password: str) -> bool:
    salt = hashed_password[:32]
    key = hashlib.pbkdf2_hmac('sha256', plain_password.encode('utf-8'), salt.encode('utf-8'), 100000)
    return hashed_password[32:] == key.hex()

def get_password_hash(password: str) -> str:
    import secrets
    salt = secrets.token_hex(16)
    key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt.encode('utf-8'), 100000)
    return salt + key.hex()
