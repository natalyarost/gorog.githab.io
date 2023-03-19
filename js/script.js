const button = document.querySelector(".button");
const form = document.querySelector(".form");


function buttonClick() {
  button.textContent = form.classList.contains("hidden") ? `Закрыть` : `Войти`;

  form.classList.toggle("hidden");
}

button.addEventListener("click", buttonClick);
