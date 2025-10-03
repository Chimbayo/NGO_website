# CAD Malawi Website

A modern, professional website for Community Action for Development (CAD) - a Malawian NGO dedicated to building resilient communities through sustainable energy, agriculture, and environmental conservation.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Vite for optimal performance
- **Beautiful UI Components**: Utilizing shadcn/ui and TailwindCSS for a professional look
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Professional Icons**: Lucide React icons throughout
- **Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Configure EmailJS for contact form (see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)):
   - Create a free account at [EmailJS](https://www.emailjs.com/)
   - Set up your email service and template
   - Copy your credentials to `.env` file

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
NGO_website/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Navbar.jsx    # Navigation component
│   │   ├── Hero.jsx      # Hero section
│   │   ├── About.jsx     # About section
│   │   ├── FocusAreas.jsx # Focus areas section
│   │   ├── Projects.jsx  # Projects showcase
│   │   ├── News.jsx      # News and updates
│   │   ├── Values.jsx    # Core values
│   │   ├── Contact.jsx   # Contact form
│   │   └── Footer.jsx    # Footer component
│   ├── lib/
│   │   └── utils.js      # Utility functions
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/
│   ├── cad-logo.jpg      # Organization logo
│   ├── home.jpeg         # Hero background
│   ├── energy.jpg        # Energy focus area
│   ├── trees.jpg         # Conservation focus area
│   └── agri.jpg          # Agriculture focus area
└── package.json
```

## 🎨 Sections

1. **Hero**: Eye-catching landing section with call-to-action
2. **About**: Organization overview with key statistics
3. **Focus Areas**: Three main areas of work with SDG alignment
4. **Projects**: Showcase of ongoing initiatives
5. **News**: Latest updates and achievements
6. **Values**: Core organizational values
7. **Contact**: Contact information and message form
8. **Footer**: Quick links and additional information

## 🌟 Key Features

- **Real Email Integration**: Contact form sends actual emails using EmailJS
- **Smooth Navigation**: Scroll-based navigation with active link highlighting
- **Mobile Responsive**: Fully responsive design with mobile menu
- **Interactive UI**: Cards with hover effects and smooth animations
- **Form Validation**: Client-side validation with error handling
- **Professional Design**: Modern color scheme aligned with environmental focus
- **Optimized Performance**: Fast loading with Vite build optimization

## 📝 Customization

To customize the content:
1. **Components**: Edit component files in `src/components/`
2. **Images**: Update images in the `public/` directory
3. **Colors**: Modify colors in `tailwind.config.js`
4. **Animations**: Adjust animations in `src/index.css`
5. **Email Recipient**: Change the email address in `src/components/Contact.jsx` (line 74)
6. **Content**: Update text, stats, and project information in respective components

## 📧 Email Configuration

The contact form uses EmailJS to send real emails. To set it up:

1. Follow the detailed guide in [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)
2. Update the `.env` file with your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. The recipient email is set to `hanifamakunganya252@gmail.com` (configurable in Contact.jsx)

## 🚀 Deployment

The site can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📄 License

© 2024 Community Action for Development (CAD). All rights reserved.

## 📞 Contact

- **Email**: info@cadmalawi.org
- **Phone**: +265 999 750 595 / +265 888 604 068
- **Location**: Lilongwe, Malawi
