# Overview

This is a modern, futuristic website for Precilayer, a next-generation Indian manufacturing company. The application showcases Precilayer's precision machining and additive manufacturing capabilities through a sleek, interactive web experience. Built with React and styled using Tailwind CSS, the site emphasizes a futuristic aesthetic with animated components, high-contrast visuals, and modern typography. The website aims to redefine the perception of Indian manufacturing by positioning the company as a global leader in precision engineering and innovative manufacturing solutions.

# User Preferences

Preferred communication style: Simple, everyday language.

# Compliance Language Rules
- "ISO 9001:2015 certified" — company IS certified (can say "certified")
- "AS9100 D-compliant" — company is compliant but NOT certified (never say "AS9100 certified")
- "ISO 13485-aligned" — company follows guidelines but NOT certified (never say "ISO 13485 certified")
- Company manufactures COMPONENTS for medical devices, NOT medical devices themselves

# Site Structure

## Industry Pages (6 total, matching brochure)
- /industries/space-satellite — Space & Aerospace
- /industries/drones-uav — Drones & UAVs
- /industries/robotics-automation — Robotics & Automation
- /industries/mobility-automotive — Mobility & Automotive
- /industries/medtech — Healthcare & Medical Devices
- /industries/industrial-manufacturing — Industrial & Manufacturing

## Manufacturing Pages
### Additive Manufacturing
- /manufacturing/polymer-additive — Polymer AM (MJF, SLS, SLA, DLP)
- /manufacturing/metal-additive — Metal AM (DMLS, EBM)
- /manufacturing/dfam — Design for Additive Manufacturing

### CNC / Subtractive Manufacturing
- /manufacturing/cnc-milling — CNC Milling (3, 4, 5-axis)
- /manufacturing/cnc-turning — CNC Turning
- /manufacturing/multi-axis-machining — Multi-Axis Precision Machining
- /manufacturing/tooling-complex-machining — Tooling & Complex Machining (EDM)

### Resources
- /manufacturing/materials — Materials Available (tabbed UI)
- /manufacturing/finishes — Surface Finishes & Post-Processing (grid layout)

## Policy Pages
- /privacy-policy, /terms-conditions, /responsible-sourcing, /purchasing-terms, /supplier-integrity-guide, /esg-csr-policy

## Navigation
- Top nav: Why, How, What, Vision, Industries, About, FAQ, Contact + Manufacturing dropdown
- Manufacturing dropdown has 3 sections: Additive, CNC/Subtractive, Resources
- Footer: Manufacturing links, Company (About/Contact/Quality/ISO cert), Policies
- No industry links in footer

## Key Components
- ISO 9001:2015 badge: fixed bottom-right, links to /iso-9001-certificate.pdf
- Building line-art: used as subtle footer background at 4% opacity

# System Architecture

## Frontend Architecture
The application follows a modern React-based single-page application (SPA) architecture with component-based design patterns. The frontend uses functional components with React hooks for state management and lifecycle operations. Animation and interactivity are handled through Framer Motion for smooth, performant animations. The routing system is implemented using Wouter for client-side navigation.

## Component Structure
The UI is built with a comprehensive design system using shadcn/ui components, providing consistent styling and behavior across the application. Components are organized into logical sections (hero, navigation, features, contact, etc.) with reusable UI primitives. The styling approach leverages Tailwind CSS for utility-first styling with custom CSS variables for theming and futuristic design elements.

## Build System
The project uses Vite as the build tool for fast development and optimized production builds. TypeScript is used throughout for type safety and better developer experience. The build process includes separate client and server compilation, with the client assets being served statically in production.

# External Dependencies

## UI and Styling
- **React**: Core frontend framework for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **Framer Motion**: Animation library for smooth, performant animations
- **Lucide React**: Icon library for consistent iconography

## Development and Build Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type-safe JavaScript development
- **PostCSS**: CSS processing with Autoprefixer

## Database and Backend
- **Drizzle ORM**: Type-safe database ORM
- **PostgreSQL**: Database system (configured for Neon Database)
- **Express.js**: Backend web framework

## Routing and Navigation
- **Wouter**: Lightweight client-side routing library

## Fonts and Typography
- **Google Fonts**: Inter, Orbitron, and JetBrains Mono font families for futuristic typography
