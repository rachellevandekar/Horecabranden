/*inloffunctie*/
const auth = firebase.auth();
const db = firebase.firestore();

const signInBtn = document.getElementById('signInBtn');
//const signOutBtn = document.getElementById('signOutBtn');

//const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();


//const selectedFunction = [].filter.call(functionSelector.options, option => option.selected).map(option => option.value);

function pageRedirect(){
    let delay = 20000; // time in milliseconds

    // Display message

    setTimeout(function(){
        window.location.assign('Welkom2.html');
    },delay);

}

signInBtn.onclick = () => auth.signInWithPopup(provider)
pageRedirect()
;

let user = firebase.auth().currentUser;



auth.onAuthStateChanged(user => {
    if(user){
        userDetails = user.displayName;
        GoogleUID = user.uid;

        localStorage.setItem('userDetails', userDetails);
        localStorage.setItem('GoogleUID', GoogleUID);
    }
    });
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


var funct, gebr, taak1, taak2, taak3, taak4;

document.getElementById("showList").addEventListener("click", selectFunction);
document.getElementById("done").addEventListener("click", checklist);


/*
function ready() {

    gebr = document.getElementById('gebruiker');

    taak2 = document.getElementById('taak2');
    taak3 = document.getElementById('taak3');
    taak4 = document.getElementById('taak4');
}



 */

/*
taak1 = document.getElementById("taak1");


taak2 = document.getElementById("taak2");
taak3 = document.getElementById("taak3");
taak4 = document.getElementById("taak4");
funct = document.getElementById("functie");

let checkedListDB = {
    taak1: false,
    taak2: false,
    taak3: false,
    taak4: false
};

let taak1DB, taak2DB, taak3DB, taak4DB;


function selectFunction() {
    //ready();
    let functVar = funct.value;
    funcCol.doc(functVar).get().then(function(snapshot) {
        gebruikerDB = document.getElementById('gebruiker').innerHTML = snapshot.data().gebruiker;
        taak1DB = document.querySelector('label[for="taak1"]').innerHTML= snapshot.data().taak1;
        taak2DB = document.querySelector('label[for="taak2"]').innerHTML = snapshot.data().taak2;
        taak3DB = document.querySelector('label[for="taak3"]').innerHTML = snapshot.data().taak3;
        taak4DB = document.querySelector('label[for="taak4"]').innerHTML = snapshot.data().taak4;
    })

}

function checklist(){
    checkboxNames();
    const { serverTimestamp } = firebase.firestore.FieldValue;
    db.collection("taken").doc().set({
        createdAt: serverTimestamp(),
        taakNaam: checkedItem1,
        checked: checkedListDB.taak1,
        gebruiker: gebruikerDB,
        uid: GoogleUID,
        gebruikerNaam: GoogleUserName
    });

    db.collection("taken").doc().set({
        createdAt: serverTimestamp(),
        taakNaam: checkedItem2,
        checked: checkedListDB.taak2,
        gebruiker: gebruikerDB,
        uid: GoogleUID,
        gebruikerNaam: GoogleUserName
    });

    db.collection("taken").doc().set({
        createdAt: serverTimestamp(),
        taakNaam: checkedItem3,
        checked: checkedListDB.taak3,
        gebruiker: gebruikerDB,
        uid: GoogleUID,
        gebruikerNaam: GoogleUserName
    });

    db.collection("taken").doc().set({
        createdAt: serverTimestamp(),
        taakNaam: checkedItem4,
        checked: checkedListDB.taak4,
        gebruiker: gebruikerDB,
        uid: GoogleUID,
        gebruikerNaam: GoogleUserName
    });
}



function checkboxNames() {

    let taak1 = document.getElementById('taak1');
    let taak2 = document.getElementById('taak2');
    let taak3 = document.getElementById('taak3');
    let taak4 = document.getElementById('taak4');
    checkedItem1 = taak1DB;
    if (taak1.checked === true){
        checkedListDB.taak1 = true;
    } else{
        checkedListDB.taak1 = false;

    }

    checkedItem2 = taak2DB;
    if (taak2.checked === true){
        checkedListDB.taak2 = true;
    } else{
        checkedListDB.taak2 = false;

    }

    checkedItem3 = taak3DB;
    if (taak3.checked === true){
        checkedListDB.taak3 = true;
    } else{
        checkedListDB.taak3 = false;

    }

    checkedItem4 = taak4DB;
    if (taak4.checked === true){
        checkedListDB.taak4 = true;
    } else{
        checkedListDB.taak4 = false;

    }

}
lijstRef = db.collection("taken");
unsubscribe = lijstRef;

lijstRef.orderBy('gebruiker').limit(3)
    .onSnapshot(querySnapshot => {




        const items = querySnapshot.docs.map(doc => {




           return `<li>${doc.data().gebruiker}</li>
                    <li>${doc.data().checked}</li>
                    <li>${doc.data().createdAt}</li>`;



        });



            takenlijst.innerHTML = items.join('');




    });


/*
function createThing() {

    let funct2Var = funct.value;
    let testTaak = funcCol.collection("functies").doc(functVar).set(taak1);
    const { serverTimestamp } = firebase.firestore.FieldValue;
    const {testTaak} = firebase.firestore.FieldValue;
    thingsRef.add({

        testTaak: testTaak(),
        createdAt: serverTimestamp()
    });
}
function checkboxNames() {
    checkedListDB = false;
    let taak1 = document.getElementById('taak1');
    let taak2 = document.getElementById('taak2');
    let taak3 = document.getElementById('taak3');
    let taak4 = document.getElementById('taak4');
    if (taak1.checked === true){
        let checkedListDB = "true";
    } else{
        checkedListDB = "false";
    }

}


 */