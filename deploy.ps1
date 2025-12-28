# ========================================
# Firebase Deployment Script
# Portfolio Website - Rishav Singh
# ========================================

Write-Host "🚀 Firebase Deployment Script" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if Firebase CLI is installed
Write-Host "📦 Checking Firebase CLI..." -ForegroundColor Yellow
$firebaseInstalled = Get-Command firebase -ErrorAction SilentlyContinue

if (-not $firebaseInstalled) {
    Write-Host "❌ Firebase CLI is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Firebase CLI first:" -ForegroundColor Yellow
    Write-Host "npm install -g firebase-tools" -ForegroundColor White
    Write-Host ""
    exit 1
}

Write-Host "✅ Firebase CLI is installed" -ForegroundColor Green
Write-Host ""

# Check if user is logged in
Write-Host "🔐 Checking Firebase login status..." -ForegroundColor Yellow
$loginCheck = firebase login:list 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Not logged in to Firebase!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Logging in to Firebase..." -ForegroundColor Yellow
    firebase login
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Login failed!" -ForegroundColor Red
        exit 1
    }
}

Write-Host "✅ Logged in to Firebase" -ForegroundColor Green
Write-Host ""

# Deploy Firestore Rules (optional)
Write-Host "🔒 Do you want to deploy Firestore security rules? (Y/N)" -ForegroundColor Yellow
$deployRules = Read-Host

if ($deployRules -eq "Y" -or $deployRules -eq "y") {
    Write-Host "📤 Deploying Firestore rules..." -ForegroundColor Yellow
    firebase deploy --only firestore:rules
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Firestore rules deployed successfully!" -ForegroundColor Green
    } else {
        Write-Host "❌ Failed to deploy Firestore rules!" -ForegroundColor Red
    }
    Write-Host ""
}

# Deploy to Firebase Hosting
Write-Host "🌐 Deploying to Firebase Hosting..." -ForegroundColor Yellow
firebase deploy --only hosting

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "================================" -ForegroundColor Green
    Write-Host "✅ Deployment Successful!" -ForegroundColor Green
    Write-Host "================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌍 Your website is live at:" -ForegroundColor Cyan
    Write-Host "https://rishavsingh4805.web.app" -ForegroundColor White
    Write-Host "https://rishavsingh4805.firebaseapp.com" -ForegroundColor White
    Write-Host ""
    Write-Host "📊 View in Firebase Console:" -ForegroundColor Cyan
    Write-Host "https://console.firebase.google.com/project/rishavsingh4805" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Deployment Failed!" -ForegroundColor Red
    Write-Host "Please check the error messages above." -ForegroundColor Yellow
    Write-Host ""
}

Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
