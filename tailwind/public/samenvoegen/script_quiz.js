//elementen selecteren 
const start = document.getElementById('start-btn');
const next = document.getElementById('next-btn');
const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('scoreContainer');
const vragenOverzicht = document.getElementById('vragen-overzicht');
const containerOverzicht = document.getElementById('container-overzicht');
const scoreText = document.querySelector(".score");
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");
const MAX_QUESTIONS = 4;
const CORRECT_BONUS = 1;

const db = firebase.firestore();
var vragCol = db.collection('vragen');
document.querySelector("#vraag1-btn").addEventListener("click", function() { startQuiz(1); });


//quiz nog niet zichtbaar maken 
quiz.style.display = "none";
next.style.display = " none";


// vragenlijst array aanmaken
var vragenLijst = [];
db.collection('vragen').get().then((snapshot) => {
    snapshot.docs.map((doc, index) => {
        console.log(doc.data().vraag, index);

        // elke vraag toevoegen aan vragenlijst (let op, we beginnen bij 0 met tellen)
        vragenLijst.push(doc.data());
    })

})


let vragenNummer = 0;

function startQuiz(startBijVraag) {

    score = 0;

    availableQuestions = [...vragenLijst]
    if (!startBijVraag) startBijVraag = 1;
    vragenNummer = startBijVraag;
    containerOverzicht.style.display = "none";
    quiz.style.display = "block";
    next.style.display = " block";
    renderQuestion();

}


// vraag laden
function renderQuestion() {

    if (availableQuestions.length === 0 || vragenNummer > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('./end.html')
    }


    let vraag = vragenLijst[vragenNummer - 1]; // omdat we bij 0 zijn begonnen met tellen

    //vragen en antwoorden inladen
    questionElement.innerHTML = vraag.vraag;
    a.innerHTML = vraag.a;
    b.innerHTML = vraag.b;
    c.innerHTML = vraag.c;
    d.innerHTML = vraag.d;

    //geselecteerd antwoord controleren
    document.getElementById("answer-buttons").addEventListener("click", antwoordCheck);

    function antwoordCheck(e) {
        const selectedButton = e.target.id;
        console.log(selectedButton);
        const antwoord = vraag.antwoord;

        if (selectedButton === antwoord) {
            // document.getElementById(selectedButton).style.backgroundColor = "#adff2f";
            console.log("goed");
            incrementScore(CORRECT_BONUS);
            scoreText.innerText = score;
            localStorage.setItem('mostRecentScore', score);
        } else {
            // document.getElementById(selectedButton).style.backgroundColor = "#d3d3d3";
            console.log("fout");
        }
    }
}


incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

next.addEventListener('click', () => {
    vragenNummer++
    renderQuestion();
});

const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore + " vs 3";