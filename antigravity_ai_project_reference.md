# Unified Project Reference File for Antigravity AI (Detailed Technical Edition)

This document is a **deep technical and conceptual consolidation** of multiple projects. It is intentionally written for **AI code agents and reasoning systems** (like Antigravity) to understand **what was built, why it was built, and how it was engineered**.

Each project contains:
- **Conceptual Problem Definition**
- **System-Level Explanation**
- **Detailed Technology Stack & Technical Choices**
- **Differentiating / Novel Engineering Aspects**

---

## 1. Probity.ai — Privacy-First Content Integrity & AI Humanization Platform

### Concept & Problem Space
Probity.ai addresses a fundamental flaw in the AI-detection ecosystem: **per-request API dependency and word-count billing**, which makes large-scale integrity checks expensive and unsustainable. Additionally, most detectors act as black boxes and offer *detection only*, not remediation.

Probity.ai is designed as a **content integrity layer**, not just a checker. It both **detects AI-generated text** and **rewrites it to reintroduce human-like linguistic entropy**.

### System Architecture & Theory
The platform introduces a **Local Sieve Architecture**:
- A large, locally indexed corpus (Common Crawl–derived) is used to perform **low-cost similarity, entropy, and statistical checks**.
- Only when text crosses an *uncertainty threshold* (high entropy or anomaly score) does the system escalate to paid or heavier LLM-based verification.

The **Humanizer** component operates on linguistic theory:
- Injects controlled **burstiness** (variance in sentence length)
- Adjusts **perplexity distributions** to match human writing patterns
- Preserves semantic meaning while altering surface structure

### Technology & Technical Specs
- NLP pipelines (token-level entropy, n-gram frequency analysis)
- Large-scale local text indexing (Common Crawl subsets)
- Hybrid LLM architecture (local + API fallback)
- Custom rewriting heuristics layered over transformer outputs

### Differentiating Engineering Factors
- Near-zero marginal cost per check
- Detection + remediation in one pipeline
- Privacy-first (no forced cloud transmission)

---

## 2. CyberRakshak — AI-Powered Digital Airbag for Online Scams

### Concept & Problem Space
CyberRakshak is built on the idea that **fraud prevention must be pre-transaction, not post-loss**. Existing systems alert users *after* money is gone.

The project reframes cybersecurity as **real-time risk interception**, similar to an airbag deploying before physical damage.

### System Architecture & Theory
CyberRakshak operates as a **multi-layer AI defense system**:
1. **Perception Layer** – monitors SMS, calls, UPI links, audio, and video
2. **Inference Layer** – applies NLP, anomaly detection, and CV models
3. **Intervention Layer** – blocks actions, triggers alerts, and activates kill-switches
4. **Evidence Layer** – auto-generates tamper-proof forensic reports

Community theory is applied via the **Family Trust Circle**, introducing humans as a fallback control system when automation fails.

### Technology & Technical Specs
- TensorFlow Lite for on-device ML inference
- NLP transformers for scam-text classification
- PyTorch CNNs for deepfake detection
- Isolation Forests & Autoencoders for anomaly detection
- React Native for cross-platform deployment
- Node.js real-time alert services

### Differentiating Engineering Factors
- On-device inference for privacy & latency
- AI + human hybrid security model
- Legal-evidence-aware system design

---

## 3. BharatNiti — AI-Driven Political Leadership Simulation Platform

### Concept & Problem Space
BharatNiti addresses the lack of **experiential learning** in political science and governance education. Reading theory does not prepare users for **real-time decision complexity**.

### System Architecture & Theory
The platform converts **live political news into structured decision trees**:
- News is parsed into actors, conflicts, constraints, and objectives
- Scenarios are generated using prompt-engineered LLM pipelines
- User responses are evaluated across leadership dimensions (risk, empathy, decisiveness)

