# Code Orange Dev School — Website

Asia's Bitcoin Developer School. Headquartered in Singapore.

Live at **[codeorange.dev](https://codeorange.dev)**.

## Stack

A hand-written static HTML site — no build step, no framework, no dependencies.
Vercel serves the files in this repo directly (`vercel.json` sets
`buildCommand: null` and `outputDirectory: "."`).

## Local preview

```bash
# any static file server works, e.g.
python3 -m http.server 3000
# open http://localhost:3000
```

Note: `cleanUrls` is a Vercel feature, so locally you may need to open
`/about.html` rather than `/about`.

## Structure

```
index.html              Homepage
about.html              Story, values, operating model
programs.html           Program index
programs/*.html         Individual program pages
fellowships.html        Fellowship tracks
consulting.html         Consulting
calendar.html           Sessions calendar
community.html          Community & regional reach
impact.html             Impact report
apply.html              Applications
rawbit.html             rawBit cohort
privacy-track.html      Privacy Track
social/                 Social/event graphics + pages
assets/                 Images, video, logos
support.js              Shared page script
vercel.json             Vercel config (static, cleanUrls)
```

## Editing

Edit the HTML directly. The footer, nav and meta tags are duplicated per page,
so a site-wide change (address, nav link, copyright) means updating each file —
search and replace across `*.html`.

## Deploying

Push to `main`. Vercel deploys automatically from this repo.

> **Important:** this repo is the single source of truth for the live site.
> Do not deploy with `vercel deploy` from an untracked local folder — work that
> only exists locally can be overwritten by the next push to `main`.

## Links

- Curriculum, impact report and other repos: https://github.com/code-orange-dev
- Discord: https://discord.gg/ZtvA79paWa
- Contact: hello@codeorange.dev
