const db = firebase.firestore();

const createThing = document.getElementById('createThing');
const thingsList = document.getElementById('thingsList');


let thingsRef;
let unsubscribe;


// Database Reference
thingsRef = db.collection("Gebruikers").doc("voorbeeldgebruiker");



thingsRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());


        thingsList.innerHTML = items.join('');
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});



thingsRef = db.collection("functies").doc("afwasser");



thingsRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        return `<li>${doc.data()}</li>`

        thingsList.innerHTML = items.join('');
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});



thingsRef = db.collection("Things");
createThing.onclick = () => {

    const { serverTimestamp } = firebase.firestore.FieldValue;

    thingsRef.add({

        createdAt: serverTimestamp()
    });
}


// Query
unsubscribe = thingsRef

    .orderBy('createdAt') // Requires a query
    .onSnapshot(querySnapshot => {

        // Map results to an array of li elements

        const items = querySnapshot.docs.map(doc => {

            return `<li>${doc.data().createdAt}</li>`

        });

        thingsList.innerHTML = items.join('');

    });

db.collection('Gebruikers').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
    })
})