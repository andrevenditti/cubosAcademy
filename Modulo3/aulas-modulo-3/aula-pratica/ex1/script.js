const form = document.querySelector("form");
const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (!inputEmail.value || !inputPassword.value) {
    console.log("voce precisa preencher os campos");
    return;
  }

  window.location = "./pages/main/index.html";
});
