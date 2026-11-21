# Rishav Singh — Portfolio Website

Personal portfolio website for Rishav Singh, AI & GenAI Engineer with a Data Analysis specialty, built with React 18, Vite, Tailwind CSS v4, and Framer Motion. Hosted on Firebase Hosting.

## Tech Stack
- **Framework:** React 18
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Hosting:** Firebase Hosting

## Project Structure
```
rishavsingh/
├── old-website/              # Archived static HTML/CSS/JS portfolio
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx    # Sticky navigation with theme toggle & status
│   │   │   ├── Footer.jsx    # Footer with dynamic year & verified links
│   │   │   └── Layout.jsx    # Dark/light theme provider & shell
│   │   ├── sections/
│   │   │   ├── Hero.jsx      # Headline, verified stats, target roles
│   │   │   ├── Projects.jsx  # Interactive filterable grid & modal integration
│   │   │   ├── Research.jsx  # Accepted IEEE conference paper showcase
│   │   │   ├── About.jsx     # Background, personal facts, verified CGPA
│   │   │   ├── Skills.jsx    # Verified skills grouped by capability
│   │   │   └── Contact.jsx   # Contact channels & outreach form
│   │   ├── ui/
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectModal.jsx # Deep-dive modal with architecture steps
│   │   │   ├── Badge.jsx
│   │   │   └── Tag.jsx
│   │   └── writing/
│   │       ├── WritingList.jsx
│   │       └── WritingArticle.jsx
│   ├── pages/
│   │   ├── Home.jsx          # One-page portfolio view
│   │   └── Writing.jsx       # Technical articles & paper notes
│   ├── docs/                 # Data / Content layer
│   │   ├── projects.json     # Source of truth for 18 projects
│   │   ├── writing.json      # Technical writeups
│   │   ├── skills.json       # Skills by category
│   │   └── about.md          # Personal background documentation
│   ├── assets/
│   │   ├── img/              # Images, profile pictures, and latest Resume PDF
│   │   └── css/              # Tailwind CSS styles and custom utilities
│   ├── hooks/
│   │   └── useProjects.js    # Filter and search state hook
│   ├── App.jsx               # Route definitions
│   └── main.jsx              # React DOM root
├── public/                   # Static assets & favicon
├── .firebaserc               # Firebase project configuration
├── firebase.json             # Firebase hosting configuration (dist directory)
├── package.json              # Project dependencies and scripts
└── vite.config.js            # Vite build configuration
```

## Local Development
```bash
npm install
npm run dev
```

## Production Build & Deploy
```bash
npm run build
firebase deploy
```
