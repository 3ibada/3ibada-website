// ===================================
// 3ibada - Multilingual Website JS
// ===================================

// Language Configuration
const languages = {
  fr: {
    code: 'fr',
    dir: 'ltr',
    name: 'Français'
  },
  ar: {
    code: 'ar',
    dir: 'rtl',
    name: 'العربية'
  },
  en: {
    code: 'en',
    dir: 'ltr',
    name: 'English'
  }
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
  // Get current language from URL or localStorage
  let currentLang = getCurrentLanguage();
  
  // Set document direction
  document.documentElement.dir = languages[currentLang].dir;
  document.body.dir = languages[currentLang].dir;
  
  // Update active language button
  updateLanguageButtons(currentLang);
  
  // Add language switcher event listeners
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      switchLanguage(this.dataset.lang);
    });
  });
}

function getCurrentLanguage() {
  // Check URL first
  const path = window.location.pathname;
  
  if (path.includes('privacy-ar') || path.includes('terms-ar')) return 'ar';
  if (path.includes('privacy-en') || path.includes('terms-en')) return 'en';
  if (path.includes('privacy-fr') || path.includes('terms-fr')) return 'fr';
  
  if (path.includes('-ar.html')) return 'ar';
  if (path.includes('-en.html')) return 'en';
  if (path.includes('-fr.html')) return 'fr';
  
  // Check localStorage
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang && languages[savedLang]) {
    return savedLang;
  }
  
  // Detect browser language
  const browserLang = navigator.language.split('-')[0];
  if (languages[browserLang]) {
    return browserLang;
  }
  
  // Default to French
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
  // Save preference
  localStorage.setItem('preferred-language', targetLang);
  
  // Get current page type
  const currentPath = window.location.pathname;
  let newPath = '';
  
  // Determine new path based on current page
  if (currentPath.includes('privacy')) {
    newPath = `privacy-${targetLang}.html`;
  } else if (currentPath.includes('terms')) {
    newPath = `terms-${targetLang}.html`;
  } else if (currentPath.includes('contact')) {
    newPath = `contact-${targetLang}.html`;
  } else {
    // Default to index page (handles both / and /index-XX.html)
    newPath = `index-${targetLang}.html`;
  }
  
  // Navigate to new page - use replace to avoid cache issues
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
      const revealPoint = 100;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form Validation (for contact page)
function validateContactForm(form) {
  const email = form.querySelector('input[type="email"]');
  const message = form.querySelector('textarea');
  
  let isValid = true;
  
  // Email validation
  if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    showError(email, 'Please enter a valid email address');
    isValid = false;
  }
  
  // Message validation
  if (message.value.trim().length < 10) {
    showError(message, 'Message must be at least 10 characters');
    isValid = false;
  }
  
  return isValid;
}

function showError(input, message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  errorDiv.style.color = 'red';
  errorDiv.style.fontSize = '0.875rem';
  errorDiv.style.marginTop = '0.25rem';
  
  // Remove existing error if any
  const existingError = input.parentElement.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
  
  input.parentElement.appendChild(errorDiv);
  input.style.borderColor = 'red';
  
  // Remove error on input
  input.addEventListener('input', function() {
    errorDiv.remove();
    input.style.borderColor = '';
  }, { once: true });
}

// Copy to Clipboard (for sharing links)
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification('Link copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--violet-deep);
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    box-shadow: 0 10px 30px rgba(107, 70, 193, 0.3);
    z-index: 10000;
    animation: slideUp 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideDown 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Lazy Loading Images
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Page Performance
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  initLazyLoading();
}

// Analytics (placeholder - replace with actual analytics)
function trackPageView(page) {
  console.log('Page view:', page);
  // Add Google Analytics or other tracking here
}

// Track initial page view
trackPageView(window.location.pathname);
