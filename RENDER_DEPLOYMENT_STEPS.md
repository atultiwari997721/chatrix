# 🚀 DEPLOY CHATRIX BACKEND TO RENDER.COM

## Option 1: Direct Git Push (Recommended)

Since you don't have a GitHub remote configured yet, follow these steps:

### Step 1: Create GitHub Repo & Push Code

1. Go to https://github.com/new
2. Create a new repository named `chatrix`
3. Copy the HTTPS URL (looks like: `https://github.com/YOUR_USERNAME/chatrix.git`)

In PowerShell, run:

```powershell
Set-Location -LiteralPath 'K:\chatrix'
git remote add origin https://github.com/YOUR_USERNAME/chatrix.git
git branch -M main
git push -u origin main
```

**Note:** GitHub may ask for a Personal Access Token. Get one at: https://github.com/settings/tokens

---

## Option 2: Deploy Directly from Local (No GitHub Needed)

### Step 1: Go to Render.com

1. Open https://render.com/new
2. Click **Web Service**
3. Click **Deploy via Dockerfile**

### Step 2: Create Dockerfile

Create a file named `server/Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app/server

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

### Step 3: Push to GitHub

You'll need GitHub to deploy on Render. Follow Option 1 above.

---

## QUICKEST PATH: Use Render's GitHub Integration

1. **Go to:** https://render.com/new
2. **Sign in with GitHub**
3. **Click:** "Create New" → "Web Service"
4. **Select:** "Connect Repository"
5. **Authorize** GitHub (Render will ask)
6. **Select:** `YOUR_USERNAME/chatrix` from your repos
7. **Configure:**
   - **Name:** `chatrix-backend`
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free
8. **Click:** "Create Web Service"
9. **Wait:** 3-5 minutes for "Live" status ✅

Once deployed, Render gives you a domain like:

```
https://chatrix-backend.onrender.com
```

---

## After Backend is Live

1. Copy the Render domain
2. Go to: https://vercel.com/dashboard/chatrix
3. Settings → Environment Variables
4. Add: `REACT_APP_ENDPOINT` = Your Render domain
5. Save (auto-redeploy)
6. Done! ✨

---

## Test Your Chat

Open: https://chatrix-hzxso6mkk-atultiwari997721s-projects.vercel.app

- **Tab 1:** Name: "Alice", Room: "test" → Join
- **Tab 2:** Name: "Bob", Room: "test" → Join
- **Alice:** Type "Hello Bob!"
- **Bob:** Should see it instantly! ✅

---

**Next Step:** Push to GitHub or use Render's GitHub integration above! 🚀
