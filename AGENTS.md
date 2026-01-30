# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview

This is a single-page marketing site for Z.A.Refrigeracion built with React, TypeScript, Vite, and Tailwind CSS. The app renders a landing page with hero, services, contact, footer, and a floating WhatsApp CTA, targeting only client-side rendering (no router or SSR).

## Development commands

- Install dependencies: `npm install`
- Start the dev server: `npm run dev`
- Build for production (type-checks with TypeScript and runs the Vite bundler): `npm run build`
- Run linting (type-aware ESLint using the project tsconfigs): `npm run lint`
- Preview the built app locally (after `npm run build`): `npm run preview`

There is currently no dedicated test runner configured (no Jest/Vitest config and no `test` script in `package.json`).

## Architecture and structure

### Entry point and layout

- `src/main.tsx` is the browser entry point. It bootstraps React with `ReactDOM.createRoot` and renders `<App />` inside the `root` element, wrapped in `React.StrictMode`.
- `src/App.tsx` composes the page layout. It wraps the entire site in a full-height container that applies base fonts and light/dark background classes, and renders:
  - `Navbar` (fixed, with anchors to page sections and theme toggle)
  - `Hero` (top hero section with primary CTAs)
  - `Services` (services grid + details modal)
  - `Contact` (WhatsApp-centric contact form and direct contact options)
  - `Footer` (branding, QR to the site, dynamic current year)
  - `WhatsAppButton` (floating WhatsApp shortcut with contextual message)

### Components and stateful behavior

All UI components live under `src/components` and are imported using the `@` path alias (see below). Most components are presentational, with local state used for interactive behavior:

- `Navbar` manages a `useState`-backed mobile menu toggle and wires navigation via hash anchors (`#inicio`, `#servicios`, `#contacto`). It embeds the `ThemeToggle` and provides quick contact links (`tel:` and `#contacto`).
- `Hero` defines the primary marketing copy and CTAs and is mostly static UI, relying on Tailwind utility classes and some animated decorative elements.
- `Services` holds a local `services` array describing each service (icon JSX, title, summary, detailed bullet points). Clicking a card opens a detail modal by setting `selectedService` in local state; closing clears that state.
- `Contact` manages a small form state object (`nombre`, `telefono`, `mensaje`). On submit it:
  - Validates that `nombre` and `telefono` are present.
  - Inspects `window.location.search` to see if `ref=qr` is present and, if so, appends a note indicating the lead came from the printed card.
  - Constructs a formatted WhatsApp message and opens a `wa.me` link in a new tab via `window.open`.
- `Footer` displays branding and a QR code image that points to `https://zarefrigeracion.com.ar/?ref=qr`. The year is derived at runtime via `new Date().getFullYear()`.
- `ThemeToggle` keeps a `theme` state (`"light" | "dark"`), initialized from `localStorage` or `prefers-color-scheme`. It adds or removes the `dark` class on `document.documentElement` and persists the selection back to `localStorage`.
- `WhatsAppButton` computes a single `message` in state at mount time, depending on whether `window.location.search` contains `ref=qr`. It renders a fixed-position floating button with a `wa.me` link using `encodeURIComponent(message)`.

Both `ThemeToggle` and `WhatsAppButton` assume a browser environment and guard access to `window` with `typeof window !== "undefined"`.

### Configuration, tooling, and aliases

- Vite is configured in `vite.config.ts`:
  - Uses `tsconfigPaths()` so TS path aliases (notably `@/*`) also work in Vite imports.
  - Adds `@mdx-js/rollup` with `react` configured to include `.mdx` files, enabling MDX support alongside TS/JSX if such files are added later.
  - Integrates Tailwind via `@tailwindcss/vite`.
  - Runs `vite-plugin-checker` with TypeScript enabled so type errors are surfaced in dev.
- TypeScript configuration:
  - `tsconfig.json` is a project reference file pointing to `tsconfig.app.json` and `tsconfig.node.json` and defines the `@/*` path alias to `./src/*`.
  - `tsconfig.app.json` configures the browser app build: `strict` mode is enabled, targeting `ES2022` with DOM libs and using `moduleResolution: "bundler"`, `jsx: "react-jsx"`, and `noEmit: true`.
- ESLint is configured in `eslint.config.js`:
  - Uses `@eslint/js` recommended rules, TypeScript ESLint `recommended` plus `recommendedTypeChecked`, `strictTypeChecked`, and `stylisticTypeChecked` configs.
  - Enables React Hooks and React Refresh flat configs tuned for Vite.
  - Configures `parserOptions.project` to use `tsconfig.app.json` and `tsconfig.node.json` for type-aware linting.
  - Globally ignores `dist/`.

### Styling and theming

- Global styles live in `src/index.css` and are applied from `src/main.tsx` via a side-effect import.
- Tailwind CSS is used throughout via utility classNames. Dark mode is controlled by toggling the `dark` class on the `<html>` element (managed in `ThemeToggle`).
- Section IDs (`inicio`, `servicios`, `contacto`) are the primary navigation mechanism; changes to these IDs must be kept in sync between components and anchor links.
