# Precilayer Website — replit.md

## Overview

Precilayer is a marketing and lead-generation website for **Precilayer India Private Limited**, a next-generation precision manufacturing company offering CNC machining, 3D printing (additive manufacturing), and hybrid manufacturing services. The site targets founders, sourcing engineers, and design engineers in industries like Aerospace, MedTech, Robotics, Drones, Mobility, and Industrial manufacturing.

The website is a **React single-page application (SPA)** with a Node.js/Express backend. It is designed to feel futuristic, trustworthy, and cutting-edge — inspired by SpaceX, Protolabs, and Path Robotics. The primary goals are brand positioning, SEO visibility, and capturing inbound leads via contact form.

Key pages include:
- Home (multi-section landing page)
- Industry-specific pages: Space & Satellite, MedTech, Drones & UAVs, Robotics & Automation, Mobility & Automotive, Industrial & Manufacturing
- Manufacturing process pages: CNC Milling, CNC Turning, Multi-Axis Machining, Polymer Additive, Metal Additive, DfAM, Tooling, Materials, Finishes
- Legal/policy pages: Privacy Policy, Terms & Conditions, Responsible Sourcing, Purchasing Terms, Supplier Integrity Guide, ESG/CSR Policy
- Standalone pages: Why, How, What, Vision, About, FAQ, Contact

### Industry Pages — Content Notes (8xparts migration)
All 4 core industry pages now use content and images sourced from the 8xparts.com codebase:
- **Robotics & Automation**: Parts = End Effectors & Grippers, Robotic Actuators, Sensor & Camera Housings, Structural Components, Gear & Drive Components; Why = Fast Lead Times / Industry-Leading Accuracy (±0.005mm) / Engineering Support
- **Space & Satellite**: Parts = Structural Brackets & Frames, Waveguides & Antenna, Propulsion System, Thermal Management, Electronic Housings; Why = Certified for Aerospace (AS9100 D-compliant) / High-Precision Low-Volume / Engineering Support
- **MedTech**: Parts = Surgical Tools, Diagnostic Housings, Drug Delivery, Orthotic Interfaces, Endoscopic Accessories; Why = Tight Tolerances (±0.01mm) / Biocompatible Materials (PEEK/Ultem/Ti) / Cleanroom-Compatible Finishes / Scalable / Zero China Dependency / ISO 13485-Aligned
- **Drones & UAV**: Parts = Rotor & Impeller Housings, Battery Trays, Flight Control Brackets, Sensor & LiDAR Mounts, Air Duct & Cooling Parts; Why = Flight-Ready Precision / Drone & eVTOL Ready Materials / Agile Turnarounds / Made Outside China

All product images are stored in `client/public/images/` and referenced as `/images/filename` (URL strings, not @assets imports).

### Compliance Rules
- ISO 9001:2015: CERTIFIED ✓
- AS9100: D-COMPLIANT only (never "certified")  
- ISO 13485: ALIGNED only (never "certified")
- Precilayer manufactures COMPONENTS for medical devices — NOT medical devices themselves

---

## User Preferences

Preferred communication style: Simple, everyday language.

---

## System Architecture

### Frontend Architecture

- **Framework:** React 18 with TypeScript, bootstrapped via Vite
- **Routing:** `wouter` (lightweight client-side routing); SPA redirect logic handles GitHub Pages 404 fallback via `sessionStorage`
- **Styling:** Tailwind CSS with CSS custom properties for theming (dark futuristic palette: space-900/800, cyber-400 accent). Config in `tailwind.config.ts`
- **Component Library:** shadcn/ui (Radix UI primitives) with the "new-york" style preset
- **Animations:** Framer Motion for scroll-reveal, stagger animations, hero effects, and background orbs
- **Fonts:** Inter (body), Orbitron (headings/brand), JetBrains Mono (code/data) — loaded from Google Fonts
- **State/Data Fetching:** TanStack React Query (v5) for server state; used minimally since most content is static
- **Forms:** React Hook Form with `@hookform/resolvers` and Zod validation
- **Path aliases:** `@/*` → `client/src/*`, `@shared/*` → `shared/*`, `@assets/*` → `attached_assets/`

**Key architectural decisions:**
- All sections are modular components under `client/src/components/`
- Pages under `client/src/pages/` compose components and set page-specific SEO metadata
- SEO is managed via a `usePageMeta()` utility (`client/src/lib/seo.ts`) that imperatively sets `<meta>` tags and JSON-LD schema at the component level — no SSR
- Web Vitals are tracked client-side and optionally sent to analytics
- Cloudflare Turnstile CAPTCHA is loaded only on production for the contact form
- Images use lazy loading; video background in Hero section uses autoplay/muted/loop
- Code splitting via Vite's `manualChunks`: `vendor` (react/react-dom), `ui` (Radix), `animation` (framer-motion)
- Build output: `dist/public/` (frontend static files)

