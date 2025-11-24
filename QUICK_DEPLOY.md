# 🎯 Quick Deploy Reference

## Your Chat App Status

✅ **Frontend Deployed on Vercel**

- URL: https://chatrix-g0mhply5c-atultiwari997721s-projects.vercel.app
- Status: Ready

⏳ **Backend Needs Deployment to Render.com**

- Follow steps below

---

## 5-Minute Deploy Steps

### 1️⃣ Go to Render

Visit: https://render.com

### 2️⃣ Create New Web Service

Authorize GitHub → Select **chatrix**

### 3️⃣ Configure Root Directory

Set to: `server`

### 4️⃣ Deploy

Click "Create Web Service" → Wait for ✅ Live

### 5️⃣ Copy Domain

From Render Dashboard → Copy domain URL (e.g., `https://chatrix-backend-xxxxx.onrender.com`)

### 6️⃣ Update Vercel

Go to: https://vercel.com/dashboard/chatrix

- Settings → Environment Variables
- Add: `REACT_APP_ENDPOINT` = Your Render domain
- Save (auto-redeploy)

### 7️⃣ Test

Open: https://chatrix-g0mhply5c-atultiwari997721s-projects.vercel.app
Join a room and start chatting! 🎉

---

## 📱 Test Instructions

1. Open the main URL in Browser 1
2. Join: Name="Alice", Room="Test"
3. Open same URL in Browser 2
4. Join: Name="Bob", Room="Test"
5. Send message from Browser 1 → Should appear in Browser 2 ✅

---

## 🚨 If Something Goes Wrong

| Issue                          | Fix                                         |
| ------------------------------ | ------------------------------------------- |
| Still says "Connection failed" | Render not deployed or domain wrong         |
| "WebSocket error"              | Normal - falls back to polling, should work |
| Render says "Build Error"      | Click "Manual Deploy" again, wait 3 minutes |
| Vercel says build error        | Check Render domain is correct in env var   |

---

## ❓ Need Help?

- Check: https://render.com/docs
- Or re-read: DEPLOYMENT_COMPLETE.md in this folder

**You're almost there!** 🚀
