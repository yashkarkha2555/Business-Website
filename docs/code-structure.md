# Code Structure

## Top-Level Layout

```text
business-website/
|- .github/workflows/
|  |- ci.yml
|  |- lighthouse.yml
|- docs/
|- lighthouse/
|- public/
|  |- api/business-data.json
|- src/
|  |- components/
|  |- context/
|  |- hooks/
|  |- pages/
|  |- styles/
|  |- utils/
|  |- App.jsx
|  |- main.jsx
|- tests/
|  |- integration/
|  |- unit/
|  |- setupTests.js
|- package.json
|- vite.config.js
```

## Source Code Organization

- `src/components/`: Reusable UI components.
- `src/pages/`: Route-level page views.
- `src/context/`: Global providers (theme state).
- `src/hooks/`: Shared custom hooks.
- `src/styles/`: Global styles, variables, and animations.
- `src/utils/`: Constants and utility functions.

## Why This Structure

- Separates reusable UI from route-level composition.
- Keeps styling centralized and token-driven.
- Keeps logic and data constants isolated for easier testing.
