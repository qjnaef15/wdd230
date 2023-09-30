// JavaScript code to dynamically populate current year and last modified date
const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById("currentYear");
if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}

// JavaScript code to get the last modified date and time
var lastModified = new Date(document.lastModified);
        
// Format the last modified date and time as a string
var formattedLastModified = lastModified.toLocaleString();

// Display the formatted last modified date and time in the HTML element with id "lastModified"
document.getElementById("lastModified").innerHTML = "Last Modified: " + formattedLastModified;


