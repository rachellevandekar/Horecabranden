const db = firebase.firestore();
var docRef = db.collection("functies").doc("barman");



docRef.get().then(function(docs) {
    if (docs.exists) {
        console.log("Document data:", docs.data().taak1);
        return `<p>${docs.data()}</p>`;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});



/*
vragenRef
    .onSnapshot(querySnapshot => {

        const items = querySnapshot.docs.map(doc => {

            return `<p>${doc.data().taak1}</p><p>${doc.data().taak2}</p>`



        });

        Taak.innerHTML = items.join('');
        console.log(items);
    });

 */