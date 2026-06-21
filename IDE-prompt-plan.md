# IDE Prompt Plan — Portfolio Architecture Overhaul
**Keep:** Color palette (#F7F5F0 bg, #1A1A2E accent, Inter font, JetBrains Mono for tags)  
**Keep:** Single-page anchor scroll, no dark mode, no frameworks  
**Change:** Everything about layout, spacing, hierarchy, photo usage, section structure  

---

## CRITICAL RULES — READ BEFORE TOUCHING ANYTHING

```
DO NOT change these CSS variables:
  --bg: #F7F5F0
  --surface: #FFFFFF
  --text-primary: #111111
  --text-secondary: #6B6B6B
  --accent: #1A1A2E
  --accent-hover: #274472
  --border: #E5E2DC
  --font-sans: Inter
  --font-mono: JetBrains Mono

DO NOT add: animations heavier than opacity fade + translateY(12px)
DO NOT add: dark mode toggle, gradient backgrounds, glassmorphism, particles
DO NOT change: the single-page anchor navigation structure
DO NOT use: FontAwesome, any icon library — use inline SVGs only
```

---

## PHASE 1 — CSS ARCHITECTURE FIX (style.css)

### 1.1 Fix the layout container system

**Problem:** `--content-max: 1100px` but sections use `max-width: 720px` inconsistently. 
The nav spans 1100px but content sections are 720px — creates misaligned left edges everywhere.

**Fix:** Establish a strict two-width system:

```css
:root {
  --nav-max:     1100px;   /* nav + footer only */
  --content-max:  720px;   /* ALL section content */
  --pad-x:         24px;   /* mobile horizontal padding */
}

/* The single container used by ALL sections: */
.container {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--pad-x);
}

/* At ≥ 769px, remove horizontal padding (centered block handles it) */
@media (min-width: 769px) {
  .container { padding: 0; }
}

/* Nav gets its own wider container */
.nav__inner {
  max-width: var(--nav-max);
  margin: 0 auto;
  padding: 0 var(--pad-x);
}

/* Footer matches nav */
.footer__inner {
  max-width: var(--nav-max);
  margin: 0 auto;
  padding: 0 var(--pad-x);
}

/* Dividers span nav width, not content width */
hr.divider {
  max-width: var(--nav-max);
  margin: 0 auto;
  border: none;
  border-top: 1px solid var(--border);
}
```

### 1.2 Fix section spacing

```css
section {
  padding: 72px 0;
}

/* Hero gets more top padding because nav is sticky 60px */
.hero {
  padding: 80px 0 72px;
}

/* h2 section headings — tighter, more intentional */
h2 {
  font-size: 1.0625rem;       /* 17px — NOT big, deliberately understated */
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-tertiary); /* #AAAAAA — muted label, not headline */
  margin-bottom: 2rem;
}
```

**Rationale:** Section headings at 22px bold compete with content. 
Karpathy-style sites use small uppercase labels — the *content* is the headline.

### 1.3 Nav — make Resume button more refined

```css
.nav__resume {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--accent);
  padding: 0.375rem 0.875rem;
  border: 1px solid var(--border);
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  transition: border-color 0.15s ease, background-color 0.15s ease;
  letter-spacing: 0.01em;
}

.nav__resume:hover {
  border-color: var(--accent);
  background: rgba(26, 26, 46, 0.04);
}
```

### 1.4 Add these new utility CSS classes

```css
/* Photo styles */
.photo-circle {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

/* Subtle card — used in experience */
.card-subtle {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  transition: border-color 0.15s ease;
}
.card-subtle:hover {
  border-color: #CCCCCC;
}

/* Status badge */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--tag-bg);
  padding: 0.25rem 0.625rem;
  border-radius: 99px;
}

.badge--open {
  color: #2D6A4F;
  background: #D8F3DC;
}

/* Accent link — used inline in prose */
a.link-accent {
  color: var(--accent);
  text-decoration: underline;
  text-decoration-color: var(--border);
  text-underline-offset: 3px;
  transition: text-decoration-color 0.15s ease;
}
a.link-accent:hover {
  text-decoration-color: var(--accent);
}

/* Section intro text — used below h2 before main content */
.section-intro {
  font-size: 1.0625rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 600px;
}

/* Stat row — used in hero */
.stat-row {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-item__num {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
}

.stat-item__label {
  font-size: 0.75rem;
  color: var(--text-tertiary);
  letter-spacing: 0.04em;
}

/* Vertical spacer */
.stat-row__sep {
  width: 1px;
  height: 28px;
  background: var(--border);
}
```

### 1.5 Fix Experience section CSS

```css
.exp__list {
  display: flex;
  flex-direction: column;
  gap: 0;     /* no gap — borders handle separation */
}

.exp__item {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 1.25rem;
  padding: 1.75rem 0;
  border-bottom: 1px solid var(--border);
  align-items: start;
}

.exp__item:first-child { padding-top: 0; }
.exp__item:last-child  { border-bottom: none; padding-bottom: 0; }

/* Logo box — refined */
.exp__logo-box {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--surface);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 700;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
  flex-shrink: 0;
}

.exp__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.375rem;
  flex-wrap: wrap;
}

.exp__role {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.exp__period {
  font-size: 0.8125rem;
  color: var(--text-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
  padding-top: 2px;
}

.exp__company {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.exp__desc {
  font-size: 0.9375rem;
  color: var(--text-primary);
  line-height: 1.75;
}

/* Mobile: hide logo, collapse grid */
@media (max-width: 640px) {
  .exp__item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  .exp__logo-box { display: none; }
  .exp__header   { flex-direction: column; gap: 0.25rem; }
}
```

### 1.6 Projects section — 3-column card grid with prose

```css
/* Filter bar */
.project__filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.filter-btn {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text-secondary);
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 0.375rem 0.875rem;
  cursor: pointer;
  transition: all 0.15s ease;
  letter-spacing: 0.01em;
}

.filter-btn:hover            { border-color: var(--text-secondary); color: var(--text-primary); }
.filter-btn--active          { background: var(--accent); color: #fff; border-color: var(--accent); }
.filter-btn--active:hover    { background: var(--accent-hover); border-color: var(--accent-hover); }

/* 3-column grid on desktop, 1-column on mobile */
.project__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  align-items: start;
}

@media (max-width: 900px) {
  .project__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 560px) {
  .project__grid { grid-template-columns: 1fr; }
}

/* Individual card */
.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.375rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.15s ease, box-shadow 0.2s ease, transform 0.2s ease;
  height: 100%;
}

.project-card:hover {
  border-color: #BBBBBB;
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
  transform: translateY(-2px);
}

.project-card--hidden {
  display: none;
}

/* Card top row: name + GitHub link */
.project-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}

.project-card__name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.project-card__gh {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--text-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
  transition: color 0.15s ease;
}

.project-card__gh:hover {
  color: var(--accent);
}

.project-card__gh svg {
  width: 13px;
  height: 13px;
}

/* Short description */
.project-card__desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.65;
  flex: 1;
}

/* Tag row */
.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

/* Deep dive accordion — minimal */
.project-card__details {
  border-top: 1px solid var(--border);
  padding-top: 0.75rem;
  margin-top: 0.25rem;
}

.project-card__details summary {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-tertiary);
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  user-select: none;
  transition: color 0.15s ease;
}

.project-card__details summary::-webkit-details-marker { display: none; }

.project-card__details summary::before {
  content: '▸';
  font-size: 0.625rem;
  transition: transform 0.15s ease;
}

.project-card__details[open] summary::before {
  transform: rotate(90deg);
}

.project-card__details summary:hover {
  color: var(--text-secondary);
}

.project-card__details-body {
  margin-top: 0.75rem;
  font-size: 0.8125rem;
  color: var(--text-primary);
  line-height: 1.7;
}

.project-card__details-body p + p {
  margin-top: 0.625rem;
}

/* Tag */
.tag {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: 500;
  color: var(--tag-text);
  background: var(--tag-bg);
  padding: 0.1875rem 0.5rem;
  border-radius: 3px;
  white-space: nowrap;
  letter-spacing: 0.01em;
}
```

### 1.7 Skills section — refined table layout

```css
.skills__table {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.skills__row {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1.5rem;
  padding: 0.875rem 0;
  border-bottom: 1px solid var(--border);
  align-items: baseline;
}

.skills__row:first-child { padding-top: 0; }
.skills__row:last-child  { border-bottom: none; padding-bottom: 0; }

.skills__label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-tertiary);
  white-space: nowrap;
  padding-top: 1px;
}

.skills__items {
  font-size: 0.9375rem;
  color: var(--text-primary);
  line-height: 1.7;
}

@media (max-width: 560px) {
  .skills__row {
    grid-template-columns: 1fr;
    gap: 0.375rem;
  }
}
```

### 1.8 Writing section

```css
.writing__list {
  display: flex;
  flex-direction: column;
}

.writing__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.25rem;
  padding: 1.375rem 0;
  border-bottom: 1px solid var(--border);
  align-items: start;
}

.writing__item:first-child { padding-top: 0; }
.writing__item:last-child  { border-bottom: none; padding-bottom: 0; }

.writing__year {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-tertiary);
  font-family: var(--font-mono);
  white-space: nowrap;
  padding-top: 2px;
  min-width: 36px;
}

.writing__title a {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: underline;
  text-decoration-color: var(--border);
  text-underline-offset: 3px;
  transition: text-decoration-color 0.15s ease;
}

.writing__title a:hover {
  text-decoration-color: var(--accent);
}

.writing__venue {
  font-size: 0.8125rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
  line-height: 1.6;
}
```

### 1.9 Contact section — two-column layout

```css
.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

@media (max-width: 640px) {
  .contact__grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

/* Left column: email + links */
.contact__left {}

.contact__email {
  font-size: 1.0625rem;
  font-weight: 500;
  color: var(--accent);
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 3px;
  transition: text-decoration-color 0.15s ease;
  display: block;
  margin-bottom: 1.25rem;
}

.contact__email:hover {
  text-decoration-color: var(--accent);
}

.contact__links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  color: var(--text-secondary);
  transition: color 0.15s ease;
}

.contact__link:hover {
  color: var(--text-primary);
}

.contact__link svg {
  width: 15px;
  height: 15px;
  color: var(--text-tertiary);
  flex-shrink: 0;
}

/* Right column: form */
.contact__right {}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact__field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.contact__label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.contact__input,
.contact__textarea {
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  color: var(--text-primary);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.625rem 0.875rem;
  width: 100%;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.contact__input:focus,
.contact__textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(26, 26, 46, 0.08);
}

.contact__textarea {
  min-height: 110px;
  resize: vertical;
}

.contact__submit {
  align-self: flex-start;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
  background: var(--accent);
  border: none;
  border-radius: 6px;
  padding: 0.625rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.15s ease;
  letter-spacing: 0.01em;
}

.contact__submit:hover    { background: var(--accent-hover); }
.contact__submit:disabled { opacity: 0.55; cursor: not-allowed; }
```

### 1.10 Footer — more structured

```css
.footer {
  border-top: 1px solid var(--border);
  padding: 2.5rem 0;
  background: var(--bg);
}

.footer__inner {
  max-width: var(--nav-max);
  margin: 0 auto;
  padding: 0 var(--pad-x);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 2rem;
}

.footer__left {}

.footer__name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.footer__sub {
  font-size: 0.8125rem;
  color: var(--text-tertiary);
}

.footer__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.625rem;
}

.footer__links {
  display: flex;
  gap: 1.25rem;
}

.footer__link {
  font-size: 0.8125rem;
  color: var(--text-tertiary);
  transition: color 0.15s ease;
}

.footer__link:hover { color: var(--text-secondary); }

.footer__copy {
  font-size: 0.75rem;
  color: var(--text-tertiary);
}

@media (max-width: 560px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .footer__right { align-items: flex-start; }
}
```

### 1.11 Scroll fade-in (keep it subtle)

```css
.fade-in {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.fade-in--visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .fade-in { opacity: 1; transform: none; transition: none; }
}
```

---

## PHASE 2 — HTML REBUILD (index.html)

### 2.1 Hero section — complete rebuild

Replace the current hero with this exact structure:

```html
<section class="hero" id="hero">
  <div class="container">

    <!-- Top row: photo + identity -->
    <div class="hero__top">
      <div class="hero__identity">
        <img
          src="assets/img/rks.jpg"
          alt="Rishav Singh"
          class="hero__photo photo-circle"
          width="72" height="72"
          loading="eager"
        >
        <div class="hero__id-text">
          <h1 class="hero__name">Rishav Singh</h1>
          <p class="hero__tagline">AI & Systems Engineer · Pune, India</p>
        </div>
      </div>

      <!-- Open to work badge -->
      <span class="badge badge--open">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="3" fill="currentColor"/>
        </svg>
        Open to roles
      </span>
    </div>

    <!-- Bio -->
    <p class="hero__bio">
      I build AI systems that work offline, understand multiple languages,
      and ship to production. 14 projects across NLP, computer vision,
      healthcare AI, and legal tech — all deployed, not just demonstrated.
      Finishing B.Tech (AI & DS) at MIT-WPU, Pune. Available from June 2026.
    </p>

    <!-- Stats row -->
    <div class="stat-row">
      <div class="stat-item">
        <span class="stat-item__num">14</span>
        <span class="stat-item__label">Projects shipped</span>
      </div>
      <div class="stat-row__sep"></div>
      <div class="stat-item">
        <span class="stat-item__num">3</span>
        <span class="stat-item__label">Offline-first systems</span>
      </div>
      <div class="stat-row__sep"></div>
      <div class="stat-item">
        <span class="stat-item__num">5</span>
        <span class="stat-item__label">Languages supported</span>
      </div>
      <div class="stat-row__sep"></div>
      <div class="stat-item">
        <span class="stat-item__num">1</span>
        <span class="stat-item__label">IEEE paper</span>
      </div>
    </div>

    <!-- Social links -->
    <div class="hero__social">
      <a href="https://github.com/Rishav408" target="_blank" rel="noopener" class="hero__social-link">
        <!-- GitHub SVG 18x18 -->
        GitHub
      </a>
      <a href="https://linkedin.com/in/rishavsingh408" target="_blank" rel="noopener" class="hero__social-link">
        <!-- LinkedIn SVG 18x18 -->
        LinkedIn
      </a>
      <a href="https://x.com/RishavSingh408" target="_blank" rel="noopener" class="hero__social-link">
        <!-- X SVG 18x18 -->
        X / Twitter
      </a>
      <a href="mailto:rishav4805@gmail.com" class="hero__social-link">
        <!-- Email SVG 18x18 -->
        Email
      </a>
      <a href="assets/img/Rishav-Resume.pdf" target="_blank" rel="noopener" class="hero__social-link">
        <!-- File SVG 18x18 -->
        Resume
      </a>
    </div>

  </div>
</section>
```

**New CSS for hero top row:**

```css
.hero__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.75rem;
  flex-wrap: wrap;
}

.hero__identity {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.hero__photo {
  width: 72px;
  height: 72px;
  flex-shrink: 0;
}

.hero__name {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 0.25rem;
}

.hero__tagline {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

.hero__bio {
  font-size: 1.0625rem;
  color: var(--text-primary);
  line-height: 1.75;
  max-width: 620px;
  margin-bottom: 2rem;
}

.hero__social {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1.75rem;
}

.hero__social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: color 0.15s ease;
}

.hero__social-link:hover {
  color: var(--text-primary);
}

.hero__social-link svg {
  width: 16px;
  height: 16px;
}

/* Stat row — already defined above in 1.4 */
.stat-row { margin-top: 0; }   /* no extra top margin — bio has bottom margin */
```

### 2.2 About section

```html
<section id="about" class="fade-in">
  <div class="container">
    <h2>About</h2>

    <div class="about__layout">
      <!-- Left: prose -->
      <div class="about__text">
        <p>
          I got into AI because I saw a gap: impressive demos rarely become reliable systems.
          Most ML models never leave a notebook. Mine do. I build end-to-end — from dataset
          curation and model training to FastAPI backends, React frontends, and production
          deployment. My projects span NLP, computer vision, healthcare diagnostics, and legal
          tech — 14 shipped systems, all deployed to real users, not just demonstrated.
        </p>
        <p>
          I'm finishing B.Tech in Computer Science (AI & Data Science) at MIT World Peace
          University, Pune (CGPA 7.43). Along the way I've worked as Digital & Strategy
          Partner at Kubera Kapital, built real-time trading pipelines at APT Atypical
          Technologies, and published an IEEE paper on explainable multilingual NLP.
          I care deeply about privacy-first architectures — three of my flagship systems
          run entirely offline, zero cloud dependency by design.
        </p>
        <p>
          Currently open to SDE, AI/ML, and full-stack roles from June 2026. Most interested
          in problems at the intersection of offline AI, multilingual NLP, and edge inference.
          If you're building something that needs to work in the real world, not just on a
          slide deck, let's talk.
        </p>
      </div>

      <!-- Right: photo + quick facts -->
      <div class="about__sidebar">
        <img
          src="assets/img/RAS.jpg"
          alt="Rishav Singh"
          class="about__photo"
          width="200"
          loading="lazy"
        >
        <div class="about__facts">
          <div class="about__fact">
            <span class="about__fact-label">Education</span>
            <span class="about__fact-value">MIT-WPU, Pune · CGPA 7.43</span>
          </div>
          <div class="about__fact">
            <span class="about__fact-label">Degree</span>
            <span class="about__fact-value">B.Tech CSE (AI & DS) · 2023–2026</span>
          </div>
          <div class="about__fact">
            <span class="about__fact-label">Based in</span>
            <span class="about__fact-value">Pune, Maharashtra, India</span>
          </div>
          <div class="about__fact">
            <span class="about__fact-label">Status</span>
            <span class="about__fact-value" style="color: #2D6A4F; font-weight: 500;">Open to offers</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**CSS for About layout:**

```css
.about__layout {
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 3.5rem;
  align-items: start;
}

.about__text p {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: var(--text-primary);
}

.about__text p + p {
  margin-top: 1.125rem;
}

.about__photo {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--border);
  display: block;
  margin-bottom: 1.25rem;
}

