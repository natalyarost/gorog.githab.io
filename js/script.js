const button = document.querySelector(".button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".close__popup");


function openPopup() {
  popup.classList.add("popup__opend");
}

function closePopup() {
  popup.classList.remove("popup__opend");
}

button.addEventListener("click", openPopup);
closeButton.addEventListener ("click", closePopup);
