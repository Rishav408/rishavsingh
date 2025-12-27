# Unified Project Reference File for Antigravity AI (Full Technical & Architectural Dossier)

This document is a **comprehensive engineering-grade reference** covering **concept, theory, architecture, technology stack, and folder structure** for each project. It is intentionally verbose and structured so that an AI code agent (Antigravity) can reason about **design intent, system decomposition, and implementation patterns**.

---

## 1. Probity.ai — Privacy-First Content Integrity & AI Humanization Platform

### Detailed Project Summary
Probity.ai is a content integrity and remediation platform designed to detect AI-generated text at scale and humanize it without relying on expensive per-request APIs. It reframes AI detection as a **statistical verification problem** rather than a pure classifier problem, enabling high throughput and low marginal cost.

The platform simultaneously solves two problems:
1. **Detection** – identifying AI-generated or AI-assisted content
2. **Humanization** – rewriting text to restore human-like linguistic entropy

### Core Theory
- **Entropy Analysis**: Measures predictability of token sequences
- **Perplexity Distribution Matching**: Aligns text with human corpora
- **Burstiness Injection**: Varies sentence length and syntactic structure
- **Hybrid Verification**: Escalates uncertain cases to stronger LLM checks

### System Architecture
1. Input Text Ingestion
2. Local Statistical Sieve (entropy, n-grams, similarity)
3. Anomaly Scoring Engine
4. Conditional LLM Verification Layer
5. Humanization Engine
6. Output + Confidence Metadata

### Technology Stack & Specs
- NLP: Token entropy analysis, n-gram frequency modeling
- Indexing: Local Common Crawl subsets
- Models: Local transformer models + API fallback
- Infrastructure: Local-first compute, optional cloud escalation



### Differentiation
- Near-zero marginal cost
- Detection + remediation
- Privacy-first by design

---

## 2. CyberRakshak — AI-Powered Digital Airbag for Online Scams

### Detailed Project Summary
CyberRakshak is a real-time, citizen-centric cybersecurity platform that intercepts scams **before financial loss occurs**. It treats fraud as a **time-critical anomaly detection problem** rather than a reporting problem.

### Core Theory
- **Pre-emptive Risk Interception**
- **Defense-in-Depth AI**
- **Human-in-the-loop Security**
- **Forensic-by-design Evidence Generation**

### System Architecture
1. Input Capture Layer (SMS, Calls, Links, Media)
2. AI Inference Layer (NLP, CV, Anomaly Detection)
3. Intervention Layer (Kill-switch, alerts)
4. Community Layer (Family Trust Circle)
5. Evidence & Reporting Layer

### Technology Stack & Specs
- NLP: Transformer-based scam classification
- CV: CNN-based deepfake detection
- ML: Isolation Forests, Autoencoders
- Mobile: React Native
- Backend: Node.js, Python
- Deployment: On-device ML (TFLite)



### Differentiation
- Real-time prevention
- On-device AI
- AI + community firewall

---

## 3. BharatNiti — AI Political Leadership Simulation Platform

### Detailed Project Summary
BharatNiti is an experiential learning platform that converts real Indian political news into **interactive leadership simulations**. Users are evaluated on decision quality, not factual recall.

### Core Theory
- Scenario-based learning
- Decision tree simulation
- Qualitative leadership evaluation

### System Architecture
1. News Ingestion
2. Scenario Structuring
3. LLM-Based Simulation Engine
4. User Decision Capture
5. AI Feedback & Scoring

### Technology Stack & Specs
- Backend: Python, Flask
- AI: LLaMA via Ollama
- Data: NewsAPI



---

## 4. Subconscious Bias Detection AI

### Detailed Project Summary
A multimodal AI system that detects implicit bias in real time across text, audio, and video streams, focusing on *unconscious behavioral signals*.

### Core Theory
- Implicit bias modeling
- Multimodal fusion
- Fairness-aware ML

### System Architecture
1. Data Ingestion (Text/Audio/Video)
2. Feature Extraction
3. Multimodal Fusion
4. Bias Scoring
5. Real-time Nudging

### Technology Stack & Specs
- NLP: BERT
- Audio: Wav2Vec
- Vision: OpenPose
- ML: PyTorch



---

## 5. FaceMark — Face Recognition Attendance System

### Detailed Project Summary
FaceMark is a lightweight, explainable attendance system using classical computer vision instead of deep learning.

### Core Theory
- Deterministic feature extraction
- Classical pattern recognition

### System Architecture
1. Face Detection
2. Feature Encoding
3. Classification
4. Attendance Logging

### Technology Stack & Specs
- OpenCV
- LBPH
- Flask



---

## 6. India Economic Dashboard

### Detailed Project Summary
An applied data science dashboard translating raw economic indicators into interactive, comparative insights.

### Core Theory
- Statistical normalization
- Correlation analysis
- Time-series visualization

### System Architecture
1. Data Ingestion (CSV)
2. ETL & Cleaning
3. Analytics Engine
4. Visualization Layer

### Technology Stack & Specs
- Pandas, NumPy
- Streamlit
- Plotly



---

## 7. MarvelTimeVault — Cinematic Timeline UI Platform

### Detailed Project Summary
A cinematic, animation-first timeline system emphasizing experience over static information.

### Core Theory
- UX as state machine
- Animation-driven storytelling

### System Architecture
1. JSON Content Layer
2. Render Engine
3. Animation Engine
4. Theme State Manager

### Technology Stack & Specs
- GSAP
- Tailwind CSS
- Vanilla JS



---

## 8. BMMCT — Community & Cultural Platform

### Detailed Project Summary
A digital infrastructure platform for long-running cultural organizations with archival and donation workflows.

### System Architecture
- Static-first architecture
- Event-indexed content management

### Technology Stack
- HTML, CSS, JS
- Firebase Hosting



---

## 9. Pal Classes — CBSE Physics Learning Platform

### Detailed Project Summary
A curriculum-aligned learning platform optimized for conceptual clarity and exam readiness.

### System Architecture
- Content-first static architecture

### Technology Stack
- HTML, CSS, JS



---

## 10. The Godfather Chatbot — Persona-Faithful Conversational AI

### Detailed Project Summary
A character-locked conversational AI designed to preserve narrative consistency and tone.

### Core Theory
- Prompt locking
- Temperature-controlled generation

### System Architecture
1. Persona Prompt Layer
2. LLM Inference
3. Response Filtering

### Technology Stack & Specs
- LLaMA 3 (Ollama)
- LangChain



---

## Usage Guidance for Antigravity AI
This document should be treated as:
- A system design reference
- A reasoning and architecture grounding file
- A source of reusable design patterns

**Author:** Rishav Singh

