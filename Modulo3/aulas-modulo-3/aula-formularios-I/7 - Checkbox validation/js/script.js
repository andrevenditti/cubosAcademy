const form = document.querySelector("form");
// const radios = document.querySelectorAll("input[name='period']");
const radios = document.getElementsByName("period");
const checkCourses = document.querySelectorAll(".check-courses");

// for (const radio of radios) {
//   radio.addEventListener("change", (e) => {
//     console.log(`o periodo selecionado foi ${e.target.value}`);
//   });
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const selectedCourses = [];

  for (const radio of radios) {
    if (radio.checked) {
      console.log(`o periodo selecionado foi o ${radio.value}`);
    }
  }

  for (const check of checkCourses) {
    if (check.checked) {
      selectedCourses.push(check.name);
    }
  }

  console.log(selectedCourses);
});

// for (const check of checkCourses) {
//   check.addEventListener("change", (e) => {
//     console.log(e.target.name);
//   });
// }
