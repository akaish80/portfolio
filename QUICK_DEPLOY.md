# Quick Deploy Guide - Portfolio with AI Chatbot

## Current Status
✅ Frontend: Deployed to GitHub Pages (https://akaish80.github.io/portfolio/)  
⏳ Backend: Needs deployment to Render.com  
⏳ Connection: Need to configure production API endpoint

## Deploy in 3 Steps (10 minutes)

### Step 1: Deploy Backend to Render.com (5 min)

1. **Go to Render**: https://render.com/
   - Sign up/login with GitHub

2. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect repository: `akaish80/portfolio`
   - Name: `portfolio-chat-backend`
   - Branch: `main`
   - Build Command: `npm install && npm run build:server`
   - Start Command: `npm run start:server`
   - Click "Create Web Service"

3. **Add Environment Variable**:
   - Go to "Environment" tab
   - Add variable:
     - Key: `OPENAI_API_KEY`
     - Value: [Your OpenAI API key from https://platform.openai.com/api-keys]
   - Click "Save Changes"

4. **Copy Your Service URL**:
   - Wait for deployment to complete (green checkmark)
   - Copy URL (e.g., `https://portfolio-chat-backend-abc123.onrender.com`)

### Step 2: Configure Frontend (2 min)

1. **Create `.env.production` file** in your project root:
   ```env
   VITE_API_ENDPOINT=https://your-render-url.onrender.com/api/chat
   ```
   Replace `your-render-url` with the actual URL from Step 1

2. **Optional: Add to GitHub Secrets** (for automatic builds):
   - Go to GitHub repo: Settings → Secrets and variables → Actions
   - New repository secret:
     - Name: `VITE_API_ENDPOINT`
     - Value: `https://your-render-url.onrender.com/api/chat`

### Step 3: Deploy to GitHub Pages (3 min)

```bash
# Commit changes
git add .
git commit -m "Configure production backend"
git push origin main
```

GitHub Actions will automatically build and deploy to https://akaish80.github.io/portfolio/

Wait 2-3 minutes, then test your chatbot!

## Test Your Deployment

1. Visit: https://akaish80.github.io/portfolio/
2. Click chat button (bottom-right corner)
3. Ask: "What is Arun's experience?"
4. You should get AI-powered response! 🎉

## Troubleshooting

**Chatbot says "Unable to connect to AI service"**
- Check Render service is running (green status)
- Verify `.env.production` has correct URL
- Check browser console for errors
- Test backend directly: `curl https://your-url.onrender.com/api/health`

**Build fails on GitHub**
- Check GitHub Actions logs
- Verify `VITE_API_ENDPOINT` is set in secrets
- Try building locally: `npm run build`

**CORS errors**
- Backend CORS is configured for `https://akaish80.github.io`
- Check URL matches exactly in browser console

## What Happens Next

1. **First Request**: Render free tier sleeps after 15 min inactivity
   - First chat message may take 30-60 seconds (cold start)
   - Fallback responses show while waiting

2. **Subsequent Requests**: Fast (< 2 seconds)

3. **Cost**: $0 with free tiers (Render + GitHub Pages)
   - Only pay for OpenAI API usage (~$0.002 per message)

## Alternative: Deploy to Railway

If Render doesn't work:

1. Go to https://railway.app
2. New Project → Deploy from GitHub repo
3. Select `akaish80/portfolio`
4. Add `OPENAI_API_KEY` environment variable
5. Railway auto-configures everything
6. Copy URL and update `.env.production`

## Need Help?

Check full guides:
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete deployment guide
- [SERVER_SETUP.md](./SERVER_SETUP.md) - Backend development guide
- [README.md](./README.md) - Project overview

---

**Ready to deploy?** Start with Step 1 above! 🚀
