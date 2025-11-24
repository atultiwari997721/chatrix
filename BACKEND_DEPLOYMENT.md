# Deploy Backend to Render.com

Render.com offers a free tier for hosting Node.js applications with WebSocket support.

## Quick Deploy Steps

### 1. Push Code to GitHub

```bash
cd K:\chatrix
git remote add origin https://github.com/YOUR_USERNAME/chatrix.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username

### 2. Deploy Backend to Render

1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub account and select the **chatrix** repository
4. Configure:
   - **Name:** chatrix-backend
   - **Root Directory:** server
   - **Build Command:** npm install
   - **Start Command:** npm start
   - **Plan:** Free tier
5. Click "Create Web Service"
6. Wait for the status to show **Live** (green)

### 3. Get Your Render Backend URL

1. In the Render dashboard, click your new service (chatrix-backend)
2. At the top, copy the domain (e.g., `https://chatrix-backend-xxxxx.onrender.com`)

### 4. Update Frontend with Backend URL

1. Go to Vercel Dashboard
2. Select **chatrix** project
3. Go to **Settings** → **Environment Variables**
4. Add:
   - **Name:** `REACT_APP_ENDPOINT`
   - **Value:** `https://chatrix-backend-xxxxx.onrender.com`
   - **Add for:** Production, Preview, Development
5. Save and Vercel will auto-redeploy

## Testing

After updating the backend URL:

1. Open your Vercel frontend URL
2. Join a room
3. Open another tab and join the same room
4. Messages should now sync in real-time!

## Free Tier Limits

- **Render:** 750 hours/month (free)
- Supports WebSocket/Socket.IO connections

---

**You are now fully Render-ready!**