### Technology & Technical Specs
- News ingestion via NewsAPI
- Python-Flask backend
- LLaMA models via Ollama
- Rule + LLM hybrid evaluation logic

### Differentiating Engineering Factors
- Real-world data → simulated governance
- Skill-based AI feedback loops

---

## 4. Subconscious Bias Detection AI — Multimodal Fairness Intelligence

### Concept & Problem Space
Bias often operates **below conscious awareness**, making audits ineffective. This system targets **implicit bias**, not explicit discrimination.

### System Architecture & Theory
Uses **multimodal inference**:
- Text → linguistic bias signals
- Audio → tone & sentiment bias
- Video → gesture & posture indicators

Bias metrics are informed by **social psychology frameworks** (e.g., IAT).

### Technology & Technical Specs
- BERT for NLP bias analysis
- Wav2Vec for speech processing
- OpenPose for body-language extraction
- Fairness-aware learning algorithms

### Differentiating Engineering Factors
- Real-time bias nudging
- Context-sensitive fairness modeling

---

## 5. FaceMark — Classical Computer Vision Attendance System

### Concept & Problem Space
Designed for environments where **deep learning is overkill**, FaceMark prioritizes **simplicity, deployability, and explainability**.

### System Architecture & Theory
Pipeline-based CV system:
- Haar Cascade for face detection
- LBPH for feature extraction & classification
- Deterministic training and recognition cycle

### Technology & Technical Specs
- OpenCV
- Python + Flask
- Classical ML (LBPH)

### Differentiating Engineering Factors
- Lightweight, no GPU dependency
- Fully transparent recognition logic

---

## 6. India Economic Dashboard — Applied Data Science & Analytics Platform

### Concept & Problem Space
Raw economic data is inaccessible without **contextual visualization and comparison**.

### System Architecture & Theory
- ETL pipelines normalize multi-scale indicators
- Statistical transformations enable fair comparison
- Correlation matrices reveal systemic relationships

### Technology & Technical Specs
- Pandas, NumPy
- Streamlit
- Plotly

### Differentiating Engineering Factors
- Multi-indicator normalization
- Policy-grade analytics tooling

---

## 7. MarvelTimeVault — Cinematic Data-Driven UI System

### Concept & Problem Space
Most timeline websites are informational but not **experiential**.

### System Architecture & Theory
- JSON-driven content layer
- Animation-first rendering philosophy
- Theme systems modeled as state machines

### Technology & Technical Specs
- GSAP + ScrollTrigger
- Tailwind CSS
- Vanilla JS

### Differentiating Engineering Factors
- Cinematic UX engineering
- Premium interaction design

---

## 8. BMMCT — Community-Centric Web Platform

### Concept & Problem Space
Community organizations lack **modern digital infrastructure**.

### System Architecture & Theory
- Static-first, performance-optimized architecture
- Year-indexed event archival

### Technology & Technical Specs
- HTML, CSS, JS
- Firebase Hosting

### Differentiating Engineering Factors
- Cultural-scale content management

---

## 9. Pal Classes — Curriculum-Aligned Learning Platform

### Concept & Problem Space
Students struggle due to **fragmented conceptual understanding**.

### System Architecture & Theory
- Concept-first content structuring
- Progressive difficulty layering

### Technology & Technical Specs
- Vanilla web stack

### Differentiating Engineering Factors
- Exam-aligned pedagogy

---

## 10. The Godfather Chatbot — Persona-Faithful Conversational AI

### Concept & Problem Space
Most chatbots fail at **character consistency**.

### System Architecture & Theory
- Prompt-engineered persona locking
- Controlled randomness via temperature tuning

### Technology & Technical Specs
- LLaMA 3 via Ollama
- LangChain

### Differentiating Engineering Factors
- Narrative-consistent AI responses

---

## Intended Use by Antigravity AI
This document should be used as:
- Architectural reference
- Reasoning context
- Style and system-design grounding

**Author:** Rishav Singh

