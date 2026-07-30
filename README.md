# THE THAJUU — Portfolio Website

A premium, dark-luxury portfolio for **Muhammed Thajudheen (THE THAJUU)**, AI Web Developer based in Dubai, UAE. Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, GSAP-ready hooks, Lenis smooth scroll, and a React Three Fiber hero scene.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/            Root layout, global styles, and the home page
components/     Reusable, non-section UI (navbar, footer, cursor, scroll, buttons)
sections/       One file per homepage section (Hero, About, Projects, ...)
lib/            data.ts (all editable content) and utils.ts
public/         Static assets — add a favicon.ico and any project screenshots here
```

## Editing content

Almost everything on the page — projects, services, tech stack, process steps, stats,
and social links — lives in **`lib/data.ts`**. To add a new project, add an object to
the `projects` array with a title, description, url, technologies, features, and
process steps; no other file needs to change.

The homepage cards and case-study modal currently render each project's **live site**
in an embedded, scaled-down iframe so the preview is always up to date. If you'd
rather use static screenshots, drop images into `public/projects/` and swap the
`<iframe>` in `sections/ProjectCard.tsx` and `sections/ProjectModal.tsx` for a
Next.js `<Image>`.

## Contact form

The form in `sections/Contact.tsx` currently simulates a send on the client. To make
it functional, either:

1. Add a Next.js Route Handler at `app/api/contact/route.ts` that emails you (e.g.
   via Resend or Nodemailer) and call it from `handleSubmit`, or
2. Point the form at a hosted service such as Formspree.

## Deployment

The project is ready for GitHub + Vercel:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

Then import the repository at [vercel.com/new](https://vercel.com/new) — no
additional configuration is required.

## Notes on 3D and animation performance

- The hero's Three.js scene is dynamically imported with `ssr: false` and only
  mounts on the client, so it never blocks first paint.
- Reduced-motion preferences are respected globally in `app/globals.css`.
- The custom cursor and Lenis smooth scroll disable themselves automatically on
  touch devices and small viewports.
