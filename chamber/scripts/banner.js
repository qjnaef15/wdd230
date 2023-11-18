// banner.js

document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('meet-and-greet-banner');
    const closeButton = document.getElementById('close-banner-button');

    // Check if today is Monday, Tuesday, or Wednesday
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        // Show the banner
        banner.classList.add('show'); // Add a class to control visibility

        // Add event listener to close the banner
        closeButton.addEventListener('click', function () {
            banner.classList.remove('show'); // Remove the class to hide the banner
        });
    }
});
