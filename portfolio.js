const images = document.querySelectorAll('.gallery-image');
let index = 0;

document.addEventListener('DOMContentLoaded', function () {
  // Set the first image as active
  images[index].classList.add('active');

  // Add event listeners to the images
  images.forEach((image, i) => {
    image.addEventListener('click', () => {
      console.log("registered click");
      // Remove the active class from the current image
      images[index].classList.remove('active');

      // Set the clicked image as active
      index = i;
      images[index].classList.add('active');
    });
  });
});




  
  