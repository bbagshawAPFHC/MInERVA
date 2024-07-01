$projectRoot = "." # Assumes you're running this from the project root. Adjust if needed.

Get-ChildItem -Path $projectRoot -Recurse | 
Where-Object { $_.FullName -notmatch "\\node_modules\\" } | 
ForEach-Object {
    $indent = "  " * ($_.FullName.Split("\").Count - $projectRoot.Split("\").Count)
    if ($_.PSIsContainer) {
        Write-Output "$indent📁 $($_.Name)"
    } else {
        Write-Output "$indent📄 $($_.Name)"
    }
}