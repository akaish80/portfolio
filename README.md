# Arun Portfolio — Vite + React + TypeScript

This repository is a Vite-based React TypeScript conversion of the original static portfolio site with full React Router integration, custom hooks for JavaScript behaviors, and automated GitHub Pages deployment.

## Features

- ⚡ Vite for fast development and optimized builds
- ⚛️ React 18 with TypeScript
- 🎨 Preserves original CSS styling (Bootstrap, AOS, etc.)
- 🎣 Custom React hooks replacing vanilla JS behaviors
- 📱 Mobile-responsive navigation
- 🚀 Automated GitHub Pages deployment via Actions
- 🔄 Hash-based routing for GitHub Pages compatibility

## Quick Start

Install dependencies:
```powershell
npm install
```

Run development server:
```powershell
npm run dev
```

Build for production:
```powershell
npm run build
```

Preview production build:
```powershell
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── assets/css/          # CSS files imported by Vite
│   ├── components/          # React components (Header, Footer, Hero, etc.)
│   ├── hooks/               # Custom hooks (useScrolled, useAOS, useMobileNav, etc.)
│   ├── pages/               # Route pages (Home, About, Resume)
│   ├── App.tsx              # Main app with routing
│   └── main.tsx             # React entry point
├── public/                  # Static assets served by Vite
│   ├── css/                 # Vendor CSS (Bootstrap, AOS, etc.)
│   ├── img/                 # Images
│   └── js/                  # Vendor JS libraries
├── .github/workflows/       # GitHub Actions deployment
└── index.html               # HTML entry point
```

## GitHub Pages Deployment

### Automatic Deployment

The repository includes a GitHub Actions workflow that automatically:
1. Builds the app when you push to `main`
2. Publishes the `dist/` folder to the `gh-pages` branch
3. Deploys to GitHub Pages

### Configuration

The workflow is configured for a project page at:
```
https://<username>.github.io/portfolio/
```

**To customize the repo name:**

1. Update `vite.config.ts` - change the `base` value:
   ```typescript
   base: process.env.VITE_BASE || '/your-repo-name/',
   ```

2. Update `.github/workflows/deploy.yml` - change the `VITE_BASE` env var:
   ```yaml
   env:
     VITE_BASE: /your-repo-name/
   ```

**For a user/organization page** (username.github.io):
- Set `base: '/'` in `vite.config.ts`
- Set `VITE_BASE: /` in the workflow

### GitHub Pages Setup

After pushing to GitHub:
1. Go to repository Settings → Pages
2. Set Source to "Deploy from a branch"
3. Select branch: `gh-pages` and folder: `/ (root)`
4. Save and wait for deployment

## Custom Hooks

The app includes React hooks that replace vanilla JavaScript behaviors:

- **useScrolled** - Adds 'scrolled' class to body on scroll
- **useAOS** - Initializes AOS (Animate On Scroll)
- **usePreloader** - Removes preloader on load
- **useMobileNav** - Manages mobile navigation toggle

## Routing

Uses `HashRouter` for GitHub Pages compatibility:
- Home: `/#/`
- About: `/#/about`
- Resume: `/#/resume`

To use clean URLs with `BrowserRouter`, you'll need server-side rewrite configuration.

## Technologies

- React 18
- TypeScript 5
- Vite 5
- React Router 6
- Bootstrap 5
- AOS (Animate On Scroll)
- GLightbox
- Swiper

## License

Template based on [Kelly](https://bootstrapmade.com/kelly-free-bootstrap-cv-resume-html-template/) by BootstrapMade
# Arun Portfolio — Vite + React + TypeScript

This repository has been adapted so the existing static portfolio site can be built with Vite and deployed to GitHub Pages.

What I added:
- Vite config + React entry files under `src/`
- TypeScript config
- GitHub Actions workflow to build and publish `dist/` to the `gh-pages` branch on every push to `main`

Quick start (local):

1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

GitHub Pages deploy (automatic):

The workflow `.github/workflows/deploy.yml` will build the site and publish the `dist/` directory to the `gh-pages` branch whenever you push to `main`.

Notes and next steps:
- If your repository will be served from a subpath (e.g. `https://<user>.github.io/<repo>/`), the Vite config `base: './'` helps make assets relative. If you prefer an absolute base (e.g. `/my-repo/`), update `vite.config.ts`.
- The app currently re-uses your existing CSS files in `/css/` and images in `/img/`. You can migrate and import them into `src/` if you prefer bundling.
- If your repo's default branch is not `main`, update the workflow trigger.
