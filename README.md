# E-CITIZEN Kenya Services Hub

An independent service-discovery homepage inspired by the visual structure of Kenya's eCitizen portal.

## Important

This project does **not** implement eCitizen authentication or government-service processing. Interactive service actions redirect to the official eCitizen platform:

https://accounts.ecitizen.go.ke/en

Replace the placeholder brand mark with your own legally approved logo/branding before deployment.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Main files

- `app/page.js` — homepage and redirect behavior
- `app/globals.css` — responsive visual styling
- `app/layout.js` — metadata and global layout
