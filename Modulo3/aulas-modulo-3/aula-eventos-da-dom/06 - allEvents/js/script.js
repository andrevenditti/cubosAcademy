const button = document.querySelector("button");
const inputEmail = document.querySelector(".input-email");
const ancor = document.querySelector("a");
const keyPress = document.querySelector(".input-key-press");
const keyDown = document.querySelector(".input-key-down");
const keyUp = document.querySelector(".input-key-up");
const keyFocus = document.querySelector(".input-focus");

button.addEventListener("click", () => {
  console.log("clicou no botao");
});

inputEmail.addEventListener("change", () => {
  console.log("Houve mudancinham");
});

ancor.addEventListener("mouseover", () => {
  console.log("Passou em cima");
});

keyPress.addEventListener("keypress", (event) => {
  console.log("tecla pressionada");
});

keyDown.addEventListener("keydown", (event) => {
  console.log("tecla pressionada pra baixo");
});

keyUp.addEventListener("keyup", (event) => {
  console.log("tecla solta");
});

keyFocus.addEventListener("focus", (event) => {
  console.log("Focado");
});
