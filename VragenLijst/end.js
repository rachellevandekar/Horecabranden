const username = document.getElementById('username');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const saveScoreButton = document.getElementById('saveScoreBtn');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores)

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    //console.log(username.value);
    saveScoreButton.disabled = !username.value;
});




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