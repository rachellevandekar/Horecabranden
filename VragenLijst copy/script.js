//elementen selecteren 
const start = document.getElementById('start-btn');
const next = document.getElementById('next-btn');
const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
//const scoreContainer = document.getElementById('scoreContainer');
const vragenOverzicht = document.getElementById('vragen-overzicht');
const vragen = document.querySelector(".vraag-btn")
const containerOverzicht = document.getElementById('container-overzicht');
//const randomNumber = document.getElementById('randomNumber');
//const winnaar = document.getElementById('winnaar');
//const scoreText = document.querySelector(".score");

//let score = 0;
//let questionCounter = 0;
let runningQuestion = -1;


//const MAX_QUESTIONS = 4;
//const CORRECT_BONUS = 1;


const db = firebase.firestore();
var vragCol = db.collection("vragen");
//document.getElementById("start-btn").addEventListener("click", renderQuestion);
document.querySelector("#vraag1-btn").addEventListener("click", startQuiz);
//funct = document.getElementById('question')


const vragenDB = [{
    vraag: vragCol.doc("vraag1")
}, {
    vraag: vragCol.doc("vraag2")
}, {
    vraag: vragCol.doc("vraag3")
}, {
    vraag: vragCol.doc("vraag4")
}];

vragen.addEventListener('click', startQuiz)


function startQuiz() {
    //questionCounter = 0;
    //availableQuestions = [...questions];
    //score = 0;
    //start.classList.add('hide')
    containerOverzicht.classList.add('hide')
        //runningQuestion = -1;
    quiz.classList.remove('hide')

    renderQuestion();

    next.innerText = 'Volgende'
    start.innerText = 'Overzicht'
    start.classList.remove('hide')
    next.classList.remove('hide')

}


//console.log(vragen)

// vraag laden
function renderQuestion() {

    //showQuestion(questions[runningQuestion])

    //let functVar = funct.value;

    vragCol.doc("vraag1").get().then(function(snapshot) {
        document.getElementById('question').innerHTML = snapshot.data().vraag;
        document.getElementById('antwoordA').innerHTML = snapshot.data().a;
        document.getElementById('antwoordB').innerHTML = snapshot.data().b;
        document.getElementById('antwoordC').innerHTML = snapshot.data().c;
        document.getElementById('antwoordD').innerHTML = snapshot.data().d;

    })

}

next.addEventListener('click', () => {

    runningQuestion++
    renderQuestion();

})


/*
//knoppen begin en volgende
//vragen.addEventListener('click', startQuiz)
next.addEventListener('click', () => {

    runningQuestion++
    renderQuestion();

})

*/
/*
start.addEventListener('click', () => {
    // containerOverzicht.classList.remove('hide')
    //quiz.classList.add('hide')
    //  start.classList.add('hide')
    //next.classList.add('hide')
    startQuiz();

})*/



/*
//vraag en antwoorden weergeven 
function showQuestion(question) {


    //vraag weergeven
    questionElement.innerText = question.question;


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
    });




}*/
/*
//alles terug naar default bij elke nieuwe vraag, 1 vraag weergeven
function resetState() {
    clearStatusClass(document.body)
    next.classList.add('hide')

    //loop door alle children voor answerButtonsElement + weghalen
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }


    while (questionElement.firstChild) {
        questionElement.removeChild(questionElement.firstChild)

    }

}
*/
//const lastQuestion = questions.length - 1;
/*
// na beantwoorden vraag laat volgende knop zien
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)

    })

    if (lastQuestion.length > runningQuestion - 1) {
        runningQuestion++;
        renderQuestion();


    } else {
        next.innerText = 'Volgende'
        start.innerText = 'Overzicht'
        start.classList.remove('hide')
        next.classList.remove('hide')
    }



    if (correct) {

        incrementScore(CORRECT_BONUS);
        console.log(score);
        scoreText.innerText = score;
        localStorage.setItem('mostRecentScore', score);

    }

    if (score > 3) {
        console.log("gewonnen")
        winnaar.classList.remove('hide')
        winnaar.innerText = "je hebt gewonnen";

    }


};



//geef kleur voor goed en fout
function setStatusClass(element, correct) {

    clearStatusClass(element)
    if (correct) {

        element.classList.add('correct')

    } else {
        element.classList.add('wrong')

    }

}



incrementScore = num => {
    score += num;
    scoreText.innerText = score;

};



//haal kleuren goed en fout weg
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}


const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore + " vs 3";*/




/*
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
*/