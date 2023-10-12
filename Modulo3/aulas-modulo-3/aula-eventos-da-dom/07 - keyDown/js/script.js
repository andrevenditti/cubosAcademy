const fruits = document.querySelectorAll("li");
const inputSearch = document.querySelector("input");

function clearSearch(fruitInSearch) {
  fruits.forEach((item) => {
    if (item.textContent !== fruitInSearch) {
      item.style.display = "block";
    }
  });
}

function filterSearch(fruitInSearch) {
  fruits.forEach((item) => {
    if (item.textContent !== fruitInSearch) {
      item.style.display = "none";
    }
  });
}

inputSearch.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  const currentSearch = event.target.value;

  if (!currentSearch) {
    clearSearch(currentSearch);
    return;
  }

  filterSearch(currentSearch);
});
