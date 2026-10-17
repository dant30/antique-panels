"""
Database session management and declarative base.
"""
from typing import AsyncGenerator
from core.config import settings

try:
    from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
    from sqlalchemy.orm import declarative_base

    DATABASE_URL = settings.DATABASE_URL
    if "postgresql" in DATABASE_URL and "asyncpg" not in DATABASE_URL:
        DATABASE_URL = DATABASE_URL.replace("postgresql://", "postgresql+asyncpg://")

    try:
        engine = create_async_engine(DATABASE_URL, echo=False, future=True)
    except Exception:
        engine = create_async_engine(settings.SQLITE_FALLBACK_URL, echo=False, future=True)

    AsyncSessionLocal = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)
    Base = declarative_base()

    async def get_db() -> AsyncGenerator[AsyncSession, None]:
        async with AsyncSessionLocal() as session:
            try:
                yield session
                await session.commit()
            except Exception:
                await session.rollback()
                raise
            finally:
                await session.close()

except ImportError:
    # Lightweight fallback when SQLAlchemy is not installed in the current environment
    class Base:
        pass

    async def get_db():
        yield None
