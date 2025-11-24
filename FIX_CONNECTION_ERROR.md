# 🔧 CONNECTION ERROR FIX GUIDE

You're seeing: **"Connection failed: websocket error"**

This means the frontend can't reach the backend server. Let's fix it! 🛠️

---

## 🚨 QUICK DIAGNOSIS

### Step 1: Check Browser Console

1. Open your chat page: https://chatrix-hzxso6mkk-atultiwari997721s-projects.vercel.app
2. Press `F12` to open Developer Tools
3. Click **Console** tab
4. Look for messages like:
   ```
   📍 Connecting to endpoint: https://your-backend-domain.onrender.com
   🌐 Current hostname: chatrix-hzxso6mkk-atultiwari997721s-projects.vercel.app
   ```

**The endpoint should be your Render domain, not localhost!**

---

## ✅ SOLUTION CHECKLIST

### Issue 1: REACT_APP_ENDPOINT Not Set

**Check if the environment variable is set in Vercel:**

1. Go to: https://vercel.com/dashboard/chatrix
2. Settings → Environment Variables
3. Look for: `REACT_APP_ENDPOINT`

**If it's missing or wrong:**

1. Click **Add New**
2. Name: `REACT_APP_ENDPOINT`
3. Value: Your Render backend domain (e.g., `https://chatrix-backend-abc123.onrender.com`)
4. Click **Save**
5. **Wait 2-3 minutes** for redeploy
6. Refresh chat page

---

### Issue 2: Render Backend Not Running

**Check if Render deployment is actually running:**

1. Go to your Render dashboard: https://render.com/dashboard
2. Click on **"chatrix-backend"** service
3. Check the status:
   - ✅ **Live** = Running correctly
   - ❌ **Building** = Still deploying, wait 3-5 min
   - ❌ **Suspended** = Needs to be restarted
   - ❌ **Failed** = Deployment error, check logs

**If it says "Failed":**

1. Look at the **Logs** section
2. Read the error message
3. Common fixes:
   - Root Directory should be `server` (not empty)
   - Build Command should be `npm install`
   - Start Command should be `npm start`

---

### Issue 3: Wrong Backend Domain in Environment Variable

**Your Render domain should look like one of these:**

```
https://chatrix-backend-abc123.onrender.com
https://chatrix-backend-xyz789.onrender.com
https://my-custom-name.onrender.com
```

**NOT like this:**

```
https://render.com/new
http://localhost:3005
undefined
```

**To find your correct domain:**

1. Go to: https://render.com/dashboard
2. Click on your **chatrix-backend** service
3. At the top, you'll see the domain URL
4. Copy it exactly
5. Update Vercel environment variable

---

## 🧪 STEP-BY-STEP FIX

### Step 1: Get Your Render Domain

1. Open: https://render.com/dashboard
2. Click: **chatrix-backend**
3. Look at the top of the page
4. Copy the domain URL (should start with `https://`)

**Example:**

```
https://chatrix-backend-a1b2c3d4.onrender.com
```

### Step 2: Update Vercel Environment Variable

1. Open: https://vercel.com/dashboard/chatrix
2. Click: **Settings**
3. Click: **Environment Variables**
4. If `REACT_APP_ENDPOINT` exists:
   - Delete it
   - Add a new one
5. Fill in:
   - **Name:** `REACT_APP_ENDPOINT`
   - **Value:** Your Render domain (paste exactly)
   - **Environment:** Production
6. Click: **Save**
7. **Wait 2-3 minutes** for redeploy

### Step 3: Verify Render is Running

1. Test your backend directly:
   - Copy your Render domain
   - Add `/health` to the end
   - Open in browser: `https://your-domain.onrender.com/health`
   - You should see: `{"status":"ok"}` or similar

**If you see that = Backend is WORKING! ✅**

### Step 4: Test Chat Again

1. Refresh your chat page (hard refresh: Ctrl+Shift+R)
2. Open DevTools Console (F12)
3. Look for the endpoint being used
4. It should show your Render domain
5. Try joining a room and sending a message

---

## 🔍 DEBUGGING TIPS

### If it still doesn't work:

**Check these in order:**

1. **Render status is "Live"?**

   - Go to: https://render.com/dashboard
   - Check if service shows "Live" in green

2. **Environment variable is correct?**

   - Go to: https://vercel.com/dashboard/chatrix
   - Check REACT_APP_ENDPOINT value
   - No typos?
   - No extra spaces?

3. **Vercel redeployed?**

   - Go to: https://vercel.com/dashboard/chatrix
   - Click **Deployments**
   - Check that latest deployment shows ✅ **Ready**

4. **Browser cache issue?**

   - Hard refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
   - Or open in Incognito/Private mode

5. **Check browser console:**
   - Open DevTools: **F12**
   - Go to **Console** tab
   - Look for these messages:
     ```
     📍 Connecting to endpoint: [should be your Render domain]
     ✓ Connected to server [means backend is reachable]
     Connection failed: [means backend rejected the connection]
     ```

---

## 📱 IF STILL BROKEN

**Try this diagnostic:**

1. Open: https://vercel.com/dashboard/chatrix
2. Go to: **Settings** → **Environment Variables**
3. **Delete** `REACT_APP_ENDPOINT`
4. **Add new:**
   - Name: `REACT_APP_BACKEND_URL`
   - Value: Your Render domain
5. **Save**
6. Update Chat.js to use `REACT_APP_BACKEND_URL` instead

OR

**Re-deploy Render service:**

1. Go to: https://render.com/dashboard
2. Click **chatrix-backend**
3. Click **Manual Deploy** button
4. Select **Latest Commit**
5. Click **Deploy**
6. Wait for "Live" status

---

## ✨ SHOULD NOW WORK!

Once you see:

- ✅ Render shows "Live"
- ✅ Environment variable set correctly
- ✅ Vercel redeployed

**Your chat should connect!** 🎉

If messages still don't sync, check:

- Both users are in the SAME room
- No error messages in console
- Backend is receiving messages (check Render logs)

---

## 🆘 LAST RESORT

If nothing works:

1. **Restart Render service:**

   - Go to: https://render.com/dashboard
   - Click **chatrix-backend**
   - Click **Manual Deploy** → **Deploy**

2. **Force Vercel redeploy:**

   - Go to: https://vercel.com/dashboard/chatrix
   - Click **Deployments**
   - Click **Redeploy** on latest

3. **Clear browser cache:**

   - Hard refresh: **Ctrl+Shift+R**
   - Or open in Incognito mode

4. **Test with different browser/device**

---

**Still stuck? Check the console errors and paste them here!** 📋
