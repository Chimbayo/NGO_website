# Deployment Checklist

## Issue Resolved
✅ **cad-logo-CuysF6oa.jpg not showing** - Fixed by moving images to `public/` folder

## Pre-Deployment Steps

### 1. Environment Variables
Ensure these are set in your deployment platform (Netlify, Vercel, etc.):
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### 2. Build the Project
```bash
npm install          # Install dependencies (if needed)
npm run build        # Build for production
```

### 3. Verify Build Output
Check that `dist/` folder contains:
- ✅ `index.html`
- ✅ `assets/` folder (JS and CSS)
- ✅ `cad-logo.jpg`
- ✅ `home.jpeg`
- ✅ `energy.jpg`
- ✅ `trees.jpg`
- ✅ `agri.jpg`

### 4. Test Locally (Optional)
```bash
npm run preview      # Preview production build locally
```

## Deployment

### Deploy to Netlify/Vercel
1. Deploy the entire `dist/` folder
2. Set environment variables in the platform settings
3. Verify deployment URL

### Post-Deployment Verification
- [ ] Website loads correctly
- [ ] CAD logo appears in navbar
- [ ] CAD logo appears in footer
- [ ] Hero background image shows
- [ ] Focus area images display
- [ ] Contact form works
- [ ] Console logs appear (for debugging)

## Common Issues

### Images not showing?
1. Verify images are in `public/` folder (not root)
2. Rebuild: `npm run build`
3. Check `dist/` folder has the images
4. Redeploy entire `dist/` folder

### Environment variables not working?
1. Check variable names match exactly (case-sensitive)
2. Restart deployment after setting variables
3. Check browser console for configuration errors

### Console logs not appearing?
1. Open browser DevTools (F12)
2. Go to Console tab
3. Test contact form to see logs

## Files Changed

### New/Modified Files:
- ✅ `public/` folder created
- ✅ Images moved to `public/`
- ✅ `vite.config.js` - Console logs preserved
- ✅ `src/components/Contact.jsx` - Enhanced logging
- ✅ `package.json` - Added terser dependency

### Documentation:
- ✅ `ASSETS_GUIDE.md` - Asset management guide
- ✅ `LOGGING_GUIDE.md` - Logging configuration
- ✅ `DEPLOYMENT_CHECKLIST.md` - This file

## Quick Deploy Command

```bash
# One-line deploy preparation
npm install && npm run build
```

Then upload the `dist/` folder to your hosting service.

## Support

If issues persist:
1. Check browser console for errors
2. Verify all files in `public/` folder
3. Ensure environment variables are set
4. Review build output for errors
