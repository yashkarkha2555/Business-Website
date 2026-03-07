# Testing Evidence

## Current Validation Commands

```bash
npm run lint
npm run build
npm run test
```

## Example Test Coverage Areas

- Utility validation functions in `src/utils/helpers.js`
- Header rendering and navigation presence
- Form validation behavior (contact/newsletter)
- Interactive component state changes (tabs, accordion, slider)

## Test Case Examples

1. Email validation
   - Input: `hello@example.com`
   - Expected: valid
2. Email validation failure
   - Input: `hello@`
   - Expected: invalid with error feedback
3. Portfolio filter
   - Input: category `Marketing`
   - Expected: only marketing cards are rendered
4. FAQ accordion
   - Action: click question button
   - Expected: corresponding answer panel is visible

## Evidence Template

Record command output here after each release:

```text
Date:
Branch:
Lint: pass/fail
Build: pass/fail
Test: pass/fail
Notes:
```

## CI Evidence

- General CI workflow: `.github/workflows/ci.yml`
- Lighthouse CI workflow: `.github/workflows/lighthouse.yml`
