document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav scroll ── */
  const nav = document.getElementById('nav');
  const checkScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();

  /* ── Hamburger ── */
  const ham = document.getElementById('ham');
  const mob = document.getElementById('mob');
  ham.addEventListener('click', () => {
    const open = ham.classList.toggle('on');
    mob.classList.toggle('on');
    document.body.classList.toggle('locked', open);
  });
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('on');
    mob.classList.remove('on');
    document.body.classList.remove('locked');
  }));

  /* ── Smooth scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      e.preventDefault();
      const target = document.querySelector(id);
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 20;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  /* ── Scroll reveal ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.rv').forEach(el => revealObserver.observe(el));

  /* ── Parallax blobs on mouse move ── */
  const blobs = document.querySelectorAll('.hero__blob');
  if (blobs.length && !('ontouchstart' in window)) {
    let mouseX = 0, mouseY = 0;
    let blobX = 0, blobY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function animateBlobs() {
      blobX += (mouseX - blobX) * 0.03;
      blobY += (mouseY - blobY) * 0.03;

      blobs.forEach((blob, i) => {
        const factor = (i + 1) * 15;
        const x = blobX * factor;
        const y = blobY * factor;
        blob.style.transform += ''; // Force recalc
        blob.style.setProperty('--mx', x + 'px');
        blob.style.setProperty('--my', y + 'px');
        blob.style.translate = `${x}px ${y}px`;
      });

      requestAnimationFrame(animateBlobs);
    }
    animateBlobs();
  }

  /* ── Phone tilt on mouse move ── */
  const phoneFrame = document.querySelector('.hero__phone-frame');
  if (phoneFrame && !('ontouchstart' in window)) {
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', e => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      phoneFrame.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    });
    hero.addEventListener('mouseleave', () => {
      phoneFrame.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
    });
  }

  /* ── Stat counters ── */
  const nums = document.querySelectorAll('.stats-band__num');
  let counterDone = false;

  const formatNum = (n, sep) => {
    if (!sep) return n.toString();
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  };

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const sep = el.dataset.sep || '';
    const duration = 2200;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = prefix + formatNum(current, sep) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counterDone) {
        counterDone = true;
        nums.forEach((el, i) => setTimeout(() => animateCounter(el), i * 180));
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });

  const statsContainer = document.querySelector('.stats-band__in');
  if (statsContainer) statsObserver.observe(statsContainer);

});
