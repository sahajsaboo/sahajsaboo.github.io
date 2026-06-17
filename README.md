# Sahaj Saboo Portfolio

A minimal, typography-focused personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Folder Structure

```text
.
|-- app
|   |-- about
|   |   `-- page.tsx
|   |-- contact
|   |   `-- page.tsx
|   |-- projects
|   |   `-- page.tsx
|   |-- globals.css
|   |-- layout.tsx
|   |-- not-found.tsx
|   |-- page.tsx
|   `-- template.tsx
|-- components
|   |-- page-transition.tsx
|   |-- placeholder-page.tsx
|   |-- site-nav.tsx
|   `-- social-links.tsx
|-- lib
|   |-- about-content.ts
|   `-- site.ts
|-- eslint.config.mjs
|-- next.config.ts
|-- package.json
|-- postcss.config.mjs
|-- tsconfig.json
`-- README.md
```

## Edit Your Content

- Update social URLs in `lib/site.ts`.
- Update About copy in `lib/about-content.ts`.
- Change site fonts in `lib/fonts.ts`.
- Tune global type sizes in `app/globals.css`.
- Update SEO URLs in `app/layout.tsx` before deployment.

## Installation

Use Node.js 20.11 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Vercel Deployment

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New Project**.
3. Import the repository.
4. Keep the default framework preset as **Next.js**.
5. Set the build command to `npm run build`.
6. Set the output settings to the Vercel defaults.
7. Deploy.

After deployment, replace `https://example.com` in `app/layout.tsx` with your production domain.
