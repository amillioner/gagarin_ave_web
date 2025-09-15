# GitHub Pages Deployment Guide

This guide will help you deploy the Gagarin Avenue website to GitHub Pages.

## Prerequisites

- GitHub account
- Repository with the code pushed to the `main` branch

## Deployment Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 2. Automatic Deployment

The repository is already configured with GitHub Actions for automatic deployment:

- **Workflow file**: `.github/workflows/deploy.yml`
- **Trigger**: Pushes to `main` branch
- **Build command**: `npm run build:gh-pages`
- **Output directory**: `dist`

### 3. Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build:gh-pages

# The dist folder will be created with the built files
# You can then manually upload the dist folder contents to GitHub Pages
```

## Configuration Details

### Vite Configuration
- **Base path**: `/gagarin_ave_web/` (for GitHub Pages)
- **Build mode**: Production
- **Output directory**: `dist`

### Package.json Scripts
- `npm run dev` - Development server
- `npm run build` - Standard build
- `npm run build:gh-pages` - GitHub Pages build
- `npm run preview` - Preview built site locally

## Accessing Your Site

Once deployed, your site will be available at:
`https://[your-username].github.io/gagarin_ave_web/`

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm ci`
- Check for TypeScript errors: `npm run lint`
- Verify the build locally: `npm run build:gh-pages`

### GitHub Actions Issues
- Check the Actions tab in your repository for build logs
- Ensure the repository has the correct permissions
- Verify the workflow file is in `.github/workflows/`

### Site Not Loading
- Check if the base path is correct in `vite.config.ts`
- Verify the repository name matches the base path
- Clear browser cache and try again

## Features Included

- ✅ Multi-language support (English, Russian, Uzbek)
- ✅ Responsive design
- ✅ Image galleries with lightbox
- ✅ Contact forms
- ✅ Interactive site plan
- ✅ Amenities showcase
- ✅ Pricing tables
- ✅ Location with maps
- ✅ SEO optimized

## Support

If you encounter any issues with deployment, check:
1. GitHub Actions logs
2. Browser console for errors
3. Network tab for failed resource loads
4. Repository settings and permissions
