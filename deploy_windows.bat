
    @echo off
    :: === Arunkumar Dharmarajan Portfolio Deployment Script (Windows) ===

    :: --- CONFIG ---
    set REPO_NAME=portfolio
    set GITHUB_USER=akaish80
    set SITE_URL=https://%GITHUB_USER%.github.io/%REPO_NAME%

    echo 🔧 Initializing Git repository...
    if not exist .git (
      git init
      git add .
      git commit -m "Initial commit: Arunkumar Dharmarajan Portfolio"
    ) else (
      echo "Git already initialized."
    )

    echo 🌐 Creating GitHub repo (requires GitHub CLI login)...
    :: gh repo create %GITHUB_USER%/%REPO_NAME% --public --source=. --remote=origin --push

    echo 📦 Installing dependencies...
    npm install

    echo 🚀 Building and deploying to GitHub Pages...
    npm run deploy

    echo ✅ Deployment complete!
    echo 🌍 Your portfolio should be live at: %SITE_URL%

    pause
