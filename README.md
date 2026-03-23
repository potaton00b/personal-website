# personal-website

Personal website for Sunny Cui — built with Next.js 16, Tailwind CSS v4, and shadcn/ui.

## Stack

- [Next.js 16](https://nextjs.org/) — App Router
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- Fonts: Space Grotesk (headlines) + Inter (body)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All text, links, and copy live in one file:

```
src/content/site.ts
```

Change your name, bio, social links, "Now" bullets, etc. there — no need to touch any component files.

To add a resume, drop a `resume.pdf` into the `public/` folder.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # root layout, fonts, metadata
│   ├── page.tsx          # home page
│   └── globals.css       # design tokens + Tailwind config
├── components/
│   ├── Nav.tsx           # sticky top nav
│   ├── Footer.tsx        # footer
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Now.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
└── content/
    └── site.ts           # ← edit your content here
```

## Deploying

The easiest option is [Vercel](https://vercel.com/) — connect this repo and it deploys automatically on every push to `main`.
