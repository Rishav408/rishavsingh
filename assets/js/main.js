/**
 * ========================================
 * PORTFOLIO WEBSITE - MAIN.JS
 * Interactivity & Animations
 * ========================================
 */

document.addEventListener('DOMContentLoaded', function() {
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
          'Machine Learning Engineer',
          'AI Researcher',
          'Deep Learning Enthusiast'
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
      mobileToggle.addEventListener('click', function() {
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
        link.addEventListener('click', function() {
          if (window.innerWidth < 1200) {
            header.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
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
      link.addEventListener('click', function(e) {
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
      window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
          scrollToTopBtn.classList.add('visible');
        } else {
          scrollToTopBtn.classList.remove('visible');
        }
      });

      // Scroll to top on click
      scrollToTopBtn.addEventListener('click', function() {
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
      button.addEventListener('click', function() {
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
      contactForm.addEventListener('submit', function(e) {
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

});
