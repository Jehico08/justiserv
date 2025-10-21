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


