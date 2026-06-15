# Portfolio Redesign Report — Rishav Singh
**Based on:** mitchellsparrow.com · aksh-ai.com · karpathy.ai  
**Prepared:** June 2026  
**Direction:** Simple is more.

---

## Part 1 — Analysis of Reference Sites

### 1. Mitchell Sparrow — mitchellsparrow.com

**What it does well:**
- Single-page, anchor-based scroll navigation (Hero → About → Experience → Skills → Projects → Contact)
- Full-bleed portrait photo in the hero — personal, not stock
- Dark background with high-contrast white text — no eye fatigue
- Skill icons with hover-to-reveal proficiency percentage — elegant interaction, not cluttered
- Timeline-style experience section with company logos as images
- Project cards with tech stack pill tags

**What it says about taste:**
Clean dark UI. Framer Motion animations. Next.js. Tailwind. The site is polished but it IS a recognizable template origin (Sonny Sangha's YouTube tutorial + morphed over time). The aesthetic is **dark glass SaaS** — smooth but not deeply original.

**What to borrow:**
- Anchor-link single page navigation (no multi-page routing confusion)
- The skill icon hover pattern — shows depth without a wall of text
- Company logos in experience section — visual credibility instantly
- Portrait photo in hero — humanizes you

**What to skip:**
- The generic dark gradient SaaS feel
- Heavy Framer Motion transitions that slow perceived load
- Bento grid project cards

---

### 2. Akshay — aksh-ai.com

**What it does well (from meta + description):**  
The site's own meta description reads: *"Biosignal processing, machine learning, and creative audio technology. Building systems that work in clinics and studios."*

That single line tells you the entire design philosophy: **specific, not broad. Work-first, not credential-first.** The site likely mirrors this — minimal, copy-led, with work doing the talking.

**What to borrow:**
- The bio/meta philosophy: lead with what you *specifically* build, not generic "AI/ML Engineer"
- Work-first hierarchy — projects above education
- Specificity of language — "Building systems that work in clinics" not "passionate about AI"

**What to skip:**
- Likely very minimal to the point of feeling unfinished for a student portfolio (you need slightly more visual structure)

---

### 3. Andrej Karpathy — karpathy.ai

**What it does well:**
This is the most important reference. Karpathy explicitly wrote in the source code:  
*"0 frameworks were used to make this simple responsive website because I am becoming seriously allergic to 500-pound websites. This one is pure HTML and CSS in two static files and that's it."*

The site is:
- **Pure HTML + CSS, no JS framework**
- Chronological timeline layout — newest work at top
- Company/institution logos as small inline images beside each role
- Flat, light background (near white)
- System font stack (not even a Google Font)
- No hero, no animations, no scroll effects
- Sections: Work → Teaching → Writing → Projects → Publications
- Links everywhere — everything is a hyperlink
- Dense but readable — paragraph text, not bullet points

**What it signals:** Confidence so extreme you don't need a fancy website. The work IS the design.

**What to borrow:**
- The chronological timeline structure for experience
- Inline logo images next to roles — instant visual parsing
- Light background — off-white, not pure white
- Dense, hyperlink-rich writing — your projects described in sentences, not tags
- No animations whatsoever
- Footer that's actually a footer, not a CTA section
- Section headers that are plain h2 tags
- The "I built X because Y" project narrative style

**What to skip:**
- Zero visual hierarchy (you still need some — you're not Karpathy-famous yet)
- Pure system fonts (you can use one good web font)
- No contact form (you need one as a student)

---

## Part 2 — The Unified Design Direction

### Philosophy: "Earned Simplicity"

You are not minimalist because you're lazy. You're minimalist because you've seen enough over-designed portfolios to know what they're compensating for. The goal is a site that looks like it was made by someone who could have made anything — and chose this.

**The three reference sites collapse into one signal:**
> Work that speaks, a person behind it, nothing between you and the reader.

---

## Part 3 — Design System

### Color Palette

| Role | Value | Notes |
|------|-------|-------|
| Background | `#F7F5F0` | Warm off-white — Karpathy-esque, not clinical white |
| Surface (cards) | `#FFFFFF` | Pure white cards on warm bg — subtle contrast |
| Text primary | `#111111` | Near black, not full black — softer |
| Text secondary | `#6B6B6B` | Dates, metadata, labels |
| Text tertiary | `#AAAAAA` | Hints, dividers |
| Accent | `#1A1A2E` or `#1D3557` | Deep navy — your one and only accent color |
| Accent hover | `#274472` | Slightly lighter for links on hover |
| Border | `#E5E2DC` | Warm, not cool gray |
| Tag background | `#EEF0F5` | Tech tags — neutral, light |

**Rule: Two modes only — no dark mode toggle.** Pick one. Karpathy is light. Mitchell is dark. For you, go **light**. It photographs better for sharing on LinkedIn/Twitter, and it's rarer among Indian dev portfolios which skew dark.

---

### Typography

**Heading font:** `Inter` — variable weight, 400/500/700 only. Not Geist, not Outfit, not Satoshi. Inter is the most legible grotesque on screen and doesn't date.

**Body font:** `Inter` same family — no second typeface. One font, done.

**Mono font (for code snippets / tags only):** `JetBrains Mono` — used sparingly, only for tech stack inline mentions.

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Your name (hero) | 48px / 3rem | 700 | `#111111` |
| Section headings | 22px | 600 | `#111111` |
| Body / bio | 17px | 400 | `#111111` |
| Project title | 19px | 600 | `#111111` |
| Metadata / dates | 14px | 400 | `#6B6B6B` |
| Tags | 12px | 500 | `#444` on `#EEF0F5` |
| Nav links | 15px | 400 | `#6B6B6B` → `#111` on hover |

**Line height:** 1.7 for body text, 1.2 for headings. **Letter spacing:** -0.02em on large headings only.

---

### Layout

```
Max content width: 720px
Horizontal padding: 24px (mobile), 0 (desktop, centered block)
Section spacing: 80px between sections
```

This is a **single-column, centered document layout** — exactly like karpathy.ai but with just enough visual structure added (dividers, subtle cards for projects).

No grid. No bento. No columns. One column of text that breathes.

---

### Navigation

Sticky top nav, minimal. Light background, `border-bottom: 1px solid #E5E2DC` that appears only on scroll.

```
Rishav Singh         About  Experience  Projects  Writing  Contact
```

- Logo/name left-aligned, links right-aligned
- No hamburger on mobile — links collapse to icons or a minimal drawer
- Active section highlighted by color change only (no underline animation)

---

## Part 4 — Section-by-Section Blueprint

### Hero

```
[Profile photo — circular, 80px]

Rishav Singh
AI & Systems Engineer — Pune, India

I build AI systems that work offline, understand multiple languages,
and ship to production. Currently finishing B.Tech at MIT-WPU.
Open to SDE and AI/ML roles from June 2026.

[GitHub]  [LinkedIn]  [Email]
```

**Rules:**
- Photo is circular, small (80px) — not a giant half-page portrait (that's Mitchell's style, not yours)
- The tagline is **one sentence that says what you specifically do** — not "passionate developer"
- Social links are inline icon-links, not buttons
- No animated text, no typewriter effect, no gradient text

---

### About

2–3 paragraphs of real prose. Written like a person, not a resume.

Example structure:
- Paragraph 1: What you're building and why (your actual philosophy)
- Paragraph 2: Background — MIT-WPU, Kubera Kapital work, what shaped your thinking
- Paragraph 3: What you're looking for next

**No bullet points in About.** If you can't write it as a sentence, it doesn't belong here.

---

### Experience

Timeline layout. Newest first.

```
[Company Logo 32px]  Role Title
                     Company Name · Date range
                     City, Country

                     2–3 sentence description. What you built. What it does.
                     Not bullet points — prose.
```

Entries for:
- Kubera Kapital (Digital & Strategy Partner)
- APT Atypical Technologies (TradeFlow Engine intern)
- Aeron Systems (if offer converts — or note shortlisted)
- Any other relevant roles

**Divider:** thin `1px solid #E5E2DC` between entries, no card boxes.

---

### Projects

This is the most important section. Do NOT use generic cards with a screenshot.

**Layout:**

```
Project Name                                    [GitHub ↗]  [Live ↗]
Short description — one sentence. What it is and why it matters.

Stack: Python · FastAPI · PostgreSQL · Docker

Longer description: what problem it solved, what's interesting technically,
what you learned or what makes it different.
```

List of projects (ordered by impressiveness, not recency):

1. **Justify-AI** — Multilingual hate speech detection (English, Hindi, Marathi, Bhojpuri, Marwari). IEEE paper. Lead this one.
2. **TradeFlow Engine** — Real-time trading data pipeline (Node.js, PostgreSQL LISTEN/NOTIFY, Socket.IO). Built during internship.
3. **AI Dashcam Explainer** — Offline YOLOv8 computer vision on edge hardware. Privacy-first.
4. **VoteChain** — Blockchain e-voting for Maharashtra elections. Java, Spark Java, MongoDB.
5. **VeeraServe AI** — Restaurant ordering app with Ollama-powered local LLM chatbot.
6. **NyayaAI / LexisAI** — RAG-based legal AI for Indian jurisprudence. Note: in revamp.

**Rules:**
- No project screenshots — they rarely look good at card size and date quickly
- Stack listed as plain comma-separated pill tags
- "What makes it different" must be in every entry — one sentence

---

### Skills

Do NOT do a skill bar chart. They are meaningless and look bad.

Do NOT do a logo grid. It's filler.

**Instead — plain text groupings:**

```
Languages         Python · JavaScript · TypeScript · Java · SQL
AI / ML           PyTorch · YOLOv8 · HuggingFace · LangChain · Ollama
Backend           FastAPI · Node.js · PostgreSQL · MongoDB · Docker
Frontend          React · Next.js · Tailwind CSS · Firebase
Tools             Git · Linux · AWS · Vercel · Jupyter
Interests         Offline AI · RAG systems · Edge inference · NLP
```

Simple. Scannable. No percentages, no stars, no progress bars.

---

### Writing (Optional but Recommended)

If you have a blog, Notion notes, or LinkedIn articles — link them here.

Even 2–3 entries is enough:
- IEEE paper for Justify-AI
- Any technical writeup / Medium post
- Kubera Kapital case study (can be a PDF)

This section sets you apart from 95% of student portfolios who have zero writing.

---

### Contact

Dead simple.

```
Get in touch

I'm currently open to SDE, AI/ML, and full-stack roles.
Reach me directly:

rishav.singh@email.com
LinkedIn · GitHub · Resume (PDF) ↗
```

No contact form unless you want one. Email link is enough. If you keep a form: Name, Email, Message — three fields, submit. Nothing else.

---

## Part 5 — Technical Stack Recommendation

Given your background (Next.js, React, Tailwind):

| Choice | Recommendation |
|--------|---------------|
| Framework | **Next.js 14 (App Router)** — static export, fast |
| Styling | **Tailwind CSS** — but with a custom design token config matching above palette |
| Fonts | Google Fonts (Inter + JetBrains Mono) via `next/font` |
| Animation | **None, or GSAP ScrollTrigger for one subtle fade-in only** |
| CMS | **None for now** — hardcode content, update via code. Add Sanity later if you want |
| Hosting | **Vercel** — free, instant deploys |
| Domain | `rishavsingh.dev` or `rishavsingh.me` — check availability |

**Do not use:** Framer Motion for page transitions, Three.js, React Spring, scroll-triggered parallax, particle backgrounds, cursor glow effects.

---

## Part 6 — What to Cut from Your Current Site

Based on patterns common in generic AI portfolios:

| Element | Decision | Reason |
|---------|----------|--------|
| Electric lime / neon accent colors | **CUT** | Dated, noisy |
| Bento grid layout | **CUT** | Everyone has it |
| Animated hero text (typewriter/gradient) | **CUT** | Distracting |
| Skill progress bars | **CUT** | Meaningless |
| Particle / canvas background | **CUT** | Heavy, generic |
| Dark glassmorphism cards | **CUT** | SaaS template look |
| "Hire Me" button in hero | **CUT** | Desperate energy |
| Space Mono as display font | **CUT** | Overused in dev portfolios |
| Three.js / WebGL scene | **CUT** | Unless it's actually impressive and fast |
| Testimonials section | **KEEP IF REAL** | Only if you have real quotes |
| Stats counter (lines of code, projects, etc) | **CUT** | Meaningless |

---

## Part 7 — Tone of Voice

Your copy should sound like a person who:
- Knows exactly what they build
- Can explain it to a senior engineer and to a product manager
- Doesn't use the word "passionate" or "enthusiastic"
- Uses specific numbers when possible ("5 languages", "real-time at <100ms latency")
- Has opinions ("I build AI that runs offline because I think cloud dependence is a design flaw")

**Avoid:**
- "I am a passionate developer..."
- "I love solving complex problems..."
- "Always eager to learn..."
- "Team player with strong communication skills..."

**Use instead:**
- "I build AI systems that run without a cloud dependency."
- "My projects span NLP, computer vision, and legal tech — all deployed, not just demonstrated."
- "I'm finishing my B.Tech at MIT-WPU and open to roles from June 2026."

---

## Part 8 — Implementation Order

Follow this sequence when building:

1. **Design tokens first** — set up Tailwind config with exact colors, font sizes, spacing scale from this document
2. **Typography pass** — get `Inter` rendering beautifully, line heights, spacing correct
3. **Layout shell** — nav + centered 720px column + footer
4. **Hero section** — name, tagline, bio, links
5. **Experience section** — timeline, logos, prose
6. **Projects section** — listed format, stack tags
7. **Skills section** — plain text groups
8. **Contact section** — email + links
9. **Mobile pass** — ensure 375px looks as good as 1280px
10. **Performance pass** — Lighthouse score target: 95+ across all metrics
11. **Content pass** — rewrite all copy per tone guidelines above
12. **Deploy to Vercel** — custom domain

---

## Summary

| Dimension | Direction |
|-----------|-----------|
| Color | Warm off-white background, deep navy accent, no bright colors |
| Typography | Inter only, one font, careful sizing |
| Layout | Single centered column, 720px max width |
| Animations | None (or one subtle fade-in) |
| Navigation | Sticky minimal nav, anchor links |
| Projects | Listed with prose, no screenshots |
| Skills | Plain text groups, no bars |
| Tone | Specific, direct, no corporate speak |
| Stack | Next.js + Tailwind + Vercel, no heavy dependencies |
| Inspiration | 70% Karpathy, 20% Mitchell, 10% Akshay |

The goal is a site that feels like it was made by someone who's read enough of the internet to know what's worth keeping.
