# Hongpn Portfolio

Modern personal portfolio website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Features

- App Router project structure
- TypeScript and reusable React components
- Tailwind CSS responsive styling
- Dark and light mode toggle
- SEO metadata with Next.js Metadata API
- Dynamic sitemap and robots.txt
- Portfolio content stored in `data/portfolio.ts`
- Home page hero and dedicated projects page
- Ready to deploy on Vercel

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Customize

Update personal information, links, and projects in:

```text
data/portfolio.ts
```

Update the canonical site URL in `siteConfig.url` before deploying so metadata, `sitemap.xml`, and `robots.txt` point to your real domain.

## Deploy on Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Deploy.
