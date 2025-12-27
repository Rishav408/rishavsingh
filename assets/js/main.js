/**
 * ========================================
 * PORTFOLIO WEBSITE - MAIN.JS
 * Interactivity & Animations
 * ========================================
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // ===== INITIALIZATION =====
  initTypedJS();
  initAOS();
  initMobileMenu();
  initSmoothScroll();
  initScrollToTop();
  initActiveNavLink();
  initPortfolioFilters();
  initContactForm();
  initCurrentYear();

  // ===== TYPED.JS EFFECT =====
  function initTypedJS() {
    const typedElement = document.getElementById('typed-text');
    if (typedElement && typeof Typed !== 'undefined') {
      new Typed('#typed-text', {
        strings: [
          'Data Scientist',
          'ML Engineer',
          'AI Engineer',
          'GenAI Developer'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
    }
  }

  // ===== AOS ANIMATION LIBRARY =====
  function initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 50
      });
    }
  }

  // ===== MOBILE MENU TOGGLE =====
  function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.navbar__link');

    if (mobileToggle && header) {
      mobileToggle.addEventListener('click', function () {
        header.classList.toggle('active');

        // Toggle icon
        const icon = this.querySelector('i');
        if (header.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });

      // Close menu when clicking a nav link (mobile)
      navLinks.forEach(link => {
        link.addEventListener('click', function () {
          if (window.innerWidth < 1200) {
            header.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', function (e) {
        if (window.innerWidth < 1200 &&
          header.classList.contains('active') &&
          !header.contains(e.target) &&
          !mobileToggle.contains(e.target)) {
          header.classList.remove('active');
          const icon = mobileToggle.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    }
  }

  // ===== SMOOTH SCROLL =====
  function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const headerHeight = 0; // No fixed header offset needed

    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();

          const targetPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ===== SCROLL TO TOP BUTTON =====
  function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const scrollThreshold = 100;

    if (scrollToTopBtn) {
      // Show/hide button based on scroll position
      window.addEventListener('scroll', function () {
        if (window.scrollY > scrollThreshold) {
          scrollToTopBtn.classList.add('visible');
        } else {
          scrollToTopBtn.classList.remove('visible');
        }
      });

      // Scroll to top on click
      scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // ===== ACTIVE NAV LINK ON SCROLL =====
  function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar__link');

    function highlightNavLink() {
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Run on page load
  }

  // ===== PORTFOLIO FILTERS =====
  function initPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.portfolio__filter');
    const portfolioItems = document.querySelectorAll('.portfolio__item');

    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        // Filter items
        portfolioItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');

          if (filterValue === 'all' || itemCategory === filterValue) {
            item.classList.remove('hidden');
            item.style.animation = 'fadeInUp 0.5s ease forwards';
          } else {
            item.classList.add('hidden');
          }
        });

        // Refresh AOS for new items
        if (typeof AOS !== 'undefined') {
          setTimeout(() => AOS.refresh(), 100);
        }
      });
    });
  }

  // ===== CONTACT FORM VALIDATION =====
  function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Clear previous errors
        clearFormErrors();

        // Get form fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        const formStatus = document.getElementById('formStatus');

        let isValid = true;

        // Validate name
        if (!name.value.trim()) {
          showError('nameError', 'Please enter your name');
          isValid = false;
        }

        // Validate email
        if (!email.value.trim()) {
          showError('emailError', 'Please enter your email');
          isValid = false;
        } else if (!isValidEmail(email.value)) {
          showError('emailError', 'Please enter a valid email address');
          isValid = false;
        }

        // Validate subject
        if (!subject.value.trim()) {
          showError('subjectError', 'Please enter a subject');
          isValid = false;
        }

        // Validate message
        if (!message.value.trim()) {
          showError('messageError', 'Please enter your message');
          isValid = false;
        }

        // If valid, show success message
        if (isValid) {
          formStatus.textContent = 'Thank you! Your message has been sent successfully.';
          formStatus.className = 'form-status success';
          formStatus.style.display = 'block';

          // Reset form
          contactForm.reset();

          // Hide success message after 5 seconds
          setTimeout(() => {
            formStatus.style.display = 'none';
          }, 5000);
        }
      });
    }

    function showError(elementId, message) {
      const errorElement = document.getElementById(elementId);
      if (errorElement) {
        errorElement.textContent = message;
      }
    }

    function clearFormErrors() {
      const errorElements = document.querySelectorAll('.form-error');
      errorElements.forEach(el => el.textContent = '');

      const formStatus = document.getElementById('formStatus');
      if (formStatus) {
        formStatus.style.display = 'none';
        formStatus.className = 'form-status';
      }
    }

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }

  // ===== SET CURRENT YEAR =====
  function initCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // ===== SKILL BAR ANIMATION =====
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill__progress');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
  }

  // Initialize skill bar animation
  animateSkillBars();

  // ===== PROJECT MODAL =====
  initProjectModal();

  function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const backdrop = document.querySelector('.project-modal__backdrop');

    // Project Data from Reference File
    const projectsData = {
      'NyayaAI – AI Legal Assistant': {
        tag: 'LLM / RAG',
        concept: 'NyayaAI addresses the challenge of making legal information accessible and understandable. Traditional legal research is time-consuming and requires expertise. This AI-powered legal assistant provides context-aware, intelligent legal Q&A by combining retrieval-augmented generation with intelligent web search capabilities.',
        architecture: 'The system uses a RAG (Retrieval Augmented Generation) pipeline architecture with LangChain for orchestration. It combines a local knowledge base with real-time web search to provide comprehensive and up-to-date legal information. The full-stack implementation ensures seamless integration between the AI backend and user interface.',
        techStack: ['Python', 'LangChain', 'RAG Pipeline', 'Flask', 'Web Search API', 'Vector Database'],
        differentiators: ['Context-aware legal Q&A with source citations', 'Hybrid retrieval combining local knowledge and web search', 'Full-stack implementation with intuitive UI', 'Real-time information augmentation']
      },
      'ResolvAI – Offline AI System': {
        tag: 'Local LLM',
        concept: 'ResolvAI solves the challenge of AI-powered customer complaint resolution while maintaining complete data privacy. In scenarios where sensitive customer data cannot leave local infrastructure, this system provides intelligent resolution using fully offline LLM inference.',
        architecture: 'Built on local LLM infrastructure using Ollama for model serving. The system uses LangChain for prompt engineering and conversation management. All inference happens on-device, ensuring zero data transmission to external servers while maintaining competitive AI capabilities.',
        techStack: ['Python', 'Ollama', 'LangChain', 'Local LLMs', 'Flask', 'Privacy-First Design'],
        differentiators: ['Complete offline operation for maximum privacy', 'No API dependencies or per-request costs', 'Local LLM inference with Ollama', 'Enterprise-grade data isolation']
      },
      'VedaTale – AI Storytelling': {
        tag: 'Web / GenAI',
        concept: 'VedaTale reimagines storytelling for the digital age by combining AI-powered narrative generation with engaging web experiences. The platform enables users to create, customize, and experience AI-generated stories with Indian cultural context.',
        architecture: 'Flask-based backend handles AI model integration and content generation. Firebase provides scalable hosting and real-time database capabilities. The architecture separates content generation from presentation, enabling flexible story delivery.',
        techStack: ['Python', 'Flask', 'Firebase', 'Generative AI', 'REST APIs', 'Cloud Hosting'],
        differentiators: ['Cultural context-aware narrative generation', 'Real-time story customization', 'Scalable cloud architecture', 'Interactive storytelling experience']
      },
      'Tulsi Disease Detection': {
        tag: 'CV / ML',
        concept: 'Agricultural plant disease detection remains a significant challenge, especially for traditional medicinal plants like Tulsi. This system provides end-to-end automated disease detection using computer vision, helping farmers and cultivators identify and address plant health issues early.',
        architecture: 'Pipeline-based CV system with custom CNN architecture for feature extraction and classification. OpenCV handles image preprocessing and augmentation. The model is trained on custom dataset of Tulsi leaf images with various disease conditions.',
        techStack: ['Python', 'TensorFlow', 'OpenCV', 'Custom CNNs', 'Image Preprocessing', 'Flask API'],
        differentiators: ['Custom-trained model for Tulsi-specific diseases', 'End-to-end pipeline from capture to diagnosis', 'Lightweight deployment for field use', 'High accuracy disease classification']
      },
      'Probity.ai – AI Humanization': {
        tag: 'NLP / LLM',
        concept: 'Probity.ai addresses a fundamental flaw in the AI-detection ecosystem: per-request API dependency and word-count billing, which makes large-scale integrity checks expensive and unsustainable. It is designed as a content integrity layer that both detects AI-generated text and rewrites it to reintroduce human-like linguistic entropy.',
        architecture: 'The platform introduces a Local Sieve Architecture: A large, locally indexed corpus (Common Crawl–derived) performs low-cost similarity, entropy, and statistical checks. Only when text crosses an uncertainty threshold does the system escalate to paid or heavier LLM-based verification. The Humanizer component injects controlled burstiness and adjusts perplexity distributions.',
        techStack: ['NLP Pipelines', 'Token-level Entropy Analysis', 'N-gram Frequency', 'Hybrid LLM Architecture', 'Local Text Indexing', 'Custom Rewriting Heuristics'],
        differentiators: ['Near-zero marginal cost per check', 'Detection + remediation in one pipeline', 'Privacy-first with no forced cloud transmission', 'Local Sieve Architecture for efficient processing']
      },
      'CyberRakshak – Digital Airbag': {
        tag: 'Security / ML',
        concept: 'CyberRakshak is built on the idea that fraud prevention must be pre-transaction, not post-loss. Existing systems alert users after money is gone. This project reframes cybersecurity as real-time risk interception, similar to an airbag deploying before physical damage.',
        architecture: 'Multi-layer AI defense system: Perception Layer monitors SMS, calls, UPI links, audio, and video. Inference Layer applies NLP, anomaly detection, and CV models. Intervention Layer blocks actions and triggers alerts. Evidence Layer auto-generates tamper-proof forensic reports. Family Trust Circle introduces humans as fallback control.',
        techStack: ['TensorFlow Lite', 'NLP Transformers', 'PyTorch CNNs', 'Deepfake Detection', 'Isolation Forests', 'Autoencoders', 'React Native', 'Node.js'],
        differentiators: ['On-device inference for privacy & latency', 'AI + human hybrid security model', 'Legal-evidence-aware system design', 'Pre-transaction fraud prevention']
      },
      'BharatNiti – Leadership Sim': {
        tag: 'LLM / GenAI',
        concept: 'BharatNiti addresses the lack of experiential learning in political science and governance education. Reading theory does not prepare users for real-time decision complexity. This platform converts live political news into interactive decision-making simulations.',
        architecture: 'The platform converts live political news into structured decision trees. News is parsed into actors, conflicts, constraints, and objectives. Scenarios are generated using prompt-engineered LLM pipelines. User responses are evaluated across leadership dimensions including risk, empathy, and decisiveness.',
        techStack: ['Python', 'Flask', 'NewsAPI', 'LLaMA Models', 'Ollama', 'Rule + LLM Hybrid Evaluation'],
        differentiators: ['Real-world data to simulated governance conversion', 'Skill-based AI feedback loops', 'Multi-dimensional leadership assessment', 'Live news integration for current scenarios']
      },
      'Bias Detection AI': {
        tag: 'NLP / CV',
        concept: 'Bias often operates below conscious awareness, making audits ineffective. This system targets implicit bias, not explicit discrimination, using multimodal inference to detect subconscious bias patterns in communication and behavior.',
        architecture: 'Uses multimodal inference across three channels: Text analysis for linguistic bias signals using BERT, Audio processing for tone and sentiment bias using Wav2Vec, and Video analysis for gesture and posture indicators using OpenPose. Bias metrics are informed by social psychology frameworks like IAT (Implicit Association Test).',
        techStack: ['BERT', 'Wav2Vec', 'OpenPose', 'Fairness-aware ML', 'Multimodal Fusion', 'Social Psychology Frameworks'],
        differentiators: ['Real-time bias nudging', 'Context-sensitive fairness modeling', 'Multimodal implicit bias detection', 'Psychology-informed metrics']
      },
      'FaceMark – Attendance System': {
        tag: 'CV / ML',
        concept: 'Designed for environments where deep learning is overkill, FaceMark prioritizes simplicity, deployability, and explainability. It provides face recognition-based attendance tracking using classical computer vision techniques that require no GPU.',
        architecture: 'Pipeline-based CV system using Haar Cascade for face detection and LBPH (Local Binary Patterns Histograms) for feature extraction and classification. The system follows a deterministic training and recognition cycle with fully transparent recognition logic.',
        techStack: ['OpenCV', 'Python', 'Flask', 'Haar Cascade', 'LBPH Algorithm', 'Classical ML'],
        differentiators: ['Lightweight with no GPU dependency', 'Fully transparent recognition logic', 'Simple deployment requirements', 'Explainable AI approach']
      },
      'India Economic Dashboard': {
        tag: 'Data Science',
        concept: 'Raw economic data is inaccessible without contextual visualization and comparison. This analytics platform transforms complex economic indicators into understandable, interactive visualizations for policy analysis and research.',
        architecture: 'ETL pipelines normalize multi-scale indicators from various sources. Statistical transformations enable fair comparison across different metrics. Correlation matrices reveal systemic relationships between economic factors. Interactive dashboards provide real-time exploration.',
        techStack: ['Pandas', 'NumPy', 'Streamlit', 'Plotly', 'ETL Pipelines', 'Statistical Analysis'],
        differentiators: ['Multi-indicator normalization', 'Policy-grade analytics tooling', 'Interactive correlation analysis', 'Accessible economic insights']
      },
      'MarvelTimeVault': {
        tag: 'Web / UI',
        concept: 'Most timeline websites are informational but not experiential. MarvelTimeVault transforms movie timeline browsing into a cinematic, immersive experience using advanced animation techniques and premium interaction design.',
        architecture: 'JSON-driven content layer separates data from presentation. Animation-first rendering philosophy ensures smooth, engaging transitions. Theme systems are modeled as state machines, enabling dynamic visual customization. GSAP with ScrollTrigger creates scroll-based cinematic effects.',
        techStack: ['GSAP', 'ScrollTrigger', 'Tailwind CSS', 'Vanilla JS', 'JSON Data Layer', 'State Machine Theming'],
        differentiators: ['Cinematic UX engineering', 'Premium interaction design', 'Animation-first philosophy', 'Immersive timeline experience']
      },
      'BMMCT – Community Platform': {
        tag: 'Web',
        concept: 'Community organizations lack modern digital infrastructure for member engagement and event management. BMMCT provides a comprehensive web platform tailored for community organization needs with cultural-scale content management.',
        architecture: 'Static-first, performance-optimized architecture ensures fast loading and reliability. Year-indexed event archival enables easy browsing of historical events. Firebase Hosting provides scalable, secure deployment with global CDN distribution.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase Hosting', 'Static Architecture', 'CDN Deployment'],
        differentiators: ['Cultural-scale content management', 'Performance-optimized static architecture', 'Year-indexed event system', 'Community-focused design']
      },
      'Pal Classes – Learning Platform': {
        tag: 'Web / EdTech',
        concept: 'Students struggle due to fragmented conceptual understanding across subjects. Pal Classes provides a curriculum-aligned learning platform that organizes content by concepts rather than chapters, enabling deeper understanding.',
        architecture: 'Concept-first content structuring organizes material by understanding rather than textbook order. Progressive difficulty layering ensures students build knowledge systematically. Exam-aligned pedagogy connects learning directly to assessment requirements.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Vanilla Web Stack', 'Responsive Design', 'Content Management'],
        differentiators: ['Exam-aligned pedagogy', 'Concept-first content structuring', 'Progressive difficulty layering', 'Student-centric learning paths']
      },
      'Godfather Chatbot': {
        tag: 'LLM / GenAI',
        concept: 'Most chatbots fail at character consistency, breaking immersion when responses drift from the intended persona. The Godfather Chatbot maintains faithful character representation through advanced prompt engineering and temperature tuning.',
        architecture: 'Prompt-engineered persona locking ensures consistent character voice and behavior. Controlled randomness via temperature tuning balances creativity with consistency. LangChain provides conversation memory and context management for coherent multi-turn interactions.',
        techStack: ['LLaMA 3', 'Ollama', 'LangChain', 'Prompt Engineering', 'Temperature Tuning', 'Persona Locking'],
        differentiators: ['Narrative-consistent AI responses', 'Persona-faithful character voice', 'Advanced prompt engineering', 'Immersive conversational experience']
      }
    };

    // Open modal with project data
    function openModal(projectTitle) {
      const project = projectsData[projectTitle];

      if (project) {
        document.getElementById('modalTitle').textContent = projectTitle;
        document.getElementById('modalTag').textContent = project.tag;
        document.getElementById('modalConcept').textContent = project.concept;
        document.getElementById('modalArchitecture').textContent = project.architecture;

        // Tech Stack
        const techStackContainer = document.getElementById('modalTechStack');
        techStackContainer.innerHTML = project.techStack.map(tech =>
          `<span class="project-modal__tech-item"><i class="fas fa-check-circle"></i>${tech}</span>`
        ).join('');

        // Differentiators
        const differentiatorsList = document.getElementById('modalDifferentiators');
        differentiatorsList.innerHTML = project.differentiators.map(diff =>
          `<li>${diff}</li>`
        ).join('');

        modal.classList.add('active');
        document.body.classList.add('modal-open');
      }
    }

    // Close modal
    function closeModal() {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }

    // Event listeners for portfolio cards (click anywhere on the card)
    const portfolioCards = document.querySelectorAll('.portfolio__card');
    portfolioCards.forEach(card => {
      card.addEventListener('click', function (e) {
        const title = this.querySelector('.portfolio__title').textContent;
        openModal(title);
      });
    });

    // Close button events
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

});
