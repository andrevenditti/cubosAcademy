const form = document.querySelector("form");

const question1 = document.getElementsByName("question1");
const question2 = document.getElementsByName("question2");
const question3 = document.getElementsByName("question3");
const question4 = document.getElementsByName("question4");

const allQuestion = [...question1, ...question2, ...question3, ...question4];
const selecteds = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
};

allQuestion.forEach((question) => {
  question.addEventListener("change", () => {
    selecteds[question.name] = question.value;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let sum = 0;

  if (selecteds.question1 === "b") {
    sum += 2.5;
  }

  if (selecteds.question2 === "c") {
    sum += 2.5;
  }

  if (selecteds.question3 === "a") {
    sum += 2.5;
  }

  if (selecteds.question4 === "c") {
    sum += 2.5;
  }

  if (sum < 7) {
    alert("Voce nao é um nerd");
    return;
  }
  alert("voce é um nerd");
});
