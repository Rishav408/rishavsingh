# Portfolio Website - Rishav Singh

A modern, responsive portfolio website built with HTML5, CSS3, and Vanilla JavaScript. This project showcases a clean, professional design inspired by contemporary portfolio websites, featuring smooth animations, interactive elements, and a cohesive visual identity.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Sections](#sections)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Credits](#credits)

## 🎯 Overview

This portfolio website is a single-page application (SPA) designed to showcase skills, projects, and professional experience in the field of Data Science, Machine Learning, and AI. The website features a fixed sidebar navigation, smooth scroll animations, Firebase-powered contact form, and a fully responsive design that works seamlessly across all devices.

**Live Website**: [https://rishavsingh4805.web.app](https://rishavsingh4805.web.app)  
**Alternative URL**: [https://rishavsingh4805.firebaseapp.com](https://rishavsingh4805.firebaseapp.com)  
**Firebase Project**: rishavsingh4805

### Key Highlights
- 🎨 Modern, responsive design with smooth animations
- 🔥 Firebase Firestore integration for contact form
- 📱 Mobile-first approach with hamburger menu
- 🚀 Deployed on Firebase Hosting with automatic HTTPS
- ⚡ Lightweight and fast-loading (~730 KB total)
- 🔒 Secure with Firestore security rules

## ✨ Features

### Core Features
- **Fixed Sidebar Navigation** - Persistent navigation menu with smooth scroll-to-section functionality
- **Responsive Design** - Mobile-first approach with hamburger menu for smaller screens
- **Typed.js Integration** - Dynamic typing effect in the hero section
- **AOS Animations** - Scroll-triggered animations for enhanced user experience
- **Portfolio Filtering** - Interactive project filtering system (All, AI/ML, Web, Applications)
- **Firebase Contact Form** - Real-time form submissions stored in Firestore with validation
- **Scroll-to-Top Button** - Appears after scrolling 100px down

### Visual Features
- **Consistent Color Scheme** - Alternating white and light gray backgrounds
- **Smooth Transitions** - All interactive elements feature smooth hover effects
- **Professional Typography** - Google Fonts (Raleway for headings, Open Sans for body)
- **Icon Integration** - FontAwesome 6 icons throughout
- **Card-Based Layout** - Clean card designs for interests, projects, and timeline items

## 🛠 Technology Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| **Core** | HTML5, CSS3, Vanilla JavaScript | - |
| **CSS Framework** | Bootstrap 5 | 5.3.2 |
| **Icons** | FontAwesome | 6.5.1 |
| **Animations** | AOS (Animate On Scroll) | 2.3.1 |
| **Typing Effect** | Typed.js | 2.1.0 |
| **Fonts** | Google Fonts | - |
| **Backend** | Firebase Firestore | 10.7.1 |
| **Hosting** | Firebase Hosting | - |

### CDN Links Used
```html
<!-- Bootstrap 5 -->
https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css

<!-- FontAwesome 6 -->
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css

<!-- AOS -->
https://unpkg.com/aos@2.3.1/dist/aos.css

<!-- Typed.js -->
https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js

<!-- Google Fonts -->
https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Raleway:wght@400;500;600;700;800&display=swap

<!-- Firebase SDK -->
https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js
https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js
```

## 📁 Project Structure

```
rishavsingh/
├── index.html                    # Main HTML file
├── README.md                     # Project documentation
├── FIREBASE_REFERENCE.md         # Complete Firebase guide
├── assets/
│   ├── css/
│   │   └── style.css            # Custom CSS with design tokens
│   ├── js/
│   │   └── main.js              # JavaScript for interactivity
│   └── img/
│       ├── RAS.jpg              # Profile photo
│       └── Rishav Resume.pdf    # Resume PDF
├── firebase.json                 # Firebase Hosting configuration
├── .firebaserc                   # Firebase project configuration
├── firestore.rules               # Firestore security rules
└── deploy.ps1                    # Automated deployment script
```

### File Descriptions

**Production Files**:
- `index.html` - Main website with all sections
- `assets/css/style.css` - Complete styling with design system
- `assets/js/main.js` - All JavaScript functionality including Firebase integration
- `assets/img/` - Profile photo and resume

**Firebase Configuration**:
- `firebase.json` - Hosting configuration with caching rules
- `.firebaserc` - Links to Firebase project (rishavsingh4805)
- `firestore.rules` - Security rules for database protection
- `deploy.ps1` - Automated deployment script for Windows

**Documentation**:
- `README.md` - This file, project overview and setup
- `FIREBASE_REFERENCE.md` - Complete Firebase integration guide
```

## 🎨 Design System

### Color Palette

```css
--primary-accent: #0563AF;        /* Primary blue */
--primary-accent-dark: #044b85;   /* Darker blue for hovers */
--primary-accent-light: #0a7fd4;  /* Lighter blue for gradients */
--heading-color: #45505b;         /* Charcoal for headings */
--body-text: #272829;             /* Near-black for body text */
--text-muted: #6c757d;            /* Gray for secondary text */
--background-main: #ffffff;       /* Pure white */
--background-alt: #f5f6f7;        /* Light gray for alternating sections */
--border-color: #e0e0e0;          /* Light gray for borders */
```

### Typography

- **Primary Font**: Raleway (Headings) - Weights: 400, 500, 600, 700, 800
- **Secondary Font**: Open Sans (Body) - Weights: 300, 400, 600, 700
- **Base Font Size**: 16px
- **Line Height**: 1.6

### Spacing

- **Section Padding**: 60px vertical
- **Card Padding**: 35px (interest cards), 20px (portfolio/timeline cards)
- **Border Radius**: 4px (small), 8px (medium), 16px (large), 50% (full circle)

### Shadows

```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12);
```

## 📄 Sections

### 1. **Hero Section**
- Large name display
- Typed.js effect with rotating titles:
  - Data Scientist
  - Machine Learning Engineer
  - AI Researcher
  - Deep Learning Enthusiast
- Social media links
- Call-to-action button

### 2. **Personal Details (About)**
- Profile image
- Professional bio (3 paragraphs)
- Key information cards (Location, Email, Degree)
- Responsive 2-column layout

### 3. **Areas of Interest**
- 5 interest cards with icons:
  - Computer Vision
  - NLP (Natural Language Processing)
  - Machine Learning
  - Collaboration
  - Data Analytics
- Hover effects with top border animation

### 4. **Skills**
- Two categories:
  - Machine Learning / Deep Learning
  - Tools & Platforms
- Animated progress bars showing proficiency levels
- Skills include: Python (90%), ML Algorithms (85%), Computer Vision (80%), NLP (85%), GitHub (90%), Linux (75%), AWS (70%), Docker (65%)

### 5. **Resume**
- Two-column timeline layout
- **Education** section with academic background
- **Experience** section with professional roles
- Visual timeline with markers and connecting line

### 6. **Portfolio**
- Filter buttons (All, AI/ML, Web, Applications)
- 6 project cards with:
  - Project images from Unsplash
  - Titles and descriptions
  - Hover overlay with action buttons
  - Category tags
- Projects featured:
  - Advanced RAG Project
  - Re-Enhance AI
  - VizDoom RL
  - Heart Attack Prediction
  - QA Summarization
  - Fire & Smoke Detection

### 7. **Contact**
- Contact information cards (Location, Email, LinkedIn, Phone)
- **Firebase-Powered Contact Form** with:
  - Name field
  - Email field (with format validation)
  - Subject field
  - Message textarea
  - Real-time Firebase Firestore integration
  - Loading states with spinner animation
  - Success/error feedback messages
  - Automatic form reset after submission
- All submissions stored securely in Firebase Firestore
- View submissions in Firebase Console

### 8. **Footer**
- Copyright notice with dynamic year
- Social media links

## 🚀 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.) for customization

### Steps

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open the Project**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using VS Code Live Server extension
     Right-click index.html → Open with Live Server
     ```

3. **View the Website**
   - Navigate to `http://localhost:8000` (or the appropriate port)
   - The website should load with all features functional

## 🔥 Firebase Deployment

This project is configured for deployment on Firebase Hosting with Firestore database integration.

### Prerequisites

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login
```

### Deployment Steps

#### 1. Deploy Firestore Security Rules (CRITICAL!)

Before deploying the website, you **must** deploy the security rules:

```bash
firebase deploy --only firestore:rules
```

This protects your database from unauthorized access.

#### 2. Deploy Website to Firebase Hosting

```bash
firebase deploy --only hosting
```

Or deploy everything at once:

```bash
firebase deploy
```

#### 3. Using the Deployment Script

For automated deployment on Windows:

```powershell
.\deploy.ps1
```

### Live URLs

After deployment, your site will be available at:
- **Primary**: https://rishavsingh4805.web.app
- **Alternative**: https://rishavsingh4805.firebaseapp.com

### Firebase Console

Manage your project at:
- **Console**: https://console.firebase.google.com/project/rishavsingh4805
- **Firestore Database**: View contact form submissions
- **Hosting**: Manage deployments and view analytics

### Post-Deployment Checklist

- [ ] Visit live site and test all functionality
- [ ] Submit test contact form
- [ ] Verify submission appears in Firestore Console
- [ ] Test on mobile devices
- [ ] Check all links work correctly
- [ ] Verify SSL certificate (automatic with Firebase)

For detailed Firebase setup and troubleshooting, see `FIREBASE_REFERENCE.md`.

## 💡 Usage

### Navigation
- Click on any menu item in the sidebar to smoothly scroll to that section
- On mobile devices, click the hamburger menu icon to open the navigation

### Portfolio Filtering
- Click on filter buttons (All, AI/ML, Web, Applications) to filter projects
- Projects will animate in/out based on the selected category

### Contact Form
- Fill out all required fields
- Email validation ensures proper email format
- Submit button triggers client-side validation
- Success/error messages appear below the form

### Scroll-to-Top
- Scroll down the page to reveal the floating button in the bottom-right
- Click to smoothly scroll back to the top

## 🎨 Customization

### Updating Personal Information

1. **Name and Title**
   ```html
   <!-- In index.html, line ~109 -->
   <h1 class="hero__title">Your Name</h1>
   ```

2. **Typed.js Strings**
   ```javascript
   // In assets/js/main.js, line ~18
   strings: [
     'Your Title 1',
     'Your Title 2',
     'Your Title 3',
     'Your Title 4'
   ],
   ```

3. **Profile Images**
   ```html
   <!-- Replace the UI Avatars API URLs with your own images -->
   <img src="path/to/your/image.jpg" alt="Your Name">
   ```

4. **Bio Content**
   - Edit the `<p class="about__bio">` paragraphs in the About section

5. **Skills and Percentages**
   ```html
   <!-- Update skill names and percentages -->
   <span class="skill__name">Your Skill</span>
   <span class="skill__value">95%</span>
   <div class="skill__progress" style="width: 95%"></div>
   ```

6. **Projects**
   - Replace project images, titles, descriptions, and links
   - Update `data-category` attribute for filtering

7. **Social Media Links**
   ```html
   <!-- Update href attributes throughout -->
   <a href="https://linkedin.com/in/yourprofile" target="_blank">
   ```

### Changing Colors

Edit the CSS custom properties in `assets/css/style.css`:

```css
:root {
  --primary-accent: #YOUR_COLOR;
  --heading-color: #YOUR_COLOR;
  /* ... other variables */
}
```

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `assets/css/style.css`
3. Add navigation link in the sidebar
4. Update JavaScript in `main.js` if needed for interactivity

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| Opera | Latest 2 versions |

**Note**: Internet Explorer is not supported due to the use of modern CSS features and ES6 JavaScript.

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1200px) { /* Sidebar visible */ }

/* Tablet */
@media (max-width: 1199px) { /* Hamburger menu */ }
@media (max-width: 991px) { /* Adjusted layouts */ }

/* Mobile */
@media (max-width: 767px) { /* Single column */ }
@media (max-width: 576px) { /* Compact spacing */ }
```

## 🔧 JavaScript Features

### Implemented Functions

1. **initTypedJS()** - Initializes the typing animation
2. **initAOS()** - Configures scroll animations
3. **initMobileMenu()** - Handles mobile menu toggle
4. **initSmoothScroll()** - Enables smooth scrolling to sections
5. **initScrollToTop()** - Shows/hides scroll-to-top button
6. **initActiveNavLink()** - Highlights active section in navigation
7. **initPortfolioFilters()** - Handles project filtering
8. **initContactForm()** - Validates and handles form submission
9. **animateSkillBars()** - Animates skill progress bars on scroll

## 📝 SEO Best Practices

The website includes:
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Descriptive meta tags (description, keywords, author)
- Proper heading hierarchy (H1 → H2 → H3 → H4)
- Alt text for images
- Unique page title
- Clean, readable URLs (when deployed)

## 🎯 Performance Optimizations

- **CDN Usage**: All libraries loaded from CDNs for faster delivery
- **Deferred Scripts**: JavaScript files loaded with `defer` attribute
- **CSS Transitions**: Hardware-accelerated transforms for smooth animations
- **Lazy Loading**: AOS animations trigger only when elements enter viewport
- **Minimal Dependencies**: Only essential libraries included

## 🐛 Known Issues

None at this time. If you encounter any issues, please report them.

## 🔮 Future Enhancements

Potential improvements for future versions:
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Blog section integration
- [ ] Backend integration for contact form
- [ ] Project detail modal popups
- [ ] Testimonials section
- [ ] Skills certification badges
- [ ] Analytics integration (Google Analytics)
- [ ] Progressive Web App (PWA) features

## 📄 License

This project is open source and available for personal and commercial use. Feel free to customize it for your own portfolio.

## 🙏 Credits

### Design Inspiration
- Reference website: [suryatejamenta.co.in](https://suryatejamenta.co.in/)

### Libraries & Frameworks
- [Bootstrap 5](https://getbootstrap.com/) - CSS Framework
- [FontAwesome](https://fontawesome.com/) - Icon Library
- [AOS](https://michalsnik.github.io/aos/) - Scroll Animations
- [Typed.js](https://mattboldt.com/demos/typed-js/) - Typing Animation
- [Google Fonts](https://fonts.google.com/) - Web Fonts
- [Firebase](https://firebase.google.com/) - Backend & Hosting

### Images
- Project images from [Unsplash](https://unsplash.com/)

## 📧 Contact

**Rishav Singh**
- **Email**: rishav4805@gmail.com
- **LinkedIn**: [linkedin.com/in/rishavsingh408](https://linkedin.com/in/rishavsingh408)
- **GitHub**: [github.com/Rishav408](https://github.com/Rishav408)
- **Twitter**: [@RishavSingh408](https://x.com/RishavSingh408)
- **Instagram**: [@rsinghm85](https://www.instagram.com/rsinghm85)
- **Location**: Pune, Maharashtra, India

---

**Built with ❤️ using HTML, CSS, JavaScript, and Firebase**

**Live at**: [https://rishavsingh4805.web.app](https://rishavsingh4805.web.app)

*Last Updated: December 28, 2025*
