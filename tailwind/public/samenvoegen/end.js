const db = firebase.firestore();

const username = document.getElementById('username');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const saveScoreButton = document.getElementById('saveScoreBtn');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores)

totaalScore = finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {

    saveScoreButton.disabled = !username.value;
});



const scoreButton = document.getElementById("scoreButton").addEventListener('click', test)

function test() {

    const { serverTimestamp } = firebase.firestore.FieldValue;
    db.collection("score").doc().set({
        createdAt: serverTimestamp(),
        score: mostRecentScore,
        name: username.value


    });
}