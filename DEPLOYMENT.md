# Portfolio Deployment Guide

This guide will help you deploy your portfolio to your domain.

## Prerequisites

1. Make sure you have Node.js installed (version 16 or higher)
2. Your domain should be configured and ready for hosting

## Build the Project

First, build your project for production:

```bash
npm run build:prod
```

This will create a `dist` folder with all the optimized files ready for deployment.

## Deployment Options

### Option 1: Netlify (Recommended)

1. **Connect your repository:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login and click "New site from Git"
   - Connect your GitHub/GitLab/Bitbucket repository

2. **Configure build settings:**
   - Build command: `npm run build:prod`
   - Publish directory: `dist`
   - Node version: `18` (or your preferred version)

3. **Custom domain setup:**
   - Go to Site settings > Domain management
   - Add your custom domain
   - Follow the DNS configuration instructions

### Option 2: Vercel

1. **Deploy with Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Or connect via GitHub:**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will automatically detect it's a Vite project

3. **Custom domain:**
   - Go to Project settings > Domains
   - Add your custom domain

### Option 3: GitHub Pages

1. **Add GitHub Pages action:**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build:prod
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Select "GitHub Actions" as source

### Option 4: Traditional Web Hosting

1. **Upload files:**
   - Upload the contents of the `dist` folder to your web server's public directory
   - Make sure `index.html` is in the root directory

2. **Configure server:**
   - Ensure your server is configured to serve static files
   - Set up proper MIME types for `.js`, `.css`, and other assets

## Important Notes

### Base URL Configuration

If you're deploying to a subdirectory (e.g., `yourdomain.com/portfolio/`), update the `base` in `vite.config.ts`:

```typescript
base: '/portfolio/',
```

### Environment Variables

Create a `.env.production` file for production-specific variables:

```env
VITE_APP_TITLE=Shelton Bumhe Portfolio
VITE_APP_URL=https://yourdomain.com
```

### SEO and Meta Tags

Update the following in `index.html`:
- Replace `https://yourdomain.com` with your actual domain
- Add your actual social media images
- Update favicon files in the `public` folder

### Custom Domain Setup

1. **DNS Configuration:**
   - Add an A record pointing to your hosting provider's IP
   - Or add a CNAME record pointing to your hosting provider's domain

2. **SSL Certificate:**
   - Most modern hosting providers offer free SSL certificates
   - Enable HTTPS for better SEO and security

## Testing Your Deployment

After deployment:

1. **Check functionality:**
   - Test all navigation links
   - Verify contact forms work
   - Check responsive design on mobile devices

2. **Performance:**
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Optimize images if needed

3. **SEO:**
   - Test meta tags with social media debuggers
   - Verify Google Analytics (if using)
   - Check robots.txt and sitemap

## Troubleshooting

### Common Issues

1. **404 errors on refresh:**
   - This is normal with SPA routing
   - Configure your server to redirect all requests to `index.html`

2. **Assets not loading:**
   - Check the `base` configuration in `vite.config.ts`
   - Verify file paths are correct

3. **Build errors:**
   - Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
   - Check for TypeScript errors: `npm run lint`

### Support

If you encounter issues:
1. Check the hosting provider's documentation
2. Verify your domain DNS settings
3. Test locally with `npm run preview`

## Next Steps

After successful deployment:
1. Set up Google Analytics
2. Configure email forwarding for contact forms
3. Set up monitoring and uptime checks
4. Consider adding a blog or additional content 