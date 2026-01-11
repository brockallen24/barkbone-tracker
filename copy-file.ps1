# PowerShell Script to Copy Deployment File from WSL to Windows Downloads

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Copying Barkbone Tracker Deploy File" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$targetPath = "$env:USERPROFILE\Downloads\Barkbone-Tracker-Deploy.html"

Write-Host "Copying file from WSL..." -ForegroundColor Yellow

try {
    # Use wsl command to read the file and pipe to Out-File
    wsl -e cat /home/user/barkbone-tracker/Barkbone-Tracker-Deploy.html | Out-File -FilePath $targetPath -Encoding UTF8

    if (Test-Path $targetPath) {
        $fileSize = (Get-Item $targetPath).Length
        Write-Host ""
        Write-Host "SUCCESS!" -ForegroundColor Green
        Write-Host "File copied to: $targetPath" -ForegroundColor Green
        Write-Host "File size: $fileSize bytes" -ForegroundColor Green
        Write-Host ""
        Write-Host "Next steps:" -ForegroundColor Cyan
        Write-Host "1. Open your Downloads folder" -ForegroundColor White
        Write-Host "2. Find: Barkbone-Tracker-Deploy.html" -ForegroundColor White
        Write-Host "3. Go to: https://app.netlify.com/drop" -ForegroundColor White
        Write-Host "4. Drag the file to deploy it!" -ForegroundColor White
    } else {
        Write-Host "ERROR: File was not created" -ForegroundColor Red
    }
} catch {
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
