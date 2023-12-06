document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "images/scooter-guy.webp",
    "images/jeep-girl.webp",
    "images/flirt.webp",
    "images/joy.webp",
    "images/exploring.webp",
  ];

  const slideshowImg = document.getElementById("slideshow-img");
  let currentImageIndex = 0;

  function changeImage() {
    slideshowImg.style.opacity = 0; 

    setTimeout(function () {
      slideshowImg.src = images[currentImageIndex];
      slideshowImg.style.opacity = 1; 
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 700); 
  }

  // Change image every 3 seconds
  setInterval(changeImage, 3000);

  changeImage();
});
