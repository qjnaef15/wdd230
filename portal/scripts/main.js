let date = new date();
let year = date.getFullYear();

document.querySelector('h1').innerHTML = year + '&copy:';

let currentdate = document.lastModified;

document.querySelector('div').textContent = `Last Updated:  ${currentdate}`;


