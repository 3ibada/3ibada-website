// ===================================
// 3ibada - Multilingual Website JS
// ===================================

// Language Configuration
const languages = {
  fr: { code: 'fr', dir: 'ltr', name: 'Français' },
  ar: { code: 'ar', dir: 'rtl', name: 'العربية' },
  en: { code: 'en', dir: 'ltr', name: 'English' },
  tr: { code: 'tr', dir: 'ltr', name: 'Türkçe' },
  id: { code: 'id', dir: 'ltr', name: 'Indonesia' },
  ur: { code: 'ur', dir: 'rtl', name: 'اردو' }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  initLanguage();
  initScrollEffects();
  initMobileMenu();
  initScrollReveal();
});

// Language Detection & Switching
function initLanguage() {
  let currentLang = getCurrentLanguage();
  document.documentElement.dir = languages[currentLang].dir;
  document.body.dir = languages[currentLang].dir;
  updateLanguageButtons(currentLang);
  
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      switchLanguage(this.dataset.lang);
    });
  });
}

function getCurrentLanguage() {
  const path = window.location.pathname;
  const match = path.match(/-(fr|ar|en|tr|id|ur)\.html$/);
  if (match) return match[1];
  
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang && languages[savedLang]) return savedLang;
  
  const browserLang = navigator.language.split('-')[0];
  if (languages[browserLang]) return browserLang;
  
  return 'fr';
}

function updateLanguageButtons(activeLang) {
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === activeLang) {
      btn.classList.add('active');
    }
  });
}

function switchLanguage(targetLang) {
  localStorage.setItem('preferred-language', targetLang);
  
  const currentPath = window.location.pathname;
  let newPath = '';
  
  if (currentPath.includes('privacy')) {
    newPath = `privacy-${targetLang}.html`;
  } else if (currentPath.includes('terms')) {
    newPath = `terms-${targetLang}.html`;
  } else if (currentPath.includes('contact')) {
    newPath = `contact-${targetLang}.html`;
  } else {
    newPath = `index-${targetLang}.html`;
  }
  
  window.location.replace('/' + newPath);
}

// Scroll Effects
function initScrollEffects() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Mobile Menu
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
  }
}

// Scroll Reveal Animation
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        element.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Track initial page view
function trackPageView(page) {
  console.log('Page view:', page);
}
trackPageView(window.location.pathname);
