const hamburger = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('#navbarNav');

hamburger.addEventListener('click', function() {
  navbar.classList.toggle('show');
});
