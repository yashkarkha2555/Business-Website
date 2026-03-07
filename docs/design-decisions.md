# Design Decisions

## Visual Language

- Warm light palette and neutral dark mode for readability.
- Distinct display/body typography to improve hierarchy.
- Card-based surfaces and soft shadows for visual grouping.

## Interaction Decisions

- Mobile-first navigation with explicit menu toggle.
- Theme toggle persists user preference in `localStorage`.
- Forms validate required fields and email format before submit.

## Architecture Decisions

- Route-level pages in `src/pages/`, reusable UI in `src/components/`.
- Global theme state via context provider to avoid prop drilling.
- Constants in `src/utils/constants.js` to keep content centralized.

## Trade-offs

- Chose static JSON mock API (`public/api/business-data.json`) for deterministic demos.
- Chose CSS variables over CSS-in-JS for clarity and easy theme switching.
