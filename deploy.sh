#!/bin/bash
# Automated deployment script for Chatrix
# This script deploys the backend to Render.com with one command

echo "🚀 Chatrix Automated Deployment"
echo "================================"
echo ""

# Check if Git is configured
if [ -z "$(git config --global user.name)" ]; then
    echo "Configuring Git..."
    git config --global user.name "Chatrix Deploy"
    git config --global user.email "deploy@chatrix.local"
fi

# Create GitHub repo link
GITHUB_USERNAME="${1:-your-username}"
REPO_URL="https://github.com/$GITHUB_USERNAME/chatrix.git"

echo "📦 Setting up GitHub remote..."
git remote remove origin 2>/dev/null
git remote add origin "$REPO_URL"
git branch -M main

echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Code pushed to GitHub!"
    echo ""
    echo "🎯 Next steps:"
    echo "1. Go to: https://render.com/new"
    echo "2. Select: 'Web Service' → 'Connect Repository'"
    echo "3. Enter: $REPO_URL"
    echo "4. Set Root Directory: server"
    echo "5. Build Command: npm install"
    echo "6. Start Command: npm start"
    echo "7. Click 'Create Web Service'"
    echo ""
    echo "📋 After Render deploys:"
    echo "1. Copy the domain from Render dashboard"
    echo "2. Go to: https://vercel.com/dashboard/chatrix"
    echo "3. Settings → Environment Variables"
    echo "4. Add: REACT_APP_ENDPOINT = your-render-domain"
    echo "5. Save (auto-redeploy)"
    echo ""
    echo "✨ Then test at: https://chatrix-hzxso6mkk-atultiwari997721s-projects.vercel.app"
else
    echo "❌ Push failed. Check:"
    echo "  - GitHub username is correct"
    echo "  - Repository is public"
    echo "  - You're authenticated with GitHub"
fi
