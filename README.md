# Sari S – Portfolio (React + TypeScript + Tailwind + Vite)

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in dist/

## Replace the profile photo
Copy your photo to `public/profile-photo.jpg` (portrait, about 800x1000). It is cropped automatically; the frame stays empty until the file exists.

## Edit content
All text for skills, projects and experience lives in `src/data/content.ts`.

## Deploy
- Vercel / Netlify: import the repo; build command `npm run build`, output directory `dist`.
- GitHub Pages: set `base: '/<repo-name>/'` in vite.config.ts, build, and publish `dist/`.

## Publish on GitHub Pages
Push to the `main` branch, then in the repo go to Settings > Pages and set Source to "GitHub Actions". The included workflow builds and deploys the site on every push.
