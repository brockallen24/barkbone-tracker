# PowerShell Script to Download Barkbone Tracker HTML File
# This script properly downloads the HTML file from WSL to Windows Downloads

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  Downloading Barkbone Tracker File  " -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

$downloadPath = "$env:USERPROFILE\Downloads\Barkbone-Tracker-Deploy-FIXED.html"

Write-Host "Target location: $downloadPath" -ForegroundColor Yellow
Write-Host "Downloading file from WSL..." -ForegroundColor Yellow
Write-Host ""

try {
    # Use WSL to get the file content and save with proper encoding
    $content = wsl -e cat /home/user/barkbone-tracker/Barkbone-Tracker-Deploy-FIXED.html

    # Save with UTF8 encoding without BOM
    [System.IO.File]::WriteAllLines($downloadPath, $content, [System.Text.UTF8Encoding]::new($false))

    if (Test-Path $downloadPath) {
        $fileSize = (Get-Item $downloadPath).Length
        Write-Host "SUCCESS! File downloaded successfully!" -ForegroundColor Green
        Write-Host ""
        Write-Host "File location: $downloadPath" -ForegroundColor Green
        Write-Host "File size: $fileSize bytes" -ForegroundColor Green
        Write-Host ""
        Write-Host "Next Steps:" -ForegroundColor Cyan
        Write-Host "1. Go to your Downloads folder" -ForegroundColor White
        Write-Host "2. Find: Barkbone-Tracker-Deploy-FIXED.html" -ForegroundColor White
        Write-Host "3. RIGHT-CLICK and select 'Open with' > Chrome or Edge" -ForegroundColor White
        Write-Host "4. The inventory tracker should load with purple background" -ForegroundColor White
        Write-Host ""
        Write-Host "To deploy to Netlify:" -ForegroundColor Cyan
        Write-Host "1. Go to: https://app.netlify.com/drop" -ForegroundColor White
        Write-Host "2. Drag the HTML file to the page" -ForegroundColor White
        Write-Host "3. Get your live URL!" -ForegroundColor White
        Write-Host ""
    } else {
        Write-Host "ERROR: File was not created" -ForegroundColor Red
    }
} catch {
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please make sure WSL is installed and the file exists." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
