# Portfolio Chatbot - Node.js Server Setup

This portfolio includes an AI-powered chatbot using OpenAI GPT API with a secure Node.js Express backend.

## Architecture

- **Frontend**: React + TypeScript + Vite (runs on port 5173)
- **Backend**: Node.js + Express + TypeScript (runs on port 3001)
- **Security**: API key stored server-side, never exposed to browser

## Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=3001
```

### 3. Run Development Servers

**Terminal 1 - Start Backend Server:**
```bash
npm run dev:server
```
Server will run on http://localhost:3001

**Terminal 2 - Start Frontend:**
```bash
npm run dev
```
Frontend will run on http://localhost:5173/portfolio/

### 4. Test the Chatbot
1. Open http://localhost:5173/portfolio/
2. Click the chat button in the bottom-right corner
3. Ask questions about Arun's experience, skills, projects, etc.

## Production Build

### Build Frontend
```bash
npm run build
```
Output: `dist/` directory

### Build Backend (Optional)
```bash
npm run build:server
```
Output: `dist/server/` directory

### Run Production Server
```bash
npm run start:server
```

## Deployment Options

### Option 1: Separate Hosting (Recommended)
- **Frontend**: Deploy `dist/` to GitHub Pages, Vercel, or Netlify
- **Backend**: Deploy to Render, Railway, Heroku, or AWS
- **Update**: Change `API_ENDPOINT` in `src/services/openaiService.ts` to your backend URL

### Option 2: Same Server
- Serve static files from Express:
```typescript
app.use(express.static('dist'));
```

### Option 3: Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY dist ./dist
COPY server ./server
ENV NODE_ENV=production
EXPOSE 3001
CMD ["npm", "run", "start:server"]
```

## API Endpoints

### POST /api/chat
Send messages to the AI chatbot
```json
{
  "message": "What is Arun's experience?"
}
```

### GET /api/health
Check server status
```json
{
  "status": "ok",
  "timestamp": "2025-11-11T12:00:00.000Z"
}
```

## Security Features

✅ API key stored server-side only  
✅ CORS enabled for cross-origin requests  
✅ Rate limiting on frontend (2s between requests)  
✅ Fallback responses when API unavailable  
✅ Error handling with graceful degradation

## Troubleshooting

**Issue**: "OpenAI API key not configured"  
**Solution**: Ensure `.env` file exists with valid `OPENAI_API_KEY`

**Issue**: CORS errors  
**Solution**: Backend includes CORS headers, check frontend `API_ENDPOINT` URL

**Issue**: 429 Rate Limit errors  
**Solution**: Frontend has 2-second rate limiting built-in

## Scripts Reference

- `npm run dev` - Start Vite development server (frontend only)
- `npm run dev:server` - Start Express server with hot reload
- `npm run build` - Build frontend for production
- `npm run build:server` - Compile TypeScript server
- `npm run start:server` - Run production server
- `npm run preview` - Preview production build locally
