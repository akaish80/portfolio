# Arun Portfolio — Vite + React + TypeScript

This repository is a Vite-based React TypeScript conversion of the original static portfolio site with full React Router integration, custom hooks for JavaScript behaviors, and automated GitHub Pages deployment.

## Features

- ⚡ Vite for fast development and optimized builds
- ⚛️ React 18 with TypeScript
- 🤖 AI-Powered Chatbot using OpenAI GPT API
- 🔒 Secure backend with Node.js + Express
- 🎨 SCSS styling with modern CSS features
- 🎣 Custom React hooks replacing vanilla JS behaviors
- 📱 Mobile-responsive navigation
- 🚀 Automated GitHub Pages deployment via Actions
- 🔄 Hash-based routing for GitHub Pages compatibility

## Quick Start

### Development Setup

1. Install dependencies:
```powershell
npm install
```

2. Create `.env` file with your OpenAI API key:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

3. Start backend server (Terminal 1):
```powershell
npm run dev:server
```

4. Start frontend (Terminal 2):
```powershell
npm run dev
```

5. Open http://localhost:5173/portfolio/ and test the chatbot!

### Production Build

Build frontend:
```powershell
npm run build
```

Build backend:
```powershell
npm run build:server
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

## AI Chatbot

This portfolio includes an intelligent chatbot powered by OpenAI GPT that can answer questions about Arun's:
- Professional experience and achievements
- Technical skills and expertise
- Projects and contributions
- Education and background
- Contact information

**Architecture:**
- Frontend: React components with real-time chat UI
- Backend: Node.js + Express server (secure API proxy)
- AI: OpenAI GPT-3.5-turbo with custom resume context

**Security:**
- API keys stored server-side only
- CORS configured for production domain
- Rate limiting to prevent abuse
- Fallback responses when API unavailable

See [SERVER_SETUP.md](./SERVER_SETUP.md) for backend development details.  
See [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment guide.

## Deployment

### Frontend (GitHub Pages)
Automatically deployed via GitHub Actions when you push to `main`.  
Live at: https://akaish80.github.io/portfolio/

### Backend (Render.com / Railway)
Deploy the Node.js server separately:
1. Create account on Render.com or Railway.app
2. Connect GitHub repository
3. Set `OPENAI_API_KEY` environment variable
4. Deploy with `npm run start:server`

**Full deployment guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)

## Project Structure (Updated)

```
portfolio/
├── src/
│   ├── assets/css/          # SCSS files
│   ├── components/          # React components
│   │   ├── ChatButton.tsx   # Chatbot trigger button
│   │   └── ChatOverlay.tsx  # Chat interface
│   ├── data/
│   │   └── resumeData.ts    # Resume data for AI context
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Route pages
│   ├── services/
│   │   └── openaiService.ts # API communication
│   ├── App.tsx              # Main app with routing
│   └── main.tsx             # React entry point
├── server/
│   └── index.ts             # Express backend server
├── public/                  # Static assets
├── .github/workflows/       # GitHub Actions deployment
├── DEPLOYMENT.md            # Production deployment guide
└── SERVER_SETUP.md          # Backend setup instructions
```

## Scripts

- `npm run dev` - Start Vite frontend dev server
- `npm run dev:server` - Start Express backend with hot reload
- `npm run build` - Build frontend for production
- `npm run build:server` - Compile TypeScript backend
- `npm run start:server` - Run production backend server
- `npm run preview` - Preview production frontend build

## License

Template based on [Kelly](https://bootstrapmade.com/kelly-free-bootstrap-cv-resume-html-template/) by BootstrapMade

