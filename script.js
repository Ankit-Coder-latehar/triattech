/* ============================================================
   TRIATECH — script.js
   Interactive behaviours for the red & white website
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. HEADER SCROLL EFFECT ─────────────────────────── */
  const header = document.getElementById('header');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
      backToTop.classList.add('visible');
    } else {
      header.classList.remove('scrolled');
      backToTop.classList.remove('visible');
    }
  }, { passive: true });

  backToTop.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );

  /* ── 2. MOBILE HAMBURGER ─────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
    }
  });

  /* ── 3. SEARCH TOGGLE ───────────────────────────────── */
  const searchToggle = document.getElementById('searchToggle');
  const searchBar    = document.getElementById('searchBar');
  const globalSearch = document.getElementById('globalSearch');

  searchToggle.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
      setTimeout(() => globalSearch.focus(), 150);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') searchBar.classList.remove('active');
  });

  /* ── 4. SMOOTH SCROLL FOR NAV LINKS ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = header.offsetHeight + 16;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - offset,
          behavior: 'smooth'
        });
        // close mobile nav
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
      }
    });
  });

  /* ── 5. TESTIMONIALS CAROUSEL ───────────────────────── */
  const track    = document.getElementById('testimonialsTrack');
  const cards    = track ? track.querySelectorAll('.testimonial-card') : [];
  const dotsWrap = document.getElementById('testimDots');
  const prevBtn  = document.getElementById('testimPrev');
  const nextBtn  = document.getElementById('testimNext');

  if (cards.length && dotsWrap) {
    let current = 0;
    let perView = getPerView();
    let total   = Math.ceil(cards.length / perView);
    let autoPlay;

    function getPerView() {
      if (window.innerWidth < 600) return 1;
      if (window.innerWidth < 900) return 2;
      return 3;
    }

    // Build dots
    function buildDots() {
      dotsWrap.innerHTML = '';
      for (let i = 0; i < total; i++) {
        const d = document.createElement('button');
        d.className = 'dot' + (i === current ? ' active' : '');
        d.setAttribute('aria-label', `Slide ${i + 1}`);
        d.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(d);
      }
    }

    function goTo(idx) {
      current = (idx + total) % total;
      const cardWidth  = cards[0].offsetWidth + 24; // 24 = gap
      track.style.transform = `translateX(-${current * perView * cardWidth}px)`;
      dotsWrap.querySelectorAll('.dot').forEach((d, i) =>
        d.classList.toggle('active', i === current)
      );
    }

    function resetAutoplay() {
      clearInterval(autoPlay);
      autoPlay = setInterval(() => goTo(current + 1), 5000);
    }

    prevBtn.addEventListener('click', () => { goTo(current - 1); resetAutoplay(); });
    nextBtn.addEventListener('click', () => { goTo(current + 1); resetAutoplay(); });

    // Touch / swipe support
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { goTo(current + (diff > 0 ? 1 : -1)); resetAutoplay(); }
    });

    // Recalc on resize
    window.addEventListener('resize', () => {
      const newPer = getPerView();
      if (newPer !== perView) {
        perView = newPer;
        total   = Math.ceil(cards.length / perView);
        current = 0;
        buildDots();
        goTo(0);
      }
    }, { passive: true });

    buildDots();
    resetAutoplay();
  }

  /* ── 6. CONTACT FORM SUBMIT ─────────────────────────── */
  window.handleFormSubmit = (e) => {
    e.preventDefault();
    const btn     = e.target.querySelector('button[type="submit"]');
    const success = document.getElementById('formSuccess');

    btn.disabled = true;
    btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending…';

    setTimeout(() => {
      btn.innerHTML = '<i class="fa fa-check"></i> Message Sent!';
      btn.style.background = '#16A34A';
      success.classList.add('show');
      e.target.reset();

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = 'Send Message <i class="fa fa-paper-plane"></i>';
        btn.style.background = '';
        success.classList.remove('show');
      }, 5000);
    }, 1600);
  };

  /* ── 7. SCROLL-IN ANIMATIONS ────────────────────────── */
  const animElems = document.querySelectorAll(
    '.solution-card, .expertise-card, .insight-card, ' +
    '.metric-card, .testimonial-card, .why-feature, ' +
    '.contact-item, .footer-col'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp .5s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Stagger children in grids
  document.querySelectorAll(
    '.solutions-grid, .expertise-grid, .why-metrics, .insights-grid'
  ).forEach(grid => {
    Array.from(grid.children).forEach((child, i) => {
      child.style.opacity = '0';
      child.style.animationDelay = `${i * 80}ms`;
      observer.observe(child);
    });
  });

  animElems.forEach(el => {
    if (!el.closest('.solutions-grid, .expertise-grid, .why-metrics, .insights-grid')) {
      el.style.opacity = '0';
      observer.observe(el);
    }
  });

  // Inject keyframes if not already present
  if (!document.getElementById('anim-styles')) {
    const style = document.createElement('style');
    style.id = 'anim-styles';
    style.textContent = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }

  /* ── 8. MARQUEE PAUSE ON HOVER ──────────────────────── */
  const marquee = document.querySelector('.marquee-track');
  if (marquee) {
    marquee.addEventListener('mouseenter', () =>
      marquee.style.animationPlayState = 'paused'
    );
    marquee.addEventListener('mouseleave', () =>
      marquee.style.animationPlayState = 'running'
    );
  }

  /* ── 9. ACTIVE NAV LINK HIGHLIGHT ───────────────────── */
  const sections   = document.querySelectorAll('section[id]');
  const navLinks   = document.querySelectorAll('.nav-list .nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active-nav',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  // Inject active nav style
  const navStyle = document.createElement('style');
  navStyle.textContent = `.nav-link.active-nav { color: var(--red); background: var(--red-pale); }`;
  document.head.appendChild(navStyle);

  /* ── 10. COUNTER ANIMATION ──────────────────────────── */
  const counters = document.querySelectorAll('.metric-number');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.dataset.animated) return;
      entry.target.dataset.animated = 'true';

      const el      = entry.target;
      const text    = el.textContent;
      const suffix  = el.querySelector('span') ? el.querySelector('span').textContent : '';
      const numStr  = text.replace(suffix, '').trim();
      const target  = parseFloat(numStr.replace(/[^0-9.]/g, ''));
      const hasPlus = numStr.includes('+');
      const prefix  = '';
      const dur     = 2000;
      const start   = performance.now();

      function update(now) {
        const prog   = Math.min((now - start) / dur, 1);
        const eased  = 1 - Math.pow(1 - prog, 3);
        const val    = Math.round(eased * target);
        el.innerHTML = `${prefix}${val}${hasPlus ? '+' : ''}<span>${suffix}</span>`;
        if (prog < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  /* ── 11. EXPERTISE CARD RIPPLE ──────────────────────── */
  document.querySelectorAll('.expertise-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const ripple = document.createElement('span');
      const rect   = card.getBoundingClientRect();
      ripple.style.cssText = `
        position:absolute;width:4px;height:4px;background:rgba(204,0,0,.3);
        border-radius:50%;left:${e.clientX-rect.left}px;top:${e.clientY-rect.top}px;
        transform:scale(0);animation:ripple .6s ease-out forwards;pointer-events:none;
      `;
      card.style.position = 'relative';
      card.style.overflow = 'hidden';
      card.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });

  if (!document.getElementById('ripple-style')) {
    const rs = document.createElement('style');
    rs.id = 'ripple-style';
    rs.textContent = `@keyframes ripple{to{transform:scale(80);opacity:0;}}`;
    document.head.appendChild(rs);
  }

});

