const db = firebase.firestore();
var docRef = db.collection("functies").doc("barman");
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

let funct, gebr, taak1, taak2, taak3, taak4;
document.getElementById("insert").addEventListener("click", selectFunction);
document.getElementById("select").addEventListener("click", selectFunction);

function ready() {
    funct = document.getElementById('functie');
    gebr = document.getElementById('gebruiker');
    taak1 = document.getElementById('taak1');
    taak2 = document.getElementById('taak2');
    taak3 = document.getElementById('taak3');
    taak4 = document.getElementById('taak4');
}

function selectFunction() {
    //ready();
    docRef.get().then(function(snapshot) {
        document.getElementById('gebruiker').innerHTML = snapshot.data().gebruiker;
        document.getElementById('taak1').innerHTML = snapshot.data().taak1;
        document.getElementById('taak2').innerHTML = snapshot.data().taak2;
        document.getElementById('taak3').innerHTML = snapshot.data().taak3;
        document.getElementById('taak4').innerHTML = snapshot.data().taak4;
    })

}