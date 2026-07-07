# Vector Labs

Vector Labs is a premium marketing site for a clinic-growth agency focused on dental and aesthetic brands. The current build is a React + TypeScript + Vite single-page experience with structured sections for positioning, challenges, services, case studies, process, FAQ, and CTA.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Motion
- Lucide React

## Project Structure

```text
src/
  components/
    layout/
    sections/
    ui/
  data/
  lib/
  pages/
```

The site now uses:

- `pages/Home.tsx` as the app entry page
- reusable UI primitives for layout and repeated patterns
- centralized data modules for navigation, services, challenges, case studies, FAQ, and process content

## Local Development

Prerequisite: Node.js

1. Install dependencies with `npm install`
2. Start the dev server with `npm run dev`
3. Build for production with `npm run build`
4. Run type-checking with `npm run lint`

## Environment Variables

No environment variables are currently required for the static marketing site.
