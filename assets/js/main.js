// Año en el footer
(function(){
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Marcar link activo (escritorio y sheet) por ruta
(function(){
  var path = location.pathname.replace(/\/+$/,'/') || '/';
  // normaliza: /index.html => /
  if (/index\.html$/i.test(path)) path = '/';

  // escritorio
  document.querySelectorAll('.nav-desktop .nav-link').forEach(function(a){
    var href = a.getAttribute('href') || '';
    var norm = href.endsWith('index.html') ? href.replace(/index\.html$/i,'') : href;
    if (norm === path) a.classList.add('is-current');
  });

  // móvil (sheet)
  document.querySelectorAll('#mobileMenu .menu-link').forEach(function(a){
    var href = a.getAttribute('href') || '';
    var norm = href.endsWith('index.html') ? href.replace(/index\.html$/i,'') : href;
    if (norm === path) a.classList.add('is-current');
  });
})();

// Animación reveal on-scroll
(function(){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting){
        e.target.classList.add('show');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
})();

// Menú móvil (sheet)
(function(){
  var toggle = document.querySelector('.nav-toggle');
  var sheet  = document.getElementById('mobileMenu');
  if (!toggle || !sheet) return;

  var overlay = sheet.querySelector('.sheet-overlay');
  var closeBtn = sheet.querySelector('.sheet-close');

  function openSheet(){
    sheet.hidden = false;
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded','true');
  }
  function closeSheet(){
    sheet.hidden = true;
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded','false');
  }

  toggle.addEventListener('click', openSheet);
  if (overlay) overlay.addEventListener('click', closeSheet);
  if (closeBtn) closeBtn.addEventListener('click', closeSheet);

  // Cerrar con Esc
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !sheet.hidden) closeSheet();
  });

  // Cerrar al hacer click en cualquier link del menú móvil
  sheet.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', closeSheet);
  });
})();


