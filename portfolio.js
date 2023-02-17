
const images = document.querySelectorAll('.gallery-image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentImage = 0;

document.addEventListener('DOMContentLoaded', function () {
  // Set the first image to be active
  images[currentImage].classList.add('active');

  // Add event listeners to the buttons
  prevButton.addEventListener('click', showPrevImage);
  nextButton.addEventListener('click', showNextImage);

  function showPrevImage() {
    images[currentImage].classList.remove('active');
    currentImage--;
    if (currentImage < 0) {
      currentImage = images.length - 1;
    }
    images[currentImage].classList.add('active');
  }

  function showNextImage() {
    images[currentImage].classList.remove('active');
    currentImage++;
    if (currentImage >= images.length) {
      currentImage = 0;
    }
    images[currentImage].classList.add('active');
  }
});









  
  