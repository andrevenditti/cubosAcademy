const options = document.querySelectorAll(".option");
const h2 = document.querySelector("h2");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

const quizes = [
  {
    question: "O que é a via láctea?",
    options: [
      { title: "Marca de leite", correct: false },
      { title: "Civilização antiga", correct: false },
      { title: "Carro", correct: false },
      { title: "Galáxia", correct: true },
    ],
  },
  {
    question: "Qual é o animal que representa o signo de touro?",
    options: [
      { title: "Hipopótamo", correct: false },
      { title: "Cavalo", correct: false },
      { title: "Touro", correct: true },
      { title: "Galo", correct: false },
    ],
  },
  {
    question: "Qual fruta é ressecada para se tornar uma ameixa seca?",
    options: [
      { title: "Ameixa", correct: true },
      { title: "Uva", correct: false },
      { title: "Melancia", correct: false },
      { title: "Melão", correct: false },
    ],
  },
];

let handleQuestion;
let correctOption;

function fillQuiz() {
  randomQuestion = quizes[Math.floor(Math.random() * 3)];
  h2.textContent = randomQuestion.question;

  for (let i = 0; i < options.length; i++) {
    options[i].textContent = randomQuestion.options[i].title;
  }

  randomQuestion.options.forEach((option) => {
    if (option.correct) {
      correctOption = option;
    }
  });
}

fillQuiz();

options.forEach((option) => {
  option.addEventListener("click", () => {
    button.style.visibility = "visible";

    if (option.textContent === correctOption.title) {
      option.classList.add("success");
      h1.textContent = "Voce acertou!";
      return;
    }

    option.classList.add("danger");
    h1.textContent = "Voce errou!";
  });
});

button.addEventListener("click", () => {
  window.location.reload();
});
