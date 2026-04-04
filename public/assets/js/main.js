/**
 * main.js — Portfolio interactions
 * No AOS. No jQuery. Pure DOM API.
 */

import { initProjects } from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ── Theme toggle (light / dark) ────────────────────────
  const THEME_KEY = 'rishav-theme';
  const html = document.documentElement;

  // Restore saved theme or default to dark
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === 'light') {
    html.setAttribute('data-theme', 'light');
  }

  // Update toggle icon to match current theme
  function updateToggleIcon() {
    const icon = document.querySelector('#themeToggle i');
    if (!icon) return;
    const isLight = html.getAttribute('data-theme') === 'light';
    icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
  }

  updateToggleIcon();

  // Attach click handler to all theme toggle buttons (one per page)
  document.querySelectorAll('#themeToggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const isLight = html.getAttribute('data-theme') === 'light';
      if (isLight) {
        html.removeAttribute('data-theme');
        localStorage.setItem(THEME_KEY, 'dark');
      } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem(THEME_KEY, 'light');
      }
      updateToggleIcon();
    });
  });

  // ── Certifications carousel (about.html) ───────────────
  const certCarousel = document.getElementById('certCarousel');
  if (certCarousel) {
    const groups = certCarousel.querySelectorAll('.cert-group');
    const dots = certCarousel.querySelectorAll('.cert-dot');
    let currentIndex = 0;

    function showGroup(index) {
      currentIndex = ((index % groups.length) + groups.length) % groups.length;
      groups.forEach(g => g.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      if (groups[currentIndex]) groups[currentIndex].classList.add('active');
      if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    }

    // Dot clicks
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        showGroup(parseInt(dot.dataset.dot));
      });
    });

    // Arrow clicks
    certCarousel.querySelectorAll('.cert-arrow').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dir = btn.dataset.dir;
        if (dir === 'prev') showGroup(currentIndex - 1);
        else showGroup(currentIndex + 1);
      });
    });

    // Click cards to advance
    certCarousel.addEventListener('click', (e) => {
      if (e.target.closest('.cert-dot') || e.target.closest('.cert-arrow')) return;
      showGroup(currentIndex + 1);
    });
  }

  // ── Footer year ─────────────────────────────────────
  document.querySelectorAll('#footerYear').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // ── Mobile nav toggle ────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    navMenu.querySelectorAll('.nav__link, .nav__cta').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open')
          && !navToggle.contains(e.target)
          && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // ── Header scroll effect ─────────────────────────────
  const header = document.getElementById('header');
  if (header) {
    const handleHeaderScroll = () => {
      header.classList.toggle('header--scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll();
  }

  // ── Scroll-reveal (replace AOS) ──────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(el => observer.observe(el));
  }

  // ── Scroll to top ─────────────────────────────────────
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Smooth scroll for anchor links ───────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ── Projects (load from JSON & render) ───────────────
  initProjects();

  // ── Modal close logic ─────────────────────────────────
  const modal = document.getElementById('projectModal');
  if (modal) {
    const closeModal = () => {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    // Close buttons / backdrop
    modal.querySelectorAll('[data-modal-close]').forEach(el => {
      el.addEventListener('click', closeModal);
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
  }

  // ── Contact form ─────────────────────────────────────
  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('submitBtn');
  const submitText = document.getElementById('submitText');
  const submitIcon = document.getElementById('submitIcon');
  const statusEl   = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Basic client-side validation
      const name    = form.querySelector('#name');
      const email   = form.querySelector('#email');
      const message = form.querySelector('#message');

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        showStatus('error', 'Please fill in all required fields.');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showStatus('error', 'Please enter a valid email address.');
        return;
      }

      // Loading state
      submitBtn.disabled = true;
      submitText.textContent = 'Sending…';
      submitIcon.className = 'fas fa-spinner fa-spin';
      submitIcon.style.fontSize = '0.75rem';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          showStatus('success', '✓ Message sent. I\'ll get back to you within 24 hours.');
          form.reset();
        } else {
          const data = await res.json().catch(() => ({}));
          const msg = data?.errors?.map(e => e.message).join(', ')
                    || 'Something went wrong. Please email me directly.';
          showStatus('error', msg);
        }
      } catch {
        showStatus('error', 'Network error. Please email me at rishav4805@gmail.com');
      } finally {
        submitBtn.disabled = false;
        submitText.textContent = 'Send message';
        submitIcon.className = 'fas fa-paper-plane';
        submitIcon.style.fontSize = '0.75rem';
      }
    });
  }

  function showStatus(type, msg) {
    if (!statusEl) return;
    statusEl.className = `form-status ${type}`;
    statusEl.textContent = msg;
    statusEl.style.display = 'flex';
    if (type === 'success') {
      setTimeout(() => { statusEl.style.display = 'none'; }, 8000);
    }
  }

  // ── Typed.js (index only) ─────────────────────────────
  const typedEl = document.getElementById('typed-text');
  if (typedEl && typeof Typed !== 'undefined') {
    new Typed('#typed-text', {
      strings: [
        'LLM pipelines',
        'computer vision systems',
        'production ML models',
        'AI agents',
        'offline AI apps',
      ],
      typeSpeed: 55,
      backSpeed: 28,
      backDelay: 1800,
      startDelay: 600,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });
  }
});