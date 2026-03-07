# Project Submission Guidelines

This document defines what to submit for full marks and how to package this frontend project.

## Submission Package

Include the following in the repository root:

- `README.md`
- `src/`
- `public/`
- `package.json`
- `.gitignore`
- `lighthouse/`
- `docs/`
- `tests/`
- `.github/workflows/`

## Mandatory Documentation Files

Include these files under `docs/`:

- `project-overview.md`
- `setup-guide.md`
- `code-structure.md`
- `visual-documentation.md`
- `design-decisions.md`
- `component-architecture.md`
- `responsive-strategy.md`
- `accessibility.md`
- `performance-optimization.md`
- `deployment-guide.md`
- `testing-evidence.md`

## Step-by-Step Submission Process

1. Ensure local checks pass.
   - `npm run lint`
   - `npm run build`
2. Confirm all docs are updated and consistent with code.
3. Place screenshots in `docs/assets/screenshots/`.
4. Export Lighthouse reports to `lighthouse/`.
5. Push changes to `main` or open a PR.
6. Confirm GitHub Actions workflows pass in `.github/workflows/`.

## Final Validation Checklist

- [ ] Project overview and objectives are clear.
- [ ] Setup instructions are reproducible.
- [ ] Code structure is documented with file hierarchy.
- [ ] Visual proof (screenshots) is included.
- [ ] Technical details explain architecture and logic.
- [ ] Testing evidence includes cases and results.
- [ ] Component hierarchy and data-flow diagram is present.
- [ ] Accessibility strategy is documented and verified.
- [ ] Performance strategy and reports are attached.
- [ ] Deployment process is documented end-to-end.