### Backend Architecture

- **Runtime:** Node.js with Express (TypeScript via `tsx` in dev, `esbuild` bundle for production)
- **Entry:** `server/index.ts` — sets up Express middleware, registers routes, and conditionally runs Vite dev middleware or serves static files
- **Routes:** `server/routes.ts` — currently a scaffold; all application routes prefixed `/api/`
- **Storage:** `server/storage.ts` — `IStorage` interface with an in-memory `MemStorage` implementation (Map-based). A PostgreSQL implementation via Drizzle ORM is available but not yet wired in for API routes
- **Dev server:** Vite runs in middleware mode inside Express (HMR supported). In production, `serveStatic` serves the built frontend from `dist/public/`
- **Logging:** Custom request logger logs all `/api/*` requests with method, path, status, and duration

**Build pipeline:**
```
vite build           → builds frontend to dist/public/
esbuild server/...   → bundles backend to dist/index.js
node dist/index.js   → production start
```

### Data Storage

- **ORM:** Drizzle ORM with PostgreSQL dialect (`drizzle-kit`, `@neondatabase/serverless`)
- **Database:** PostgreSQL (Neon serverless); requires `DATABASE_URL` environment variable
- **Schema:** `shared/schema.ts` — currently defines only a `users` table (id, username, password) with Zod validation via `drizzle-zod`
- **Migrations:** Managed via `drizzle-kit push` / `migrations/` directory
- **Current state:** The DB/ORM layer is scaffolded but the active storage implementation is in-memory (`MemStorage`). No API routes currently use the DB.

The shared schema approach (`shared/`) means both server and client can import types, keeping the data contract consistent.

### Authentication & Authorization

No authentication system is currently implemented. The user schema exists (username + password fields) but no login/session routes are registered. The `connect-pg-simple` package is listed as a dependency, suggesting session-based auth with PostgreSQL session storage was planned or may be added.

### SEO Architecture

SEO is a first-class concern:
- Comprehensive meta tags, Open Graph, Twitter Card in `client/index.html`
- Dynamic per-page meta management via `usePageMeta()` (imperative DOM manipulation)
- JSON-LD structured data via `ServiceSchema` component
- `robots.txt` (both `public/` and `client/public/`)
- `sitemap.xml` referenced in robots.txt
- `404.html` in `public/` handles SPA routing on static hosts (GitHub Pages)
- Canonical URLs, geo tags, and image SEO attributes throughout

---

## External Dependencies

### Key Third-Party Services

| Service | Purpose | Integration Point |
|---|---|---|
| **Neon Database** | Serverless PostgreSQL hosting | `@neondatabase/serverless`, `DATABASE_URL` env var |
| **Cloudflare Turnstile** | CAPTCHA for contact form (production only) | Client-side script loaded dynamically in `contact-section.tsx`; sitekey hardcoded |
| **Google Fonts** | Inter, Orbitron, JetBrains Mono | Preconnect links in `index.html`, CSS import in `index.css` |
| **Google Analytics / GTM** | Web Vitals and page view tracking | `window.gtag` calls in `web-vitals.ts`; DNS-prefetch in `index.html` |
| **Unsplash** | Stock images for industry cards and OG images | Direct URL references in component files |
| **Replit Vite Plugins** | Runtime error overlay and Cartographer (dev only) | `vite.config.ts` — conditionally loaded when `REPL_ID` is set |

### npm Package Groups

- **UI/Components:** All `@radix-ui/react-*` packages + shadcn/ui scaffolding
- **Animation:** `framer-motion`
- **Forms:** `react-hook-form`, `@hookform/resolvers`, `zod`
- **Routing:** `wouter`
- **Data fetching:** `@tanstack/react-query`
- **Database:** `drizzle-orm`, `drizzle-kit`, `@neondatabase/serverless`
- **Sessions:** `connect-pg-simple` (planned)
- **Utilities:** `clsx`, `tailwind-merge`, `date-fns`, `nanoid`, `dotenv`
- **3D (planned):** `three`, `@types/three` listed as dependencies

### Environment Variables Required

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | Yes (for DB features) | PostgreSQL connection string (Neon) |
| `NODE_ENV` | Yes | `development` or `production` |
| `REPL_ID` | Auto-set by Replit | Enables Replit-specific Vite plugins |