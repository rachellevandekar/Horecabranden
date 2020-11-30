const db = firebase.firestore();
highScoresRef = db.collection("score");

unsubscribe = highScoresRef

    .orderBy('score', 'desc')
    .onSnapshot(querySnapshot => {



        const items = querySnapshot.docs.map(doc => {

            return `<li>${doc.data().name} - ${doc.data().score}</li>`;

        });

        highScoresList.innerHTML = items.join('');

    });