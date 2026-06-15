/* ============================================================
   RADHA VAISHNAVI — script.js  (SpaceX dark edition)
   ============================================================ */

// ── 1. Star field canvas ──────────────────────────────────
(function initStars() {
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function buildStars(n) {
    stars = Array.from({ length: n }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      r:  Math.random() * 1.2 + 0.2,
      a:  Math.random(),
      da: (Math.random() - 0.5) * 0.004,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.a = Math.max(0.05, Math.min(1, s.a + s.da));
      if (s.a <= 0.05 || s.a >= 1) s.da *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,190,255,${s.a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  buildStars(280);
  draw();
  window.addEventListener('resize', () => { resize(); buildStars(280); });
})();

// ── 2. Nav: scroll glass + active link ───────────────────
const header   = document.getElementById('site-header');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const SECTIONS = ['about','skills','projects','experience','certifications','contact'];

function getActiveId() {
  const threshold = window.scrollY + window.innerHeight * 0.35;
  let active = SECTIONS[0];
  SECTIONS.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= threshold) active = id;
  });
  return active;
}

function updateNav() {
  header.classList.toggle('scrolled', window.scrollY > 30);
  const id = getActiveId();
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
}

let raf = 0;
window.addEventListener('scroll', () => {
  if (raf) return;
  raf = requestAnimationFrame(() => { raf = 0; updateNav(); });
}, { passive: true });
window.addEventListener('resize', updateNav);
updateNav();

// ── 3. Smooth scroll + close mobile menu ─────────────────
const hamburger  = document.getElementById('nav-toggle');
const navLinksEl = document.getElementById('nav-links');

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const sel = a.getAttribute('href');
    if (!sel || sel === '#') return;
    const target = document.querySelector(sel);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    navLinksEl.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    setTimeout(updateNav, 600);
  });
});

hamburger.addEventListener('click', () => {
  const open = navLinksEl.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
});

// ── 4. Typewriter in hero-sub ─────────────────────────────
// Hero sub has a span we can animate — but here we do it subtly
// so the text fades in word by word
(function heroEntrance() {
  const body = document.querySelector('.hero-body');
  if (!body) return;
  const kids = body.children;
  Array.from(kids).forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s,
                            transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  });
  // Photo
  const photo = document.querySelector('.hero-photo-wrap');
  if (photo) {
    photo.style.opacity = '0';
    photo.style.transition = 'opacity 1.2s ease 0.5s';
    setTimeout(() => { photo.style.opacity = '1'; }, 100);
  }
})();

// ── 5. Scroll reveal — adds class, never hides on load ───
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('sx-reveal');
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.section-title, .body-text, .contact-title, .contact-sub').forEach(el => {
  revealObs.observe(el);
});

// Staggered children
const childObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const children = entry.target.querySelectorAll(
      '.skill-block, .proj-card, .tl-item, .cert-card, .contact-pill, .edu-row'
    );
    const cls = ['sx-reveal','sx-reveal-d1','sx-reveal-d2','sx-reveal-d3','sx-reveal-d4','sx-reveal-d5'];
    children.forEach((child, i) => {
      setTimeout(() => child.classList.add(cls[Math.min(i, cls.length - 1)]), i * 75);
    });
    childObs.unobserve(entry.target);
  });
}, { threshold: 0.05 });

document.querySelectorAll(
  '.skill-blocks, .proj-grid, .timeline, .cert-grid, .contact-row, .edu-list'
).forEach(el => childObs.observe(el));
