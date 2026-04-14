# Code Orange Dev School — Website

Asia's Bitcoin Developer School. Built with Next.js 14, Tailwind CSS, and Nostr integration.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
npm start
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel at vercel.com for automatic deployments.

## One thing to do before launch

In `app/apply/page.tsx`, replace `REPLACE_WITH_YOUR_FORM_ID` with a real Formspree form ID.
Sign up free at https://formspree.io — takes 2 minutes.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** + custom design system
- **Nostr integration** — live feed from npub via WebSocket relay connections
- **Google Fonts** — Permanent Marker, Nunito, JetBrains Mono, Inter
- **Lucide React** icons
- **TypeScript**

## Key Files

| File | Purpose |
|------|---------|
| `lib/constants.ts` | All site data — programs, social links, npub |
| `app/page.tsx` | Homepage |
| `app/programs/` | Programs hub + individual pages |
| `app/community/page.tsx` | Community page with Nostr feed |
| `app/apply/page.tsx` | Application form |
| `app/about/page.tsx` | About page |
| `components/NostrFeed.tsx` | Live Nostr relay connection |
| `public/images/` | Workshop photos (convert more HEIC → JPG and add here) |

## Adding More Photos

Convert HEIC photos to JPG and drop them in `/public/images/`.
Reference them with Next.js Image component: `src="/images/your-photo.jpg"`

## Nostr

The npub is set in `lib/constants.ts`. The NostrFeed component connects to 3 public relays simultaneously and displays the latest posts. Fallback links to njump.me if relays are unreachable.
