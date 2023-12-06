function darkmode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Optionally, you can also update other elements on the page based on the dark mode state
    const modeIcon = document.getElementById("mode-icon");
    if (body.classList.contains("dark-mode")) {
        // Dark mode is active
        modeIcon.src = "images/moon.svg"; // Replace with the moon icon or any other dark mode icon
    } else {
        // Light mode is active
        modeIcon.src = "images/sun.svg"; // Replace with the sun icon or any other light mode icon
    }
};