const contentUser = document.querySelector(".content-user");
const button = document.querySelector("button");
const userImage = document.createElement("img");
const h3 = document.createElement("h3");

h3.textContent = "O h3";

contentUser.appendChild(h3);

const firstH1 = contentUser.querySelector("h2");

contentUser.insertBefore(userImage, firstH1);

button.addEventListener("click", () => {
  contentUser.removeChild(h3);
});
