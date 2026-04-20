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

// ── 2. Hamburger / Drawer ─────────────────────
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

// ── 3. Contact form submit ─────────────────────
// Called via onsubmit="contactSubmit(event)" in contact partial
function contactSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.contact-submit');
  btn.textContent = 'Message Sent ✓';
  btn.style.background = 'var(--surface2)';
  btn.style.color = 'var(--accent)';
  btn.disabled = true;
}

// ── 4. Load HTML partials ─────────────────────
// Usage: <div data-include="contact"></div>
// Loads from assets/partials/{name}.html and replaces the placeholder
async function loadPartials() {
  const elements = document.querySelectorAll('[data-include]');
  if (!elements.length) return;
  for (const el of Array.from(elements)) {
    const name = el.dataset.include;
    try {
      const res = await fetch(`assets/partials/${name}.tpl`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();
      const tpl = document.createElement('template');
      tpl.innerHTML = html;
      el.replaceWith(tpl.content);
    } catch (err) {
      console.warn(`Partial "${name}" not loaded:`, err.message);
    }
  }
}

// ── 5. Scroll fade-in (IntersectionObserver) ──
// Runs after partials so it catches any fade-up elements inside them
function initFadeObserver() {
  const fadeEls = document.querySelectorAll('.fade-up');
  if (!fadeEls.length) return;
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

// ── Init ───────────────────────────────────────
// Load partials first, then init fade observer so it sees all elements
document.addEventListener('DOMContentLoaded', async () => {
  await loadPartials();
  initFadeObserver();
});