.about__facts {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.about__fact {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.about__fact-label {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.about__fact-value {
  font-size: 0.875rem;
  color: var(--text-primary);
}

@media (max-width: 720px) {
  .about__layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  /* Show photo in a horizontal row with facts on mobile */
  .about__sidebar {
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
  }
  .about__photo {
    width: 100px;
    flex-shrink: 0;
    margin-bottom: 0;
  }
}
```

### 2.3 Experience section rebuild

```html
<section id="experience" class="fade-in">
  <div class="container">
    <h2>Experience</h2>

    <div class="exp__list">

      <div class="exp__item">
        <div class="exp__logo-box" aria-hidden="true">KK</div>
        <div class="exp__body">
          <div class="exp__header">
            <div>
              <p class="exp__role">Digital & Strategy Partner</p>
              <p class="exp__company">Kubera Kapital · Pune, India</p>
            </div>
            <span class="exp__period">2024 – Present</span>
          </div>
          <p class="exp__desc">
            Leading digital strategy and technology direction. Built the complete web presence
            (responsive, SEO-optimized, Lighthouse 95+), designed automated data workflows for
            investment analysis using Python and Pandas, and developed internal dashboards for
            portfolio tracking and client reporting. Reduced manual reporting time by ~60%
            through automated pipeline generation.
          </p>
        </div>
      </div>

      <div class="exp__item">
        <div class="exp__logo-box" aria-hidden="true">AT</div>
        <div class="exp__body">
          <div class="exp__header">
            <div>
              <p class="exp__role">Software Engineering Intern — TradeFlow Engine</p>
              <p class="exp__company">APT Atypical Technologies · Pune, India</p>
            </div>
            <span class="exp__period">2024</span>
          </div>
          <p class="exp__desc">
            Designed and built a real-time trading data pipeline processing live market feeds
            with consistent sub-100ms end-to-end latency. Architected the event system around
            PostgreSQL LISTEN/NOTIFY for zero-polling event propagation and Socket.IO for
            real-time client delivery. Handles 500+ concurrent WebSocket connections in
            production with automatic reconnection and backpressure handling.
          </p>
        </div>
      </div>

      <div class="exp__item">
        <div class="exp__logo-box" aria-hidden="true">AS</div>
        <div class="exp__body">
          <div class="exp__header">
            <div>
              <p class="exp__role">Shortlisted — Engineering Role</p>
              <p class="exp__company">Aeron Systems · Pune, India</p>
            </div>
            <span class="exp__period">2024</span>
          </div>
          <p class="exp__desc">
            Shortlisted for an engineering position at Aeron Systems, a defence and aerospace
            technology company specializing in UAV systems and real-time telemetry. Evaluated
            on embedded systems architecture, real-time data processing pipelines, and
            low-latency communication protocols.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
```

### 2.4 Projects section — 3-column grid

```html
<section id="projects" class="fade-in">
  <div class="container">
    <h2>Projects</h2>

    <div class="project__filters" role="group" aria-label="Filter projects">
      <button class="filter-btn filter-btn--active" data-filter="all">All (6)</button>
      <button class="filter-btn" data-filter="ai">AI / ML</button>
      <button class="filter-btn" data-filter="backend">Backend</button>
      <button class="filter-btn" data-filter="web">Web</button>
    </div>

    <div class="project__grid" id="projectGrid">

      <!-- Project Card Template (repeat for each project) -->
      <article class="project-card" data-category="ai">
        <div class="project-card__header">
          <h3 class="project-card__name">Justify-AI</h3>
          <a href="https://github.com/Rishav408/justify-ai" target="_blank" rel="noopener" class="project-card__gh">
            GitHub
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
        <p class="project-card__desc">
          Multilingual hate speech detection across 5 Indian languages — fully explainable,
          no transformers, IEEE published.
        </p>
        <div class="project-card__tags">
          <span class="tag">Python</span>
          <span class="tag">NLTK</span>
          <span class="tag">FastAPI</span>
          <span class="tag">Naive Bayes</span>
        </div>
        <details class="project-card__details">
          <summary>More detail</summary>
          <div class="project-card__details-body">
            <p>
              Classical NLP pipeline with language-specific preprocessing for 5 Indian languages.
              Every risk score includes a full breakdown of lexical, causal, and demographic
              signals — auditable, not a black box. 87% F1-score on the combined multilingual
              test set. IEEE paper published 2024.
            </p>
          </div>
        </details>
      </article>

      <!-- Repeat structure for:
           TradeFlow Engine (backend)
           AI Dashcam Explainer (ai)
           VaniCure (ai)
           VoteChain (web)
           NyayaAI (ai)
      -->

    </div>
  </div>
</section>
```

### 2.5 Contact section — two-column

```html
<section id="contact" class="fade-in">
  <div class="container">
    <h2>Get in touch</h2>

    <div class="contact__grid">
      <!-- Left -->
      <div class="contact__left">
        <p class="section-intro">
          Currently open to SDE, AI/ML, and full-stack roles from June 2026.
          Response within 24 hours on weekdays.
        </p>
        <a href="mailto:rishav4805@gmail.com" class="contact__email">
          rishav4805@gmail.com
        </a>
        <div class="contact__links">
          <a href="https://linkedin.com/in/rishavsingh408" target="_blank" rel="noopener" class="contact__link">
            <!-- LinkedIn SVG -->
            linkedin.com/in/rishavsingh408
          </a>
          <a href="https://github.com/Rishav408" target="_blank" rel="noopener" class="contact__link">
            <!-- GitHub SVG -->
            github.com/Rishav408
          </a>
          <a href="assets/img/Rishav-Resume.pdf" target="_blank" rel="noopener" class="contact__link">
            <!-- File SVG -->
            Resume (PDF)
          </a>
        </div>
      </div>

      <!-- Right: form -->
      <div class="contact__right">
        <form class="contact__form" id="contactForm" novalidate>
          <div class="contact__field">
            <label for="contactName" class="contact__label">Name</label>
            <input type="text" id="contactName" name="name" class="contact__input" required autocomplete="name" placeholder="Your name">
          </div>
          <div class="contact__field">
            <label for="contactEmail" class="contact__label">Email</label>
            <input type="email" id="contactEmail" name="email" class="contact__input" required autocomplete="email" placeholder="you@example.com">
          </div>
          <div class="contact__field">
            <label for="contactMessage" class="contact__label">Message</label>
            <textarea id="contactMessage" name="message" class="contact__textarea" required rows="5" placeholder="What's on your mind?"></textarea>
          </div>
          <button type="submit" class="contact__submit" id="contactSubmit">Send message</button>
          <p class="contact__status" id="contactStatus" role="status" aria-live="polite"></p>
        </form>
      </div>
    </div>

  </div>
</section>
```

### 2.6 Footer rebuild

```html
<footer class="footer">
  <div class="footer__inner">
    <div class="footer__left">
      <p class="footer__name">Rishav Singh</p>
      <p class="footer__sub">AI & Systems Engineer · Pune, India · &copy; <span id="footerYear"></span></p>
    </div>
    <div class="footer__right">
      <div class="footer__links">
        <a href="https://github.com/Rishav408" target="_blank" rel="noopener" class="footer__link">GitHub</a>
        <a href="https://linkedin.com/in/rishavsingh408" target="_blank" rel="noopener" class="footer__link">LinkedIn</a>
        <a href="https://x.com/RishavSingh408" target="_blank" rel="noopener" class="footer__link">X</a>
        <a href="assets/img/Rishav-Resume.pdf" target="_blank" rel="noopener" class="footer__link">Resume</a>
      </div>
      <p class="footer__copy">Built with HTML, CSS, vanilla JS. No frameworks.</p>
    </div>
  </div>
</footer>
```

---

## PHASE 3 — main.js UPDATES

### 3.1 Update project filtering to use `.project-card--hidden` and `.project__grid`

```js
var filterButtons = document.querySelectorAll('.filter-btn');
var projectCards  = document.querySelectorAll('.project-card');

filterButtons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var filter = btn.getAttribute('data-filter');
    filterButtons.forEach(function(b) { b.classList.remove('filter-btn--active'); });
    btn.classList.add('filter-btn--active');

    projectCards.forEach(function(card) {
      var cat = card.getAttribute('data-category');
      if (filter === 'all' || cat === filter) {
        card.classList.remove('project-card--hidden');
      } else {
        card.classList.add('project-card--hidden');
      }
    });
  });
});
```

### 3.2 Fade-in observer (keep existing logic, just ensure `.fade-in--visible` triggers correctly)

No changes needed — existing IntersectionObserver logic in main.js is correct.

### 3.3 Contact form — wire to Formspree

Replace the `setTimeout` simulation with a real Formspree fetch:

```js
contactForm.setAttribute('action', 'https://formspree.io/f/YOUR_FORM_ID');

contactForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  // ... validation logic unchanged ...
  
  submit.disabled = true;
  submit.textContent = 'Sending…';

  try {
    const res = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      contactStatus.textContent = 'Sent. I\'ll reply within 24 hours.';
      contactStatus.classList.add('contact__status--success');
      contactForm.reset();
    } else {
      contactStatus.textContent = 'Something went wrong. Email me directly.';
      contactStatus.classList.add('contact__status--error');
    }
  } catch {
    contactStatus.textContent = 'Network error. Email: rishav4805@gmail.com';
    contactStatus.classList.add('contact__status--error');
  } finally {
    submit.disabled = false;
    submit.textContent = 'Send message';
  }
});
```

---

## PHASE 4 — WHAT NOT TO DO (hard rules for IDE)

```
NEVER:
- Add gradient backgrounds to any element
- Add box-shadow larger than 0 4px 16px rgba(0,0,0,0.06)
- Add transition duration longer than 0.3s
- Add any keyframe animations (no @keyframes)
- Change --bg, --accent, --font-sans, --font-mono CSS variables
- Add a dark mode toggle
- Add FontAwesome or any icon library (inline SVG only)
- Add Three.js, GSAP, or any animation library
- Use grid-template-columns wider than 3 columns for projects
- Make the hero name font-size larger than 1.75rem (no giant display text)
- Add particle effects, cursor trails, or canvas backgrounds
- Use border-radius larger than 8px on any card

