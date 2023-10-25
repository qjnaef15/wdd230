const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("num-Visits")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = ` 🎉 Welcome! This is your first visit!`;
}

numVisits++;

localStorage.setItem("num-Visits", numVisits);