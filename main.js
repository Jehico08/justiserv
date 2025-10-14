// Año en footer
const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

// Resaltar link activo por ruta
const path=location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link[data-page]').forEach(a=>{
  if(a.dataset.page===path) a.classList.add('active');
});

// Animación al hacer visible
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

