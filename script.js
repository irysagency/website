/* ═══════════════════════════════════════════
   IRYS AGENCY — Script principal
   Site vitrine · V1 · Mars 2026
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── NAV SCROLL ─── */
  const nav = document.getElementById('nav');
  const handleNavScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* ─── HAMBURGER MENU ─── */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.nav__mobile-link, .nav__mobile-menu .btn-primary');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    });
  });

  /* ─── SMOOTH SCROLL ─── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        const navHeight = nav.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ─── STAT COUNTER ANIMATION ─── */
  const statNumbers = document.querySelectorAll('.hero__stat-number');
  let statsAnimated = false;

  const animateCounter = (element) => {
    const target = parseInt(element.dataset.target);
    const prefix = element.dataset.prefix || '';
    const suffix = element.dataset.suffix || '';
    const duration = 2000;
    const startTime = performance.now();

    const formatNumber = (num) => {
      if (num >= 1000) {
        // Format avec espace pour les milliers
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      }
      return num.toString();
    };

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      element.textContent = prefix + formatNumber(current) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        statNumbers.forEach((el, i) => {
          setTimeout(() => animateCounter(el), i * 200);
        });
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });

  if (statNumbers.length > 0) {
    statsObserver.observe(statNumbers[0].closest('.hero__stats'));
  }

  /* ─── SCROLL REVEAL ANIMATIONS ─── */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ─── PORTFOLIO FILTERS ─── */
  const filterButtons = document.querySelectorAll('.portfolio__filter');
  const portfolioItems = document.querySelectorAll('.phone-mockup');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      portfolioItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  /* ─── VIDEO OVERLAY ─── */
  const overlay = document.getElementById('video-overlay');
  const videoPlayer = document.getElementById('video-player');
  const closeBtn = overlay.querySelector('.video-overlay__close');

  const openVideo = (vimeoId) => {
    videoPlayer.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    overlay.classList.add('active');
    document.body.classList.add('no-scroll');
  };

  const closeVideo = () => {
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
    // Petit délai pour laisser l'animation de fermeture jouer
    setTimeout(() => {
      videoPlayer.innerHTML = '';
    }, 300);
  };

  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      const vimeoId = item.dataset.vimeo;
      if (vimeoId) {
        openVideo(vimeoId);
      }
    });
  });

  closeBtn.addEventListener('click', closeVideo);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeVideo();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeVideo();
    }
  });

  /* ─── FAQ ACCORDION ─── */
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Fermer tous les autres
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle celui-ci
      item.classList.toggle('active');
      question.setAttribute('aria-expanded', !isOpen);
    });

    // Navigation clavier
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });

  /* ─── CALENDLY LAZY LOAD ─── */
  const calendlyContainer = document.getElementById('calendly-container');

  if (calendlyContainer) {
    const calendlyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Remplace par ton vrai lien Calendly
          calendlyContainer.innerHTML = `<iframe src="https://calendly.com/irysagency?hide_gdpr_banner=1&background_color=141414&text_color=f5f0e8&primary_color=7b2fbe" style="width:100%;height:700px;border:none;border-radius:20px;" loading="lazy"></iframe>`;
          calendlyObserver.disconnect();
        }
      });
    }, {
      rootMargin: '200px'
    });

    calendlyObserver.observe(calendlyContainer);
  }

});
