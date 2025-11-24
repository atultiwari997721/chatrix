# Deploy to Railway

You can deploy this chat application directly to Railway with the button below, or follow the manual steps.

## 🚀 Quick Deploy to Railway

Click this link to deploy:

```
https://railway.app/new?template=https://github.com/YOUR_USERNAME/chatrix&envs=PORT&PORT=default:3000
```

Or follow these manual steps:

### Manual Deployment Steps

1. **Create GitHub Account** (if you don't have one)

   - Go to https://github.com/signup
   - Create account and verify email

2. **Create New Repository**

   - Go to https://github.com/new
   - Name it: `chatrix`
   - Make it Public (important for Railway)
   - Click "Create repository"

3. **Push Code to GitHub**

   ```bash
   cd K:\chatrix
   git remote add origin https://github.com/YOUR_USERNAME/chatrix.git
   git branch -M main
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` with your actual GitHub username

4. **Deploy to Railway**

   - Go to https://railway.app
   - Sign in with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Select **chatrix** repository
   - Railway will auto-detect settings

5. **Configure Railway**

   - Root Directory: `server`
   - Node Version: 18 or higher (auto-detected)
   - Click "Deploy"
   - Wait for green "Active" status (2-3 minutes)

6. **Get Backend URL**

   - Click your deployment in Railway
   - Go to "Settings" → "Environment"
   - Copy the domain URL

7. **Update Vercel**

   - Go to https://vercel.com/dashboard/chatrix
   - Settings → Environment Variables
   - Add: `REACT_APP_ENDPOINT` = Your Railway domain
   - Save (auto-redeploy)

8. **Test**
   - Open frontend URL
   - Join a room
   - Messages should now work! ✅

---

## Environment Variables for Railway

These are automatically set:

- `PORT`: 3000 (Railway default)
- `NODE_ENV`: production

No additional setup needed!

---

## Troubleshooting

- **Railway shows error**: Check that root directory is set to `server`
- **Still can't connect**: Verify `REACT_APP_ENDPOINT` in Vercel matches Railway domain exactly
- **Build fails**: Check that server/package.json has all dependencies

---

## Next Steps

After Railway deploys successfully:

1. Get your backend URL from Railway
2. Add it to Vercel as environment variable
3. Vercel auto-redeploys
4. Chat should work! 🎉
