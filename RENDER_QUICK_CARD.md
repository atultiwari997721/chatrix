# 🎯 RENDER DEPLOYMENT - QUICK REFERENCE CARD

Print this or keep it open while deploying!

---

## 📋 YOUR DETAILS

```
GitHub Username: atultiwari997721
Repository: chatrix
Backend Folder: server
```

---

## 🚀 THE 7 STEPS

### STEP 1️⃣ - Go to Render
```
https://render.com/new
```

### STEP 2️⃣ - Click "Web Service"
Look for the blue button labeled "Web Service"

### STEP 3️⃣ - Click "Connect Repository"
This connects to your GitHub repos

### STEP 4️⃣ - Select "chatrix" Repo
Click on your chatrix repo name

### STEP 5️⃣ - Fill in These 4 Fields

| Field | Value |
|-------|-------|
| **Name** | `chatrix-backend` |
| **Root Directory** | `server` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Plan** | `Free` |

### STEP 6️⃣ - Click "Create Web Service"
Blue button at the bottom

### STEP 7️⃣ - Wait for "Live" Status
Takes 3-5 minutes. Watch the logs.

---

## 🔗 COPY YOUR DOMAIN

Once "Live", you'll see:
```
https://chatrix-backend-XXXXX.onrender.com
```

**Copy this URL** (you'll need it next)

---

## ✅ QUICK VERIFICATION

After copying domain, test it:
```
https://your-domain.onrender.com/health
```

Should return: `{"status":"ok"}`

---

## 🔄 NEXT STEPS AFTER THIS

1. Go to: https://vercel.com/dashboard/chatrix
2. Settings → Environment Variables
3. Add `REACT_APP_ENDPOINT` = (your Render domain)
4. Save
5. Done! 🎉

---

## 🚨 COMMON ISSUES

| Problem | Fix |
|---------|-----|
| Deployment failed | Check Root Directory = `server` |
| Can't find repo | Sign in with GitHub first |
| "Live" not appearing | Wait 3-5 min, refresh page |
| Chat not connecting | Check REACT_APP_ENDPOINT in Vercel |

---

## 📞 NEED HELP?

See full guide: **RENDER_DETAILED_GUIDE.md**

Quick reference: **DEPLOY_NOW.md**

---

**You can do this! It's just 7 clicks and waiting.** ⏳
