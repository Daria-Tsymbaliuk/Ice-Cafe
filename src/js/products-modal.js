// Get the modal
const modal = document.getElementById("myModal");

// Get the all buttons with class name roducts-btn
const btnsOpen = document.querySelectorAll(".products-btn");

// Get the element that closes the modal
const btnClose = document.getElementsByClassName("close")[0];

// Get the button submit form
const btnsSubmit = document.getElementById("btnSubmit");

// Додаємо обробник подій на кожну кнопку
btnsOpen.forEach((btn) => {
btn.addEventListener("click", () => {
modal.style.display = "block"; // When the user clicks the button, open the modal
});
});

// When the user clicks on (x), close the modal
btnClose.onclick = function() {
modal.style.display = "none";
}

// When the user clicks on submit button, close the modaal
btnsSubmit.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
console.log(event.target)
modal.style.display = "none";
}
}