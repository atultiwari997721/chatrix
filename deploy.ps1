$GH_USERNAME = Read-Host "Enter your GitHub username"
if ([string]::IsNullOrWhiteSpace($GH_USERNAME)) { exit 1 }

Set-Location -LiteralPath 'K:\chatrix'
git remote remove origin 2>
git remote add origin "https://github.com/$GH_USERNAME/chatrix.git"
git branch -M main 2>
git push -u origin main

Write-Host "Done! Go to https://railway.app/new to deploy backend" -ForegroundColor Green
