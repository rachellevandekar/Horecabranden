const db = firebase.firestore();
var funcCol = db.collection("functies");
var vragCol = db.collection("vragen").doc('collecties');
const Taak = document.getElementById('geefTaakWeer');
/*
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
let funct, gebr, taak1, taak2, taak3, taak4;
document.getElementById("insert").addEventListener("click", selectVraag);
document.getElementById("select").addEventListener("click", selectFunction);

function ready() {

    gebr = document.getElementById('gebruiker');
    taak1 = document.getElementById('taak1');
    taak2 = document.getElementById('taak2');
    taak3 = document.getElementById('taak3');
    taak4 = document.getElementById('taak4');
}
funct = document.getElementById('functie');
function selectFunction() {
    //ready();
    let functVar = funct.value;
    funcCol.doc(functVar).get().then(function(snapshot) {
        document.getElementById('gebruiker').innerHTML = snapshot.data().gebruiker;
        document.getElementById('taak1').innerHTML = snapshot.data().taak1;
        document.getElementById('taak2').innerHTML = snapshot.data().taak2;
        document.getElementById('taak3').innerHTML = snapshot.data().taak3;
        document.getElementById('taak4').innerHTML = snapshot.data().taak4;
    })

}

function selectVraag() {
    //ready();
    vragCol.get().then(function(collecties) {
        document.getElementById('gebruiker').innerHTML = collecties.data().brand.vraag1.antwoord;
        document.getElementById('taak1').innerHTML = collecties.data().brand.vraag1.vraag;
        document.getElementById('taak2').innerHTML = collecties.data().brand.vraag1.a;
        document.getElementById('taak3').innerHTML = collecties.data().brand.vraag1.b;
        document.getElementById('taak4').innerHTML = collecties.data().brand.vraag1.c;
    })

}