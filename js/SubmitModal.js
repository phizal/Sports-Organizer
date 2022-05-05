// Get the modal
var modal = document.getElementById("myModal");
            
// Get the button that opens the modal
var btn = document.getElementById("subBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalEd) {
    modalEd.style.display = "none";
  }
  if (event.target == modalEd2) {
    modalEd2.style.display = "none";
  }
}

// Modal variables for our Edit modal
var modalEd = document.getElementById("editModal");     
var spanEd = document.getElementsByClassName("closeEd")[0];

spanEd.onclick = function() {
  modalEd.style.display = "none";
}

var modalEd2 = document.getElementById("editModal2");     
var spanEd2 = document.getElementsByClassName("closeEd2")[0];

spanEd2.onclick = function() {
  modalEd2.style.display = "none";
}
