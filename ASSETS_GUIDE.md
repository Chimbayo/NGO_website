# Assets and Images Guide

## Issue Fixed
The `cad-logo.jpg` and other images were not showing on the deployed system because they were in the root directory instead of the `public` folder.

## Solution
All static assets (images, fonts, etc.) must be placed in the `public` folder for Vite to properly copy them to the build output.

## Project Structure

```
NGO_website/
├── public/              ← Static assets go here
│   ├── cad-logo.jpg    ← Logo image
│   ├── home.jpeg       ← Hero background
│   ├── energy.jpg      ← Focus area image
│   ├── trees.jpg       ← Focus area image
│   └── agri.jpg        ← Focus area image
├── src/                ← Source code
└── dist/               ← Build output (generated)
```

## How Vite Handles Assets

### Public Folder Assets
- Files in `public/` are copied as-is to the root of `dist/`
- Reference them with absolute paths: `/cad-logo.jpg`
- Use for: logos, favicons, images, fonts, static files

### Imported Assets (Alternative)
- Import images in your components: `import logo from './assets/logo.jpg'`
- Vite processes and optimizes them
- Gets a hashed filename: `logo-abc123.jpg`
- Use for: component-specific images

## Current Image References

All images are referenced with absolute paths from root:

### Navbar & Footer
```jsx
<img src="/cad-logo.jpg" alt="CAD Malawi Logo" />
```

### Hero Section
```jsx
style={{ backgroundImage: 'url(/home.jpeg)' }}
```

### Focus Areas
```jsx
image: '/energy.jpg'
image: '/trees.jpg'
image: '/agri.jpg'
```

## Deployment Checklist

Before deploying:

1. ✅ All images are in `public/` folder
2. ✅ Run `npm run build` to test
3. ✅ Verify images appear in `dist/` folder
4. ✅ Deploy the entire `dist/` folder

## Adding New Images

To add new images:

1. Place the image file in `public/` folder
2. Reference it with absolute path: `/your-image.jpg`
3. Rebuild: `npm run build`
4. Redeploy

## Troubleshooting

### Image not showing after deployment?
- Check if the image is in `public/` folder
- Verify the path starts with `/`
- Rebuild and redeploy
- Check browser console for 404 errors

### Image shows locally but not in production?
- Ensure you deployed the entire `dist/` folder
- Check file names match exactly (case-sensitive)
- Verify hosting service serves static files correctly

## Build Command

```bash
npm run build
```

This will:
1. Copy all files from `public/` to `dist/`
2. Bundle and optimize your code
3. Generate production-ready files in `dist/`
