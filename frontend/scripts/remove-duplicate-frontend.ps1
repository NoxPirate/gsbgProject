# Remove duplicate nested frontend folder safely
# Run this in PowerShell from the repository root:
#   cd c:\Users\user\Desktop\gsbgProject\frontend
#   .\scripts\remove-duplicate-frontend.ps1

$dupPath = Join-Path $PSScriptRoot "frontend"
if (-Not (Test-Path $dupPath)) {
    Write-Host "No nested frontend folder found at: $dupPath" -ForegroundColor Yellow
    exit 0
}

Write-Host "This script will delete the nested frontend folder:" -ForegroundColor Cyan
Write-Host "  $dupPath" -ForegroundColor Cyan

$confirm = Read-Host "Type DELETE to permanently remove the folder"
if ($confirm -ne 'DELETE') {
    Write-Host "Aborting. No changes made." -ForegroundColor Yellow
    exit 1
}

try {
    Remove-Item -LiteralPath $dupPath -Recurse -Force
    Write-Host "Removed $dupPath" -ForegroundColor Green
} catch {
    Write-Host "Failed to remove $dupPath: $_" -ForegroundColor Red
    exit 2
}
