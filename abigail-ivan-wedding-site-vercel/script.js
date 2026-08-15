const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.querySelector('#rsvp-form');
const status = form.querySelector('.form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || 'Invitado';
  status.textContent = `Gracias, ${name}. Tu formulario está listo para conectarse a Google Forms, Formspree o a tu propio servicio de confirmaciones.`;
});
