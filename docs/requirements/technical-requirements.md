# Antique Panels — Technical Architecture Requirements

## 1. Frontend Architecture
- **Framework**: React 19 + TypeScript + Vite.
- **Styling**: Tailwind CSS v4, dark-slate theme tailored for automotive precision.
- **Routing**: Centralized client routing via `react-router-dom` v7.
- **Forms & Validation**: `react-hook-form` with `zod` schemas and `@hookform/resolvers`.
- **State & Remote Cache**: `@tanstack/react-query` for asynchronous API state.
- **Component Hierarchy**:
  - `components/ui/`: Atomic primitives (Button, Card, Input, Modal, Badge, Spinner).
  - `components/common/`: Shared business blocks (WhatsAppButton, ContactButton, SectionHeader, PageHero, GoogleMap).
  - `components/layout/`: Shell layout (Header, Footer, MobileMenu, MainLayout).
  - `features/*`: Feature-encapsulated modules with local data, components, and pages.

## 2. Backend & ERP Integration Layer
- **Django Admin & ORM**: Back-office relational data management for customers, inventory, parts, and invoices.
- **FastAPI**: Lightweight, asynchronous gateway for mobile technician inputs, high-throughput intake forms, and telemetry.
- **Database**: PostgreSQL 16 with indexes on registration numbers, VINs, and booking dates.
- **Cache & Message Broker**: Redis 7 for Celery background tasks (SMS/WhatsApp notifications, PDF generation).
