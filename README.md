# Frontend Foundations Mastery - Business Website

A multi-page React business website built to practice advanced frontend skills: modern JavaScript (ES6+), CSS Grid/Flexbox, accessibility, responsive design, and performance-minded architecture.

## GitHub Structure

```text
business-website/
|- README.md
|- src/
|- public/
|- package.json
|- .gitignore
|- lighthouse/
|- docs/
|- tests/
|- .github/
|  |- workflows/
|     |- ci.yml
```

## Project Goals Covered

- 5+ responsive pages with complex layouts
- 10+ interactive React components
- CSS Grid and Flexbox throughout
- Dark and light theme toggle
- Form validation and interaction feedback
- Animations and transitions with reduced-motion support
- Responsive navigation and mobile menu
- WCAG-oriented improvements (semantic structure, skip link, focus states, ARIA usage)
- Route-level lazy loading for performance

## Pages Implemented

1. Home
2. Services
3. Portfolio
4. About
5. Contact

## Interactive Components

1. `Header`
2. `Navigation`
3. `ThemeToggle`
4. `FeatureCard`
5. `ServiceTabs`
6. `PortfolioFilter`
7. `TestimonialSlider`
8. `NewsletterForm`
9. `ContactForm`
10. `FAQAccordion`
11. `ScrollToTopButton`
12. `Footer` (interactive links)

## Tech Stack

- React 19
- React Router DOM
- Vite
- CSS variables + Grid/Flexbox
- Modern JavaScript features (arrow functions, destructuring, async/await, array methods, memoization)

## Run Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## 6-Week Frontend Foundations Plan

### Week 1: HTML5 and CSS3 Mastery
- Semantic landmarks and content hierarchy
- CSS variables, advanced selectors, pseudo-elements
- Flexbox and Grid layout patterns

### Week 2: JavaScript ES6+
- Destructuring, spread/rest, template literals
- Array methods (`map`, `filter`, `find`)
- Async patterns with `fetch` and `async/await`

### Week 3: React Fundamentals
- Components, props, and composition
- State with `useState`
- Side effects with `useEffect`

### Week 4: Advanced Frontend
- Routing with React Router
- State lifting and reusable utility modules
- API integration and resilient fallbacks

### Week 5: UI/UX and Accessibility
- Keyboard and focus management
- ARIA labels/roles for interactive controls
- Responsive breakpoints and mobile UX polish

### Week 6: Optimization and Deployment
- Lazy loading routes
- Production build validation
- Lighthouse and cross-browser checks

## Accessibility Checklist (Implemented)

- Skip-to-content link
- Semantic heading and section structure
- ARIA attributes for toggles, tabs, and accordion controls
- Visible `:focus-visible` styles
- Reduced-motion media query handling

## Suggested Practice Extensions

1. Add unit tests for form and filter logic.
2. Integrate a real backend endpoint for contact submissions.
3. Add image optimization and responsive `srcset` assets.
4. Run Lighthouse and track baseline metrics in CI.
