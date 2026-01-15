# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 15 marketing landing page for Robora Financial - a fintech product helping apartment management companies maximize returns on excess cash (security deposits, operating accounts, reserves).

## Commands

```bash
bun install          # Install dependencies
bun dev              # Start dev server with Turbopack
bun run build        # Production build
bun run lint         # Run ESLint
```

## Architecture

**Framework:** Next.js 15.3.6 with React 19, TypeScript, Tailwind CSS v4

**Path Alias:** `@/*` maps to `./src/*`

### Directory Structure

```
src/
├── app/              # Next.js App Router (layout.tsx, page.tsx, globals.css)
├── components/
│   ├── sections/     # Page section components (hero, calculator, footer, etc.)
│   └── ui/           # shadcn/ui component library (Radix UI based)
├── hooks/            # Custom React hooks
└── lib/utils.ts      # cn() utility for Tailwind class merging
```

### Page Composition

The home page (`src/app/page.tsx`) is a single-page marketing site composed of section components imported from `components/sections/`. Each section is a self-contained component.

### UI Components

Uses shadcn/ui (New York style) built on Radix UI primitives. Configuration in `components.json`.

```bash
npx shadcn@latest add <component>  # Add new shadcn/ui components
```

### Styling

- Tailwind CSS v4 with PostCSS plugin
- Brand colors defined as CSS variables in `globals.css`:
  - Primary Navy: #013A6F
  - Primary Navy Dark: #001C35
  - Accent Yellow: #FFCA40
  - Light Gray Background: #F4F5F5
- Mobile breakpoint: 768px (see `hooks/use-mobile.ts`)

### External Integrations

- **Orchids:** Visual editing CMS integration (configured in next.config.ts)
- **Vercel:** Deployment platform
- Images hosted on Supabase storage CDN

## Build Configuration

- TypeScript and ESLint errors are ignored during builds (see next.config.ts)
- Remote images allowed from any HTTPS/HTTP source
- React Server Components enabled by default; use `'use client'` for interactivity
