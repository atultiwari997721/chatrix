# 🚀 ONE-CLICK RENDER DEPLOYMENT

Your GitHub repo is ready: https://github.com/atultiwari997721/chatrix

Follow these simple steps to deploy your backend in 5 minutes:

## STEP 1: Go to Render

**Open this link in your browser:**

```
https://render.com/new
```

---

## STEP 2: Create Web Service

1. Click the blue **"Web Service"** button
2. Click **"Connect Repository"**

---

## STEP 3: Select Your Repository

1. You'll see a list of your GitHub repos
2. Find and click **"chatrix"**
3. Click **"Connect"**

---

## STEP 4: Configure Your Service

Fill in these exact values:

| Field              | Value             |
| ------------------ | ----------------- |
| **Name**           | `chatrix-backend` |
| **Runtime**        | `Node`            |
| **Root Directory** | `server`          |
| **Build Command**  | `npm install`     |
| **Start Command**  | `npm start`       |
| **Plan**           | `Free`            |

**Leave everything else blank/default**

---

## STEP 5: Deploy

1. Click the blue **"Create Web Service"** button
2. **Wait 3-5 minutes** (you'll see it building)
3. When it shows **"Live"** in green ✅, you're done!

---

## STEP 6: Get Your Backend URL

Once it says "Live":

1. Look at the top of the page
2. You'll see a URL like: `https://chatrix-backend-xxxxx.onrender.com`
3. **Copy this URL** (you'll need it for Vercel)

---

## STEP 7: Update Vercel (Final Step)

1. Go to: https://vercel.com/dashboard/chatrix
2. Click: **Settings** → **Environment Variables**
3. Click: **Add New**
4. Fill in:
   - **Name:** `REACT_APP_ENDPOINT`
   - **Value:** Paste your Render URL (e.g., `https://chatrix-backend-xxxxx.onrender.com`)
5. Click: **Save**
6. Wait 30 seconds for auto-redeploy

---

## STEP 8: Test Your Chat! 🎉

Open: **https://chatrix-hzxso6mkk-atultiwari997721s-projects.vercel.app**

**Browser Tab 1:**

- Name: `Alice`
- Room: `test`
- Click **Join**

**Browser Tab 2 (or Incognito):**

- Name: `Bob`
- Room: `test`
- Click **Join**

**Alice types:** "Hello Bob!"
**Bob sees it instantly** = ✅ SUCCESS!

---

## 🎯 Summary

- ✅ GitHub repo: https://github.com/atultiwari997721/chatrix
- ⏳ Render deployment: Follow steps 1-6 above
- ⏳ Vercel env var: Follow step 7
- ⏳ Test chat: Follow step 8

**Everything is ready!** Just follow the steps above and your chat will be LIVE worldwide! 🌍

---

**Need help?** The steps are visual and simple - just click and fill in the values shown above.
