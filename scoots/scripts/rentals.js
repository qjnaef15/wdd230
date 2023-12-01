document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("rentalTableBody");

    fetch('data/rentals.json')
        .then(response => response.json())
        .then(data => {
            data.rentalPrices.forEach(rental => {
                const row = document.createElement("tr");
                if (isMobileView()) {
                    // If in mobile view, create separate tables for reservations and walk-ins
                    createTableForMobile(row, rental.reservation, 'Reservation');
                    createTableForMobile(row, rental.walkIn, 'Walk-In');
                } else {
                    // If not in mobile view, display both reservation and walk-in information in the same row
                    row.innerHTML = `
                        <td>${rental.rentalType}</td>
                        <td>${rental.maxPersons}</td>
                        <td>${rental.reservation.halfDay}</td>
                        <td>${rental.reservation.fullDay}</td>
                        <td>${rental.walkIn.halfDay}</td>
                        <td>${rental.walkIn.fullDay}</td>
                    `;
                }
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));

    // Function to check if the screen size is in mobile view
    function isMobileView() {
        return window.innerWidth <= 430; 
    }

    // Function to create a separate table for mobile view
    function createTableForMobile(row, data, label) {
        const mobileTable = document.createElement("table");
        mobileTable.innerHTML = `
            <tr>
                <td>${label} Type</td>
                <td>${label} Half Day</td>
                <td>${label} Full Day</td>
            </tr>
            <tr>
                <td>${data.type}</td>
                <td>${data.halfDay}</td>
                <td>${data.fullDay}</td>
            </tr>
        `;
        const cell = document.createElement("td");
        cell.appendChild(mobileTable);
        row.appendChild(cell);
    }
});
