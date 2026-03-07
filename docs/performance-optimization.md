# Performance Optimization

## Techniques Implemented

- Route-level lazy loading with `React.lazy` and `Suspense`.
- Static constants separated from component logic.
- Minimal runtime dependencies.
- CSS token system to reduce style duplication.

## Build Validation

Use:

```bash
npm run build
```

Artifacts are emitted to `dist/` with Vite-optimized chunks.

## Lighthouse Process

1. Build the project.
2. Run Lighthouse CI using `.github/workflows/lighthouse.yml`.
3. Store local Lighthouse exports in `lighthouse/`.

## Future Improvements

- Add image compression and responsive `srcset`.
- Preload high-priority assets.
- Add performance budgets in CI.
