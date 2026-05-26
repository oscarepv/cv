# AGENTS.md — CV / Portfolio Site

## Repository Overview
Personal portfolio/CV site for Oscar Pullay (oscarepv). Static site: HTML5, CSS3 (custom properties), JavaScript (jQuery 3.x, Bootstrap 4). No build system, no package manager, no test framework.

## Build / Lint / Test Commands
- **No build step** — this is a static site. Open `index.html` directly in a browser.
- **No linter** — no ESLint, Prettier, Stylelint, or similar. Do not run lint commands.
- **No type checker** — no TypeScript, no Flow.
- **No test runner** — no Jest, Vitest, or similar. Do not run test commands.
- **Local dev**: `open index.html` or use `python3 -m http.server 8000` then visit `http://localhost:8000`.
- **No CI config** — no GitHub Actions, no `.travis.yml`, no `Makefile`.

## Project Structure
```
cv/
├── index.html              # Single-page portfolio (all sections, 409 lines)
├── style.css               # All custom styles (CSS custom properties, 895 lines)
├── css/
│   ├── bootstrap.min.css
│   └── bootstrap.min.css.map
├── js/
│   ├── jquery.min.js
│   ├── popper.min.js
│   ├── bootstrap.min.js
│   ├── bootstrap.min.js.map
│   ├── scripts.js           # Custom jQuery (nav scroll, modal, active link, reveal animations, 90 lines)
│   └── animate-text.js      # Third-party text animation (cd-headline)
├── images/                  # 6 images (project screenshots, profile pic)
├── .agents/
│   └── skills/              # Installed agent skills
│       ├── frontend-design/
│       ├── accessibility/
│       └── seo/
├── skills-lock.json
└── AGENTS.md                # This file
```

## Available Agent Skills
Three skills are installed (see `.agents/skills/` and `skills-lock.json`):
- **frontend-design** (`anthropics/skills`) — creating polished web UI
- **accessibility** (`addyosmani/web-quality-skills`) — WCAG 2.2 audits
- **seo** (`addyosmani/web-quality-skills`) — search engine optimization

Load them with the `skill` tool when the task matches their purpose.

## Code Style Guidelines

### HTML
- Indent: **2 spaces**. No tabs.
- Quoting: double quotes for attributes.
- Class naming: `kebab-case` (e.g. `project-card`, `btn-primary`, `nav-container`).
- Semantic elements used: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Meta tags: include `description`, `og:title`, `og:description`, `og:type`.
- CSS/JS inline styles: avoid; use classes. Exception: rare one-off overrides via `style` attribute.
- Accessibility: use `aria-label` on icon-only links, `alt` on images, `aria-hidden="true"` on modal.
- Sections use `aria-labelledby` pointing to the heading `id`.
- Skip link present: `<a href="#main-content" class="skip-link">`.
- Modals use Bootstrap 4 modal markup (`.modal`, `.modal-dialog`, `.modal-content`).
- Reveal animations: add `reveal` class + optional `reveal-delay-1` through `reveal-delay-4`.

### CSS (style.css)
- Indent: **2 spaces** inside rule blocks.
- Variables: use `:root` CSS custom properties extensively. Naming convention: `--category-property` (e.g. `--bg-main`, `--text-muted`, `--font-sans`, `--radius-md`, `--space-lg`).
- Selectors: `kebab-case`. Avoid over-nesting. Use direct class selectors (`.hero-title`, `.project-card`).
- Property order: loosely grouped — position → display/box model → typography → visual (color, background, border) → transition/animation. Not strictly enforced; follow existing patterns.
- Use `var(--variable)` consistently. Never hardcode colors except in `:root`.
- Media queries: `@media (max-width: 768px)` — breakpoint for mobile.
- Animations: prefer `@keyframes` with `animation` property. Use `transition: all 0.3s ease` as default.
- No CSS preprocessor (Sass/Less) — plain CSS only.

### JavaScript (scripts.js)
- Indent: **4 spaces**.
- Language: ES5 (no `let`/`const` — uses `var`; no arrow functions; no template literals).
- jQuery: use `$` alias. Wrap in `$(document).ready(function() { ... })`.
- No ES modules — script tags load jQuery, Popper, Bootstrap, then custom scripts.
- Naming: `camelCase` for variables (`scrollDistance`, `ruta_imagen`, `navHeight`). Spanish/English hybrid variable names exist (not ideal but follow existing).
- Strings: double quotes.
- Semi-colons: required.
- Events: jQuery on-event pattern (`$element.on('click', function(e) { ... })`).
- Scroll reveals: uses `IntersectionObserver` with `.reveal` / `.visible` classes and `.reveal-delay-[1-4]` for staggered timing.
- Modal focus management: returns focus to trigger element after modal closes.

### animate-text.js (third-party)
- Indent: **tabs** (do not change).
- Written as jQuery plugin pattern: `jQuery(document).ready(function($){ ... })`.
- Uses `$` prefix for jQuery-wrapped variables (`$word`, `$headlines`).
- Do NOT modify this file unless explicitly asked.

### Images
- Directory: `/images/`. Formats: JPG, JPEG. Names: short lowercase (e.g. `c1.jpg`, `img.jpg`, `msapp.JPG`).
- Aspect ratio: 16:9 (via `padding-top: 56.25%` wrapper).
- Profile image uses `grayscale(100%)` with color reveal on hover.

## Git Conventions
- Committer: `oscarepv`
- Commit messages: descriptive sentence case (e.g. "Enhance UI and UX: Implement smooth scrolling, active link highlighting, and modal image handling").
- Branch: `master` (single branch).

## Naming Conventions Summary
| Context | Convention | Example |
|---------|-----------|---------|
| HTML classes | kebab-case | `project-card`, `btn-outline` |
| CSS custom props | `--category-property` | `--bg-main`, `--font-mono` |
| CSS selectors | kebab-case | `.hero-subtitle`, `.skill-category` |
| JS variables | camelCase | `scrollDistance`, `navHeight` |
| JS files | kebab-case | `animate-text.js`, `scripts.js` |
| CSS files | kebab-case | `style.css`, `bootstrap.min.css` |
| Image files | short lowercase | `c1.jpg`, `img.jpg`, `msapp.JPG` |

## Error Handling
- No explicit error handling in JS (no try/catch, no error callbacks).
- If adding error handling, use jQuery patterns (e.g. `$.ajax` error callbacks) and keep consistent with existing simple imperative style.

## Dependencies (loaded via CDN or local files)
- Bootstrap 4 (CSS: `bootstrap.min.css`, JS: `bootstrap.min.js`)
- jQuery 3.x (`jquery.min.js`)
- Popper.js (`popper.min.js`)
- Font Awesome 5.15.4 (CDN)
- Google Fonts: Bricolage Grotesque + DM Sans + Fira Code (CDN)

Do NOT add npm/yarn/pnpm dependencies. All deps are loaded via `<link>` and `<script>` tags.

## What NOT to Do
- Do not add a build system (webpack, vite, etc.)
- Do not add TypeScript
- Do not add a test framework
- Do not add a package.json or node_modules
- Do not convert to a framework (React, Vue, Angular)
- Do not modify `animate-text.js` unless explicitly asked
- Do not run lint/typecheck/test commands — they do not exist
