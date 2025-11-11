# 🚀 Deployment Checklist

Use this checklist to track your deployment progress.

## Backend Deployment (Render.com)

- [ ] Create Render account (https://render.com)
- [ ] Connect GitHub repository
- [ ] Create new Web Service with these settings:
  - [ ] Name: `portfolio-chat-backend`
  - [ ] Branch: `main`
  - [ ] Build Command: `npm install && npm run build:server`
  - [ ] Start Command: `npm run start:server`
- [ ] Add environment variable:
  - [ ] Key: `OPENAI_API_KEY`
  - [ ] Value: (Your OpenAI API key)
- [ ] Wait for deployment (3-5 min)
- [ ] Service shows green "Live" status
- [ ] Copy service URL: ____________________________________

## Frontend Configuration

- [ ] Create `.env.production` file in project root
- [ ] Add line: `VITE_API_ENDPOINT=https://your-render-url.onrender.com/api/chat`
- [ ] Replace `your-render-url` with actual Render URL
- [ ] Save file

## Optional: GitHub Secrets (for auto-deploy)

- [ ] Go to GitHub repo Settings → Secrets and variables → Actions
- [ ] Add new secret:
  - [ ] Name: `VITE_API_ENDPOINT`
  - [ ] Value: `https://your-render-url.onrender.com/api/chat`

## Deploy Frontend

- [ ] Commit changes: `git add .`
- [ ] Commit: `git commit -m "Configure production backend"`
- [ ] Push: `git push origin main`
- [ ] Wait for GitHub Actions (2-3 min)
- [ ] Check Actions tab shows green checkmark

## Testing

- [ ] Visit: https://akaish80.github.io/portfolio/
- [ ] Page loads successfully
- [ ] Click chat button (bottom-right)
- [ ] Type message: "What is Arun's experience?"
- [ ] Receive AI response (may take 30-60s on first request)
- [ ] Try another question to test speed

## Verification

- [ ] Backend health check works:
  ```bash
  curl https://your-render-url.onrender.com/api/health
  ```
  Should return: `{"status":"ok","timestamp":"..."}`

- [ ] No errors in browser console (F12)
- [ ] No CORS errors
- [ ] Chat responses are relevant and accurate

## Monitoring

- [ ] Check Render logs for errors
- [ ] Monitor OpenAI usage: https://platform.openai.com/usage
- [ ] Test chatbot from different devices/browsers

## Troubleshooting

If chatbot doesn't work:

- [ ] Render service is running (green)
- [ ] `OPENAI_API_KEY` is set in Render
- [ ] `.env.production` has correct URL
- [ ] GitHub Actions build succeeded
- [ ] Browser console shows no errors
- [ ] Backend health endpoint responds

## Success! 🎉

- [ ] Portfolio deployed: https://akaish80.github.io/portfolio/
- [ ] Backend running on Render
- [ ] Chatbot working with AI responses
- [ ] No errors in logs

---

**Estimated Time**: 10-15 minutes  
**Cost**: $0 (free tiers)

Need help? See:
- [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) - Step-by-step guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed instructions
- [SERVER_SETUP.md](./SERVER_SETUP.md) - Backend info
