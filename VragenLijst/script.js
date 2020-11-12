//elementen selecteren 
const start = document.getElementById('start-btn');
const next = document.getElementById('next-btn');
const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const progress = document.getElementById('progress');
const scoreContainer = document.getElementById('scoreContainer');

let shuffledQuestions, runningQuestion


//de vragen en antwoorden - array
const questions = [{
    question: 'Wat moet je vooral NIET doen bij een vlam in de pan?',
    answers: [
        { text: 'deksel op de pan', correct: false },
        { text: 'afzuigkap uitzetten', correct: false },
        { text: 'water er overheen gooien', correct: true },
        { text: 'gas uitzetten', correct: false }
    ]
}, {
    question: 'Waar ontstaat brand het meest?',
    answers: [
        { text: 'pan', correct: false },
        { text: 'afzuiging', correct: true },
        { text: 'oven', correct: false },
        { text: 'meterkast', correct: false }
    ]
}, {
    question: 'Wat moet je NIET doen bij brand?',
    answers: [
        { text: 'wegrennen', correct: true },
        { text: 'rustig blijven', correct: false },
        { text: 'brandweer bellen', correct: false },
        { text: 'veilig naar buiten', correct: false }
    ]
}, {
    question: 'Is een schone werkomgeving belangrijk?',
    answers: [
        { text: 'ja', correct: true },
        { text: 'nee', correct: false },
    ]
}]



//knoppen begin en volgende
start.addEventListener('click', startQuiz)
next.addEventListener('click', () => {
    runningQuestion++
    renderQuestion();
})

function startQuiz() {
    start.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    runningQuestion = 0
    quiz.classList.remove('hide')
    renderQuestion();
    //renderProgress();
}

// shuffle vragen
function renderQuestion() {
    resetState();
    showQuestion(shuffledQuestions[runningQuestion])

}

//vraag en antwoorden weergeven 
function showQuestion(question) {

    //vraag weergeven
    questionElement.innerText = question.question

    //antwoorden weergeven, loop en maak button met antwoord
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

//alles terug naar default bij elke nieuwe vraag
function resetState() {
    clearStatusClass(document.body)
    next.classList.add('hide')

    //loop door alle children voor answerButtonsElement + weghalen
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


// na beantwoorden vraag laat volgende knop zien
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > runningQuestion - 1) {

        next.classList.remove('hide')

    } else {
        start.innerText = 'Restart'
        start.classList.remove('hide')

    }
}

//geef kleur voor goed en fout
function setStatusClass(element, correct) {

    clearStatusClass(element)
    if (correct) {

        element.classList.add('correct')


    } else {
        element.classList.add('wrong')

    }
}

//haal kleuren goed en fout weg
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

/*
let score = 0;
//variabelen
//const lastQuestion = questions.length - 1;

//score berekenen
function scoreRender() {
    scoreContainer.classList.remove('hide')

    //bereken percentage goede antwoorden. questions.length is aantal vragen
    let scorepercent = Math.round(100 * score / questions.length)

    //laat score percentage zien 
    scoreContainer.innerHTML += "<p>" + scorepercent + "%</p>"


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
        //quiz einde en score laten zien

        scoreRender();
    }
}


//goed antwoord, kleur groen progress
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#070"
}

//fout antwoord, kleur rood progress
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00"
}*/