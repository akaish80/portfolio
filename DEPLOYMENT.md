# Deploying Portfolio with Chatbot to GitHub Pages + Render

This guide explains how to deploy your portfolio with the AI chatbot working in production.

## Architecture Overview

- **Frontend**: GitHub Pages (https://akaish80.github.io/portfolio/) - Free static hosting
- **Backend**: Render.com (https://your-app.onrender.com) - Free Node.js hosting
- **Security**: API keys stored on backend server only

## Step-by-Step Deployment

### Step 1: Deploy Backend to Render.com

1. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub (free tier available)

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository: `akaish80/portfolio`
   - Configure service:
     - **Name**: `portfolio-chat-backend` (or any name)
     - **Region**: Choose closest to your users
     - **Branch**: `main`
     - **Root Directory**: Leave blank (or `.`)
     - **Runtime**: `Node`
     - **Build Command**: `npm install && npm run build:server`
     - **Start Command**: `npm run start:server`
     - **Instance Type**: Free

3. **Add Environment Variable**
   - In "Environment" section, add:
     - **Key**: `OPENAI_API_KEY`
     - **Value**: Your OpenAI API key (get from https://platform.openai.com/api-keys)
   - Click "Save"

4. **Deploy**
   - Click "Create Web Service"
   - Wait 3-5 minutes for first deployment
   - Copy your service URL (e.g., `https://portfolio-chat-backend.onrender.com`)

### Step 2: Update Frontend Configuration

1. **Add Environment Variable for Production Build**
   
   Create `.env.production` file in root directory:
   ```env
   VITE_API_ENDPOINT=https://your-render-app.onrender.com/api/chat
   ```
   Replace `your-render-app` with your actual Render service name.

2. **Update GitHub Workflow** (Optional - use environment secrets)
   
   Edit `.github/workflows/deploy.yml`:
   ```yaml
   - name: Build
     run: npm run build
     env:
       VITE_BASE: /portfolio/
       VITE_API_ENDPOINT: ${{ secrets.VITE_API_ENDPOINT }}
   ```

3. **Add Secret to GitHub**
   - Go to your repo: Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `VITE_API_ENDPOINT`
   - Value: `https://your-render-app.onrender.com/api/chat`

### Step 3: Deploy Frontend to GitHub Pages

```bash
# Build with production API endpoint
npm run build

# Push to GitHub (triggers automatic deployment)
git add .
git commit -m "Deploy with Render backend"
git push origin main
```

GitHub Actions will automatically deploy to https://akaish80.github.io/portfolio/

### Step 4: Test Production

1. Visit https://akaish80.github.io/portfolio/
2. Click the chat button (bottom-right corner)
3. Ask a question like "What is Arun's experience?"
4. Verify AI responds with relevant information

## Alternative: Deploy Backend to Railway

If Render doesn't work, try Railway.app (also has free tier):

1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select `akaish80/portfolio`
4. Railway auto-detects Node.js
5. Add environment variable: `OPENAI_API_KEY`
6. Set start command: `npm run start:server`
7. Copy the generated URL and update `.env.production`

## Local Development with Production Backend

Test with production backend before deploying:

```bash
# Terminal 1 - Frontend with production API
VITE_API_ENDPOINT=https://your-render-app.onrender.com/api/chat npm run dev

# Or create .env.local file:
echo "VITE_API_ENDPOINT=https://your-render-app.onrender.com/api/chat" > .env.local
npm run dev
```

## Troubleshooting

### Issue: Chatbot shows "Unable to connect to AI service"

**Solutions:**
1. Check Render service is running (green status)
2. Verify `OPENAI_API_KEY` is set in Render dashboard
3. Test backend directly: `curl https://your-app.onrender.com/api/health`
4. Check browser console for CORS errors
5. Verify `VITE_API_ENDPOINT` points to correct URL

### Issue: CORS errors in browser console

**Solution:**
- Render URL is added to CORS whitelist in `server/index.ts`
- Make sure it matches exactly (https vs http, trailing slash)

### Issue: Render service keeps sleeping (free tier)

**Expected Behavior:**
- Free tier sleeps after 15 minutes of inactivity
- First request takes 30-60 seconds to wake up
- Chatbot shows fallback response while waiting

**Solution:**
- Upgrade to paid tier ($7/month) for always-on service
- Or use Railway.app which has different limits

### Issue: GitHub Actions build fails

**Solution:**
```bash
# Test build locally first
npm run build

# Check for environment variable issues
echo $VITE_API_ENDPOINT

# Rebuild and push
git add .
git commit -m "Fix build"
git push
```

## Cost Breakdown

- **GitHub Pages**: Free
- **Render Free Tier**: Free (with sleep on inactivity)
- **OpenAI API**: Pay per use (~$0.002 per chat message)

**Monthly Estimate**: $0-5 for light usage

## Monitoring

### Check Backend Health
```bash
curl https://your-render-app.onrender.com/api/health
```

Should return:
```json
{
  "status": "ok",
  "timestamp": "2025-11-11T12:00:00.000Z"
}
```

### Check Render Logs
- Go to Render dashboard
- Click your service → "Logs" tab
- Monitor for errors or API issues

### Check GitHub Pages Deployment
- Go to repo → Actions tab
- Check workflow status (should be green ✓)

## Security Checklist

✅ API key stored on backend only (Render environment variable)  
✅ CORS configured to only allow your domain  
✅ Rate limiting prevents abuse (2s between requests)  
✅ .env files in .gitignore (never commit API keys)  
✅ GitHub Actions uses secrets for sensitive data

## Next Steps

After successful deployment:

1. **Monitor Usage**: Check OpenAI dashboard for API usage
2. **Add Analytics**: Consider adding Google Analytics to track visitors
3. **Custom Domain** (Optional): 
   - Buy domain from Namecheap/GoDaddy
   - Point to GitHub Pages: `akaish80.github.io`
   - Update CORS in backend
4. **Enhance Chatbot**: Add conversation history, better prompts
5. **Add Features**: File upload, voice input, multi-language support

## Support

If you encounter issues:
1. Check Render logs for backend errors
2. Check browser console for frontend errors  
3. Test API endpoint directly with curl/Postman
4. Verify all environment variables are set correctly

---

**Deployment completed!** 🚀 Your portfolio is now live with a working AI chatbot.
