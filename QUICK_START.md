# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Email (Optional but Recommended)
- Open `.env` file
- Follow [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) to get your credentials
- Add your EmailJS keys to `.env`

### 3. Run the Application
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser!

## 📝 Important Files

- **`.env`** - EmailJS configuration (keep this private!)
- **`src/components/Contact.jsx`** - Change recipient email on line 74
- **`public/`** - Replace images with your own
- **`tailwind.config.js`** - Customize colors and theme

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js` and `src/index.css` for the primary green color scheme.

### Update Content
- **About Section**: `src/components/About.jsx`
- **Projects**: `src/components/Projects.jsx`
- **News**: `src/components/News.jsx`
- **Contact Info**: `src/components/Contact.jsx` and `src/components/Footer.jsx`

### Replace Images
Place your images in the `public/` folder:
- `cad-logo.jpg` - Organization logo
- `home.jpeg` - Hero background
- `energy.jpg`, `trees.jpg`, `agri.jpg` - Focus area backgrounds

## 🔧 Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

## ❓ Need Help?

- Email not working? Check [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)
- Full documentation in [README.md](./README.md)
- Contact: hanifamakunganya252@gmail.com
