document.addEventListener('DOMContentLoaded', () => {
  // Revela los elementos con .reveal cuando entran en viewport
  const reveal = (el) => {
    el.classList.add('show');
  };

  const items = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          reveal(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach((el) => io.observe(el));
  } else {
    // Fallback si no hay IntersectionObserver
    items.forEach((el) => reveal(el));
  }

  // Año del footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
  // ==== MENÚ RESPONSIVE ====
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Cierra el menú al hacer clic en un enlace
    document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }
document.addEventListener('DOMContentLoaded', () => {
  // Revela los elementos con .reveal cuando entran en viewport
  const reveal = (el) => {
    el.classList.add('show');
  };

  const items = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          reveal(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach((el) => io.observe(el));
  } else {
    // Fallback si no hay IntersectionObserver
    items.forEach((el) => reveal(el));
  }

  // Año del footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ==== MENÚ RESPONSIVE ====
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Cierra el menú al hacer clic en un enlace
    document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }
});
