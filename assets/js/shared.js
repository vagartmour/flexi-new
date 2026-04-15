// ═══════════════════════════════════════════════
// FLEXI — SHARED JAVASCRIPT
// Applies to all pages site-wide
// ═══════════════════════════════════════════════

// ── 1. Nav glow on scroll ──────────────────────
const navPill = document.querySelector('.nav-pill');
if (navPill) {
  window.addEventListener('scroll', () => {
    navPill.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── 2. Scroll fade-in (IntersectionObserver) ──
function initFadeObserver() {
  const fadeEls = document.querySelectorAll('.fade-up');
  const fadeObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        fadeObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  fadeEls.forEach(el => fadeObs.observe(el));
  // Fallback: ensure all fade-up elements become visible after 2s
  setTimeout(() => {
    document.querySelectorAll('.fade-up:not(.visible)').forEach(el => el.classList.add('visible'));
  }, 2000);
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFadeObserver);
} else {
  initFadeObserver();
}

// ── 3. Hamburger / Drawer ─────────────────────
const hamburger = document.getElementById('hamburger');
const drawer    = document.getElementById('drawer');

if (hamburger && drawer) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = drawer.classList.contains('open');
    drawer.classList.toggle('open', !isOpen);
    hamburger.classList.toggle('open', !isOpen);
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !hamburger.contains(e.target)) {
      drawer.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      drawer.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // ── Drawer accordion ───────────────────────────
  document.querySelectorAll('.drawer-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const sub    = btn.nextElementSibling;
      const icon   = btn.querySelector('.drawer-toggle-icon');
      const isOpen = sub.classList.contains('open');

      document.querySelectorAll('.drawer-sub').forEach(s => s.classList.remove('open'));
      document.querySelectorAll('.drawer-toggle').forEach(b => {
        b.classList.remove('open');
        const i = b.querySelector('.drawer-toggle-icon');
        if (i) i.textContent = '+';
      });

      if (!isOpen) {
        sub.classList.add('open');
        btn.classList.add('open');
        if (icon) icon.textContent = '−';
        btn.setAttribute('aria-expanded', 'true');
      } else {
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
