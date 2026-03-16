/**
 * main.js – Entry point for all interactions
 */

import { initProjects } from './projects.js';

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Set current year in footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize AOS (scroll animations)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }

  // Initialize Typed.js
  const typedEl = document.getElementById('typed-text');
  if (typedEl && typeof Typed !== 'undefined') {
    new Typed('#typed-text', {
      strings: [
        'LLM pipelines',
        'computer vision systems',
        'production ML models',
        'AI agents',
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });
  }


  // Initialize Projects (load from JSON)
  initProjects();

  // Mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = navToggle.getAttribute('aria-expanded') === 'true' ? false : true;
      navToggle.setAttribute('aria-expanded', expanded);
      navMenu.classList.toggle('active');
      document.body.style.overflow = expanded ? 'hidden' : ''; // Prevent scroll behind menu
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // Smooth scroll for anchor links
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

  // Header scroll effect
  const header = document.getElementById('header');
  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }
  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll();

  // Active nav link based on current page and scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  const path = window.location.pathname;
  let fileName = path.split('/').pop() || 'index.html';
  if (fileName === '/' || fileName === '') fileName = 'index.html';

  function setActiveLink() {
    let currentSection = '';
    const scrollY = window.scrollY + 120;

    // 1. Try to find if we're on a specific section of the page
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    // 2. Set active class based on section OR whole page
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      
      // Highlight if same file and same hash (or if no hash and it's the current file)
      if (href.startsWith('#')) {
          if ('#' + currentSection === href) {
              link.classList.add('active');
          }
      } else if (href === fileName) {
          // If we're on the same file, only highlight if no other section is specifically highlighted
          // but usually on a multi-page, we just highlight the page link.
          link.classList.add('active');
      }
    });
  }
  
  if (sections.length > 1 && fileName === 'index.html') {
      window.addEventListener('scroll', setActiveLink);
  }
  setActiveLink();

  // Scroll to top button
  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Contact form handling (with Formspree)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const statusEl = document.getElementById('formStatus');
      statusEl.className = 'form-status';
      statusEl.style.display = 'none';

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' },
        });
        if (response.ok) {
          statusEl.textContent = 'Thank you! Your message has been sent.';
          statusEl.classList.add('success');
          statusEl.style.display = 'block';
          contactForm.reset();
        } else {
          const data = await response.json();
          if (data.errors) {
            statusEl.textContent = data.errors.map(e => e.message).join(', ');
          } else {
            throw new Error('Form submission failed');
          }
          statusEl.classList.add('error');
          statusEl.style.display = 'block';
        }
      } catch (error) {
        statusEl.textContent = 'Oops! There was a problem sending your message.';
        statusEl.classList.add('error');
        statusEl.style.display = 'block';
      }

      // Hide after 5 seconds
      setTimeout(() => {
        statusEl.style.display = 'none';
      }, 5000);
    });
  }

  // Modal close handlers
  const modal = document.getElementById('projectModal');
  const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
  if (modal) {
    modalCloseButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});