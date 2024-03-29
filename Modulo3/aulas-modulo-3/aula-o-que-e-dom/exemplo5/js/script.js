const input = document.querySelector("input");

const successMessage = document.querySelector(".success");

const button = document.querySelector("button");

function showSuccessMessage() {
  successMessage.style.display = "block";

  if (!input.value) {
    successMessage.textContent = "Por favor, digite um valor válido";
    return;
  }

  successMessage.textContent = `O usuário ${input.value} foi cadastrado`;
  input.value = "";
}

button.onclick = () => showSuccessMessage();
