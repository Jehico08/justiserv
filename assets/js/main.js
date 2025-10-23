document.addEventListener('DOMContentLoaded', () => {
  // ==== ANIMACIÓN SCROLL (reveal) ====
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('show');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('show'));
  }

  // ==== AÑO DEL FOOTER ====
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ==== MENÚ RESPONSIVE ====
  const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.textContent = isOpen ? '✕' : '☰';
  });
  }
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/justiserv/sw.js")
      .then(() => console.log("✅ Service Worker registrado"))
      .catch(err => console.error("SW error:", err));
  });
}
// Registrar el Service Worker (PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/justiserv/sw.js')
      .then(() => console.log('✅ Service Worker activo'))
      .catch(err => console.error('Error SW:', err));
  });
}
// ===== Menú móvil (sheet) =====
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const sheet  = document.getElementById('mobileMenu');
  if (!toggle || !sheet) return;

  const overlay = sheet.querySelector('.sheet-overlay');
  const closers = sheet.querySelectorAll('[data-close]');

  const open = () => {
    sheet.hidden = false;
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
    // marcar activo según URL también en el sheet
    highlightCurrentLinks();
  };
  const close = () => {
    sheet.hidden = true;
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', open);
  overlay?.addEventListener('click', close);
  closers.forEach(b => b.addEventListener('click', close));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

  // resetea si el viewport vuelve a desktop
  const mql = window.matchMedia('(min-width: 961px)');
  mql.addEventListener('change', (e) => { if (e.matches) close(); });

  // resaltar enlace activo (desktop + móvil)
  function highlightCurrentLinks(){
    const here = location.pathname.replace(/\/+$/,'') || '/';
    document.querySelectorAll('.nav-desktop .nav-link, .sheet-nav .menu-link').forEach(a => {
      const href = (a.getAttribute('href') || '').replace(/\/+$/,'') || '/';
      const isCurrent =
        (href === '/' && here === '/') ||
        (href !== '/' && here.startsWith(href));
      a.classList.toggle('is-current', isCurrent);
    });
  }
  highlightCurrentLinks();
})();
// ===== Menú móvil (sheet) + enlace activo =====
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const sheet  = document.getElementById('mobileMenu');
  if (!toggle || !sheet) return;

  const overlay = sheet.querySelector('.sheet-overlay');
  const closers = sheet.querySelectorAll('[data-close]');

  const open = () => {
    sheet.hidden = false;
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
    highlightCurrentLinks();
  };
  const close = () => {
    sheet.hidden = true;
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', open);
  overlay?.addEventListener('click', close);
  closers.forEach(el => el.addEventListener('click', close));
  window.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  // 🔧 Marca activo en desktop y móvil, robusto frente a barras finales y <base>
  function normPath(p){
    try {
      // resuelve relativos con el origin actual
      const u = new URL(p, location.origin);
      let s = u.pathname;
      // quita barra final excepto en "/"
      if (s.length > 1 && s.endsWith('/')) s = s.slice(0,-1);
      return s || '/';
    } catch {
      return '/';
    }
  }
  function highlightCurrentLinks(){
    const here = normPath(location.pathname);
    const links = document.querySelectorAll('.nav-desktop .nav-link, .sheet-nav .menu-link');
    links.forEach(a => {
      const href = a.getAttribute('href') || '/';
      const path = normPath(href);
      const isCurrent = (path === '/' && here === '/') || (path !== '/' && here.startsWith(path));
      a.classList.toggle('is-current', isCurrent);
    });
  }
  highlightCurrentLinks();

  // Cierra sheet si el viewport vuelve a escritorio
  const mql = window.matchMedia('(min-width: 961px)');
  mql.addEventListener('change', e => { if (e.matches) close(); });
})();


