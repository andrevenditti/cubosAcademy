const contentUser = document.querySelector(".content-user");
const button = document.querySelector("button");
const userImage = document.createElement("img");
const h3 = document.createElement("h3");

h3.textContent = "O h3";
userImage.src = "https://avatars.githubusercontent.com/u/68304083?v=4";
userImage.alt = "profile image";
userImage.classList.add("logo");

contentUser.appendChild(h3);

const firstH1 = contentUser.querySelector("h2");

button.addEventListener("click", () => {
  contentUser.replaceChild(userImage, h3);
});