ALWAYS:
- Keep ALL section content within 720px max-width centered container
- Keep nav + footer within 1100px max-width container
- Use border-bottom: 1px solid var(--border) for list separators
- Use var(--text-tertiary) (#AAAAAA) for section h2 headings
- Use inline SVG for all icons, 14px–18px only
- Test at 375px, 640px, 768px, 1024px, 1280px viewport widths
```

---

## PHASE 5 — IMPLEMENTATION ORDER

Execute exactly in this sequence. Confirm each step before proceeding.

**Step 1:** Update CSS custom properties — add `--nav-max: 1100px`, ensure all tokens correct  
**Step 2:** Fix `.container` and `.nav__inner` and `.footer__inner` max-width system  
**Step 3:** Fix `h2` — small uppercase label style  
**Step 4:** Add all new utility CSS classes from Phase 1 sections 1.4 through 1.10  
**Step 5:** Rebuild Hero HTML + CSS — photo aligned left with name, stats row, social links  
**Step 6:** Rebuild About HTML + CSS — two-column prose + RAS.jpg sidebar with facts  
**Step 7:** Rebuild Experience HTML + CSS — refined logo boxes, role/period/company/desc layout  
**Step 8:** Rebuild Projects HTML + CSS — 3-column card grid, all 6 projects, filter buttons  
**Step 9:** Rebuild Skills HTML + CSS — clean table with uppercase labels  
**Step 10:** Rebuild Writing HTML + CSS — year column + title + venue  
**Step 11:** Rebuild Contact HTML + CSS — two-column email+links left, form right  
**Step 12:** Rebuild Footer HTML + CSS — name + sub left, links + copy right  
**Step 13:** Update main.js — project filter to use new class names, form to Formspree  
**Step 14:** Mobile pass — test and fix all breakpoints  
**Step 15:** Final review — check every left edge aligns, every divider spans correctly  
```
