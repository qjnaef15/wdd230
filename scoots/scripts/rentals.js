document.addEventListener("DOMContentLoaded", function () {
    const reservationTableBody = document.getElementById("reservationTableBody");
    const walkInTableBody = document.getElementById("walkInTableBody");

    fetch('data/rentals.json')
        .then(response => response.json())
        .then(data => {
            data.rentalPrices.forEach(rental => {
                // Create a row for reservations
                const reservationRow = document.createElement("tr");
                reservationRow.innerHTML = `
                    <td>${rental.rentalType}</td>
                    <td>${rental.maxPersons}</td>
                    <td>${rental.reservation.halfDay}</td>
                    <td>${rental.reservation.fullDay}</td>
                `;
                reservationTableBody.appendChild(reservationRow);

                // Create a row for walk-ins
                const walkInRow = document.createElement("tr");
                walkInRow.innerHTML = `
                    <td>${rental.rentalType}</td>
                    <td>${rental.maxPersons}</td>
                    <td>${rental.walkIn.halfDay}</td>
                    <td>${rental.walkIn.fullDay}</td>
                `;
                walkInTableBody.appendChild(walkInRow);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));

    // Function to check if the screen size is in mobile view
    function isMobileView() {
        return window.innerWidth <= 600; // You can adjust this value based on your design
    }

    // Toggle table visibility based on screen size
    function toggleTableVisibility() {
        const reservationTable = document.getElementById("reservationTable");
        const walkInTable = document.getElementById("walkInTable");

        if (isMobileView()) {
            reservationTable.style.display = "table";
            walkInTable.style.display = "none";
        } else {
            reservationTable.style.display = "table";
            walkInTable.style.display = "table";
        }
    }

    // Initial visibility check
    toggleTableVisibility();

    // Listen for window resize events to update table visibility
    window.addEventListener("resize", toggleTableVisibility);
});
