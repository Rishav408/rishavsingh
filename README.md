# Rishav Singh — AI Systems Engineer Portfolio

A premium, multi-page portfolio website showcasing 14 AI and ML projects. Built from scratch with zero frameworks — pure HTML5, CSS3, and Vanilla JavaScript. Features cinematic 3D animations, a dual dark/light theme, and a bento-grid hero section.

**Live Website**: [https://rishavsingh4805.web.app](https://rishavsingh4805.web.app)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Pages & Sections](#pages--sections)
- [Projects](#projects)
- [Certifications](#certifications)
- [Setup](#setup)
- [Deployment](#deployment)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Contact](#contact)

---

## 🎯 Overview

This portfolio is a **fully handcrafted, framework-free** website for an AI Systems Engineer. It features:

- **4 interconnected pages** — Home, About, Projects, Contact
- **14 projects** spanning NLP, Computer Vision, Healthcare AI, and Web
- **Dual theme** — Dark (warm layered) and Light (parchment + amber accents) with smooth toggle
- **Cinematic 3D effects** — Mouse-follow tilt, parallax hero grid, scroll-driven 3D reveals, modal panel swings
- **Bento-grid hero** — Identity card, terminal readout, and status stats with 3D depth layering
- **Project modal** — Rich detail view with architecture diagrams, tech stack, and differentiators
- **Certifications carousel** — 8 certificates in a 4-page card carousel with dot and arrow navigation
- **Contact form** — Formspree-powered with validation and loading states
- **Scroll progress bar** — Gradient bar at the top of every page
- **Cursor trail glow** — Subtle spotlight following the mouse in the hero section

---

## ✨ Features

### Layout & Navigation
- **Fixed top header** with frosted-glass scroll effect and smooth transitions
- **Responsive navigation** — Desktop links + hamburger menu with full-screen overlay on mobile
- **Multi-page routing** — Clean file-based navigation between Home, About, Projects, Contact

### Visual Effects
- **3D perspective system** — `perspective: 1400px` on bento grid, `1200px` on project grids
- **Mouse-follow tilt** — Project cards (8°), spec cards (6°), flagship cards (4°), about photo (10°)
- **Hero parallax** — Entire bento grid tilts up to 3° based on cursor position
- **3D scroll reveals** — Elements enter with `rotateX(4deg) + scale(0.97)`, staggered by 60–100ms
- **Grid assembly animation** — Cards fly in from left/bottom/right angles simultaneously
- **Modal swing entrance** — `rotateX(-5deg) scale(0.9)` → flat, like a physical panel
- **Architecture diagram depth** — Pipeline steps at alternating Z-offsets for volumetric illusion
- **Tech pills spring pop-in** — `cubic-bezier(0.34, 1.56, 0.64, 1)` with stagger
- **Cert carousel 3D slide** — `translateX(60px) + rotateY(-6deg)` transitions
- **Timeline sphere markers** — 3D ball with `translateZ(8px)` pop on hover
- **Cursor trail glow** — Radial gradient with 8% lerp, dark mode only

### Theme System
- **Dark mode** — Warm layered palette (`#0E1117` base, `#161B22` surface, `#C8F04D` accent)
- **Light mode** — Parchment + amber (`#F4F3EE` base, `#FFFFFF` cards, `#CCFF00` accent)
- **Smooth transitions** — 350ms ease-in-out on all color properties
- **Persistence** — `localStorage` remembers preference across pages and sessions
- **`prefers-reduced-motion`** — All animations disabled, elements visible instantly

---

## 🛠 Technology Stack

| Component | Technology |
|-----------|-----------|
| **Core** | HTML5, CSS3, Vanilla JavaScript (ES6 modules) |
| **Fonts** | Clash Display (Fontshare), Outfit, Space Mono (Google Fonts) |
| **Icons** | FontAwesome 6.5.1 |
| **Particles** | Custom HTML5 Canvas 2D (no library) |
| **Form Backend** | Formspree |
| **Hosting** | Firebase Hosting |
| **Dependencies** | Zero — no frameworks, no libraries |

---

## 📁 Project Structure

```
rishavsingh/
├── .gitignore                          # Comprehensive ignore rules
├── README.md                           # This file
├── public/
│   ├── index.html                      # Home page — hero bento, specializations, featured projects
│   ├── about.html                      # About page — bio, skills, education, certifications, philosophy
│   ├── projects.html                   # Projects page — filterable grid + detail modal
│   ├── contact.html                    # Contact page — links, form, FAQ
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css               # ~3500 lines — full design system + 3D effects + light theme
│   │   ├── js/
│   │   │   ├── main.js                 # Theme toggle, scroll reveal, 3D tilt, cursor glow, progress bar
│   │   │   └── projects.js             # JSON-driven project rendering + modal + 3D card tilt
│   │   └── img/
│   │       ├── Rlogo.jpg               # Site favicon
│   │       ├── hero-img.jpg            # Hero background photo
│   │       ├── rks.jpg                 # About page profile photo
│   │       ├── RAS.jpg                 # Alternate profile photo
│   │       └── Rishav-Resume.pdf       # Résumé download
│   └── data/
│       └── projects.json               # 14 projects with full metadata
```

---

## 🎨 Design System

### Dark Mode Palette

```
Background:      #0E1117  (warm dark — GitHub-style)
Surface:         #161B22  (cards, panels)
Elevated:        #1C2128  (hover, raised)
Overlay:         #21262D  (modals, dropdowns)
Accent:          #C8F04D  (electric lime)
Accent Dim:      rgba(200,240,77,0.12)
Text Primary:    #EDF0F7
Text Secondary:  #8A92A6
Text Muted:      #4D566B
```

### Light Mode Palette

```
Background:      #F4F3EE  (parchment)
Surface:         #FFFFFF  (clean cards)
Elevated:        #EDECE6  (warm lift)
Overlay:         #E5E3DC  (soft neutral)
Accent:          #CCFF00  (electric lime — same as dark)
Accent Dim:      rgba(200,240,77,0.12)
Text Primary:    #000000  (pure black)
Text Secondary:  #F9FAFB  (off-white)
Text Muted:      #D1D5DB  (light grey)
```

### Typography

- **Display**: Clash Display 700 — hero name, section headings
- **Body**: Outfit 300–600 — body text, descriptions
- **Mono**: Space Mono 400/700 — labels, tags, terminal, metadata
- **Base size**: 16px

### Spacing Scale

`0.25rem · 0.5rem · 0.75rem · 1rem · 1.5rem · 2rem · 3rem · 4.5rem · 6rem`

### Transitions

```
Fast:    150ms
Base:    280ms
Slow:    500ms
Theme:   350ms ease-in-out
Easing:  cubic-bezier(0.16, 1, 0.3, 1)  /* ease-out */
         cubic-bezier(0.4, 0, 0.2, 1)   /* ease-in-out */
```

---

## 📄 Pages & Sections

### 1. Home (`index.html`)
- **Bento-grid hero** — 3-cell layout: identity card, terminal readout, status stats
- **3D depth layers** — Main cell at `translateZ(30px)`, terminal at `15px`, status at `5px`
- **Hero photo** — `hero-img.jpg` at 90% opacity with dark gradient overlay for text readability
- **Specializations** — 3 cards: Generative AI & LLMs, Computer Vision, ML Systems & Infra
- **Featured projects** — 2 flagship cards (Justify-AI, Local AI Dashcam) — clickable → modal
- **About teaser** — Bio, education card, certification cards
- **Final CTA** — Centered call-to-action with links

### 2. About (`about.html`)
- **Page header** — Eyebrow, title, description
- **Bio section** — 3-paragraph story covering 5 domains of work
- **Skills grid** — 6 categories: Languages, ML & AI, LLM & GenAI, Infrastructure, Data Science, Currently Learning
- **Education timeline** — B.Tech CSE (AI & DS), Higher Secondary
- **Certifications carousel** — 8 certificates in 4 pairs, navigable by dots and arrows
- **Philosophy cards** — 3 principles: Explainability over black boxes, Offline-first privacy, Zero-framework
- **CTA** — "Want to work together?"

### 3. Projects (`projects.html`)
- **Page header** — "14 projects. All shipped."
- **Filter bar** — All (14) · AI / ML · Web · Applications
- **Single grid** — 14 project cards in a 3-column responsive grid
- **Project modal** — Opens on card click with:
  - Category, title
  - Problem & concept
  - System architecture with visual pipeline diagram
  - Tech stack (spring-animated pills)
  - Key differentiators (staggered slide-in)
  - GitHub link

### 4. Contact (`contact.html`)
- **Page header** — "Let's build something worth building."
- **Direct channels** — Email, GitHub, LinkedIn, X, Location
- **Résumé download** — PDF link
- **Contact form** — Formspree-powered with validation, loading spinner, success/error states
- **FAQ accordion** — 4 expandable questions about roles, remote work, freelance, response time

---

## 🚀 Projects

| # | Title | Category | Tech |
|---|-------|----------|------|
| 1 | **Justify-AI** – Explainable Hate Analysis | AI / ML | NLTK, scikit-learn, FastAPI, Multilingual NLP |
| 2 | **Local AI Dashcam** – Incident Explainer | AI / ML | YOLO11, SORT, OpenCV, Ollama, MiniCPM-V, Mistral 7B |
| 3 | **VaniCure** – AI Respiratory Diagnostics | Applications | React, TypeScript, FastAPI, PyTorch, CNN-BiLSTM |
| 4 | **Urban Hive** – Housing Society Management | Web | HTML5, CSS3, Vanilla JS, CSS Variables |
| 5 | **NyayaAI** – AI Legal Assistant | AI / ML | LangChain, RAG, Flask, Vector DB |
| 6 | **ResolvAI** – Offline AI System | AI / ML | Ollama, LangChain, Flask, Local LLMs |
| 7 | **BharatNiti** – Leadership Sim | AI / ML | Flask, NewsAPI, LLaMA, Ollama |
| 8 | **Bias Detection AI** | AI / ML | BERT, Wav2Vec, OpenPose, Multimodal Fusion |
| 9 | **FaceMark** – Attendance System | AI / ML | OpenCV, Haar Cascade, LBPH, Flask |
| 10 | **India Economic Dashboard** | Applications | Pandas, NumPy, Streamlit, Plotly, ETL |
| 11 | **MarvelTimeVault** | Web | GSAP, ScrollTrigger, Tailwind, Vanilla JS |
| 12 | **BMMCT** – Community Platform | Web | HTML, CSS, JavaScript, Firebase Hosting |
| 13 | **Pal Classes** – Learning Platform | Web | HTML, CSS, JavaScript, Responsive Design |
| 14 | **Godfather Chatbot** | AI / ML | LLaMA 3, Ollama, LangChain, Prompt Engineering |

---

## 🏆 Certifications

| Certificate | Issuer | Year |
|-------------|--------|------|
| AI Fluency for Students | Anthropic | 2026 |
| Claude Code in Action | Anthropic | 2026 |
| Artificial Intelligence Fundamentals | IBM SkillsBuild | 2025 |
| Foundation Introduction to LangChain — Python | — | — |
| Critical Thinking & Problem Solving | — | — |
| Teamwork & Collaboration | — | — |
| Introduction to Social-Emotional Learning (SEL) | — | — |
| Measuring Sustainable Development | — | — |

---

## ⚙️ Setup

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rishav408/rishavsingh.git
   cd rishavsingh
   ```

2. **Open in browser**
   ```bash
   # Using Python
   python -m http.server 8000 --directory public

   # Using Node.js
   npx serve public

   # Or simply open public/index.html
   ```

3. **Navigate to** `http://localhost:8000`

No build step, no dependencies, no `npm install`. Just open and run.

---

## 🔥 Deployment

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Deploy
firebase deploy --only hosting
```

### Automated Deploy (Windows)

```powershell
.\deploy.ps1
```

### Live URLs
- **Primary**: [https://rishavsingh4805.web.app](https://rishavsingh4805.web.app)
- **Alternative**: [https://rishavsingh4805.firebaseapp.com](https://rishavsingh4805.firebaseapp.com)

---

## 🎨 Customization

### Updating Project Data
Edit `public/data/projects.json`. Each project has:
```json
{
  "id": 1,
  "title": "Project Name",
  "category": "ai | web | app",
  "tags": ["Tag1", "Tag2"],
  "image": "https://...",
  "description": "One-liner",
  "concept": "Full paragraph",
  "architecture": "Description",
  "archSteps": [{ "icon": "fa-icon", "label": "Step Name" }],
  "techStack": ["Tech1", "Tech2"],
  "differentiators": ["Point 1", "Point 2"],
  "github": "https://github.com/..."
}
```

### Changing Colors
Edit CSS custom properties in `style.css`:
```css
:root { /* dark mode */
  --bg-base: #0E1117;
  --accent: #C8F04D;
}
[data-theme="light"] { /* light mode */
  --bg-base: #F4F3EE;
  --accent: #CCFF00;
}
```

### Updating Personal Info
- **Name/bio**: `index.html` hero section
- **About text**: `about.html` bio section
- **Skills**: `about.html` skills grid
- **Education**: `about.html` timeline
- **Contact info**: All pages (header nav, contact page, footer)

---

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Latest 2 versions ✅ |
| Firefox | Latest 2 versions ✅ |
| Safari | Latest 2 versions ✅ |
| Edge | Latest 2 versions ✅ |
| IE 11 | ❌ Not supported |

Requires: ES6 modules, CSS custom properties, `IntersectionObserver`, `backdrop-filter`.

---

## 📱 Responsive Breakpoints

```
Desktop:    > 1024px — full bento grid, 3-column project grid
Tablet:     768–1024px — 2-column bento, 2-column projects
Mobile:     < 768px — single column, hamburger menu, full-screen nav
```

---

## 📧 Contact

**Rishav Singh**
- **Email**: rishav4805@gmail.com
- **LinkedIn**: [linkedin.com/in/rishavsingh408](https://linkedin.com/in/rishavsingh408)
- **GitHub**: [github.com/Rishav408](https://github.com/Rishav408)
- **X / Twitter**: [@RishavSingh408](https://x.com/RishavSingh408)
- **Location**: Pune, Maharashtra, India · UTC+5:30

---

**Built with zero frameworks. Pure HTML, CSS, and JavaScript.**

**Live at**: [https://rishavsingh4805.web.app](https://rishavsingh4805.web.app)

*Last Updated: April 4, 2026*
