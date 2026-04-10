# Concurso de cuentos

This project is a Vite + React static site ready to deploy from a Git repository.

## Local development

- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Build production files: `npm run build`
- Preview production build: `npm run preview`

## Easypanel deployment

Recommended deployment method: Git repository + build.

Use these settings in Easypanel:

- Build method: Node / build from Git repository
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

## Notes

- No environment variables are required.
- Node 18 or newer is recommended.
- The current app does not depend on client-side nested routes, so no SPA fallback rewrite is required for the present version.
