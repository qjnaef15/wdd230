// Last Modified
let currentDate = document.lastModified;
document.querySelector('#lastUpdated').textContent = currentDate;

// Copyright Date
let date = new Date();
let year = date.getFullYear();
document.querySelector('#copyrightYear').innerHTML = year;

