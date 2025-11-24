@echo off
REM Deploy chatrix to GitHub and Railway
REM Before running this, update YOUR_USERNAME with your actual GitHub username

setlocal enabledelayedexpansion

echo.
echo ===== CHATRIX DEPLOYMENT SCRIPT =====
echo.
echo This script will:
echo 1. Configure Git remote
echo 2. Push code to GitHub
echo 3. Provide Railway deployment link
echo.

REM Get GitHub username
set /p GH_USERNAME="Enter your GitHub username: "

if "!GH_USERNAME!"=="" (
    echo Error: GitHub username required
    exit /b 1
)

echo.
echo Configuring Git remote...
cd /d K:\chatrix
git remote remove origin 2>nul
git remote add origin https://github.com/!GH_USERNAME!/chatrix.git
git branch -M main

echo.
echo Pushing code to GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo ERROR: Push failed. Make sure:
    echo - Your GitHub username is correct: !GH_USERNAME!
    echo - You've authenticated with GitHub
    echo - The repository exists and is public
    exit /b 1
)

echo.
echo ===== SUCCESS! =====
echo.
echo Your code is now on GitHub!
echo.
echo Next steps:
echo 1. Go to https://railway.app/new
echo 2. Sign in with GitHub
echo 3. Select "Deploy from GitHub repo"
echo 4. Choose "chatrix" repository
echo 5. Set Root Directory to "server"
echo 6. Click "Deploy"
echo.
echo Wait for Railway to show "Active" status...
echo Then copy the domain and add it to Vercel environment variables.
echo.
pause
