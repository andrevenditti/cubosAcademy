const inputSearch = document.querySelector("#input-search");
const btnClear = document.querySelector("#btn-clear");

btnClear.addEventListener("click", () => {
  inputSearch.value = "";
});
