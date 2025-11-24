# 🚀 Chatrix - Real-time Chat Application

A modern, real-time chat application built with React, Express, and Socket.IO.

## 🌐 Live Demo

**Frontend (Vercel):** https://chatrix-bh732bv0n-atultiwari997721s-projects.vercel.app

## 🏗️ Architecture

- **Frontend:** React 19 + React Router v7 (Deployed on Vercel)
- **Backend:** Node.js + Express + Socket.IO (Deploy to Railway.app)
- **Real-time:** WebSocket connections for instant messaging

## ✨ Features

✅ Real-time messaging with Socket.IO  
✅ Multiple chat rooms  
✅ Online user tracking  
✅ Auto-reconnection handling  
✅ Responsive UI design  
✅ Emoji support  

## 🚀 Quick Deploy

### Step 1: Push to GitHub

First-time setup:
```bash
cd K:\chatrix
git remote add origin https://github.com/YOUR_USERNAME/chatrix.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy Backend to Railway

1. Go to https://railway.app/new
2. Sign in with GitHub
3. Select "Deploy from GitHub repo"
4. Choose `YOUR_USERNAME/chatrix`
5. Set Root Directory to: `server`
6. Click Deploy
7. Wait for green "Active" status

### Step 3: Connect Frontend to Backend

After Railway deployment:

1. Copy your Railway domain from the dashboard
2. Go to https://vercel.com/dashboard/chatrix
3. Settings → Environment Variables
4. Add:
   - **Name:** `REACT_APP_ENDPOINT`
   - **Value:** Your Railway domain
5. Save (auto-redeploy)

### Step 4: Test

1. Open: https://chatrix-bh732bv0n-atultiwari997721s-projects.vercel.app
2. Enter name and room, click "Sign In"
3. Open another tab, join the same room
4. Send messages - they should sync instantly! ✅

## 📁 Project Structure

```
chatrix/
├── client/              (React frontend)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat/
│   │   │   ├── Join/
│   │   │   ├── Messages/
│   │   │   └── ...
│   │   └── App.js
│   └── package.json
├── server/              (Express backend)
│   ├── index.js
│   ├── users.js
│   ├── router.js
│   └── package.json
├── api/                 (Vercel serverless)
│   └── index.js
└── vercel.json
```

## 🛠️ Local Development

### Backend
```bash
cd server
npm install
npm start
# Runs on http://localhost:3005
```

### Frontend
```bash
cd client
npm install
npm start
# Runs on http://localhost:3000
```

## 📚 Deployment Guides

- **QUICK_DEPLOY.md** - 5-minute quick reference
- **RAILWAY_DEPLOY.md** - Railway deployment steps
- **DEPLOYMENT_COMPLETE.md** - Detailed guide
- **BACKEND_DEPLOYMENT.md** - Alternative backends

## 🔧 Environment Variables

### Vercel (Frontend)
- `REACT_APP_ENDPOINT` - Backend API URL

### Railway (Backend)
- `PORT` - Server port (default: 3000)

## 🎯 Tech Stack

| Part | Technology | Hosting |
|------|-----------|---------|
| Frontend | React 19, Router v7, Socket.IO Client | Vercel |
| Backend | Node.js, Express, Socket.IO | Railway.app |
| Database | In-memory (can add MongoDB/Firebase) | - |

## 📊 Free Tier Limits

- **Vercel:** 100GB bandwidth/month
- **Railway:** 500 hours/month (perfect for always-on server)

## 🐛 Troubleshooting

### Chat won't connect
1. Check Railway is deployed and shows "Active"
2. Verify `REACT_APP_ENDPOINT` in Vercel matches Railway domain
3. Wait 2-3 minutes for Vercel redeploy
4. Clear browser cache (Ctrl+Shift+Delete)

### Messages not syncing
1. Open browser DevTools (F12)
2. Check Console for WebSocket errors
3. Verify both users are in the same room
4. Refresh the page

### Build errors
1. Check all dependencies are installed
2. Verify Node.js version (18.x or higher)
3. Check Railway and Vercel build logs

## 📞 Support

- Check deployment guides in project folder
- Review error logs in Vercel/Railway dashboards
- Verify all environment variables are set correctly

## 📄 License

MIT License - feel free to use and modify

---

**Made with ❤️ using React, Node.js, and Socket.IO**

Happy Chatting! 🚀
