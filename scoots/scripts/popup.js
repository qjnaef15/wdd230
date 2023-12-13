var modal = document.getElementById("directionsModal");

var link = document.getElementById("directionsLink");

var span = document.getElementsByClassName("close")[0];

link.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
