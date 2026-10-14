# Antique Panels — Automotive Garage & Management System

> **Precision Craftsmanship, Modern Automotive Excellence.**  
> A high-performance automotive workshop web application and future-ready Garage Management System (ERP).

---

## 1. Project Overview

**Antique Panels** is a premier automotive garage specializing in:
- High-precision panel beating and coachwork metal shaping.
- Computerized 3D hydraulic chassis realignment.
- Italian downdraft oven-bake spray painting with digital spectrophotometer matching.
- Dealership-grade CAN-Bus electronics and oscilloscope diagnostics.
- Complete frame-off vintage and classic vehicle restorations.

This repository is built following a **modular phased development strategy**:
1. **Stage 1 (Current Implementation)**: Fully featured, high-converting public-facing automotive platform (Home, About, Services, Project Builds, Gallery, Online Booking with Zod validation, and Direct Inquiries).
2. **Stage 2 (Phase 2)**: Customer Profiles, Vehicle Registry (VIN/plates), Appointment Bay Scheduling.
3. **Stage 3 (Phase 3)**: Workshop Operations, Digital Job Cards, Parts Inventory, Mechanic Tracking.
4. **Stage 4 (Phase 4)**: Management Analytics, Revenue & Profitability per bay, Insurance billing.

---

## 2. Technology Stack

### Frontend
- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** (Industrial automotive dark aesthetic)
- **React Router v7** (Centralized routing)
- **React Hook Form** + **Zod** (Robust, schema-validated forms)
- **TanStack Query** (Server state and cache orchestration)
- **Lucide React** (Clean automotive icons)

### Backend Architecture (Ready for Expansion)
- **Django 5 & Django REST Framework**: Back-office relational admin, invoicing, parts catalog.
- **FastAPI**: Lightweight async API gateway for technician mobile entries and high-traffic intake.
- **PostgreSQL 16**: Relational storage for customer profiles, job cards, and VIN logs.
- **Redis 7 & Celery**: Background queuing for SMS, WhatsApp notifications, and PDF estimates.

### Infrastructure & Deployment
- **Docker & Docker Compose**: Multi-container containerization for frontend, backend, PostgreSQL, and Redis.
- **Nginx**: Production reverse proxy with Gzip compression and asset caching.
- **DigitalOcean / Cloudflare ready**: Built to deploy to Docker Swarm, Kubernetes, or VPS instances.

---

## 3. Project Structure

```
antique-panels/
├── backend/
│   ├── django_admin/             # Django back-office & ORM models
│   │   ├── config/settings/      # base.py, dev.py, prod.py
│   │   ├── apps/                 # users, vehicles, job_cards, inventory
│   │   ├── manage.py
│   │   └── requirements/
│   └── fastapi_app/              # FastAPI high-throughput API gateway
│       ├── main.py
│       ├── core/config.py
│       └── api/routes/
│
├── infrastructure/
│   ├── nginx/antique-panels.conf # Nginx production proxy
│   ├── docker/                   # Dockerfiles & compose
│   └── scripts/                  # deploy.sh, backup.sh
│
├── docs/
│   └── requirements/             # business & technical requirements
│
├── src/
│   ├── app/
│   │   ├── App.tsx               # Root entry with providers
│   │   ├── router.tsx            # Centralized React Router configuration
│   │   ├── config/app.config.ts  # Single source of business information
│   │   └── providers/            # ThemeProvider, QueryProvider
│   ├── components/
│   │   ├── ui/                   # Button, Card, Input, Modal, Badge, Spinner
│   │   ├── layout/               # Header, Footer, MobileMenu, MainLayout
│   │   └── common/               # WhatsAppButton, ContactButton, GoogleMap, PageHero
│   ├── features/
│   │   ├── home/                 # Hero, Services, WhyChooseUs, Projects, Testimonials
│   │   ├── about/                # Story, Mission/Vision, Team credentials
│   │   ├── services/             # 6 core disciplines with details & specs
│   │   ├── vehicles/             # Documented build portfolio & case studies
│   │   ├── gallery/              # Workshop photos & interactive Lightbox
│   │   ├── booking/              # Schema-validated service intake form
│   │   └── contact/              # Direct hotline, location directions, and messaging
│   ├── services/                 # API client, bookingService, contactService
│   ├── types/                    # Full TypeScript domain contracts
│   └── lib/                      # utils, constants, validators
│
├── .env.example
├── package.json
└── README.md
```

---

## 4. Installation & Getting Started

### Prerequisites
- Node.js 20+
- npm or bun

### Setup Steps
1. Clone repository:
   ```bash
   git clone https://github.com/example/antique-panels.git
   cd antique-panels
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment:
   ```bash
   cp .env.example .env
   ```

4. Run development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## 5. Development & Build Commands

| Command | Action |
|---|---|
| `npm run dev` | Starts local Vite development server on port 3000 |
| `npm run build` | Compiles optimized production bundle into `/dist` |
| `npm run lint` | Runs TypeScript typechecker (`tsc --noEmit`) |
| `npm run preview` | Previews production build locally |

---

## 6. Environment Variables

Create `.env` based on `.env.example`:

```bash
# Optional backend API base URL (defaults to mock client if empty)
VITE_API_BASE_URL="http://localhost:8000/api/v1"

# External maps and WhatsApp links
VITE_GOOGLE_MAPS_URL="https://maps.google.com"
VITE_WHATSAPP_NUMBER="+254712345678"
```

---

## 7. Future Garage Management Modules (ERP Plan)

When scaling to **Stage 2 & Stage 3**, the following modules can be activated in the `backend/` and connected to the frontend client:

1. **Customers**: Profile history, fleet account credit limits, and vehicle linkages.
2. **Vehicles**: VIN decoding, mileage logs, and digital service history books.
3. **Job Cards**: Visual 360° vehicle damage inspection mapping, allocated mechanics, parts tracking.
4. **Inventory**: Real-time SKU tracking, shelf location barcodes, minimum reorder thresholds.
5. **Invoices & Payments**: M-Pesa / Card / Insurance claim direct billing with automated receipts.

---

## 8. License

Released under the **MIT License**. Copyright © 2026 Antique Panels Automotive Specialist Ltd.
