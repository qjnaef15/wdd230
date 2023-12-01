document.addEventListener("DOMContentLoaded", function () {
    const reservationTableBody = document.getElementById("reservationTableBody");
    const walkInTableBody = document.getElementById("walkInTableBody");

    fetch('data/rentals.json')
      .then(response => response.json())
      .then(data => {
        data.rentalPrices.forEach(rental => {
          const reservationRow = document.createElement("tr");
          reservationRow.innerHTML = `
            <td>${rental.rentalType}</td>
            <td>${rental.maxPersons}</td>
            <td>${rental.reservation.halfDay}</td>
            <td>${rental.reservation.fullDay}</td>
          `;
          reservationTableBody.appendChild(reservationRow);

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
  });