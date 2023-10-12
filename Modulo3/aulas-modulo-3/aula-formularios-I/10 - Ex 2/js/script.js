const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const nameEmail = document.querySelector("#email");
const nameAge = document.querySelector("#age");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const errors = [];

  if (nameInput.value.trim() === "") {
    errors.push("Preencha o seu nome");
  }

  if (nameEmail.value.trim() === "") {
    errors.push("Preencha o seu email");
  }

  if (nameAge.value.trim() === "") {
    errors.push("Preencha o sua idade");
  }

  if (errors.length) {
    alert(errors.join("\n"));
    return;
  }

  alert("Incrição realizada com sucesso");
  form.reset();
});
