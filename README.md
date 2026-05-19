# osorioabel.dev

Personal website and blog for Abel Osorio, built as a static Vite + React site.

## Development

Install dependencies:

```sh
npm ci
```

Run the local dev server:

```sh
npm run dev
```

Verify the codebase:

```sh
npm run verify
npm run type-check
```

`npm run build` suppresses Node warning `DEP0205` because the current Tailwind CSS compiler still calls Node's deprecated `module.register()` API on newer Node runtimes. The project pins Node 22 for deployment; remove this suppression after Tailwind replaces that internal call.

## Content

Site profile, services, projects, experience, and social links live in `src/content/site.ts`.

Blog posts live in `src/content/posts`. Each post uses frontmatter:

```md
---
title: My post
date: 2026-05-01
description: Short summary.
tags: ios, product
slug: my-post
published: true
---
```

## Contact Form

The contact form is wired to Formspree through `site.formspreeEndpoint` in `src/content/site.ts`.

## Deployment

The site is configured for dual-deployment:

### Vercel (Primary)

Deploy the site on Vercel as a static Vite project.

Recommended Vercel settings:

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm ci
```

### GitHub Pages (Backup/Mirror)

The site is automatically deployed to GitHub Pages via GitHub Actions when pushing to the `master` branch.

**Note:** In the repository settings under **Pages**, ensure the **Source** is set to **GitHub Actions**.

The Pages deployment workflow runs type checking and the production build before publishing `dist/`. The production dependency audit runs as a separate job so transient npm audit availability does not block publishing a successfully built static site.

Recommended DNS records for Vercel:

```txt
A      osorioabel.dev   76.76.21.21
CNAME  www              cname.vercel-dns.com
```
