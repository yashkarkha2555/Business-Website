# Accessibility Implementation

## Standards Target

- WCAG 2.1 AA-oriented implementation
- Semantic HTML landmarks and heading hierarchy
- Keyboard-first interaction support

## Implemented Features

- Skip link to main content in header.
- Semantic sections and structured headings across pages.
- Focus visibility via `:focus-visible` styles.
- ARIA usage for:
  - Mobile menu toggle (`aria-expanded`, `aria-controls`)
  - Tabs (`role=tablist`, `role=tab`, `role=tabpanel`)
  - FAQ accordion (`aria-expanded`, `aria-controls`)
  - Slider controls (`aria-label`)
- Reduced motion compatibility using `prefers-reduced-motion`.

## Screen Reader and Keyboard Support

- Navigation landmarks are labeled.
- Form fields include labels and invalid-state hints.
- Interactive controls remain reachable by tab navigation.

## Verification Checklist

- [ ] Keyboard-only navigation works across all pages.
- [ ] Focus indicator is visible on all controls.
- [ ] Forms announce errors and states clearly.
- [ ] Color contrast is readable in light and dark themes.
- [ ] Motion is reduced when OS preference is enabled.

## Tools for Audit

1. Browser Lighthouse accessibility audit.
2. Axe DevTools browser extension.
3. Manual keyboard walkthrough.
