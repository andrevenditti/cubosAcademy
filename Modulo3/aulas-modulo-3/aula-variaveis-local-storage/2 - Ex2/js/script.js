const toggleButton = document.querySelector("button");
const root = document.querySelector(":root");

toggleButton.addEventListener("click", () => {
  const currentBgColor = root.style.getPropertyValue("--bg-color");

  if (!currentBgColor || currentBgColor === "rgb(77, 77, 237)") {
    root.style.setProperty("--bg-color", "rgb(247, 192, 129)");
    root.style.setProperty("--text-color", "rgb(77, 77, 237)");
    return;
  }
  root.style.setProperty("--bg-color", "rgb(77, 77, 237)");
  root.style.setProperty("--text-color", "rgb(247, 192, 129)");
});
