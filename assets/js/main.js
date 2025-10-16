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
