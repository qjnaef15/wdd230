// JavaScript to populate the timestamp field with the current date and time
const timestampField = document.getElementById("timestamp");
const now = new Date();
const timestamp = now.toISOString();
timestampField.value = timestamp;