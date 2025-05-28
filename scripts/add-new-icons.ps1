$skillsPath = "F:\Git Projects\Portfolio\public\images\skills"

$icons = @(
    @{
        url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        filename = "react.svg"
    },
    @{
        url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        filename = "tailwind.svg"
    },
    @{
        url = "https://avatars.githubusercontent.com/u/139895814"
        filename = "shadcn.svg"
    },
    @{
        url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
        filename = "gcp.svg"
    },
    @{
        url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg"
        filename = "sonarqube.svg"
    },
    @{
        url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg"
        filename = "swagger.svg"
    }
)

foreach ($icon in $icons) {
    $outputPath = Join-Path $skillsPath $icon.filename
    Write-Host "Downloading $($icon.filename)..."
    
    try {
        Invoke-WebRequest -Uri $icon.url -OutFile $outputPath
        Write-Host "Successfully downloaded $($icon.filename)" -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to download $($icon.filename): $_" -ForegroundColor Red
    }
}
