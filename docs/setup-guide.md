# Setup Guide

## Prerequisites

- Node.js 20+
- npm 10+
- Git

## Installation

1. Clone the repository.
2. Open terminal in project root.
3. Install dependencies:

```bash
npm install
```

## Local Development

Start the development server:

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`).

## Production Build

```bash
npm run build
npm run preview
```

## Quality Checks

```bash
npm run lint
npm run build
npm run test
```

If `npm run test` is unavailable, ensure `package.json` includes test scripts and Vitest dependencies.
