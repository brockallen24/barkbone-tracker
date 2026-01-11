# PowerShell Script to Create BarkboneTracker HTML File on Windows
# This creates the file directly on your Windows system with proper encoding

$htmlContent = @"
$(cat /home/user/barkbone-tracker/BarkboneTracker-Clean.html)
"@

$outputPath = "$env:USERPROFILE\Downloads\BarkboneTracker.html"

# Write the file with UTF8 encoding (no BOM)
[System.IO.File]::WriteAllText($outputPath, $htmlContent, [System.Text.UTF8Encoding]::new($false))

Write-Host "✓ File created successfully!" -ForegroundColor Green
Write-Host "Location: $outputPath" -ForegroundColor Cyan
Write-Host "Size: $((Get-Item $outputPath).Length) bytes" -ForegroundColor Cyan
Write-Host ""
Write-Host "Opening in Chrome..." -ForegroundColor Yellow

Start-Sleep -Seconds 1

# Open in Chrome
Start-Process chrome.exe $outputPath

Write-Host ""
Write-Host "If you see a purple background with 'Inventory Tracker', it worked!" -ForegroundColor Green
Write-Host "If you see HTML code as text, press any key for troubleshooting help..." -ForegroundColor Yellow

$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
