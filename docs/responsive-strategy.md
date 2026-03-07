# Responsive Strategy

## Breakpoints

- Mobile: `< 600px`
- Tablet: `600px - 900px`
- Desktop: `> 900px`

## Layout Patterns

- CSS Grid for page sections and card collections.
- Flexbox for navigation, button rows, and compact control groups.
- Fluid typography using `clamp()` for heading scale.

## Mobile-First Behavior

- Navigation collapses to menu toggle on smaller screens.
- Multi-column layouts collapse to single-column for readability.
- Controls and inputs use touch-friendly spacing.

## Validation Steps

1. Check each page on mobile viewport in browser DevTools.
2. Verify no horizontal overflow.
3. Verify nav menu opens/closes and links are reachable.
4. Verify forms and buttons remain usable at narrow widths.
