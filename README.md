# Razal CP — Developer Portfolio

Production-quality personal portfolio for **CP Razal Nazim** (Razal CP), Full Stack / MERN Stack Developer.

Built with:

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- Zero runtime dependencies beyond React/Next

## Features

- Single-page portfolio: Hero, About, Tech Stack, Experience timeline, Projects (professional + personal/collaborative), Contact
- Fully static prerender, SEO metadata + Open Graph + favicon
- Responsive across desktop / tablet / mobile
- Scroll-reveal animations with `prefers-reduced-motion` support
- Downloadable resume served from `public/resume.pdf`

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run start    # serve production build
```

## Structure

```
src/
├── app/
│   ├── layout.tsx        # fonts, SEO metadata, viewport
│   ├── page.tsx          # section composition
│   ├── globals.css       # Tailwind v4 theme tokens + animations
│   └── icon.svg          # favicon
├── components/           # Navbar, Hero, About, Skills, Experience,
│                         # Projects, Contact, Footer, Reveal, icons
└── lib/
    └── data.ts           # all portfolio content (single source of truth)
```

All resume-derived content lives in `src/lib/data.ts` — edit content there without touching components.
