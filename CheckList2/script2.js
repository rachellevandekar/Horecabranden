document.querySelector(".submit").addEventListener("click", checkboxNames);

document.querySelector(".volgende-gebruiker").addEventListener("click", volgendeGebruiker);

document.querySelector(".vorige-gebruiker").addEventListener("click", vorigeGebruiker);





const gebruikerElement = document.getElementById("gebruiker");
const checkListElement = document.getElementById("checklist-items");
const buddyElement = document.getElementById("buddy");
const buddyCheckListElement = document.getElementById("buddy-checklist");

const elementsList = document.querySelectorAll( ".list-item");
const elementsArray = [...elementsList];




const gebruikerChecklists = [{
    gebruiker: 'Kok',
    listItems: [
        { text: 'Gas uit'},
        { text: 'Afzuigkap uit'},
        { text: 'Afzuigkap schoonmaken'},
        { text: 'Vloer boenen'}
    ]
}, {
    gebruiker: 'Afwasser',
    listItems: [
        { text: 'Spoelmachine uit'},
        { text: 'Stroomschakelaar uit'},
        { text: 'Rookmelder checken'},
        { text: 'Vloer boenen'}
    ]
}, {
    gebruiker: 'Bediende',
    listItems: [
        { text: 'Gasten de zaak uit'},
        { text: 'Stopcontacten check'},
        { text: 'Stofzuigen in hoekjes'},
        { text: 'Vloer boenen'}
    ]
}, {
    gebruiker: 'Barman',
    listItems: [
        { text: 'Kassa uit'},
        { text: 'Vluchtroute checken'},
        { text: 'Sloten checken'},
        { text: 'Vloer boenen'}
    ]
}]

let gebruikerNummer= -1;



function volgendeGebruiker() {
    if (gebruikerNummer >= 3){

    } else {
        gebruikerNummer++;
        renderChecklist(gebruiker)
    }

}

function vorigeGebruiker() {
    if (gebruikerNummer<= 0) {

    } else {
        --gebruikerNummer;
        renderChecklist();
    }


}



function renderChecklist() {


    let user = gebruikerChecklists[gebruikerNummer];

    //gebruiker weergeven
    gebruikerElement.innerText = user.gebruiker;

    let randomBuddyNumber = Math.floor(Math.random() * gebruikerChecklists.length) -1;
    if(randomBuddyNumber <0){
        randomBuddyNumber = 0;
    }
    let buddy = gebruikerChecklists.filter(gebruiker => gebruiker !== user)[randomBuddyNumber];

    buddyElement.innerText = buddy.gebruiker;



    checkListElement.innerHTML = renderHTMLChecklist(user);
    buddyCheckListElement.innerHTML = renderHTMLChecklist(buddy);


}

function renderHTMLChecklist(user) {
    let innerHTML = "";
    user.listItems.forEach((listItem, index) => {
        innerHTML += `<input type="checkbox" class="list-item" id=listItemID-${user.gebruiker}-${index}><label for=listItemID-${user.gebruiker}-${index}>${listItem.text}</label><br>`;
    });
    return innerHTML;
}





function checkboxNames() {
    let inputElems = document.getElementsByTagName('input');
        count = 0;
    console.log(inputElems.length);
    for (let i = 0; i < inputElems.length; i++)
    {
        if (inputElems[i].checked === false) {
            count++;
            //

            // label opzoeken op basis van "for"-attribute == id van checkbox (inputElems[i].id)
            let label = document.querySelector(`label[for=${inputElems[i].id}]`);
            console.log(label.textContent);

        }

    }

}


/*




function voegToe(taak1, taak2, taak3, taak4) {

    firebase.db().ref('functies/' + afwasser).set({
        taak1: taak1,
        taak2: taak2,
        taak3: taak3,
        taak4: taak4
    });


}


function voegToe() {
dbReferentie.on('value', function(snapshot){
    taak1.val(snapshot.child('functies/afwasser/taak1').val());
    taak2.val(snapshot.child('functies/afwasser/taak2').val());
    taak3.val(snapshot.child('functies/afwasser/taak3').val());
    taak4.val(snapshot.child('functies/afwasser/taak4').val());
})
}

var docRef = db.collection("vragen").doc("collecties");

docRef.get().then(function(doc) {
    if (doc.exists) {
        taak1.val("Document data:", doc.data().brand.val());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
 */


//var dbReferentie = firebase.database().ref().child('functies');

document.getElementById('voegToe').addEventListener("click", voegToe);

const taak1 = document.getElementById('taak1');
const taak2 = document.getElementById('taak2');
const taak3 = document.getElementById('taak3');
const taak4 = document.getElementById('taak4');
const Taak = document.getElementById('geefTaakWeer');

/*const db = firebase.firestore();
vragenRef = db.collection("vragen");

vragenRef
    .onSnapshot(querySnapshot => {

        const items = querySnapshot.docs.map(doc => {

            return `<p>${doc.data().brand.vraag1.vraag}</p><p>${doc.data().brand.vraag1.a}</p>`


        });

        Taak.innerHTML = items.join('');

    });


 */


/*const db = firebase.firestore();
vragenRef = db.collection("functies").doc('barman');
functieRef.get().then((doc) => {
   if(!doc.exists) return;
   console.log(doc.data());

});

 */

/*db.collection('functies').doc('barman').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data().taak1)
    })
})

 */

const db = firebase.firestore()
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

const niet = niks;