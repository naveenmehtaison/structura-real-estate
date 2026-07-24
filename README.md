# Structura Website

Frontend for **Structura** — real estate sales and construction services — built to match the Stitch / Figma designs in this repo.

## Run locally

```bash
cd website
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/properties` | Browse properties (filters) |
| `/properties/:id` | Property details |
| `/sold` | Sold properties archive |
| `/construction` | Construction trades & professionals |
| `/portfolio` | Completed projects (before/after) |
| `/about` | About, team, credentials |
| `/contact` | Contact form + map |

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- React Router
- Design tokens from Multi-Faceted Authority (Manrope / Work Sans / JetBrains Mono)
