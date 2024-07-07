const modal = document.getElementById("modal");
const modalHeader = document.getElementById("modal-header");
const modalText = document.getElementById("modal-text");
const greyMatterPath = document.getElementById("grey-matter");

greyMatterPath.addEventListener("click", function() {
  console.log("clicked");
  showModal();
});

function showModal() {
  modalHeader.innerHTML = `This is my Brain on the Internet`;
  modalText.innerHTML += `You clicked!`;
  modal.style.display = "block"; 
}

// Function to close the modal when the button is clicked
function closeModal() {
  modal.style.display = "none"; // Hide modal
  modalText.innerHTML = "";
}
