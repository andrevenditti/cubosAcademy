const imgs = document.querySelectorAll("img");
const link = document.querySelector("a");

imgs.forEach((item) => {
  item.style.width = "100%";
  item.style.backgroundColor = "red";
  item.style.padding = "10px";
});
