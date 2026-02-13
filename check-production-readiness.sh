#!/bin/bash
# Production Readiness Verification Script for Precilayer Website
# Run this to verify GitHub Pages deployment is properly configured

echo "🔍 Precilayer GitHub Pages Production Readiness Check"
echo "======================================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 exists"
        return 0
    else
        echo -e "${RED}✗${NC} $1 NOT FOUND"
        return 1
    fi
}

check_content() {
    local file=$1
    local pattern=$2
    local description=$3
    
    if grep -q "$pattern" "$file" 2>/dev/null; then
        echo -e "${GREEN}✓${NC} $description"
        return 0
    else
        echo -e "${RED}✗${NC} $description - NOT FOUND in $file"
        return 1
    fi
}

# Check critical files
echo "📁 Critical Files:"
check_file "public/404.html"
check_file "_config.yml"
check_file "vite.config.ts"
check_file "public/robots.txt"
check_file "public/sitemap.xml"
echo ""

# Check 404.html configuration
echo "🔧 404.html SPA Routing:"
check_content "public/404.html" "spaRedirect" "Storing redirect path in sessionStorage"
check_content "public/404.html" "window.location.replace" "Redirecting to index.html"
check_content "public/404.html" "segments.slice" "Extracting repo name and route"
echo ""

# Check main.tsx configuration
echo "⚙️ main.tsx SPA Redirect Handler:"
check_content "client/src/main.tsx" "handleSpaRedirect" "SPA redirect function exists"
check_content "client/src/main.tsx" "sessionStorage.getItem.*spaRedirect" "Checking for redirect in sessionStorage"
check_content "client/src/main.tsx" "window.history.replaceState" "Using history API for URL update"
check_content "client/src/main.tsx" "PopStateEvent" "Dispatching popstate event"
echo ""

# Check vite config
echo "🏗️ Vite Configuration:"
check_content "vite.config.ts" "base.*precilayer-website" "Base path set to repository name"
check_content "vite.config.ts" "minify.*terser" "Minification enabled"
check_content "vite.config.ts" "cssCodeSplit.*true" "CSS code splitting enabled"
echo ""

# Check package.json
echo "📦 Package Configuration:"
check_content "package.json" "homepage.*precilayer-website" "Homepage URL matches base path"
echo ""

# Check SEO files
echo "🔍 SEO Optimization:"
check_file "client/src/lib/seo.ts"
check_file "client/src/lib/web-vitals.ts" 
check_file "client/index.html"
check_content "client/index.html" "schema.org" "JSON-LD structured data present"
check_content "client/index.html" "og:title" "Open Graph tags present"
check_content "client/index.html" "twitter:card" "Twitter Card tags present"
echo ""

# Check Jekyll config
echo "🛠️ GitHub Pages Jekyll Configuration:"
check_content "_config.yml" "exclude" "Excluding build files from Jekyll"
check_content "_config.yml" "keep_files" "Preserving static files"
echo ""

# Check robots and sitemap
echo "🤖 Robot & Sitemap:"
check_content "public/robots.txt" "Sitemap:" "Sitemap referenced in robots.txt"
check_content "public/sitemap.xml" "industries" "Industry pages in sitemap"
check_content "public/sitemap.xml" "manufacturing" "Manufacturing pages in sitemap"
echo ""

echo "======================================================"
echo "✅ Production Readiness Check Complete!"
echo ""
echo "📋 Deployment Checklist:"
echo "  □ Run: npm run build:frontend"
echo "  □ Test locally: npm run dev"
echo "  □ Push to GitHub: git push"
echo "  □ Verify GitHub Pages deployment in repo settings"
echo "  □ Test live routing: Visit /industries/space-satellite"
echo "  □ Check Google Search Console for indexing"
echo ""
echo "🔗 Key URLs to test after deployment:"
echo "  - https://ankit-sharma-dev-ops.github.io/precilayer-website/"
echo "  - https://ankit-sharma-dev-ops.github.io/precilayer-website/industries/space-satellite"
echo "  - https://ankit-sharma-dev-ops.github.io/precilayer-website/manufacturing/cnc-milling"
echo ""
echo "❌ If any checks failed above, review the Production Readiness Guide"
