document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('mouseenter',()=>btn.style.scale='1.05');
  btn.addEventListener('mouseleave',()=>btn.style.scale='1');
});

// Modo claro/oscuro
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'light'){
  document.documentElement.setAttribute('data-theme','light');
  themeToggle.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if(isLight){
    document.documentElement.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme','dark');
  } else {
    document.documentElement.setAttribute('data-theme','light');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme','light');
  }
});

// Animación al hacer scroll (fade-in)
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealElements.forEach(el => observer.observe(el));

// Botón volver arriba
const backToTop = document.getElementById('backToTop');
if(backToTop){
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
