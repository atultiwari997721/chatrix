@echo off
REM 📤 Simple GitHub Push Script for Chatrix
REM Usage: deploy.bat YOUR_GITHUB_USERNAME

setlocal enabledelayedexpansion

echo.
echo 📤 ===== PUSH CODE TO GITHUB =====
echo.

if "%1"=="" (
    set /p GITHUB_USER="Enter your GitHub username: "
) else (
    set "GITHUB_USER=%1"
)

if "!GITHUB_USER!"=="" (
    echo ❌ Error: GitHub username required
    exit /b 1
)

cd /d K:\chatrix

echo.
echo 🔧 Configuring Git...
git config user.name "Chatrix Developer" > nul 2>&1
git config user.email "dev@chatrix.app" > nul 2>&1
git remote remove origin > nul 2>&1
git remote add origin https://github.com/!GITHUB_USER!/chatrix.git
git branch -M main

echo.
echo 📤 Pushing to GitHub (https://github.com/!GITHUB_USER!/chatrix)...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ ===== SUCCESS! =====
    echo.
    echo Your code is now on GitHub!
    echo.
    echo 🚀 Next steps (Deploy Backend):
    echo 1. Go to https://render.com/new
    echo 2. Click "Web Service" - "Connect Repository"
    echo 3. Select: https://github.com/!GITHUB_USER!/chatrix
    echo 4. Set Root Directory to: server
    echo 5. Wait for "Live" status
    echo.
    echo 📖 Full guide: See RENDER_DEPLOY.md
    echo.
) else (
    echo.
    echo ❌ Push failed. Check:
    echo - GitHub username is correct: !GITHUB_USER!
    echo - You have push access
    echo - Your GitHub token/SSH key is configured
    echo.
)

pause
