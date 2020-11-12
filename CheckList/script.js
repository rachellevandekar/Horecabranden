

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

const gebruiker= document.getElementById("gebruiker");

const elementsList = document.querySelectorAll("#ListItem1, #ListItem2, #ListItem3, #ListItem4");
const elementsArray = [...elementsList];

let gebruikerChecklists = [{
    gebruiker: "Kok",
    listItem1: "Gas uit",
    listItem2: "Afzuigkap uit",
    listItem3: "Afzuigkap schoonmaken",
    listItem4: "Vloer boenen",
},
    {
        gebruiker: "Afwasser",
        listItem1: "Spoelmachine uit",
        listItem2: "Stroomschakelaar uit",
        listItem3: "Rookmelder checken",
        listItem4: "Vloer boenen",
    },
    {
        gebruiker: "Bediende",
        listItem1: "Gasten de zaak uit",
        listItem2: "Stopcontacten check",
        listItem3: "Stofzuigen in hoekjes",
        listItem4: "Vloer boenen",
    },
    {
        gebruiker: "Barman",
        listItem1: "Kassa uit",
        listItem2: "Vluchtroute checken",
        listItem3: "Sloten checken",
        listItem4: "Vloer boenen",
    }
];


let gebruikerNummer= -1;
let score = 0;


function volgendeGebruiker() {
    if (gebruikerNummer >= 3){

    } else {
        gebruikerNummer++;
        renderChecklist()
    }

}

function vorigeGebruiker() {
    if (gebruikerNummer <= 0) {

    } else {
        --gebruikerNummer;
        renderChecklist();
    }


}

function renderChecklist() {

    let q = gebruikerChecklists[gebruikerNummer];


    gebruiker.innerHTML = "<p>" + q.gebruiker + "</p>";
    listItem1.innerHTML = q.listItem1;
    listItem2.innerHTML = q.listItem2;
    listItem3.innerHTML = q.listItem3;
    listItem4.innerHTML = q.listItem4;

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

