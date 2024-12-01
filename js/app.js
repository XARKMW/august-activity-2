// Nav scroll behaviour
let lastScrollTop = 0;

const navbar = document.querySelector('.navbar');

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (scrollTop > lastScrollTop) {
    navbar.classList.add('navbar-hidden');
  } else {
    navbar.classList.remove('navbar-hidden');
  }

  lastScrollTop = scrollTop;
}

window.addEventListener('scroll', handleScroll);
