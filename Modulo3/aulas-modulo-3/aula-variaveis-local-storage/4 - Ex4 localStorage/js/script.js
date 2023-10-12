const input = document.querySelector("input");
const btnSave = document.querySelector(".btn-save");
const btnClear = document.querySelector(".btn-clear");
const btnRemoveItem = document.querySelector(".btn-remove-item");
const btnGetItem = document.querySelector(".btn-get-item");
const h1 = document.querySelector("h1");

btnSave.addEventListener("click", () => {
  if (!input.value) {
    return;
  }

  localStorage.setItem("name", input.value);
});

btnClear.addEventListener("click", () => {
  localStorage.clear();
});

btnRemoveItem.addEventListener("click", () => {
  localStorage.removeItem("name2");
});

btnGetItem.addEventListener("click", () => {
  h1.textContent = localStorage.getItem("name");
});
