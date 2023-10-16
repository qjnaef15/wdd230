// Get references to the button and the navigation menu
const hamburgerButton = document.getElementById("hamburger-menu");
const navigationMenu = document.querySelector("nav ul");

// Add a click event listener to the hamburger button
hamburgerButton.addEventListener("click", function () {
    // Toggle the visibility of the navigation menu
    navigationMenu.classList.toggle("show-menu");
    hamburgerButton.classList.toggle('active');
});
