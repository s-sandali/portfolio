# Sandali's Portfolio

A beautiful, responsive portfolio website built with React, Tailwind CSS, and modern animations. Features smooth scrolling, GSAP animations, and a creative design using gray and purple color palettes.

## ✨ Features

- **Responsive Design**: Mobile-first approach with perfect desktop and mobile experience
- **Smooth Animations**: GSAP and Framer Motion animations for engaging user experience
- **Modern UI**: Clean, professional design with glass morphism effects
- **Easy Customization**: Simple JSON configuration for all content
- **Contact Form**: Working contact form with validation and success states
- **Smooth Scrolling**: Custom scroll behavior with animated scroll-to-top button
- **Performance Optimized**: Fast loading with optimized animations

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sandali-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open https://portfolio-six-kappa-ztgmtx38q5.vercel.app/ to view it in the browser.

## 🎨 Customization

### Personal Information

Edit `src/data/portfolio.json` to customize your personal information:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Your bio description",
    "location": "Your Location",
    "email": "your.email@example.com",
    "phone": "+94 (555) 123-4567",
    "photo": "/your-photo.jpg"
  }
}
```

### Social Links

Update your social media links:

```json
{
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername"
  }
}
```

### Skills

Customize your skills by editing the skills section:

```json
{
  "skills": {
    "frontend": ["React", "Vue.js", "JavaScript", "TypeScript"],
    "backend": ["Node.js", "Express", "Python", "Django"],
    "tools": ["Git", "Docker", "AWS", "Figma"],
    "other": ["UI/UX Design", "Responsive Design", "REST APIs"]
  }
}
```

### Projects

Add or modify your projects:

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Project description",
      "image": "/project-image.jpg",
      "technologies": ["React", "Node.js", "MongoDB"],
      "github": "https://github.com/yourusername/project",
      "live": "https://project-demo.com",
      "featured": true
    }
  ]
}
```

### Certificates

Add your certifications:

```json
{
  "certificates": [
    {
      "id": 1,
      "title": "Certificate Name",
      "issuer": "Issuing Organization",
      "date": "2023",
      "image": "/certificate-image.jpg",
      "url": "https://certificate-url.com"
    }
  ]
}
```

## 🎯 Sections

### Hero Section
- Animated name display with GSAP
- Social media links
- Smooth scroll indicator

### About Section
- Personal photo (placeholder included)
- Bio and contact information
- Download CV button

### Skills Section
- Categorized skills with progress bars
- Animated skill cards
- Technical proficiency charts

### Projects Section
- Filterable project grid
- Project cards with hover effects
- Live and GitHub links

### Certificates Section
- Certificate showcase
- Achievement statistics
- Professional credentials

### Contact Section
- Working contact form
- Contact information
- Social media links

## 🎨 Design Features

### Color Palette
- **Primary**: Purple (#8b5cf6, #a855f7)
- **Secondary**: Gray (#6b7280, #9ca3af)
- **Background**: Gradient combinations

### Animations
- GSAP timeline animations
- Framer Motion hover effects
- Scroll-triggered animations
- Smooth page transitions

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Flexible grid layouts
- Touch-friendly interactions

## 📱 Mobile Responsiveness

The portfolio is fully responsive with:
- Mobile-optimized navigation
- Touch-friendly buttons and links
- Responsive typography
- Optimized spacing for small screens

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **GSAP** - Advanced animations
- **Framer Motion** - React animations
- **Lucide React** - Icons
- **React Intersection Observer** - Scroll animations

## 📝 Customization Tips

### Adding Your Photo
1. Place your photo in the `public` folder
2. Update the `photo` field in `portfolio.json`
3. The About section will automatically display your photo

### Changing Colors
1. Edit the color values in `tailwind.config.js`
2. Update gradient classes in components
3. Modify CSS custom properties in `index.css`

### Adding New Sections
1. Create a new component in `src/components/`
2. Add it to `App.js`
3. Update navigation links

### Custom Animations
1. Add new keyframes in `tailwind.config.js`
2. Create custom animation classes in `index.css`
3. Use GSAP for complex animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request


## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [GSAP](https://greensock.com/gsap/)
- UI components inspired by modern design trends

---

**Made with ❤️ by Sandali**
