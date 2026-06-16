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

  function handleNavScroll() {
    if (window.scrollY > 10) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
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


  // ── 4. PROJECT FILTERING ────────────────────────────────

  var filterButtons = document.querySelectorAll('.filter-btn');
  var projectItems = document.querySelectorAll('.project__item');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      // Update active state
      filterButtons.forEach(function (b) {
        b.classList.remove('filter-btn--active');
      });
      btn.classList.add('filter-btn--active');

      // Show/hide projects
      projectItems.forEach(function (item) {
        var category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.classList.remove('project__item--hidden');
        } else {
          item.classList.add('project__item--hidden');
        }
      });
    });
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

      // Simulate send (replace with Formspree/Netlify endpoint)
      setTimeout(function () {
        contactStatus.textContent = 'Message sent! I\'ll get back to you soon.';
        contactStatus.classList.add('contact__status--success');
        submit.disabled = false;
        submit.textContent = 'Send message';
        contactForm.reset();

        // Clear success message after 5s
        setTimeout(function () {
          contactStatus.textContent = '';
          contactStatus.className = 'contact__status';
        }, 5000);
      }, 800);
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

  var fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0) {
    // Respect prefers-reduced-motion
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      fadeElements.forEach(function (el) {
        el.classList.add('fade-in--visible');
      });
    } else {
      var fadeObserver = new IntersectionObserver(function (entries) {
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


  // ── 7. FOOTER YEAR ──────────────────────────────────────

  var yearEl = document.getElementById('footerYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();