const firstLink = document.querySelector('.second-link');
const oneLink = document.querySelector('.dropdown-menu');

firstLink.addEventListener('mouseenter', function() {
  oneLink.classList.add('show');
});

firstLink.addEventListener('mouseleave', function() {
  oneLink.classList.remove('show');
});

const secondLink = document.querySelector('.third_link');
const twoLink = document.querySelector('.dropdown-two');

secondLink.addEventListener('mouseenter', function() {
  twoLink.classList.add('show');
});

secondLink.addEventListener('mouseleave', function() {
  twoLink.classList.remove('show');
});