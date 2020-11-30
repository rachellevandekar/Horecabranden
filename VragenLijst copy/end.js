const db = firebase.firestore();

const username = document.getElementById('username');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const saveScoreButton = document.getElementById('saveScoreBtn');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores)

totaalScore = finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    //console.log(username.value);
    saveScoreButton.disabled = !username.value;
});



const scoreButton = document.getElementById("scoreButton").addEventListener('click', test)
    /*
    saveHighScore = (e) => {
        console.log("clicked the save button");

        e.preventDefault();

        const score = {
            score: mostRecentScore,
            name: username.value
        };
        highScores.push(score);

        highScores.sort((a, b) => b.score - a.score)

        localStorage.setItem('highScores', JSON.stringify(highScores));
        window.location.assign("index.html");

        console.log(highScores);
    };
    */

function test() {

    const { serverTimestamp } = firebase.firestore.FieldValue;
    db.collection("score").doc().set({
        createdAt: serverTimestamp(),
        score: mostRecentScore,
        name: username.value


    });
}