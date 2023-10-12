const button = document.querySelector("button");
const h1 = document.querySelector("h1");

// button.addEventListener("click", () => {
//   h1.textContent = "Salvo demais";
// });

function confirmSave() {
  h1.textContent = "Salvo demais";
}

button.addEventListener("click", confirmSave);
