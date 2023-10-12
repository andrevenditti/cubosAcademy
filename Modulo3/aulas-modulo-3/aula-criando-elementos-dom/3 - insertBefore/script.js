const contentUser = document.querySelector(".content-user");
const userImage = document.createElement("img");

userImage.src = "https://avatars.githubusercontent.com/u/68304083?v=4";
userImage.alt = "profile image";
userImage.classList.add("logo");

const firstH1 = contentUser.querySelector("h2");

contentUser.insertBefore(userImage, firstH1);
