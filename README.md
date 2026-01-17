# CoreLine Automations — Portfolio

Premium, data-driven portfolio for **CoreLine Automations** (Okwor Chibuike).

## Run locally

```bash
npm install
npm run dev
```

## Edit projects

All projects live in:

- `data/projects.ts`

Add a new object to the `projects` array (ensure the `slug` is unique).

## Deploy

Designed for Vercel:

- Push to GitHub
- Import repo on Vercel
- Deploy

Update your production domain in:

- `app/layout.tsx` (metadataBase)
- `app/sitemap.ts` (baseUrl)

