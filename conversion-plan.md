# Cactus Cloud Media - Stack Simplification Plan

## Current Stack
- Next.js (React framework)
- TypeScript
- Tailwind CSS
- React components

## Target Stack
- HTML5
- CSS3 (with optional Tailwind classes)
- Vanilla JavaScript
- Minimal dependencies

## Conversion Steps

### 1. Project Setup
- Create new directory structure for HTML/CSS/JS files
- Setup basic HTML templates
- Migrate styling approach (Tailwind → CSS)
- Setup JavaScript modules

### 2. Page Structure Conversion
- Convert each React page to standalone HTML:
  - `src/app/page.tsx` → `index.html`
  - `src/app/services` → `services.html`
  - `src/app/portfolio` → `portfolio.html`
  - `src/app/contact` → `contact.html`

### 3. Component Conversion
- Transform React components to HTML/CSS/JS modules:
  - Navigation → HTML structure with CSS and JS for mobile toggle
  - ContactForm → HTML form with vanilla JS validation
  - Portfolio → HTML gallery with optional lightbox JS library

### 4. Styling Migration
- Keep Tailwind classes in HTML or convert to custom CSS
- Extract design system (colors, spacing, typography) to CSS variables
- Create responsive layouts with CSS media queries

### 5. JavaScript Functionality
- Replace React hooks with vanilla JS
- Implement form validation and submission
- Add any interaction effects (animations, transitions)
- Implement gallery/portfolio functionality

### 6. Asset Management
- Organize images and media assets
- Optimize assets for performance
- Setup proper paths in HTML

### 7. Deployment Configuration
- Setup for static hosting (Netlify, Vercel, GitHub Pages, etc.)
- Configure redirects if needed
- Setup form submissions (if using a service like Netlify Forms)

## Timeline Estimate
- Project setup: 1 day
- Page conversions: 2-3 days
- Component conversions: 2-3 days
- Styling refinement: 1-2 days
- JavaScript implementation: 2-3 days
- Testing and adjustments: 2 days
- Deployment: 1 day

Total: Approximately 11-15 days of development work

## Benefits of New Stack
- Faster page loads
- Simpler maintenance
- Better SEO
- Easier for non-developers to edit
- Reduced dependencies and build complexity 