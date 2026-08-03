# Personal Website

Portfolio site for Louis Amoah-Nuamah — Next.js App Router with a dual **web** and **CLI** experience.

Live: [https://louis-amoah.vercel.app/](https://louis-amoah.vercel.app/)

## Stack

- Next.js 15 (App Router)
- HeroUI + Tailwind CSS
- TypeScript
- Framer Motion / next-themes

## Features

- Single-page web layout (landing, projects, about, contact)
- Terminal mode with commands like `help`, `about`, `skills`, `projects`, `contact`, `gui`
- Content driven by [`data/portfolio.json`](data/portfolio.json)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Deploy

Connected to Vercel on the `master` branch. Preview deployments run on feature branches.

The previous Gatsby site is preserved on branch `archive/gatsby-site` (tag `gatsby-final`).
