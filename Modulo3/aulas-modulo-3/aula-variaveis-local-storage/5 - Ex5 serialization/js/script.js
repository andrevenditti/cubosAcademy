const form = document.querySelector("form");
const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const inputPhone = document.querySelector(".phone");

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const btnlistar = document.querySelector(".btn-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (!inputName.value || !inputEmail.value || !inputPhone.value) {
    return;
  }

  const user = {
    name: inputName.value,
    email: inputEmail.value,
    phone: inputPhone.value,
  };

  localStorage.setItem("user", JSON.stringify(user));
});

btnlistar.addEventListener("click", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  h1.textContent = user.name;
  h2.textContent = user.phone;
});
