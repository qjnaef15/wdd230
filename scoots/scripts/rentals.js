document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("rentalTableBody");

    fetch('data/rentals.json')
      .then(response => response.json())
      .then(data => {
        data.rentalPrices.forEach(rental => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${rental.rentalType}</td>
            <td>${rental.maxPersons}</td>
            <td>${rental.reservation.halfDay}</td>
            <td>${rental.reservation.fullDay}</td>
            <td>${rental.walkIn.halfDay}</td>
            <td>${rental.walkIn.fullDay}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });