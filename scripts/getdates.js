// JavaScript code to dynamically populate current year and last modified date
const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById("currentYear");
if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}

const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate.toDateString()}`;
}


