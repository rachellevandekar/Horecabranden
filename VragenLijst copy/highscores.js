const db = firebase.firestore();

//const highScoresList = document.getElementById('highScoresList');
//const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

/*
highScoresList.innerHTML =

    highScores.map(score => {

        return (`<li class="high-score"> ${score.name} - ${score.score} </li>`);


    }).join("");
*/

highScoresRef = db.collection("score");


unsubscribe = highScoresRef

    .orderBy('score', 'desc')
    .onSnapshot(querySnapshot => {



        const items = querySnapshot.docs.map(doc => {

            return `<li>${doc.data().name} - ${doc.data().score}</li>`;

        });

        highScoresList.innerHTML = items.join('');

    });