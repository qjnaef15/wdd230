const body = document.body;
const darkModeButton = document.getElementById("dark-mode-toggle"); // Add an ID to your dark mode toggle button

// Check user's preference for dark mode (optional)
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.add("dark-mode");
}

// Toggle dark mode when the button is clicked
darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});
