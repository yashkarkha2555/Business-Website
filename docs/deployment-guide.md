# Deployment Guide

## Option 1: Vercel

1. Push repository to GitHub.
2. Import project into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Option 2: Netlify

1. Connect GitHub repository.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy site.

## Option 3: GitHub Pages (via Actions)

1. Add Pages deployment workflow.
2. Build with Vite.
3. Upload `dist` as Pages artifact.
4. Configure repository Pages source to Actions.

## Pre-Deployment Checklist

- `npm run lint` passes.
- `npm run build` passes.
- Docs and screenshots are up to date.
- Lighthouse report attached.
