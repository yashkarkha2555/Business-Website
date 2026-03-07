# Architecture Overview

## Stack

- React 19
- React Router DOM
- Vite
- CSS variables + modular style files

## App Structure

- `src/App.jsx`: Route shell and lazy-loaded page routing.
- `src/main.jsx`: App bootstrap with `ThemeProvider`.
- `src/context/`: Theme context/provider.
- `src/hooks/`: Shared hooks (`useTheme`).
- `src/components/`: Reusable UI building blocks.
- `src/pages/`: Route-level page components.
- `src/utils/`: Constants and helper functions.
- `src/styles/`: Variables, global styles, animations.

## Routing

Routes are declared in `src/App.jsx`:

- `/`
- `/services`
- `/portfolio`
- `/about`
- `/contact`

## State and Data

- Theme state is global via React context.
- Component-local UI state is handled with `useState`.
- Home metrics are loaded asynchronously from `public/api/business-data.json`.

## Technical Details

### Data Structures

- Arrays of objects for features, services, portfolio projects, testimonials, FAQs, and team members.
- Object maps for form state and validation errors.

### Algorithms and Logic Patterns

- Portfolio search and category filter:
	- `Array.filter` + text matching for category/query refinement.
- Active tab and accordion selection:
	- Conditional rendering using selected item IDs.
- Testimonial slider:
	- Circular index update with modulo arithmetic.
- Form validation:
	- Regex-based email validation and required field checks.

### Component Patterns

- Container/page components orchestrate data and composition.
- Presentational components handle UI rendering.
- Shared context for cross-page theme state.

## Testing

- Unit tests: `tests/unit/`
- Integration tests: `tests/integration/`
- Setup: `tests/setupTests.js`
