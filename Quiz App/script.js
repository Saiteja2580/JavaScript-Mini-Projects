const questions = [
  {
    question: "Which is largest animal in the world?",
    answers: [
      {
        text: "Shark",
        correct: true,
      },
      {
        text: "Bhutan",
        correct: false,
      },
      {
        text: "Nepal",
        correct: false,
      },
      {
        text: "Shri Lanka",
        correct: false,
      },
    ],
  },
  {
    question: "Which is smallest country in the world?",
    answers: [
      {
        text: "Vatican City",
        correct: true,
      },
      {
        text: "Bhutan",
        correct: false,
      },
      {
        text: "Nepal",
        correct: false,
      },
      {
        text: "Shri Lanka",
        correct: false,
      },
    ],
  },
  {
    question: "Which is smallest continent in the world?",
    answers: [
      {
        text: "Asia",
        correct: false,
      },
      {
        text: "Australia",
        correct: true,
      },
      {
        text: "Arctic",
        correct: false,
      },
      {
        text: "Africa",
        correct: false,
      },
    ],
  },
  {
    question: "Which is largest desert in the world?",
    answers: [
      {
        text: "Kalahari",
        correct: false,
      },
      {
        text: "Gobi",
        correct: false,
      },
      {
        text: "Sahara",
        correct: false,
      },
      {
        text: "Antarctica",
        correct: true,
      },
    ],
  },
];

//storing html elements in variables
const questionElement = document.getElementById("question");
const answerButtons = document.querySelector(".answerButtons");
const nxtButton = document.querySelector(".nxt");
let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex];
let question = currentQuestion.question;
let answer = " ";
for (const ans of currentQuestion.answers) {
  if (ans.correct) {
    answer = ans.text;
  }
}
let score = 0;
let quizStarted = true;
function startQuiz() {
  questionElement.innerHTML = `${currentQuestionIndex + 1}.${question}`;
  for (let i = 0; i < questions.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = currentQuestion.answers[i].text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
  }
  nxtButton.style.display = "block";

  answerButtons.addEventListener("click", function (e) {
    if (e.target.tagName == "BUTTON" && e.target.innerHTML == answer) {
      e.target.style.backgroundColor = "green";
      e.target.style.color = "white";
      score += 1;
    } else {
      e.target.style.backgroundColor = "red";
      e.target.style.color = "white";
    }
  });
}

nxtButton.addEventListener("click", function () {
  currentQuestionIndex += 1;
  startQuiz();
});

startQuiz();