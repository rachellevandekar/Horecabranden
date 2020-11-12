

/*var checked = document.querySelectorAll("input[type='checkbox']");


function checkboxCheck() {

    if (checked.length === 0) {
        console.log('niks aangevinkt');
    } else {
        console.log(checked.length + 'checkboxes aangevinkt');
    }

}




function checkboxCheck() {
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    for(let i = 0; i < checkboxes.length; i++) {
        console.log(checkboxes.length + 'checkboxes aangevinkt');
    }
}



function checkboxCheck() {

    if (document.querySelectorAll('input[type="checkbox"]:checked').length === document.querySelectorAll('input[type="checkbox"]').length) {
        console.log('All checkboxes are checked');
    } else {
        console.log('Some checkboxes are not checked');
    }

}

*/

document.querySelector(".submit").addEventListener("click", checkboxNames);

document.querySelector(".volgende-gebruiker").addEventListener("click", volgendeGebruiker);

document.querySelector(".vorige-gebruiker").addEventListener("click", vorigeGebruiker);

const listItem1 = document.getElementById("ListItem1");
const listItem2 = document.getElementById("ListItem2");
const listItem3 = document.getElementById("ListItem3");
const listItem4 = document.getElementById("ListItem4");

const BuddylistItem1 = document.getElementById("BuddyListItem1");
const BuddylistItem2 = document.getElementById("BuddyListItem2");
const BuddylistItem3 = document.getElementById("BuddyListItem3");
const BuddylistItem4 = document.getElementById("BuddyListItem4");

const buddy = document.getElementById("buddy");

const gebruiker = document.getElementById("gebruiker");

const elementsList = document.querySelectorAll("#ListItem1, #ListItem2, #ListItem3, #ListItem4");
const elementsArray = [...elementsList];

let gebruikerChecklists = [{
    gebruiker, buddy: "Kok",
    listItem1, BuddylistItem1: "Gas uit",
    listItem2, BuddylistItem2: "Afzuigkap uit",
    listItem3, BuddylistItem3: "Afzuigkap schoonmaken",
    listItem4, BuddylistItem4: "Vloer boenen",
},
    {
        gebruiker, buddy: "Afwasser",
        listItem1, BuddylistItem1: "Spoelmachine uit",
        listItem2, BuddylistItem2: "Stroomschakelaar uit",
        listItem3, BuddylistItem3: "Rookmelder checken",
        listItem4, BuddylistItem4: "Vloer boenen",
    },
    {
        gebruiker, buddy: "Bediende",
        listItem1: "Gasten de zaak uit",
        listItem2, BuddylistItem2: "Stopcontacten check",
        listItem3, BuddylistItem3: "Stofzuigen in hoekjes",
        listItem4, BuddylistItem4: "Vloer boenen",
    },
    {
        gebruiker, buddy: "Barman",
        listItem1, BuddylistItem1: "Kassa uit",
        listItem2, BuddylistItem2: "Vluchtroute checken",
        listItem3, BuddylistItem3: "Sloten checken",
        listItem4, BuddylistItem4: "Vloer boenen",
    }
];


let gebruikerNummer= -1;

let buddyNummer= -1;


function volgendeGebruiker() {
    if (gebruikerNummer && buddyNummer >= 3){

    } else {
        gebruikerNummer++;
        buddyNummer ++;
        renderChecklist()
    }

}

function vorigeGebruiker() {
    if (gebruikerNummer && buddyNummer <= 0) {

    } else {
        --gebruikerNummer;
        --buddyNummer;
        renderChecklist();
    }


}

function renderChecklist() {

    let q = gebruikerChecklists[gebruikerNummer];

    let w = gebruikerChecklists[buddyNummer];


    gebruiker.innerHTML = "<p>" + q.gebruiker + "</p>";
    listItem1.innerHTML = q.listItem1;
    listItem2.innerHTML = q.listItem2;
    listItem3.innerHTML = q.listItem3;
    listItem4.innerHTML = q.listItem4;

    buddy.innerHTML = "<p>" + w.buddy + "</p>";
    BuddylistItem1.innerHTML = w.BuddylistItem1;
    BuddylistItem2.innerHTML = w.BuddylistItem2;
    BuddylistItem3.innerHTML = w.BuddylistItem3;
    BuddylistItem4.innerHTML = w.BuddylistItem4;

}


function checkboxCheck(){
    let inputElems = document.getElementsByTagName("input"),
        count = 0;
    for (let i=0; i<inputElems.length; i++) {
        if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
            count++;
            alert(document.querySelectorAll('input[type="checkbox"]:checked').length);
            alert(document.getElementById())
        }
    }}

    function checkboxNames() {
        let inputElems = document.getElementsByTagName("input"),
            count = 0;
        for (let i = 0; i < inputElems.length; i++) {
            if (inputElems[i].type === "checkbox" && inputElems[i].checked === false) {
                count++;

                console.log(elementsArray[i]);

            }

        }

    }

