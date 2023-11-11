function setTimestamp() {
    // Get the input field
    var timestampInput = document.getElementById("timestamp");

    // Create a new Date object to get the current timestamp
    var currentTimestamp = new Date();

    // Assign the current timestamp to the input field's value
    timestampInput.value = currentTimestamp.getTime();
}

// Add event listener to the button with id "submit"
document.getElementById("submit").addEventListener("click", setTimestamp);