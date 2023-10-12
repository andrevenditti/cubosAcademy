const formRegister = document.querySelector("form");
const inputEmail = document.querySelector("#input-email");
const spanEmail = document.querySelector("#span-email");

formRegister.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputEmail.value.indexOf("gmail") === -1) {
    console.log("email invalido");
    inputEmail.classList.toggle("error");
    spanEmail.textContent = "email inválido";
    return;
  }

  inputEmail.classList.toggle("success");
  spanEmail.textContent = "email válido";
});
