# Deploy Backend to Railway.app

Railway.app offers a free tier for hosting Node.js applications with WebSocket support.

## Quick Deploy Steps

### Option 1: Deploy via Railway CLI (Fastest)

1. **Install Railway CLI:**

   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway:**

   ```bash
   railway login
   ```

3. **Deploy Backend:**

   ```bash
   cd K:\chatrix\server
   railway init
   railway up
   ```

4. **Get your backend URL:**
   - Go to https://railway.app/dashboard
   - Find your deployed service
   - Copy the domain (e.g., `https://yourapp-production.up.railway.app`)

### Option 2: Deploy via Railway Dashboard

1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub"
3. Select your chatrix repository
4. Configure:

   - **Root Directory:** `server`
   - **Start Command:** `npm start`
   - **Environment:** Add `PORT=3000`

5. Get the domain from the deployment

### Option 3: Use Render.com (Alternative)

1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect GitHub
4. Configure:
   - **Name:** chatrix-server
   - **Root Directory:** server
   - **Build Command:** npm install
   - **Start Command:** npm start
   - **Plan:** Free tier

## Update Frontend with Backend URL

Once you have the backend deployed:

1. Go to Vercel Dashboard
2. Select **chatrix** project
3. Go to **Settings** → **Environment Variables**
4. Add:

   - **Name:** `REACT_APP_ENDPOINT`
   - **Value:** `https://your-backend-domain.up.railway.app` (or your Render domain)
   - **Add for:** Production, Preview, Development

5. Redeploy by pushing a new commit:
   ```bash
   git add .
   git commit -m "Update backend endpoint"
   git push
   ```

## Testing

After updating the backend URL:

1. Open https://chatrix-delta.vercel.app
2. Join a room
3. Open another tab and join the same room
4. Messages should now sync in real-time!

## Free Tier Limits

- **Railway:** 500 hours/month (free)
- **Render:** 750 hours/month (free)
- Both support WebSocket/Socket.IO connections

Choose whichever you prefer!
