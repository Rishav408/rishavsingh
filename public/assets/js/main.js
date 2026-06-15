/* ============================================================
   main.js — Rishav Singh Portfolio
   
   Minimal JS. Only what's needed:
   1. Nav border on scroll
   2. Active nav link (IntersectionObserver)
   3. Mobile nav drawer
   4. Footer year
   ============================================================ */

(function () {
  'use strict';

  // ── 1. NAV BORDER ON SCROLL ──────────────────────────────

  const nav = document.getElementById('nav');

  function handleNavScroll() {
    if (window.scrollY > 10) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // initial check


  // ── 2. ACTIVE NAV LINK ───────────────────────────────────

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  const drawerLinks = document.querySelectorAll('.nav__drawer-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  function setActiveLink(id) {
    navLinks.forEach(link => {
      if (link.getAttribute('href') === '#' + id) {
        link.classList.add('nav__link--active');
      } else {
        link.classList.remove('nav__link--active');
      }
    });

    drawerLinks.forEach(link => {
      if (link.getAttribute('href') === '#' + id) {
        link.classList.add('nav__drawer-link--active');
      } else {
        link.classList.remove('nav__drawer-link--active');
      }
    });
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  }, observerOptions);

  sections.forEach(function (section) {
    observer.observe(section);
  });


  // ── 3. MOBILE NAV DRAWER ────────────────────────────────

  const navToggle = document.getElementById('navToggle');
  const navDrawer = document.getElementById('navDrawer');

  if (navToggle && navDrawer) {
    navToggle.addEventListener('click', function () {
      const isOpen = navDrawer.classList.contains('nav__drawer--open');

      if (isOpen) {
        navDrawer.classList.remove('nav__drawer--open');
        navToggle.classList.remove('nav__toggle--open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        navDrawer.classList.add('nav__drawer--open');
        navToggle.classList.add('nav__toggle--open');
        navToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close drawer when a link is clicked
    drawerLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navDrawer.classList.remove('nav__drawer--open');
        navToggle.classList.remove('nav__toggle--open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }


  // ── 4. FOOTER YEAR ──────────────────────────────────────

  const yearEl = document.getElementById('footerYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();