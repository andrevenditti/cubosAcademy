const firstStrong = document.querySelectorAll("strong")[0];
const secondStrong = document.querySelectorAll("strong")[1];
const thirdStrong = document.querySelectorAll("strong")[2];
const fourthStrong = document.querySelectorAll("strong")[3];

firstStrong.onclick = () => {
  console.log(firstStrong.className);

  firstStrong.className = "user-inactive";

  firstStrong.classList.add("font-44");
};

secondStrong.onclick = () => {
  secondStrong.classList.toggle("user-inactive");
};

thirdStrong.onclick = () => {
  if (thirdStrong.classList.contains("user")) {
    console.log("tem");
  } else {
    console.log("ñ tem");
  }
};

fourthStrong.onclick = () => {
  fourthStrong.classList.replace("user-inactive", "user-deleted");
};
