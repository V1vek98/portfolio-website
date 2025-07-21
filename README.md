# Senior Data Analyst Portfolio Website

A modern, responsive portfolio website built for showcasing data analytics skills, projects, and professional experience. Features smooth animations, clean design, and professional aesthetics.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Multi-page Navigation**: Organized into distinct sections (Home, Projects, Experience, Contact)
- **Interactive Elements**: Hover effects, smooth transitions, and engaging animations
- **Professional Aesthetics**: Carefully chosen color scheme and typography
- **Project Showcase**: Detailed project cards with filtering capabilities
- **Contact Form**: Functional contact form with validation
- **Skills Visualization**: Animated skill progress bars and technical competencies

## 🚀 Technology Stack

- **Frontend Framework**: React 19.1.0
- **Styling**: Tailwind CSS 4.1.11
- **Animations**: Framer Motion 12.19.2
- **Routing**: React Router DOM 7.6.3
- **Icons**: Lucide React 0.525.0
- **Build Tool**: Create React App

## 📁 Project Structure

```
portfolio-website/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.js          # Navigation component
│   ├── pages/
│   │   ├── Home.js            # About/Landing page
│   │   ├── Projects.js        # Projects showcase
│   │   ├── Experience.js      # Professional timeline
│   │   └── Contact.js         # Contact form and info
│   ├── App.js                 # Main app component
│   ├── index.js               # App entry point
│   └── index.css              # Global styles
├── tailwind.config.js         # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Color Palette
- **Primary**: #FFFFFF (White)
- **Background**: #F3F4F6 (Light Gray)
- **Text**: #111827 (Dark Gray)
- **Accent**: #3B82F6 (Blue)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   npm start -- --host 0.0.0.0 '(to run locally)'
   'CMD the below in a fresh shell'
   lt --port 3000 '(to share online)'
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📝 Customization Guide

### Personal Information
Update the following files with your personal information:

1. **Home.js**: Update name, bio, skills, and professional summary
2. **Projects.js**: Replace with your actual projects, technologies, and achievements
3. **Experience.js**: Add your work experience, education, and skills
4. **Contact.js**: Update contact information, social links, and availability

### Content Updates

#### Skills Section (Home.js)
```javascript
const skills = [
  { name: 'Your Skill', icon: YourIcon, level: 90 },
  // Add more skills
];
```

#### Projects (Projects.js)
```javascript
const projects = [
  {
    title: 'Your Project Title',
    category: 'Category',
    description: 'Project description...',
    technologies: ['Tech1', 'Tech2'],
    // Add project details
  }
];
```

#### Experience (Experience.js)
```javascript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Start - End Date',
    // Add experience details
  }
];
```

### Styling Customization

#### Colors (tailwind.config.js)
```javascript
colors: {
  primary: '#Your-Color',
  background: '#Your-Background',
  text: '#Your-Text-Color',
  accent: '#Your-Accent-Color',
}
```

#### Fonts (index.css)
```css
@import url('https://fonts.googleapis.com/css2?family=Your-Font:wght@300;400;500;600;700&display=swap');
```

## 🌐 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain (optional)

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect it's a React app
3. Deploy with default settings

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 📊 Performance Features

- **Code Splitting**: Automatic code splitting with React
- **Optimized Images**: Responsive image loading
- **Smooth Animations**: Hardware-accelerated animations with Framer Motion
- **SEO Friendly**: Semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support

## 🔧 Advanced Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add route in `App.js`
3. Update navigation in `Navbar.js`

### Custom Animations
Framer Motion examples used throughout:
```javascript
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
```

### Form Integration
To make the contact form functional:
1. Set up a backend service (Netlify Forms, Formspree, etc.)
2. Update the form action in `Contact.js`
3. Add proper validation and error handling

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help customizing the portfolio:
- Open an issue on GitHub
- Check the documentation
- Review the code comments for guidance

---

**Built with ❤️ for Data Professionals**

Showcase your data analytics expertise with this modern, professional portfolio website.
