// Hamburger Menu

let hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('header');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('responsive');

});

// Add active class to navigation links
document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    var currentPage = window.location.pathname.split("/").pop();

    // Remove arrows from all links
    var arrowSpans = document.querySelectorAll(".arrow");
    arrowSpans.forEach(function(arrow) {
      arrow.style.display = "none";
    });

    // Show arrow on the link corresponding to the current page
    var currentArrow = document.getElementById(currentPage + "-arrow");
    if (currentArrow) {
      currentArrow.style.display = "inline-block";
    }
  });