/* ============================================================
   main.js — Rishav Singh Portfolio
   
   Features:
   1. Nav border on scroll
   2. Active nav link (IntersectionObserver)
   3. Mobile nav drawer
   4. Project tag filtering
   5. Contact form validation
   6. Subtle scroll fade-in
   7. Footer year
   ============================================================ */

(function () {
  'use strict';

  // ── 1. NAV BORDER ON SCROLL ──────────────────────────────

  var nav = document.getElementById('nav');
  var scrollProgress = document.getElementById('scrollProgress');

  function handleNavScroll() {
    if (window.scrollY > 10) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }

    // Update scroll progress
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPercent = (scrollTop / docHeight) * 100;
    if (scrollProgress) {
      scrollProgress.style.width = scrollPercent + '%';
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();


  // ── 2. ACTIVE NAV LINK ───────────────────────────────────

  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav__link');
  var drawerLinks = document.querySelectorAll('.nav__drawer-link');

  var observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      if (link.getAttribute('href') === '#' + id) {
        link.classList.add('nav__link--active');
      } else {
        link.classList.remove('nav__link--active');
      }
    });

    drawerLinks.forEach(function (link) {
      if (link.getAttribute('href') === '#' + id) {
        link.classList.add('nav__drawer-link--active');
      } else {
        link.classList.remove('nav__drawer-link--active');
      }
    });
  }

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  }, observerOptions);

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });


  // ── 3. MOBILE NAV DRAWER ────────────────────────────────

  var navToggle = document.getElementById('navToggle');
  var navDrawer = document.getElementById('navDrawer');

  function closeDrawer() {
    navDrawer.classList.remove('nav__drawer--open');
    navToggle.classList.remove('nav__toggle--open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openDrawer() {
    navDrawer.classList.add('nav__drawer--open');
    navToggle.classList.add('nav__toggle--open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  if (navToggle && navDrawer) {
    navToggle.addEventListener('click', function () {
      if (navDrawer.classList.contains('nav__drawer--open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    // Close drawer on link click
    drawerLinks.forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });

    // Close drawer on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navDrawer.classList.contains('nav__drawer--open')) {
        closeDrawer();
        navToggle.focus();
      }
    });
  }


  // ── 4. DYNAMIC PROJECTS & MODAL DEEP-DIVE ───────────────

  var filterButtons = document.querySelectorAll('.filter-btn');
  var allProjects = [];

  // Modal DOM Elements
  var modal = document.getElementById('projectModal');
  var modalCloseBtn = document.getElementById('modalCloseBtn');
  var modalImage = document.getElementById('modalImage');
  var modalTitle = document.getElementById('modalTitle');
  var modalTags = document.getElementById('modalTags');
  var modalConcept = document.getElementById('modalConcept');
  var modalArchitecture = document.getElementById('modalArchitecture');
  var modalArchDiagram = document.getElementById('modalArchDiagram');
  var modalTechStack = document.getElementById('modalTechStack');
  var modalDifferentiators = document.getElementById('modalDifferentiators');
  var modalGithubLink = document.getElementById('modalGithubLink');
  
  var lastFocusedElement = null;

  // Icon SVG Mapping Definitions
  var ICON_SVGS = {
    'type': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',
    'globe': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    'filter': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    'search-check': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="m9 11 2 2 4-4"/></svg>',
    'activity': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    'video': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',
    'scan': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>',
    'target': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    'brain': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v12"/><path d="M8 10c0-2.5 1.5-4 4-4"/><path d="M16 10c0-2.5-1.5-4-4-4"/><path d="M8 14c0 2.5 1.5 4 4 4"/><path d="M16 14c0 2.5-1.5 4-4 4"/></svg>',
    'file-text': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    'user-plus': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>',
    'mic': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
    'cpu': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>',
    'message-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
    'clipboard-check': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><polyline points="9 11 12 14 17 9"/></svg>',
    'home': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    'log-in': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>',
    'users': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    'layout-dashboard': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>',
    'bell': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
    'search': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    'database': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>',
    'vector-square': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><circle cx="15" cy="15" r="2"/></svg>',
    'microchip': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 15h3"/><path d="M1 9h3"/><path d="M1 15h3"/></svg>',
    'reply': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>',
    'comment': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    'robot': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/></svg>',
    'magic': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="m15 4-2 2 2 2 2-2-2-2z"/><path d="M5 21v-8l12-12 8 8-12 12H5z"/><path d="M19 11l-4-4"/></svg>',
    'check': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><polyline points="20 6 9 17 4 12"/></svg>',
    'newspaper': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M16 8h2"/><path d="M16 12h2"/><path d="M16 16h2"/><path d="M6 8h6v8H6z"/></svg>',
    'project-diagram': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="10" y="3" width="4" height="4"/><rect x="3" y="17" width="4" height="4"/><rect x="17" y="17" width="4" height="4"/><path d="M12 7v6"/><path d="M5 17v-4h14v4"/></svg>',
    'user-check': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>',
    'microphone': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
    'balance-scale': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><line x1="12" y1="3" x2="12" y2="21"/><line x1="7" y1="16" x2="17" y2="16"/><path d="M5 7h14"/><path d="M19 7v5a3 3 0 0 1-6 0V7"/><path d="M11 7v5a3 3 0 0 1-6 0V7"/></svg>',
    'camera': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
    'face-smile': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
    'chart-line': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
    'clipboard-list': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="15" y2="16"/><line x1="9" y1="8" x2="10" y2="8"/></svg>',
    'ethernet': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>',
    'chart-pie': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>',
    'chart-bar': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>'
  };

  function getIconSvg(name) {
    var cleanName = (name || '').toLowerCase().trim();
    return ICON_SVGS[cleanName] || '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>';
  }

  // Cross-category matching algorithm based on tags & primary values
  function projectMatchesFilter(project, filter) {
    if (filter === 'all') return true;

    var category = (project.category || '').toLowerCase();
    var tags = (project.tags || []).map(function (t) { return t.toLowerCase(); });

    if (filter === 'ai') {
      return category === 'ai' || 
             tags.indexOf('nlp') !== -1 || 
             tags.indexOf('cv') !== -1 || 
             tags.indexOf('llm') !== -1 || 
             tags.indexOf('rag') !== -1 || 
             tags.indexOf('genai') !== -1 || 
             tags.indexOf('ml') !== -1 || 
             tags.indexOf('computer vision') !== -1 || 
             tags.indexOf('healthcare ai') !== -1 || 
             tags.indexOf('local llm') !== -1;
    }

    if (filter === 'backend') {
      return category === 'app' || 
             category === 'backend' ||
             tags.indexOf('fastapi') !== -1 || 
             tags.indexOf('flask') !== -1 || 
             tags.indexOf('node.js') !== -1 || 
             tags.indexOf('mongodb') !== -1 || 
             tags.indexOf('sql') !== -1 || 
             tags.indexOf('java') !== -1 || 
             tags.indexOf('spark java') !== -1 || 
             tags.indexOf('etl') !== -1 || 
             tags.indexOf('data science') !== -1 ||
             tags.indexOf('local llm') !== -1 ||
             tags.indexOf('offline-first') !== -1;
    }

    if (filter === 'web') {
      return category === 'web' || 
             tags.indexOf('react') !== -1 || 
             tags.indexOf('typescript') !== -1 || 
             tags.indexOf('vanilla js') !== -1 || 
             tags.indexOf('ui') !== -1 || 
             tags.indexOf('animation') !== -1 || 
             tags.indexOf('firebase') !== -1 || 
             tags.indexOf('html5') !== -1 || 
             tags.indexOf('css3') !== -1 ||
             tags.indexOf('responsive') !== -1;
    }

    return false;
  }

  // Render project cards to grid container
  function renderProjects(projects, filter) {
    var gridContainer = document.getElementById('projectGrid');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';

    var filtered = projects.filter(function (p) {
      return projectMatchesFilter(p, filter);
    });

    var countEl = document.getElementById('projectCount');
    if (countEl) countEl.textContent = filtered.length + ' projects';

    var arrowSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

    filtered.forEach(function (project, index) {
      var tagsHtml = (project.tags || []).map(function (tag) {
        return '<span class="tag">' + tag + '</span>';
      }).join('');

      var card = document.createElement('article');
      card.className = 'project-card fade-in';
      card.style.transitionDelay = (index * 50) + 'ms';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', 'View details for ' + project.title);

      card.innerHTML =
        '<div class="project-card__img-wrap">' +
          '<img src="' + (project.image || '') + '" alt="' + project.title + '" class="project-card__img" loading="lazy">' +
        '</div>' +
        '<div class="project-card__body">' +
          '<div class="project-card__header">' +
            '<h3 class="project-card__name">' + project.title + '</h3>' +
            (project.github
              ? '<a href="' + project.github + '" target="_blank" rel="noopener" class="project-card__gh-link" aria-label="GitHub" onclick="event.stopPropagation()">' + arrowSvg + '</a>'
              : '') +
          '</div>' +
          '<p class="project-card__desc">' + project.description + '</p>' +
          '<div class="project-card__tags">' + tagsHtml + '</div>' +
        '</div>';

      card.addEventListener('click', function () { openModal(project); });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(project);
        }
      });

      gridContainer.appendChild(card);
    });

    if (typeof initScrollFadeIn === 'function') initScrollFadeIn();

    // Initialize 3D tilt effect on project cards
    initCardTilt();
  }

  // ── 3D CARD TILT EFFECT ───────────────────────────────────

  function initCardTilt() {
    var cards = document.querySelectorAll('.project-card');
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    cards.forEach(function (card) {
      card.addEventListener('mousemove', handleCardTilt);
      card.addEventListener('mouseleave', resetCardTilt);
    });
  }

  function handleCardTilt(e) {
    var card = e.currentTarget;
    var rect = card.getBoundingClientRect();
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;
    
    var mouseX = e.clientX - centerX;
    var mouseY = e.clientY - centerY;
    
    var maxRotation = 6;
    var rotateX = (mouseY / (rect.height / 2)) * -maxRotation;
    var rotateY = (mouseX / (rect.width / 2)) * maxRotation;
    
    card.classList.add('tilting');
    card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-3px)';
  }

  function resetCardTilt(e) {
    var card = e.currentTarget;
    card.classList.remove('tilting');
    card.style.transform = '';
  }

  // Populate and open custom modal
  function openModal(project) {
    if (!modal) return;
    lastFocusedElement = document.activeElement;

    modalImage.src = project.image || '';
    modalImage.alt = project.title;
    modalTitle.textContent = project.title;

    modalTags.innerHTML = (project.tags || []).map(function (tag) {
      return '<span class="tag">' + tag + '</span>';
    }).join('');

    modalConcept.textContent = project.concept || project.description;
    modalArchitecture.textContent = project.architecture || '';

    // Generate interactive system architecture flowchart pipeline
    modalArchDiagram.innerHTML = '';
    if (project.archSteps && project.archSteps.length > 0) {
      var diagContainer = document.createElement('div');
      diagContainer.className = 'arch-diagram';
      
      project.archSteps.forEach(function (step, index) {
        var stepEl = document.createElement('div');
        stepEl.className = 'arch-step';
        stepEl.innerHTML = 
          '<div class="arch-step__icon-box" title="' + step.label + '">' +
            getIconSvg(step.icon) +
          '</div>' +
          '<span class="arch-step__label">' + step.label + '</span>';
        diagContainer.appendChild(stepEl);

        if (index < project.archSteps.length - 1) {
          var arrowEl = document.createElement('div');
          arrowEl.className = 'arch-connector';
          arrowEl.innerHTML = '→';
          diagContainer.appendChild(arrowEl);
        }
      });
      modalArchDiagram.appendChild(diagContainer);
    }

    modalTechStack.innerHTML = (project.techStack || []).map(function (tech) {
      return '<span class="tag">' + tech + '</span>';
    }).join('');

    modalDifferentiators.innerHTML = (project.differentiators || []).map(function (diff) {
      return '<li class="modal-diff-item">' + diff + '</li>';
    }).join('');

    if (project.github) {
      modalGithubLink.href = project.github;
      modalGithubLink.style.display = 'inline-flex';
    } else {
      modalGithubLink.style.display = 'none';
    }

    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    modalCloseBtn.focus();

    modal.addEventListener('keydown', trapFocus);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    modal.removeEventListener('keydown', trapFocus);

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;

    var focusables = modal.querySelectorAll('button, a[href], [tabindex="0"]');
    if (focusables.length === 0) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        last.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  }

  // Modal event listeners
  if (modal) {
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  // Fetch all projects and bind filtering handlers
  fetch('data/projects.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      allProjects = data;
      renderProjects(allProjects, 'all');

      filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var filter = btn.getAttribute('data-filter');

          filterButtons.forEach(function (b) {
            b.classList.remove('filter-btn--active');
          });
          btn.classList.add('filter-btn--active');

          renderProjects(allProjects, filter);
        });
      });
    })
    .catch(function (err) {
      console.error('Failed to load projects database:', err);
    });


  // ── 5. CONTACT FORM VALIDATION ──────────────────────────

  var contactForm = document.getElementById('contactForm');
  var contactStatus = document.getElementById('contactStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('contactName');
      var email = document.getElementById('contactEmail');
      var message = document.getElementById('contactMessage');
      var submit = document.getElementById('contactSubmit');
      var valid = true;

      // Clear previous errors
      [name, email, message].forEach(function (field) {
        field.classList.remove('input--error');
      });
      contactStatus.textContent = '';
      contactStatus.className = 'contact__status';

      // Validate name
      if (!name.value.trim()) {
        name.classList.add('input--error');
        valid = false;
      }

      // Validate email
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
        email.classList.add('input--error');
        valid = false;
      }

      // Validate message
      if (!message.value.trim()) {
        message.classList.add('input--error');
        valid = false;
      }

      if (!valid) {
        contactStatus.textContent = 'Please fill in all fields correctly.';
        contactStatus.classList.add('contact__status--error');
        return;
      }

      // Disable submit while "sending"
      submit.disabled = true;
      submit.textContent = 'Sending…';

      fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(contactForm)
      }).then(function(response) {
        if (response.ok) {
          contactStatus.textContent = "Message sent. I'll be in touch.";
          contactStatus.classList.add('contact__status--success');
          contactForm.reset();
        } else {
          contactStatus.textContent = "Oops! There was a problem submitting your form";
          contactStatus.classList.add('contact__status--error');
        }
      }).catch(function(error) {
        contactStatus.textContent = "Oops! There was a problem submitting your form";
        contactStatus.classList.add('contact__status--error');
      }).finally(function() {
        submit.disabled = false;
        submit.textContent = 'Send message';
        setTimeout(function() {
          contactStatus.textContent = '';
          contactStatus.className = 'contact__status';
        }, 5000);
      });
    });

    // Clear error state on input
    ['contactName', 'contactEmail', 'contactMessage'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', function () {
          el.classList.remove('input--error');
        });
      }
    });
  }


  // ── 6. SCROLL FADE-IN ───────────────────────────────────

  var fadeObserver;
  function initScrollFadeIn() {
    var fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length > 0) {
      // Respect prefers-reduced-motion
      var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReduced) {
        fadeElements.forEach(function (el) {
          el.classList.add('fade-in--visible');
        });
      } else {
        if (fadeObserver) {
          fadeObserver.disconnect();
        }
        fadeObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in--visible');
              fadeObserver.unobserve(entry.target);
            }
          });
        }, {
          root: null,
          rootMargin: '0px 0px -60px 0px',
          threshold: 0.1
        });

        fadeElements.forEach(function (el) {
          fadeObserver.observe(el);
        });
      }
    }
  }

  // Initial call to attach observers
  initScrollFadeIn();


  // ── 7. FOOTER YEAR ──────────────────────────────────────

  var yearEl = document.getElementById('footerYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();
