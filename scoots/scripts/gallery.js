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
    slideshowImg.style.opacity = 0; // Set opacity to 0 for a fade-out effect

    setTimeout(function () {
      slideshowImg.src = images[currentImageIndex];
      slideshowImg.style.opacity = 1; // Set opacity to 1 for a fade-in effect
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 700); // Adjust the delay to match the CSS transition duration
  }

  // Change image every 3 seconds (adjust as needed)
  setInterval(changeImage, 3000);

  // Initial image load
  changeImage();
});
