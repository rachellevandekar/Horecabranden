//elementen selecteren 
const start = document.getElementById('start-btn');
const next = document.getElementById('next-btn');
const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('scoreContainer');
const vragenOverzicht = document.getElementById('vragen-overzicht');
const containerOverzicht = document.getElementById('container-overzicht');
const winnaar = document.getElementById('winnaar');
const scoreText = document.querySelector(".score");
const antwoordBtns = document.querySelectorAll(".antwoord-btn");

let score = 0;
//let questionCounter = 0;

const MAX_QUESTIONS = 4;
const CORRECT_BONUS = 1;



const db = firebase.firestore();
var vragCol = db.collection('vragen');
document.querySelector("#vraag1-btn").addEventListener("click", function() { startQuiz(1); });
document.querySelector("#vraag2-btn").addEventListener("click", function() { startQuiz(2); });
document.querySelector("#vraag3-btn").addEventListener("click", function() { startQuiz(3); });
document.querySelector("#vraag4-btn").addEventListener("click", function() { startQuiz(4); });


const countQuestions = 4;


// vragenlijst array aanmaken
var vragenLijst = [];
db.collection('vragen').get().then((snapshot) => {
    snapshot.docs.map((doc, index) => {
        console.log(doc.data().vraag, index);

        // elke vraag toevoegen aan vragenlijst (let op, we beginnen bij 0 met tellen)
        vragenLijst.push(doc.data());
    })
})


let vragenNummer = 0; //runningQuestion


function startQuiz(startBijVraag) {

    score = 0;

    availableQuestions = [...vragenLijst]
    if (!startBijVraag) startBijVraag = 1;
    vragenNummer = startBijVraag;
    containerOverzicht.classList.add('hide')
    quiz.classList.remove('hide')

    renderQuestion();

    next.innerText = 'Volgende'
    start.innerText = 'Overzicht'
    start.classList.remove('hide')
    next.classList.remove('hide')



}


// vraag laden
function renderQuestion() {
    if (availableQuestions.length === 0 || vragenNummer > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('./end.html')
    }


    //resetState();
    let vraag = vragenLijst[vragenNummer - 1]; // omdat we bij 0 zijn begonnen met tellen


    document.getElementById('question').innerHTML = vraag.vraag;
    document.getElementById('a').innerHTML = vraag.a;
    document.getElementById('b').innerHTML = vraag.b;
    document.getElementById('c').innerHTML = vraag.c;
    document.getElementById('d').innerHTML = vraag.d;
    const antwoord = vraag.antwoord;
    //console.log(antwoord) // antwoord uit lijst gehaald 



    answerButtonsElement.addEventListener('click', (e) => {
        const selectedButton = e.target.id;
        console.log(selectedButton);
        /* Array.from(answerButtonsElement.children).forEach(button => {
             setStatusClass(button, button.dataset.correct)

         })*/
        if (antwoord === selectedButton) {
            selectedButton.style.backgroundColor = "lightgray;";
            score++;
            console.log("goed")
        }


    })


}




next.addEventListener('click', () => {

    vragenNummer++
    renderQuestion();

})






//const lastQuestion = vragenNummer.length - 1;
/*
// na beantwoorden vraag laat volgende knop zien
function selectAnswer(e) {

    //let antwoord = vragenLijst[vragenNummer - 1];

    const selectedButton = e.target;
    const correct = selectedButton.vragenLijst.antwoord;
    console.log(correct)

    setStatusClass(document.body, correct);*/
/* Array.from(answerButtonsElement.children).forEach(button => {
     setStatusClass(button, button.dataset.correct)

 })*/
/*
    if (correct) {

        incrementScore(CORRECT_BONUS);
        console.log(score);
        scoreText.innerText = score;
        localStorage.setItem('mostRecentScore', score);

        selectedButton.style.backgroundColor = 'red';
        console.log("goed")
        score++;

    }
*/

/* if (antwoord.antwoord === selectedButton) {
     selectedButton.style.backgroundColor = 'red';
     score++;
 }*/

//};
/*

function checkAnswer(answer) {
    if (answer == vragenLijst.antwoord) {

        score++;

        antwoordGoed();
    } else {

        antwoordFout();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {

        scoreRender();
    }
}

*/
/*
//let correct = vragCol.doc("antwoord");
//geef kleur voor goed en fout
function setStatusClass(element, correct) {

    clearStatusClass(element)
    if (correct) {
        console.log("goed")
        score++;
        element.classList.add('correct')


    } else {
        element.classList.add('wrong')

        console.log("fout")

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
finalScore.innerText = mostRecentScore + " vs 3";
*/
/*
function checkAnswer(answer) {
    if (answer == vragenLijst[vragenNummer - 1].vraag.antwoord.correct) {
        score++;
        antwoordGoed();
    } else {
        antwoordFout();
    }
}

function antwoordGoed() {
    document.getElementById(vragenNummer).style.backgroundColor = "#070";
}

function antwoordGoed() {
    document.getElementById(vragenNummer).style.backgroundColor = "#f00";
}*/