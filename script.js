const firstImage = document.querySelector('.first');
const oneImage = document.querySelector('.one');

firstImage.addEventListener('mouseenter', function() {
  oneImage.classList.add('enlarged');
});

firstImage.addEventListener('mouseleave', function() {
  oneImage.classList.remove('enlarged');
});

const secondImage = document.querySelector('.second');
const twoImage = document.querySelector('.two');

secondImage.addEventListener('mouseenter', function() {
  twoImage.classList.add('enlarge');
});

secondImage.addEventListener('mouseleave', function() {
  twoImage.classList.remove('enlarge');
});

const thirdImage = document.querySelector('.third');
const threeImage = document.querySelector('.three');

thirdImage.addEventListener('mouseenter', function() {
  threeImage.classList.add('enlarged');
});

thirdImage.addEventListener('mouseleave', function() {
  threeImage.classList.remove('enlarged');
});

const fourthImage = document.querySelector('.fourth');
const fourImage = document.querySelector('.four');

fourthImage.addEventListener('mouseenter', function() {
  fourImage.classList.add('enlarged');
});

fourthImage.addEventListener('mouseleave', function() {
  fourImage.classList.remove('enlarged');
});

const fivethImage = document.querySelector('.fiveth');
const fiveImage = document.querySelector('.five');

fivethImage.addEventListener('mouseenter', function() {
  fiveImage.classList.add('enlarged');
});

fivethImage.addEventListener('mouseleave', function() {
  fiveImage.classList.remove('enlarged');
});