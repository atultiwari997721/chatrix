# Deployment Guide for Vercel

## Prerequisites

- GitHub account with the chatrix repository pushed
- Vercel account (https://vercel.com)
- Vercel CLI installed globally: `npm install -g vercel`

## Step 1: Prepare the Project

Make sure all changes are committed to git:

```bash
cd K:\chatrix
git add .
git commit -m "Prepare for Vercel deployment"
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

```bash
npm install -g vercel
vercel --prod
```

Follow the prompts:

- Link existing project or create new one
- Select root directory: `.` (current)
- Build command: Use default
- Output directory: Leave blank (Vercel will auto-detect)

### Option B: Using Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure build settings:
   - Framework: React
   - Root Directory: `.` (monorepo with client and server)
   - Build Command: `cd client && npm run build`
   - Output Directory: `client/build`

## Step 3: Configure Environment Variables

In Vercel Dashboard:

1. Go to Project Settings → Environment Variables
2. Add the following:
   - Name: `REACT_APP_ENDPOINT`
   - Value: `https://chatrix-backend-xxxxx.onrender.com` (your Render backend domain)
   - Add for: Production, Preview, Development

## Step 4: Update Chat Component (if needed)

The client will automatically use the production endpoint when deployed.

## Testing Your Deployment

After deployment completes:

1. Visit your Vercel domain (e.g., `https://chatrix.vercel.app`)
2. Join a chat room
3. Open another browser tab and join the same room
4. Test messaging between tabs

## Troubleshooting

### WebSocket connection fails

- Ensure CORS is properly configured in `server/index.js`
- Check that `REACT_APP_ENDPOINT` is set correctly in environment variables (should be your Render backend domain)
- WebSocket may not work in some environments; polling will be used as fallback

### Build fails

- Check Node.js version compatibility (18.x or higher recommended)
- Verify all dependencies are in package.json
- Check for environment variable issues

### Messages not sending

- Ensure the backend API is responding at health check endpoint (your Render backend URL)
- Check browser console for socket.io errors
- Verify CORS headers are being sent

## Deployment Structure

```
/
├── api/               (Backend serverless functions)
│   └── index.js      (Express app for Vercel)
├── client/           (React frontend)
│   ├── src/
│   ├── public/
│   └── package.json
├── server/           (Local development backend)
│   ├── index.js
│   └── package.json
└── vercel.json       (Vercel configuration)
```

## Local Development with Production Endpoint

To test against production:

1. Create `.env.local` in client folder
2. Add: `REACT_APP_ENDPOINT=https://your-domain.vercel.app/api`
3. Run: `npm start` from client folder

## Scaling Considerations

- Socket.IO on Vercel serverless may have limitations
- For production chat with many concurrent users, consider:
  - Dedicated Socket.IO server on railway.app or render.com
  - Redis adapter for socket.io clustering
  - Separate API and Socket.IO infrastructure
