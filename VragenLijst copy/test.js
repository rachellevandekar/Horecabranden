const db = firebase.firestore();

var docRef = db.collection("vragen").doc("collecties");
//const thingsList = document.getElementById("thingsList");
document.getElementById("insert").addEventListener("click", selectFunction);

function selectFunction() {

    docRef.get().then(function(snapshot) {
        document.getElementById('vraag').innerHTML = snapshot.data().brand.vraag1.vraag;
        document.getElementById('antwoordA').innerHTML = snapshot.data().brand.vraag1.a;
        document.getElementById('antwoordB').innerHTML = snapshot.data().brand.vraag1.b;
        document.getElementById('antwoordC').innerHTML = snapshot.data().brand.vraag1.c;
        document.getElementById('antwoordD').innerHTML = snapshot.data().brand.vraag1.d;
    })

}



/*
docRef.get().then(function(docs) {
    if (docs.exists) {
        //console.log("Document data:", docs.data().taak1);
        //return `<p>${docs.data()}</p>`;
        document.getElementById("thingsList").innerHTML = docs.data().taak1;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

*/

/*
const Taak = document.getElementById('geefTaakWeer');

docRef.get().then(function(docs) {

    if (docs.exists) {
        //console.log("Document data:", docs.data().taak1);
        Taak.innerHTML = docs.data().taak2;


    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
*/




//const thingsList = document.getElementById("thingsList");


/*
docRef.get().then(function(docs) {
    if (docs.exists) {

        //return `<p>${docs.data()}</p>`;
        document.getElementById("vraag1-btn").innerHTML = docs.data().brand.vraag1.a;
        document.getElementById("vraag2-btn").innerHTML = docs.data().brand.vraag1.b;
        document.getElementById("vraag3-btn").innerHTML = docs.data().brand.vraag1.c;
        document.getElementById("vraag4-btn").innerHTML = docs.data().brand.vraag1.d;


    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
*/




/*
it("should handle array-contains where", () => {
    var citiesRef = db.collection("functies");
    // [START array_contains_filter]
    citiesRef.where("taak1", "taak2", "west_coast")
        // [END array_contains_filter]

});
document.getElementById("vraag4-btn").innerHTML = docs.data();

*/


/*
db.collection("Gebruikers").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(docs) {
        //console.log(doc.id, "=>", docs.data());
        document.querySelector(".thingsList").innerHTML =
            docs.data();
    })
})
*/
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




// connectie database
//const db = firebase.firestore();
//const thingsList = document.getElementById('thingsList');
//var docRef = db.collection("vragen").doc("collecties");

/*
let unsubscribe
unsubscribe = docRef
    .onSnapshot(querySnapshot => {

        const items = querySnapshot.docs.map(doc => {

            return `<li>${doc.data().brand.vraag1.vraag}</li>`

        });

        thingsList.innerHTML = items.join('');

    });


*/
/*
const vraag1 = document.getElementById("vraag1-btn");
const vraag2 = document.getElementById("vraag1-btn");

function writeUserData(vraag1, vraag2, vraag3, vraag4) {
    firebase.database().ref('vragen/collecties/brand/').set({
        vraag1: a,
        vraag2: b,
        vraag3: c,
        vraag4: d
    });
}
*/


/*
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data().brand.vraag1.vraag);
    } else {

        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

$('#load_button').click(function() {

    rootRef.on('value', function(snapshot) {
        $(vraag1).val(snapshot.child('vraag1').val());
        $(vraag2).val(snapshot.child('vraag2').val());
    })
})*/


//const vragenRef = firebase.firestore().collection('vragen');
/*
vragenRef
    .get()
    .then((snapshot) => {

        const data = snapshot.docs.map((doc) => ({
            vraag1: doc.vraag1,
            // `<li>${doc.data().brand.vraag1.vraag}</li>`
        }));
        console.log("Alle data ", data)
        thingsList.innerHTML = data.join('');
    })*/
/*
const db = firebase.firestore();
vragenRef = db.collection("vragen");

vragenRef
    .onSnapshot(querySnapshot => {

        const items = querySnapshot.docs.map(doc => {

            return `<p>${doc.data().brand.vraag1.vraag}</p><p>${doc.data().brand.vraag1.a}</p>`


        });

        vragen.innerHTML = items.join('');

    });*/