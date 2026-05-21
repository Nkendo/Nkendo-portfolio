document.addEventListener('DOMContentLoaded', function () {

  const burger = document.querySelector('.navbar__burger');
  const links = document.querySelector('.navbar__links');

  if (burger && links) {
    burger.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.navbar__links a');

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Merci pour votre message ! Le formulaire est une démonstration front-end.');
    contactForm.reset();
  });
}