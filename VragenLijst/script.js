//elementen selecteren 
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");

//const shuffledQuestions, currentQuestionIndex

//de vragen en antwoorden - array
let questions = [{
        question: "Wat moet je vooral NIET doen bij een vlam in de pan?",
        choiceA: "deksel op de pan",
        choiceB: "afzuigkap uitzetten",
        choiceC: "water er overheen gooien",
        choiceD: "gas uitzetten",
        correct: "C"
    },
    {
        question: "Waar ontstaat brand het meest?",
        choiceA: "pan",
        choiceB: "afzuiging",
        choiceC: "oven",
        choiceD: "meterkast",
        correct: "B"
    },
    {
        question: "Wat moet je NIET doen bij brand?",
        choiceA: "weg rennen",
        choiceB: "rustig blijven",
        choiceC: "brandweer bellen",
        choiceD: "veilig naar buiten",
        correct: "A"
    },
    {
        question: "Wat ?",
        choiceA: "vluchtroute blokkeren",
        choiceB: "",
        choiceC: "niks",
        choiceD: "",
        correct: "D"
    }
];

//variabelen
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;

//vraag ophalen
function renderQuestion() {

    let q = questions[runningQuestion];


    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

}

// shuffled questions toevoegen

//knop om spel te beginnen
start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    //shuffledQuestions = questions.sort(() => Math.random())

    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}


//progressie renderen 
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {

        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";

    }
}


function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        //goed antwoord
        score++;

        //progress kleur groen
        answerIsCorrect();
    } else {
        // fout antwoord
        // progress kleur rood
        answerIsWrong();
    }
    if (runningQuestion < lastQuestion) {

        runningQuestion++;
        renderQuestion();
    } else {
        //quiz beindigen en score laten zien

        scoreRender();
    }
}


//functie goed antwoord
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#070";
}

//functie fout antwoord
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00"
}

//score renderen
function scoreRender() {
    scoreContainer.style.display = "block";

    //bereken percentage goede antwoorden. questions.length is aantal vragen
    let scorepercent = Math.round(100 * score / questions.length);

    //laat score percentage zien 
    scoreContainer.innerHTML += "<p>" + scorepercent + "%</p>";
}