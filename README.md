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
npm run build
npm audit --omit=dev --audit-level=moderate
```

TypeScript linting and formatting tooling should be added after npm registry access is available again. The current verification path keeps the site deployable with the existing lockfile.

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

Deploy the site on Vercel as a static Vite project.

Recommended Vercel settings:

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm ci
```

Recommended DNS records:

```txt
A      osorioabel.dev   76.76.21.21
CNAME  www              cname.vercel-dns.com
```
