# PROPILKI

PROPILKI is a React + Vite single-page application with two main sections:

- Online Courses (main landing page)
- SOLO Press-On Nails (product-focused experience)

The project is fully JSON-driven and deployed on GitHub Pages as an SPA.

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- TanStack Query
- Lucide Icons

## Pages & Routes

- `/` – Online Courses
- `/solo` – SOLO press-on nails
- `/product/:id` – Product detail page

## Architecture

- Content stored in `src/data` (JSON only)
- No hardcoded images in components
- Local assets only
- Separate component systems:
  - `components/nails`
  - `components/online-courses`

## Routing & Hosting

- BrowserRouter with `basename`
- Custom `404.html` for GitHub Pages SPA deep links
- Hash-based scrolling handled via `ScrollToHash`

## Development

Install dependencies:

```bash
npm install