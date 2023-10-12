const select = document.querySelector("select");
const input = document.querySelector("input");
const button = document.querySelector("button");
const contentTags = document.querySelector(".content-tags");

let currentSelected = "";

select.addEventListener("change", () => {
  currentSelected = select.options[select.selectedIndex].value;

  if (!currentSelected) {
    resetApp();

    return;
  }

  input.style.display = "block";
  input.placeholder = "Informe o texto da sua tag";
  button.style.display = "flex";

  if (currentSelected === "img") {
    input.placeholder = "Informe a url da imagem";
  }
});

function resetApp() {
  input.style.display = "none";
  button.style.display = "none";
  select.value = "";
  input.value = "";
}

button.addEventListener("click", () => {
  if (!input.value.trim()) {
    return;
  }

  const newElement = document.createElement(currentSelected);

  if (currentSelected === "img") {
    newElement.src = input.value;
    contentTags.appendChild(newElement);
  }

  newElement.textContent = input.value;
  contentTags.appendChild(newElement);

  resetApp();
});
