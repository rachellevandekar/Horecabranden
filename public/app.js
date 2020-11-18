const db = firebase.firestore();

const createThing = document.getElementById('createThing');
const thingsList = document.getElementById('thingsList');


let thingsRef;
let unsubscribe;


var getFunctie = function(functienaam) {
        thingsRef = db.collection("functies").doc(functienaam);
        thingsRef.get().then(function(doc) {
            console.log(doc.data())
            return doc.data();
        })
    }
    // Database Reference
thingsRef = db.collection("Gebruikers").doc("voorbeeldgebruiker");


thingsRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        var gebruikerData = doc.data();
        console.log(gebruikerData.functie)

        var functie = getFunctie(gebruikerData.functie);
        console.log(functie)

        document.getElementById('thingsList')
            //thingsList.innerHTML = items.join('');
    } else {

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

        //thingsList.innerHTML = items.join('');
    } else {

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

    .orderBy('createdAt')
    .onSnapshot(querySnapshot => {



        const items = querySnapshot.docs.map(doc => {

            return `<li>${doc.data().createdAt}</li>`

        });

        thingsList.innerHTML = items.join('');

    });