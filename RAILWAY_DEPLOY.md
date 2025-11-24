# Deploy to Render.com

You can deploy this chat application backend to Render.com for free. Follow these steps:

## 🚀 Deploy Backend to Render

### 1. Create a GitHub Account (if needed)

- Go to https://github.com/signup
- Create an account and verify your email

### 2. Push Code to GitHub

```bash
cd K:\chatrix
git remote add origin https://github.com/YOUR_USERNAME/chatrix.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username

### 3. Deploy to Render

- Go to https://render.com
- Click "New +" → "Web Service"
- Connect your GitHub account and select the **chatrix** repository
- Configure the service:
  - **Name:** chatrix-backend
  - **Root Directory:** `server`
  - **Build Command:** `npm install`
  - **Start Command:** `npm start`
  - **Environment:** Node 18+
  - **Plan:** Free
- Click "Create Web Service"
- Wait for the status to show **Live** (green)

### 4. Get Your Render Backend URL

- In the Render dashboard, click your new service (chatrix-backend)
- At the top, copy the domain (e.g., `https://chatrix-backend-xxxxx.onrender.com`)

### 5. Update Vercel with Backend URL

- Go to https://vercel.com/dashboard/chatrix
- Settings → Environment Variables
- Add:
  - **Name:** `REACT_APP_ENDPOINT`
  - **Value:** Paste your Render domain (e.g., `https://chatrix-backend-xxxxx.onrender.com`)
- Save (Vercel will auto-redeploy)

### 6. Test

- Open your frontend URL
- Join a room
- Messages should now work! ✅

---

## Troubleshooting

- **Render shows error:** Check that root directory is set to `server`
- **Still can't connect:** Verify `REACT_APP_ENDPOINT` in Vercel matches your Render domain exactly
- **Build fails:** Check that `server/package.json` has all dependencies

---

## Next Steps

After Render deploys successfully:

1. Get your backend URL from Render
2. Add it to Vercel as environment variable
3. Vercel auto-redeploys
4. Chat should work! 🎉
