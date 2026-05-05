const quiz = [
    {
        question: "What is HTML?",
        options: ["Programming Language", "Markup Language", "Database", "OS"],
        answer: 1
    },
    {
        question: "CSS is used for?",
        options: ["Structure", "Styling", "Database", "Logic"],
        answer: 1
    },
    {
        question: "JavaScript is used for?",
        options: ["Styling", "Database", "Interactivity", "Hosting"],
        answer: 2
    }
];

let current = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = quiz[current].question;

    for (let i = 0; i < 4; i++) {
        document.getElementById("opt" + i).innerText = quiz[current].options[i];
    }
}

function checkAnswer(option) {
    if (option === quiz[current].answer) {
        score++;
    }
}

function nextQuestion() {
    current++;

    if (current < quiz.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").style.display = "none";
        document.getElementById("result").innerText =
            " Your Score: " + score + "/" + quiz.length;
    }
}

loadQuestion();
