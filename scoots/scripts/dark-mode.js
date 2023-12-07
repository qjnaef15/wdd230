function darkmode() {
    const body = document.body;
    const modeIcon = document.getElementById("mode-icon");
    const isDarkMode = body.classList.toggle("dark-mode");

    // Update the mode icon based on the dark mode state
    if (isDarkMode) {
        modeIcon.src = "images/moon.svg"; // Replace with the moon icon or any other dark mode icon
    } else {
        modeIcon.src = "images/sun.svg"; // Replace with the sun icon or any other light mode icon
    }

    // Save the user's preference to localStorage
    localStorage.setItem("darkMode", isDarkMode.toString());
}

// Check for user preference on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedDarkMode = localStorage.getItem("darkMode");

    if (savedDarkMode && savedDarkMode === "true") {
        document.body.classList.add("dark-mode");
        document.getElementById("mode-icon").src = "images/moon.svg"; // Replace with the moon icon or any other dark mode icon
    }
});
