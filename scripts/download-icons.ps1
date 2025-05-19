# Create skills directory if it doesn't exist
$skillsDir = "f:\Git Projects\Portfolio\public\images\skills"
New-Item -ItemType Directory -Force -Path $skillsDir

# Icon URLs
$icons = @{
    # Frontend
    "html5" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    "css3" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    "javascript" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    "typescript" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    "angular" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
    
    # Backend
    "java" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    "spring" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
    
    # DevOps & Cloud
    "docker" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    "jenkins" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
    "kubernetes" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
    "kafka" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg"
    "aws" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
    
    # Databases
    "mysql" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    "postgresql" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    
    # Tools & Testing
    "git" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    "github" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
}

# Simple Icons (for icons not available in devicons)
$simpleIcons = @{
    "hibernate" = "https://simpleicons.org/icons/hibernate.svg"
    "junit5" = "https://simpleicons.org/icons/junit5.svg"
    "oracle" = "https://simpleicons.org/icons/oracle.svg"
}

# Custom SVG icons from SVGRepo
$svgRepoIcons = @{
    "api" = "https://www.svgrepo.com/download/375531/api.svg"
    "microservices" = "https://www.svgrepo.com/download/375419/microservices.svg"
    "testing" = "https://www.svgrepo.com/download/375766/testing-library.svg"
    "database" = "https://www.svgrepo.com/download/375648/database.svg"
    "cicd" = "https://www.svgrepo.com/download/375172/cicd.svg"
    "system-design" = "https://www.svgrepo.com/download/375711/system-design.svg"
    "network" = "https://www.svgrepo.com/download/375515/network.svg"
    "data-structure" = "https://www.svgrepo.com/download/375223/data-structure.svg"
    "algorithm" = "https://www.svgrepo.com/download/375094/algorithm.svg"
    "os" = "https://www.svgrepo.com/download/375550/operating-system.svg"
    "github-actions" = "https://www.svgrepo.com/download/375561/github-actions.svg"
}

# Download devicons
Write-Host "Downloading icons from devicons..."
foreach ($icon in $icons.GetEnumerator()) {
    $outFile = Join-Path $skillsDir "$($icon.Key).svg"
    Write-Host "Downloading $($icon.Key)..."
    try {
        Invoke-WebRequest -Uri $icon.Value -OutFile $outFile
    } catch {
        Write-Warning "Failed to download $($icon.Key): $_"
    }
}

# Download Simple Icons
Write-Host "`nDownloading icons from Simple Icons..."
foreach ($icon in $simpleIcons.GetEnumerator()) {
    $outFile = Join-Path $skillsDir "$($icon.Key).svg"
    Write-Host "Downloading $($icon.Key)..."
    try {
        Invoke-WebRequest -Uri $icon.Value -OutFile $outFile
    } catch {
        Write-Warning "Failed to download $($icon.Key): $_"
    }
}

# Download SVGRepo icons
Write-Host "`nDownloading icons from SVGRepo..."
foreach ($icon in $svgRepoIcons.GetEnumerator()) {
    $outFile = Join-Path $skillsDir "$($icon.Key).svg"
    Write-Host "Downloading $($icon.Key)..."
    try {
        Invoke-WebRequest -Uri $icon.Value -OutFile $outFile
    } catch {
        Write-Warning "Failed to download $($icon.Key): $_"
    }
}

# Set TLS 1.2
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

# Define the destination directory
$DestinationPath = "f:\Git Projects\Portfolio\public\images\skills"

# Create the directory if it doesn't exist
if (-not (Test-Path $DestinationPath)) {
    New-Item -ItemType Directory -Path $DestinationPath -Force
}

# Define icon URLs
$IconUrls = @{
    "jsp.png" = "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_jsp.svg"
    "mockito.png" = "https://raw.githubusercontent.com/mockito/mockito.github.io/master/img/logo.png"
    "spring-test.svg" = "https://www.svgrepo.com/download/354380/spring-icon.svg"
    "oracle.svg" = "https://www.svgrepo.com/download/354968/oracle.svg"
    "sql.svg" = "https://www.svgrepo.com/download/374093/sql.svg"
}

# Download each icon
foreach ($Icon in $IconUrls.GetEnumerator()) {
    $DestinationFile = Join-Path $DestinationPath $Icon.Key
    Write-Host "Downloading $($Icon.Key)..."
    
    try {
        Invoke-WebRequest -Uri $Icon.Value -OutFile $DestinationFile
        Write-Host "Successfully downloaded $($Icon.Key)" -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to download $($Icon.Key): $_" -ForegroundColor Red
    }
}

Write-Host "`nAll downloads completed!"

# For SVG files that were downloaded as PNG, convert file extension
Get-ChildItem $DestinationPath -Filter "*.svg.png" | ForEach-Object {
    $newName = $_.Name -replace '\.svg\.png$', '.svg'
    Rename-Item $_.FullName -NewName $newName
}

Write-Host "`nIcon download complete! Check the skills directory for the downloaded icons."
Write-Host "Note: Some icons might need manual download or replacement if the automatic download failed."
