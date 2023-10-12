const form = document.querySelector("form");
const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const inputConfirmPassword = document.querySelector("#input-confirm-password");
const acceptUseTerms = document.querySelector("#accept");
const strong = document.querySelector("strong");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputName.value.length < 10) {
    strong.textContent = "O nome precisa de mais de 10 caracteres";
    return;
  }

  if (inputEmail.value.indexOf("hotmail") === -1) {
    strong.textContent = "Só aceitamos email hotmail";
    return;
  }

  if (inputPassword.value !== inputConfirmPassword.value) {
    strong.textContent = "As senhas não correspondem";
    return;
  }

  if (!acceptUseTerms.checked) {
    strong.textContent = "Voce precisa aceitar os termos de uso";
    return;
  }

  const data = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
    acceptTerms: true,
  };

  console.log(data);

  strong.textContent = "Cadastro realizado com sucesso";
});
